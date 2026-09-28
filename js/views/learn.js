/* Lesson list and the lesson page with its five tabs. */
(function (A) {
  'use strict';
  const U = A.util;
  const S = () => A.store;

  const KIND = { sound: 'نطق', situation: 'موقف يومي', vocab: 'مفردات', grammar: 'قواعد' };
  const TABS = [['learn', 'الشرح'], ['words', 'المفردات'], ['dialog', 'الحوار'], ['practice', 'التمارين'], ['test', 'الاختبار']];

  let learnQuery = '';

  function lessonState(l) {
    const L = S().state.lessons[l.id];
    if (L && L.done) return ['done', '✓ مكتمل · ' + L.test + '%'];
    if (L && L.tries) return ['tried', 'آخر اختبار ' + L.test + '%'];
    if (L) return ['started', 'بدأت'];
    return ['', ''];
  }

  function lessonCard(l) {
    const s = lessonState(l);
    return '<a class="lCard ' + s[0] + '" href="#/lesson/' + l.id + '"><span class="lIcon">' + l.icon + '</span>' +
      '<span class="lTxt"><small class="muted">' + l.num + ' · ' + KIND[l.kind] + '</small><b>' + U.esc(l.ar) + '</b>' + U.de(l.de) +
      (s[1] ? '<small class="lState">' + s[1] + '</small>' : '') + '</span></a>';
  }

  function listHtml(level) {
    const lessons = U.lessonsOf(level);
    const q = U.norm(learnQuery);
    const hit = l => !q || U.norm(l.ar + ' ' + l.de + ' ' + l.goal).indexOf(q) >= 0 ||
      U.wordsOfLesson(l).some(w => U.norm(w.de).indexOf(q) >= 0 || U.norm(w.ar).indexOf(q) >= 0);
    const shown = lessons.filter(hit);
    if (!shown.length) return '<div class="empty">لا توجد دروس تطابق بحثك.</div>';
    const units = A.data.units[level] || [[1, 'الدروس']];
    if (q) return '<div class="lGrid">' + shown.map(lessonCard).join('') + '</div>';
    return units.map((u, i) => {
      const next = units[i + 1] ? units[i + 1][0] : 999;
      const ls = shown.filter(l => l.num >= u[0] && l.num < next);
      if (!ls.length) return '';
      const done = ls.filter(l => (S().state.lessons[l.id] || {}).done).length;
      return '<section class="unit"><h3>' + U.esc(u[1]) + ' <small class="muted">' + done + '/' + ls.length + '</small></h3><div class="lGrid">' + ls.map(lessonCard).join('') + '</div></section>';
    }).join('');
  }

  A.views.learn = (el) => {
    const st = S().state;
    const meta = U.levelMeta(st.level);
    el.innerHTML = '<h1 class="pageTitle">الدروس</h1>' +
      '<div class="seg levelTabs">' + A.data.levels.map(l => '<button act="setLevel" val="' + l.id + '" class="' + (l.id === st.level ? 'on' : '') + '">' + l.id + '</button>').join('') + '</div>' +
      '<p class="muted">' + st.level + ' · ' + U.esc(meta.desc) + (meta.full ? '' : ' · <b>محتوى تمهيدي</b>') + '</p>' +
      '<input id="learnSearch" class="input" placeholder="ابحث عن درس أو كلمة بالعربية أو الألمانية" value="' + U.esc(learnQuery) + '">' +
      '<div id="learnList">' + listHtml(st.level) + '</div>';
    const inp = document.getElementById('learnSearch');
    inp.addEventListener('input', () => {
      learnQuery = inp.value;
      document.getElementById('learnList').innerHTML = listHtml(st.level);
    });
  };

  A.actions.setLevel = (el, v) => {
    S().state.level = v;
    S().save();
    A.renderShell();
    A.route();
  };

  /* Lesson page. */
  let stepIdx = {};

  function stepHtml(s) {
    if (s.tip) return '<div class="tipBox">💡 ' + U.fmt(s.tip) + '</div>';
    if (s.link) return '<a class="btn block" href="' + s.link + '">' + U.esc(s.label) + '</a>';
    let h = '<h3>' + U.esc(s.h) + '</h3>';
    if (s.p) h += '<p class="stepText">' + U.fmt(s.p) + '</p>';
    if (s.table) {
      h += '<div class="tableWrap"><table class="tbl"><thead><tr>' + s.table.head.map(c => '<th>' + U.fmt(c) + '</th>').join('') + '</tr></thead><tbody>' +
        s.table.rows.map(r => '<tr>' + r.map(c => '<td>' + U.fmt(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
    }
    return h;
  }

  function phrasesHtml(l) {
    return '<h3>جمل مفيدة</h3><p class="muted small">اضغط على أي جملة للاستماع، أو على 🐢 للنطق البطيء.</p><ul class="phraseList">' +
      l.phrases.map(p => '<li><div>' + U.say(p.de) + '<small>' + U.esc(p.ar) + '</small></div><span>' + U.spk(p.de, true) + '</span></li>').join('') + '</ul>';
  }

  function tabLearn(l, box) {
    const cards = l.steps.slice();
    const merged = [];
    cards.forEach(c => {
      if ((c.tip || c.link) && merged.length) merged[merged.length - 1].extra.push(c);
      else merged.push({ main: c, extra: [] });
    });
    const pages = merged.length + (l.phrases.length ? 1 : 0);
    let i = U.clamp(stepIdx[l.id] || 0, 0, pages - 1);
    const draw = () => {
      stepIdx[l.id] = i;
      const isPhr = i >= merged.length;
      const body = isPhr ? phrasesHtml(l) : stepHtml(merged[i].main) + merged[i].extra.map(stepHtml).join('');
      const last = i === pages - 1;
      if (last) {
        const L = S().lesson(l.id);
        if (!L.read) { L.read = true; S().save(); }
      }
      box.innerHTML = (i === 0 ? '<div class="goalBox"><b>🎯 هدف الدرس</b><p>' + U.esc(l.goal) + '</p></div>' : '') +
        '<div class="card stepCard">' + body + '</div>' +
        '<div class="pager"><button class="btn" act="stepGo" val="-1"' + (i === 0 ? ' disabled' : '') + '>السابق</button>' +
        '<span class="dots">' + Array.from({ length: pages }, (x, j) => '<i class="' + (j === i ? 'on' : j < i ? 'seen' : '') + '"></i>').join('') + '</span>' +
        (last ? '<a class="btn primary" href="#/lesson/' + l.id + '/words">إلى المفردات</a>' : '<button class="btn primary" act="stepGo" val="1">التالي</button>') + '</div>';
    };
    A.actions.stepGo = (e, v) => { i = U.clamp(i + Number(v), 0, pages - 1); draw(); window.scrollTo(0, 0); };
    draw();
  }

  const STATUS = { new: ['جديدة', ''], learning: ['قيد التعلّم', ''], known: ['معروفة', 'ok'], mastered: ['متقنة', 'ok'], weak: ['تحتاج تدريبًا', 'bad'] };
  A.wordCard = (w) => {
    const st = STATUS[S().wordStatus(w.id)];
    const full = U.full(w);
    const pl = /Plural/.test(w.pl) ? 'جمع فقط' : (w.pl ? 'الجمع: ' + U.de('die ' + w.pl) : '');
    return '<div class="wCard ' + U.artCls(w.art) + '"><div class="wTop"><span class="wDe" dir="ltr" lang="de">' + U.wordHtml(w) + '</span>' +
      '<span>' + U.spk(full, true) + '</span></div>' +
      '<div class="wAr">' + U.esc(w.ar) + (w.en ? ' <small class="muted" dir="ltr">' + U.esc(w.en) + '</small>' : '') + '</div>' +
      (pl ? '<div class="wPl small">' + pl + '</div>' : '') +
      (w.ex ? '<div class="wEx">' + U.say(w.ex) + '<small>' + U.esc(w.exAr) + '</small></div>' : '') +
      '<div class="wFoot"><span class="pill ' + st[1] + '">' + st[0] + '</span>' + '<span class="muted small">' + '●'.repeat(w.diff) + '○'.repeat(3 - w.diff) + '</span></div></div>';
  };

  function tabWords(l, box) {
    const words = U.wordsOfLesson(l);
    if (!words.length) {
      box.innerHTML = '<div class="empty">هذا الدرس يركّز على القواعد. الكلمات المرتبطة به موجودة في الجمل المفيدة والتمارين.</div><a class="btn primary block" href="#/lesson/' + l.id + '/practice">إلى التمارين</a>';
      return;
    }
    const learned = words.filter(w => S().isLearned(w.id)).length;
    box.innerHTML = '<div class="card rowCard"><div><b>' + words.length + ' كلمة</b><p class="muted small">ثبّتّ منها ' + learned + '. الكلمة تُعدّ مثبّتة بعد أن تجيب عنها صحيحًا عدة مرات في أيام مختلفة.</p></div>' +
      '<button class="btn primary" act="lessonWords" val="' + l.id + '">تدرّب على هذه الكلمات</button></div>' +
      '<div class="wGrid">' + words.map(A.wordCard).join('') + '</div>';
  }

  function tabDialog(l, box) {
    if (!l.dialog.length) { box.innerHTML = '<div class="empty">لا يوجد حوار في هذا الدرس.</div>'; return; }
    const who = [];
    l.dialog.forEach(d => { if (who.indexOf(d.who) < 0) who.push(d.who); });
    box.innerHTML = '<div class="btnRow"><button class="btn primary" act="playDialog" val="' + l.id + '">▶ استمع إلى الحوار كاملًا</button>' +
      '<button class="btn" act="toggleAr">إظهار أو إخفاء الترجمة</button></div>' +
      '<div class="chat" id="chat">' + l.dialog.map(d => '<div class="bubble ' + (who.indexOf(d.who) % 2 ? 'me' : 'npc') + '"><span class="who">' + U.esc(d.who) + '</span>' +
        U.say(d.de) + ' ' + U.spk(d.de, true) + '<small class="arLine">' + U.esc(d.ar) + '</small></div>').join('') + '</div>' +
      '<p class="muted small">نصيحة: استمع مرة مع الترجمة، ثم أخفِ الترجمة واستمع مرة أخرى، ثم اقرأ دور أحد الشخصين بصوت مرتفع.</p>' +
      '<a class="btn block" href="#/lesson/' + l.id + '/practice">إلى التمارين</a>';
  }
  A.actions.playDialog = (el, v) => A.speech.sayAll(A.data.lessonMap[v].dialog.map(d => d.de));
  A.actions.toggleAr = () => { const c = document.getElementById('chat'); if (c) c.classList.toggle('noAr'); };

  function tabPractice(l, box) {
    const L = S().lesson(l.id);
    const g = S().state.grammar[l.id];
    box.innerHTML = '<div class="card center"><h3>تمارين الدرس</h3><p class="muted">اختيار من متعدد، ترجمة، إكمال الفراغ، ترتيب الجمل، استماع وحوار. الأخطاء تعود إليك بسؤال مشابه.</p>' +
      (g && g.n ? '<p>دقتك في هذا الدرس حتى الآن: <b>' + U.pct(g.ok, g.n) + '%</b></p>' : '') +
      '<button class="btn primary big" act="startPractice" val="' + l.id + '">ابدأ التمارين</button></div>';
    A.actions.startPractice = () => {
      A.quiz.run(box, A.gen.lessonPractice(l), {
        onDone: (res, el) => {
          L.ex = Math.max(L.ex, res.pct);
          S().log('🎯', 'تمارين درس ' + l.ar + ': ' + res.pct + '%');
          S().save();
          el.innerHTML = A.quiz.summary(res, '<p class="muted">' + (res.pct >= 70 ? 'أنت جاهز لاختبار الدرس.' : 'أعد التمارين مرة أخرى قبل الاختبار.') + '</p>',
            '<button class="btn" act="startPractice">أعد التمارين</button><a class="btn primary" href="#/lesson/' + l.id + '/test">اختبار الدرس</a>');
        },
        onExit: () => tabPractice(l, box)
      });
    };
  }

  function tabTest(l, box) {
    const L = S().lesson(l.id);
    box.innerHTML = '<div class="card center"><h3>الاختبار القصير</h3><p class="muted">8 أسئلة بدون تصحيح فوري. تحتاج <b>70%</b> لإكمال الدرس.</p>' +
      (L.tries ? '<p>أفضل نتيجة: <b>' + L.test + '%</b> · عدد المحاولات: ' + L.tries + '</p>' : '') +
      '<button class="btn primary big" act="startTest" val="' + l.id + '">ابدأ الاختبار</button></div>';
    A.actions.startTest = () => {
      A.quiz.run(box, A.gen.lessonTest(l), {
        mode: 'test', retry: false,
        onDone: (res, el) => {
          const fresh = S().completeLesson(l.id, res.pct);
          const next = U.lessonsOf(l.level).find(x => x.num > l.num);
          const extra = res.pct >= 70
            ? '<p>' + (fresh ? '🎉 أكملت هذا الدرس وحصلت على ' + S().XP.lesson + ' نقطة إضافية.' : 'نجحت مرة أخرى، أحسنت.') + '</p>'
            : '<p>تحتاج 70% لإكمال الدرس. راجع النقاط أدناه، ثم أعد التمارين وجرّب الاختبار مرة أخرى.</p>';
          el.innerHTML = A.quiz.summary(res, extra,
            (res.pct >= 70 && next ? '<a class="btn primary" href="#/lesson/' + next.id + '">الدرس التالي</a>' : '<a class="btn primary" href="#/lesson/' + l.id + '/practice">أعد التمارين</a>') +
            '<button class="btn" act="startTest">أعد الاختبار</button>');
          A.updateTop();
        },
        onExit: () => tabTest(l, box)
      });
    };
  }

  A.actions.lessonWords = (el, v) => {
    const l = A.data.lessonMap[v];
    const words = U.shuffle(U.wordsOfLesson(l));
    const box = document.getElementById('tabBox');
    const due = words.filter(w => !S().isLearned(w.id));
    const pickW = (due.length >= 6 ? due : words).slice(0, 10);
    A.quiz.run(box, pickW.map(w => A.gen.word(w)), {
      onDone: (res, e) => { e.innerHTML = A.quiz.summary(res, '', '<button class="btn" act="lessonWords" val="' + l.id + '">جولة أخرى</button><a class="btn primary" href="#/lesson/' + l.id + '/practice">تمارين الدرس</a>'); },
      onExit: () => A.route()
    });
  };

  A.views.lesson = (el, id, tab) => {
    const l = A.data.lessonMap[id];
    if (!l) { el.innerHTML = '<div class="empty">الدرس غير موجود. <a href="#/learn">العودة إلى الدروس</a></div>'; return; }
    tab = TABS.some(t => t[0] === tab) ? tab : 'learn';
    const st = S().state;
    if (st.level !== l.level) { st.level = l.level; A.renderShell(); }
    st.lastLesson = l.id;
    S().lesson(l.id);
    S().save();
    const list = U.lessonsOf(l.level);
    const idx = list.indexOf(l);
    el.innerHTML = '<div class="lessonHead"><a class="linkBtn" href="#/learn">→ الدروس</a>' +
      '<div class="lhMain"><span class="lIcon big">' + l.icon + '</span><div><small class="muted">' + l.level + ' · الدرس ' + l.num + ' · ' + KIND[l.kind] + '</small><h1>' + U.esc(l.ar) + '</h1>' + U.say(l.de) + '</div></div></div>' +
      '<nav class="tabs">' + TABS.map(t => '<a href="#/lesson/' + l.id + '/' + t[0] + '" class="' + (t[0] === tab ? 'on' : '') + '">' + t[1] + '</a>').join('') + '</nav>' +
      '<div id="tabBox"></div>' +
      '<div class="lessonNav">' + (list[idx - 1] ? '<a class="linkBtn" href="#/lesson/' + list[idx - 1].id + '">→ ' + U.esc(list[idx - 1].ar) + '</a>' : '<span></span>') +
      (list[idx + 1] ? '<a class="linkBtn" href="#/lesson/' + list[idx + 1].id + '">' + U.esc(list[idx + 1].ar) + ' ←</a>' : '') + '</div>';
    const box = document.getElementById('tabBox');
    ({ learn: tabLearn, words: tabWords, dialog: tabDialog, practice: tabPractice, test: tabTest })[tab](l, box);
  };
})(window.App);
