/* Role play: a short chat where the learner picks or types the right reply. */
(function (A) {
  'use strict';
  const U = A.util;
  const S = () => A.store;
  let typeMode = false;
  let R = null;

  A.views.roleplay = (el, id) => {
    const level = S().state.level;
    const rp = A.data.roleplays.find(r => r.id === id);
    if (rp) return start(el, rp);
    let list = A.data.roleplays.filter(r => r.level === level);
    const other = !list.length;
    if (other) list = A.data.roleplays;
    el.innerHTML = '<h1 class="pageTitle">المحادثات التفاعلية</h1>' +
      '<p class="muted">تتحدث مع شخصية في موقف يومي. اختر الرد المناسب، أو فعّل وضع الكتابة لتكتب ردك بنفسك. الخطأ يعطيك شرحًا وفرصة ثانية.</p>' +
      (other ? '<p class="note">لا توجد محادثات خاصة بمستوى ' + level + ' بعد، هذه محادثات A1 للتدريب.</p>' : '') +
      '<div class="setRow"><span>طريقة الرد</span><div class="seg"><button act="rpMode" val="0" class="' + (typeMode ? '' : 'on') + '">اختيار</button><button act="rpMode" val="1" class="' + (typeMode ? 'on' : '') + '">كتابة</button></div></div>' +
      '<div class="modeGrid">' + list.map(r => {
        const b = (S().state.rp[r.id] || {}).best;
        return '<a class="mode" href="#/roleplay/' + r.id + '"><span class="mIcon">' + r.icon + '</span><b>' + U.esc(r.ar) + '</b>' + U.de(r.de) +
          '<small class="muted">' + U.esc(r.intro) + '</small>' + (b != null ? '<span class="pill ' + (b >= 60 ? 'ok' : '') + '">أفضل نتيجة ' + b + '%</span>' : '') + '</a>';
      }).join('') + '</div>';
  };

  A.actions.rpMode = (el, v) => { typeMode = v === '1'; A.route(); };

  function start(el, rp) {
    R = { rp, el, i: 0, score: 0, tries: 0, wrongNow: false, log: [], opts: null };
    el.innerHTML = '<a class="linkBtn" href="#/roleplay">→ المحادثات</a>' +
      '<div class="rpHead"><span class="mIcon">' + rp.icon + '</span><div><h1>' + U.esc(rp.ar) + '</h1><p class="muted">' + U.esc(rp.intro) + '</p></div></div>' +
      '<div class="bar"><i id="rpBar" style="width:0"></i></div>' +
      '<div class="chat" id="rpChat"></div><div id="rpInput"></div>';
    turn();
  }

  function addBubble(cls, who, de, ar) {
    const c = document.getElementById('rpChat');
    c.insertAdjacentHTML('beforeend', '<div class="bubble ' + cls + '"><span class="who">' + U.esc(who) + '</span>' + U.say(de) + ' ' + U.spk(de) + (ar ? '<small class="arLine">' + U.esc(ar) + '</small>' : '') + '</div>');
    c.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  function turn() {
    if (!R || !document.getElementById('rpBar')) { R = null; return; }
    const step = R.rp.steps[R.i];
    document.getElementById('rpBar').style.width = U.pct(R.i, R.rp.steps.length) + '%';
    if (!step) return finish();
    R.wrongNow = false;
    addBubble('npc', R.rp.npc, step.n, step.a);
    A.speech.say(step.n);
    drawInput();
  }

  function drawInput() {
    const step = R.rp.steps[R.i];
    const box = document.getElementById('rpInput');
    if (typeMode) {
      box.innerHTML = '<div class="rpType"><input id="rpIn" class="input deIn" dir="ltr" lang="de" autocomplete="off" spellcheck="false" placeholder="اكتب ردك بالألمانية">' +
        '<button class="btn primary" act="rpSend">إرسال</button></div><div class="chars">' + ['ä', 'ö', 'ü', 'ß'].map(c => '<button class="charBtn" act="rpChar" val="' + c + '">' + c + '</button>').join('') +
        '<button class="linkBtn" act="rpShowOpts">أظهر الخيارات</button></div><div id="rpFb"></div>';
      const inp = document.getElementById('rpIn');
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); A.actions.rpSend(); } });
      setTimeout(() => inp.focus(), 50);
      return;
    }
    R.opts = U.shuffle(step.o.map((o, j) => ({ de: o[0], fb: o[1], ok: j === 0 })));
    box.innerHTML = '<div class="opts">' + R.opts.map((o, j) => '<button class="opt" act="rpPick" val="' + j + '"><span class="key">' + (j + 1) + '</span>' + U.de(o.de) + '</button>').join('') + '</div><div id="rpFb"></div>';
  }

  function record(ok, given) {
    const step = R.rp.steps[R.i];
    if (!R.wrongNow) {
      R.tries += 1;
      if (ok) R.score += 1;
      S().answer({ skill: 'dialogue', lessonId: R.rp.lesson, plain: step.n, correct: step.o[0][0] }, ok, given);
    }
    if (!ok) R.wrongNow = true;
  }

  function wrongFb(text) {
    const step = R.rp.steps[R.i];
    document.getElementById('rpFb').innerHTML = '<div class="fb bad"><b>✗ ليس الرد المناسب</b><p>' + U.fmt(text || 'فكّر في معنى ما قاله الشخص.') + '</p>' +
      '<p class="muted">حاول مرة أخرى.' + (typeMode ? ' الرد المتوقع يشبه: ' + U.de(step.o[0][0]) : '') + '</p></div>';
  }

  function advance(de) {
    addBubble('me', 'أنت', de, '');
    document.getElementById('rpInput').innerHTML = '';
    R.i += 1;
    setTimeout(turn, 700);
  }

  A.actions.rpPick = (el, v) => {
    if (!R) return;
    const o = R.opts[Number(v)];
    record(o.ok, o.de);
    if (o.ok) return advance(o.de);
    el.classList.add('bad');
    el.disabled = true;
    wrongFb(o.fb);
  };

  A.actions.rpSend = () => {
    if (!R) return;
    const inp = document.getElementById('rpIn');
    const given = inp.value.trim();
    if (!given) return;
    const step = R.rp.steps[R.i];
    const scores = step.o.map(o => U.sim(o[0], given));
    const best = scores.indexOf(Math.max.apply(null, scores));
    const ok = best === 0 && scores[0] >= 0.85;
    record(ok, given);
    if (ok) return advance(scores[0] < 1 ? step.o[0][0] : given);
    wrongFb(best > 0 && scores[best] >= 0.8 ? step.o[best][1] : 'ردك غير قريب بما يكفي من رد مناسب. انتبه للفعل ولترتيب الجملة.');
  };

  A.actions.rpShowOpts = () => { typeMode = false; drawInput(); typeMode = true; };
  A.actions.rpChar = (el, v) => { const i = document.getElementById('rpIn'); if (i) { i.value += v; i.focus(); } };

  function finish() {
    const rp = R.rp;
    const pct = U.pct(R.score, R.tries);
    const st = S().state;
    const prev = st.rp[rp.id] || { best: 0, done: 0 };
    const first = !prev.done;
    st.rp[rp.id] = { best: Math.max(prev.best, pct), done: prev.done + 1 };
    if (first) S().addXp(S().XP.roleplay);
    S().log(rp.icon, 'محادثة ' + rp.ar + ': ' + pct + '%');
    S().checkAch();
    S().save();
    A.updateTop();
    document.getElementById('rpInput').innerHTML = '<div class="card center">' + A.quiz.ring(pct, 'من المحاولة الأولى') +
      '<h2>' + (pct >= 80 ? 'محادثة ممتازة' : pct >= 60 ? 'أحسنت' : 'تحتاج تدريبًا إضافيًا') + '</h2>' +
      '<p>أجبت صحيحًا من المحاولة الأولى في ' + R.score + ' من ' + R.tries + ' ردود.' + (first ? ' +' + S().XP.roleplay + ' نقطة.' : '') + '</p>' +
      '<div class="btnRow center"><button class="btn" act="rpAgain" val="' + rp.id + '">أعد المحادثة</button>' +
      (typeMode ? '' : '<button class="btn" act="rpTyped" val="' + rp.id + '">جرّبها بالكتابة</button>') +
      '<a class="btn primary" href="#/roleplay">محادثة أخرى</a></div></div>';
    R = null;
  }
  A.actions.rpAgain = (el, v) => start(A.main, A.data.roleplays.find(r => r.id === v));
  A.actions.rpTyped = (el, v) => { typeMode = true; start(A.main, A.data.roleplays.find(r => r.id === v)); };

  document.addEventListener('keydown', e => {
    if (!R || typeMode || !R.opts || document.activeElement.tagName === 'INPUT') return;
    if (/^[1-3]$/.test(e.key)) {
      const b = document.querySelectorAll('#rpInput .opt')[Number(e.key) - 1];
      if (b && !b.disabled) b.click();
    }
  });
})(window.App);
