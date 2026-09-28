/* Starter content for A2, B1 and B2.
   The engine treats every level the same way, so these levels grow by adding more lessons,
   words and readings in new files with the same format. */
(function (A) {
  'use strict';

  A.data.units.A2 = [[1, 'الماضي والحياة اليومية']];
  A.data.units.B1 = [[1, 'الجمل المركبة والتعبير عن الرأي']];
  A.data.units.B2 = [[1, 'لغة العمل والنصوص الرسمية']];

  A.addTopic('a2core', 'مفردات A2 أساسية', '📗');
  A.addTopic('b1core', 'مفردات B1 أساسية', '📘');
  A.addTopic('b2core', 'مفردات B2 أساسية', '📙');

  A.addWords('a2core', 'A2', `
|gestern Abend||مساء أمس|last night|Gestern Abend habe ich gekocht.|مساء أمس طبخت.|1
das|Wochenende|Wochenenden|عطلة نهاية الأسبوع|weekend|Am Wochenende habe ich Freunde getroffen.|في عطلة نهاية الأسبوع قابلت أصدقاء.|1
|treffen||يقابل، يلتقي|to meet|Ich treffe meine Freundin im Café.|ألتقي صديقتي في المقهى.|1
|besuchen||يزور|to visit|Wir besuchen unsere Oma.|نزور جدتنا.|1
|anrufen||يتصل هاتفيًا|to call|Ich rufe dich morgen an.|سأتصل بك غدًا.|1
|aufstehen||يستيقظ، ينهض|to get up|Ich stehe um sechs Uhr auf.|أستيقظ في السادسة.|1
|einladen||يدعو|to invite|Ich lade dich zum Essen ein.|أدعوك إلى الطعام.|2
die|Reise|Reisen|رحلة|trip|Die Reise war sehr schön.|كانت الرحلة جميلة جدًا.|1
der|Urlaub|Urlaube|إجازة|holiday|Im Urlaub waren wir am Meer.|في الإجازة كنا على البحر.|1
das|Geschenk|Geschenke|هدية|gift|Das Geschenk ist für meine Mutter.|الهدية لأمي.|1
|schenken||يهدي|to give (a gift)|Ich schenke meinem Vater ein Buch.|أهدي أبي كتابًا.|2
|gefallen||يعجب|to please|Das Kleid gefällt mir.|يعجبني الفستان.|2
|gehören||يخصّ، يملكه|to belong|Das Auto gehört meinem Bruder.|السيارة لأخي.|2
die|Erfahrung|Erfahrungen|خبرة، تجربة|experience|Ich habe viel Erfahrung.|لدي خبرة كبيرة.|2
|schon||بالفعل، سابقًا|already|Ich war schon in Berlin.|كنت في برلين من قبل.|1
|noch nie||لم يسبق أبدًا|never yet|Ich war noch nie in Wien.|لم أكن في فيينا أبدًا.|2
`);

  A.addWords('b1core', 'B1', `
die|Meinung|Meinungen|رأي|opinion|Meiner Meinung nach ist das richtig.|برأيي هذا صحيح.|1
|denken||يظن، يفكر|to think|Ich denke, dass du recht hast.|أظن أنك على حق.|1
|glauben||يعتقد|to believe|Ich glaube, dass es morgen regnet.|أعتقد أنها ستمطر غدًا.|1
der|Grund|Gründe|سبب|reason|Aus diesem Grund lerne ich Deutsch.|لهذا السبب أتعلم الألمانية.|1
der|Vorteil|Vorteile|ميزة|advantage|Das hat viele Vorteile.|لهذا مزايا كثيرة.|1
der|Nachteil|Nachteile|عيب، سلبية|disadvantage|Ein Nachteil ist der Preis.|من السلبيات السعر.|1
die|Umwelt||البيئة|environment|Wir müssen die Umwelt schützen.|يجب أن نحمي البيئة.|2
die|Gesellschaft|Gesellschaften|المجتمع|society|Die Gesellschaft verändert sich.|المجتمع يتغيّر.|2
|sich entscheiden||يقرّر|to decide|Ich habe mich für den Kurs entschieden.|قررت أن أختار الدورة.|2
|sich bewerben||يتقدّم لوظيفة|to apply|Ich bewerbe mich bei einer Firma.|أتقدّم لوظيفة في شركة.|2
die|Ausbildung|Ausbildungen|تدريب مهني|vocational training|Sie macht eine Ausbildung als Pflegerin.|هي تتدرّب لتصبح ممرّضة.|1
die|Integration||الاندماج|integration|Sprache ist wichtig für die Integration.|اللغة مهمة للاندماج.|2
|obwohl||مع أنّ|although|Ich gehe raus, obwohl es regnet.|أخرج مع أنها تمطر.|2
|deshalb||لذلك|therefore|Ich bin müde, deshalb bleibe ich zu Hause.|أنا متعب، لذلك أبقى في البيت.|1
`);

  A.addWords('b2core', 'B2', `
die|Voraussetzung|Voraussetzungen|شرط، متطلّب|requirement|Gute Deutschkenntnisse sind eine Voraussetzung.|المعرفة الجيدة بالألمانية شرط أساسي.|2
die|Auswirkung|Auswirkungen|تأثير، أثر|effect|Die Auswirkungen sind noch unklar.|الآثار ما زالت غير واضحة.|2
|berücksichtigen||يأخذ في الاعتبار|to take into account|Wir müssen die Kosten berücksichtigen.|يجب أن نأخذ التكاليف في الاعتبار.|2
die|Entwicklung|Entwicklungen|تطوّر|development|Die Entwicklung ist positiv.|التطوّر إيجابي.|1
|erheblich||كبير، ملحوظ|considerable|Die Preise sind erheblich gestiegen.|ارتفعت الأسعار بشكل ملحوظ.|2
die|Maßnahme|Maßnahmen|إجراء|measure|Die Regierung plant neue Maßnahmen.|تخطط الحكومة لإجراءات جديدة.|2
|zunehmend||بشكل متزايد|increasingly|Homeoffice wird zunehmend beliebt.|العمل من المنزل يزداد شعبية.|2
die|Herausforderung|Herausforderungen|تحدٍّ|challenge|Das ist eine große Herausforderung.|هذا تحدٍّ كبير.|1
|dennoch||ومع ذلك|nevertheless|Es war schwer, dennoch haben wir es geschafft.|كان صعبًا، ومع ذلك نجحنا.|2
die|Verantwortung|Verantwortungen|مسؤولية|responsibility|Er übernimmt die Verantwortung.|يتحمّل المسؤولية.|1
`);

  A.addLesson({
    id: 'a2l01', level: 'A2', num: 1, icon: '⏪', kind: 'grammar', de: 'Das Perfekt', ar: 'الماضي التام في الكلام اليومي',
    goal: 'تتحدث عما فعلته أمس وفي عطلة نهاية الأسبوع باستخدام haben أو sein مع التصريف الثالث.',
    topics: ['a2core'],
    steps: [
      { h: 'الماضي في الكلام اليومي', p: 'في الكلام اليومي يستخدم الألمان **Perfekt** للحديث عن الماضي:\n{Ich habe gestern Deutsch gelernt.} تعلمت الألمانية أمس.\nالتركيب: **haben أو sein** في الموضع الثاني + **التصريف الثالث** في آخر الجملة.' },
      { h: 'بناء التصريف الثالث', p: 'الأفعال المنتظمة: ge + الجذع + t: {lernen} ← {gelernt}، {machen} ← {gemacht}، {kaufen} ← {gekauft}.\nالأفعال غير المنتظمة تنتهي غالبًا بـ en ويجب حفظها: {sehen} ← {gesehen}، {essen} ← {gegessen}، {trinken} ← {getrunken}.' },
      { h: 'haben أم sein؟', p: 'معظم الأفعال مع **haben**.\nمع **sein**: أفعال الحركة من مكان إلى مكان وتغيّر الحال: {Ich bin nach Berlin gefahren.} {Wir sind ins Kino gegangen.} {Er ist spät aufgestanden.}' },
      { h: 'الأفعال المنفصلة', p: 'ge تأتي بين الجزأين: {aufstehen} ← {aufgestanden}، {einkaufen} ← {eingekauft}، {anrufen} ← {angerufen}.' }
    ],
    phrases: `
Ich habe gestern Deutsch gelernt.|تعلمت الألمانية أمس.
Wir haben Pizza gegessen.|أكلنا البيتزا.
Hast du den Film gesehen?|هل شاهدت الفيلم؟
Ich bin nach Berlin gefahren.|سافرت إلى برلين.
Sie ist spät aufgestanden.|استيقظت متأخرة.
Am Wochenende habe ich eingekauft.|تسوّقت في عطلة نهاية الأسبوع.
Er hat mich angerufen.|اتصل بي.`,
    dialog: `
Lea|Was hast du am Wochenende gemacht?|ماذا فعلت في عطلة نهاية الأسبوع؟
Malik|Ich habe meine Freunde getroffen. Wir sind in den Park gegangen.|قابلت أصدقائي. ذهبنا إلى الحديقة.
Lea|Und am Sonntag?|ويوم الأحد؟
Malik|Am Sonntag habe ich lange geschlafen und dann gekocht.|يوم الأحد نمت طويلًا ثم طبخت.`,
    ex: [
      { fill: 'Ich [habe] Deutsch gelernt.', o: ['habe', 'bin', 'hat'], ar: 'تعلمت الألمانية.' },
      { fill: 'Wir [sind] nach Hamburg gefahren.', o: ['sind', 'haben', 'hat'], ar: 'سافرنا إلى هامبورغ.', w: 'فعل الحركة {fahren} يأخذ {sein}.' },
      { fill: 'Er hat eine Pizza [gegessen].', o: ['gegessen', 'geessen', 'gegesst'], ar: 'أكل بيتزا.' },
      { fill: 'Ich habe Brot [gekauft].', o: ['gekauft', 'gekaufen', 'kaufte'], ar: 'اشتريت خبزًا.' },
      { fill: 'Sie ist um 6 Uhr [aufgestanden].', o: ['aufgestanden', 'geaufstanden', 'aufgesteht'], ar: 'استيقظت في السادسة.' },
      { order: 'Ich habe gestern einen Film gesehen.', ar: 'شاهدت فيلمًا أمس.', alt: ['Gestern habe ich einen Film gesehen.'] },
      { tr: 'أكلنا البيتزا.', de: 'Wir haben Pizza gegessen.' }
    ]
  });

  A.addLesson({
    id: 'a2l02', level: 'A2', num: 2, icon: '🎁', kind: 'grammar', de: 'Der Dativ', ar: 'المفعول غير المباشر (الداتيف)',
    goal: 'تستخدم الداتيف مع أفعال مثل geben و helfen و gefallen ومع mit و bei و von و zu.',
    topics: ['a2core'],
    steps: [
      { h: 'لمن؟', p: 'الداتيف يجيب غالبًا عن سؤال «لمن؟»:\n{Ich gebe dem Mann das Buch.} أعطي الرجل الكتاب.\nالرجل هو المستفيد، والكتاب هو المفعول به المباشر.' },
      {
        h: 'الأدوات في الداتيف', table: {
          head: ['', 'الداتيف', 'مثال'], rows: [
            ['مذكّر', '{dem / einem}', '{dem Vater}'], ['مؤنث', '{der / einer}', '{der Mutter}'],
            ['محايد', '{dem / einem}', '{dem Kind}'], ['جمع', '{den + n}', '{den Kindern}']
          ]
        }
      },
      { h: 'حروف جرّ مع الداتيف دائمًا', p: '{mit}، {bei}، {von}، {zu}، {aus}، {nach}، {seit}:\n{Ich fahre mit dem Bus.} {Ich wohne bei meinen Eltern.} {Ich komme aus der Türkei.}' },
      { h: 'أفعال مع الداتيف', p: '{helfen}: {Ich helfe meiner Mutter.}\n{gefallen}: {Die Jacke gefällt mir.}\n{gehören}: {Das Buch gehört dem Lehrer.}\n{danken}: {Ich danke dir.}' }
    ],
    phrases: `
Ich gebe dem Mann das Buch.|أعطي الرجل الكتاب.
Ich helfe meiner Mutter.|أساعد أمي.
Die Jacke gefällt mir.|تعجبني السترة.
Das Auto gehört meinem Bruder.|السيارة لأخي.
Ich fahre mit dem Zug.|أسافر بالقطار.
Ich wohne bei meinen Eltern.|أسكن عند والديّ.`,
    dialog: `
Verkäuferin|Gefällt Ihnen das Kleid?|هل يعجبك الفستان؟
Kundin|Ja, es gefällt mir sehr. Ich kaufe es meiner Schwester.|نعم، يعجبني كثيرًا. سأشتريه لأختي.
Verkäuferin|Soll ich es als Geschenk verpacken?|هل أغلفه كهدية؟
Kundin|Ja, gern. Danke!|نعم، بكل سرور. شكرًا!`,
    ex: [
      { fill: 'Ich helfe [meiner] Mutter.', o: ['meiner', 'meine', 'meinen'], ar: 'أساعد أمي.' },
      { fill: 'Ich fahre mit [dem] Bus.', o: ['dem', 'den', 'der'], ar: 'أذهب بالحافلة.' },
      { fill: 'Das Kleid gefällt [mir].', o: ['mir', 'mich', 'ich'], ar: 'يعجبني الفستان.' },
      { fill: 'Ich gebe [dem] Kind einen Apfel.', o: ['dem', 'das', 'den'], ar: 'أعطي الطفل تفاحة.' },
      { mc: 'أي حرف جرّ يأخذ الداتيف دائمًا؟', o: ['mit', 'für', 'ohne'] },
      { tr: 'أساعد أمي.', de: 'Ich helfe meiner Mutter.' }
    ]
  });

  A.addLesson({
    id: 'a2l03', level: 'A2', num: 3, icon: '📞', kind: 'situation', de: 'Trennbare Verben im Alltag', ar: 'الأفعال المنفصلة في الحياة اليومية',
    goal: 'تستخدم أفعالًا مثل aufstehen و anrufen و einkaufen و einladen في المضارع والماضي.',
    topics: ['a2core'],
    steps: [
      { h: 'الفعل ينقسم إلى جزأين', p: 'في المضارع يذهب الجزء الأول إلى آخر الجملة:\n{aufstehen}: {Ich stehe um 6 Uhr auf.}\n{anrufen}: {Ich rufe dich morgen an.}\n{einladen}: {Wir laden dich ein.}' },
      { h: 'مع الأفعال المساعدة', p: 'يبقى الفعل موصولًا في آخر الجملة: {Ich muss früh aufstehen.} {Kannst du mich anrufen?}' }
    ],
    phrases: `
Ich stehe um 6 Uhr auf.|أستيقظ في السادسة.
Ich rufe dich morgen an.|سأتصل بك غدًا.
Wir laden dich zum Essen ein.|ندعوك إلى الطعام.
Ich muss heute einkaufen.|يجب أن أتسوّق اليوم.
Kannst du mich später anrufen?|هل يمكنك الاتصال بي لاحقًا؟`,
    dialog: `
Aya|Wann stehst du morgen auf?|متى تستيقظ غدًا؟
Tom|Um sieben. Warum?|في السابعة. لماذا؟
Aya|Ich rufe dich an. Wir kaufen zusammen ein.|سأتصل بك. نتسوّق معًا.
Tom|Gute Idee!|فكرة جيدة!`,
    ex: [
      { mc: 'أي جملة صحيحة؟', o: ['Ich stehe um 6 Uhr auf.', 'Ich aufstehe um 6 Uhr.', 'Ich stehe auf um 6 Uhr.'] },
      { fill: 'Ich rufe dich morgen [an].', o: ['an', 'auf', 'ein'], ar: 'سأتصل بك غدًا.' },
      { fill: 'Ich muss früh [aufstehen].', o: ['aufstehen', 'stehe auf', 'auf stehen'], ar: 'يجب أن أستيقظ مبكرًا.' },
      { order: 'Wir laden dich zum Essen ein.', ar: 'ندعوك إلى الطعام.' }
    ]
  });

  A.addLesson({
    id: 'b1l01', level: 'B1', num: 1, icon: '🔗', kind: 'grammar', de: 'weil und dass', ar: 'الجمل الفرعية: weil و dass',
    goal: 'تعبّر عن السبب والرأي بجمل فرعية يذهب فيها الفعل إلى آخر الجملة.',
    topics: ['b1core'],
    steps: [
      { h: 'الفعل في آخر الجملة الفرعية', p: 'بعد {weil} (لأن) و {dass} (أنّ) يذهب الفعل المصرَّف إلى **آخر الجملة**:\n{Ich lerne Deutsch, weil ich in Deutschland arbeite.}\n{Ich denke, dass Deutsch wichtig ist.}' },
      { h: 'مع فعلين', p: 'الفعل المصرَّف يكون الأخير تمامًا:\n{Ich bleibe zu Hause, weil ich arbeiten muss.}\n{Er sagt, dass er morgen kommen kann.}' },
      { h: 'weil أم denn؟', p: '{denn} تعني أيضًا «لأن» لكن بعدها ترتيب عادي: {Ich bleibe zu Hause, denn ich bin krank.}\nمع {weil}: {Ich bleibe zu Hause, weil ich krank bin.}' }
    ],
    phrases: `
Ich lerne Deutsch, weil ich in Deutschland arbeite.|أتعلم الألمانية لأنني أعمل في ألمانيا.
Ich denke, dass Deutsch wichtig ist.|أظن أن الألمانية مهمة.
Ich bleibe zu Hause, weil ich krank bin.|أبقى في البيت لأنني مريض.
Er sagt, dass er morgen kommt.|يقول إنه سيأتي غدًا.
Ich glaube, dass du recht hast.|أعتقد أنك على حق.`,
    dialog: `
Kollegin|Warum machst du den Kurs?|لماذا تأخذ هذه الدورة؟
Rami|Weil ich eine Ausbildung machen möchte.|لأنني أريد أن أبدأ تدريبًا مهنيًا.
Kollegin|Ich finde, dass das eine gute Idee ist.|أجد أن هذه فكرة جيدة.
Rami|Danke! Ich hoffe, dass ich die Prüfung schaffe.|شكرًا! آمل أن أنجح في الامتحان.`,
    ex: [
      { mc: 'أي جملة صحيحة؟', o: ['Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe zu Hause, weil ich bin krank.', 'Ich bleibe zu Hause, weil bin ich krank.'] },
      { mc: 'أي جملة صحيحة؟', o: ['Ich denke, dass er recht hat.', 'Ich denke, dass er hat recht.', 'Ich denke, dass hat er recht.'] },
      { fill: 'Ich lerne viel, [weil] ich die Prüfung schaffen will.', o: ['weil', 'denn', 'aber'], ar: 'أدرس كثيرًا لأنني أريد النجاح في الامتحان.' },
      { order: 'Ich glaube, dass du recht hast.', ar: 'أعتقد أنك على حق.' },
      { tr: 'أظن أن الألمانية مهمة.', de: 'Ich denke, dass Deutsch wichtig ist.', alt: ['Ich glaube, dass Deutsch wichtig ist.'] }
    ]
  });

  A.addLesson({
    id: 'b1l02', level: 'B1', num: 2, icon: '💭', kind: 'grammar', de: 'Konjunktiv II', ar: 'صيغة التمنّي والأدب: würde و hätte و wäre',
    goal: 'تعبّر عن الأمنيات والاقتراحات وتطلب بأدب.',
    topics: ['b1core'],
    steps: [
      { h: 'لماذا نحتاجها؟', p: 'للأدب: {Könnten Sie mir helfen?}\nللأمنيات: {Ich hätte gern mehr Zeit.}\nللحالات غير الواقعية: {Wenn ich reich wäre, würde ich reisen.}' },
      { h: 'الصيغ الأساسية', p: '{würde} + مصدر لمعظم الأفعال: {Ich würde gern kommen.}\n{hätte} من {haben}، {wäre} من {sein}، {könnte} من {können}.' },
      { h: 'نصيحة', p: '{An deiner Stelle würde ich mehr lernen.} لو كنت مكانك لدرست أكثر.\n{Du solltest zum Arzt gehen.} يجب عليك (ينبغي) أن تذهب إلى الطبيب.' }
    ],
    phrases: `
Könnten Sie mir bitte helfen?|هل يمكنك مساعدتي من فضلك؟
Ich hätte gern mehr Zeit.|أتمنى لو كان لدي وقت أكثر.
Wenn ich Zeit hätte, würde ich reisen.|لو كان لدي وقت لسافرت.
An deiner Stelle würde ich mehr lernen.|لو كنت مكانك لدرست أكثر.
Du solltest zum Arzt gehen.|ينبغي أن تذهب إلى الطبيب.`,
    dialog: `
Nora|Was würdest du machen, wenn du im Lotto gewinnen würdest?|ماذا كنت ستفعل لو ربحت في اليانصيب؟
Karim|Ich würde eine Weltreise machen. Und du?|كنت سأقوم برحلة حول العالم. وأنتِ؟
Nora|Ich würde meinen Eltern ein Haus kaufen.|كنت سأشتري لوالديّ بيتًا.`,
    ex: [
      { fill: 'Wenn ich Zeit [hätte], würde ich reisen.', o: ['hätte', 'habe', 'hatte'], ar: 'لو كان لدي وقت لسافرت.' },
      { fill: '[Könnten] Sie mir bitte helfen?', o: ['Könnten', 'Können', 'Konnten'], ar: 'هل يمكنك مساعدتي من فضلك؟' },
      { fill: 'An deiner Stelle [würde] ich mehr schlafen.', o: ['würde', 'werde', 'wurde'], ar: 'لو كنت مكانك لنمت أكثر.' },
      { mc: 'أي جملة أكثر أدبًا؟', o: ['Könnten Sie das Fenster öffnen?', 'Öffnen Sie das Fenster!', 'Fenster auf!'] },
      { tr: 'ينبغي أن تذهب إلى الطبيب.', de: 'Du solltest zum Arzt gehen.' }
    ]
  });

  A.addLesson({
    id: 'b1l03', level: 'B1', num: 3, icon: '🧩', kind: 'grammar', de: 'Relativsätze', ar: 'الجمل الموصولة',
    goal: 'تصف الأشخاص والأشياء بجمل موصولة مثل: der Mann, der dort steht.',
    topics: ['b1core'],
    steps: [
      { h: 'الذي والتي', p: 'الاسم الموصول يأخذ جنس الاسم الذي يعود إليه، والفعل يذهب إلى آخر الجملة:\n{Das ist der Mann, der neben mir wohnt.}\n{Das ist die Frau, die Deutsch unterrichtet.}\n{Das ist das Auto, das ich kaufen möchte.}' },
      { h: 'مع المفعول به', p: 'إذا كان الموصول مفعولًا به مذكّرًا يصبح {den}: {Der Film, den ich gesehen habe, war gut.}' }
    ],
    phrases: `
Das ist der Mann, der neben mir wohnt.|هذا هو الرجل الذي يسكن بجانبي.
Das ist die Frau, die Deutsch unterrichtet.|هذه هي المرأة التي تدرّس الألمانية.
Das ist das Auto, das ich kaufen möchte.|هذه هي السيارة التي أريد شراءها.
Der Film, den ich gesehen habe, war gut.|الفيلم الذي شاهدته كان جيدًا.`,
    dialog: `
A|Kennst du die Frau, die dort steht?|هل تعرف المرأة الواقفة هناك؟
B|Ja, das ist die Lehrerin, die mir sehr geholfen hat.|نعم، إنها المعلمة التي ساعدتني كثيرًا.`,
    ex: [
      { fill: 'Das ist der Mann, [der] neben mir wohnt.', o: ['der', 'die', 'das'], ar: 'هذا هو الرجل الذي يسكن بجانبي.' },
      { fill: 'Das ist die Frau, [die] Deutsch unterrichtet.', o: ['die', 'der', 'den'], ar: 'هذه هي المرأة التي تدرّس الألمانية.' },
      { fill: 'Der Film, [den] ich gesehen habe, war gut.', o: ['den', 'der', 'das'], ar: 'الفيلم الذي شاهدته كان جيدًا.' },
      { mc: 'أين يأتي الفعل في الجملة الموصولة؟', o: ['في آخر الجملة', 'في الموضع الثاني', 'في البداية'] }
    ]
  });

  A.addLesson({
    id: 'b2l01', level: 'B2', num: 1, icon: '🏭', kind: 'grammar', de: 'Das Passiv', ar: 'المبني للمجهول',
    goal: 'تفهم وتستخدم المبني للمجهول في النصوص الرسمية وأخبار العمل.',
    topics: ['b2core'],
    steps: [
      { h: 'التركيب', p: '{werden} + التصريف الثالث:\n{Das Haus wird gebaut.} يُبنى البيت.\n{Die Briefe werden verschickt.} تُرسَل الرسائل.\nفي الماضي: {Das Haus wurde 1990 gebaut.}' },
      { h: 'مع الأفعال المساعدة', p: '{Die Maßnahmen müssen berücksichtigt werden.} يجب أن تؤخذ الإجراءات في الاعتبار.\n{Das Problem kann gelöst werden.} يمكن حلّ المشكلة.' },
      { h: 'من قام بالفعل؟', p: 'نذكره بـ {von} + داتيف: {Das Gesetz wurde vom Parlament beschlossen.}' }
    ],
    phrases: `
Das Haus wird gebaut.|البيت قيد البناء.
Die Entscheidung wurde gestern getroffen.|اتُّخذ القرار أمس.
Das Problem kann gelöst werden.|يمكن حلّ المشكلة.
Die Kosten müssen berücksichtigt werden.|يجب أخذ التكاليف في الاعتبار.
Das Gesetz wurde vom Parlament beschlossen.|أقرّ البرلمان القانون.`,
    dialog: `
Chefin|Wurde der Bericht schon verschickt?|هل أُرسل التقرير بالفعل؟
Mitarbeiter|Nein, er wird gerade noch geprüft.|لا، ما زال قيد المراجعة.
Chefin|Er muss bis Freitag abgegeben werden.|يجب تسليمه قبل يوم الجمعة.`,
    ex: [
      { fill: 'Das Haus [wird] gebaut.', o: ['wird', 'ist', 'hat'], ar: 'البيت قيد البناء.' },
      { fill: 'Die Entscheidung [wurde] gestern getroffen.', o: ['wurde', 'wird', 'würde'], ar: 'اتُّخذ القرار أمس.' },
      { fill: 'Das Problem kann gelöst [werden].', o: ['werden', 'wird', 'worden'], ar: 'يمكن حلّ المشكلة.' },
      { mc: 'في المبني للمجهول نستخدم:', o: ['werden + Partizip II', 'haben + Partizip II', 'sein + Infinitiv'] }
    ]
  });

  A.addLesson({
    id: 'b2l02', level: 'B2', num: 2, icon: '🔀', kind: 'grammar', de: 'Zweiteilige Konnektoren', ar: 'أدوات الربط المزدوجة',
    goal: 'تربط الأفكار بأسلوب متقدم: nicht nur … sondern auch، zwar … aber، je … desto.',
    topics: ['b2core'],
    steps: [
      { h: 'nicht nur … sondern auch', p: 'ليس فقط … بل أيضًا: {Er spricht nicht nur Deutsch, sondern auch Französisch.}' },
      { h: 'zwar … aber', p: 'صحيح أن … لكن: {Die Wohnung ist zwar klein, aber sie ist günstig.}' },
      { h: 'je … desto', p: 'كلما … كلما: {Je mehr ich lerne, desto besser verstehe ich.}\nلاحظ: بعد {je} الفعل في الآخر، وبعد {desto} الفعل مباشرة.' },
      { h: 'entweder … oder و weder … noch', p: '{Entweder wir fahren mit dem Zug oder mit dem Auto.} إما … أو\n{Ich habe weder Zeit noch Geld.} لا … ولا' }
    ],
    phrases: `
Er spricht nicht nur Deutsch, sondern auch Französisch.|هو لا يتكلم الألمانية فقط، بل الفرنسية أيضًا.
Die Wohnung ist zwar klein, aber sie ist günstig.|صحيح أن الشقة صغيرة، لكنها بسعر مناسب.
Je mehr ich lerne, desto besser verstehe ich.|كلما تعلمت أكثر، فهمت أفضل.
Ich habe weder Zeit noch Geld.|ليس لدي وقت ولا مال.`,
    dialog: `
A|Wie findest du das neue Büro?|ما رأيك في المكتب الجديد؟
B|Es ist zwar modern, aber ziemlich laut.|صحيح أنه حديث، لكنه صاخب نوعًا ما.
A|Je länger man dort arbeitet, desto mehr gewöhnt man sich daran.|كلما عمل المرء هناك أطول، اعتاد عليه أكثر.`,
    ex: [
      { fill: 'Er spricht nicht nur Deutsch, [sondern] auch Englisch.', o: ['sondern', 'aber', 'oder'], ar: 'لا يتكلم الألمانية فقط بل الإنجليزية أيضًا.' },
      { fill: 'Die Wohnung ist [zwar] klein, aber günstig.', o: ['zwar', 'je', 'weder'], ar: 'صحيح أن الشقة صغيرة لكنها مناسبة السعر.' },
      { fill: 'Je mehr ich lerne, [desto] besser spreche ich.', o: ['desto', 'dann', 'so'], ar: 'كلما تعلمت أكثر تكلمت أفضل.' },
      { fill: 'Ich habe weder Zeit [noch] Lust.', o: ['noch', 'oder', 'auch'], ar: 'ليس لدي وقت ولا رغبة.' }
    ]
  });

  A.addReading({ id: 'r12', level: 'A2', lesson: 'a2l01', title: 'Mein Wochenende', text: 'Am Samstag habe ich meine Freunde getroffen. Wir sind in den Park gegangen und haben gegrillt. Am Abend habe ich einen Film gesehen. Am Sonntag habe ich lange geschlafen und dann meine Oma besucht.', tr: 'يوم السبت قابلت أصدقائي. ذهبنا إلى الحديقة وشوينا. في المساء شاهدت فيلمًا. يوم الأحد نمت طويلًا ثم زرت جدتي.', qs: [
    { q: 'ماذا فعلوا في الحديقة؟', o: ['شووا الطعام', 'لعبوا كرة القدم', 'قرؤوا كتبًا'] },
    { q: 'من زار يوم الأحد؟', o: ['جدته', 'أصدقاءه', 'معلمه'] }] });
  A.addReading({ id: 'r13', level: 'B1', lesson: 'b1l01', title: 'Warum ich Deutsch lerne', text: 'Ich lerne Deutsch, weil ich in Deutschland eine Ausbildung machen möchte. Ich denke, dass die Sprache der Schlüssel zur Integration ist. Wenn ich mehr Zeit hätte, würde ich jeden Tag einen Kurs besuchen. Leider muss ich nebenbei arbeiten.', tr: 'أتعلم الألمانية لأنني أريد أن أبدأ تدريبًا مهنيًا في ألمانيا. أظن أن اللغة مفتاح الاندماج. لو كان لدي وقت أكثر لحضرت دورة كل يوم. للأسف يجب أن أعمل إلى جانب ذلك.', qs: [
    { q: 'لماذا يتعلم الألمانية؟', o: ['لأنه يريد تدريبًا مهنيًا', 'لأنه يريد السفر', 'لأن زوجته ألمانية'] },
    { q: 'لماذا لا يحضر دورة كل يوم؟', o: ['لأنه يعمل', 'لأنه مريض', 'لأن الدورة غالية'] }] });
  A.addReading({ id: 'r14', level: 'B2', lesson: 'b2l01', title: 'Homeoffice', text: 'Seit einigen Jahren wird zunehmend im Homeoffice gearbeitet. Zwar sparen die Beschäftigten Zeit, aber viele fühlen sich isoliert. Deshalb werden in vielen Firmen neue Modelle entwickelt, bei denen die Mitarbeiter nur zwei Tage pro Woche ins Büro kommen.', tr: 'منذ بضع سنوات يزداد العمل من المنزل. صحيح أن الموظفين يوفّرون الوقت، لكن كثيرين يشعرون بالعزلة. لذلك تُطوَّر في شركات كثيرة نماذج جديدة يأتي فيها الموظفون إلى المكتب يومين فقط في الأسبوع.', qs: [
    { q: 'ما السلبية المذكورة للعمل من المنزل؟', o: ['الشعور بالعزلة', 'الراتب الأقل', 'ضياع الوقت'] },
    { q: 'ما النموذج الجديد؟', o: ['يومان في المكتب أسبوعيًا', 'العمل كله من المنزل', 'العمل في المكتب كل يوم'] }] });
})(window.App);
