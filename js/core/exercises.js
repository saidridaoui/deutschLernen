/* Exercise engine.
   A question is a plain object:
   { kind: 'choice' | 'type' | 'order', html, opts, ans, accept, tokens, correct, why,
     skill, wordId, lessonId, grammar, say, auto, sec, similar() }
   Generators build questions from words, sentences, verbs and the custom lesson exercises.
   The runner shows one question at a time, gives feedback in Arabic and records every answer. */
(function (A) {
  'use strict';
  const U = A.util;
  const G = A.gen = {};
  const WQ = ['wer', 'was', 'wo', 'woher', 'wohin', 'wann', 'wie', 'warum', 'welcher', 'welche', 'welches'];
  const PRON = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];

  const head = t => '<p class="qTask">' + t + '</p>';
  const bigDe = t => '<div class="bigDe" dir="ltr" lang="de">' + U.esc(t) + '</div><div class="spkRow">' + U.spk(t, true) + '</div>';
  const bigAr = t => '<div class="bigAr">' + U.esc(t) + '</div>';
  const playBox = t => '<div class="playBox"><button class="playBtn" act="say" val="' + U.enc(t) + '">🔊 استمع</button><button class="spk" act="saySlow" val="' + U.enc(t) + '" title="ببطء">🐢</button></div>';
  const isDe = s => /^[A-Za-zÄÖÜäöüß0-9]/.test(String(s));

  G.choice = (base, correct, wrongs) => {
    const seen = new Set([U.norm(correct)]);
    const w = [];
    wrongs.forEach(x => { const k = U.norm(x); if (!seen.has(k)) { seen.add(k); w.push(x); } });
    const opts = U.shuffle([correct].concat(w.slice(0, 3)));
    return Object.assign(base, { kind: 'choice', opts, ans: opts.indexOf(correct), correct, optDe: isDe(correct) });
  };

  G.distract = (w, n, fn) => {
    const sameKind = x => !!x.art === !!w.art;
    const a = U.shuffle(A.data.vocab.filter(x => x.topic === w.topic && x.id !== w.id && sameKind(x)));
    const b = U.shuffle(A.data.vocab.filter(x => x.level === w.level && x.topic !== w.topic && sameKind(x)));
    const out = [];
    const seen = new Set([U.norm(fn(w))]);
    a.concat(b).some(x => {
      const v = fn(x);
      const k = U.norm(v);
      if (!seen.has(k)) { seen.add(k); out.push(v); }
      return out.length >= n;
    });
    return out;
  };

  G.artWhy = (w) => {
    const full = U.full(w);
    const tips = [
      [/(ung|heit|keit|schaft|ion)$/, 'die', 'الأسماء المنتهية بـ ung و heit و keit و schaft و ion مؤنثة تقريبًا دائمًا.'],
      [/(chen|lein)$/, 'das', 'الأسماء المنتهية بـ chen و lein محايدة دائمًا.'],
      [/(in|innen)$/, 'die', 'الأسماء المؤنثة للأشخاص والمهن المنتهية بـ in تأخذ die.'],
      [/(um|ment)$/, 'das', 'الأسماء المنتهية بـ um و ment غالبًا محايدة.'],
      [/(tag|woch|ar|il|ai|ni|li|st|ber|ling|mmer|nter)$/, 'der', 'أيام الأسبوع والشهور والفصول مذكّرة.'],
      [/er$/, 'der', 'كثير من الأسماء التي تدل على شخص وتنتهي بـ er مذكّرة، مثل {der Lehrer}.'],
      [/e$/, 'die', 'كثير من الأسماء المنتهية بـ e مؤنثة، لكن هناك استثناءات.']
    ];
    let why = '';
    if (/Plural/.test(w.pl)) {
      why = 'هذه الكلمة تُستعمل بصيغة الجمع فقط، والجمع يأخذ دائمًا {die}.';
    } else {
      const t = tips.find(x => x[0].test(w.de) && x[1] === w.art);
      if (t) why = t[2] + ' ';
    }
    return why + 'احفظ الكلمة مع أداتها دائمًا: **' + full + '**. لا تعتمد على جنس الكلمة في العربية.';
  };

  /* Questions about one vocabulary word. */
  G.word = (w, kind) => {
    const kinds = w.art ? ['deAr', 'arDe', 'listen', 'article', 'type'] : ['deAr', 'arDe', 'listen', 'type'];
    kind = kind || U.pick(kinds);
    const full = U.full(w);
    const base = {
      wordId: w.id, skill: 'vocab', lessonId: U.lessonOfTopic(w.topic, w.level), plain: full + ' = ' + w.ar,
      similar: () => G.word(w, U.pick(kinds.filter(k => k !== kind && k !== 'type')))
    };
    const ex = w.ex ? ' مثال: {' + w.ex + '}' : '';
    if (kind === 'deAr') {
      base.html = head('ما معنى هذه الكلمة؟') + bigDe(full);
      base.say = full; base.auto = true;
      base.why = '**' + full + '** تعني «' + w.ar + '».' + ex;
      return G.choice(base, w.ar, G.distract(w, 3, x => x.ar));
    }
    if (kind === 'arDe') {
      base.html = head('اختر الكلمة الألمانية المناسبة') + bigAr(w.ar);
      base.sayAfter = full;
      base.why = '«' + w.ar + '» بالألمانية **' + full + '**.' + ex;
      return G.choice(base, full, G.distract(w, 3, x => U.full(x)));
    }
    if (kind === 'listen') {
      base.html = head('استمع واختر المعنى الصحيح') + playBox(full);
      base.say = full; base.auto = true; base.skill = 'listening';
      base.why = 'سمعت **' + full + '** ومعناها «' + w.ar + '».';
      return G.choice(base, w.ar, G.distract(w, 3, x => x.ar));
    }
    if (kind === 'article' && w.art) {
      base.html = head('اختر الأداة الصحيحة') + '<div class="bigDe" dir="ltr" lang="de">… ' + U.esc(w.de) + '</div>' + '<p class="muted center">' + U.esc(w.ar) + '</p>';
      base.why = G.artWhy(w);
      base.sayAfter = full;
      const opts = ['der', 'die', 'das'];
      return Object.assign(base, { kind: 'choice', opts, ans: opts.indexOf(w.art), correct: w.art, optDe: true, correctShow: full });
    }
    base.html = head('اكتب بالألمانية') + bigAr(w.ar) + (w.art ? '<p class="muted center">اكتب الأداة مع الاسم، مثل: der Tisch</p>' : '');
    base.skill = 'vocab';
    base.why = 'الصحيح: **' + full + '**.' + (w.art ? ' تذكّر أن تكتب الأداة مع الاسم.' : '') + ex;
    base.sayAfter = full;
    base.noArt = w.art ? w.de : '';
    return Object.assign(base, { kind: 'type', accept: [full], correct: full });
  };

  G.orderWhy = (de) => {
    const first = U.norm(de.split(' ')[0]);
    if (WQ.indexOf(first) >= 0 || first === 'wie') return 'في السؤال بأداة استفهام: أداة السؤال أولًا، ثم الفعل مباشرة، ثم الفاعل. الجملة الصحيحة: {' + de + '}';
    if (/\?$/.test(de)) return 'في سؤال الإجابة بنعم أو لا يأتي الفعل في البداية. الجملة الصحيحة: {' + de + '}';
    return 'في الجملة الخبرية يأتي الفعل المصرَّف في الموضع الثاني. إذا وُجد فعل ثانٍ بصيغة المصدر فإنه يذهب إلى آخر الجملة. الجملة الصحيحة: {' + de + '}';
  };

  const splitPunct = de => {
    const clean = de.replace(/[.!?]+$/, '').trim();
    return { clean, punct: de.slice(clean.length).trim() };
  };

  G.orderQ = (de, ar, alts, base) => {
    const p = splitPunct(de);
    const toks = p.clean.split(' ');
    if (toks.length < 3) return null;
    let sh = U.shuffle(toks);
    for (let i = 0; i < 5 && sh.join(' ') === toks.join(' '); i += 1) sh = U.shuffle(toks);
    const accept = [p.clean].concat((alts || []).map(a => splitPunct(a).clean));
    return Object.assign(base, {
      kind: 'order', tokens: sh, accept, correct: de, skill: base.skill || 'building',
      html: head('رتّب الكلمات لتكوين الجملة') + bigAr(ar) + (p.punct ? '<p class="muted center">علامة الترقيم في النهاية: ' + U.esc(p.punct) + '</p>' : ''),
      why: base.why || G.orderWhy(de), sayAfter: de, plain: de
    });
  };

  G.sentPool = (level, lessonIds) => {
    const ls = A.data.lessons.filter(l => l.level === level && (!lessonIds || lessonIds.indexOf(l.id) >= 0));
    let pool = [];
    ls.forEach(l => { pool = pool.concat(l.phrases); });
    return pool;
  };

  /* Questions from a German sentence with Arabic translation. */
  G.sent = (s, kind, pool) => {
    const kinds = ['order', 'tr', 'listenS', 'fill'];
    kind = kind || U.pick(kinds);
    const l = A.data.lessonMap[s.lessonId];
    pool = pool || (l ? l.phrases : []).concat(G.sentPool(l ? l.level : 'A1'));
    const base = {
      lessonId: s.lessonId, plain: s.de + ' = ' + s.ar,
      similar: () => G.sent(s, U.pick(kinds.filter(k => k !== kind)), pool)
    };
    if (kind === 'order') {
      const q = G.orderQ(s.de, s.ar, s.alt, base);
      if (q) return q;
      kind = 'listenS';
    }
    if (kind === 'tr') {
      return Object.assign(base, {
        kind: 'type', skill: 'translation', accept: [s.de].concat(s.alt || []), correct: s.de, sayAfter: s.de,
        html: head('ترجم إلى الألمانية') + bigAr(s.ar),
        why: 'قارن جملتك بالجملة الصحيحة كلمة بكلمة، وانتبه لمكان الفعل ولنهايته: {' + s.de + '}'
      });
    }
    if (kind === 'fill') {
      const p = splitPunct(s.de);
      const toks = p.clean.split(' ');
      const idx = U.shuffle(toks.map((t, i) => i).filter(i => toks[i].replace(/[,]/g, '').length >= 3));
      if (idx.length) {
        const i = idx[0];
        const ans = toks[i].replace(/,$/, '');
        const others = [];
        U.shuffle(pool).some(x => {
          x.de.replace(/[.!?,]/g, '').split(' ').forEach(t => {
            if (t.length >= 2 && U.norm(t) !== U.norm(ans) && others.indexOf(t) < 0 && isNaN(Number(t))) others.push(t);
          });
          return others.length >= 12;
        });
        const wrong = U.sample(others, 3);
        if (wrong.length >= 2) {
          const shown = toks.map((t, j) => (j === i ? '<span class="blank">……</span>' + (/,$/.test(t) ? ',' : '') : U.esc(t))).join(' ') + U.esc(p.punct);
          return G.choice(Object.assign(base, {
            skill: 'vocab', sayAfter: s.de,
            html: head('أكمل الجملة') + '<div class="bigDe" dir="ltr" lang="de">' + shown + '</div>' + '<p class="muted center">' + U.esc(s.ar) + '</p>',
            why: 'الجملة الصحيحة: {' + s.de + '}'
          }), ans, wrong);
        }
      }
      kind = 'listenS';
    }
    const wrongs = U.sample(pool.filter(x => x.ar !== s.ar), 6).map(x => x.ar);
    return G.choice(Object.assign(base, {
      skill: 'listening', say: s.de, auto: true, sayAfter: s.de,
      html: head('استمع إلى الجملة واختر معناها') + playBox(s.de),
      why: 'سمعت: {' + s.de + '} ومعناها «' + s.ar + '».'
    }), s.ar, wrongs);
  };

  /* Custom exercises written in the lesson files.
     The first option in o is always the right one, options are shuffled at runtime. */
  G.custom = (e, l) => {
    const base = {
      lessonId: l.id, skill: l.kind === 'grammar' ? 'grammar' : 'situations', grammar: l.kind === 'grammar',
      why: e.w || '',
      similar: () => {
        const same = l.ex.filter(x => x !== e && Object.keys(x)[0] === Object.keys(e)[0]);
        if (same.length) return G.custom(U.pick(same), l);
        return l.phrases.length ? G.sent(U.pick(l.phrases)) : null;
      }
    };
    if (e.mc) {
      base.html = head(e.h || 'اختر الإجابة الصحيحة') + '<div class="qText">' + U.fmt(e.mc) + '</div>';
      base.plain = e.mc.replace(/[{}*]/g, '');
      if (isDe(e.o[0])) base.sayAfter = e.o[0];
      return G.choice(base, e.o[0], e.o.slice(1));
    }
    if (e.fill) {
      const m = e.fill.match(/^(.*?)\[(.+?)\](.*)$/);
      const full = m[1] + m[2] + m[3];
      base.plain = full;
      base.sayAfter = full;
      base.html = head('أكمل الفراغ') + '<div class="bigDe" dir="ltr" lang="de">' + U.esc(m[1]) + '<span class="blank">……</span>' + U.esc(m[3]) + '</div>' +
        (e.ar ? '<p class="muted center">' + U.esc(e.ar) + '</p>' : '');
      if (!base.why) base.why = 'الجملة الصحيحة: {' + full + '}';
      base.correctShow = full;
      if (e.o) return G.choice(base, e.o[0], e.o.slice(1));
      return Object.assign(base, { kind: 'type', accept: [m[2]].concat(e.alt || []), correct: m[2] });
    }
    if (e.order) {
      return G.orderQ(e.order, e.ar, e.alt, base) || null;
    }
    if (e.tr) {
      base.plain = e.de;
      return Object.assign(base, {
        kind: 'type', skill: 'translation', accept: [e.de].concat(e.alt || []), correct: e.de, sayAfter: e.de,
        html: head('ترجم إلى الألمانية') + bigAr(e.tr),
        why: e.w || 'الترجمة الصحيحة: {' + e.de + '}'
      });
    }
    return null;
  };

  /* Verbs. */
  G.conj = (v, mode, p) => {
    p = p == null ? Math.floor(Math.random() * 6) : p;
    const form = v.forms[p];
    const pr = PRON[p];
    const base = {
      skill: 'grammar', lessonId: v.modal ? 'a1l21' : 'a1l09', grammar: true, plain: pr + ' ' + form + ' (' + v.inf + ')',
      html: head('صرّف الفعل {' + v.inf + '} «' + v.ar + '»').replace(/\{([^}]+)\}/, (m, t) => U.say(t)) +
        '<div class="bigDe" dir="ltr" lang="de">' + U.esc(pr) + ' <span class="blank">……</span></div>',
      why: 'مع ' + pr.split('/')[0] + ' نقول **' + pr.split('/')[0] + ' ' + form + '**.' + (v.note ? ' ' + v.note : ''),
      sayAfter: pr.split('/')[0] + ' ' + form,
      similar: () => G.conj(v, mode, (p + 1 + Math.floor(Math.random() * 5)) % 6)
    };
    if (mode === 'type') return Object.assign(base, { kind: 'type', accept: [form], correct: form });
    const wrong = v.forms.filter(f => f !== form);
    return G.choice(base, form, wrong);
  };

  G.verbFill = (v) => {
    const ex = U.pick(v.exs);
    const toks = ex[0].replace(/[.!?]+$/, '').split(' ');
    const i = toks.findIndex(t => v.forms.indexOf(t) >= 0 || t === v.inf);
    if (i < 0) return G.conj(v);
    const ans = toks[i];
    const shown = toks.map((t, j) => (j === i ? '<span class="blank">……</span>' : U.esc(t))).join(' ') + ex[0].slice(toks.join(' ').length);
    return G.choice({
      skill: 'grammar', lessonId: v.modal ? 'a1l21' : 'a1l09', grammar: true, plain: ex[0], sayAfter: ex[0],
      html: head('أكمل الجملة بالصيغة الصحيحة من {' + v.inf + '}').replace(/\{([^}]+)\}/, (m, t) => U.say(t)) + '<div class="bigDe" dir="ltr" lang="de">' + shown + '</div><p class="muted center">' + U.esc(ex[1]) + '</p>',
      why: 'الجملة الصحيحة: {' + ex[0] + '}' + (v.note ? ' ' + v.note : ''),
      similar: () => G.conj(v)
    }, ans, v.forms.concat([v.inf]).filter(f => f !== ans));
  };

  /* Numbers, prices and clock times. */
  const ONES = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf',
    'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
  const TENS = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];
  G.numWord = n => {
    if (n < 20) return ONES[n];
    if (n < 100) {
      const t = Math.floor(n / 10);
      const u = n % 10;
      return u ? (u === 1 ? 'ein' : ONES[u]) + 'und' + TENS[t] : TENS[t];
    }
    if (n < 1000) {
      const h = Math.floor(n / 100);
      const r = n % 100;
      return (h === 1 ? 'ein' : ONES[h]) + 'hundert' + (r ? G.numWord(r) : '');
    }
    return String(n);
  };

  G.num = (kind) => {
    kind = kind || U.pick(['listen', 'read', 'write']);
    const n = 13 + Math.floor(Math.random() * 87);
    const swapped = n >= 20 && n % 10 ? (n % 10) * 10 + Math.floor(n / 10) : n + 10;
    const wrong = [swapped, n + 1, n - 10 > 0 ? n - 10 : n + 20, n + 11].filter(x => x !== n && x > 0 && x < 1000).map(String);
    const word = G.numWord(n);
    const base = {
      skill: kind === 'listen' ? 'listening' : 'vocab', lessonId: 'a1l03', plain: n + ' = ' + word, sayAfter: word,
      why: n + ' بالألمانية **' + word + '**.' + (n >= 21 && n % 10 ? ' تذكّر: الآحاد أولًا ثم العشرات، تمامًا مثل العربية «واحد وعشرون».' : ''),
      similar: () => G.num(kind === 'listen' ? 'read' : 'listen')
    };
    if (kind === 'listen') {
      return G.choice(Object.assign(base, { html: head('استمع واختر الرقم') + playBox(word), say: word, auto: true }), String(n), wrong);
    }
    if (kind === 'read') {
      return G.choice(Object.assign(base, { html: head('ما هذا الرقم؟') + bigDe(word) }), String(n), wrong);
    }
    return Object.assign(base, { kind: 'type', accept: [word], correct: word, html: head('اكتب الرقم بالحروف الألمانية') + '<div class="bigNum">' + n + '</div>' });
  };

  G.priceText = (e, c) => e + ' Euro' + (c ? ' ' + c : '');
  G.price = () => {
    const e = 1 + Math.floor(Math.random() * 60);
    const c = U.pick([0, 20, 49, 50, 90, 99]);
    const fmt = (a, b) => a + ',' + String(b).padStart(2, '0') + ' €';
    const text = G.priceText(e, c);
    const wrong = [fmt(e, (c + 30) % 100), fmt(e + 10, c), fmt(c > 0 && c < 60 ? c : e + 2, e < 100 ? e : 0)];
    return G.choice({
      skill: 'listening', lessonId: 'a1l14', say: text, auto: true, sayAfter: text, plain: text,
      html: head('استمع إلى السعر واختر الصحيح') + playBox(text),
      why: 'الأسعار تُقرأ هكذا: الرقم ثم Euro ثم السنتات. سمعت: {' + text + '}',
      similar: () => G.price()
    }, fmt(e, c), wrong);
  };

  const HW = h => (h === 1 ? 'eins' : ONES[h]);
  G.timeText = (h, m) => {
    const nh = h % 12 + 1;
    if (m === 0) return (h === 1 ? 'ein' : ONES[h]) + ' Uhr';
    if (m === 15) return 'Viertel nach ' + HW(h);
    if (m === 30) return 'halb ' + HW(nh);
    return 'Viertel vor ' + HW(nh);
  };
  G.time = () => {
    const h = 1 + Math.floor(Math.random() * 12);
    const m = U.pick([0, 15, 30, 45]);
    const txt = G.timeText(h, m);
    const wrong = [G.timeText(h, (m + 30) % 60), G.timeText(h % 12 + 1, m), G.timeText(h === 1 ? 12 : h - 1, m)];
    const clock = h + ':' + String(m).padStart(2, '0');
    return G.choice({
      skill: 'vocab', lessonId: 'a1l12', sayAfter: 'Es ist ' + txt, plain: clock + ' = ' + txt,
      html: head('كيف تقول هذا الوقت في الكلام اليومي؟') + '<div class="bigNum">🕐 ' + clock + '</div>',
      why: m === 30 ? 'انتبه: {halb} تعني نصف ساعة **قبل** الساعة التالية. {halb ' + HW(h % 12 + 1) + '} تعني ' + clock + '.' : 'الصحيح: {Es ist ' + txt + '.}',
      similar: () => G.time()
    }, txt, wrong);
  };

  /* Simulated shop. */
  G.SHOP = [
    ['die Jacke', 49, 90, 'السترة', 'kostet'], ['die Hose', 29, 99, 'البنطال', 'kostet'],
    ['das Hemd', 19, 50, 'القميص', 'kostet'], ['der Pullover', 34, 0, 'الكنزة', 'kostet'],
    ['die Schuhe', 59, 95, 'الحذاء', 'kosten'], ['der Rock', 24, 90, 'التنورة', 'kostet'],
    ['das Kleid', 39, 0, 'الفستان', 'kostet'], ['die Mütze', 9, 99, 'القبعة', 'kostet']
  ];
  G.shelf = () => '<div class="shelf">' + G.SHOP.map(p => '<div class="item"><b dir="ltr" lang="de">' + U.esc(p[0]) + '</b><span>' + p[1] + ',' + String(p[2]).padStart(2, '0') + ' €</span></div>').join('') + '</div>';
  G.shop = (kind) => {
    kind = kind || U.pick(['hear', 'ask', 'buy', 'expensive']);
    const p = U.pick(G.SHOP);
    const base = { skill: 'situations', lessonId: 'a1l14', similar: () => G.shop(kind === 'hear' ? 'ask' : 'hear') };
    const noun = p[0].split(' ')[1];
    const art = p[0].split(' ')[0];
    if (kind === 'hear') {
      const t = p[0].charAt(0).toUpperCase() + p[0].slice(1) + ' ' + p[4] + ' ' + G.priceText(p[1], p[2]) + '.';
      const others = G.SHOP.filter(x => x !== p).map(x => x[3]);
      return G.choice(Object.assign(base, {
        skill: 'listening', say: t, auto: true, sayAfter: t, plain: t,
        html: G.shelf() + head('البائع يخبرك بسعر منتج. أي منتج يقصد؟') + playBox(t),
        why: 'قال البائع: {' + t + '}'
      }), p[3], U.sample(others, 3));
    }
    if (kind === 'ask') {
      const ok = 'Was ' + p[4] + ' ' + p[0] + '?';
      const bad1 = 'Was ' + (p[4] === 'kostet' ? 'kosten' : 'kostet') + ' ' + p[0] + '?';
      const bad2 = 'Wie viel ist ' + noun + ' teuer?';
      const bad3 = 'Wo ' + p[4] + ' ' + p[0] + '?';
      return G.choice(Object.assign(base, {
        plain: ok, html: G.shelf() + head('تريد أن تسأل عن سعر «' + p[3] + '». ماذا تقول؟'),
        why: p[4] === 'kosten' ? 'الكلمة {die Schuhe} جمع، لذلك نقول {kosten}.' : 'الاسم مفرد، لذلك نقول {kostet}. أداة السؤال عن السعر: {Was kostet …?} أو {Wie viel kostet …?}'
      }), ok, [bad1, bad2, bad3]);
    }
    if (kind === 'buy') {
      const pron = art === 'der' ? 'ihn' : (art === 'das' ? 'es' : 'sie');
      const ok = 'Gut, ich nehme ' + pron + '.';
      const all = ['ihn', 'es', 'sie'].filter(x => x !== pron).map(x => 'Gut, ich nehme ' + x + '.');
      return G.choice(Object.assign(base, {
        plain: ok, sayAfter: ok,
        html: head('البائع يقول: ' + U.say('Möchten Sie ' + (art === 'der' ? 'den' : art) + ' ' + noun + '?')) + '<p class="qText">تريد شراء «' + p[3] + '». ماذا تقول؟</p>',
        why: 'الضمير يتبع جنس الاسم: {der} يصبح {ihn} في المفعول به، {die} يصبح {sie}، {das} يصبح {es}. الأسهل دائمًا: {Ich nehme das.}'
      }), ok, all.concat(['Gut, ich nehme das nicht.']));
    }
    return G.choice(Object.assign(base, {
      plain: 'Das ist zu teuer.', sayAfter: 'Das ist mir zu teuer.',
      html: G.shelf() + head(U.esc(p[3]) + ' غالٍ عليك. ماذا تقول بأدب؟')
    }), 'Das ist mir zu teuer.', ['Das ist mir zu billig.', 'Das ist sehr teuer, ich nehme es.', 'Das bin zu teuer.']);
  };

  /* Pick the right reply in a lesson dialogue. */
  G.dialog = (l) => {
    const d = l.dialog;
    if (!d || d.length < 2) return null;
    const i = 1 + Math.floor(Math.random() * (d.length - 1));
    const others = [];
    A.data.lessons.filter(x => x.level === l.level && x !== l).forEach(x => x.dialog.forEach(y => others.push(y.de)));
    return G.choice({
      skill: 'dialogue', lessonId: l.id, plain: d[i - 1].de + ' / ' + d[i].de, sayAfter: d[i].de,
      html: head('ما الرد المناسب في هذا الحوار؟') + '<div class="miniChat"><div class="bubble npc"><span class="who">' + U.esc(d[i - 1].who) + '</span>' + U.say(d[i - 1].de) + '<small>' + U.esc(d[i - 1].ar) + '</small></div></div>',
      why: 'الرد الطبيعي هنا: {' + d[i].de + '} ومعناه «' + d[i].ar + '».',
      similar: () => G.dialog(l)
    }, d[i].de, U.sample(others.filter(x => x !== d[i].de), 3));
  };

  G.reading = (r) => r.qs.map(q => G.choice({
    skill: 'reading', lessonId: r.lesson || '', plain: r.title + ': ' + q.q,
    html: '<div class="reading"><div class="rHead"><b dir="ltr" lang="de">' + U.esc(r.title) + '</b>' + U.spk(r.text) + '</div><p dir="ltr" lang="de">' + U.esc(r.text) + '</p></div>' + head(q.q),
    why: 'ارجع إلى النص. الترجمة: ' + r.tr
  }, q.o[0], q.o.slice(1)));

  /* Session builders. */
  const nonNull = arr => arr.filter(Boolean);
  const tag = (arr, sec) => arr.map(q => { q.sec = sec; return q; });

  G.lessonPractice = (l) => {
    const words = U.shuffle(U.wordsOfLesson(l)).slice(0, 4);
    const kinds = ['deAr', 'listen', 'arDe', 'article'];
    const wq = words.map((w, i) => G.word(w, kinds[i] === 'article' && !w.art ? 'type' : kinds[i]));
    const ph = U.shuffle(l.phrases);
    const sq = ['order', 'tr', 'fill', 'listenS'].map((k, i) => (ph[i % Math.max(1, ph.length)] ? G.sent(ph[i % ph.length], k) : null));
    const cq = U.shuffle(l.ex).slice(0, 6).map(e => G.custom(e, l));
    const all = nonNull(wq.slice(0, 2).concat(cq.slice(0, 3), sq.slice(0, 2), wq.slice(2), cq.slice(3), sq.slice(2), [G.dialog(l)]));
    return all;
  };

  G.lessonTest = (l) => {
    const words = U.sample(U.wordsOfLesson(l), 2).map(w => G.word(w, U.pick(['deAr', 'arDe'])));
    const cq = U.sample(l.ex, words.length ? 4 : 6).map(e => G.custom(e, l));
    const ph = U.shuffle(l.phrases);
    const sq = [ph[0] && G.sent(ph[0], 'order'), ph[1] && G.sent(ph[1], 'tr')];
    return U.shuffle(nonNull(words.concat(cq, sq))).slice(0, 8);
  };

  G.activeLessons = (level) => {
    const st = A.store.state;
    const list = U.lessonsOf(level);
    const act = list.filter(l => st.lessons[l.id]);
    return act.length ? act : list.slice(0, 3);
  };

  G.daily = () => {
    const st = A.store.state;
    const level = st.level;
    const ls = G.activeLessons(level);
    const lsIds = ls.map(l => l.id);
    const due = U.shuffle(A.store.dueWords(level)).slice(0, 6);
    const topics = [];
    ls.forEach(l => l.topics.forEach(t => topics.push(t)));
    const fresh = U.shuffle(A.data.vocab.filter(w => w.level === level && topics.indexOf(w.topic) >= 0 && !st.words[w.id])).slice(0, 10 - due.length);
    const vocab = due.concat(fresh).slice(0, 8).map(w => G.word(w, w.art && Math.random() < 0.3 ? 'article' : U.pick(['deAr', 'arDe', 'type'])));
    const gl = ls.filter(l => l.ex.length);
    let grammar = [];
    U.shuffle(gl).forEach(l => { grammar = grammar.concat(U.sample(l.ex, 2).map(e => G.custom(e, l))); });
    grammar = nonNull(grammar).slice(0, 5);
    const vs = A.data.verbs.filter(v => (v.level || 'A1') === level);
    if (vs.length) grammar.push(G.conj(U.pick(vs)));
    const rs = A.data.readings.filter(r => r.level === level && (!r.lesson || lsIds.indexOf(r.lesson) >= 0));
    const rAll = A.data.readings.filter(r => r.level === level);
    const r = U.pick(rs.length ? rs : (rAll.length ? rAll : A.data.readings));
    const pool = G.sentPool(level, lsIds);
    const sents = U.shuffle(pool);
    const tr = sents.slice(0, 3).map(s => G.sent(s, 'tr', pool));
    const build = sents.slice(3, 6).map(s => G.sent(s, 'order', pool));
    const listenW = U.sample(A.data.vocab.filter(w => w.level === level && topics.indexOf(w.topic) >= 0), 2).map(w => G.word(w, 'listen'));
    const listen = listenW.concat(sents.slice(6, 8).map(s => G.sent(s, 'listenS', pool)));
    if (level === 'A1') listen.push(G.num('listen'));
    const dlg = U.sample(ls.filter(l => l.dialog.length > 1), 3).map(l => G.dialog(l));
    return nonNull([].concat(
      tag(nonNull(vocab), 'المفردات'), tag(grammar, 'القواعد'), tag(r ? G.reading(r) : [], 'القراءة'),
      tag(nonNull(tr), 'الترجمة'), tag(nonNull(build), 'بناء الجمل'), tag(nonNull(listen), 'الاستماع والنطق'), tag(nonNull(dlg), 'الحوار')
    ));
  };

  G.finalTest = (level) => {
    const pools = A.data.pools[level] || {};
    const words = A.data.vocab.filter(w => w.level === level);
    const vocab = U.sample(words, 10).map((w, i) => G.word(w, ['deAr', 'arDe', 'article', 'deAr', 'arDe'][i % 5] === 'article' && !w.art ? 'deAr' : ['deAr', 'arDe', 'article', 'deAr', 'arDe'][i % 5]));
    const lessons = U.lessonsOf(level);
    let grammar = [];
    if (pools.grammar) {
      grammar = U.sample(pools.grammar, 10).map(p => G.custom(p, A.data.lessonMap[p.l] || lessons[0]));
    } else {
      lessons.forEach(l => { grammar = grammar.concat(l.ex.map(e => G.custom(e, l))); });
      grammar = U.sample(nonNull(grammar), 10);
    }
    let reading = [];
    U.sample(A.data.readings.filter(r => r.level === level), 2).forEach(r => { reading = reading.concat(G.reading(r)); });
    const pool = G.sentPool(level);
    const listen = U.sample(pool, level === 'A1' ? 4 : 6).map(s => G.sent(s, 'listenS', pool));
    if (level === 'A1') { listen.push(G.num('listen')); listen.push(G.price()); }
    let sit = [];
    if (pools.situations) sit = U.sample(pools.situations, 8).map(p => G.custom(p, A.data.lessonMap[p.l] || lessons[0]));
    return [].concat(
      tag(nonNull(vocab), 'المفردات'), tag(nonNull(grammar), 'القواعد'), tag(nonNull(reading), 'القراءة'),
      tag(nonNull(listen), 'الاستماع'), tag(nonNull(sit), 'المواقف اليومية')
    );
  };

  /* ---------------- Runner ---------------- */
  const Q = A.quiz = { cur: null };

  Q.run = (el, list, opt) => {
    list = nonNull(list);
    if (!list.length) {
      el.innerHTML = '<div class="empty">لا توجد أسئلة متاحة هنا بعد. ابدأ درسًا أولًا ثم عد إلى هذا القسم.</div>';
      return;
    }
    Q.cur = { el, queue: list, i: 0, res: [], opt: Object.assign({ mode: 'practice', retry: true }, opt || {}), sel: null, answered: false, order: [] };
    Q.render();
  };

  function inputHtml(q) {
    if (q.kind === 'choice') {
      return '<div class="opts ' + (q.opts.length > 3 ? 'four' : '') + '">' + q.opts.map((o, i) =>
        '<button class="opt" act="qOpt" val="' + i + '"><span class="key">' + (i + 1) + '</span>' + (q.optDe ? U.de(o) : '<span>' + U.esc(o) + '</span>') + '</button>').join('') + '</div>';
    }
    if (q.kind === 'type') {
      return '<input id="qIn" class="input deIn" dir="ltr" lang="de" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="اكتب إجابتك هنا">' +
        '<div class="chars">' + ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(c => '<button class="charBtn" act="qChar" val="' + c + '">' + c + '</button>').join('') +
        '<button class="linkBtn" act="qHint">تلميح</button></div><div id="qHintBox" class="muted"></div>';
    }
    return '<div class="ordLine" id="ordLine"><span class="muted">اضغط على الكلمات بالترتيب الصحيح</span></div><div class="ordBank" id="ordBank">' +
      q.tokens.map((t, i) => '<button class="tok" act="qTok" val="' + i + '">' + U.de(t) + '</button>').join('') + '</div>';
  }

  Q.render = () => {
    const c = Q.cur;
    if (!c) return;
    const q = c.queue[c.i];
    if (!q) return Q.finish();
    c.sel = null; c.answered = false; c.order = [];
    const total = c.queue.length;
    c.el.innerHTML = '<div class="quiz">' +
      '<div class="qHead"><button class="iconBtn" act="qExit" title="إنهاء">✕</button><div class="bar"><i style="width:' + U.pct(c.i, total) + '%"></i></div><span class="qCount">' + (c.i + 1) + ' / ' + total + '</span></div>' +
      (q.sec ? '<div class="secChip">' + U.esc(q.sec) + '</div>' : '') +
      '<div class="qBody">' + q.html + '</div>' +
      '<div class="qInput">' + inputHtml(q) + '</div>' +
      '<div id="qFb"></div>' +
      '<div class="qFoot"><button class="btn primary big" id="qMain" act="qCheck" disabled>' + (c.opt.mode === 'test' ? 'التالي' : 'تحقّق') + '</button></div></div>';
    if (q.say && q.auto) setTimeout(() => A.speech.say(q.say), 300);
    const inp = document.getElementById('qIn');
    if (inp) {
      inp.addEventListener('input', () => { document.getElementById('qMain').disabled = !inp.value.trim(); });
      setTimeout(() => inp.focus(), 50);
    }
  };

  const enableMain = on => { const b = document.getElementById('qMain'); if (b) b.disabled = !on; };

  Q.pickOpt = (i) => {
    const c = Q.cur;
    if (!c || c.answered) return;
    c.sel = Number(i);
    c.el.querySelectorAll('.opt').forEach((b, j) => b.classList.toggle('sel', j === c.sel));
    enableMain(true);
  };

  Q.renderOrder = () => {
    const c = Q.cur;
    const q = c.queue[c.i];
    const line = document.getElementById('ordLine');
    const bank = document.getElementById('ordBank');
    line.innerHTML = c.order.length ? c.order.map((ti, pos) => '<button class="tok on" act="qUntok" val="' + pos + '">' + U.de(q.tokens[ti]) + '</button>').join('') : '<span class="muted">اضغط على الكلمات بالترتيب الصحيح</span>';
    bank.querySelectorAll('.tok').forEach((b, i) => { b.disabled = c.order.indexOf(i) >= 0; });
    enableMain(c.order.length === q.tokens.length);
  };

  const judge = (given, q) => {
    const g = U.norm(given);
    for (const a of q.accept) {
      if (U.norm(a) === g) return { ok: true };
    }
    if (q.noArt && g === U.norm(q.noArt)) return { ok: false, noArt: true };
    for (const a of q.accept) {
      const n = U.norm(a);
      const d = U.lev(n, g);
      if ((n.length >= 5 && d <= 1) || (n.length >= 12 && d <= 2)) {
        if (q.noArt && n.split(' ')[0] !== g.split(' ')[0]) continue;
        return { ok: true, near: true };
      }
    }
    return { ok: false };
  };

  Q.check = () => {
    const c = Q.cur;
    if (!c) return;
    if (c.answered) return Q.next();
    const q = c.queue[c.i];
    let given = '';
    let r = { ok: false };
    if (q.kind === 'choice') {
      if (c.sel == null) return;
      given = q.opts[c.sel];
      r.ok = c.sel === q.ans;
    } else if (q.kind === 'type') {
      const inp = document.getElementById('qIn');
      given = inp.value.trim();
      if (!given) return;
      r = judge(given, q);
      inp.disabled = true;
    } else {
      given = c.order.map(i => q.tokens[i]).join(' ');
      if (c.order.length !== q.tokens.length) return;
      r.ok = q.accept.some(a => U.norm(a) === U.norm(given));
    }
    c.answered = true;
    A.store.answer(q, r.ok, given);
    c.res.push({ q, ok: r.ok, given });
    if (c.opt.mode === 'test') return Q.next();

    if (q.kind === 'choice') {
      c.el.querySelectorAll('.opt').forEach((b, j) => {
        b.disabled = true;
        if (j === q.ans) b.classList.add('ok');
        else if (j === c.sel) b.classList.add('bad');
      });
    }
    const shown = q.correctShow || q.correct;
    let html;
    if (r.ok) {
      html = '<div class="fb ok"><b>✓ صحيح</b>' +
        (r.near ? '<p>إجابتك مقبولة، لكن انتبه للإملاء. الصحيح: ' + U.de(shown) + '</p>' : '') +
        (q.sayAfter ? '<p>' + U.say(q.sayAfter) + ' ' + U.spk(q.sayAfter) + '</p>' : '') + '</div>';
    } else {
      let retry = false;
      if (c.opt.retry && !q.isRetry && typeof q.similar === 'function') {
        const s = q.similar();
        if (s) {
          s.isRetry = true;
          s.sec = q.sec;
          c.queue.splice(Math.min(c.i + 3, c.queue.length), 0, s);
          retry = true;
        }
      }
      html = '<div class="fb bad"><b>✗ ليست صحيحة</b>' +
        '<p>الإجابة الصحيحة: ' + (isDe(shown) ? U.de(shown) + ' ' + U.spk(shown) : '<b>' + U.esc(shown) + '</b>') + '</p>' +
        (r.noArt ? '<p>كتبت الاسم بدون أداة. في الألمانية نحفظ الاسم مع أداته دائمًا.</p>' : '') +
        (q.why ? '<p>' + U.fmt(q.why) + '</p>' : '') +
        (retry ? '<p class="muted">سيظهر لك سؤال مشابه بعد قليل، وأُضيفت هذه النقطة إلى قائمة المراجعة.</p>' : '') + '</div>';
    }
    document.getElementById('qFb').innerHTML = html;
    const m = document.getElementById('qMain');
    m.disabled = false;
    m.textContent = 'متابعة';
    m.focus();
  };

  Q.next = () => {
    const c = Q.cur;
    if (!c) return;
    c.i += 1;
    Q.render();
    window.scrollTo(0, 0);
  };

  Q.finish = () => {
    const c = Q.cur;
    Q.cur = null;
    const ok = c.res.filter(r => r.ok).length;
    const res = { ok, total: c.res.length, pct: U.pct(ok, c.res.length), res: c.res };
    A.store.save();
    if (c.opt.onDone) c.opt.onDone(res, c.el);
    else c.el.innerHTML = Q.summary(res, '', '<a class="btn primary" href="#/home">إلى الصفحة الرئيسية</a>');
  };

  Q.exit = () => {
    const c = Q.cur;
    if (!c) return;
    if (c.res.length && !window.confirm('هل تريد إنهاء التمرين؟ ما أجبت عنه محفوظ.')) return;
    Q.cur = null;
    if (c.opt.onExit) c.opt.onExit(); else window.history.back();
  };

  Q.ring = (pct, label) => {
    const r = 44;
    const len = 2 * Math.PI * r;
    return '<div class="ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="' + r + '" class="rBg"/><circle cx="50" cy="50" r="' + r + '" class="rFg" stroke-dasharray="' + len.toFixed(1) + '" stroke-dashoffset="' + (len * (1 - pct / 100)).toFixed(1) + '"/></svg><div class="rTxt"><b>' + pct + '%</b>' + (label ? '<span>' + label + '</span>' : '') + '</div></div>';
  };

  Q.summary = (r, extra, buttons) => {
    const wrong = [];
    const seen = new Set();
    r.res.filter(x => !x.ok).forEach(x => {
      const k = x.q.plain + x.q.correct;
      if (!seen.has(k)) { seen.add(k); wrong.push(x); }
    });
    const secs = {};
    r.res.forEach(x => {
      if (!x.q.sec) return;
      const s = secs[x.q.sec] || (secs[x.q.sec] = { n: 0, ok: 0 });
      s.n += 1; if (x.ok) s.ok += 1;
    });
    const secHtml = Object.keys(secs).length ? '<div class="card"><h3>النتيجة حسب القسم</h3>' + Object.keys(secs).map(k => {
      const p = U.pct(secs[k].ok, secs[k].n);
      return '<div class="barRow"><span>' + U.esc(k) + '</span><div class="bar ' + (p < 60 ? 'low' : '') + '"><i style="width:' + p + '%"></i></div><b>' + p + '%</b></div>';
    }).join('') + '</div>' : '';
    return '<div class="summary"><div class="card sumTop">' + Q.ring(r.pct, 'النتيجة') +
      '<div><h2>' + (r.pct >= 85 ? 'عمل ممتاز' : r.pct >= 70 ? 'جيد جدًا' : r.pct >= 50 ? 'بداية جيدة، تحتاج مراجعة' : 'تحتاج إلى تدريب إضافي') + '</h2>' +
      '<p>إجابات صحيحة: <b>' + r.ok + '</b> من ' + r.total + ' · خاطئة: <b>' + (r.total - r.ok) + '</b></p>' + (extra || '') +
      '<div class="btnRow">' + (buttons || '') + '</div></div></div>' + secHtml +
      (wrong.length ? '<div class="card"><h3>راجع هذه النقاط</h3><ul class="wrongList">' + wrong.slice(0, 20).map(x =>
        '<li><span class="muted">' + U.esc(x.q.plain || '') + '</span><div>إجابتك: <s>' + U.esc(x.given || '') + '</s> · الصحيح: ' + (isDe(x.q.correctShow || x.q.correct) ? U.de(x.q.correctShow || x.q.correct) : '<b>' + U.esc(x.q.correct) + '</b>') + '</div></li>').join('') + '</ul></div>' : '') + '</div>';
  };

  /* Runner actions. */
  A.actions.qOpt = (el, v) => Q.pickOpt(v);
  A.actions.qCheck = () => Q.check();
  A.actions.qExit = () => Q.exit();
  A.actions.qTok = (el, v) => {
    const c = Q.cur;
    if (!c || c.answered) return;
    const i = Number(v);
    if (c.order.indexOf(i) < 0) c.order.push(i);
    Q.renderOrder();
  };
  A.actions.qUntok = (el, v) => {
    const c = Q.cur;
    if (!c || c.answered) return;
    c.order.splice(Number(v), 1);
    Q.renderOrder();
  };
  A.actions.qChar = (el, v) => {
    const inp = document.getElementById('qIn');
    if (!inp || inp.disabled) return;
    const s = inp.selectionStart || inp.value.length;
    inp.value = inp.value.slice(0, s) + v + inp.value.slice(inp.selectionEnd || s);
    inp.focus();
    inp.setSelectionRange(s + v.length, s + v.length);
    enableMain(true);
  };
  A.actions.qHint = () => {
    const c = Q.cur;
    if (!c) return;
    const q = c.queue[c.i];
    const box = document.getElementById('qHintBox');
    if (box) box.innerHTML = 'البداية: ' + U.de(String(q.correct).split(' ').map(w => w.slice(0, 2) + '…').join(' '));
  };

  document.addEventListener('keydown', (e) => {
    const c = Q.cur;
    if (!c) return;
    const q = c.queue[c.i];
    if (!q) return;
    if (e.key === 'Enter') {
      const m = document.getElementById('qMain');
      if (m && !m.disabled) { e.preventDefault(); Q.check(); }
      return;
    }
    if (q.kind === 'choice' && !c.answered && /^[1-4]$/.test(e.key) && document.activeElement.tagName !== 'INPUT') {
      if (Number(e.key) <= q.opts.length) Q.pickOpt(Number(e.key) - 1);
    }
  });
})(window.App);
