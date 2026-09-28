/* Vocabulary browser and the review page. */
(function (A) {
  'use strict';
  const U = A.util;
  const S = () => A.store;

  const F = { q: '', topic: '', status: '', art: '', level: '' };
  const STATUS = [['', 'كل الحالات'], ['new', 'جديدة'], ['learning', 'قيد التعلّم'], ['known', 'معروفة'], ['mastered', 'متقنة'], ['weak', 'تحتاج تدريبًا']];
  const ARTS = [['', 'الكل'], ['der', 'der'], ['die', 'die'], ['das', 'das'], ['none', 'بدون أداة']];

  function filtered() {
    const q = U.norm(F.q);
    return A.data.vocab.filter(w =>
      (!F.level || w.level === F.level) &&
      (!F.topic || w.topic === F.topic) &&
      (!F.art || (F.art === 'none' ? !w.art : w.art === F.art)) &&
      (!F.status || S().wordStatus(w.id) === F.status) &&
      (!q || U.norm(w.de).indexOf(q) >= 0 || U.norm(w.ar).indexOf(q) >= 0 || U.norm(w.en).indexOf(q) >= 0));
  }

  const opt = (arr, cur) => arr.map(o => '<option value="' + o[0] + '"' + (o[0] === cur ? ' selected' : '') + '>' + U.esc(o[1]) + '</option>').join('');

  function drawList() {
    const list = filtered();
    const box = document.getElementById('vList');
    const cnt = document.getElementById('vCount');
    if (cnt) cnt.textContent = list.length + ' كلمة';
    if (!box) return;
    box.innerHTML = list.length ? '<div class="wGrid">' + list.slice(0, 120).map(A.wordCard).join('') + '</div>' +
      (list.length > 120 ? '<p class="muted center">تظهر أول 120 كلمة. استخدم البحث أو الفلاتر لتضييق النتائج.</p>' : '')
      : '<div class="empty">لا توجد كلمات تطابق الفلاتر.</div>';
  }

  A.views.vocab = (el) => {
    if (!F.level) F.level = S().state.level;
    const topics = [['', 'كل المواضيع']].concat(Object.keys(A.data.topics)
      .filter(k => A.data.vocab.some(w => w.topic === k && (!F.level || w.level === F.level)))
      .map(k => [k, A.data.topics[k].icon + ' ' + A.data.topics[k].ar]));
    const levels = [['', 'كل المستويات']].concat(A.data.levels.map(l => [l.id, l.id]));
    el.innerHTML = '<h1 class="pageTitle">المفردات <small class="muted" id="vCount"></small></h1>' +
      '<div class="filters"><input id="vQ" class="input" placeholder="ابحث بالألمانية أو العربية أو الإنجليزية" value="' + U.esc(F.q) + '">' +
      '<select id="vLevel" class="input">' + opt(levels, F.level) + '</select>' +
      '<select id="vTopic" class="input">' + opt(topics, F.topic) + '</select>' +
      '<select id="vStatus" class="input">' + opt(STATUS, F.status) + '</select>' +
      '<select id="vArt" class="input">' + opt(ARTS, F.art) + '</select></div>' +
      '<div class="btnRow"><button class="btn primary" act="vocabQuiz">تدرّب على الكلمات المعروضة</button><button class="btn" act="vocabArt">تدريب الأدوات der die das</button><button class="btn" act="vocabReset">مسح الفلاتر</button></div>' +
      '<div id="vList"></div>';
    const bind = (id, key, ev) => document.getElementById(id).addEventListener(ev || 'change', e => {
      F[key] = e.target.value;
      if (key === 'level') { F.topic = ''; A.views.vocab(el); return; }
      drawList();
    });
    bind('vQ', 'q', 'input'); bind('vLevel', 'level'); bind('vTopic', 'topic'); bind('vStatus', 'status'); bind('vArt', 'art');
    drawList();
  };

  const quizBack = () => ({
    onDone: (res, e) => { e.innerHTML = A.quiz.summary(res, '', '<a class="btn primary" href="#/vocab">العودة إلى المفردات</a>'); },
    onExit: () => A.route()
  });

  A.actions.vocabQuiz = () => {
    const list = filtered();
    if (!list.length) return U.toast('لا توجد كلمات للتدريب.');
    const pick = U.shuffle(list.filter(w => !S().isLearned(w.id))).concat(U.shuffle(list.filter(w => S().isLearned(w.id)))).slice(0, 12);
    A.quiz.run(A.main, U.shuffle(pick).map(w => A.gen.word(w)), quizBack());
  };
  A.actions.vocabArt = () => {
    const list = filtered().filter(w => w.art && !/Plural/.test(w.pl));
    if (!list.length) return U.toast('لا توجد أسماء في هذه النتائج.');
    A.quiz.run(A.main, U.sample(list, 12).map(w => A.gen.word(w, 'article')), quizBack());
  };
  A.actions.vocabReset = () => { F.q = ''; F.topic = ''; F.status = ''; F.art = ''; F.level = S().state.level; A.route(); };

  /* Review page. */
  function counts(level) {
    const c = { new: 0, learning: 0, known: 0, mastered: 0, weak: 0 };
    A.data.vocab.filter(w => w.level === level).forEach(w => { c[S().wordStatus(w.id)] += 1; });
    return c;
  }

  function frequentWrong(level) {
    const st = S().state;
    return A.data.vocab.filter(w => w.level === level && st.words[w.id] && st.words[w.id].bad > 0)
      .sort((a, b) => st.words[b.id].bad - st.words[a.id].bad);
  }

  function reviewQuiz(kind) {
    const st = S().state;
    const level = st.level;
    let qs = [];
    if (kind === 'due') qs = U.shuffle(S().dueWords(level)).slice(0, 15).map(w => A.gen.word(w));
    if (kind === 'weak') qs = frequentWrong(level).slice(0, 12).map(w => A.gen.word(w, U.pick(['arDe', 'type', 'deAr'])));
    if (kind === 'learning') qs = U.sample(A.data.vocab.filter(w => w.level === level && S().wordStatus(w.id) === 'learning'), 12).map(w => A.gen.word(w));
    if (kind === 'known') qs = U.sample(A.data.vocab.filter(w => w.level === level && ['known', 'mastered'].indexOf(S().wordStatus(w.id)) >= 0), 12).map(w => A.gen.word(w, 'type'));
    if (kind === 'new') qs = U.sample(A.data.vocab.filter(w => w.level === level && S().wordStatus(w.id) === 'new'), 10).map(w => A.gen.word(w, U.pick(['deAr', 'listen'])));
    if (kind === 'grammar') {
      Object.keys(st.gReview).map(id => A.data.lessonMap[id]).filter(l => l && l.level === level).forEach(l => {
        qs = qs.concat(U.sample(l.ex, 3).map(e => A.gen.custom(e, l)));
      });
      qs = U.shuffle(qs).slice(0, 12);
    }
    if (kind === 'mistakes') {
      const ids = [];
      st.mistakes.forEach(m => {
        if (m.w && A.data.wordMap[m.w] && ids.indexOf('w' + m.w) < 0) { ids.push('w' + m.w); qs.push(A.gen.word(A.data.wordMap[m.w])); }
        else if (m.l && A.data.lessonMap[m.l] && ids.indexOf('l' + m.l) < 0) {
          const l = A.data.lessonMap[m.l];
          if (l.ex.length) { ids.push('l' + m.l); qs.push(A.gen.custom(U.pick(l.ex), l)); }
        }
      });
      qs = qs.slice(0, 12);
    }
    return qs;
  }

  A.views.review = (el, kind) => {
    const level = S().state.level;
    if (kind) {
      A.quiz.run(el, reviewQuiz(kind), {
        onDone: (res, e) => {
          S().log('🔁', 'جلسة مراجعة: ' + res.pct + '%');
          e.innerHTML = A.quiz.summary(res, '', '<a class="btn primary" href="#/review">العودة إلى المراجعة</a>');
        },
        onExit: () => { location.hash = '#/review'; }
      });
      return;
    }
    const st = S().state;
    const c = counts(level);
    const due = S().dueWords(level).length;
    const weakW = frequentWrong(level);
    const gr = Object.keys(st.gReview).map(id => A.data.lessonMap[id]).filter(l => l && l.level === level);
    const card = (k, icon, label, n, hint) => '<a class="stat link' + (n ? '' : ' dim') + '" href="' + (n ? '#/review/' + k : '#/review') + '"><span class="sIcon">' + icon + '</span><b>' + n + '</b><small>' + label + '</small><small class="muted">' + hint + '</small></a>';
    el.innerHTML = '<h1 class="pageTitle">المراجعة</h1>' +
      '<div class="hero small"><div class="heroMain"><h2>' + (due ? due + ' كلمة مستحقة للمراجعة اليوم' : 'لا توجد كلمات مستحقة الآن') + '</h2>' +
      '<p class="muted">نعيد عرض كل كلمة في الوقت المناسب: بعد يوم، ثم يومين، ثم أربعة أيام وهكذا. الخطأ يعيد الكلمة إلى البداية.</p>' +
      (due ? '<a class="btn primary big" href="#/review/due">ابدأ المراجعة</a>' : '<a class="btn" href="#/review/new">تعلّم كلمات جديدة</a>') + '</div></div>' +
      '<div class="statGrid">' +
      card('new', '🆕', 'كلمات جديدة', c.new, 'لم تتدرّب عليها بعد') +
      card('learning', '🌱', 'قيد التعلّم', c.learning, 'تحتاج تكرارًا') +
      card('known', '✅', 'تعلّمتها', c.known + c.mastered, 'منها ' + c.mastered + ' متقنة') +
      card('weak', '⚠️', 'أخطاء متكررة', weakW.length, 'كلمات أخطأت فيها') +
      '</div>' +
      '<div class="cols"><div class="card"><h3>قواعد تحتاج مراجعة</h3>' +
      (gr.length ? '<ul class="plain">' + gr.map(l => '<li><a href="#/lesson/' + l.id + '">' + l.icon + ' ' + U.esc(l.ar) + '</a><b class="low">' + st.gReview[l.id] + ' خطأ</b></li>').join('') + '</ul><a class="btn block" href="#/review/grammar">تدرّب على هذه القواعد</a>'
        : '<p class="muted">لا توجد نقاط قواعد مفتوحة. كل خطأ في تمارين القواعد يُضاف هنا تلقائيًا ويُحذف عندما تجيب صحيحًا.</p>') + '</div>' +
      '<div class="card"><h3>آخر أخطائك</h3>' +
      (st.mistakes.length ? '<ul class="wrongList">' + st.mistakes.slice(0, 8).map(m => '<li><span class="muted">' + U.esc(m.p) + '</span><div>إجابتك: <s>' + U.esc(m.g) + '</s> · الصحيح: ' + (/^[A-Za-zÄÖÜäöüß0-9]/.test(m.a) ? U.de(m.a) : '<b>' + U.esc(m.a) + '</b>') + '</div></li>').join('') + '</ul><a class="btn block" href="#/review/mistakes">تدرّب على أخطائي</a>'
        : '<p class="muted">لم تخطئ بعد، أو لم تبدأ التدريب.</p>') + '</div></div>' +
      (weakW.length ? '<div class="card"><h3>الكلمات الأكثر خطأ</h3><div class="wGrid">' + weakW.slice(0, 9).map(A.wordCard).join('') + '</div></div>' : '');
  };
})(window.App);
