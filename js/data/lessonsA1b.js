/* A1 lessons 13 to 25. Same format as lessonsA1.js. */
(function (A) {
  'use strict';

  A.addLesson({
    id: 'a1l13', level: 'A1', num: 13, icon: '🍽️', kind: 'situation', de: 'Im Restaurant', ar: 'في المطعم',
    goal: 'تطلب الطعام والشراب بأدب، وتسأل عن السعر والمكونات، وتدفع الحساب.',
    topics: ['food', 'drinks', 'restaurant'],
    steps: [
      { h: 'كيف تطلب؟', p: 'ثلاث عبارات تكفيك:\n{Ich möchte …} أودّ: {Ich möchte einen Tee.}\n{Ich hätte gern …} أودّ (أكثر أدبًا): {Ich hätte gern eine Suppe.}\n{Ich nehme …} سآخذ: {Ich nehme das Hähnchen.}' },
      { h: 'einen و eine و ein', p: 'عند الطلب يصبح المذكّر **einen**:\n{der Kaffee} ← {einen Kaffee}\n{die Cola} ← {eine Cola}\n{das Wasser} ← {ein Wasser}\nستفهم السبب في درس المفعول به، الآن احفظها كعبارات جاهزة.' },
      { h: 'أسئلة مفيدة', p: '{Haben Sie …?} هل لديكم: {Haben Sie Tee?}\n{Was kostet …?} كم سعر: {Was kostet die Suppe?}\n{Ist da Schweinefleisch drin?} هل فيه لحم خنزير؟\n{Ich esse kein Schweinefleisch.} لا آكل لحم الخنزير.\n{Haben Sie etwas ohne Fleisch?} هل لديكم شيء بدون لحم؟' },
      { h: 'الدفع', p: '{Die Rechnung, bitte.} أو {Zahlen, bitte!} الحساب من فضلك.\nالنادل يسأل: {Zusammen oder getrennt?} معًا أم كلٌّ على حدة؟\nالبقشيش {das Trinkgeld} في ألمانيا بين 5 و10 بالمئة تقريبًا. تقول مثلًا: {Das macht 18 Euro.} فتجيب: {20, bitte. Stimmt so.} أي احتفظ بالباقي.' }
    ],
    phrases: `
Die Speisekarte, bitte.|قائمة الطعام من فضلك.
Ich möchte einen Tee.|أودّ شايًا.
Ich hätte gern eine Suppe.|أودّ حساءً.
Ich nehme das Hähnchen mit Reis.|سآخذ الدجاج مع الأرز.
Haben Sie Mineralwasser?|هل لديكم مياه معدنية؟
Was kostet der Salat?|كم سعر السلطة؟
Ich esse kein Schweinefleisch.|لا آكل لحم الخنزير.
Die Rechnung, bitte.|الحساب من فضلك.
Zusammen oder getrennt?|معًا أم كلٌّ على حدة؟
Stimmt so.|احتفظ بالباقي.
Guten Appetit!|بالهناء والشفاء!`,
    dialog: `
Kellner|Guten Abend! Was möchten Sie trinken?|مساء الخير! ماذا تودّ أن تشرب؟
Gast|Ich hätte gern ein Wasser, bitte.|أودّ ماءً من فضلك.
Kellner|Und zum Essen?|وللأكل؟
Gast|Ist in der Suppe Fleisch?|هل في الحساء لحم؟
Kellner|Nein, die Suppe ist vegetarisch.|لا، الحساء نباتي.
Gast|Gut, dann nehme ich die Suppe.|جيد، إذن سآخذ الحساء.
Kellner|Gern.|بكل سرور.
Gast|Die Rechnung, bitte.|الحساب من فضلك.
Kellner|Das macht 12,50 Euro.|المجموع 12,50 يورو.`,
    ex: [
      { mc: 'تريد دفع الحساب. ماذا تقول؟', o: ['Die Rechnung, bitte.', 'Die Speisekarte, bitte.', 'Guten Appetit!'] },
      { fill: 'Ich möchte [einen] Kaffee.', o: ['einen', 'ein', 'eine'], ar: 'أودّ قهوة.', w: '{der Kaffee} مذكّر، وبعد {möchte} يصبح {einen Kaffee}.' },
      { fill: 'Ich möchte [eine] Cola.', o: ['eine', 'einen', 'ein'], ar: 'أودّ كولا.' },
      { fill: 'Ich hätte gern [ein] Wasser.', o: ['ein', 'einen', 'eine'], ar: 'أودّ ماءً.' },
      { mc: 'النادل يسأل {Zusammen oder getrennt?} ماذا يعني؟', o: ['هل تدفعون معًا أم كلٌّ على حدة؟', 'هل تريدون طاولة؟', 'هل الطعام جيد؟'] },
      { mc: 'كيف تسأل إن كان في الطعام لحم خنزير؟', o: ['Ist da Schweinefleisch drin?', 'Wo ist das Schweinefleisch?', 'Ich bin Schweinefleisch.'] },
      { mc: 'أي عبارة أكثر أدبًا للطلب؟', o: ['Ich hätte gern einen Tee.', 'Tee!', 'Ich will Tee.'] },
      { order: 'Ich nehme das Hähnchen mit Reis.', ar: 'سآخذ الدجاج مع الأرز.' },
      { tr: 'الحساب من فضلك.', de: 'Die Rechnung, bitte.', alt: ['Zahlen, bitte.'] }
    ]
  });

  A.addLesson({
    id: 'a1l14', level: 'A1', num: 14, icon: '🛍️', kind: 'situation', de: 'Einkaufen', ar: 'التسوق',
    goal: 'تسأل عن الأسعار والمقاسات والألوان، وتقرر الشراء أو الرفض بأدب.',
    topics: ['shopping'],
    steps: [
      { h: 'السؤال عن السعر', p: '{Wie viel kostet das?} أو {Was kostet das?} كم سعر هذا؟\nمع المفرد {kostet}: {Was kostet die Jacke?}\nمع الجمع {kosten}: {Was kosten die Schuhe?}' },
      { h: 'في محل الملابس', p: '{Ich suche eine Jacke.} أبحث عن سترة.\n{Haben Sie das in Größe M?} هل لديكم هذا بمقاس M؟\n{Haben Sie das auch in Blau?} هل لديكم هذا باللون الأزرق أيضًا؟\n{Kann ich das anprobieren?} هل يمكنني تجربة هذا؟\n{Danke, ich schaue nur.} شكرًا، أتفرّج فقط.' },
      { h: 'القرار', p: '{Das ist zu teuer.} هذا غالٍ أكثر من اللازم.\n{Das ist mir zu groß.} هذا كبير عليّ.\n{Ich nehme das.} سآخذه.\n{Kann ich mit Karte zahlen?} هل يمكنني الدفع بالبطاقة؟\nانتبه: بعض المحلات الصغيرة تقبل النقد فقط: {Nur bar.}' },
      { link: '#/practice/shop', label: 'افتح المتجر التفاعلي وتدرّب' }
    ],
    phrases: `
Wie viel kostet das?|كم سعر هذا؟
Was kosten die Schuhe?|كم سعر الحذاء؟
Ich suche eine Jacke.|أبحث عن سترة.
Haben Sie das in Größe M?|هل لديكم هذا بمقاس M؟
Haben Sie das auch in Blau?|هل لديكم هذا باللون الأزرق أيضًا؟
Kann ich das anprobieren?|هل يمكنني تجربة هذا؟
Das ist zu teuer.|هذا غالٍ أكثر من اللازم.
Ich nehme das.|سآخذ هذا.
Kann ich mit Karte zahlen?|هل يمكنني الدفع بالبطاقة؟
Danke, ich schaue nur.|شكرًا، أتفرّج فقط.`,
    dialog: `
Verkäuferin|Kann ich Ihnen helfen?|هل يمكنني مساعدتك؟
Kunde|Ja, ich suche einen Pullover.|نعم، أبحث عن كنزة.
Verkäuferin|Welche Größe?|أي مقاس؟
Kunde|Größe L.|مقاس L.
Verkäuferin|Hier, der Pullover kostet 39 Euro.|تفضل، سعر الكنزة 39 يورو.
Kunde|Hm, das ist zu teuer. Haben Sie etwas Billigeres?|همم، هذا غالٍ. هل لديكم شيء أرخص؟
Verkäuferin|Ja, dieser hier kostet 19 Euro.|نعم، هذه سعرها 19 يورو.
Kunde|Gut, ich nehme ihn.|جيد، سآخذها.`,
    ex: [
      { mc: 'تريد معرفة سعر الحذاء. ماذا تقول؟', o: ['Was kosten die Schuhe?', 'Was kostet die Schuhe?', 'Wo sind die Schuhe?'], w: '{die Schuhe} جمع، لذلك {kosten}.' },
      { fill: 'Was [kostet] die Jacke?', o: ['kostet', 'kosten', 'kostest'], ar: 'كم سعر السترة؟' },
      { mc: 'البائع يسأل {Kann ich Ihnen helfen?} وأنت تتفرّج فقط. ماذا تقول؟', o: ['Danke, ich schaue nur.', 'Ja, ich helfe Ihnen.', 'Das ist zu teuer.'] },
      { mc: 'تريد تجربة البنطال. ماذا تقول؟', o: ['Kann ich die Hose anprobieren?', 'Kann ich die Hose kaufen nicht?', 'Ich bin die Hose.'] },
      { fill: 'Das ist [zu] teuer.', o: ['zu', 'sehr gut', 'nicht'], ar: 'هذا غالٍ أكثر من اللازم.' },
      { mc: 'ما معنى {Nur bar}؟', o: ['نقدًا فقط', 'بالبطاقة فقط', 'مغلق'] },
      { order: 'Haben Sie das auch in Blau?', ar: 'هل لديكم هذا باللون الأزرق أيضًا؟' },
      { tr: 'سآخذ هذا.', de: 'Ich nehme das.' }
    ]
  });

  A.addLesson({
    id: 'a1l15', level: 'A1', num: 15, icon: '🛒', kind: 'situation', de: 'Im Supermarkt', ar: 'في السوبرماركت',
    goal: 'تجد المنتجات، وتطلب الكميات عند الركن، وتتعامل مع الصندوق والعربون.',
    topics: ['supermarket'],
    steps: [
      { h: 'الكميات', p: 'في الألمانية نقول الكمية ثم المنتج مباشرة، بدون كلمة «من»:\n{ein Kilo Tomaten} كيلو طماطم\n{200 Gramm Käse} 200 غرام جبن\n{ein Liter Milch} لتر حليب\n{eine Flasche Wasser} زجاجة ماء\n{eine Packung Reis} علبة أرز\n{ein Stück Kuchen} قطعة كعك' },
      { h: 'في السوبرماركت', p: '{Wo finde ich …?} أين أجد: {Wo finde ich Milch?}\nعند ركن الجبن واللحم يسألك البائع: {Was darf es sein?} ماذا تريد؟ ثم {Noch etwas?} شيء آخر؟\nتجيب: {Nein, danke. Das ist alles.} لا، شكرًا. هذا كل شيء.' },
      { h: 'عند الصندوق', p: '{Brauchen Sie eine Tüte?} هل تحتاج كيسًا؟ الأكياس غالبًا ليست مجانية.\n{Das macht 12,40 Euro.} المجموع 12,40 يورو.\n{Mit Karte oder bar?} بالبطاقة أم نقدًا؟\n{Möchten Sie den Kassenbon?} هل تريد الإيصال؟' },
      { tip: 'في ألمانيا على كثير من الزجاجات والعلب عربون {das Pfand}. أعد الزجاجات الفارغة إلى الآلة في السوبرماركت، ستحصل على إيصال تخصمه من حسابك عند الصندوق.' }
    ],
    phrases: `
Wo finde ich Milch?|أين أجد الحليب؟
Ich brauche ein Kilo Tomaten.|أحتاج كيلو طماطم.
200 Gramm Käse, bitte.|200 غرام جبن من فضلك.
Eine Flasche Wasser, bitte.|زجاجة ماء من فضلك.
Das ist alles.|هذا كل شيء.
Brauchen Sie eine Tüte?|هل تحتاج كيسًا؟
Nein, danke. Ich habe eine Tasche.|لا، شكرًا. معي حقيبة.
Das macht 12,40 Euro.|المجموع 12,40 يورو.
Die Tomaten sind im Angebot.|الطماطم عليها عرض.`,
    dialog: `
Verkäufer|Guten Tag! Was darf es sein?|مرحبًا! ماذا تريد؟
Kundin|Ich hätte gern 300 Gramm Käse.|أودّ 300 غرام جبن.
Verkäufer|Gern. Noch etwas?|بكل سرور. شيء آخر؟
Kundin|Ja, ein Stück Kuchen, bitte.|نعم، قطعة كعك من فضلك.
Verkäufer|Sonst noch etwas?|أي شيء آخر؟
Kundin|Nein, danke. Das ist alles.|لا، شكرًا. هذا كل شيء.`,
    ex: [
      { mc: 'كيف تقول «كيلو تفاح»؟', o: ['ein Kilo Äpfel', 'ein Kilo von Äpfel', 'Äpfel ein Kilo'], w: 'في الألمانية الكمية ثم المنتج مباشرة بدون {von}.' },
      { mc: 'البائع يسأل {Noch etwas?} ولا تريد شيئًا آخر. ماذا تقول؟', o: ['Nein, danke. Das ist alles.', 'Ja, bitte.', 'Das ist teuer.'] },
      { fill: 'Wo [finde] ich Reis?', o: ['finde', 'findet', 'finden'], ar: 'أين أجد الأرز؟' },
      { fill: 'Eine [Flasche] Wasser, bitte.', o: ['Flasche', 'Kilo', 'Stück'], ar: 'زجاجة ماء من فضلك.' },
      { mc: 'ما معنى {das Pfand}؟', o: ['عربون يُسترد على الزجاجات', 'تخفيض', 'إيصال الشراء'] },
      { mc: 'ما معنى {Was darf es sein?}', o: ['ماذا تريد؟', 'كم السعر؟', 'هل تدفع نقدًا؟'] },
      { order: 'Ich brauche ein Kilo Tomaten.', ar: 'أحتاج كيلو طماطم.' },
      { tr: 'أين أجد الحليب؟', de: 'Wo finde ich Milch?', alt: ['Wo finde ich die Milch?'] }
    ]
  });

  A.addLesson({
    id: 'a1l16', level: 'A1', num: 16, icon: '🚆', kind: 'situation', de: 'Unterwegs mit Bus und Bahn', ar: 'المواصلات',
    goal: 'تشتري تذكرة، وتسأل عن المواعيد والرصيف، وتفهم الإعلانات البسيطة في المحطة.',
    topics: ['transport'],
    steps: [
      { h: 'وسائل النقل', p: '{der Bus} حافلة، {die Straßenbahn} ترام، {der Zug} و {die Bahn} قطار، {das Taxi}، {das Fahrrad} دراجة.\nنقول {mit} قبلها: {mit dem Bus}، {mit der Bahn}، {mit dem Zug}، {mit dem Fahrrad}.\nوللمشي: {zu Fuß}.' },
      { h: 'التذكرة', p: '{Eine Fahrkarte nach Hamburg, bitte.} تذكرة إلى هامبورغ من فضلك.\n{Einfach oder hin und zurück?} ذهاب فقط أم ذهاب وعودة؟\nمع المدن نستخدم **nach** للاتجاه: {nach Berlin}، {nach Köln}.\nفي بعض المدن يجب ختم التذكرة في آلة صغيرة قبل الركوب.' },
      { h: 'في المحطة', p: '{Wann fährt der Zug nach München?} متى يغادر القطار إلى ميونخ؟\n{Von welchem Gleis?} من أي رصيف؟\n{Der Zug hat Verspätung.} القطار متأخر.\n{Wo muss ich umsteigen?} أين يجب أن أغيّر القطار؟' },
      { h: 'أفعال تنفصل', p: '{einsteigen} يصعد، {aussteigen} ينزل، {umsteigen} يغيّر.\nهذه الأفعال تنفصل في الجملة: الجزء الأول يذهب إلى آخر الجملة:\n{Ich steige hier aus.} أنزل هنا.\n{Wir steigen in Frankfurt um.} نغيّر في فرانكفورت.' }
    ],
    phrases: `
Eine Fahrkarte nach Hamburg, bitte.|تذكرة إلى هامبورغ من فضلك.
Einfach oder hin und zurück?|ذهاب فقط أم ذهاب وعودة؟
Wann fährt der Zug nach München?|متى يغادر القطار إلى ميونخ؟
Von welchem Gleis fährt der Zug?|من أي رصيف يغادر القطار؟
Der Zug hat Verspätung.|القطار متأخر.
Wo ist die Haltestelle?|أين الموقف؟
Fährt dieser Bus zum Bahnhof?|هل تذهب هذه الحافلة إلى المحطة؟
Ich steige hier aus.|أنزل هنا.
Wo muss ich umsteigen?|أين يجب أن أغيّر؟
Ich fahre mit dem Bus zur Arbeit.|أذهب إلى العمل بالحافلة.`,
    dialog: `
Reisender|Entschuldigung, fährt dieser Bus zum Bahnhof?|المعذرة، هل تذهب هذه الحافلة إلى المحطة؟
Fahrer|Nein, nehmen Sie die Linie 5.|لا، خذ الخط 5.
Reisender|Wo ist die Haltestelle?|أين الموقف؟
Fahrer|Dort drüben, gegenüber.|هناك في الجهة المقابلة.
Reisender|Und wie viele Stationen sind es?|وكم محطة؟
Fahrer|Vier Stationen.|أربع محطات.
Reisender|Vielen Dank!|شكرًا جزيلًا!`,
    ex: [
      { fill: 'Eine Fahrkarte [nach] Hamburg, bitte.', o: ['nach', 'aus', 'in'], ar: 'تذكرة إلى هامبورغ من فضلك.', w: 'للاتجاه إلى مدينة نستخدم {nach}.' },
      { fill: 'Ich fahre [mit] dem Bus.', o: ['mit', 'zu', 'auf'], ar: 'أذهب بالحافلة.' },
      { mc: 'ما معنى {Der Zug hat Verspätung}؟', o: ['القطار متأخر', 'القطار ممتلئ', 'القطار سريع'] },
      { mc: 'ما معنى {hin und zurück}؟', o: ['ذهاب وعودة', 'ذهاب فقط', 'يمين ويسار'] },
      { mc: 'أي جملة صحيحة؟', o: ['Ich steige hier aus.', 'Ich aussteige hier.', 'Ich steige aus hier.'], w: 'في الأفعال المنفصلة يذهب الجزء الأول إلى آخر الجملة: {Ich steige hier aus.}' },
      { mc: 'تريد معرفة الرصيف. ماذا تسأل؟', o: ['Von welchem Gleis fährt der Zug?', 'Wie viel kostet das Gleis?', 'Wer ist das Gleis?'] },
      { order: 'Wann fährt der Zug nach München?', ar: 'متى يغادر القطار إلى ميونخ؟' },
      { tr: 'أين الموقف؟', de: 'Wo ist die Haltestelle?' }
    ]
  });

  A.addLesson({
    id: 'a1l17', level: 'A1', num: 17, icon: '🧭', kind: 'situation', de: 'Nach dem Weg fragen', ar: 'السؤال عن الطريق',
    goal: 'تسأل عن مكان وتفهم وصف الطريق: يمين ويسار ومباشرة وبجانب ومقابل.',
    topics: ['city', 'directions'],
    steps: [
      { h: 'السؤال', p: 'ابدأ دائمًا بـ {Entschuldigung}:\n{Entschuldigung, wo ist der Bahnhof?} المعذرة، أين المحطة؟\n{Wie komme ich zur Post?} كيف أصل إلى البريد؟\n{Gibt es hier eine Apotheke?} هل توجد صيدلية هنا؟\n{Ist das weit?} هل هذا بعيد؟' },
      { h: 'zum و zur', p: 'بعد {zu} (إلى) تندمج الأداة، احفظها كقطعة واحدة:\n{der Bahnhof} ← {zum Bahnhof}\n{das Kino} ← {zum Kino}\n{die Post} ← {zur Post}\nالقاعدة: der و das ← zum، و die ← zur.' },
      { h: 'الاتجاهات', p: '{Gehen Sie geradeaus.} اذهب مباشرة إلى الأمام.\n{Gehen Sie nach links / nach rechts.} اذهب يسارًا أو يمينًا.\n{Biegen Sie an der Ampel links ab.} انعطف يسارًا عند الإشارة.\n{Es ist nur fünf Minuten zu Fuß.} خمس دقائق فقط مشيًا.' },
      {
        h: 'أين يقع المكان؟', table: {
          head: ['الكلمة', 'المعنى', 'مثال'], rows: [
            ['{neben}', 'بجانب', '{neben der Bank}'], ['{gegenüber}', 'مقابل', '{gegenüber vom Kino}'],
            ['{vor}', 'أمام', '{vor dem Bahnhof}'], ['{hinter}', 'خلف', '{hinter der Schule}'],
            ['{zwischen}', 'بين', '{zwischen der Post und der Bank}'], ['{an der Ecke}', 'عند الناصية', '{Die Bäckerei ist an der Ecke.}']
          ]
        }
      },
      { tip: 'بعد neben و vor و hinter تتغير الأداة: der و das تصبحان dem، و die تصبح der. في مستوى A1 يكفي أن تحفظ الأمثلة كما هي.' }
    ],
    phrases: `
Entschuldigung, wo ist der Bahnhof?|المعذرة، أين محطة القطار؟
Wie komme ich zur Post?|كيف أصل إلى البريد؟
Gehen Sie geradeaus.|اذهب مباشرة إلى الأمام.
Gehen Sie nach links.|اذهب يسارًا.
Die Apotheke ist neben der Bank.|الصيدلية بجانب البنك.
Das Café ist gegenüber vom Kino.|المقهى مقابل السينما.
Ist das weit?|هل هذا بعيد؟
Nein, nur fünf Minuten zu Fuß.|لا، خمس دقائق فقط مشيًا.
Gibt es hier einen Supermarkt?|هل يوجد هنا سوبرماركت؟`,
    dialog: `
Touristin|Entschuldigung, wie komme ich zum Rathaus?|المعذرة، كيف أصل إلى مبنى البلدية؟
Mann|Gehen Sie hier geradeaus bis zur Ampel.|اذهبي مباشرة حتى الإشارة.
Touristin|Und dann?|ثم؟
Mann|Dann gehen Sie rechts. Das Rathaus ist neben der Kirche.|ثم اذهبي يمينًا. مبنى البلدية بجانب الكنيسة.
Touristin|Ist das weit?|هل هو بعيد؟
Mann|Nein, nur zehn Minuten.|لا، عشر دقائق فقط.
Touristin|Vielen Dank!|شكرًا جزيلًا!`,
    ex: [
      { fill: 'Wie komme ich [zum] Bahnhof?', o: ['zum', 'zur', 'zu der'], ar: 'كيف أصل إلى المحطة؟', w: '{der Bahnhof} مذكّر، لذلك {zum}.' },
      { fill: 'Wie komme ich [zur] Post?', o: ['zur', 'zum', 'zu'], ar: 'كيف أصل إلى البريد؟', w: '{die Post} مؤنثة، لذلك {zur}.' },
      { mc: 'ما معنى {geradeaus}؟', o: ['مباشرة إلى الأمام', 'يمينًا', 'خلف'] },
      { mc: 'ما معنى {gegenüber}؟', o: ['مقابل', 'بجانب', 'بين'] },
      { mc: 'كيف تبدأ السؤال بأدب؟', o: ['Entschuldigung, wo ist die Apotheke?', 'Hey, Apotheke?', 'Wo die Apotheke ist?'] },
      { fill: 'Die Bank ist [neben] der Post.', o: ['neben', 'nach', 'mit'], ar: 'البنك بجانب البريد.' },
      { order: 'Wie komme ich zur Post?', ar: 'كيف أصل إلى البريد؟' },
      { tr: 'هل هذا بعيد؟', de: 'Ist das weit?' }
    ]
  });

  A.addLesson({
    id: 'a1l18', level: 'A1', num: 18, icon: '🏠', kind: 'vocab', de: 'Wohnen', ar: 'البيت والشقة',
    goal: 'تصف شقتك وغرفتك وأثاثك، وتتحدث عن الإيجار والجيران.',
    topics: ['home'],
    steps: [
      { h: 'الغرف', p: '{die Küche} مطبخ، {das Bad} حمّام، {das Schlafzimmer} غرفة النوم، {das Wohnzimmer} غرفة المعيشة، {der Balkon} شرفة.\n\nفي إعلانات السكن الألمانية: «3 Zimmer» تعني ثلاث غرف بدون المطبخ والحمّام.' },
      { h: 'وصف البيت', p: '{Das ist …} هذا: {Das ist mein Zimmer.}\n{Meine Wohnung hat drei Zimmer.} شقتي فيها ثلاث غرف.\n{In meinem Zimmer ist ein Bett.} في غرفتي سرير.\n{In der Küche gibt es einen Tisch.} في المطبخ توجد طاولة.\n{es gibt} تعني «يوجد» وهي عبارة مهمة جدًا.' },
      { h: 'مشاكل صغيرة', p: '{Die Heizung ist kaputt.} التدفئة معطّلة.\n{Die Waschmaschine funktioniert nicht.} الغسالة لا تعمل.\nتقولها للمؤجّر {der Vermieter}.\n\nالإيجار: {die Miete}. {Kaltmiete} بدون التدفئة والمصاريف، {Warmmiete} معها.' }
    ],
    phrases: `
Das ist mein Zimmer.|هذه غرفتي.
Meine Wohnung hat drei Zimmer.|شقتي فيها ثلاث غرف.
In meinem Zimmer ist ein Bett.|في غرفتي سرير.
In der Küche gibt es einen Tisch.|في المطبخ توجد طاولة.
Die Küche ist klein, aber schön.|المطبخ صغير لكنه جميل.
Die Miete ist 600 Euro.|الإيجار 600 يورو.
Die Heizung ist kaputt.|التدفئة معطّلة.
Mein Nachbar ist sehr nett.|جاري لطيف جدًا.
Ich suche eine Wohnung.|أبحث عن شقة.`,
    dialog: `
Frau Berg|Wie ist deine neue Wohnung?|كيف شقتك الجديدة؟
Samir|Sie ist schön. Sie hat zwei Zimmer und einen Balkon.|جميلة. فيها غرفتان وشرفة.
Frau Berg|Ist die Küche groß?|هل المطبخ كبير؟
Samir|Nein, sie ist klein. Aber sie ist neu.|لا، إنه صغير. لكنه جديد.
Frau Berg|Und die Miete?|والإيجار؟
Samir|550 Euro warm.|550 يورو شاملة التدفئة.`,
    ex: [
      { mc: 'ما معنى {das Schlafzimmer}؟', o: ['غرفة النوم', 'غرفة المعيشة', 'المطبخ'] },
      { mc: 'ما معنى {es gibt}؟', o: ['يوجد', 'يعطي', 'يذهب'] },
      { fill: 'In der Küche gibt es [einen] Tisch.', o: ['einen', 'ein', 'eine'], ar: 'في المطبخ توجد طاولة.', w: 'بعد {es gibt} يصبح المذكّر {einen}.' },
      { fill: 'Meine Wohnung [hat] drei Zimmer.', o: ['hat', 'ist', 'habe'], ar: 'شقتي فيها ثلاث غرف.' },
      { mc: 'التدفئة لا تعمل. ماذا تقول للمؤجّر؟', o: ['Die Heizung ist kaputt.', 'Die Heizung ist sauber.', 'Die Heizung ist schön.'] },
      { mc: 'ما أداة {Zimmer}؟', o: ['das', 'der', 'die'] },
      { order: 'Das ist mein Zimmer.', ar: 'هذه غرفتي.' },
      { tr: 'أبحث عن شقة.', de: 'Ich suche eine Wohnung.' }
    ]
  });

  A.addLesson({
    id: 'a1l19', level: 'A1', num: 19, icon: '💼', kind: 'vocab', de: 'Arbeit und Schule', ar: 'العمل والدراسة',
    goal: 'تتحدث عن مهنتك ومكان عملك وساعات العمل وعن دورتك في المدرسة.',
    topics: ['work', 'school'],
    steps: [
      { h: 'المهنة بدون أداة', p: 'عند ذكر المهنة بعد {sein} لا نستخدم أداة:\n{Ich bin Lehrer.} ✓\n«Ich bin ein Lehrer» ✗\n\nوللمؤنث نضيف غالبًا **in**: {der Lehrer} ← {die Lehrerin}، {der Koch} ← {die Köchin}.\nالسؤال: {Was sind Sie von Beruf?} أو {Was machst du beruflich?}' },
      { h: 'مكان العمل', p: '{Ich arbeite bei Siemens.} أعمل لدى شركة سيمنس (مع اسم الشركة نستخدم bei).\n{Ich arbeite in einem Restaurant.} أعمل في مطعم.\n{Ich arbeite als Koch.} أعمل طباخًا.\n{Meine Kollegen sind nett.} زملائي لطفاء.' },
      { h: 'ساعات العمل', p: '{Ich arbeite von 8 bis 16 Uhr.} أعمل من الثامنة حتى الرابعة.\n{Um 12 Uhr habe ich Pause.} استراحتي في الثانية عشرة.\n{Am Wochenende habe ich frei.} أنا في عطلة في نهاية الأسبوع.' },
      { h: 'في الدورة', p: '{Ich lerne Deutsch in einem Kurs.} أتعلم الألمانية في دورة.\n{Der Kurs beginnt um 9 Uhr.}\nجمل تحتاجها في الصف:\n{Ich habe eine Frage.} لدي سؤال.\n{Wie sagt man das auf Deutsch?} كيف نقول هذا بالألمانية؟\n{Können Sie das bitte wiederholen?} هل يمكنك التكرار من فضلك؟' }
    ],
    phrases: `
Was sind Sie von Beruf?|ما مهنتك؟
Ich bin Lehrer.|أنا معلم.
Sie ist Ärztin.|هي طبيبة.
Ich arbeite als Koch.|أعمل طباخًا.
Ich arbeite von 8 bis 16 Uhr.|أعمل من الثامنة حتى الرابعة.
Meine Kollegen sind nett.|زملائي لطفاء.
Heute habe ich frei.|اليوم عندي عطلة.
Ich habe eine Frage.|لدي سؤال.
Wie sagt man das auf Deutsch?|كيف نقول هذا بالألمانية؟
Der Kurs beginnt um 9 Uhr.|تبدأ الدورة في التاسعة.`,
    dialog: `
Julia|Was machst du beruflich?|ماذا تعمل؟
Hassan|Ich bin Elektriker. Und du?|أنا كهربائي. وأنتِ؟
Julia|Ich bin Krankenpflegerin.|أنا ممرّضة.
Hassan|Wo arbeitest du?|أين تعملين؟
Julia|Im Krankenhaus. Ich arbeite oft nachts.|في المستشفى. أعمل ليلًا غالبًا.
Hassan|Das ist sicher anstrengend.|هذا متعب بالتأكيد.`,
    ex: [
      { mc: 'أي جملة صحيحة؟', o: ['Ich bin Ingenieur.', 'Ich bin ein Ingenieur.', 'Ich habe Ingenieur.'], w: 'مع المهنة بعد {sein} لا نستخدم أداة.' },
      { mc: 'ما المؤنث من {der Lehrer}؟', o: ['die Lehrerin', 'die Lehrer', 'das Lehrerin'] },
      { fill: 'Ich arbeite [von] 8 bis 16 Uhr.', o: ['von', 'um', 'am'], ar: 'أعمل من الثامنة حتى الرابعة.' },
      { fill: 'Ich arbeite [als] Koch.', o: ['als', 'wie', 'von'], ar: 'أعمل طباخًا.' },
      { mc: 'لم تفهم المعلم. ماذا تقول؟', o: ['Können Sie das bitte wiederholen?', 'Ich verstehe alles.', 'Das ist richtig.'] },
      { mc: 'ما معنى {der Kollege}؟', o: ['زميل', 'مدير', 'زبون'] },
      { order: 'Ich habe eine Frage.', ar: 'لدي سؤال.' },
      { tr: 'أنا طالب.', de: 'Ich bin Student.', alt: ['Ich bin Studentin.', 'Ich bin Schüler.'] }
    ]
  });

  A.addLesson({
    id: 'a1l20', level: 'A1', num: 20, icon: '🩺', kind: 'situation', de: 'Gesundheit', ar: 'الصحة والاحتياجات الأساسية',
    goal: 'تقول إنك مريض، وتصف ما يؤلمك ببساطة، وتطلب موعدًا أو مساعدة.',
    topics: ['health', 'body'],
    steps: [
      { h: 'كيف تقول إنك مريض', p: '{Ich bin krank.} أنا مريض.\n{Mir geht es nicht gut.} لست بخير. (احفظها كما هي)\n{Ich habe Kopfschmerzen.} عندي صداع.\n{Ich habe Bauchschmerzen.} عندي ألم في البطن.\n{Ich habe Fieber.} عندي حمّى.\n{Ich habe Husten.} عندي سعال.' },
      { h: 'ما الذي يؤلمك؟', p: 'طريقتان بسيطتان:\n{Ich habe …schmerzen}: {Ich habe Zahnschmerzen.} عندي ألم في الأسنان.\n{Mein … tut weh}: {Mein Bein tut weh.} رجلي تؤلمني.\n{Meine Hand tut weh.} يدي تؤلمني.' },
      { h: 'موعد عند الطبيب', p: 'في ألمانيا تحتاج غالبًا إلى موعد {der Termin}:\n{Ich möchte einen Termin machen.} أودّ أن أحجز موعدًا.\n{Ich brauche einen Arzt.} أحتاج طبيبًا.\nخذ معك بطاقة التأمين {die Versichertenkarte}.\nالدواء من الصيدلية {die Apotheke}، وأحيانًا تحتاج وصفة {das Rezept}.' },
      { h: 'حالات الطوارئ', p: '{Hilfe!} النجدة!\n{Ich brauche Hilfe.} أحتاج مساعدة.\n{Rufen Sie bitte einen Krankenwagen!} اتصل بسيارة إسعاف من فضلك!\n\nرقم الطوارئ والإسعاف في ألمانيا وأوروبا: **112**. رقم الشرطة: **110**.' }
    ],
    phrases: `
Ich bin krank.|أنا مريض.
Mir geht es nicht gut.|لستُ بخير.
Ich habe Kopfschmerzen.|عندي صداع.
Ich habe Fieber.|عندي حمّى.
Mein Bein tut weh.|رجلي تؤلمني.
Ich brauche einen Arzt.|أحتاج طبيبًا.
Ich möchte einen Termin machen.|أودّ أن أحجز موعدًا.
Ich brauche Hilfe.|أحتاج مساعدة.
Rufen Sie bitte einen Krankenwagen!|اتصل بسيارة إسعاف من فضلك!
Gute Besserung!|أتمنى لك الشفاء!`,
    dialog: `
Ärztin|Guten Tag! Was fehlt Ihnen?|مرحبًا! ممَّ تشكو؟
Patient|Ich habe Halsschmerzen und Fieber.|عندي ألم في الحلق وحمّى.
Ärztin|Seit wann?|منذ متى؟
Patient|Seit zwei Tagen.|منذ يومين.
Ärztin|Ich schreibe Ihnen ein Rezept. Trinken Sie viel Tee.|سأكتب لك وصفة. اشرب الكثير من الشاي.
Patient|Danke schön.|شكرًا جزيلًا.
Ärztin|Gute Besserung!|أتمنى لك الشفاء!`,
    ex: [
      { fill: 'Ich [bin] krank.', o: ['bin', 'habe', 'ist'], ar: 'أنا مريض.', w: 'مع الصفة {krank} نستخدم {sein}: {Ich bin krank.}' },
      { fill: 'Ich [habe] Fieber.', o: ['habe', 'bin', 'hat'], ar: 'عندي حمّى.', w: 'مع الأسماء مثل {Fieber} نستخدم {haben}: {Ich habe Fieber.}' },
      { fill: 'Mein Kopf [tut] weh.', o: ['tut', 'tun', 'ist'], ar: 'رأسي يؤلمني.' },
      { fill: 'Meine Füße [tun] weh.', o: ['tun', 'tut', 'sind'], ar: 'قدماي تؤلمانني.', w: 'مع الجمع نقول {tun weh}.' },
      { mc: 'ما رقم الإسعاف في ألمانيا؟', o: ['112', '110', '911'] },
      { mc: 'تتصل بالعيادة. ماذا تقول؟', o: ['Ich möchte einen Termin machen.', 'Ich möchte die Rechnung.', 'Ich möchte ein Ticket.'] },
      { mc: 'صديقك مريض. ماذا تقول له؟', o: ['Gute Besserung!', 'Guten Appetit!', 'Herzlichen Glückwunsch!'] },
      { order: 'Ich brauche einen Arzt.', ar: 'أحتاج طبيبًا.' },
      { tr: 'لستُ بخير.', de: 'Mir geht es nicht gut.' }
    ]
  });

  A.addLesson({
    id: 'a1l21', level: 'A1', num: 21, icon: '🔑', kind: 'grammar', de: 'Modalverben', ar: 'الأفعال المساعدة: können و müssen و möchten',
    goal: 'تعبّر عن القدرة والضرورة والرغبة، وتضع الفعل الثاني في آخر الجملة.',
    topics: [],
    steps: [
      { h: 'ثلاثة أفعال مهمة', p: '{können} يستطيع: {Ich kann schwimmen.}\n{müssen} يجب: {Ich muss arbeiten.}\n{möchten} يودّ: {Ich möchte schlafen.}' },
      {
        h: 'التصريف', table: {
          head: ['الضمير', '{können}', '{müssen}', '{möchten}'], rows: [
            ['{ich}', '{kann}', '{muss}', '{möchte}'], ['{du}', '{kannst}', '{musst}', '{möchtest}'],
            ['{er / sie / es}', '{kann}', '{muss}', '{möchte}'], ['{wir}', '{können}', '{müssen}', '{möchten}'],
            ['{ihr}', '{könnt}', '{müsst}', '{möchtet}'], ['{sie / Sie}', '{können}', '{müssen}', '{möchten}']
          ]
        }
      },
      { h: 'لاحظ', p: 'مع {ich} و {er/sie/es} الصيغة واحدة وبدون نهاية: {ich kann}، {er kann}. هذا مختلف عن الأفعال العادية.' },
      { h: 'مكان الفعل الثاني', p: 'الفعل المساعد في الموضع الثاني، والفعل الآخر بصيغة المصدر في **آخر الجملة**:\n{Ich kann heute nicht kommen.}\n{Du musst viel lernen.}\n{Wir möchten ein Auto kaufen.}\n\nفي العربية نقول «أستطيع أن أسبح» بكلمة «أن». في الألمانية لا نضيف شيئًا: «Ich kann zu schwimmen» ✗، {Ich kann schwimmen.} ✓' },
      { h: 'مع السؤال', p: '{Kannst du mir helfen?} هل يمكنك مساعدتي؟\n{Können Sie bitte langsam sprechen?} هل يمكنك التكلم ببطء من فضلك؟\n{Muss ich hier warten?} هل يجب أن أنتظر هنا؟\n{Möchtest du etwas trinken?} هل تودّ أن تشرب شيئًا؟' }
    ],
    phrases: `
Ich kann gut kochen.|أستطيع الطبخ جيدًا.
Kannst du mir helfen?|هل يمكنك مساعدتي؟
Ich muss heute arbeiten.|يجب أن أعمل اليوم.
Du musst viel lernen.|يجب أن تتعلم كثيرًا.
Wir möchten ein Auto kaufen.|نودّ أن نشتري سيارة.
Möchtest du etwas trinken?|هل تودّ أن تشرب شيئًا؟
Können Sie bitte langsam sprechen?|هل يمكنك التكلم ببطء من فضلك؟
Ich kann heute nicht kommen.|لا أستطيع أن آتي اليوم.
Muss ich hier warten?|هل يجب أن أنتظر هنا؟`,
    dialog: `
Lukas|Kannst du am Samstag kommen?|هل تستطيع أن تأتي يوم السبت؟
Amir|Leider nicht. Ich muss arbeiten.|للأسف لا. يجب أن أعمل.
Lukas|Und am Sonntag?|ويوم الأحد؟
Amir|Am Sonntag kann ich. Was möchtest du machen?|يوم الأحد أستطيع. ماذا تودّ أن نفعل؟
Lukas|Ich möchte Fußball spielen.|أودّ أن ألعب كرة القدم.
Amir|Super, gern!|رائع، بكل سرور!`,
    ex: [
      { fill: 'Ich [kann] gut schwimmen.', o: ['kann', 'kanne', 'können'], ar: 'أستطيع السباحة جيدًا.', w: 'مع {ich}: {ich kann} بدون نهاية.' },
      { fill: 'Er [muss] heute arbeiten.', o: ['muss', 'musst', 'müssen'], ar: 'يجب أن يعمل اليوم.' },
      { fill: '[Möchtest] du einen Tee?', o: ['Möchtest', 'Möchte', 'Möchten'], ar: 'هل تودّ شايًا؟' },
      { fill: 'Wir [können] morgen kommen.', o: ['können', 'kann', 'könnt'], ar: 'نستطيع أن نأتي غدًا.' },
      { mc: 'أي جملة صحيحة؟', o: ['Ich kann schwimmen.', 'Ich kann zu schwimmen.', 'Ich kann schwimme.'], w: 'بعد الأفعال المساعدة يأتي المصدر بدون {zu}.' },
      { mc: 'أي جملة صحيحة؟', o: ['Ich muss heute arbeiten.', 'Ich muss arbeiten heute.', 'Ich arbeiten muss heute.'], w: 'الفعل الثاني يذهب إلى آخر الجملة.' },
      { order: 'Kannst du mir helfen?', ar: 'هل يمكنك مساعدتي؟' },
      { order: 'Ich möchte ein Auto kaufen.', ar: 'أودّ أن أشتري سيارة.' },
      { tr: 'يجب أن أعمل.', de: 'Ich muss arbeiten.' }
    ]
  });

  A.addLesson({
    id: 'a1l22', level: 'A1', num: 22, icon: '🚫', kind: 'grammar', de: 'nicht oder kein?', ar: 'النفي: nicht و kein',
    goal: 'تعرف متى تستخدم nicht ومتى تستخدم kein، وأين تضع nicht في الجملة.',
    topics: [],
    steps: [
      { h: 'الفكرة الأساسية', p: '**kein** ينفي **اسمًا** بلا أداة أو مع ein. كأنك تقول «لا يوجد» أو «ليس لدي»:\n{Ich habe ein Auto.} ← {Ich habe kein Auto.}\n{Ich habe Zeit.} ← {Ich habe keine Zeit.}\n\n**nicht** ينفي كل شيء آخر: الفعل، الصفة، المكان، الزمن، والاسم مع der أو die أو das أو mein.' },
      {
        h: 'أمثلة جنبًا إلى جنب', table: {
          head: ['الجملة', 'النفي', 'لماذا؟'], rows: [
            ['{Das ist ein Tisch.}', '{Das ist kein Tisch.}', 'اسم مع ein'], ['{Ich trinke Kaffee.}', '{Ich trinke keinen Kaffee.}', 'اسم بلا أداة'],
            ['{Ich arbeite.}', '{Ich arbeite nicht.}', 'فعل'], ['{Das ist teuer.}', '{Das ist nicht teuer.}', 'صفة'],
            ['{Das ist mein Buch.}', '{Das ist nicht mein Buch.}', 'اسم مع mein'], ['{Ich wohne in Berlin.}', '{Ich wohne nicht in Berlin.}', 'مكان']
          ]
        }
      },
      { h: 'أشكال kein', p: 'تأخذ kein نفس نهاية ein:\n{kein} مع der و das: {kein Stuhl}، {kein Auto}\n{keine} مع die والجمع: {keine Zeit}، {keine Kinder}\n{keinen} مع المذكّر كمفعول به: {Ich habe keinen Bruder.}' },
      { h: 'أين نضع nicht؟', p: 'غالبًا في **آخر الجملة** عند نفي الفعل: {Ich komme heute nicht.}\nأو **قبل** الكلمة التي تنفيها: {Das ist nicht gut.} {Ich wohne nicht hier.}\nمع فعلين: قبل الفعل الأخير: {Ich kann nicht kommen.}' },
      { tip: 'اختبار سريع: هل يمكنك وضع ein أمام الكلمة أو هي بلا أداة؟ استخدم kein. في غير ذلك استخدم nicht.' }
    ],
    phrases: `
Ich habe kein Auto.|ليس لدي سيارة.
Ich habe keine Zeit.|ليس لدي وقت.
Ich habe keinen Bruder.|ليس لدي أخ.
Wir haben keine Kinder.|ليس لدينا أطفال.
Ich arbeite heute nicht.|لا أعمل اليوم.
Das ist nicht teuer.|هذا ليس غاليًا.
Das ist nicht mein Buch.|هذا ليس كتابي.
Ich verstehe das nicht.|لا أفهم هذا.
Ich esse kein Fleisch.|لا آكل اللحم.
Ich kann nicht kommen.|لا أستطيع أن آتي.`,
    dialog: `
Nina|Hast du ein Auto?|هل لديك سيارة؟
Tarek|Nein, ich habe kein Auto. Ich fahre Fahrrad.|لا، ليس لدي سيارة. أركب الدراجة.
Nina|Ist das nicht anstrengend?|أليس هذا متعبًا؟
Tarek|Nein, das ist nicht schwer. Und es ist gesund.|لا، ليس صعبًا. وهو صحي.
Nina|Stimmt!|صحيح!`,
    ex: [
      { fill: 'Ich habe [kein] Auto.', o: ['kein', 'nicht', 'keine'], ar: 'ليس لدي سيارة.', w: 'نفي اسم مع ein: {ein Auto} ← {kein Auto}.' },
      { fill: 'Das ist [nicht] teuer.', o: ['nicht', 'kein', 'keine'], ar: 'هذا ليس غاليًا.', w: 'نفي صفة يكون بـ {nicht}.' },
      { fill: 'Ich habe [keine] Zeit.', o: ['keine', 'kein', 'nicht'], ar: 'ليس لدي وقت.' },
      { fill: 'Ich arbeite heute [nicht].', o: ['nicht', 'kein', 'keine'], ar: 'لا أعمل اليوم.' },
      { fill: 'Das ist [nicht] mein Buch.', o: ['nicht', 'kein', 'keine'], ar: 'هذا ليس كتابي.', w: 'مع {mein} نستخدم {nicht}.' },
      { fill: 'Ich habe [keinen] Bruder.', o: ['keinen', 'kein', 'nicht'], ar: 'ليس لدي أخ.', w: '{der Bruder} مذكّر ومفعول به بعد {haben}، لذلك {keinen}.' },
      { mc: 'أي جملة صحيحة؟', o: ['Ich esse kein Fleisch.', 'Ich esse nicht Fleisch.', 'Ich nicht esse Fleisch.'] },
      { mc: 'أي جملة صحيحة؟', o: ['Ich kann nicht kommen.', 'Ich kann kommen nicht.', 'Ich nicht kann kommen.'] },
      { tr: 'لا أفهم هذا.', de: 'Ich verstehe das nicht.' }
    ]
  });

  A.addLesson({
    id: 'a1l23', level: 'A1', num: 23, icon: '🎯', kind: 'grammar', de: 'Der Akkusativ', ar: 'المفعول به (الأكوزاتيف)',
    goal: 'تفهم متى تتغير der إلى den و ein إلى einen، وتستخدمها مع haben و brauchen و kaufen.',
    topics: [],
    steps: [
      { h: 'الفاعل والمفعول به', p: 'في جملة {Ich kaufe den Tisch.}:\nمن يشتري؟ {ich} هو الفاعل.\nماذا أشتري؟ {den Tisch} هو المفعول به.\n\nفي العربية نقول «المفعول به منصوب»، وتتغير الحركة: «اشتريتُ الكتابَ». في الألمانية تتغير **الأداة**.' },
      {
        h: 'الخبر الجيد: المذكّر فقط يتغير', table: {
          head: ['', 'الفاعل', 'المفعول به'], rows: [
            ['مذكّر', '{der / ein / kein}', '{den / einen / keinen}'],
            ['مؤنث', '{die / eine / keine}', '{die / eine / keine}'],
            ['محايد', '{das / ein / kein}', '{das / ein / kein}'],
            ['جمع', '{die / keine}', '{die / keine}']
          ]
        }
      },
      { h: 'أفعال تحتاج مفعولًا به', p: '{haben}: {Ich habe einen Bruder.}\n{brauchen}: {Ich brauche einen Arzt.}\n{kaufen}: {Ich kaufe den Pullover.}\n{möchten}: {Ich möchte einen Kaffee.}\n{nehmen}: {Ich nehme den Salat.}\n{sehen}: {Ich sehe den Bus.}\n{es gibt}: {Es gibt einen Park.}' },
      { h: 'الضمائر أيضًا', p: 'الضمير المذكّر يتغير كذلك: {er} ← {ihn}.\n{Der Pullover ist schön. Ich nehme ihn.}\n{Die Jacke ist schön. Ich nehme sie.}\n{Das Hemd ist schön. Ich nehme es.}' },
      { tip: 'ركّز على المذكّر فقط: اسأل نفسك «هل الكلمة der؟ وهل هي مفعول به؟» إذا كان الجواب نعم فالأداة den أو einen.' }
    ],
    phrases: `
Ich habe einen Bruder.|لدي أخ.
Ich brauche einen Arzt.|أحتاج طبيبًا.
Ich kaufe den Tisch.|أشتري الطاولة.
Ich möchte einen Kaffee.|أودّ قهوة.
Ich nehme den Salat.|سآخذ السلطة.
Ich sehe den Bus.|أرى الحافلة.
Wir haben eine Tochter.|لدينا ابنة.
Ich kaufe das Buch.|أشتري الكتاب.
Der Pullover ist schön. Ich nehme ihn.|الكنزة جميلة. سآخذها.`,
    dialog: `
Verkäufer|Suchen Sie etwas?|هل تبحث عن شيء؟
Kunde|Ja, ich brauche einen Tisch für die Küche.|نعم، أحتاج طاولة للمطبخ.
Verkäufer|Wie finden Sie den Tisch hier?|ما رأيك في هذه الطاولة؟
Kunde|Der Tisch ist schön. Was kostet er?|الطاولة جميلة. كم سعرها؟
Verkäufer|89 Euro.|89 يورو.
Kunde|Gut, ich nehme ihn.|جيد، سآخذها.`,
    ex: [
      { fill: 'Ich habe [einen] Bruder.', o: ['einen', 'ein', 'eine'], ar: 'لدي أخ.', w: '{der Bruder} مذكّر ومفعول به، لذلك {einen}.' },
      { fill: 'Ich kaufe [den] Tisch.', o: ['den', 'der', 'dem'], ar: 'أشتري الطاولة.' },
      { fill: 'Ich brauche [eine] Tasche.', o: ['eine', 'einen', 'ein'], ar: 'أحتاج حقيبة.', w: 'المؤنث لا يتغير: {eine Tasche}.' },
      { fill: 'Ich nehme [das] Hähnchen.', o: ['das', 'den', 'der'], ar: 'سآخذ الدجاج.', w: 'المحايد لا يتغير: {das Hähnchen}.' },
      { fill: 'Wir sehen [den] Bus.', o: ['den', 'der', 'die'], ar: 'نرى الحافلة.' },
      { fill: 'Der Pullover ist schön. Ich nehme [ihn].', o: ['ihn', 'er', 'es'], ar: 'الكنزة جميلة. سآخذها.' },
      { mc: 'في جملة {Der Mann kauft den Apfel.} من الفاعل؟', o: ['der Mann', 'den Apfel', 'kauft'] },
      { mc: 'أي أداة تتغير في المفعول به؟', o: ['المذكّر فقط', 'المؤنث فقط', 'كل الأدوات'] },
      { tr: 'أحتاج طبيبًا.', de: 'Ich brauche einen Arzt.' }
    ]
  });

  A.addLesson({
    id: 'a1l24', level: 'A1', num: 24, icon: '✨', kind: 'vocab', de: 'Adjektive', ar: 'الصفات والوصف',
    goal: 'تصف الأشخاص والأشياء بصفات أساسية وتستخدم sehr و zu و nicht so.',
    topics: ['adjectives'],
    steps: [
      { h: 'الصفة بعد sein لا تتغير', p: 'في مستوى A1 نضع الصفة غالبًا بعد {sein}، وفي هذه الحالة **لا تتغير أبدًا**:\n{Der Mann ist groß.}\n{Die Frau ist groß.}\n{Die Kinder sind groß.}\n\nبينما في العربية نقول «كبير» و«كبيرة» و«كبار».' },
      {
        h: 'الأضداد', table: {
          head: ['الصفة', 'ضدها'], rows: [
            ['{groß} كبير', '{klein} صغير'], ['{alt} قديم، كبير السن', '{neu} جديد، {jung} شاب'],
            ['{gut} جيد', '{schlecht} سيئ'], ['{teuer} غالٍ', '{billig} رخيص'], ['{schnell} سريع', '{langsam} بطيء'],
            ['{lang} طويل', '{kurz} قصير'], ['{leicht} سهل', '{schwer} صعب'], ['{voll} ممتلئ', '{leer} فارغ']
          ]
        }
      },
      { h: 'sehr و zu و nicht so', p: '{sehr} جدًا: {Das ist sehr schön.}\n{zu} أكثر من اللازم (سلبي): {Das ist zu teuer.}\n{nicht so} ليس كثيرًا: {Das ist nicht so schwer.}\n\nانتبه: {zu teuer} يعني أنك لن تشتريه، أما {sehr teuer} فمجرد وصف.' },
      { h: 'السؤال عن الوصف', p: '{Wie ist …?} كيف هو: {Wie ist deine Wohnung?} {Sie ist klein, aber schön.}\n{Wie findest du …?} ما رأيك في: {Wie findest du den Film?} {Ich finde ihn interessant.}\n\nعندما تأتي الصفة قبل الاسم ({ein großes Haus}) تأخذ نهايات، وستتعلمها في مستوى A2.' }
    ],
    phrases: `
Das Haus ist groß.|البيت كبير.
Die Wohnung ist klein, aber schön.|الشقة صغيرة لكنها جميلة.
Mein Bruder ist jung.|أخي صغير السن.
Das Auto ist alt.|السيارة قديمة.
Der Zug ist sehr schnell.|القطار سريع جدًا.
Das ist zu teuer.|هذا غالٍ أكثر من اللازم.
Deutsch ist nicht so schwer.|الألمانية ليست صعبة جدًا.
Wie findest du den Film?|ما رأيك في الفيلم؟
Ich finde ihn interessant.|أجده مثيرًا للاهتمام.`,
    dialog: `
Clara|Wie ist dein Deutschkurs?|كيف دورة الألمانية؟
Yasin|Er ist gut. Die Lehrerin ist sehr nett.|جيدة. المعلمة لطيفة جدًا.
Clara|Ist Deutsch schwer?|هل الألمانية صعبة؟
Yasin|Die Grammatik ist schwer, aber die Wörter sind leicht.|القواعد صعبة، لكن الكلمات سهلة.
Clara|Du sprichst schon sehr gut!|أنت تتكلم جيدًا جدًا بالفعل!`,
    ex: [
      { mc: 'ما ضد {groß}؟', o: ['klein', 'lang', 'alt'] },
      { mc: 'ما ضد {teuer}؟', o: ['billig', 'schnell', 'neu'] },
      { mc: 'أي جملة صحيحة؟', o: ['Die Frau ist groß.', 'Die Frau ist große.', 'Die Frau ist großer.'], w: 'بعد {sein} لا تتغير الصفة.' },
      { fill: 'Die Kinder [sind] klein.', o: ['sind', 'ist', 'seid'], ar: 'الأطفال صغار.' },
      { mc: 'لا تريد شراء المعطف لأنه غالٍ. ماذا تقول؟', o: ['Der Mantel ist zu teuer.', 'Der Mantel ist sehr billig.', 'Der Mantel ist neu.'] },
      { mc: 'ما معنى {langsam}؟', o: ['بطيء', 'طويل', 'سهل'] },
      { order: 'Die Wohnung ist klein, aber schön.', ar: 'الشقة صغيرة لكنها جميلة.' },
      { tr: 'البيت كبير.', de: 'Das Haus ist groß.' }
    ]
  });

  A.addLesson({
    id: 'a1l25', level: 'A1', num: 25, icon: '🧳', kind: 'situation', de: 'Deutsch im Alltag', ar: 'الألمانية للحياة اليومية',
    goal: 'تجمع كل ما تعلمته في مواقف حقيقية: المواعيد، الهوايات، طلب المساعدة، وسوء الفهم.',
    topics: ['everyday'],
    steps: [
      { h: 'حجز موعد', p: '{Ich möchte einen Termin machen.} أودّ حجز موعد.\n{Haben Sie am Montag Zeit?} هل لديك وقت يوم الاثنين؟\n{Geht es um 10 Uhr?} هل يناسب في العاشرة؟\n{Das passt gut.} هذا يناسبني.\n{Am Dienstag kann ich leider nicht.} يوم الثلاثاء لا أستطيع للأسف.' },
      { h: 'ما تحبه', p: '{Ich mag Kaffee.} أحب القهوة. ({mögen} مع الأسماء)\n{Ich spiele gern Fußball.} أحب لعب كرة القدم. ({gern} مع الأفعال)\n{Ich koche nicht gern.} لا أحب الطبخ.\n{Was machst du gern?} ماذا تحب أن تفعل؟' },
      { h: 'عندما لا تفهم', p: 'هذه أهم الجمل للحياة اليومية، احفظها جيدًا:\n{Wie bitte?} عفوًا؟\n{Ich verstehe das nicht.} لا أفهم هذا.\n{Können Sie das bitte wiederholen?} هل يمكنك التكرار؟\n{Sprechen Sie bitte langsam.} تكلّم ببطء من فضلك.\n{Was bedeutet das?} ماذا يعني هذا؟\n{Wie schreibt man das?} كيف يُكتب هذا؟' },
      { h: 'طلب المساعدة', p: '{Können Sie mir helfen?} هل يمكنك مساعدتي؟\n{Ich brauche Hilfe.} أحتاج مساعدة.\n{Ich habe mich verlaufen.} ضللت الطريق.\n{Ich habe meinen Schlüssel verloren.} أضعت مفتاحي.' },
      { link: '#/roleplay', label: 'طبّق كل ذلك في المحادثات التفاعلية' }
    ],
    phrases: `
Ich möchte einen Termin machen.|أودّ حجز موعد.
Haben Sie am Montag Zeit?|هل لديك وقت يوم الاثنين؟
Das passt gut.|هذا يناسبني.
Ich spiele gern Fußball.|أحب لعب كرة القدم.
Ich mag Kaffee.|أحب القهوة.
Wie bitte?|عفوًا؟
Ich verstehe das nicht.|لا أفهم هذا.
Sprechen Sie bitte langsam.|تكلّم ببطء من فضلك.
Was bedeutet das?|ماذا يعني هذا؟
Können Sie mir helfen?|هل يمكنك مساعدتي؟`,
    dialog: `
Rezeption|Praxis Dr. Lang, guten Tag.|عيادة الدكتور لانغ، مرحبًا.
Anrufer|Guten Tag. Ich möchte einen Termin machen.|مرحبًا. أودّ حجز موعد.
Rezeption|Geht es am Donnerstag um 9 Uhr?|هل يناسبك الخميس في التاسعة؟
Anrufer|Wie bitte? Können Sie das wiederholen?|عفوًا؟ هل يمكنك التكرار؟
Rezeption|Am Donnerstag um 9 Uhr.|يوم الخميس في التاسعة.
Anrufer|Ja, das passt gut. Danke!|نعم، هذا يناسبني. شكرًا!`,
    ex: [
      { mc: 'لم تفهم ما قاله الشخص. ماذا تقول؟', o: ['Wie bitte?', 'Genau!', 'Bis bald!'] },
      { mc: 'أي جملة صحيحة؟', o: ['Ich spiele gern Fußball.', 'Ich gern spiele Fußball.', 'Ich spiele Fußball gern ist.'] },
      { fill: 'Ich [mag] Tee.', o: ['mag', 'möchte gern', 'gern'], ar: 'أحب الشاي.' },
      { mc: 'الموعد يناسبك. ماذا تقول؟', o: ['Das passt gut.', 'Das ist zu teuer.', 'Das verstehe ich nicht.'] },
      { mc: 'الشخص يتكلم بسرعة. ماذا تطلب؟', o: ['Sprechen Sie bitte langsam.', 'Sprechen Sie bitte schnell.', 'Sprechen Sie bitte nicht.'] },
      { fill: 'Am Dienstag [kann] ich leider nicht.', o: ['kann', 'bin', 'habe'], ar: 'يوم الثلاثاء لا أستطيع للأسف.' },
      { order: 'Können Sie mir helfen?', ar: 'هل يمكنك مساعدتي؟' },
      { tr: 'ماذا يعني هذا؟', de: 'Was bedeutet das?' }
    ]
  });
})(window.App);
