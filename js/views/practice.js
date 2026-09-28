/* Practice hub with focused training modes, and the daily challenge. */
(function (A) {
  'use strict';
  const U = A.util;
  const S = () => A.store;
  const G = () => A.gen;

  const levelWords = () => A.data.vocab.filter(w => w.level === S().state.level);
  const activePhrases = () => {
    const ids = G().activeLessons(S().state.level).map(l => l.id);
    return G().sentPool(S().state.level, ids);
  };

  /* Each mode: [key, icon, title, description, builder, A1 only] */
  const MODES = [
    ['vocab', '🗂️', 'مفردات حسب الموضوع', 'اختر موضوعًا وتدرّب على كلماته', null, false],
    ['listen', '🎧', 'الاستماع', 'استمع إلى كلمات وجمل واختر المعنى', () => {
      const ws = U.sample(levelWords(), 5).map(w => G().word(w, 'listen'));
      const ph = activePhrases();
      return ws.concat(U.sample(ph, 5).map(s => G().sent(s, 'listenS', ph)));
    }, false],
    ['build', '🧱', 'بناء الجمل', 'رتّب الكلمات لتكوين جملة صحيحة', () => {
      const ph = activePhrases();
      return U.sample(ph.filter(s => s.de.split(' ').length >= 3), 10).map(s => G().sent(s, 'order', ph));
    }, false],
    ['translate', '✍️', 'الترجمة', 'ترجم جملًا قصيرة من العربية إلى الألمانية', () => {
      const ph = activePhrases();
      return U.sample(ph, 8).map(s => G().sent(s, 'tr', ph));
    }, false],
    ['articles', '🏷️', 'der die das', 'تدرّب على أدوات الأسماء', () => U.sample(levelWords().filter(w => w.art && !/Plural/.test(w.pl)), 15).map(w => G().word(w, 'article')), false],
    ['conj', '⚙️', 'تصريف الأفعال', 'صرّف الأفعال المهمة مع كل الضمائر', () => {
      const vs = A.data.verbs;
      return U.sample(vs, 6).map(v => G().conj(v, 'choice')).concat(U.sample(vs, 3).map(v => G().conj(v, 'type')), U.sample(vs, 3).map(v => G().verbFill(v)));
    }, true],
    ['numbers', '🔢', 'الأرقام', 'استمع إلى الأرقام واقرأها واكتبها', () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => G().num(['listen', 'read', 'listen', 'write'][i % 4])), true],
    ['time', '🕐', 'الوقت', 'halb و Viertel و Uhr', () => [0, 1, 2, 3, 4, 5, 6, 7].map(() => G().time()), true],
    ['shop', '🛍️', 'المتجر التفاعلي', 'اسأل عن الأسعار واشترِ وارفض بأدب', () => ['hear', 'ask', 'buy', 'expensive', 'hear', 'ask', 'buy', 'hear'].map(k => G().shop(k)).concat([G().price(), G().price()]), true],
    ['reading', '📖', 'القراءة', 'نصوص قصيرة مع أسئلة فهم', () => {
      let qs = [];
      U.sample(A.data.readings.filter(r => r.level === S().state.level), 2).forEach(r => { qs = qs.concat(G().reading(r)); });
      return qs;
    }, false],
    ['mistakes', '🩹', 'أخطائي', 'أسئلة مبنية على أخطائك السابقة', null, false]
  ];

  A.views.practice = (el, mode, arg) => {
    const level = S().state.level;
    if (mode === 'mistakes') { location.replace('#/review/mistakes'); return; }
    if (mode === 'vocab') return topicPick(el, arg);
    const m = MODES.find(x => x[0] === mode);
    if (m && m[4]) {
      A.quiz.run(el, m[4](), {
        onDone: (res, e) => {
          S().log(m[1], 'تمرين ' + m[2] + ': ' + res.pct + '%');
          e.innerHTML = A.quiz.summary(res, '', '<a class="btn" href="#/practice/' + m[0] + '" act="rerun">جولة أخرى</a><a class="btn primary" href="#/practice">كل التمارين</a>');
        },
        onExit: () => { location.hash = '#/practice'; }
      });
      return;
    }
    el.innerHTML = '<h1 class="pageTitle">التمارين</h1><p class="muted">تمارين مركّزة على مهارة واحدة. للجلسة المتكاملة جرّب <a href="#/daily">تحدي اليوم</a>.</p>' +
      '<div class="modeGrid">' + MODES.filter(x => !x[5] || level === 'A1').map(x =>
        '<a class="mode" href="#/practice/' + x[0] + '"><span class="mIcon">' + x[1] + '</span><b>' + x[2] + '</b><small class="muted">' + x[3] + '</small></a>').join('') + '</div>';
  };

  /* A link to the same hash does not fire hashchange, so re-run explicitly. */
  A.actions.rerun = (el, v, e) => { e.preventDefault(); A.route(); };

  function topicPick(el, topic) {
    const level = S().state.level;
    if (topic && A.data.topics[topic]) {
      const ws = A.data.vocab.filter(w => w.topic === topic);
      const pick = U.shuffle(ws.filter(w => !S().isLearned(w.id))).concat(U.shuffle(ws.filter(w => S().isLearned(w.id)))).slice(0, 12);
      A.quiz.run(el, U.shuffle(pick).map(w => G().word(w)), {
        onDone: (res, e) => { e.innerHTML = A.quiz.summary(res, '', '<a class="btn" href="#/practice/vocab/' + topic + '" act="rerun">جولة أخرى</a><a class="btn primary" href="#/practice/vocab">المواضيع</a>'); },
        onExit: () => { location.hash = '#/practice/vocab'; }
      });
      return;
    }
    const keys = Object.keys(A.data.topics).filter(k => A.data.vocab.some(w => w.topic === k && w.level === level));
    el.innerHTML = '<a class="linkBtn" href="#/practice">→ التمارين</a><h1 class="pageTitle">اختر موضوعًا</h1><div class="modeGrid">' + keys.map(k => {
      const ws = A.data.vocab.filter(w => w.topic === k);
      const l = ws.filter(w => S().isLearned(w.id)).length;
      const t = A.data.topics[k];
      return '<a class="mode" href="#/practice/vocab/' + k + '"><span class="mIcon">' + t.icon + '</span><b>' + U.esc(t.ar) + '</b><small class="muted">' + l + ' من ' + ws.length + ' كلمة مثبّتة</small><div class="bar"><i style="width:' + U.pct(l, ws.length) + '%"></i></div></a>';
    }).join('') + '</div>';
  }

  /* Daily challenge. */
  A.views.daily = (el, go) => {
    const st = S().state;
    const key = U.dayKey();
    const done = st.daily[key];
    if (go === 'start') {
      const qs = G().daily();
      A.quiz.run(el, qs, {
        onDone: (res, e) => {
          const first = st.daily[key] == null;
          st.daily[key] = Math.max(st.daily[key] || 0, res.pct);
          if (first) { S().addXp(S().XP.daily); S().log('☀️', 'أنهيت تحدي اليوم: ' + res.pct + '%'); }
          S().checkAch();
          S().save();
          A.updateTop();
          const weak = Object.keys(sectionScores(res)).filter(k => sectionScores(res)[k] < 60);
          e.innerHTML = A.quiz.summary(res,
            (first ? '<p>+' + S().XP.daily + ' نقطة لإنهاء جلسة اليوم.</p>' : '') +
            (weak.length ? '<p>ركّز غدًا على: <b>' + weak.join('، ') + '</b></p>' : '<p>أداء متوازن في كل الأقسام.</p>'),
            '<a class="btn primary" href="#/home">الصفحة الرئيسية</a><a class="btn" href="#/review">المراجعة</a>');
        },
        onExit: () => { location.hash = '#/daily'; }
      });
      return;
    }
    const due = S().dueWords(st.level).length;
    const ls = G().activeLessons(st.level);
    const last7 = [];
    for (let i = 6; i >= 0; i -= 1) {
      const k = U.dayKey(U.addDays(new Date(), -i));
      last7.push('<span class="dayDot' + (st.daily[k] != null ? ' on' : '') + '" title="' + k + '">' + (st.daily[k] != null ? '✓' : '') + '</span>');
    }
    el.innerHTML = '<h1 class="pageTitle">تحدي اليوم</h1>' +
      '<div class="hero small"><div class="heroMain"><h2>' + (done != null ? 'أنهيت جلسة اليوم بنتيجة ' + done + '%' : 'جلسة متكاملة من 15 إلى 25 دقيقة') + '</h2>' +
      '<p class="muted">تُبنى الجلسة من الدروس التي بدأتها (' + ls.length + ' درس) ومن ' + due + ' كلمة مستحقة للمراجعة.</p>' +
      '<div class="week">' + last7.join('') + '</div>' +
      '<a class="btn primary big" href="#/daily/start">' + (done != null ? 'جلسة إضافية' : 'ابدأ الآن') + '</a></div></div>' +
      '<div class="card"><h3>محتوى الجلسة</h3><ul class="plain plan">' +
      [['🗂️', 'المفردات', 'كلمات مستحقة للمراجعة وكلمات جديدة من دروسك'], ['🧩', 'القواعد', 'أسئلة من دروسك وتصريف فعل'], ['📖', 'القراءة', 'نص قصير مع أسئلة فهم'],
        ['✍️', 'الترجمة', 'ثلاث جمل من العربية إلى الألمانية'], ['🧱', 'بناء الجمل', 'ترتيب الكلمات'], ['🎧', 'الاستماع والنطق', 'كلمات وجمل وأرقام'], ['💬', 'الحوار', 'اختر الرد المناسب']]
        .map(x => '<li><span>' + x[0] + ' <b>' + x[1] + '</b></span><small class="muted">' + x[2] + '</small></li>').join('') + '</ul></div>';
  };

  function sectionScores(res) {
    const s = {};
    res.res.forEach(x => {
      if (!x.q.sec) return;
      const o = s[x.q.sec] || (s[x.q.sec] = { n: 0, ok: 0 });
      o.n += 1; if (x.ok) o.ok += 1;
    });
    const out = {};
    Object.keys(s).forEach(k => { out[k] = U.pct(s[k].ok, s[k].n); });
    return out;
  }
  A.sectionScores = sectionScores;
})(window.App);
