/* Core utilities and the data registry.
   Every data file calls the App.add... functions below, so new lessons,
   words, readings or role plays are added by adding one more script file. */
window.App = window.App || {};
(function (A) {
  'use strict';

  A.data = {
    vocab: [], lessons: [], verbs: [], readings: [], roleplays: [],
    pools: {}, topics: {}, levels: [], units: {}, lessonMap: {}, wordMap: {}, verbMap: {}
  };
  A.views = {};
  A.actions = {};

  const U = A.util = {};
  const MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

  U.esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => MAP[c]);
  U.enc = s => encodeURIComponent(String(s));
  U.dec = s => decodeURIComponent(String(s || ''));

  U.shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  U.pick = arr => arr[Math.floor(Math.random() * arr.length)];
  U.sample = (arr, n) => U.shuffle(arr).slice(0, n);
  U.clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  U.pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

  U.addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  U.dayKey = (d) => {
    d = d || new Date();
    return d.getFullYear() + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getDate()).padStart(2, '0');
  };
  U.ago = t => {
    const m = Math.round((Date.now() - t) / 60000);
    if (m < 1) return 'الآن';
    if (m < 60) return 'قبل ' + m + ' دقيقة';
    const h = Math.round(m / 60);
    if (h < 24) return 'قبل ' + h + ' ساعة';
    return 'قبل ' + Math.round(h / 24) + ' يوم';
  };

  /* Answer checking: lower case, umlaut spelling variants, no punctuation. */
  U.norm = s => String(s == null ? '' : s).toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[.,!?;:"'„“”()¿¡]/g, ' ').replace(/\s+/g, ' ').trim();

  U.lev = (a, b) => {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    let prev = [];
    for (let j = 0; j <= b.length; j += 1) prev[j] = j;
    for (let i = 1; i <= a.length; i += 1) {
      const cur = [i];
      for (let j = 1; j <= b.length; j += 1) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[b.length];
  };
  U.sim = (a, b) => {
    a = U.norm(a); b = U.norm(b);
    const m = Math.max(a.length, b.length) || 1;
    return 1 - U.lev(a, b) / m;
  };

  /* HTML helpers. German text is always wrapped LTR inside the RTL page. */
  U.de = (t, cls) => '<span class="de ' + (cls || '') + '" dir="ltr" lang="de">' + U.esc(t) + '</span>';
  U.say = t => '<span class="de say" dir="ltr" lang="de" act="say" val="' + U.enc(t) + '" title="اضغط للاستماع">' + U.esc(t) + '</span>';
  U.spk = (t, withSlow) => '<button class="spk" act="say" val="' + U.enc(t) + '" title="استمع">🔊</button>' +
    (withSlow ? '<button class="spk" act="saySlow" val="' + U.enc(t) + '" title="استمع ببطء">🐢</button>' : '');

  /* Arabic text with {German} parts and **bold** parts. */
  U.fmt = s => U.esc(s)
    .replace(/\*\*(.+?)\*\*/g, (m, t) => (/^(der|die|das)$/.test(t) ? '<b class="art ' + U.artCls(t) + '">' + t + '</b>' : '<b>' + t + '</b>'))
    .replace(/\{([^}]+)\}/g, (m, t) => {
      const raw = t.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      return '<span class="de say" dir="ltr" lang="de" act="say" val="' + U.enc(raw) + '">' + t + '</span>';
    })
    .replace(/\n/g, '<br>');

  U.artCls = art => ({ der: 'mDer', die: 'mDie', das: 'mDas' }[art] || '');
  U.full = w => (w.art ? w.art + ' ' + w.de : w.de);
  U.wordHtml = w => (w.art ? '<span class="art ' + U.artCls(w.art) + '">' + w.art + '</span> ' : '') + U.esc(w.de);

  U.rows = text => String(text || '').trim().split('\n').map(l => l.trim()).filter(Boolean).map(l => l.split('|').map(x => x.trim()));

  U.toast = msg => {
    const el = document.getElementById('toast');
    if (!el) return;
    el.innerHTML = msg;
    el.className = 'show';
    clearTimeout(U.toastT);
    U.toastT = setTimeout(() => { el.className = ''; }, 2600);
  };

  /* Registry. */
  A.addTopic = (key, ar, icon) => { A.data.topics[key] = { key, ar, icon }; };

  A.addWords = (topic, level, text) => {
    U.rows(text).forEach(r => {
      const w = {
        art: r[0] || '', de: r[1], pl: r[2] || '', ar: r[3], en: r[4] || '',
        ex: r[5] || '', exAr: r[6] || '', diff: Number(r[7] || 1), topic, level
      };
      w.id = level + '.' + topic + '.' + w.de;
      if (A.data.wordMap[w.id]) return;
      A.data.wordMap[w.id] = w;
      A.data.vocab.push(w);
    });
  };

  A.addLesson = o => {
    o.phrases = U.rows(o.phrases).map(r => ({ de: r[0], ar: r[1], lessonId: o.id }));
    o.dialog = U.rows(o.dialog).map(r => ({ who: r[0], de: r[1], ar: r[2] }));
    o.topics = o.topics || [];
    o.ex = o.ex || [];
    o.steps = o.steps || [];
    A.data.lessons.push(o);
    A.data.lessonMap[o.id] = o;
  };

  A.addVerb = o => {
    o.forms = o.forms.split(' ');
    o.exs = U.rows(o.exs);
    A.data.verbs.push(o);
    A.data.verbMap[o.inf] = o;
  };

  A.addReading = o => { A.data.readings.push(o); };
  A.addRoleplay = o => { A.data.roleplays.push(o); };
  A.addPool = (level, name, arr) => {
    const p = A.data.pools[level] || (A.data.pools[level] = {});
    p[name] = (p[name] || []).concat(arr);
  };
  A.addLevel = o => { A.data.levels.push(o); };

  /* Lookups. */
  U.lessonsOf = level => A.data.lessons.filter(l => l.level === level).sort((a, b) => a.num - b.num);
  U.wordsOfLesson = l => A.data.vocab.filter(w => w.level === l.level && l.topics.indexOf(w.topic) >= 0);
  U.lessonOfTopic = (topic, level) => {
    const l = A.data.lessons.find(x => x.topics.indexOf(topic) >= 0 && (!level || x.level === level));
    return l ? l.id : '';
  };
  U.levelMeta = id => A.data.levels.find(l => l.id === id) || A.data.levels[0];
})(window.App);
