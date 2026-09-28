/* Level test with a detailed breakdown and study recommendations. */
(function (A) {
  'use strict';
  const U = A.util;
  const S = () => A.store;

  const ADVICE = {
    'المفردات': 'راجع الكلمات المستحقة يوميًا في صفحة المراجعة، وتدرّب على أدوات الأسماء.',
    'القواعد': 'أعد دروس القواعد التي أخطأت فيها، وتدرّب على تصريف الأفعال.',
    'القراءة': 'اقرأ النصوص القصيرة في قسم التمارين، وحاول فهم الفكرة قبل الترجمة.',
    'الاستماع': 'استمع إلى الحوارات مرتين: مرة مع الترجمة ومرة بدونها، واستخدم النطق البطيء.',
    'المواقف اليومية': 'تدرّب على المحادثات التفاعلية، فهي تحاكي المواقف نفسها.'
  };

  function verdict(pct, secs) {
    const low = Object.keys(secs).filter(k => secs[k] < 60);
    if (pct >= 80 && !low.length) return ['ready', 'مستواك قوي في ' + S().state.level + '. يمكنك الانتقال إلى المستوى التالي مع مراجعة خفيفة.'];
    if (pct >= 60) return ['almost', 'أنت قريب من إتقان المستوى. ' + (low.length ? 'قبل الانتقال، قوِّ هذه الأقسام: ' + low.join('، ') + '.' : 'راجع أخطاءك أدناه لترفع النتيجة فوق 80%.')];
    return ['notyet', 'تحتاج مزيدًا من التدريب قبل اجتياز هذا المستوى. ابدأ بالأقسام الأضعف والدروس المقترحة أدناه.'];
  }

  A.views.test = (el, go) => {
    const st = S().state;
    const level = st.level;
    const meta = U.levelMeta(level);
    const hist = st.tests[level] || [];
    if (go === 'start') return run(el, level);
    const pr = S().progress(level);
    el.innerHTML = '<h1 class="pageTitle">اختبار مستوى ' + level + '</h1>' +
      '<div class="hero small"><div class="heroMain"><h2>اختبار شامل لمستوى ' + level + ' · ' + U.esc(meta.ar) + '</h2>' +
      '<p class="muted">خمسة أقسام: المفردات، القواعد، القراءة، الاستماع، والمواقف اليومية. لا يظهر التصحيح أثناء الاختبار، وفي النهاية تحصل على تحليل مفصّل وتوصيات.</p>' +
      '<p class="muted">المدة التقريبية: 20 إلى 30 دقيقة. شغّل الصوت لقسم الاستماع.</p>' +
      (pr.done < pr.lessons / 2 ? '<p class="note">أكملت ' + pr.done + ' من ' + pr.lessons + ' درسًا. يمكنك إجراء الاختبار الآن لقياس مستواك، لكن النتيجة ستكون أدق بعد إكمال معظم الدروس.</p>' : '') +
      (!meta.full ? '<p class="note">محتوى هذا المستوى تمهيدي، لذلك الاختبار قصير ويغطي الدروس المتوفرة فقط.</p>' : '') +
      '<a class="btn primary big" href="#/test/start">ابدأ الاختبار</a></div></div>' +
      (hist.length ? '<div class="card"><h3>محاولاتك السابقة</h3><ul class="plain">' + hist.slice().reverse().map(t =>
        '<li><span>' + new Date(t.t).toLocaleDateString('ar') + '</span><span class="muted small">' + Object.keys(t.sections || {}).map(k => k + ' ' + t.sections[k] + '%').join(' · ') + '</span><b>' + t.pct + '%</b></li>').join('') + '</ul></div>' : '');
  };

  function run(el, level) {
    A.quiz.run(el, A.gen.finalTest(level), {
      mode: 'test', retry: false,
      onDone: (res, e) => results(e, level, res),
      onExit: () => { location.hash = '#/test'; }
    });
  }

  function results(el, level, res) {
    const st = S().state;
    const secs = A.sectionScores(res);
    const v = verdict(res.pct, secs);
    (st.tests[level] || (st.tests[level] = [])).push({ t: Date.now(), pct: res.pct, sections: secs });
    st.tests[level] = st.tests[level].slice(-20);
    S().addXp(S().XP.test);
    S().log('🏁', 'اختبار ' + level + ': ' + res.pct + '%');
    S().checkAch();
    S().save();
    A.updateTop();

    const byLesson = {};
    res.res.forEach(x => {
      const id = x.q.lessonId;
      if (!id || !A.data.lessonMap[id]) return;
      const o = byLesson[id] || (byLesson[id] = { n: 0, bad: 0 });
      o.n += 1; if (!x.ok) o.bad += 1;
    });
    const recs = Object.keys(byLesson).filter(k => byLesson[k].bad).sort((a, b) => byLesson[b].bad - byLesson[a].bad).slice(0, 5).map(k => A.data.lessonMap[k]);
    const weakSecs = Object.keys(secs).filter(k => secs[k] < 70).sort((a, b) => secs[a] - secs[b]);

    const extra = '<p class="verdict ' + v[0] + '">' + v[1] + '</p>';
    const recHtml = '<div class="cols"><div class="card"><h3>ماذا تفعل الآن؟</h3>' +
      (weakSecs.length ? '<ul class="plain">' + weakSecs.map(k => '<li><span><b>' + U.esc(k) + ' (' + secs[k] + '%)</b><br><small class="muted">' + ADVICE[k] + '</small></span></li>').join('') + '</ul>'
        : '<p>كل الأقسام فوق 70%. استمر في المراجعة اليومية للحفاظ على مستواك.</p>') + '</div>' +
      '<div class="card"><h3>دروس مقترحة للمراجعة</h3>' +
      (recs.length ? '<ul class="plain">' + recs.map(l => '<li><a href="#/lesson/' + l.id + '">' + l.icon + ' ' + U.esc(l.ar) + '</a><small class="muted">' + byLesson[l.id].bad + ' خطأ</small></li>').join('') + '</ul>'
        : '<p class="muted">لا توجد دروس محددة تحتاج مراجعة.</p>') + '</div></div>';
    el.innerHTML = A.quiz.summary(res, extra,
      '<a class="btn primary" href="#/review/mistakes">تدرّب على أخطائك</a><a class="btn" href="#/test">صفحة الاختبار</a>') + recHtml;
  }
})(window.App);
