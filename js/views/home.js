/* Dashboard and progress pages. */
(function (A) {
  'use strict';
  const U = A.util;
  const S = () => A.store;

  const bar = (p, cls) => '<div class="bar ' + (cls || '') + '"><i style="width:' + U.clamp(p, 0, 100) + '%"></i></div>';

  function weakHtml() {
    const ws = S().weakSkills().slice(0, 3);
    const wl = S().weakLessons().slice(0, 3);
    if (!ws.length && !wl.length) return '<p class="muted">لا توجد نقاط ضعف واضحة بعد. استمر في التدرّب لنحلّل أداءك بدقة.</p>';
    return '<ul class="plain">' + ws.map(w => '<li><span>' + S().SKILLS[w.k] + '</span><b class="low">' + w.acc + '%</b></li>').join('') +
      wl.map(x => '<li><a href="#/lesson/' + x.l.id + '">' + x.l.icon + ' ' + U.esc(x.l.ar) + '</a><b class="low">' + x.acc + '%</b></li>').join('') + '</ul>';
  }

  function activityHtml(n) {
    const act = S().state.activity.slice(0, n);
    if (!act.length) return '<p class="muted">لا يوجد نشاط بعد. ابدأ بالدرس الأول.</p>';
    return '<ul class="plain act">' + act.map(a => '<li><span>' + a.icon + ' ' + U.esc(a.text) + '</span><small class="muted">' + U.ago(a.t) + '</small></li>').join('') + '</ul>';
  }

  A.views.home = (el) => {
    const st = S().state;
    const pr = S().progress();
    const lv = S().levelInfo();
    const today = st.days[U.dayKey()] || { xp: 0 };
    const due = S().dueWords(st.level).length;
    const cont = S().continueLesson();
    const next = S().nextLesson();
    const weak = S().weakLessons()[0];
    const rec = weak ? weak.l : next;
    const meta = U.levelMeta(st.level);
    const dailyDone = st.daily[U.dayKey()];
    const fresh = !st.stats.n;

    el.innerHTML =
      '<section class="hero">' +
      '<div class="heroMain">' +
      '<p class="muted">' + (fresh ? 'أهلًا بك! رحلتك نحو ' + st.level + ' تبدأ من هنا.' : 'مستوى ' + st.level + ' · ' + meta.ar) + '</p>' +
      '<h1>' + (fresh ? 'ابدأ بخطوة صغيرة اليوم' : (pr.pct < 100 ? 'تقدّمك في ' + st.level + ': ' + pr.pct + '%' : 'أنهيت مستوى ' + st.level)) + '</h1>' +
      '<p>' + (cont ? 'التالي: <b>' + cont.icon + ' ' + U.esc(cont.ar) + '</b> <span class="de" dir="ltr" lang="de">' + U.esc(cont.de) + '</span>' : 'أكملت كل دروس هذا المستوى. راجع كلماتك وجرّب اختبار المستوى.') + '</p>' +
      '<div class="btnRow">' + (cont ? '<a class="btn primary big" href="#/lesson/' + cont.id + '">' + (st.lessons[cont.id] ? 'تابع التعلّم' : 'ابدأ الدرس') + '</a>' : '<a class="btn primary big" href="#/test">اختبار المستوى</a>') +
      '<a class="btn" href="#/daily">' + (dailyDone ? '✓ تحدي اليوم' : '☀️ تحدي اليوم') + '</a></div>' +
      (!meta.full ? '<p class="note">محتوى هذا المستوى تمهيدي حاليًا، ويمكن توسيعه بإضافة دروس جديدة.</p>' : '') +
      '</div>' +
      '<div class="heroRing">' + A.quiz.ring(pr.pct, 'من ' + st.level) +
      '<div class="parts"><span>الدروس ' + pr.done + '/' + pr.lessons + '</span><span>الكلمات ' + pr.learned + '/' + pr.words + '</span></div></div>' +
      '</section>' +

      '<div class="statGrid">' +
      '<div class="stat"><span class="sIcon">🔥</span><b>' + S().streak() + '</b><small>أيام متتالية</small></div>' +
      '<div class="stat"><span class="sIcon">🎯</span><b>' + today.xp + '<small>/' + st.goal + '</small></b><small>هدف اليوم (نقاط)</small>' + bar(U.pct(today.xp, st.goal)) + '</div>' +
      '<a class="stat link" href="#/review"><span class="sIcon">🔁</span><b>' + due + '</b><small>كلمات للمراجعة</small></a>' +
      '<div class="stat"><span class="sIcon">✔️</span><b>' + S().accuracy() + '%</b><small>دقة الإجابات</small></div>' +
      '</div>' +

      '<div class="cols">' +
      '<div class="card">' +
      '<h3>مقترح لك الآن</h3>' +
      (rec ? '<a class="recLesson" href="#/lesson/' + rec.id + '"><span class="lIcon">' + rec.icon + '</span><span><b>' + U.esc(rec.ar) + '</b><small class="de" dir="ltr" lang="de">' + U.esc(rec.de) + '</small><small class="muted">' + (weak ? 'دقتك في هذا الدرس ' + weak.acc + '%، مراجعته ستفيدك.' : U.esc(rec.goal)) + '</small></span></a>' : '<p class="muted">أنهيت كل الدروس. راجع وجرّب الاختبار.</p>') +
      (due ? '<a class="btn block" href="#/review/due">راجع ' + due + ' كلمة مستحقة اليوم</a>' : '') +
      '</div>' +
      '<div class="card"><h3>المستوى ' + lv.lvl + '</h3><p class="muted">' + lv.xp + ' نقطة · ' + (lv.to - lv.xp) + ' نقطة للمستوى التالي</p>' + bar(lv.pct) +
      '<h4>نقاط تحتاج اهتمامًا</h4>' + weakHtml() + '</div>' +
      '</div>' +

      '<div class="cols">' +
      '<div class="card"><h3>تقدّم المستوى بالتفصيل</h3>' +
      '<div class="barRow"><span>الدروس المكتملة</span>' + bar(pr.parts.lessons * 100) + '<b>' + Math.round(pr.parts.lessons * 100) + '%</b></div>' +
      '<div class="barRow"><span>المفردات المثبّتة</span>' + bar(pr.parts.vocab * 100) + '<b>' + Math.round(pr.parts.vocab * 100) + '%</b></div>' +
      '<div class="barRow"><span>القواعد</span>' + bar(pr.parts.grammar * 100) + '<b>' + Math.round(pr.parts.grammar * 100) + '%</b></div>' +
      '<div class="barRow"><span>المحادثات والاختبار</span>' + bar(pr.parts.use * 100) + '<b>' + Math.round(pr.parts.use * 100) + '%</b></div>' +
      '<p class="muted small">تُحسب النسبة من الدروس التي نجحت في اختبارها، والكلمات التي أجبت عنها صحيحًا عدة مرات، ودقتك في القواعد، والمحادثات والاختبار النهائي. فتح الدرس وحده لا يزيدها.</p></div>' +
      '<div class="card"><h3>آخر نشاط</h3>' + activityHtml(6) + '</div>' +
      '</div>';
  };

  A.views.progress = (el) => {
    const st = S().state;
    const pr = S().progress();
    const days = [];
    for (let i = 13; i >= 0; i -= 1) {
      const d = U.addDays(new Date(), -i);
      const k = U.dayKey(d);
      days.push({ k, d, xp: (st.days[k] || {}).xp || 0 });
    }
    const maxXp = Math.max(st.goal, ...days.map(d => d.xp));
    const lessons = U.lessonsOf(st.level);
    const skills = Object.keys(S().SKILLS).map(k => ({ k, s: st.skills[k] || { n: 0, ok: 0 } }));
    const tests = (st.tests[st.level] || []).slice(-5).reverse();

    el.innerHTML = '<h1 class="pageTitle">تقدّمك في مستوى ' + st.level + '</h1>' +
      '<div class="statGrid">' +
      '<div class="stat"><b>' + pr.pct + '%</b><small>تقدّم المستوى</small></div>' +
      '<div class="stat"><b>' + pr.done + '/' + pr.lessons + '</b><small>دروس مكتملة</small></div>' +
      '<div class="stat"><b>' + pr.learned + '</b><small>كلمات مثبّتة</small></div>' +
      '<div class="stat"><b>' + st.stats.n + '</b><small>إجابة · دقة ' + S().accuracy() + '%</small></div>' +
      '<div class="stat"><b>' + S().streak() + '</b><small>أيام متتالية · الأفضل ' + st.streak.best + '</small></div>' +
      '<div class="stat"><b>' + S().goalStreak() + '</b><small>أيام متتالية بهدف مكتمل</small></div>' +
      '</div>' +
      '<div class="card"><h3>النقاط في آخر 14 يومًا</h3><div class="chart">' + days.map(d =>
        '<div class="col' + (d.xp >= st.goal ? ' goal' : '') + '" title="' + d.k + ': ' + d.xp + '"><i style="height:' + U.pct(d.xp, maxXp) + '%"></i><small>' + d.d.getDate() + '</small></div>').join('') +
      '</div><p class="muted small">الأعمدة الملوّنة بالكامل: أيام حققت فيها هدفك اليومي.</p></div>' +
      '<div class="cols"><div class="card"><h3>الدقة حسب المهارة</h3>' + skills.map(x => {
        const p = U.pct(x.s.ok, x.s.n);
        return '<div class="barRow"><span>' + S().SKILLS[x.k] + '</span>' + bar(x.s.n ? p : 0, x.s.n && p < 70 ? 'low' : '') + '<b>' + (x.s.n ? p + '%' : 'لم تبدأ') + '</b></div>';
      }).join('') + '</div>' +
      '<div class="card"><h3>نشاطك</h3>' + activityHtml(12) + '</div></div>' +
      '<div class="card"><h3>الدروس</h3><div class="tableWrap"><table class="tbl"><thead><tr><th>الدرس</th><th>الحالة</th><th>أفضل اختبار</th><th>دقة التمارين</th></tr></thead><tbody>' +
      lessons.map(l => {
        const L = st.lessons[l.id];
        const g = st.grammar[l.id];
        return '<tr><td><a href="#/lesson/' + l.id + '">' + l.icon + ' ' + U.esc(l.ar) + '</a></td><td>' + (L && L.done ? '<span class="pill ok">مكتمل</span>' : L ? '<span class="pill">جارٍ</span>' : '<span class="pill muted">لم يبدأ</span>') +
          '</td><td>' + (L && L.tries ? L.test + '%' : '·') + '</td><td>' + (g && g.n ? U.pct(g.ok, g.n) + '%' : '·') + '</td></tr>';
      }).join('') + '</tbody></table></div></div>' +
      '<div class="card"><h3>الإنجازات</h3><div class="achGrid">' + S().ACH.map(a =>
        '<div class="ach' + (st.ach[a[0]] ? ' got' : '') + '"><span>' + a[1] + '</span><b>' + a[2] + '</b><small>' + a[3] + '</small></div>').join('') + '</div></div>' +
      (tests.length ? '<div class="card"><h3>محاولات اختبار المستوى</h3><ul class="plain">' + tests.map(t => '<li><span>' + new Date(t.t).toLocaleDateString('ar') + '</span><b>' + t.pct + '%</b></li>').join('') + '</ul></div>' : '') +
      '<div class="card"><h3>الإعدادات</h3>' +
      '<div class="setRow"><span>الهدف اليومي</span><div class="seg">' + [50, 100, 150, 200].map(g => '<button act="setGoal" val="' + g + '" class="' + (st.goal === g ? 'on' : '') + '">' + g + '</button>').join('') + '</div></div>' +
      '<p class="muted small">50 نقطة تعادل تقريبًا 10 دقائق، و100 تعادل 15 إلى 20 دقيقة.</p>' +
      '<div class="setRow"><span>النطق</span><span>' + (A.speech.ok ? (A.speech.hasGerman ? 'صوت ألماني متوفر ✓' : 'لم يُعثر على صوت ألماني، قد يكون النطق أقل دقة') : 'المتصفح لا يدعم النطق') + '</span></div>' +
      '<div class="btnRow"><button class="btn" act="exportData">تصدير التقدّم</button><button class="btn" act="importData">استيراد التقدّم</button><button class="btn danger" act="resetData">مسح كل التقدّم</button></div>' +
      '<textarea id="ioBox" class="input hidden" dir="ltr" rows="4"></textarea></div>';
  };

  A.actions.setGoal = (el, v) => {
    S().state.goal = Number(v);
    S().save();
    A.route();
  };
  A.actions.exportData = () => {
    const box = document.getElementById('ioBox');
    box.classList.remove('hidden');
    box.value = S().exportData();
    box.select();
    U.toast('انسخ النص واحفظه في مكان آمن.');
  };
  A.actions.importData = () => {
    const box = document.getElementById('ioBox');
    if (box.classList.contains('hidden') || !box.value.trim()) {
      box.classList.remove('hidden');
      box.value = '';
      box.placeholder = 'الصق هنا النص الذي صدّرته سابقًا ثم اضغط استيراد مرة أخرى';
      box.focus();
      return;
    }
    try {
      S().importData(box.value.trim());
      U.toast('تم استيراد التقدّم.');
      A.renderShell();
      A.route();
    } catch (e) {
      U.toast('النص غير صالح. تأكد أنك نسخته كاملًا.');
    }
  };
  A.actions.resetData = () => {
    if (!window.confirm('سيُحذف كل تقدّمك نهائيًا. هل أنت متأكد؟')) return;
    S().reset();
    A.renderShell();
    location.hash = '#/home';
    A.route();
  };
})(window.App);
