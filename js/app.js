/* Application shell: navigation, header, router and global click handling. */
(function (A) {
  'use strict';
  const U = A.util;

  A.NAV = [
    ['home', '🏠', 'الرئيسية'], ['learn', '📘', 'الدروس'], ['vocab', '🗂️', 'المفردات'], ['grammar', '🧩', 'القواعد'],
    ['practice', '🎯', 'التمارين'], ['daily', '☀️', 'تحدي اليوم'], ['roleplay', '🎭', 'محادثات'], ['review', '🔁', 'المراجعة'],
    ['progress', '📈', 'التقدّم'], ['test', '🏁', 'اختبار المستوى']
  ];
  const MOBILE = ['home', 'learn', 'daily', 'review'];

  A.renderShell = () => {
    const st = A.store.state;
    const lvls = A.data.levels.map(l => '<option value="' + l.id + '"' + (l.id === st.level ? ' selected' : '') + '>' + l.id + ' · ' + l.ar + '</option>').join('');
    document.getElementById('side').innerHTML =
      '<a class="brand" href="#/home"><span class="flagBar"><i></i><i></i><i></i></span><span><b dir="ltr" lang="de">Deutsch</b><small>تعلّم الألمانية خطوة بخطوة</small></span></a>' +
      '<nav class="sideNav">' + A.NAV.map(n => '<a href="#/' + n[0] + '" id="nav' + n[0] + '"><span>' + n[1] + '</span>' + n[2] + '</a>').join('') + '</nav>';
    document.getElementById('bottom').innerHTML = MOBILE.map(k => {
      const n = A.NAV.find(x => x[0] === k);
      return '<a href="#/' + k + '" id="mnav' + k + '"><span>' + n[1] + '</span>' + n[2] + '</a>';
    }).join('') + '<button act="moreMenu"><span>☰</span>المزيد</button>';
    document.getElementById('top').innerHTML =
      '<label class="lvlSel" title="المستوى"><select id="lvlSelect" act="noop">' + lvls + '</select></label>' +
      '<div class="topStats"><span class="tStat" title="أيام متتالية">🔥 <b id="tStreak">0</b></span><span class="tStat" title="نقاط الخبرة">⭐ <b id="tXp">0</b></span>' +
      '<button class="tBtn" act="toggleSlow" id="slowBtn" title="النطق البطيء">🐢</button></div>';
    document.getElementById('lvlSelect').addEventListener('change', e => {
      st.level = e.target.value;
      A.store.save();
      U.toast('تم الانتقال إلى مستوى ' + st.level);
      route();
    });
    A.updateTop();
  };

  A.updateTop = () => {
    const st = A.store.state;
    const s = document.getElementById('tStreak');
    if (s) s.textContent = A.store.streak();
    const x = document.getElementById('tXp');
    if (x) x.textContent = st.xp;
    const b = document.getElementById('slowBtn');
    if (b) b.classList.toggle('on', !!st.settings.slow);
  };

  A.main = null;
  function route() {
    const h = (location.hash || '#/home').replace(/^#\/?/, '');
    const parts = h.split('/');
    const name = A.views[parts[0]] ? parts[0] : 'home';
    if (A.quiz.cur && A.quiz.cur.el && !document.body.contains(A.quiz.cur.el)) A.quiz.cur = null;
    A.quiz.cur = null;
    A.speech.stop();
    document.body.classList.remove('moreOpen');
    A.main.innerHTML = '';
    A.views[name](A.main, parts[1], parts[2]);
    document.querySelectorAll('.sideNav a, #bottom a').forEach(a => a.classList.remove('on'));
    const n = document.getElementById('nav' + name);
    if (n) n.classList.add('on');
    const m = document.getElementById('mnav' + name);
    if (m) m.classList.add('on');
    A.updateTop();
    window.scrollTo(0, 0);
  }
  A.route = route;

  /* Global actions. */
  A.actions.say = (el, v) => A.speech.say(U.dec(v));
  A.actions.saySlow = (el, v) => A.speech.say(U.dec(v), true);
  A.actions.toggleSlow = () => {
    const st = A.store.state;
    st.settings.slow = !st.settings.slow;
    A.store.save();
    A.updateTop();
    U.toast(st.settings.slow ? '🐢 النطق البطيء مفعّل' : 'النطق بالسرعة العادية');
  };
  A.actions.moreMenu = () => document.body.classList.toggle('moreOpen');
  A.actions.go = (el, v) => { location.hash = U.dec(v); };
  A.actions.noop = () => {};

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[act]');
    if (!el) {
      if (document.body.classList.contains('moreOpen') && !e.target.closest('#side')) document.body.classList.remove('moreOpen');
      return;
    }
    const act = el.getAttribute('act');
    if (act === 'noop') return;
    const fn = A.actions[act];
    if (fn) {
      if (el.tagName === 'A' && !el.getAttribute('href')) e.preventDefault();
      fn(el, el.getAttribute('val'), e);
      A.updateTop();
    }
  });

  window.addEventListener('hashchange', route);

  A.start = () => {
    A.store.load();
    A.speech.init();
    A.main = document.getElementById('main');
    A.renderShell();
    route();
    if (A.store.noStorage) U.toast('تعذّر حفظ التقدّم في هذا المتصفح. تأكد أن التخزين المحلي مسموح.');
    window.addEventListener('beforeunload', A.store.saveNow);
    if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) navigator.serviceWorker.register('sw.js');
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', A.start);
  else A.start();
})(window.App);
