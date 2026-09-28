/* A1 reading texts, role plays and final test pools.
   Readings: first option of every question is correct.
   Role plays: each step has an NPC line and options [German reply, Arabic feedback]; the first option is correct. */
(function (A) {
  'use strict';
  const R = o => A.addReading(Object.assign({ level: 'A1' }, o));

  R({ id: 'r01', lesson: 'a1l02', title: 'Ich heiße Lina', text: 'Hallo! Ich heiße Lina. Ich bin 24 Jahre alt. Ich komme aus Syrien, aus Damaskus. Jetzt wohne ich in Leipzig. Ich lerne Deutsch. Ich spreche Arabisch, Englisch und ein bisschen Deutsch.', tr: 'مرحبًا! اسمي لينا. عمري 24 سنة. أنا من سوريا، من دمشق. أسكن الآن في لايبزيغ. أتعلم الألمانية. أتكلم العربية والإنجليزية وقليلًا من الألمانية.', qs: [
    { q: 'من أين لينا؟', o: ['من سوريا', 'من المغرب', 'من ألمانيا'] },
    { q: 'أين تسكن الآن؟', o: ['في لايبزيغ', 'في دمشق', 'في برلين'] },
    { q: 'كم عمرها؟', o: ['24 سنة', '42 سنة', '20 سنة'] }] });
  R({ id: 'r02', lesson: 'a1l05', title: 'Meine Familie', text: 'Das ist meine Familie. Mein Vater heißt Karim, er ist Ingenieur. Meine Mutter heißt Samira, sie ist Lehrerin. Ich habe einen Bruder und eine Schwester. Mein Bruder ist 16 Jahre alt. Meine Schwester ist noch klein, sie ist 6.', tr: 'هذه عائلتي. اسم أبي كريم، وهو مهندس. اسم أمي سميرة، وهي معلمة. لدي أخ وأخت. أخي عمره 16 سنة. أختي ما زالت صغيرة، عمرها 6 سنوات.', qs: [
    { q: 'ما مهنة الأب؟', o: ['مهندس', 'معلم', 'طبيب'] },
    { q: 'كم أخًا وأختًا للكاتب؟', o: ['أخ واحد وأخت واحدة', 'أخوان', 'ثلاث أخوات'] },
    { q: 'كم عمر الأخت؟', o: ['6 سنوات', '16 سنة', '60 سنة'] }] });
  R({ id: 'r03', lesson: 'a1l13', title: 'Im Café', text: 'Tom und Anna sind im Café. Tom möchte einen Kaffee mit Milch. Anna trinkt keinen Kaffee. Sie nimmt einen Tee und ein Stück Kuchen. Der Kaffee kostet 3 Euro, der Tee 2,50 Euro und der Kuchen 3,50 Euro. Tom bezahlt.', tr: 'توم وآنا في المقهى. توم يريد قهوة بالحليب. آنا لا تشرب القهوة. هي تأخذ شايًا وقطعة كعك. القهوة بـ 3 يورو، والشاي بـ 2,50 يورو، والكعكة بـ 3,50 يورو. توم يدفع.', qs: [
    { q: 'ماذا تشرب آنا؟', o: ['شايًا', 'قهوة', 'عصيرًا'] },
    { q: 'كم سعر الكعكة؟', o: ['3,50 يورو', '3 يورو', '2,50 يورو'] },
    { q: 'من يدفع؟', o: ['توم', 'آنا', 'يدفعان معًا'] }] });
  R({ id: 'r04', lesson: 'a1l12', title: 'Mein Tag', text: 'Ich stehe um 6 Uhr auf. Um halb sieben frühstücke ich. Um 7 Uhr fahre ich mit dem Bus zur Arbeit. Ich arbeite von 8 bis 16 Uhr. Am Abend koche ich und lese ein Buch. Um 22 Uhr gehe ich ins Bett.', tr: 'أستيقظ في السادسة. في السادسة والنصف أتناول الفطور. في السابعة أذهب بالحافلة إلى العمل. أعمل من الثامنة حتى الرابعة. في المساء أطبخ وأقرأ كتابًا. في العاشرة ليلًا أذهب إلى السرير.', qs: [
    { q: 'متى يتناول الفطور؟', o: ['6:30', '7:30', '6:00'] },
    { q: 'كيف يذهب إلى العمل؟', o: ['بالحافلة', 'بالقطار', 'مشيًا'] },
    { q: 'ماذا يفعل في المساء؟', o: ['يطبخ ويقرأ', 'يعمل', 'يلعب كرة القدم'] }] });
  R({ id: 'r05', lesson: 'a1l18', title: 'Meine Wohnung', text: 'Meine Wohnung ist nicht groß, aber schön. Sie hat zwei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist hell. In der Küche gibt es einen Tisch und vier Stühle. Die Miete ist 550 Euro. Mein Nachbar ist sehr nett.', tr: 'شقتي ليست كبيرة لكنها جميلة. فيها غرفتان ومطبخ وحمّام. غرفة المعيشة مضيئة. في المطبخ طاولة وأربعة كراسٍ. الإيجار 550 يورو. جاري لطيف جدًا.', qs: [
    { q: 'كم غرفة في الشقة؟', o: ['غرفتان', 'ثلاث غرف', 'أربع غرف'] },
    { q: 'كم الإيجار؟', o: ['550 يورو', '505 يورو', '450 يورو'] },
    { q: 'ماذا يوجد في المطبخ؟', o: ['طاولة وأربعة كراسٍ', 'أريكة', 'سرير'] }] });
  R({ id: 'r06', lesson: 'a1l15', title: 'Einkaufen am Samstag', text: 'Heute ist Samstag. Frau Yilmaz geht in den Supermarkt. Sie braucht Milch, Brot, ein Kilo Tomaten und Reis. Die Tomaten sind heute im Angebot. Sie kosten nur 1,99 Euro. An der Kasse zahlt sie mit Karte.', tr: 'اليوم السبت. السيدة يلماز تذهب إلى السوبرماركت. تحتاج حليبًا وخبزًا وكيلو طماطم وأرزًا. الطماطم عليها عرض اليوم، سعرها 1,99 يورو فقط. عند الصندوق تدفع بالبطاقة.', qs: [
    { q: 'أي يوم هو؟', o: ['السبت', 'الأحد', 'الجمعة'] },
    { q: 'ما المنتج الذي عليه عرض؟', o: ['الطماطم', 'الأرز', 'الحليب'] },
    { q: 'كيف تدفع؟', o: ['بالبطاقة', 'نقدًا', 'لا تدفع'] }] });
  R({ id: 'r07', lesson: 'a1l16', title: 'Am Bahnhof', text: 'Herr Hassan möchte nach München fahren. Er kauft eine Fahrkarte am Automaten. Der Zug fährt um 10:15 Uhr von Gleis 7. Heute hat der Zug 20 Minuten Verspätung. Herr Hassan trinkt einen Kaffee und wartet.', tr: 'السيد حسن يريد السفر إلى ميونخ. يشتري تذكرة من الآلة. القطار يغادر في 10:15 من الرصيف 7. اليوم القطار متأخر 20 دقيقة. السيد حسن يشرب قهوة وينتظر.', qs: [
    { q: 'إلى أين يسافر؟', o: ['إلى ميونخ', 'إلى برلين', 'إلى هامبورغ'] },
    { q: 'من أي رصيف يغادر القطار؟', o: ['7', '10', '15'] },
    { q: 'كم التأخير؟', o: ['20 دقيقة', '10 دقائق', 'لا يوجد تأخير'] }] });
  R({ id: 'r08', lesson: 'a1l20', title: 'Maria ist krank', text: 'Maria ist krank. Sie hat Fieber und Kopfschmerzen. Sie ruft in der Praxis an und macht einen Termin. Der Termin ist morgen um 9 Uhr. Heute bleibt sie zu Hause und trinkt viel Tee.', tr: 'ماريا مريضة. عندها حمّى وصداع. تتصل بالعيادة وتحجز موعدًا. الموعد غدًا في التاسعة. اليوم تبقى في البيت وتشرب الكثير من الشاي.', qs: [
    { q: 'مِمَّ تعاني ماريا؟', o: ['حمّى وصداع', 'ألم في البطن', 'سعال'] },
    { q: 'متى الموعد؟', o: ['غدًا في التاسعة', 'اليوم في التاسعة', 'غدًا في العاشرة'] },
    { q: 'ماذا تفعل اليوم؟', o: ['تبقى في البيت وتشرب الشاي', 'تذهب إلى العمل', 'تذهب إلى الصيدلية'] }] });
  R({ id: 'r09', lesson: 'a1l11', title: 'Das Wetter in Deutschland', text: 'Im Winter ist es in Deutschland kalt. Oft regnet es und manchmal schneit es. Im Sommer ist es warm, manchmal auch heiß. Ich mag den Frühling. Dann ist es nicht zu kalt und nicht zu heiß.', tr: 'في الشتاء يكون الجو باردًا في ألمانيا. غالبًا تمطر وأحيانًا تثلج. في الصيف يكون دافئًا وأحيانًا حارًا. أحب الربيع، فالجو حينها ليس باردًا جدًا ولا حارًا جدًا.', qs: [
    { q: 'كيف الطقس في الشتاء؟', o: ['بارد', 'حار', 'دافئ'] },
    { q: 'أي فصل يحبه الكاتب؟', o: ['الربيع', 'الصيف', 'الشتاء'] },
    { q: 'لماذا يحبه؟', o: ['لأنه ليس باردًا جدًا ولا حارًا جدًا', 'لأن الثلج يتساقط', 'لأنه حار'] }] });
  R({ id: 'r10', lesson: 'a1l19', title: 'Ahmeds neue Arbeit', text: 'Ahmed hat eine neue Arbeit. Er ist Koch in einem Restaurant. Er arbeitet von Dienstag bis Samstag. Am Sonntag und am Montag hat er frei. Seine Kollegen sind nett. Die Arbeit ist schwer, aber interessant.', tr: 'لدى أحمد عمل جديد. هو طباخ في مطعم. يعمل من الثلاثاء حتى السبت. يوم الأحد والاثنين عطلته. زملاؤه لطفاء. العمل صعب لكنه ممتع.', qs: [
    { q: 'ما مهنة أحمد؟', o: ['طباخ', 'نادل', 'سائق'] },
    { q: 'متى عطلته؟', o: ['الأحد والاثنين', 'السبت والأحد', 'الجمعة'] },
    { q: 'كيف يصف عمله؟', o: ['صعب لكنه ممتع', 'سهل جدًا', 'ممل'] }] });
  R({ id: 'r11', lesson: 'a1l17', title: 'Der Weg zur Apotheke', text: 'Entschuldigung, wo ist die Apotheke? Gehen Sie hier geradeaus bis zur Ampel. Dann gehen Sie links. Die Apotheke ist neben der Bank, gegenüber vom Supermarkt. Es ist nicht weit, nur fünf Minuten zu Fuß.', tr: 'المعذرة، أين الصيدلية؟ اذهب من هنا مباشرة حتى الإشارة. ثم اذهب يسارًا. الصيدلية بجانب البنك، مقابل السوبرماركت. ليست بعيدة، خمس دقائق فقط مشيًا.', qs: [
    { q: 'أين الصيدلية؟', o: ['بجانب البنك', 'خلف السوبرماركت', 'بجانب المحطة'] },
    { q: 'ماذا يفعل عند الإشارة؟', o: ['يذهب يسارًا', 'يذهب يمينًا', 'يعود'] },
    { q: 'كم تبعد؟', o: ['خمس دقائق مشيًا', 'خمس عشرة دقيقة', 'بعيدة جدًا'] }] });

  /* Role plays. */
  const RP = o => A.addRoleplay(Object.assign({ level: 'A1' }, o));

  RP({ id: 'rpMeet', lesson: 'a1l02', icon: '🤝', de: 'Jemanden kennenlernen', ar: 'التعارف مع شخص جديد', npc: 'Anna', intro: 'أنت في حفلة صغيرة وتقابل آنا لأول مرة.', steps: [
    { n: 'Hallo! Ich bin Anna. Wie heißt du?', a: 'مرحبًا! أنا آنا. ما اسمك؟', o: [['Hallo Anna! Ich heiße Omar.', ''], ['Ich komme aus Marokko.', 'آنا تسأل عن اسمك وليس عن بلدك. استخدم {Ich heiße …}.'], ['Mir geht es gut.', 'هذه إجابة عن الحال، والسؤال عن الاسم.']] },
    { n: 'Freut mich! Woher kommst du?', a: 'تشرّفت بمعرفتك! من أين أنت؟', o: [['Ich komme aus Marokko. Und du?', ''], ['Ich wohne aus Marokko.', 'مع {wohnen} نستخدم {in}، وللأصل نستخدم {kommen aus}.'], ['Ich bin 25 Jahre alt.', 'السؤال عن البلد وليس العمر.']] },
    { n: 'Ich komme aus Österreich. Wo wohnst du?', a: 'أنا من النمسا. أين تسكن؟', o: [['Ich wohne in Berlin.', ''], ['Ich wohne aus Berlin.', 'مع {wohnen} نستخدم {in}: {Ich wohne in Berlin.}'], ['Ich heiße Berlin.', 'السؤال عن مكان السكن.']] },
    { n: 'Und was machst du in Berlin?', a: 'وماذا تفعل في برلين؟', o: [['Ich lerne Deutsch.', ''], ['Ich lernen Deutsch.', 'مع {ich} ينتهي الفعل بـ e: {ich lerne}.'], ['Ja, gern.', 'هذا جواب على دعوة، وليس على سؤال «ماذا تفعل».']] },
    { n: 'Super! Sprichst du auch Englisch?', a: 'رائع! هل تتكلم الإنجليزية أيضًا؟', o: [['Ja, ein bisschen.', ''], ['Ja, ich spreche Deutschland.', '{Deutschland} اسم البلد، واللغة {Deutsch}.'], ['Nein, danke.', '{Nein, danke} لرفض عرض، وليس لجواب سؤال عن اللغة.']] },
    { n: 'Okay, ich muss jetzt gehen. Tschüss!', a: 'حسنًا، يجب أن أذهب الآن. مع السلامة!', o: [['Tschüss, bis bald!', ''], ['Guten Morgen!', 'هذه تحية لقاء، وآنا تودّعك.'], ['Wie heißt du?', 'آنا تغادر، فالمناسب هو الوداع.']] }
  ] });

  RP({ id: 'rpRestaurant', lesson: 'a1l13', icon: '🍽️', de: 'Im Restaurant', ar: 'في المطعم', npc: 'Kellner', intro: 'تدخل مطعمًا مساءً وتريد أن تأكل.', steps: [
    { n: 'Guten Abend! Haben Sie reserviert?', a: 'مساء الخير! هل حجزت؟', o: [['Nein. Haben Sie einen Tisch für zwei Personen?', ''], ['Ja, ich habe Hunger.', 'النادل يسأل عن الحجز، وليس عن الجوع.'], ['Die Rechnung, bitte.', 'وصلت للتو، والحساب يكون في النهاية.']] },
    { n: 'Ja, bitte. Hier ist die Speisekarte. Was möchten Sie trinken?', a: 'نعم، تفضل. هذه قائمة الطعام. ماذا تودّ أن تشرب؟', o: [['Ich hätte gern ein Wasser, bitte.', ''], ['Ich möchte einen Wasser.', '{das Wasser} محايد، لذلك {ein Wasser} وليس {einen}.'], ['Ich esse eine Suppe.', 'النادل يسأل عن المشروب.']] },
    { n: 'Gern. Und was möchten Sie essen?', a: 'بكل سرور. وماذا تودّ أن تأكل؟', o: [['Ich nehme das Hähnchen mit Reis.', ''], ['Ich nehmen das Hähnchen.', 'مع {ich}: {ich nehme}.'], ['Was kostet das Wasser?', 'النادل يسأل عن طلب الطعام.']] },
    { n: 'Möchten Sie auch eine Suppe? Sie ist mit Schweinefleisch.', a: 'هل تودّ حساءً أيضًا؟ إنه بلحم الخنزير.', o: [['Nein, danke. Ich esse kein Schweinefleisch.', ''], ['Nein, danke. Ich esse nicht Schweinefleisch.', 'مع اسم بلا أداة نستخدم {kein}.'], ['Ja, ich bin Schweinefleisch.', 'هذه الجملة تعني «أنا لحم خنزير».']] },
    { n: 'Hat es Ihnen geschmeckt?', a: 'هل أعجبك الطعام؟', o: [['Ja, sehr lecker! Die Rechnung, bitte.', ''], ['Ja, ich bin lecker.', 'هذه تعني «أنا لذيذ». قل: {Es war sehr lecker.}'], ['Nein, ich habe Durst.', 'لا علاقة لهذا بالسؤال.']] },
    { n: 'Das macht 24,50 Euro. Zusammen oder getrennt?', a: 'المجموع 24,50 يورو. معًا أم كلٌّ على حدة؟', o: [['Zusammen, bitte. 26 Euro, stimmt so.', ''], ['Ja, bitte.', 'السؤال فيه خياران، اختر أحدهما.'], ['Ich komme aus Syrien.', 'لا علاقة لهذا بالدفع.']] }
  ] });

  RP({ id: 'rpSupermarkt', lesson: 'a1l15', icon: '🛒', de: 'Im Supermarkt', ar: 'في السوبرماركت', npc: 'Verkäuferin', intro: 'أنت عند ركن الجبن في السوبرماركت ثم عند الصندوق.', steps: [
    { n: 'Guten Tag! Was darf es sein?', a: 'مرحبًا! ماذا تريد؟', o: [['Ich hätte gern 200 Gramm Käse.', ''], ['Ich hätte gern 200 Käse Gramm.', 'الكمية ثم المنتج: {200 Gramm Käse}.'], ['Das darf sein.', 'هذه ليست إجابة مفهومة.']] },
    { n: 'Gern. Noch etwas?', a: 'بكل سرور. شيء آخر؟', o: [['Ja, ein Stück Kuchen, bitte.', ''], ['Ja, ein Kuchen Stück.', 'الترتيب الصحيح: {ein Stück Kuchen}.'], ['Nein, ich bin noch etwas.', 'الجملة لا معنى لها. قل: {Nein, danke. Das ist alles.}']] },
    { n: 'An der Kasse: Das macht 8,40 Euro. Brauchen Sie eine Tüte?', a: 'عند الصندوق: المجموع 8,40 يورو. هل تحتاج كيسًا؟', o: [['Nein, danke. Ich habe eine Tasche.', ''], ['Ja, ich brauche einen Tüte.', '{die Tüte} مؤنثة، لذلك {eine Tüte}.'], ['Acht Euro vierzig.', 'البائعة سألت عن الكيس.']] },
    { n: 'Zahlen Sie bar oder mit Karte?', a: 'هل تدفع نقدًا أم بالبطاقة؟', o: [['Mit Karte, bitte.', ''], ['Ja, gern.', 'السؤال فيه خياران، اختر أحدهما.'], ['Mit Bar, bitte.', 'نقول {bar} وحدها بدون {mit}: {Ich zahle bar.}']] },
    { n: 'Hier ist Ihr Kassenbon. Schönen Tag noch!', a: 'هذا إيصالك. أتمنى لك يومًا سعيدًا!', o: [['Danke, Ihnen auch!', ''], ['Gute Nacht!', 'الوقت نهار وهي تتمنى لك يومًا سعيدًا.'], ['Die Rechnung, bitte.', 'دفعت بالفعل.']] }
  ] });

  RP({ id: 'rpBahnhof', lesson: 'a1l16', icon: '🚆', de: 'Am Bahnhof', ar: 'في محطة القطار', npc: 'Mitarbeiter', intro: 'أنت عند شباك التذاكر وتريد السفر إلى هامبورغ.', steps: [
    { n: 'Guten Tag! Was kann ich für Sie tun?', a: 'مرحبًا! كيف يمكنني مساعدتك؟', o: [['Ich brauche eine Fahrkarte nach Hamburg, bitte.', ''], ['Ich brauche eine Fahrkarte aus Hamburg.', 'للاتجاه نستخدم {nach}: {nach Hamburg}.'], ['Ich bin Hamburg.', 'الجملة تعني «أنا هامبورغ».']] },
    { n: 'Einfach oder hin und zurück?', a: 'ذهاب فقط أم ذهاب وعودة؟', o: [['Hin und zurück, bitte.', ''], ['Ja, bitte.', 'السؤال فيه خياران، اختر أحدهما.'], ['Links und rechts.', 'هذه اتجاهات وليست نوع تذكرة.']] },
    { n: 'Wann möchten Sie fahren?', a: 'متى تودّ السفر؟', o: [['Heute um 14 Uhr.', ''], ['Heute am 14 Uhr.', 'مع الساعة نستخدم {um}.'], ['Nach Hamburg.', 'السؤال عن الوقت وليس المكان.']] },
    { n: 'Das kostet 79 Euro.', a: 'السعر 79 يورو.', o: [['Kann ich mit Karte zahlen?', ''], ['Wie viel kostet das?', 'الموظف أخبرك بالسعر للتو.'], ['Ich kosten 79 Euro.', 'الجملة تعني «أنا أكلّف»، وهي غير صحيحة.']] },
    { n: 'Ja, natürlich. Der Zug fährt von Gleis 5.', a: 'نعم، طبعًا. القطار يغادر من الرصيف 5.', o: [['Muss ich umsteigen?', ''], ['Muss ich umsteigen jetzt Gleis?', 'الجملة غير مرتبة. قل: {Muss ich umsteigen?}'], ['Wo ist Gleis Hamburg?', 'الرصيف رقمه 5 وليس هامبورغ.']] },
    { n: 'Nein, der Zug fährt direkt. Gute Reise!', a: 'لا، القطار مباشر. رحلة سعيدة!', o: [['Vielen Dank! Auf Wiedersehen.', ''], ['Gute Besserung!', 'هذه تقال للمريض.'], ['Guten Appetit!', 'هذه تقال قبل الأكل.']] }
  ] });

  RP({ id: 'rpWeg', lesson: 'a1l17', icon: '🧭', de: 'Nach dem Weg fragen', ar: 'السؤال عن الطريق', npc: 'Passantin', intro: 'أنت في مدينة جديدة وتبحث عن محطة القطار.', steps: [
    { n: 'Hallo! Kann ich Ihnen helfen?', a: 'مرحبًا! هل يمكنني مساعدتك؟', o: [['Ja, bitte. Wo ist der Bahnhof?', ''], ['Ja, bitte. Wer ist der Bahnhof?', '{wer} للأشخاص. للمكان نستخدم {wo}.'], ['Ja, bitte. Wann ist der Bahnhof?', '{wann} للوقت. للمكان نستخدم {wo}.']] },
    { n: 'Gehen Sie hier geradeaus bis zur Ampel.', a: 'اذهب من هنا مباشرة حتى الإشارة.', o: [['Und dann?', ''], ['Und Sie?', 'السيدة تصف الطريق، اسأل عن الخطوة التالية.'], ['Wie alt ist die Ampel?', 'سؤال لا علاقة له بالطريق.']] },
    { n: 'Dann gehen Sie rechts. Der Bahnhof ist neben dem Hotel.', a: 'ثم اذهب يمينًا. المحطة بجانب الفندق.', o: [['Ist das weit?', ''], ['Ist das teuer?', 'السؤال عن المسافة وليس السعر.'], ['Ist das mein Hotel?', 'السيدة لا تعرف فندقك.']] },
    { n: 'Nein, nur zehn Minuten zu Fuß.', a: 'لا، عشر دقائق فقط مشيًا.', o: [['Super, vielen Dank!', ''], ['Zehn Minuten ist mein Name.', 'الجملة لا معنى لها.'], ['Ich gehe mit Fuß.', 'نقول {zu Fuß}.']] },
    { n: 'Gern! Sie können auch den Bus nehmen. Die Haltestelle ist gegenüber.', a: 'بكل سرور! يمكنك أيضًا أخذ الحافلة. الموقف في الجهة المقابلة.', o: [['Welcher Bus fährt zum Bahnhof?', ''], ['Was Bus fährt Bahnhof?', 'نسأل بـ {Welcher Bus …?} ونقول {zum Bahnhof}.'], ['Welcher Bus fährt aus dem Bahnhof?', 'تريد الذهاب إلى المحطة: {zum Bahnhof}.']] },
    { n: 'Die Linie 3.', a: 'الخط 3.', o: [['Danke schön! Tschüss!', ''], ['Bitte schön!', '{Bitte schön} رد على الشكر، والمناسب هنا أن تشكر أنت.'], ['Gute Nacht!', 'ليست تحية مناسبة للوداع في النهار.']] }
  ] });

  RP({ id: 'rpArzt', lesson: 'a1l20', icon: '🩺', de: 'Beim Arzt', ar: 'عند الطبيب', npc: 'Praxis', intro: 'تشعر بالمرض فتتصل بالعيادة، ثم تذهب إلى الطبيبة.', steps: [
    { n: 'Praxis Dr. Weber, guten Tag!', a: 'عيادة الدكتور فيبر، مرحبًا!', o: [['Guten Tag, ich möchte einen Termin machen.', ''], ['Guten Tag, ich möchte einen Termin essen.', '{essen} يعني يأكل. مع الموعد نقول {einen Termin machen}.'], ['Gute Nacht!', 'هذه ليست تحية لبدء مكالمة.']] },
    { n: 'Was haben Sie denn?', a: 'مِمَّ تشكو؟', o: [['Ich habe Fieber und Kopfschmerzen.', ''], ['Ich bin Fieber.', 'مع الأسماء نستخدم {haben}: {Ich habe Fieber.}'], ['Ich habe krank.', 'مع الصفة نستخدم {sein}: {Ich bin krank.}']] },
    { n: 'Können Sie heute um 15 Uhr kommen?', a: 'هل تستطيع أن تأتي اليوم في الثالثة؟', o: [['Ja, das passt.', ''], ['Ja, das kostet.', '{kostet} تعني سعره، والمقصود «يناسب»: {passt}.'], ['Ich komme aus 15 Uhr.', 'مع الوقت نستخدم {um}.']] },
    { n: 'In der Praxis: Wo tut es weh?', a: 'في العيادة: أين يؤلمك؟', o: [['Mein Kopf tut weh.', ''], ['Mein Kopf tun weh.', 'مع المفرد: {tut weh}.'], ['Ich bin weh.', 'الصحيح: {Es tut weh.} أو {Mein Kopf tut weh.}']] },
    { n: 'Seit wann haben Sie Fieber?', a: 'منذ متى عندك حمّى؟', o: [['Seit zwei Tagen.', ''], ['In zwei Tagen.', '{in zwei Tagen} تعني «بعد يومين» في المستقبل.'], ['Um zwei Tage.', 'للمدة الماضية نستخدم {seit}.']] },
    { n: 'Hier ist ein Rezept. Gute Besserung!', a: 'هذه وصفة طبية. أتمنى لك الشفاء!', o: [['Vielen Dank! Auf Wiedersehen.', ''], ['Guten Appetit!', 'هذه تقال قبل الأكل.'], ['Gute Besserung!', 'الطبيبة ليست مريضة، اشكرها فقط.']] }
  ] });

  RP({ id: 'rpArbeit', lesson: 'a1l19', icon: '💼', de: 'Der erste Arbeitstag', ar: 'أول يوم في العمل', npc: 'Julia', intro: 'اليوم هو أول يوم لك في العمل، وتقابل زميلتك جوليا.', steps: [
    { n: 'Hallo, du bist neu hier, oder? Ich bin Julia.', a: 'مرحبًا، أنت جديد هنا، أليس كذلك؟ أنا جوليا.', o: [['Ja, ich bin Omar. Heute ist mein erster Tag.', ''], ['Ja, ich bin neu. Ich heiße Julia.', 'جوليا هو اسمها هي، قل اسمك أنت.'], ['Nein, ich bin alt.', '{alt} تعني كبير السن، وليس «قديم في العمل».']] },
    { n: 'Was machst du hier?', a: 'ماذا تعمل هنا؟', o: [['Ich bin Elektriker.', ''], ['Ich bin ein Elektriker.', 'مع المهنة بعد {sein} لا نستخدم أداة.'], ['Ich mache hier.', 'الجملة ناقصة ولا تجيب عن السؤال.']] },
    { n: 'Wann fängst du morgens an?', a: 'متى تبدأ صباحًا؟', o: [['Um 8 Uhr. Und du?', ''], ['Am 8 Uhr.', 'مع الساعة نستخدم {um}.'], ['Mit dem Bus.', 'السؤال عن الوقت وليس الوسيلة.']] },
    { n: 'Ich fange um 9 an. Machen wir zusammen Mittagspause?', a: 'أنا أبدأ في التاسعة. هل نأخذ استراحة الغداء معًا؟', o: [['Ja, gern! Um wie viel Uhr?', ''], ['Ja, gern! Wo viel Uhr?', 'السؤال الصحيح: {Um wie viel Uhr?}'], ['Nein, gern.', 'جملة متناقضة: لا وبكل سرور معًا.']] },
    { n: 'Um halb eins in der Kantine.', a: 'في الثانية عشرة والنصف في المقصف.', o: [['Okay, bis dann!', ''], ['Halb eins ist 1:30, oder?', '{halb eins} تعني 12:30، أي نصف ساعة قبل الواحدة.'], ['Okay, bis gestern!', '{gestern} تعني أمس.']] }
  ] });

  RP({ id: 'rpTermin', lesson: 'a1l25', icon: '📅', de: 'Einen Termin machen', ar: 'حجز موعد في الدائرة', npc: 'Bürgeramt', intro: 'تتصل بدائرة تسجيل السكن لحجز موعد.', steps: [
    { n: 'Bürgeramt Mitte, guten Tag.', a: 'دائرة المواطنين في ميته، مرحبًا.', o: [['Guten Tag. Ich brauche einen Termin für die Anmeldung.', ''], ['Guten Tag. Ich brauche ein Termin.', '{der Termin} مذكّر، وبعد {brauchen} يصبح {einen Termin}.'], ['Tschüss!', 'المكالمة بدأت للتو.']] },
    { n: 'Wie ist Ihr Name, bitte?', a: 'ما اسمك من فضلك؟', o: [['Mein Name ist Omar Haddad.', ''], ['Mein Name bin Omar Haddad.', 'مع {Mein Name} نستخدم {ist}.'], ['Ich komme aus Haddad.', 'السؤال عن الاسم.']] },
    { n: 'Können Sie am Dienstag um 10 Uhr?', a: 'هل تستطيع يوم الثلاثاء في العاشرة؟', o: [['Am Dienstag kann ich leider nicht. Geht es am Mittwoch?', ''], ['Am Dienstag ich kann leider nicht.', 'الفعل يأتي ثانيًا: {Am Dienstag kann ich …}'], ['Dienstag ist ein Tag.', 'لا تجيب عن السؤال.']] },
    { n: 'Ja, am Mittwoch um 11 Uhr ist frei.', a: 'نعم، يوم الأربعاء في الحادية عشرة متاح.', o: [['Das passt gut. Was muss ich mitbringen?', ''], ['Das passt gut. Was muss ich mitbringen gehen?', 'فعل زائد في آخر الجملة.'], ['Das ist teuer.', 'الموعد ليس له سعر هنا.']] },
    { n: 'Bitte bringen Sie Ihren Pass und den Mietvertrag mit.', a: 'من فضلك أحضر جواز سفرك وعقد الإيجار.', o: [['Alles klar. Vielen Dank!', ''], ['Wie bitte? Ich bin Pass.', 'إذا لم تفهم قل {Wie bitte?} فقط.'], ['Bitte schön!', 'المناسب هنا أن تشكر.']] }
  ] });

  RP({ id: 'rpKleidung', lesson: 'a1l14', icon: '🧥', de: 'Im Kleidungsgeschäft', ar: 'في محل الملابس', npc: 'Verkäufer', intro: 'تبحث عن سترة للشتاء.', steps: [
    { n: 'Hallo! Kann ich Ihnen helfen?', a: 'مرحبًا! هل يمكنني مساعدتك؟', o: [['Ja, ich suche eine Jacke.', ''], ['Ja, ich suche einen Jacke.', '{die Jacke} مؤنثة، لذلك {eine Jacke}.'], ['Nein, ich helfe Ihnen.', 'أنت الزبون، والبائع هو الذي يساعد.']] },
    { n: 'Welche Größe haben Sie?', a: 'ما مقاسك؟', o: [['Größe M, bitte.', ''], ['Ich bin groß.', 'السؤال عن المقاس وليس عن طولك.'], ['Blau, bitte.', 'السؤال عن المقاس وليس اللون.']] },
    { n: 'Und welche Farbe möchten Sie?', a: 'وأي لون تريد؟', o: [['Schwarz oder blau.', ''], ['Größe L.', 'السؤال الآن عن اللون.'], ['Ich möchte Farbe.', 'اذكر اللون الذي تريده.']] },
    { n: 'Diese Jacke ist schwarz, Größe M. Sie kostet 89 Euro.', a: 'هذه السترة سوداء، مقاس M. سعرها 89 يورو.', o: [['Das ist mir zu teuer. Gibt es ein Angebot?', ''], ['Das ist mir zu billig.', 'لا أحد يشتكي من الرخص.'], ['Das kostet ich 89 Euro.', 'الجملة غير صحيحة.']] },
    { n: 'Ja, diese hier kostet nur 49 Euro.', a: 'نعم، هذه سعرها 49 يورو فقط.', o: [['Kann ich sie anprobieren?', ''], ['Kann ich sie anprobieren nicht?', 'مكان {nicht} خاطئ، وأنت تريد التجربة.'], ['Kann ich ihn anprobieren?', '{die Jacke} مؤنثة، لذلك الضمير {sie}.']] },
    { n: 'Natürlich. Und? Passt die Jacke?', a: 'طبعًا. هل السترة مناسبة؟', o: [['Ja, sie passt gut. Ich nehme sie.', ''], ['Ja, sie passt gut. Ich nehme ihn.', '{die Jacke} مؤنثة، لذلك {Ich nehme sie.}'], ['Ja, ich passe gut.', 'السترة هي التي تناسبك: {Sie passt.}']] }
  ] });

  /* Final test pools. l = lesson used for recommendations. */
  A.addPool('A1', 'grammar', [
    { l: 'a1l09', fill: 'Ich [komme] aus Marokko.', o: ['komme', 'kommst', 'kommt'] },
    { l: 'a1l09', fill: 'Du [sprichst] gut Deutsch.', o: ['sprichst', 'sprechst', 'spricht'] },
    { l: 'a1l09', fill: 'Wir [wohnen] in Berlin.', o: ['wohnen', 'wohnt', 'wohne'] },
    { l: 'a1l09', fill: 'Er [liest] ein Buch.', o: ['liest', 'lest', 'lese'] },
    { l: 'a1l06', fill: 'Das ist [eine] Lampe.', o: ['eine', 'ein', 'einen'] },
    { l: 'a1l23', fill: 'Ich habe [einen] Bruder.', o: ['einen', 'ein', 'eine'] },
    { l: 'a1l22', fill: 'Ich habe [kein] Auto.', o: ['kein', 'nicht', 'keine'] },
    { l: 'a1l22', fill: 'Das ist [nicht] teuer.', o: ['nicht', 'kein', 'keine'] },
    { l: 'a1l21', fill: 'Ich [muss] heute arbeiten.', o: ['muss', 'müssen', 'musst'] },
    { l: 'a1l10', fill: '[Woher] kommst du? Aus Syrien.', o: ['Woher', 'Wohin', 'Wo'] },
    { l: 'a1l07', mc: 'أي جملة صحيحة؟', o: ['Heute lerne ich Deutsch.', 'Heute ich lerne Deutsch.', 'Heute ich Deutsch lerne.'] },
    { l: 'a1l21', fill: 'Kannst du [schwimmen]?', o: ['schwimmen', 'schwimmst', 'zu schwimmen'] },
    { l: 'a1l05', fill: '[Meine] Mutter heißt Samira.', o: ['Meine', 'Mein', 'Meinen'] },
    { l: 'a1l12', fill: 'Der Kurs beginnt [um] 9 Uhr.', o: ['um', 'am', 'im'] },
    { l: 'a1l12', fill: 'Ich habe [am] Montag frei.', o: ['am', 'um', 'im'] },
    { l: 'a1l23', fill: 'Ich kaufe [den] Tisch.', o: ['den', 'der', 'dem'] },
    { l: 'a1l09', fill: 'Er [fährt] nach Hamburg.', o: ['fährt', 'fahrt', 'fahre'] },
    { l: 'a1l09', fill: 'Ihr [seid] müde.', o: ['seid', 'sind', 'seit'] },
    { l: 'a1l05', fill: 'Das ist [mein] Bruder.', o: ['mein', 'meine', 'meinen'] },
    { l: 'a1l09', fill: 'Die Kinder [spielen] im Park.', o: ['spielen', 'spielt', 'spiele'] },
    { l: 'a1l24', fill: 'Das Haus ist [groß].', o: ['groß', 'große', 'großer'] },
    { l: 'a1l17', fill: 'Wie komme ich [zur] Post?', o: ['zur', 'zum', 'zu die'] }
  ]);

  A.addPool('A1', 'situations', [
    { l: 'a1l13', mc: 'أنت في المطعم وتريد دفع الحساب. ماذا تقول؟', o: ['Die Rechnung, bitte.', 'Die Speisekarte, bitte.', 'Guten Appetit!'] },
    { l: 'a1l14', mc: 'تريد معرفة سعر الحذاء.', o: ['Was kosten die Schuhe?', 'Wo sind die Schuhe?', 'Wer hat die Schuhe?'] },
    { l: 'a1l25', mc: 'لم تفهم ما قاله الشخص.', o: ['Wie bitte? Können Sie das wiederholen?', 'Das ist richtig.', 'Ich verstehe alles.'] },
    { l: 'a1l17', mc: 'تبحث عن الصيدلية في الشارع.', o: ['Entschuldigung, wo ist die Apotheke?', 'Entschuldigung, wann ist die Apotheke?', 'Ich bin die Apotheke.'] },
    { l: 'a1l02', mc: 'تقابل جارك في السابعة صباحًا.', o: ['Guten Morgen!', 'Gute Nacht!', 'Guten Abend!'] },
    { l: 'a1l20', mc: 'تشعر بالمرض وتتصل بالعيادة.', o: ['Ich bin krank. Ich möchte einen Termin, bitte.', 'Ich möchte die Rechnung, bitte.', 'Ich habe Hunger.'] },
    { l: 'a1l16', mc: 'تريد تذكرة ذهاب وعودة إلى كولونيا.', o: ['Eine Fahrkarte nach Köln, hin und zurück, bitte.', 'Eine Fahrkarte aus Köln, bitte.', 'Ich fahre nicht nach Köln.'] },
    { l: 'a1l15', mc: 'البائعة تسأل: {Brauchen Sie eine Tüte?} ولا تحتاج كيسًا.', o: ['Nein, danke.', 'Ja, bitte.', 'Ich bin eine Tüte.'] },
    { l: 'a1l19', mc: 'زميل جديد يسأل عن مهنتك، وأنت مهندس.', o: ['Ich bin Ingenieur.', 'Ich bin ein Ingenieur.', 'Ich habe Ingenieur.'] },
    { l: 'a1l25', mc: 'تريد أن تقول إنك تحب لعب كرة القدم.', o: ['Ich spiele gern Fußball.', 'Ich gern spiele Fußball.', 'Ich spiele Fußball gern ist.'] },
    { l: 'a1l20', mc: 'تحتاج مساعدة عاجلة في الشارع.', o: ['Hilfe! Rufen Sie bitte einen Krankenwagen!', 'Guten Appetit!', 'Ich schaue nur.'] },
    { l: 'a1l16', mc: 'تريد أن تعرف متى يغادر القطار.', o: ['Wann fährt der Zug ab?', 'Wo fährt der Zug?', 'Wer ist der Zug?'] },
    { l: 'a1l02', mc: 'شخص يقول لك {Danke schön!} بماذا ترد؟', o: ['Bitte schön!', 'Danke schön!', 'Entschuldigung!'] },
    { l: 'a1l02', mc: 'تسأل صديقك عن حاله.', o: ['Wie geht es dir?', 'Wie geht es Ihnen?', 'Wie heißen Sie?'] },
    { l: 'a1l18', mc: 'التدفئة في شقتك لا تعمل. ماذا تقول للمؤجّر؟', o: ['Die Heizung ist kaputt.', 'Die Heizung ist schön.', 'Ich habe eine Heizung.'] },
    { l: 'a1l21', mc: 'صديقك يدعوك يوم السبت لكنك تعمل.', o: ['Leider kann ich nicht. Ich muss arbeiten.', 'Ja, gern, ich arbeite.', 'Ich kann arbeiten nicht.'] }
  ]);
})(window.App);
