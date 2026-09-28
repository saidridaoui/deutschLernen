/* Grammar reference pages and verb conjugation tables. */
(function (A) {
  'use strict';
  const U = A.util;
  const S = () => A.store;
  const PRON = ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'];
  const TYPE = { regular: 'منتظم', vowel: 'يتغير حرف العلة', irregular: 'شاذ', modal: 'فعل مساعد' };
  let verbQ = '';

  const acc = id => { const g = S().state.grammar[id]; return g && g.n ? U.pct(g.ok, g.n) : null; };

  function renderStep(s) {
    if (s.tip) return '<div class="tipBox">💡 ' + U.fmt(s.tip) + '</div>';
    if (s.link) return '<a class="btn block" href="' + s.link + '">' + U.esc(s.label) + '</a>';
    let h = '<h3>' + U.esc(s.h) + '</h3>';
    if (s.p) h += '<p class="stepText">' + U.fmt(s.p) + '</p>';
    if (s.table) h += '<div class="tableWrap"><table class="tbl"><thead><tr>' + s.table.head.map(c => '<th>' + U.fmt(c) + '</th>').join('') + '</tr></thead><tbody>' +
      s.table.rows.map(r => '<tr>' + r.map(c => '<td>' + U.fmt(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
    return h;
  }

  function overview(el) {
    const level = S().state.level;
    const gl = A.data.lessons.filter(l => l.kind === 'grammar' || l.kind === 'sound');
    const byLevel = A.data.levels.map(lv => [lv, gl.filter(l => l.level === lv.id).sort((a, b) => a.num - b.num)]).filter(x => x[1].length);
    el.innerHTML = '<h1 class="pageTitle">القواعد</h1>' +
      '<a class="card rowCard link" href="#/grammar/verbs"><div><b>⚙️ جداول تصريف الأفعال</b><p class="muted small">' + A.data.verbs.length + ' فعلًا مع التصريف الكامل والأمثلة والتدريب</p></div><span class="btn">افتح</span></a>' +
      byLevel.map(x => '<section class="unit"><h3>' + x[0].id + ' · ' + U.esc(x[0].ar) + (x[0].id === level ? ' <span class="pill">مستواك</span>' : '') + '</h3><div class="lGrid">' +
        x[1].map(l => {
          const a = acc(l.id);
          const open = S().state.gReview[l.id];
          return '<a class="lCard" href="#/grammar/' + l.id + '"><span class="lIcon">' + l.icon + '</span><span class="lTxt"><b>' + U.esc(l.ar) + '</b>' + U.de(l.de) +
            '<small class="lState">' + (a == null ? 'لم تتدرّب بعد' : 'الدقة ' + a + '%') + (open ? ' · ⚠️ ' + open + ' للمراجعة' : '') + '</small></span></a>';
        }).join('') + '</div></section>').join('');
  }

  function lessonRef(el, l) {
    const a = acc(l.id);
    el.innerHTML = '<a class="linkBtn" href="#/grammar">→ القواعد</a><h1 class="pageTitle">' + l.icon + ' ' + U.esc(l.ar) + ' ' + U.say(l.de) + '</h1>' +
      '<div class="goalBox"><b>🎯 الهدف</b><p>' + U.esc(l.goal) + '</p></div>' +
      l.steps.map(s => '<div class="card">' + renderStep(s) + '</div>').join('') +
      '<div class="card center"><p>' + (a == null ? 'لم تتدرّب على هذه القاعدة بعد.' : 'دقتك في هذه القاعدة: <b>' + a + '%</b>') + '</p>' +
      '<div class="btnRow center"><button class="btn primary" act="grammarDrill" val="' + l.id + '">تدريب سريع</button><a class="btn" href="#/lesson/' + l.id + '">افتح الدرس كاملًا</a></div></div>';
  }

  A.actions.grammarDrill = (el, v) => {
    const l = A.data.lessonMap[v];
    let qs = U.shuffle(l.ex).slice(0, 8).map(e => A.gen.custom(e, l));
    if (l.id === 'a1l09' || l.id === 'a1l08') qs = qs.concat(U.sample(A.data.verbs, 3).map(x => A.gen.conj(x)));
    if (l.id === 'a1l21') qs = qs.concat(A.data.verbs.filter(x => x.modal).map(x => A.gen.conj(x)));
    A.quiz.run(A.main, U.shuffle(qs), {
      onDone: (res, e) => { e.innerHTML = A.quiz.summary(res, '', '<button class="btn" act="grammarDrill" val="' + l.id + '">جولة أخرى</button><a class="btn primary" href="#/grammar/' + l.id + '">العودة إلى القاعدة</a>'); },
      onExit: () => A.route()
    });
  };

  function verbList(el) {
    const draw = () => {
      const q = U.norm(verbQ);
      const vs = A.data.verbs.filter(v => !q || U.norm(v.inf + ' ' + v.ar + ' ' + v.en + ' ' + v.forms.join(' ')).indexOf(q) >= 0);
      document.getElementById('verbBox').innerHTML = vs.length ? '<div class="lGrid">' + vs.map(v => '<a class="lCard" href="#/grammar/verb/' + U.enc(v.inf) + '"><span class="lTxt">' + U.de(v.inf, 'big') + '<b>' + U.esc(v.ar) + '</b><small class="lState">' + TYPE[v.type] + '</small></span></a>').join('') + '</div>'
        : '<div class="empty">لا يوجد فعل بهذا الاسم.</div>';
    };
    el.innerHTML = '<a class="linkBtn" href="#/grammar">→ القواعد</a><h1 class="pageTitle">تصريف الأفعال</h1>' +
      '<input id="verbQ" class="input" placeholder="ابحث عن فعل بالألمانية أو العربية، مثل: fahren أو يأكل" value="' + U.esc(verbQ) + '">' +
      '<div class="btnRow"><a class="btn primary" href="#/practice/conj">تدريب التصريف العشوائي</a></div><div id="verbBox"></div>';
    document.getElementById('verbQ').addEventListener('input', e => { verbQ = e.target.value; draw(); });
    draw();
  }

  function verbPage(el, inf) {
    const v = A.data.verbMap[inf];
    if (!v) { el.innerHTML = '<div class="empty">الفعل غير موجود. <a href="#/grammar/verbs">كل الأفعال</a></div>'; return; }
    const base = v.forms[3];
    el.innerHTML = '<a class="linkBtn" href="#/grammar/verbs">→ كل الأفعال</a>' +
      '<h1 class="pageTitle">' + U.say(v.inf) + ' ' + U.spk(v.inf, true) + ' <small>' + U.esc(v.ar) + '</small></h1>' +
      '<p><span class="pill">' + TYPE[v.type] + '</span></p>' +
      (v.note ? '<div class="tipBox">💡 ' + U.fmt(v.note) + '</div>' : '') +
      '<div class="card"><div class="tableWrap"><table class="tbl conj"><thead><tr><th>الضمير</th><th>التصريف</th><th></th></tr></thead><tbody>' +
      v.forms.map((f, i) => {
        const p = PRON[i].split(' / ')[0];
        const changed = (i === 1 || i === 2) && f.slice(0, 3) !== base.slice(0, 3);
        return '<tr><td dir="ltr" lang="de">' + U.esc(PRON[i]) + '</td><td>' + U.de(f, changed ? 'hl' : '') + '</td><td>' + U.spk(p + ' ' + f) + '</td></tr>';
      }).join('') + '</tbody></table></div></div>' +
      '<div class="card"><h3>أمثلة</h3><ul class="phraseList">' + v.exs.map(x => '<li><div>' + U.say(x[0]) + '<small>' + U.esc(x[1]) + '</small></div><span>' + U.spk(x[0], true) + '</span></li>').join('') + '</ul></div>' +
      '<div class="btnRow"><button class="btn primary" act="verbDrill" val="' + U.enc(v.inf) + '">تدرّب على هذا الفعل</button></div>';
  }

  A.actions.verbDrill = (el, val) => {
    const v = A.data.verbMap[U.dec(val)];
    const qs = U.shuffle([0, 1, 2, 3, 4, 5]).map((p, i) => A.gen.conj(v, i % 2 ? 'type' : 'choice', p)).concat([A.gen.verbFill(v), A.gen.verbFill(v)]);
    A.quiz.run(A.main, qs, {
      onDone: (res, e) => { e.innerHTML = A.quiz.summary(res, '', '<a class="btn primary" href="#/grammar/verb/' + U.enc(v.inf) + '">العودة إلى الفعل</a><a class="btn" href="#/grammar/verbs">كل الأفعال</a>'); },
      onExit: () => A.route()
    });
  };

  A.views.grammar = (el, a, b) => {
    if (a === 'verbs') return verbList(el);
    if (a === 'verb') return verbPage(el, U.dec(b));
    if (a && A.data.lessonMap[a]) return lessonRef(el, A.data.lessonMap[a]);
    overview(el);
  };
})(window.App);
