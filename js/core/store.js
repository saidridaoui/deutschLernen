/* Learner state kept in localStorage.
   Spaced repetition: each word sits in a box from 0 to 6. A correct answer moves it up
   and schedules it later, a wrong answer drops it to box 1 and makes it due again soon. */
(function (A) {
  'use strict';
  const U = A.util;
  const KEY = 'deutschLernenState';
  const DAY = 86400000;
  const INTERVALS = [0, 1, 2, 4, 8, 16, 35];
  const XP = { answer: 5, lesson: 40, daily: 30, roleplay: 20, test: 50 };

  const fresh = () => ({
    v: 1, created: Date.now(), level: 'A1', xp: 0, goal: 100,
    days: {}, streak: { cur: 0, best: 0, last: '' },
    lessons: {}, words: {}, grammar: {}, gReview: {}, skills: {},
    mistakes: [], activity: [], ach: {}, tests: {}, daily: {}, rp: {},
    stats: { n: 0, ok: 0 }, lastLesson: '', perfect: false,
    settings: { slow: false }
  });

  const S = A.store = { state: fresh(), XP };

  S.load = () => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        S.state = Object.assign(fresh(), saved);
        S.state.settings = Object.assign({ slow: false }, saved.settings || {});
      }
    } catch (e) {
      S.noStorage = true;
    }
  };

  let timer = 0;
  S.save = () => {
    clearTimeout(timer);
    timer = setTimeout(S.saveNow, 120);
  };
  S.saveNow = () => {
    try { localStorage.setItem(KEY, JSON.stringify(S.state)); } catch (e) { S.noStorage = true; }
  };

  S.today = () => {
    const k = U.dayKey();
    return S.state.days[k] || (S.state.days[k] = { xp: 0, n: 0, ok: 0 });
  };

  S.touchStreak = () => {
    const st = S.state;
    const k = U.dayKey();
    if (st.streak.last === k) return;
    const y = U.dayKey(U.addDays(new Date(), -1));
    st.streak.cur = st.streak.last === y ? st.streak.cur + 1 : 1;
    st.streak.last = k;
    st.streak.best = Math.max(st.streak.best, st.streak.cur);
  };

  S.streak = () => {
    const st = S.state;
    const y = U.dayKey(U.addDays(new Date(), -1));
    return (st.streak.last === U.dayKey() || st.streak.last === y) ? st.streak.cur : 0;
  };

  /* Consecutive days where the daily goal was reached. */
  S.goalStreak = () => {
    let n = 0;
    let d = new Date();
    if (!(S.state.days[U.dayKey(d)] || {}).goal) d = U.addDays(d, -1);
    while ((S.state.days[U.dayKey(d)] || {}).goal) { n += 1; d = U.addDays(d, -1); }
    return n;
  };

  S.addXp = (x) => {
    const st = S.state;
    S.touchStreak();
    const d = S.today();
    const before = d.xp;
    d.xp += x;
    st.xp += x;
    if (before < st.goal && d.xp >= st.goal) {
      d.goal = 1;
      S.log('🎯', 'أنجزت هدف اليوم');
      U.toast('🎯 أحسنت! وصلت إلى هدفك اليومي.');
    }
    S.save();
  };

  S.log = (icon, text) => {
    S.state.activity.unshift({ t: Date.now(), icon, text });
    S.state.activity = S.state.activity.slice(0, 40);
  };

  /* Spaced repetition update for one word. */
  S.srs = (id, ok) => {
    const w = S.state.words[id] || (S.state.words[id] = { box: 0, due: 0, seen: 0, ok: 0, bad: 0, last: 0 });
    w.seen += 1;
    w.last = Date.now();
    if (ok) {
      w.ok += 1;
      w.box = Math.min(6, w.box + 1);
      w.due = Date.now() + INTERVALS[w.box] * DAY;
    } else {
      w.bad += 1;
      w.box = w.box > 2 ? 2 : 1;
      w.due = Date.now() + 10 * 60000;
    }
  };

  S.wordStatus = (id) => {
    const w = S.state.words[id];
    if (!w || !w.seen) return 'new';
    if (w.bad >= 2 && w.bad / w.seen >= 0.3) return 'weak';
    if (w.box >= 4) return 'mastered';
    if (w.box >= 3) return 'known';
    return 'learning';
  };
  S.isLearned = id => { const w = S.state.words[id]; return !!w && w.box >= 3; };
  S.dueWords = (level) => {
    const now = Date.now();
    return A.data.vocab.filter(v => (!level || v.level === level) && S.state.words[v.id] && S.state.words[v.id].due <= now);
  };

  /* Central place where every answered question is recorded. */
  S.answer = (q, ok, given) => {
    const st = S.state;
    st.stats.n += 1;
    if (ok) st.stats.ok += 1;
    const d = S.today();
    d.n += 1;
    if (ok) d.ok += 1;
    const skill = q.skill || 'vocab';
    const sk = st.skills[skill] || (st.skills[skill] = { n: 0, ok: 0 });
    sk.n += 1;
    if (ok) sk.ok += 1;
    if (q.wordId) S.srs(q.wordId, ok);
    if (q.lessonId) {
      const g = st.grammar[q.lessonId] || (st.grammar[q.lessonId] = { n: 0, ok: 0 });
      g.n += 1;
      if (ok) g.ok += 1;
      if (q.grammar) {
        if (!ok) st.gReview[q.lessonId] = (st.gReview[q.lessonId] || 0) + 1;
        else if (st.gReview[q.lessonId]) {
          st.gReview[q.lessonId] -= 1;
          if (st.gReview[q.lessonId] <= 0) delete st.gReview[q.lessonId];
        }
      }
    }
    if (!ok) {
      st.mistakes.unshift({
        t: Date.now(), p: q.plain || '', a: q.correct || '', g: String(given || ''),
        l: q.lessonId || '', w: q.wordId || '', s: skill
      });
      st.mistakes = st.mistakes.slice(0, 80);
    }
    S.addXp(ok ? XP.answer : 1);
    S.checkAch();
  };

  S.lesson = id => S.state.lessons[id] || (S.state.lessons[id] = { read: false, ex: 0, test: 0, done: false, tries: 0 });

  S.completeLesson = (id, pct) => {
    const L = S.lesson(id);
    L.tries += 1;
    L.test = Math.max(L.test, pct);
    if (pct === 100) S.state.perfect = true;
    let fresh = false;
    if (pct >= 70 && !L.done) {
      L.done = true;
      L.doneAt = Date.now();
      fresh = true;
      const l = A.data.lessonMap[id];
      S.log('📘', 'أكملت درس ' + (l ? l.ar : id));
      S.addXp(XP.lesson);
    }
    S.checkAch();
    S.save();
    return fresh;
  };

  /* Level progress, calculated only from real learning activity. */
  S.progress = (level) => {
    level = level || S.state.level;
    const lessons = U.lessonsOf(level);
    const words = A.data.vocab.filter(w => w.level === level);
    const done = lessons.filter(l => (S.state.lessons[l.id] || {}).done).length;
    const learned = words.filter(w => S.isLearned(w.id)).length;
    const gl = lessons.filter(l => l.kind === 'grammar');
    const gSum = gl.reduce((s, l) => {
      const L = S.state.lessons[l.id];
      const g = S.state.grammar[l.id];
      const acc = g && g.n >= 4 ? g.ok / g.n : 0;
      const test = L ? L.test / 100 : 0;
      return s + Math.min(1, 0.6 * test + 0.4 * acc);
    }, 0);
    const rps = A.data.roleplays.filter(r => r.level === level);
    const rpDone = rps.filter(r => (S.state.rp[r.id] || {}).best >= 60).length;
    const tests = S.state.tests[level] || [];
    const bestTest = tests.reduce((m, t) => Math.max(m, t.pct), 0);
    const parts = {
      lessons: lessons.length ? done / lessons.length : 0,
      vocab: words.length ? learned / words.length : 0,
      grammar: gl.length ? gSum / gl.length : 0,
      use: rps.length ? 0.5 * (rpDone / rps.length) + 0.5 * (bestTest / 100) : bestTest / 100
    };
    const total = 0.4 * parts.lessons + 0.3 * parts.vocab + 0.15 * parts.grammar + 0.15 * parts.use;
    return {
      pct: Math.round(total * 100), parts, done, lessons: lessons.length, learned,
      words: words.length, rpDone, rps: rps.length, bestTest
    };
  };

  S.accuracy = () => U.pct(S.state.stats.ok, S.state.stats.n);

  S.levelInfo = () => {
    const xp = S.state.xp;
    const lvl = Math.floor(Math.sqrt(xp / 40)) + 1;
    const from = 40 * (lvl - 1) * (lvl - 1);
    const to = 40 * lvl * lvl;
    return { lvl, xp, from, to, pct: U.pct(xp - from, to - from) };
  };

  S.SKILLS = {
    vocab: 'المفردات', grammar: 'القواعد', listening: 'الاستماع', reading: 'القراءة',
    translation: 'الترجمة', building: 'بناء الجمل', dialogue: 'المحادثة', situations: 'المواقف اليومية'
  };

  S.weakSkills = () => Object.keys(S.state.skills)
    .map(k => ({ k, n: S.state.skills[k].n, acc: U.pct(S.state.skills[k].ok, S.state.skills[k].n) }))
    .filter(x => x.n >= 5 && x.acc < 80 && S.SKILLS[x.k])
    .sort((a, b) => a.acc - b.acc);

  S.weakLessons = (level) => U.lessonsOf(level || S.state.level)
    .map(l => ({ l, g: S.state.grammar[l.id] }))
    .filter(x => x.g && x.g.n >= 4 && x.g.ok / x.g.n < 0.7)
    .sort((a, b) => a.g.ok / a.g.n - b.g.ok / b.g.n)
    .map(x => ({ l: x.l, acc: U.pct(x.g.ok, x.g.n) }));

  S.nextLesson = (level) => {
    const list = U.lessonsOf(level || S.state.level);
    return list.find(l => !(S.state.lessons[l.id] || {}).done) || null;
  };

  S.continueLesson = () => {
    const last = A.data.lessonMap[S.state.lastLesson];
    if (last && last.level === S.state.level && !(S.state.lessons[last.id] || {}).done) return last;
    return S.nextLesson();
  };

  /* Achievements. */
  const doneCount = s => Object.keys(s.lessons).filter(k => s.lessons[k].done).length;
  const learnedCount = s => Object.keys(s.words).filter(k => s.words[k].box >= 3).length;
  S.ACH = [
    ['first', '👣', 'الخطوة الأولى', 'أجب عن أول سؤال', s => s.stats.n >= 1],
    ['l1', '📘', 'أول درس', 'أكمل درسًا واحدًا', s => doneCount(s) >= 1],
    ['l5', '📚', 'خمسة دروس', 'أكمل 5 دروس', s => doneCount(s) >= 5],
    ['l12', '🧭', 'نصف المنهج', 'أكمل 12 درسًا', s => doneCount(s) >= 12],
    ['a1', '🎓', 'منهج A1 كاملًا', 'أكمل كل دروس A1', () => U.lessonsOf('A1').every(l => (S.state.lessons[l.id] || {}).done)],
    ['w50', '🧠', '50 كلمة', 'ثبّت 50 كلمة في الذاكرة', s => learnedCount(s) >= 50],
    ['w150', '🗂️', '150 كلمة', 'ثبّت 150 كلمة', s => learnedCount(s) >= 150],
    ['w300', '💎', '300 كلمة', 'ثبّت 300 كلمة', s => learnedCount(s) >= 300],
    ['s3', '🔥', '3 أيام متتالية', 'تدرّب 3 أيام متتالية', s => s.streak.best >= 3],
    ['s7', '⚡', 'أسبوع كامل', 'تدرّب 7 أيام متتالية', s => s.streak.best >= 7],
    ['s30', '🌟', 'شهر كامل', 'تدرّب 30 يومًا متتالية', s => s.streak.best >= 30],
    ['goal', '🎯', 'هدف اليوم', 'حقّق هدفك اليومي', s => Object.keys(s.days).some(k => s.days[k].goal)],
    ['daily5', '📅', 'مثابر', 'أنهِ 5 جلسات يومية', s => Object.keys(s.daily).length >= 5],
    ['xp1000', '🚀', '1000 نقطة', 'اجمع 1000 نقطة خبرة', s => s.xp >= 1000],
    ['rp', '🎭', 'محادث واثق', 'أنهِ كل محادثات A1 بنتيجة 60% أو أكثر', s => A.data.roleplays.filter(r => r.level === 'A1').every(r => (s.rp[r.id] || {}).best >= 60)],
    ['perfect', '✨', 'علامة كاملة', 'احصل على 100% في اختبار درس', s => s.perfect],
    ['test', '🏁', 'اختبار A1', 'احصل على 60% أو أكثر في اختبار A1 النهائي', s => (s.tests.A1 || []).some(t => t.pct >= 60)],
    ['acc', '🔬', 'دقة عالية', 'دقة 85% بعد 200 إجابة', s => s.stats.n >= 200 && s.stats.ok / s.stats.n >= 0.85]
  ];

  S.checkAch = () => {
    const st = S.state;
    S.ACH.forEach(a => {
      if (st.ach[a[0]]) return;
      let ok = false;
      try { ok = a[4](st); } catch (e) { ok = false; }
      if (ok) {
        st.ach[a[0]] = Date.now();
        S.log(a[1], 'إنجاز جديد: ' + a[2]);
        U.toast(a[1] + ' إنجاز جديد: ' + a[2]);
      }
    });
  };

  S.exportData = () => JSON.stringify(S.state);
  S.importData = (json) => {
    const data = JSON.parse(json);
    if (!data || typeof data !== 'object' || !data.v) throw new Error('bad');
    S.state = Object.assign(fresh(), data);
    S.saveNow();
  };
  S.reset = () => { S.state = fresh(); S.saveNow(); };
})(window.App);
