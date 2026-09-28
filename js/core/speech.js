/* German pronunciation through the browser SpeechSynthesis API. */
(function (A) {
  'use strict';
  const S = A.speech = {
    ok: typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function',
    voice: null,
    hasGerman: false
  };

  function pickVoice() {
    if (!S.ok) return;
    const all = window.speechSynthesis.getVoices() || [];
    const de = all.filter(v => /^de/i.test(v.lang));
    S.hasGerman = de.length > 0;
    S.voice = de.find(v => /de.DE/i.test(v.lang) && /google|anna|katja|hedda|petra|helena|natural/i.test(v.name)) ||
      de.find(v => /de.DE/i.test(v.lang)) || de[0] || null;
  }

  S.init = () => {
    if (!S.ok) return;
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
  };

  S.say = (text, slow) => {
    if (!S.ok || !text) {
      if (!S.ok) A.util.toast('متصفحك لا يدعم النطق الصوتي. جرّب Chrome أو Edge أو Safari.');
      return;
    }
    const synth = window.speechSynthesis;
    synth.cancel();
    const st = A.store && A.store.state;
    const useSlow = slow || (st && st.settings.slow);
    const u = new window.SpeechSynthesisUtterance(String(text).replace(/…+/g, ' '));
    u.lang = 'de-DE';
    if (S.voice) u.voice = S.voice;
    u.rate = useSlow ? 0.62 : 0.95;
    setTimeout(() => synth.speak(u), 40);
  };

  /* Reads several lines one after another (dialogues). */
  S.sayAll = (lines) => {
    if (!S.ok || !lines.length) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const st = A.store && A.store.state;
    lines.forEach((t, i) => {
      const u = new window.SpeechSynthesisUtterance(t);
      u.lang = 'de-DE';
      if (S.voice) u.voice = S.voice;
      u.rate = st && st.settings.slow ? 0.62 : 0.92;
      u.pitch = i % 2 ? 0.9 : 1.08;
      synth.speak(u);
    });
  };

  S.stop = () => { if (S.ok) window.speechSynthesis.cancel(); };
})(window.App);
