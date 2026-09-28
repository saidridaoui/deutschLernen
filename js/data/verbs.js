/* Verbs with full present tense forms: ich du er/sie/es wir ihr sie/Sie.
   type: regular, vowel (stem vowel change), irregular, modal. */
(function (A) {
  'use strict';
  const V = (inf, ar, en, type, forms, exs, note) => A.addVerb({ inf, ar, en, type, forms, exs, note: note || '', modal: type === 'modal', level: 'A1' });

  V('sein', 'يكون', 'to be', 'irregular', 'bin bist ist sind seid sind', `
Ich bin müde.|أنا متعب.
Wir sind aus Syrien.|نحن من سوريا.
Das ist mein Bruder.|هذا أخي.`, 'فعل شاذ تمامًا، يجب حفظه كما هو.');
  V('haben', 'يملك، لديه', 'to have', 'irregular', 'habe hast hat haben habt haben', `
Ich habe zwei Kinder.|لدي طفلان.
Sie hat keine Zeit.|ليس لديها وقت.
Wir haben Hunger.|نحن جائعون.`, 'لاحظ: {du hast} و {er hat} بدون b.');
  V('kommen', 'يأتي', 'to come', 'regular', 'komme kommst kommt kommen kommt kommen', `
Ich komme aus Marokko.|أنا من المغرب.
Er kommt heute nicht.|هو لن يأتي اليوم.`);
  V('wohnen', 'يسكن', 'to live', 'regular', 'wohne wohnst wohnt wohnen wohnt wohnen', `
Ich wohne in Berlin.|أسكن في برلين.
Wo wohnt ihr?|أين تسكنون؟`);
  V('gehen', 'يذهب مشيًا', 'to go', 'regular', 'gehe gehst geht gehen geht gehen', `
Ich gehe nach Hause.|أذهب إلى البيت.
Wir gehen ins Kino.|نذهب إلى السينما.`);
  V('machen', 'يفعل، يصنع', 'to do', 'regular', 'mache machst macht machen macht machen', `
Was machst du heute?|ماذا تفعل اليوم؟
Sie macht Hausaufgaben.|هي تحلّ الواجبات.`);
  V('sprechen', 'يتكلم', 'to speak', 'vowel', 'spreche sprichst spricht sprechen sprecht sprechen', `
Ich spreche Arabisch.|أتكلم العربية.
Er spricht gut Deutsch.|هو يتكلم الألمانية جيدًا.`, 'يتغير e إلى i مع du و er/sie/es.');
  V('lernen', 'يتعلم', 'to learn', 'regular', 'lerne lernst lernt lernen lernt lernen', `
Ich lerne Deutsch.|أتعلم الألمانية.
Wir lernen jeden Tag.|نتعلم كل يوم.`);
  V('arbeiten', 'يعمل', 'to work', 'regular', 'arbeite arbeitest arbeitet arbeiten arbeitet arbeiten', `
Ich arbeite im Büro.|أعمل في المكتب.
Er arbeitet am Samstag.|هو يعمل يوم السبت.`, 'الجذع ينتهي بـ t، لذلك نضيف e مع du و er و ihr.');
  V('essen', 'يأكل', 'to eat', 'vowel', 'esse isst isst essen esst essen', `
Ich esse gern Reis.|أحب أكل الأرز.
Er isst kein Fleisch.|هو لا يأكل اللحم.`, 'يتغير e إلى i مع du و er/sie/es.');
  V('trinken', 'يشرب', 'to drink', 'regular', 'trinke trinkst trinkt trinken trinkt trinken', `
Ich trinke Tee.|أشرب الشاي.
Sie trinkt keinen Kaffee.|هي لا تشرب القهوة.`);
  V('kaufen', 'يشتري', 'to buy', 'regular', 'kaufe kaufst kauft kaufen kauft kaufen', `
Ich kaufe Brot.|أشتري خبزًا.
Wir kaufen ein Auto.|نشتري سيارة.`);
  V('fahren', 'يذهب بوسيلة نقل، يقود', 'to drive', 'vowel', 'fahre fährst fährt fahren fahrt fahren', `
Ich fahre mit dem Bus.|أذهب بالحافلة.
Er fährt nach Hamburg.|هو يسافر إلى هامبورغ.`, 'يتغير a إلى ä مع du و er/sie/es.');
  V('schlafen', 'ينام', 'to sleep', 'vowel', 'schlafe schläfst schläft schlafen schlaft schlafen', `
Ich schlafe acht Stunden.|أنام ثماني ساعات.
Das Baby schläft.|الرضيع نائم.`, 'يتغير a إلى ä مع du و er/sie/es.');
  V('lesen', 'يقرأ', 'to read', 'vowel', 'lese liest liest lesen lest lesen', `
Ich lese die Zeitung.|أقرأ الجريدة.
Sie liest ein Buch.|هي تقرأ كتابًا.`, 'يتغير e إلى ie مع du و er/sie/es.');
  V('schreiben', 'يكتب', 'to write', 'regular', 'schreibe schreibst schreibt schreiben schreibt schreiben', `
Ich schreibe eine Mail.|أكتب رسالة إلكترونية.
Er schreibt seinen Namen.|هو يكتب اسمه.`);
  V('sehen', 'يرى، يشاهد', 'to see', 'vowel', 'sehe siehst sieht sehen seht sehen', `
Ich sehe den Bus.|أرى الحافلة.
Er sieht einen Film.|هو يشاهد فيلمًا.`, 'يتغير e إلى ie مع du و er/sie/es.');
  V('möchten', 'يودّ', 'would like', 'modal', 'möchte möchtest möchte möchten möchtet möchten', `
Ich möchte einen Kaffee.|أودّ قهوة.
Sie möchte Deutsch lernen.|هي تودّ أن تتعلم الألمانية.`, 'مع ich و er الصيغة واحدة: {möchte}.');
  V('können', 'يستطيع', 'can', 'modal', 'kann kannst kann können könnt können', `
Ich kann gut kochen.|أستطيع الطبخ جيدًا.
Er kann heute nicht kommen.|لا يستطيع أن يأتي اليوم.`, 'مع ich و er الصيغة واحدة: {kann}.');
  V('müssen', 'يجب عليه', 'must', 'modal', 'muss musst muss müssen müsst müssen', `
Ich muss arbeiten.|يجب أن أعمل.
Du musst viel lernen.|يجب أن تتعلم كثيرًا.`, 'مع ich و er الصيغة واحدة: {muss}.');
  V('heißen', 'اسمه', 'to be called', 'regular', 'heiße heißt heißt heißen heißt heißen', `
Ich heiße Omar.|اسمي عمر.
Wie heißt du?|ما اسمك؟`, 'الجذع ينتهي بـ ß، لذلك مع du نضيف t فقط: {du heißt}.');
  V('nehmen', 'يأخذ', 'to take', 'vowel', 'nehme nimmst nimmt nehmen nehmt nehmen', `
Ich nehme den Bus.|آخذ الحافلة.
Er nimmt die Suppe.|هو يأخذ الحساء.`, 'يتغير مع du و er: {du nimmst}، {er nimmt}.');
  V('helfen', 'يساعد', 'to help', 'vowel', 'helfe hilfst hilft helfen helft helfen', `
Ich helfe dir.|أساعدك.
Sie hilft ihrer Mutter.|هي تساعد أمها.`, 'يتغير e إلى i مع du و er/sie/es.');
  V('brauchen', 'يحتاج', 'to need', 'regular', 'brauche brauchst braucht brauchen braucht brauchen', `
Ich brauche Hilfe.|أحتاج مساعدة.
Er braucht einen Arzt.|هو يحتاج طبيبًا.`);
  V('mögen', 'يحب', 'to like', 'irregular', 'mag magst mag mögen mögt mögen', `
Ich mag Kaffee.|أحب القهوة.
Sie mag keinen Fisch.|هي لا تحب السمك.`, 'مع ich و er الصيغة واحدة: {mag}.');
})(window.App);
