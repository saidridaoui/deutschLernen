/* Levels, topics and A1 vocabulary (part one).
   Row format: article|word|plural|Arabic|English|example|Arabic example|difficulty 1 to 3 */
(function (A) {
  'use strict';

  A.addLevel({ id: 'A1', ar: 'مبتدئ', desc: 'التواصل في مواقف الحياة اليومية البسيطة', full: true });
  A.addLevel({ id: 'A2', ar: 'أساسي', desc: 'الحديث عن الماضي والحياة اليومية بتفصيل أكبر', full: false });
  A.addLevel({ id: 'B1', ar: 'متوسط', desc: 'التعبير عن الرأي والأسباب والجمل المركبة', full: false });
  A.addLevel({ id: 'B2', ar: 'فوق المتوسط', desc: 'لغة العمل والإعلام والنصوص الأطول', full: false });

  A.data.units.A1 = [
    [1, 'البداية: الأصوات والتحية والأرقام'], [5, 'أنا وعائلتي والجملة الألمانية'], [8, 'الأفعال والأسئلة'],
    [11, 'الحياة اليومية والوقت'], [13, 'في المدينة: الطعام والتسوق والمواصلات'], [18, 'البيت والعمل والصحة'],
    [21, 'قواعد أساسية مهمة'], [25, 'جاهز للحياة اليومية']
  ];

  [
    ['laute', 'أصوات وكلمات أولى', '🔤'], ['greet', 'التحيات والتعارف', '👋'], ['numbers', 'الأرقام', '🔢'],
    ['personal', 'البيانات الشخصية', '🪪'], ['family', 'العائلة', '👪'], ['things', 'أشياء يومية', '🧰'],
    ['verbs', 'أفعال مهمة', '🏃'], ['questions', 'أدوات السؤال', '❓'], ['colors', 'الألوان', '🎨'],
    ['clothes', 'الملابس', '👕'], ['weather', 'الطقس والفصول', '⛅'], ['time', 'الوقت', '🕐'],
    ['days', 'أيام الأسبوع', '📅'], ['months', 'الشهور', '🗓️'], ['food', 'الطعام', '🍞'],
    ['drinks', 'المشروبات', '☕'], ['restaurant', 'في المطعم', '🍽️'], ['shopping', 'التسوق', '🛍️'],
    ['supermarket', 'السوبرماركت', '🛒'], ['transport', 'المواصلات', '🚆'], ['city', 'أماكن في المدينة', '🏙️'],
    ['directions', 'الاتجاهات', '🧭'], ['home', 'البيت', '🏠'], ['work', 'العمل والمهن', '💼'],
    ['school', 'الدراسة', '🎒'], ['health', 'الصحة', '🩺'], ['body', 'الجسم', '🖐️'],
    ['adjectives', 'الصفات', '✨'], ['everyday', 'كلمات وعبارات يومية', '💬']
  ].forEach(t => A.addTopic(t[0], t[1], t[2]));

  A.addWords('laute', 'A1', `
der|Apfel|Äpfel|تفاحة|apple|Der Apfel ist rot.|التفاحة حمراء.|1
das|Buch|Bücher|كتاب|book|Das Buch ist gut.|الكتاب جيد.|1
die|Schule|Schulen|مدرسة|school|Die Schule ist groß.|المدرسة كبيرة.|1
die|Straße|Straßen|شارع|street|Die Straße ist lang.|الشارع طويل.|1
das|Mädchen|Mädchen|فتاة|girl|Das Mädchen heißt Lina.|اسم الفتاة لينا.|1
die|Zeit|Zeiten|وقت|time|Ich habe keine Zeit.|ليس لدي وقت.|1
das|Wasser||ماء|water|Das Wasser ist kalt.|الماء بارد.|1
|heute||اليوم|today|Heute ist Montag.|اليوم هو الاثنين.|1
|schön||جميل|beautiful|Das ist schön.|هذا جميل.|1
|müde||متعب|tired|Ich bin müde.|أنا متعب.|1
der|Tag|Tage|يوم، نهار|day|Guten Tag!|مرحبًا! (نهارك سعيد)|1
die|Stadt|Städte|مدينة|city|Berlin ist eine Stadt.|برلين مدينة.|1
das|Jahr|Jahre|سنة|year|Das Jahr hat zwölf Monate.|السنة فيها اثنا عشر شهرًا.|1
die|Sonne||شمس|sun|Die Sonne scheint.|الشمس مشرقة.|1
|ich||أنا|I|Ich lerne Deutsch.|أنا أتعلم الألمانية.|1
|ja||نعم|yes|Ja, gern!|نعم، بكل سرور!|1
|nein||لا|no|Nein, danke.|لا، شكرًا.|1
`);

  A.addWords('greet', 'A1', `
|Hallo||مرحبًا|hello|Hallo, Anna!|مرحبًا يا آنا!|1
|Guten Morgen||صباح الخير|good morning|Guten Morgen, Frau Müller!|صباح الخير يا سيدة مولر!|1
|Guten Tag||مرحبًا (تحية رسمية نهارًا)|good day|Guten Tag, Herr Schmidt!|مرحبًا يا سيد شميت!|1
|Guten Abend||مساء الخير|good evening|Guten Abend! Wie geht es Ihnen?|مساء الخير! كيف حالك؟|1
|Gute Nacht||تصبح على خير|good night|Gute Nacht, bis morgen!|تصبح على خير، إلى الغد!|1
|Tschüss||مع السلامة (غير رسمي)|bye|Tschüss, bis bald!|مع السلامة، إلى اللقاء قريبًا!|1
|Auf Wiedersehen||إلى اللقاء (رسمي)|goodbye|Auf Wiedersehen, Herr Klein!|إلى اللقاء يا سيد كلاين!|1
|bitte||من فضلك، تفضّل|please|Einen Kaffee, bitte.|قهوة من فضلك.|1
|danke||شكرًا|thank you|Danke schön!|شكرًا جزيلًا!|1
|Entschuldigung||عفوًا، المعذرة|excuse me|Entschuldigung, wo ist der Bahnhof?|المعذرة، أين محطة القطار؟|1
|Wie geht es dir?||كيف حالك؟ (غير رسمي)|how are you|Hallo Tom! Wie geht es dir?|مرحبًا توم! كيف حالك؟|1
|Wie geht es Ihnen?||كيف حالك؟ (رسمي)|how are you (formal)|Guten Tag! Wie geht es Ihnen?|مرحبًا! كيف حالك؟|1
|gut||جيد، بخير|good|Mir geht es gut.|أنا بخير.|1
|Freut mich||تشرّفت بمعرفتك|nice to meet you|Freut mich, Anna!|تشرّفت بمعرفتك يا آنا!|1
|heißen||اسمه، يُسمّى|to be called|Ich heiße Omar.|اسمي عمر.|1
|kommen aus||يأتي من، أصله من|to come from|Ich komme aus Syrien.|أنا من سوريا.|1
|wohnen||يسكن|to live|Ich wohne in Berlin.|أسكن في برلين.|1
der|Herr|Herren|السيد|Mr|Das ist Herr Schmidt.|هذا هو السيد شميت.|1
die|Frau|Frauen|السيدة|Mrs|Das ist Frau Müller.|هذه هي السيدة مولر.|1
|bis bald||إلى اللقاء قريبًا|see you soon|Tschüss, bis bald!|مع السلامة، إلى اللقاء قريبًا!|1
`);

  A.addWords('numbers', 'A1', `
|null||صفر|zero|Meine Nummer beginnt mit null.|رقمي يبدأ بصفر.|1
|eins||واحد|one|Eins, zwei, drei!|واحد، اثنان، ثلاثة!|1
|zwei||اثنان|two|Ich habe zwei Brüder.|لدي أخوان.|1
|drei||ثلاثة|three|Das kostet drei Euro.|سعره ثلاثة يوروهات.|1
|vier||أربعة|four|Wir sind vier Personen.|نحن أربعة أشخاص.|1
|fünf||خمسة|five|Der Bus kommt in fünf Minuten.|تأتي الحافلة بعد خمس دقائق.|1
|sechs||ستة|six|Ich stehe um sechs Uhr auf.|أستيقظ في الساعة السادسة.|1
|sieben||سبعة|seven|Die Woche hat sieben Tage.|الأسبوع فيه سبعة أيام.|1
|acht||ثمانية|eight|Der Kurs beginnt um acht Uhr.|تبدأ الدورة في الساعة الثامنة.|1
|neun||تسعة|nine|Mein Sohn ist neun Jahre alt.|ابني عمره تسع سنوات.|1
|zehn||عشرة|ten|Ich arbeite zehn Stunden.|أعمل عشر ساعات.|1
|elf||أحد عشر|eleven|Es ist elf Uhr.|الساعة الحادية عشرة.|1
|zwölf||اثنا عشر|twelve|Ein Jahr hat zwölf Monate.|السنة فيها اثنا عشر شهرًا.|1
|zwanzig||عشرون|twenty|Ich bin zwanzig Jahre alt.|عمري عشرون سنة.|1
|dreißig||ثلاثون|thirty|Die Jacke kostet dreißig Euro.|سعر السترة ثلاثون يورو.|1
|hundert||مئة|hundred|Das kostet hundert Euro.|سعره مئة يورو.|2
|tausend||ألف|thousand|Das Auto kostet zehntausend Euro.|سعر السيارة عشرة آلاف يورو.|2
der|Euro|Euro|يورو|euro|Das kostet fünf Euro.|سعره خمسة يوروهات.|1
der|Cent|Cent|سنت|cent|Das kostet 50 Cent.|سعره خمسون سنتًا.|1
|alt||عمره، قديم|old|Wie alt bist du?|كم عمرك؟|1
die|Telefonnummer|Telefonnummern|رقم الهاتف|phone number|Wie ist Ihre Telefonnummer?|ما رقم هاتفك؟|1
das|Datum|Daten|التاريخ|date|Welches Datum ist heute?|ما تاريخ اليوم؟|2
der|Geburtstag|Geburtstage|عيد الميلاد|birthday|Wann hast du Geburtstag?|متى عيد ميلادك؟|1
`);

  A.addWords('personal', 'A1', `
der|Name|Namen|الاسم|name|Mein Name ist Omar Haddad.|اسمي عمر حداد.|1
der|Vorname|Vornamen|الاسم الأول|first name|Mein Vorname ist Omar.|اسمي الأول عمر.|1
der|Nachname|Nachnamen|اسم العائلة|last name|Mein Nachname ist Haddad.|اسم عائلتي حداد.|1
das|Alter||العمر|age|Alter: 28 Jahre|العمر: 28 سنة|1
das|Land|Länder|بلد|country|Aus welchem Land kommst du?|من أي بلد أنت؟|1
die|Adresse|Adressen|العنوان|address|Wie ist Ihre Adresse?|ما عنوانك؟|1
die|Hausnummer|Hausnummern|رقم المنزل|house number|Die Hausnummer ist 12.|رقم المنزل 12.|1
die|Postleitzahl|Postleitzahlen|الرمز البريدي|postal code|Die Postleitzahl ist 10115.|الرمز البريدي هو 10115.|2
die|Mailadresse|Mailadressen|عنوان البريد الإلكتروني|email address|Meine Mailadresse ist omar@mail.de.|بريدي الإلكتروني omar@mail.de.|1
das|Handy|Handys|هاتف محمول|mobile phone|Mein Handy ist neu.|هاتفي المحمول جديد.|1
der|Beruf|Berufe|المهنة|profession|Was sind Sie von Beruf?|ما مهنتك؟|1
|verheiratet||متزوج|married|Ich bin verheiratet.|أنا متزوج.|1
|ledig||أعزب|single|Ich bin ledig.|أنا أعزب.|1
|geschieden||مطلّق|divorced|Sie ist geschieden.|هي مطلّقة.|2
die|Sprache|Sprachen|لغة|language|Ich spreche zwei Sprachen.|أتحدث لغتين.|1
das|Formular|Formulare|استمارة|form|Bitte füllen Sie das Formular aus.|من فضلك املأ الاستمارة.|2
|buchstabieren||يتهجّى|to spell|Können Sie das bitte buchstabieren?|هل يمكنك تهجئة ذلك من فضلك؟|2
die|Unterschrift|Unterschriften|توقيع|signature|Ihre Unterschrift, bitte.|توقيعك من فضلك.|2
|Deutschland||ألمانيا|Germany|Ich wohne in Deutschland.|أسكن في ألمانيا.|1
|Marokko||المغرب|Morocco|Ich komme aus Marokko.|أنا من المغرب.|1
|Syrien||سوريا|Syria|Sie kommt aus Syrien.|هي من سوريا.|1
|Ägypten||مصر|Egypt|Er kommt aus Ägypten.|هو من مصر.|1
|Arabisch||العربية (اللغة)|Arabic|Ich spreche Arabisch.|أتحدث العربية.|1
`);

  A.addWords('family', 'A1', `
die|Familie|Familien|عائلة|family|Meine Familie ist groß.|عائلتي كبيرة.|1
der|Vater|Väter|أب|father|Mein Vater heißt Ahmed.|اسم أبي أحمد.|1
die|Mutter|Mütter|أم|mother|Meine Mutter ist Lehrerin.|أمي معلمة.|1
die|Eltern|nur Plural|الوالدان|parents|Meine Eltern wohnen in Rabat.|يسكن والداي في الرباط.|1
der|Bruder|Brüder|أخ|brother|Ich habe einen Bruder.|لدي أخ.|1
die|Schwester|Schwestern|أخت|sister|Meine Schwester ist 20 Jahre alt.|أختي عمرها 20 سنة.|1
die|Geschwister|nur Plural|الإخوة والأخوات|siblings|Hast du Geschwister?|هل لديك إخوة؟|1
der|Sohn|Söhne|ابن|son|Mein Sohn geht zur Schule.|ابني يذهب إلى المدرسة.|1
die|Tochter|Töchter|ابنة|daughter|Meine Tochter heißt Mira.|اسم ابنتي ميرا.|1
das|Kind|Kinder|طفل|child|Wir haben zwei Kinder.|لدينا طفلان.|1
der|Mann|Männer|رجل، زوج|man, husband|Das ist mein Mann.|هذا زوجي.|1
die|Frau|Frauen|امرأة، زوجة|woman, wife|Das ist meine Frau.|هذه زوجتي.|1
der|Opa|Opas|جد|grandpa|Mein Opa ist 80 Jahre alt.|جدي عمره 80 سنة.|1
die|Oma|Omas|جدة|grandma|Meine Oma kocht gut.|جدتي تطبخ جيدًا.|1
der|Onkel|Onkel|عم، خال|uncle|Mein Onkel wohnt in Paris.|عمي يسكن في باريس.|1
die|Tante|Tanten|عمة، خالة|aunt|Meine Tante hat drei Kinder.|خالتي لديها ثلاثة أطفال.|1
das|Baby|Babys|رضيع|baby|Das Baby schläft.|الرضيع نائم.|1
der|Freund|Freunde|صديق|friend|Das ist mein Freund Karim.|هذا صديقي كريم.|1
die|Freundin|Freundinnen|صديقة|friend (f)|Meine Freundin heißt Sara.|اسم صديقتي سارة.|1
`);

  A.addWords('things', 'A1', `
der|Tisch|Tische|طاولة|table|Der Tisch ist neu.|الطاولة جديدة.|1
der|Stuhl|Stühle|كرسي|chair|Der Stuhl ist bequem.|الكرسي مريح.|1
die|Lampe|Lampen|مصباح|lamp|Die Lampe ist schön.|المصباح جميل.|1
die|Tür|Türen|باب|door|Die Tür ist offen.|الباب مفتوح.|1
das|Fenster|Fenster|نافذة|window|Das Fenster ist groß.|النافذة كبيرة.|1
das|Auto|Autos|سيارة|car|Das Auto ist teuer.|السيارة غالية.|1
die|Tasche|Taschen|حقيبة|bag|Meine Tasche ist schwarz.|حقيبتي سوداء.|1
der|Schlüssel|Schlüssel|مفتاح|key|Wo ist mein Schlüssel?|أين مفتاحي؟|1
die|Uhr|Uhren|ساعة|clock, watch|Die Uhr ist neu.|الساعة جديدة.|1
das|Bild|Bilder|صورة|picture|Das Bild ist schön.|الصورة جميلة.|1
der|Computer|Computer|حاسوب|computer|Der Computer ist langsam.|الحاسوب بطيء.|1
die|Brille|Brillen|نظارة|glasses|Ich brauche meine Brille.|أحتاج نظارتي.|1
die|Zeitung|Zeitungen|جريدة|newspaper|Die Zeitung ist von heute.|الجريدة من اليوم.|1
der|Kuli|Kulis|قلم حبر|pen|Hast du einen Kuli?|هل معك قلم؟|1
das|Heft|Hefte|دفتر|notebook|Das Heft ist blau.|الدفتر أزرق.|1
die|Flasche|Flaschen|زجاجة|bottle|Die Flasche ist leer.|الزجاجة فارغة.|1
das|Geld||مال، نقود|money|Ich habe kein Geld.|ليس لدي نقود.|1
die|Karte|Karten|بطاقة|card|Ich zahle mit Karte.|أدفع بالبطاقة.|1
das|Radio|Radios|راديو|radio|Das Radio ist alt.|الراديو قديم.|1
der|Fernseher|Fernseher|تلفاز|TV|Der Fernseher ist groß.|التلفاز كبير.|1
das|Zentrum|Zentren|مركز|center|Das Zentrum ist schön.|وسط المدينة جميل.|2
`);

  A.addWords('verbs', 'A1', `
|sein||يكون|to be|Ich bin müde.|أنا متعب.|1
|haben||يملك، لديه|to have|Ich habe ein Auto.|لدي سيارة.|1
|kommen||يأتي|to come|Kommst du heute?|هل تأتي اليوم؟|1
|gehen||يذهب مشيًا|to go|Ich gehe nach Hause.|أذهب إلى البيت.|1
|machen||يفعل، يصنع|to do, make|Was machst du?|ماذا تفعل؟|1
|sprechen||يتكلم|to speak|Sprechen Sie Arabisch?|هل تتكلم العربية؟|1
|lernen||يتعلم|to learn|Ich lerne Deutsch.|أتعلم الألمانية.|1
|arbeiten||يعمل|to work|Ich arbeite in einem Büro.|أعمل في مكتب.|1
|essen||يأكل|to eat|Wir essen um sieben Uhr.|نأكل في الساعة السابعة.|1
|trinken||يشرب|to drink|Ich trinke Tee.|أشرب الشاي.|1
|kaufen||يشتري|to buy|Ich kaufe Brot.|أشتري خبزًا.|1
|fahren||يذهب بوسيلة نقل، يقود|to drive, go by|Ich fahre mit dem Bus.|أذهب بالحافلة.|1
|schlafen||ينام|to sleep|Das Baby schläft.|الرضيع نائم.|1
|lesen||يقرأ|to read|Ich lese ein Buch.|أقرأ كتابًا.|1
|schreiben||يكتب|to write|Ich schreibe eine Mail.|أكتب رسالة إلكترونية.|1
|sehen||يرى، يشاهد|to see|Ich sehe einen Film.|أشاهد فيلمًا.|1
|möchten||يودّ|would like|Ich möchte einen Kaffee.|أودّ قهوة.|1
|können||يستطيع|can|Ich kann gut kochen.|أستطيع الطبخ جيدًا.|1
|müssen||يجب عليه|must|Ich muss arbeiten.|يجب أن أعمل.|1
|brauchen||يحتاج|to need|Ich brauche Hilfe.|أحتاج مساعدة.|1
|nehmen||يأخذ|to take|Ich nehme die Suppe.|سآخذ الحساء.|1
|spielen||يلعب|to play|Die Kinder spielen Fußball.|الأطفال يلعبون كرة القدم.|1
|kochen||يطبخ|to cook|Meine Mutter kocht heute.|أمي تطبخ اليوم.|1
|verstehen||يفهم|to understand|Ich verstehe das nicht.|لا أفهم هذا.|1
|helfen||يساعد|to help|Können Sie mir helfen?|هل يمكنك مساعدتي؟|1
|bezahlen||يدفع|to pay|Ich möchte bezahlen.|أريد أن أدفع.|1
|suchen||يبحث عن|to look for|Ich suche eine Wohnung.|أبحث عن شقة.|1
|finden||يجد|to find|Ich finde meinen Schlüssel nicht.|لا أجد مفتاحي.|2
|fragen||يسأل|to ask|Darf ich etwas fragen?|هل يمكنني أن أسأل شيئًا؟|2
|hören||يسمع|to hear|Ich höre Musik.|أستمع إلى الموسيقى.|1
|mögen||يحب|to like|Ich mag Kaffee.|أحب القهوة.|1
|kosten||سعره كذا|to cost|Was kostet das?|كم سعر هذا؟|1
|beginnen||يبدأ|to begin|Der Kurs beginnt um neun.|تبدأ الدورة في التاسعة.|2
|warten||ينتظر|to wait|Ich warte auf den Bus.|أنتظر الحافلة.|2
|wissen||يعرف (معلومة)|to know|Ich weiß es nicht.|لا أعرف.|2
`);

  A.addWords('questions', 'A1', `
|wer||من؟|who|Wer ist das?|من هذا؟|1
|was||ماذا؟ ما؟|what|Was ist das?|ما هذا؟|1
|wo||أين؟|where|Wo wohnst du?|أين تسكن؟|1
|woher||من أين؟|where from|Woher kommst du?|من أين أنت؟|1
|wohin||إلى أين؟|where to|Wohin fährst du?|إلى أين تذهب؟|1
|wann||متى؟|when|Wann kommst du?|متى تأتي؟|1
|wie||كيف؟|how|Wie heißt du?|ما اسمك؟|1
|wie viel||كم؟ للكمية والسعر|how much|Wie viel kostet das?|كم سعر هذا؟|1
|wie viele||كم؟ للعدد|how many|Wie viele Kinder hast du?|كم طفلًا لديك؟|1
|warum||لماذا؟|why|Warum lernst du Deutsch?|لماذا تتعلم الألمانية؟|1
|wie lange||كم من الوقت؟|how long|Wie lange dauert der Kurs?|كم تستغرق الدورة؟|1
|welcher||أيّ؟|which|Welcher Bus fährt zum Bahnhof?|أي حافلة تذهب إلى المحطة؟|2
`);

  A.addWords('colors', 'A1', `
|rot||أحمر|red|Die Tomate ist rot.|الطماطم حمراء.|1
|blau||أزرق|blue|Der Himmel ist blau.|السماء زرقاء.|1
|grün||أخضر|green|Das Gras ist grün.|العشب أخضر.|1
|gelb||أصفر|yellow|Die Banane ist gelb.|الموزة صفراء.|1
|schwarz||أسود|black|Meine Tasche ist schwarz.|حقيبتي سوداء.|1
|weiß||أبيض|white|Die Wand ist weiß.|الجدار أبيض.|1
|grau||رمادي|grey|Der Himmel ist heute grau.|السماء رمادية اليوم.|1
|braun||بنّي|brown|Der Tisch ist braun.|الطاولة بنّية.|1
|orange||برتقالي|orange|Die Jacke ist orange.|السترة برتقالية.|1
|rosa||وردي|pink|Das Kleid ist rosa.|الفستان وردي.|1
die|Farbe|Farben|لون|color|Welche Farbe hat dein Auto?|ما لون سيارتك؟|1
|hell||فاتح، مضيء|light|Das Zimmer ist hell.|الغرفة مضيئة.|2
|dunkel||داكن، مظلم|dark|Es ist schon dunkel.|الجو مظلم بالفعل.|2
`);

  A.addWords('clothes', 'A1', `
die|Kleidung||ملابس|clothes|Die Kleidung ist hier billig.|الملابس هنا رخيصة.|1
die|Hose|Hosen|بنطال|trousers|Die Hose ist zu lang.|البنطال طويل أكثر من اللازم.|1
das|Hemd|Hemden|قميص|shirt|Das Hemd ist weiß.|القميص أبيض.|1
die|Jacke|Jacken|سترة|jacket|Die Jacke kostet 50 Euro.|سعر السترة 50 يورو.|1
der|Mantel|Mäntel|معطف|coat|Im Winter trage ich einen Mantel.|في الشتاء أرتدي معطفًا.|1
der|Pullover|Pullover|كنزة|sweater|Der Pullover ist warm.|الكنزة دافئة.|1
das|Kleid|Kleider|فستان|dress|Das Kleid ist schön.|الفستان جميل.|1
der|Rock|Röcke|تنورة|skirt|Der Rock ist blau.|التنورة زرقاء.|1
der|Schuh|Schuhe|حذاء|shoe|Die Schuhe sind neu.|الحذاء جديد.|1
die|Socke|Socken|جورب|sock|Ich brauche Socken.|أحتاج جوارب.|1
die|Mütze|Mützen|قبعة صوفية|cap|Die Mütze ist warm.|القبعة دافئة.|2
der|Schal|Schals|وشاح|scarf|Mein Schal ist rot.|وشاحي أحمر.|2
die|Größe|Größen|مقاس|size|Welche Größe haben Sie?|ما مقاسك؟|1
|tragen||يرتدي، يحمل|to wear|Ich trage heute eine Jacke.|أرتدي سترة اليوم.|1
|anprobieren||يجرّب ملابس|to try on|Kann ich das anprobieren?|هل يمكنني تجربة هذا؟|2
`);

  A.addWords('weather', 'A1', `
das|Wetter||الطقس|weather|Wie ist das Wetter heute?|كيف الطقس اليوم؟|1
|kalt||بارد|cold|Im Winter ist es kalt.|الجو بارد في الشتاء.|1
|warm||دافئ|warm|Heute ist es warm.|الجو دافئ اليوم.|1
|heiß||حار|hot|Im Sommer ist es heiß.|الجو حار في الصيف.|1
|sonnig||مشمس|sunny|Es ist sonnig.|الجو مشمس.|1
der|Regen||مطر|rain|Der Regen ist stark.|المطر غزير.|1
|es regnet||إنها تمطر|it's raining|Es regnet schon wieder.|إنها تمطر مرة أخرى.|1
der|Schnee||ثلج|snow|Im Januar liegt Schnee.|في يناير يوجد ثلج.|1
|es schneit||إنها تثلج|it's snowing|Heute schneit es.|إنها تثلج اليوم.|1
der|Wind|Winde|ريح|wind|Der Wind ist kalt.|الريح باردة.|1
die|Wolke|Wolken|غيمة|cloud|Heute gibt es viele Wolken.|هناك غيوم كثيرة اليوم.|2
der|Sommer|Sommer|الصيف|summer|Im Sommer fahre ich ans Meer.|في الصيف أسافر إلى البحر.|1
der|Winter|Winter|الشتاء|winter|Der Winter in Deutschland ist lang.|الشتاء في ألمانيا طويل.|1
der|Frühling|Frühlinge|الربيع|spring|Im Frühling ist es schön.|الجو جميل في الربيع.|1
der|Herbst|Herbste|الخريف|autumn|Im Herbst regnet es oft.|تمطر كثيرًا في الخريف.|1
das|Grad|Grad|درجة|degree|Es sind 20 Grad.|الحرارة 20 درجة.|2
`);

  A.addWords('time', 'A1', `
die|Uhr|Uhren|الساعة (عند ذكر الوقت)|o'clock|Es ist acht Uhr.|الساعة الثامنة.|1
die|Stunde|Stunden|ساعة (مدة)|hour|Der Film dauert zwei Stunden.|الفيلم يستغرق ساعتين.|1
die|Minute|Minuten|دقيقة|minute|Ich komme in zehn Minuten.|آتي بعد عشر دقائق.|1
|halb||نصف|half|Es ist halb drei.|الساعة الثانية والنصف.|2
das|Viertel|Viertel|ربع|quarter|Es ist Viertel nach vier.|الساعة الرابعة والربع.|2
|morgen||غدًا|tomorrow|Morgen habe ich frei.|غدًا عندي عطلة.|1
|gestern||أمس|yesterday|Gestern war Sonntag.|أمس كان الأحد.|1
|jetzt||الآن|now|Ich habe jetzt Zeit.|لدي وقت الآن.|1
der|Morgen|Morgen|الصباح|morning|Am Morgen trinke ich Kaffee.|في الصباح أشرب القهوة.|1
der|Mittag|Mittage|الظهر|noon|Am Mittag esse ich.|آكل عند الظهر.|1
der|Abend|Abende|المساء|evening|Am Abend lese ich.|أقرأ في المساء.|1
die|Nacht|Nächte|الليل|night|In der Nacht schlafe ich.|أنام في الليل.|1
die|Woche|Wochen|أسبوع|week|Nächste Woche habe ich Urlaub.|عندي إجازة الأسبوع القادم.|1
der|Monat|Monate|شهر|month|Der Kurs dauert drei Monate.|الدورة تستغرق ثلاثة أشهر.|1
das|Wochenende|Wochenenden|عطلة نهاية الأسبوع|weekend|Am Wochenende schlafe ich lange.|أنام طويلًا في عطلة نهاية الأسبوع.|1
|früh||مبكرًا|early|Ich stehe früh auf.|أستيقظ مبكرًا.|1
|spät||متأخرًا|late|Es ist schon spät.|الوقت متأخر.|1
|oft||غالبًا|often|Ich trinke oft Tee.|أشرب الشاي غالبًا.|2
|immer||دائمًا|always|Der Bus ist immer pünktlich.|الحافلة دائمًا في موعدها.|2
|pünktlich||في الموعد|on time|Bitte seien Sie pünktlich.|من فضلك كن في الموعد.|2
`);

  A.addWords('days', 'A1', `
der|Montag|Montage|الاثنين|Monday|Am Montag arbeite ich.|أعمل يوم الاثنين.|1
der|Dienstag|Dienstage|الثلاثاء|Tuesday|Am Dienstag habe ich einen Kurs.|لدي دورة يوم الثلاثاء.|1
der|Mittwoch|Mittwoche|الأربعاء|Wednesday|Am Mittwoch gehe ich einkaufen.|أذهب للتسوق يوم الأربعاء.|1
der|Donnerstag|Donnerstage|الخميس|Thursday|Am Donnerstag spiele ich Fußball.|ألعب كرة القدم يوم الخميس.|1
der|Freitag|Freitage|الجمعة|Friday|Am Freitag esse ich mit meiner Familie.|يوم الجمعة آكل مع عائلتي.|1
der|Samstag|Samstage|السبت|Saturday|Am Samstag kaufe ich ein.|أتسوّق يوم السبت.|1
der|Sonntag|Sonntage|الأحد|Sunday|Am Sonntag sind die Geschäfte zu.|المحلات مغلقة يوم الأحد.|1
`);

  A.addWords('months', 'A1', `
der|Januar||يناير|January|Im Januar ist es kalt.|الجو بارد في يناير.|1
der|Februar||فبراير|February|Im Februar ist es oft grau.|الجو غالبًا غائم في فبراير.|1
der|März||مارس|March|Im März beginnt der Frühling.|يبدأ الربيع في مارس.|1
der|April||أبريل|April|Im April regnet es oft.|تمطر كثيرًا في أبريل.|1
der|Mai||مايو|May|Im Mai habe ich Geburtstag.|عيد ميلادي في مايو.|1
der|Juni||يونيو|June|Im Juni ist es warm.|الجو دافئ في يونيو.|1
der|Juli||يوليو|July|Im Juli habe ich Urlaub.|عندي إجازة في يوليو.|1
der|August||أغسطس|August|Im August ist es heiß.|الجو حار في أغسطس.|1
der|September||سبتمبر|September|Im September beginnt die Schule.|تبدأ المدرسة في سبتمبر.|1
der|Oktober||أكتوبر|October|Im Oktober ist es windig.|الجو عاصف في أكتوبر.|1
der|November||نوفمبر|November|Im November ist es dunkel.|الجو مظلم في نوفمبر.|1
der|Dezember||ديسمبر|December|Im Dezember ist es kalt.|الجو بارد في ديسمبر.|1
`);
})(window.App);
