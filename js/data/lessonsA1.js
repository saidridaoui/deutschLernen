/* A1 lessons 1 to 12.
   steps: short cards shown one at a time. Text uses {German} for clickable German and **bold**.
   ex: custom exercises. The first option is always the correct one; options are shuffled at runtime.
   Exercise keys: mc (multiple choice), fill (Ich [heiße] Omar.), order (sentence building), tr (Arabic to German). */
(function (A) {
  'use strict';

  A.addLesson({
    id: 'a1l01', level: 'A1', num: 1, icon: '🔤', kind: 'sound', de: 'Das Alphabet', ar: 'الأبجدية والنطق',
    goal: 'تتعرّف على الحروف الألمانية وأهم قواعد النطق والأخطاء الشائعة عند المتحدثين بالعربية.',
    topics: ['laute'],
    steps: [
      { h: 'الألمانية تُكتب بحروف لاتينية', p: 'تستخدم الألمانية 26 حرفًا لاتينيًا، وتُكتب من اليسار إلى اليمين. تضاف إليها أربعة حروف خاصة: **ä ö ü ß**.\n\nقاعدة مهمة من اليوم الأول: **كل الأسماء تبدأ بحرف كبير**، مثل {das Haus} و {der Tisch} و {die Schule}.' },
      {
        h: 'الحروف وأسماؤها', table: {
          head: ['الحرف', 'يُنطق تقريبًا', 'مثال'], rows: [
            ['{A}', 'آ', '{der Apfel}'], ['{B}', 'بيه', '{das Buch}'], ['{C}', 'تسيه', '{das Café}'], ['{D}', 'ديه', '{die Dose}'],
            ['{E}', 'إيه', '{das Essen}'], ['{F}', 'إف', '{der Fisch}'], ['{G}', 'جيه (ج مصرية)', '{gut}'], ['{H}', 'ها', '{das Haus}'],
            ['{I}', 'إي', '{ich}'], ['{J}', 'يوت', '{ja}'], ['{K}', 'كا', '{das Kind}'], ['{L}', 'إل', '{die Lampe}'],
            ['{M}', 'إم', '{die Mutter}'], ['{N}', 'إن', '{nein}'], ['{O}', 'أو', '{die Oma}'], ['{P}', 'پيه', '{die Post}'],
            ['{Q}', 'كو', '{die Qualität}'], ['{R}', 'إر', '{rot}'], ['{S}', 'إس', '{die Sonne}'], ['{T}', 'تيه', '{der Tag}'],
            ['{U}', 'أو (مضمومة)', '{die Uhr}'], ['{V}', 'فاو', '{der Vater}'], ['{W}', 'ڤيه', '{das Wasser}'], ['{X}', 'إكس', '{das Taxi}'],
            ['{Y}', 'إپسيلون', '{das Baby}'], ['{Z}', 'تسِت', '{die Zeit}']
          ]
        }
      },
      { h: 'الحروف الخاصة ä ö ü ß', p: '**ä** قريبة من «إيه» المفتوحة: {das Mädchen}.\n**ö** قل «إيه» مع ضمّ الشفتين: {schön}.\n**ü** قل «إي» مع ضمّ الشفتين كأنك تقول «أو»: {müde}.\n**ß** تُنطق سينًا قوية مثل ss: {die Straße}.\n\nإذا لم تجد هذه الحروف على لوحة المفاتيح يمكنك كتابة ae و oe و ue و ss، والتطبيق يقبلها.' },
      {
        h: 'تركيبات مهمة', table: {
          head: ['الكتابة', 'النطق', 'مثال'], rows: [
            ['{sch}', 'ش', '{die Schule}'], ['{ch} بعد a و o و u', 'خ', '{das Buch}'], ['{ch} بعد e و i', 'صوت خفيف بين ش وخ', '{ich}'],
            ['{sp} و {st} في البداية', 'شپ و شت', '{der Sport}، {die Stadt}'], ['{ei}', 'آي', '{mein}'], ['{ie}', 'إي طويلة', '{die Liebe}'],
            ['{eu} و {äu}', 'أوي', '{heute}'], ['{z}', 'تس', '{die Zeit}'], ['{w}', 'ڤ', '{das Wasser}'], ['{v}', 'ف غالبًا', '{der Vater}'],
            ['{j}', 'ي', '{ja}'], ['{s} قبل حرف علة', 'ز', '{die Sonne}'], ['{b d g} في آخر الكلمة', 'پ ت ك', '{der Tag}']
          ]
        }
      },
      { h: 'أخطاء شائعة عند المتحدثين بالعربية', p: '1. **p و b**: في العربية لا يوجد حرف p، لكن الفرق مهم: {packen} ليست {backen}.\n2. **o و u**: لا تخلط بينهما، {die Post} ليست «پوست».\n3. **e و i**: {der Tee} ليس «تي».\n4. **لا تضف حرفًا قبل الكلمة**: قل {die Stadt} وليس «إشتادت».\n5. **er في آخر الكلمة** تُنطق تقريبًا «أ» خفيفة: {der Vater}.\n6. **h بعد حرف علة** لا تُنطق، بل تطيل الحرف: {das Jahr}.\n7. **r** غالبًا تُنطق من الحلق مثل غين خفيفة: {rot}.' },
      { tip: 'استمع لكل كلمة بالسرعة العادية ثم بالسرعة البطيئة 🐢، وكرّرها بصوت مرتفع ثلاث مرات. النطق يتحسّن بالتكرار وليس بالقراءة فقط.' }
    ],
    phrases: `
Der Apfel ist rot.|التفاحة حمراء.
Das Buch ist gut.|الكتاب جيد.
Die Schule ist groß.|المدرسة كبيرة.
Die Straße ist lang.|الشارع طويل.
Ich bin müde.|أنا متعب.
Das Mädchen heißt Lina.|اسم الفتاة لينا.
Heute ist Montag.|اليوم هو الاثنين.
Die Sonne ist schön.|الشمس جميلة.
Ich habe keine Zeit.|ليس لدي وقت.
Wie schreibt man das?|كيف يُكتب هذا؟`,
    dialog: `
A|Wie heißen Sie?|ما اسمك؟
B|Ich heiße Müller.|اسمي مولر.
A|Wie schreibt man das?|كيف يُكتب ذلك؟
B|M, Ü, L, L, E, R.|م، ü، ل، ل، إ، ر.
A|Danke schön!|شكرًا جزيلًا!
B|Bitte schön!|عفوًا!`,
    ex: [
      { mc: 'كيف تُنطق {sch}؟', o: ['ش', 'س', 'تش'] },
      { mc: 'الحرف {ß} يساوي في النطق:', o: ['ss', 'b', 'z'] },
      { mc: 'في كلمة {die Zeit} يُنطق حرف z مثل:', o: ['تس', 'ز', 'ظ'] },
      { mc: 'كيف تُنطق {ei} في كلمة {mein}؟', o: ['آي', 'إي', 'أوي'] },
      { mc: 'كيف تُنطق {ie} في كلمة {die Liebe}؟', o: ['إي طويلة', 'آي', 'إيه'] },
      { mc: 'حرف {w} في {das Wasser} يُنطق:', o: ['ڤ', 'و', 'ف'] },
      { mc: 'حرف {v} في {der Vater} يُنطق غالبًا:', o: ['ف', 'ڤ', 'و'] },
      { mc: 'أي كلمة مكتوبة بشكل صحيح؟', o: ['die Schule', 'die schule', 'Die schule'], w: 'الأسماء في الألمانية تبدأ دائمًا بحرف كبير.' },
      { mc: 'كيف تُنطق {eu} في كلمة {heute}؟', o: ['أوي', 'إيو', 'آو'] }
    ]
  });

  A.addLesson({
    id: 'a1l02', level: 'A1', num: 2, icon: '👋', kind: 'situation', de: 'Hallo! Ich heiße …', ar: 'التحية والتعارف',
    goal: 'تحيّي الناس في أوقات مختلفة، وتقدّم نفسك، وتسأل عن الاسم والبلد والسكن.',
    topics: ['greet'],
    steps: [
      { h: 'التحية حسب الوقت', p: '{Guten Morgen!} في الصباح حتى العاشرة تقريبًا.\n{Guten Tag!} خلال النهار، وهي تحية رسمية ومهذبة.\n{Guten Abend!} في المساء.\n{Gute Nacht!} قبل النوم فقط.\n{Hallo!} تحية غير رسمية في أي وقت.\n\nللوداع: {Tschüss!} للأصدقاء، و {Auf Wiedersehen!} في المواقف الرسمية.' },
      { h: 'du أم Sie؟', p: 'في الألمانية طريقتان لقول «أنت»:\n**du**: للأصدقاء والعائلة والأطفال والزملاء المقربين.\n**Sie**: للغرباء، في العمل، في الدوائر الحكومية، عند الطبيب.\n\n{Sie} بمعنى «حضرتك» تُكتب دائمًا بحرف كبير. إذا لم تكن متأكدًا فاستخدم {Sie}، فهو الأكثر أمانًا.' },
      {
        h: 'أسئلة التعارف وأجوبتها', table: {
          head: ['السؤال (du)', 'السؤال (Sie)', 'الجواب'], rows: [
            ['{Wie heißt du?}', '{Wie heißen Sie?}', '{Ich heiße Omar.}'],
            ['{Woher kommst du?}', '{Woher kommen Sie?}', '{Ich komme aus Marokko.}'],
            ['{Wo wohnst du?}', '{Wo wohnen Sie?}', '{Ich wohne in Berlin.}'],
            ['{Wie geht es dir?}', '{Wie geht es Ihnen?}', '{Gut, danke. Und dir?}']
          ]
        }
      },
      { h: 'aus أم in؟', p: 'مع {kommen} نستخدم **aus** لأنه يعني «من»: {Ich komme aus Syrien.}\nمع {wohnen} نستخدم **in** لأنه يعني «في»: {Ich wohne in Hamburg.}\n\nوللتعريف بنفسك يمكنك أيضًا قول {Ich bin Lina.} أو {Ich bin Student.}' },
      { h: 'كيف أجيب عن سؤال الحال؟', p: '{Sehr gut, danke!} جيد جدًا.\n{Gut, danke. Und dir?} بخير، شكرًا. وأنت؟\n{Es geht.} لا بأس.\n{Nicht so gut.} لست بخير كثيرًا.\n\nوعند التعارف قل: {Freut mich!} أي تشرّفت بمعرفتك.' }
    ],
    phrases: `
Guten Morgen!|صباح الخير!
Guten Abend!|مساء الخير!
Wie geht es dir?|كيف حالك؟
Gut, danke. Und dir?|بخير، شكرًا. وأنت؟
Wie heißen Sie?|ما اسمك؟ (رسمي)
Ich heiße Omar.|اسمي عمر.
Ich bin Lina.|أنا لينا.
Woher kommst du?|من أين أنت؟
Ich komme aus Syrien.|أنا من سوريا.
Wo wohnst du?|أين تسكن؟
Ich wohne in Berlin.|أسكن في برلين.
Freut mich!|تشرّفت بمعرفتك!
Auf Wiedersehen!|إلى اللقاء!`,
    dialog: `
Anna|Hallo! Ich heiße Anna. Wie heißt du?|مرحبًا! اسمي آنا. ما اسمك؟
Omar|Hallo Anna! Ich heiße Omar.|مرحبًا آنا! اسمي عمر.
Anna|Woher kommst du, Omar?|من أين أنت يا عمر؟
Omar|Ich komme aus Marokko. Und du?|أنا من المغرب. وأنت؟
Anna|Ich komme aus Deutschland. Wo wohnst du?|أنا من ألمانيا. أين تسكن؟
Omar|Ich wohne in Berlin.|أسكن في برلين.
Anna|Freut mich!|تشرّفت بمعرفتك!
Omar|Mich auch!|وأنا أيضًا!`,
    ex: [
      { mc: 'الساعة الثامنة صباحًا وتقابل جارك. ماذا تقول؟', o: ['Guten Morgen!', 'Guten Abend!', 'Gute Nacht!'] },
      { mc: 'تتحدث مع مديرك في العمل. أي ضمير تستخدم؟', o: ['Sie', 'du'], w: 'في العمل ومع الأشخاص غير المقربين نستخدم {Sie}.' },
      { fill: 'Ich [heiße] Omar.', o: ['heiße', 'heißt', 'heißen'], ar: 'اسمي عمر.', w: 'مع {ich} ينتهي الفعل غالبًا بـ e: {ich heiße}.' },
      { fill: 'Woher [kommst] du?', o: ['kommst', 'komme', 'kommen'], ar: 'من أين أنت؟', w: 'مع {du} ينتهي الفعل بـ st: {du kommst}.' },
      { fill: 'Ich komme [aus] Marokko.', o: ['aus', 'in', 'nach'], ar: 'أنا من المغرب.', w: 'مع {kommen} نستخدم {aus} بمعنى «من».' },
      { fill: 'Ich wohne [in] Berlin.', o: ['in', 'aus', 'von'], ar: 'أسكن في برلين.', w: 'مع {wohnen} نستخدم {in} بمعنى «في».' },
      { mc: 'كيف ترد على {Wie geht es Ihnen?}', o: ['Gut, danke. Und Ihnen?', 'Ich heiße Anna.', 'Aus Berlin.'] },
      { order: 'Wie heißen Sie?', ar: 'ما اسمك؟ (رسمي)' },
      { tr: 'أنا من مصر.', de: 'Ich komme aus Ägypten.' },
      { mc: 'تغادر صديقك مساءً. ماذا تقول؟', o: ['Tschüss, bis bald!', 'Guten Tag!', 'Freut mich!'] }
    ]
  });

  A.addLesson({
    id: 'a1l03', level: 'A1', num: 3, icon: '🔢', kind: 'vocab', de: 'Die Zahlen', ar: 'الأرقام',
    goal: 'تعدّ من 0 إلى 100، وتقول عمرك ورقم هاتفك والأسعار والتواريخ البسيطة.',
    topics: ['numbers'],
    steps: [
      {
        h: 'من 0 إلى 12', table: {
          head: ['الرقم', 'بالألمانية', 'الرقم', 'بالألمانية'], rows: [
            ['0', '{null}', '7', '{sieben}'], ['1', '{eins}', '8', '{acht}'], ['2', '{zwei}', '9', '{neun}'],
            ['3', '{drei}', '10', '{zehn}'], ['4', '{vier}', '11', '{elf}'], ['5', '{fünf}', '12', '{zwölf}'], ['6', '{sechs}', '', '']
          ]
        }
      },
      { h: 'من 13 إلى 19', p: 'الرقم ثم {zehn}: {dreizehn} و {vierzehn} و {fünfzehn} و {achtzehn} و {neunzehn}.\nانتبه لاثنين فقط: {sechzehn} (بدون s) و {siebzehn} (بدون en).' },
      {
        h: 'العشرات', table: {
          head: ['الرقم', 'بالألمانية'], rows: [
            ['20', '{zwanzig}'], ['30', '{dreißig}'], ['40', '{vierzig}'], ['50', '{fünfzig}'], ['60', '{sechzig}'],
            ['70', '{siebzig}'], ['80', '{achtzig}'], ['90', '{neunzig}'], ['100', '{hundert}']
          ]
        }
      },
      { h: 'ميزة للمتحدث بالعربية', p: 'في الألمانية نقول الآحاد أولًا ثم العشرات، تمامًا مثل العربية:\n21 = واحد وعشرون = {einundzwanzig}\n45 = خمسة وأربعون = {fünfundvierzig}\n98 = ثمانية وتسعون = {achtundneunzig}\n\nلكن نكتب الرقم كله كلمة واحدة، و eins تصبح ein: {einunddreißig}.' },
      { h: 'العمر والهاتف والسعر والتاريخ', p: 'العمر: {Wie alt bist du?} والجواب {Ich bin 25 Jahre alt.}\nالهاتف: نقرأ الأرقام واحدًا واحدًا أو زوجين زوجين: {Meine Nummer ist 0176 45 89 12.}\nالسعر: الفاصلة للسنتات، و 3,50 € تُقرأ {drei Euro fünfzig}.\nالتاريخ: {Heute ist der 3. Mai.} والنقطة بعد الرقم تعني «الثالث».' },
      { tip: 'تدرّب على الأرقام بالاستماع أكثر من القراءة. في قسم التمارين ستجد مدرّب أرقام وأسعار يُسمعك أرقامًا عشوائية.' }
    ],
    phrases: `
Wie alt bist du?|كم عمرك؟
Ich bin 25 Jahre alt.|عمري 25 سنة.
Wie ist deine Telefonnummer?|ما رقم هاتفك؟
Meine Nummer ist 0176 45 89 12.|رقمي هو 0176 45 89 12.
Was kostet das?|كم سعر هذا؟
Das kostet 4,50 Euro.|سعره 4,50 يورو.
Heute ist der 3. Mai.|اليوم هو الثالث من مايو.
Ich habe am 12. Juni Geburtstag.|عيد ميلادي في 12 يونيو.
Mein Sohn ist neun Jahre alt.|ابني عمره تسع سنوات.`,
    dialog: `
Lina|Wie alt bist du?|كم عمرك؟
Tom|Ich bin 30. Und du?|عمري 30. وأنت؟
Lina|Ich bin 28. Wie ist deine Telefonnummer?|عمري 28. ما رقم هاتفك؟
Tom|0151 23 45 67.|0151 23 45 67.
Lina|Noch einmal, bitte.|مرة أخرى من فضلك.
Tom|0151 23 45 67.|0151 23 45 67.
Lina|Danke!|شكرًا!`,
    ex: [
      { mc: 'ما الرقم {einundzwanzig}؟', o: ['21', '12', '20'] },
      { mc: 'ما الرقم {dreißig}؟', o: ['30', '13', '33'] },
      { mc: 'كيف تقول 45؟', o: ['fünfundvierzig', 'vierundfünfzig', 'vierzigfünf'], w: 'الآحاد أولًا: خمسة وأربعون = {fünfundvierzig}.' },
      { mc: 'ما الرقم {siebzehn}؟', o: ['17', '70', '7'] },
      { mc: 'كيف تقول 16؟', o: ['sechzehn', 'sechszehn', 'sechzig'], w: 'في {sechzehn} تسقط s.' },
      { fill: 'Ich bin 20 Jahre [alt].', o: ['alt', 'Jahre', 'bin'], ar: 'عمري 20 سنة.' },
      { mc: 'كيف تقرأ 3,50 €؟', o: ['drei Euro fünfzig', 'dreißig Euro fünf', 'drei fünfzig Cent'] },
      { fill: 'Wie [alt] bist du?', o: ['alt', 'viel', 'Jahre'], ar: 'كم عمرك؟' },
      { tr: 'كم عمرك؟', de: 'Wie alt bist du?' }
    ]
  });

  A.addLesson({
    id: 'a1l04', level: 'A1', num: 4, icon: '🪪', kind: 'situation', de: 'Angaben zur Person', ar: 'البيانات الشخصية',
    goal: 'تعطي بياناتك الشخصية في دائرة أو عند التسجيل: الاسم والعنوان والهاتف والبريد والحالة الاجتماعية.',
    topics: ['personal'],
    steps: [
      { h: 'الاستمارات في ألمانيا', p: 'ستملأ في ألمانيا استمارات كثيرة {das Formular}. أهم الحقول:\n{der Vorname} الاسم الأول\n{der Nachname} اسم العائلة\n{die Adresse} العنوان: {die Straße} و {die Hausnummer} و {die Postleitzahl}\n{die Telefonnummer} رقم الهاتف\n{die Mailadresse} البريد الإلكتروني\n{der Familienstand} الحالة الاجتماعية: {ledig} أو {verheiratet} أو {geschieden}' },
      { h: 'أسئلة رسمية', p: '{Wie ist Ihr Name?} ما اسمك؟\n{Wie ist Ihre Adresse?} ما عنوانك؟\n{Wie ist Ihre Telefonnummer?} ما رقم هاتفك؟\n{Was sind Sie von Beruf?} ما مهنتك؟\n\nلاحظ: {Ihr} مع الكلمات المذكّرة والمحايدة، و {Ihre} مع المؤنثة: {Ihr Name}، {Ihre Adresse}.' },
      { h: 'العنوان الألماني', p: 'في ألمانيا يُكتب الشارع ثم رقم المنزل، ثم الرمز البريدي ثم المدينة:\n{Goethestraße 5, 10115 Berlin}\n\nوالبريد الإلكتروني: @ تُقرأ {at}، والنقطة تُقرأ {Punkt}: omar@mail.de تُقرأ {omar at mail Punkt de}.' },
      { h: 'التهجئة', p: 'الأسماء العربية غير مألوفة للألمان، لذلك ستسمع كثيرًا:\n{Können Sie das bitte buchstabieren?} هل يمكنك تهجئة ذلك؟\nتدرّب على تهجئة اسمك بالحروف الألمانية من الدرس الأول.' }
    ],
    phrases: `
Wie ist Ihr Vorname?|ما اسمك الأول؟
Mein Vorname ist Omar.|اسمي الأول عمر.
Mein Nachname ist Haddad.|اسم عائلتي حداد.
Wie ist Ihre Adresse?|ما عنوانك؟
Ich wohne in der Goethestraße 5.|أسكن في شارع غوته رقم 5.
Wie ist Ihre Mailadresse?|ما بريدك الإلكتروني؟
Ich bin verheiratet.|أنا متزوج.
Ich bin ledig.|أنا أعزب.
Was sind Sie von Beruf?|ما مهنتك؟
Können Sie das bitte buchstabieren?|هل يمكنك تهجئة ذلك من فضلك؟`,
    dialog: `
Beamtin|Guten Tag. Wie ist Ihr Name?|مرحبًا. ما اسمك؟
Omar|Mein Name ist Omar Haddad.|اسمي عمر حداد.
Beamtin|Wie schreibt man Haddad?|كيف يُكتب حداد؟
Omar|H, A, D, D, A, D.|هـ، أ، د، د، أ، د.
Beamtin|Wie ist Ihre Adresse?|ما عنوانك؟
Omar|Goethestraße 5 in Berlin.|شارع غوته 5 في برلين.
Beamtin|Und Ihre Telefonnummer?|ورقم هاتفك؟
Omar|0176 55 44 33.|0176 55 44 33.
Beamtin|Danke schön.|شكرًا جزيلًا.`,
    ex: [
      { mc: 'ما معنى {der Nachname}؟', o: ['اسم العائلة', 'الاسم الأول', 'العنوان'] },
      { fill: 'Wie ist [Ihre] Adresse?', o: ['Ihre', 'Ihr', 'Sie'], ar: 'ما عنوانك؟', w: '{die Adresse} مؤنثة، لذلك نقول {Ihre}.' },
      { fill: 'Wie ist [Ihr] Name?', o: ['Ihr', 'Ihre', 'Sie'], ar: 'ما اسمك؟', w: '{der Name} مذكّر، لذلك نقول {Ihr}.' },
      { mc: 'كيف يُقرأ الرمز @ في البريد الإلكتروني؟', o: ['at', 'Punkt', 'Komma'] },
      { mc: 'ما معنى {ledig}؟', o: ['أعزب', 'متزوج', 'مطلّق'] },
      { mc: 'الموظف لم يفهم اسمك. ماذا يطلب منك؟', o: ['Können Sie das bitte buchstabieren?', 'Wie alt sind Sie?', 'Woher kommen Sie?'] },
      { order: 'Was sind Sie von Beruf?', ar: 'ما مهنتك؟' },
      { tr: 'أنا متزوج.', de: 'Ich bin verheiratet.' }
    ]
  });

  A.addLesson({
    id: 'a1l05', level: 'A1', num: 5, icon: '👪', kind: 'vocab', de: 'Die Familie', ar: 'العائلة',
    goal: 'تتحدث عن أفراد عائلتك وتستخدم mein و meine و dein و deine بشكل صحيح.',
    topics: ['family'],
    steps: [
      { h: 'أفراد العائلة', p: '{der Vater} و {die Mutter} = {die Eltern}\n{der Bruder} و {die Schwester} = {die Geschwister}\n{der Sohn} و {die Tochter} و {das Kind}\n{der Opa} و {die Oma}، {der Onkel} و {die Tante}\n\nانتبه: {der Mann} تعني رجل أو زوج، و {die Frau} تعني امرأة أو زوجة. السياق يوضح المعنى.' },
      {
        h: 'mein و meine', table: {
          head: ['جنس الكلمة', 'ملكي', 'ملكك (du)', 'مثال'], rows: [
            ['مذكّر der', '{mein}', '{dein}', '{mein Vater}'],
            ['محايد das', '{mein}', '{dein}', '{mein Kind}'],
            ['مؤنث die', '{meine}', '{deine}', '{meine Mutter}'],
            ['جمع die', '{meine}', '{deine}', '{meine Eltern}']
          ]
        }
      },
      { h: 'القاعدة ببساطة', p: 'إذا كانت الكلمة مع {die} (مؤنثة أو جمع) نضيف **e**: {meine Schwester}، {deine Kinder}.\nإذا كانت مع {der} أو {das} لا نضيف شيئًا: {mein Bruder}، {dein Baby}.\n\nوللغائب: {sein} (له) و {ihr} (لها): {Das ist sein Bruder.} {Das ist ihre Mutter.}' },
      { h: 'وصف العائلة', p: '{Ich habe zwei Brüder.} لدي أخوان.\n{Mein Vater heißt Ahmed.} اسم أبي أحمد.\n{Meine Schwester ist 20 Jahre alt.} أختي عمرها 20 سنة.\n{Ich habe keine Kinder.} ليس لدي أطفال.' }
    ],
    phrases: `
Das ist meine Familie.|هذه عائلتي.
Mein Vater heißt Ahmed.|اسم أبي أحمد.
Meine Mutter ist Lehrerin.|أمي معلمة.
Hast du Geschwister?|هل لديك إخوة؟
Ich habe einen Bruder und zwei Schwestern.|لدي أخ وأختان.
Meine Eltern wohnen in Rabat.|يسكن والداي في الرباط.
Wir haben zwei Kinder.|لدينا طفلان.
Das ist mein Mann.|هذا زوجي.
Ist das deine Tochter?|هل هذه ابنتك؟`,
    dialog: `
Sara|Wer ist das?|من هذا؟
Karim|Das ist mein Bruder.|هذا أخي.
Sara|Wie heißt er?|ما اسمه؟
Karim|Er heißt Yusuf. Er ist 22.|اسمه يوسف. عمره 22.
Sara|Und wer ist das?|ومن هذه؟
Karim|Das ist meine Mutter.|هذه أمي.
Sara|Hast du auch Schwestern?|هل لديك أخوات أيضًا؟
Karim|Ja, zwei Schwestern.|نعم، أختان.`,
    ex: [
      { fill: '[Mein] Vater heißt Ahmed.', o: ['Mein', 'Meine'], ar: 'اسم أبي أحمد.', w: '{der Vater} مذكّر، لذلك {mein} بدون e.' },
      { fill: '[Meine] Schwester ist Lehrerin.', o: ['Meine', 'Mein'], ar: 'أختي معلمة.', w: '{die Schwester} مؤنثة، لذلك {meine}.' },
      { fill: '[Meine] Eltern wohnen in Rabat.', o: ['Meine', 'Mein'], ar: 'يسكن والداي في الرباط.', w: 'الجمع يأخذ {meine}.' },
      { fill: 'Ist das [dein] Sohn?', o: ['dein', 'deine'], ar: 'هل هذا ابنك؟', w: '{der Sohn} مذكّر، لذلك {dein}.' },
      { fill: 'Das ist [mein] Kind.', o: ['mein', 'meine'], ar: 'هذا طفلي.', w: '{das Kind} محايد، لذلك {mein}.' },
      { mc: 'ما معنى {die Geschwister}؟', o: ['الإخوة والأخوات', 'الوالدان', 'الأطفال'] },
      { mc: '{die Frau} يمكن أن تعني:', o: ['امرأة أو زوجة', 'بنت', 'أخت'] },
      { tr: 'هذه أمي.', de: 'Das ist meine Mutter.' },
      { order: 'Ich habe zwei Brüder.', ar: 'لدي أخوان.' }
    ]
  });

  A.addLesson({
    id: 'a1l06', level: 'A1', num: 6, icon: '🏷️', kind: 'grammar', de: 'der, die, das', ar: 'أدوات التعريف وجنس الأسماء',
    goal: 'تفهم فكرة الجنس في الألمانية وتستخدم der و die و das و ein و eine و kein و keine.',
    topics: ['things'],
    steps: [
      { h: 'ثلاثة أجناس بدل اثنين', p: 'في العربية للاسم جنسان: مذكّر ومؤنث. في الألمانية ثلاثة:\n**der** للمذكّر: {der Tisch}\n**die** للمؤنث: {die Lampe}\n**das** للمحايد: {das Auto}\n\nفي هذا التطبيق نلوّن الأدوات دائمًا: **der** بالأزرق، و **die** بالأحمر، و **das** بالأخضر.' },
      { h: 'الجنس هنا قواعدي وليس منطقيًا', p: 'لا تحاول نقل الجنس من العربية:\nالباب مذكّر في العربية، لكن {die Tür} مؤنثة.\nالشمس مؤنثة في العربية، و {die Sonne} مؤنثة أيضًا، لكن هذا مجرد صدفة.\nحتى الفتاة {das Mädchen} محايدة!\n\nلذلك **احفظ كل اسم مع أداته**، كأن الأداة جزء من الكلمة.' },
      {
        h: 'أداة النكرة ein و eine، والنفي kein و keine', table: {
          head: ['', 'المعرفة', 'النكرة', 'النفي'], rows: [
            ['مذكّر', '{der Tisch}', '{ein Tisch}', '{kein Tisch}'],
            ['مؤنث', '{die Lampe}', '{eine Lampe}', '{keine Lampe}'],
            ['محايد', '{das Auto}', '{ein Auto}', '{kein Auto}'],
            ['جمع', '{die Tische}', 'لا يوجد', '{keine Tische}']
          ]
        }
      },
      { h: 'الجمع سهل في الأداة', p: 'كل الأسماء في الجمع تأخذ **die**: {der Tisch} ← {die Tische}، {das Buch} ← {die Bücher}.\nلكن شكل الجمع نفسه يختلف من كلمة لأخرى، لذلك نعرضه لك في بطاقة كل كلمة.' },
      { h: 'أنماط تساعدك (وليست قواعد مطلقة)', p: 'غالبًا **die**: الكلمات المنتهية بـ ung و heit و keit و schaft و ion، ومعظم الكلمات المنتهية بـ e: {die Zeitung}، {die Lampe}.\nدائمًا **das**: المنتهية بـ chen و lein: {das Mädchen}.\nغالبًا **der**: أيام الأسبوع والشهور والفصول: {der Montag}، {der Mai}.\nالمهن المؤنثة بـ in تأخذ **die**: {die Lehrerin}.\n\nهذه الأنماط تساعد، لكن كثيرًا من الكلمات تحتاج إلى حفظ فقط.' },
      { tip: 'طريقة حفظ فعّالة: قل الكلمة مع أداتها بصوت مرتفع ({der Tisch، der Tisch})، وتخيّل صورتها بلون أداتها: الطاولة زرقاء، المصباح أحمر، السيارة خضراء.' }
    ],
    phrases: `
Das ist ein Tisch.|هذه طاولة.
Der Tisch ist neu.|الطاولة جديدة.
Das ist eine Lampe.|هذا مصباح.
Die Lampe ist schön.|المصباح جميل.
Das ist ein Auto.|هذه سيارة.
Das Auto ist teuer.|السيارة غالية.
Das ist kein Stuhl.|هذا ليس كرسيًا.
Das sind Bücher.|هذه كتب.
Ich habe keine Zeit.|ليس لدي وقت.`,
    dialog: `
Mia|Was ist das?|ما هذا؟
Ali|Das ist eine Uhr.|هذه ساعة.
Mia|Und das? Ist das ein Handy?|وهذا؟ هل هذا هاتف محمول؟
Ali|Nein, das ist kein Handy. Das ist ein Radio.|لا، هذا ليس هاتفًا. هذا راديو.
Mia|Ist das Radio neu?|هل الراديو جديد؟
Ali|Nein, das Radio ist alt.|لا، الراديو قديم.`,
    ex: [
      { fill: 'Das ist [ein] Tisch.', o: ['ein', 'eine'], ar: 'هذه طاولة.', w: '{der Tisch} مذكّر، والنكرة للمذكّر {ein}.' },
      { fill: 'Das ist [eine] Tasche.', o: ['eine', 'ein'], ar: 'هذه حقيبة.', w: '{die Tasche} مؤنثة، والنكرة للمؤنث {eine}.' },
      { fill: 'Das ist [kein] Auto.', o: ['kein', 'keine'], ar: 'هذه ليست سيارة.', w: '{das Auto} محايد، والنفي {kein}.' },
      { fill: 'Ich habe [keine] Zeit.', o: ['keine', 'kein'], ar: 'ليس لدي وقت.', w: '{die Zeit} مؤنثة، والنفي {keine}.' },
      { mc: 'ما أداة كلمة {Zeitung}؟', o: ['die', 'der', 'das'], w: 'الكلمات المنتهية بـ ung مؤنثة: {die Zeitung}.' },
      { mc: 'ما أداة كلمة {Mädchen}؟', o: ['das', 'die', 'der'], w: 'الكلمات المنتهية بـ chen محايدة دائمًا.' },
      { mc: 'ما أداة كلمة {Lehrerin}؟', o: ['die', 'der', 'das'] },
      { mc: 'أداة الجمع في الألمانية دائمًا:', o: ['die', 'der', 'das'] },
      { mc: 'أي جملة صحيحة؟', o: ['Die Tür ist offen.', 'Der Tür ist offen.', 'Das Tür ist offen.'], w: '{die Tür} مؤنثة رغم أن الباب مذكّر في العربية.' },
      { tr: 'السيارة جديدة.', de: 'Das Auto ist neu.' }
    ]
  });

  A.addLesson({
    id: 'a1l07', level: 'A1', num: 7, icon: '🧱', kind: 'grammar', de: 'Der Satz', ar: 'بناء الجملة الألمانية',
    goal: 'تبني جملًا بسيطة صحيحة وتفهم أن الفعل يأتي في الموضع الثاني.',
    topics: ['everyday'],
    steps: [
      { h: 'القاعدة الذهبية: الفعل ثانيًا', p: 'في الجملة الخبرية الألمانية يأتي **الفعل المصرَّف في الموضع الثاني** دائمًا:\n{Ich wohne in Berlin.}\n{Ich lerne Deutsch.}\n\nالترتيب الأساسي: الفاعل ثم الفعل ثم باقي الجملة.' },
      { h: 'إذا بدأت بكلمة أخرى', p: 'يمكنك أن تبدأ الجملة بالوقت أو المكان، لكن الفعل يبقى ثانيًا والفاعل ينتقل بعده:\n{Ich lerne heute Deutsch.}\n{Heute lerne ich Deutsch.}\n\nخطأ شائع: «Heute ich lerne» ✗. في العربية نقول «اليوم أنا أتعلم»، لكن الألمانية لا تسمح بذلك.' },
      { h: 'الأسئلة', p: 'سؤال بأداة استفهام: الأداة ثم الفعل ثم الفاعل: {Wo wohnst du?}\nسؤال جوابه نعم أو لا: الفعل أولًا: {Wohnst du in Berlin?}' },
      { h: 'جمل أساسية تستخدمها كل يوم', p: '{Ich bin …} أنا: {Ich bin müde.}\n{Ich habe …} لدي: {Ich habe ein Auto.}\n{Ich wohne …} أسكن: {Ich wohne in Köln.}\n{Ich komme …} أنا من: {Ich komme aus Ägypten.}\n{Ich möchte …} أودّ: {Ich möchte einen Kaffee.}' },
      { h: 'فعلان في جملة واحدة', p: 'مع {möchte} و {kann} و {muss} يبقى الفعل الأول ثانيًا، ويذهب الفعل الثاني بصيغة المصدر إلى **آخر الجملة**:\n{Ich möchte Deutsch lernen.}\n{Ich kann heute nicht kommen.}\n\nتخيّل الجملة كإطار: الفعل الأول في البداية، والفعل الثاني يغلق الإطار في النهاية.' }
    ],
    phrases: `
Ich lerne Deutsch.|أتعلم الألمانية.
Heute lerne ich Deutsch.|اليوم أتعلم الألمانية.
Ich habe ein Auto.|لدي سيارة.
Ich möchte einen Kaffee.|أودّ قهوة.
Ich möchte Deutsch lernen.|أودّ أن أتعلم الألمانية.
Wohnst du in Berlin?|هل تسكن في برلين؟
Am Montag arbeite ich.|يوم الاثنين أعمل.
Ich spreche ein bisschen Deutsch.|أتكلم الألمانية قليلًا.
Morgen komme ich nicht.|غدًا لن آتي.`,
    dialog: `
Jan|Was machst du heute?|ماذا تفعل اليوم؟
Nour|Heute lerne ich Deutsch.|اليوم أتعلم الألمانية.
Jan|Und morgen?|وغدًا؟
Nour|Morgen arbeite ich.|غدًا أعمل.
Jan|Möchtest du am Samstag Fußball spielen?|هل تودّ أن تلعب كرة القدم يوم السبت؟
Nour|Ja, gern!|نعم، بكل سرور!`,
    ex: [
      { mc: 'أين يأتي الفعل في الجملة الخبرية الألمانية؟', o: ['في الموضع الثاني', 'في البداية', 'في النهاية دائمًا'] },
      { mc: 'أي جملة صحيحة؟', o: ['Heute lerne ich Deutsch.', 'Heute ich lerne Deutsch.', 'Lerne heute ich Deutsch.'], w: 'إذا بدأت الجملة بـ {heute} يأتي الفعل بعدها مباشرة ثم الفاعل.' },
      { mc: 'أي جملة صحيحة؟', o: ['Ich möchte Deutsch lernen.', 'Ich möchte lernen Deutsch.', 'Ich lernen möchte Deutsch.'], w: 'الفعل الثاني يذهب إلى آخر الجملة.' },
      { order: 'Heute lerne ich Deutsch.', ar: 'اليوم أتعلم الألمانية.', alt: ['Ich lerne heute Deutsch.'] },
      { order: 'Ich möchte einen Kaffee trinken.', ar: 'أودّ أن أشرب قهوة.' },
      { order: 'Wohnst du in Berlin?', ar: 'هل تسكن في برلين؟' },
      { order: 'Am Montag arbeite ich.', ar: 'يوم الاثنين أعمل.', alt: ['Ich arbeite am Montag.'] },
      { mc: 'أي سؤال صحيح؟', o: ['Wo wohnst du?', 'Wo du wohnst?', 'Du wo wohnst?'] },
      { tr: 'أودّ أن أتعلم الألمانية.', de: 'Ich möchte Deutsch lernen.' }
    ]
  });

  A.addLesson({
    id: 'a1l08', level: 'A1', num: 8, icon: '⚙️', kind: 'grammar', de: 'Wichtige Verben', ar: 'أهم أفعال A1',
    goal: 'تتعرّف على 20 فعلًا أساسيًا ومعناها وتصريفها، وتستخدمها في جمل قصيرة.',
    topics: ['verbs'],
    steps: [
      { h: 'المصدر ينتهي بـ en', p: 'كل فعل في القاموس له صيغة مصدر تنتهي غالبًا بـ **en**: {lernen}، {wohnen}، {kommen}.\nنحذف en فيبقى **الجذع**: lern، wohn، komm. ثم نضيف نهاية تناسب الفاعل.' },
      {
        h: 'الأفعال العشرون', table: {
          head: ['الفعل', 'المعنى', 'الفعل', 'المعنى'], rows: [
            ['{sein}', 'يكون', '{haben}', 'يملك'], ['{kommen}', 'يأتي', '{wohnen}', 'يسكن'],
            ['{gehen}', 'يذهب مشيًا', '{machen}', 'يفعل'], ['{sprechen}', 'يتكلم', '{lernen}', 'يتعلم'],
            ['{arbeiten}', 'يعمل', '{essen}', 'يأكل'], ['{trinken}', 'يشرب', '{kaufen}', 'يشتري'],
            ['{fahren}', 'يذهب بوسيلة نقل', '{schlafen}', 'ينام'], ['{lesen}', 'يقرأ', '{schreiben}', 'يكتب'],
            ['{sehen}', 'يرى', '{möchten}', 'يودّ'], ['{können}', 'يستطيع', '{müssen}', 'يجب']
          ]
        }
      },
      { h: 'gehen أم fahren؟', p: 'في العربية نقول «أذهب» للحالتين، لكن في الألمانية:\n{gehen} عندما تمشي على قدميك: {Ich gehe zur Schule.}\n{fahren} عندما تستخدم وسيلة نقل: {Ich fahre mit dem Bus.}' },
      { h: 'أفعال يتغير فيها الحرف', p: 'بعض الأفعال يتغير حرف العلة فيها مع **du** و **er/sie/es** فقط:\n{sprechen}: {du sprichst}، {er spricht}\n{essen}: {du isst}، {er isst}\n{lesen}: {du liest}، {sie liest}\n{sehen}: {du siehst}، {er sieht}\n{fahren}: {du fährst}، {er fährt}\n{schlafen}: {du schläfst}، {es schläft}' },
      { link: '#/grammar/verbs', label: 'افتح جداول التصريف الكاملة لكل فعل' }
    ],
    phrases: `
Ich bin Student.|أنا طالب.
Er hat zwei Kinder.|لديه طفلان.
Wir gehen nach Hause.|نذهب إلى البيت.
Sie spricht Arabisch und Deutsch.|هي تتكلم العربية والألمانية.
Du isst kein Fleisch.|أنت لا تأكل اللحم.
Er fährt mit dem Bus.|يذهب بالحافلة.
Das Baby schläft.|الرضيع نائم.
Ich lese ein Buch.|أقرأ كتابًا.
Was machst du am Wochenende?|ماذا تفعل في عطلة نهاية الأسبوع؟
Wir kaufen Brot.|نشتري خبزًا.`,
    dialog: `
Emma|Was machst du heute Abend?|ماذا تفعل هذا المساء؟
Rami|Ich lese ein Buch. Und du?|أقرأ كتابًا. وأنت؟
Emma|Ich sehe einen Film. Kommst du mit?|أشاهد فيلمًا. هل تأتي معي؟
Rami|Nein, ich muss früh schlafen.|لا، يجب أن أنام مبكرًا.
Emma|Schade! Bis morgen!|للأسف! إلى الغد!`,
    ex: [
      { fill: 'Er [spricht] gut Deutsch.', o: ['spricht', 'sprecht', 'sprechen'], ar: 'هو يتكلم الألمانية جيدًا.', w: 'في {sprechen} يتغير e إلى i مع er: {er spricht}.' },
      { fill: 'Du [isst] kein Fleisch.', o: ['isst', 'esst', 'esse'], ar: 'أنت لا تأكل اللحم.', w: 'مع du: {du isst}.' },
      { fill: 'Sie [liest] ein Buch.', o: ['liest', 'lest', 'lese'], ar: 'هي تقرأ كتابًا.' },
      { fill: 'Wir [fahren] nach Hamburg.', o: ['fahren', 'fährt', 'fahrt'], ar: 'نسافر إلى هامبورغ.', w: 'مع {wir} لا يتغير الحرف: {wir fahren}.' },
      { fill: 'Das Baby [schläft].', o: ['schläft', 'schlaft', 'schlafen'], ar: 'الرضيع نائم.' },
      { mc: 'تذهب إلى العمل بالقطار. أي فعل تستخدم؟', o: ['fahren', 'gehen', 'laufen'] },
      { mc: 'ما معنى {kaufen}؟', o: ['يشتري', 'يبيع', 'يطبخ'] },
      { fill: 'Ich [habe] keine Zeit.', o: ['habe', 'hat', 'hast'], ar: 'ليس لدي وقت.' },
      { tr: 'أنا أعمل في مكتب.', de: 'Ich arbeite in einem Büro.', alt: ['Ich arbeite im Büro.'] }
    ]
  });

  A.addLesson({
    id: 'a1l09', level: 'A1', num: 9, icon: '⏱️', kind: 'grammar', de: 'Das Präsens', ar: 'الفعل في زمن المضارع',
    goal: 'تصرّف الأفعال المنتظمة والأفعال المهمة غير المنتظمة في المضارع.',
    topics: [],
    steps: [
      { h: 'مثل العربية تمامًا', p: 'في العربية يتغير الفعل مع الضمير: أكتبُ، تكتبُ، يكتبُ، نكتبُ.\nفي الألمانية أيضًا تتغير **نهاية الفعل** حسب الفاعل. هذا ما نسميه التصريف.' },
      {
        h: 'نهايات الأفعال المنتظمة', table: {
          head: ['الضمير', 'النهاية', '{lernen}', '{wohnen}'], rows: [
            ['{ich} أنا', 'e', '{ich lerne}', '{ich wohne}'], ['{du} أنتَ', 'st', '{du lernst}', '{du wohnst}'],
            ['{er / sie / es} هو، هي', 't', '{er lernt}', '{sie wohnt}'], ['{wir} نحن', 'en', '{wir lernen}', '{wir wohnen}'],
            ['{ihr} أنتم', 't', '{ihr lernt}', '{ihr wohnt}'], ['{sie / Sie} هم، حضرتك', 'en', '{sie lernen}', '{Sie wohnen}']
          ]
        }
      },
      { h: 'ملاحظات صغيرة', p: 'إذا انتهى الجذع بـ t أو d نضيف e للتسهيل: {du arbeitest}، {er arbeitet}.\nإذا انتهى الجذع بـ s أو ß أو z نضيف t فقط مع du: {du heißt}.\n{sie} الصغيرة قد تعني «هي» أو «هم»، ويميّز بينهما الفعل: {sie lernt} هي تتعلم، {sie lernen} هم يتعلمون.' },
      {
        h: 'sein و haben: احفظهما جيدًا', table: {
          head: ['الضمير', '{sein}', '{haben}'], rows: [
            ['{ich}', '{bin}', '{habe}'], ['{du}', '{bist}', '{hast}'], ['{er / sie / es}', '{ist}', '{hat}'],
            ['{wir}', '{sind}', '{haben}'], ['{ihr}', '{seid}', '{habt}'], ['{sie / Sie}', '{sind}', '{haben}']
          ]
        }
      },
      { h: 'تغيّر حرف العلة', p: 'بعض الأفعال الشائعة يتغير حرف العلة فيها مع du و er/sie/es فقط:\n**e ← i**: {sprechen} ← {du sprichst}، {nehmen} ← {er nimmt}، {helfen} ← {sie hilft}\n**e ← ie**: {lesen} ← {er liest}، {sehen} ← {du siehst}\n**a ← ä**: {fahren} ← {er fährt}، {schlafen} ← {du schläfst}' },
      { h: 'المضارع للمستقبل أيضًا', p: 'في الكلام اليومي نستخدم المضارع مع كلمة زمن للحديث عن المستقبل:\n{Morgen fahre ich nach Hamburg.} غدًا سأسافر إلى هامبورغ.' },
      { link: '#/practice/conj', label: 'تدرّب على التصريف' }
    ],
    phrases: `
Ich wohne in Köln.|أسكن في كولونيا.
Du wohnst in Berlin.|أنت تسكن في برلين.
Er arbeitet im Büro.|هو يعمل في المكتب.
Wir lernen zusammen.|نتعلم معًا.
Ihr seid sehr nett.|أنتم لطفاء جدًا.
Sie haben zwei Kinder.|لديهم طفلان.
Du heißt Mira, oder?|اسمك ميرا، أليس كذلك؟
Er nimmt den Bus.|هو يأخذ الحافلة.
Morgen fahre ich nach Hamburg.|غدًا سأسافر إلى هامبورغ.`,
    dialog: `
Leila|Wo arbeitest du?|أين تعمل؟
Ben|Ich arbeite in einem Hotel. Und du?|أعمل في فندق. وأنت؟
Leila|Ich lerne noch Deutsch. Mein Mann arbeitet.|ما زلت أتعلم الألمانية. زوجي يعمل.
Ben|Was macht er?|ماذا يعمل؟
Leila|Er fährt Taxi.|يقود سيارة أجرة.`,
    ex: [
      { fill: 'Ich [komme] aus Marokko.', o: ['komme', 'kommst', 'kommt'], ar: 'أنا من المغرب.' },
      { fill: 'Du [lernst] schnell.', o: ['lernst', 'lernt', 'lerne'], ar: 'أنت تتعلم بسرعة.' },
      { fill: 'Wir [wohnen] in Berlin.', o: ['wohnen', 'wohnt', 'wohne'], ar: 'نسكن في برلين.' },
      { fill: 'Er [arbeitet] im Büro.', o: ['arbeitet', 'arbeit', 'arbeiten'], ar: 'هو يعمل في المكتب.', w: 'الجذع arbeit ينتهي بـ t، لذلك نضيف e: {er arbeitet}.' },
      { fill: 'Ihr [seid] müde.', o: ['seid', 'sind', 'seit'], ar: 'أنتم متعبون.' },
      { fill: 'Sie [hat] ein Auto.', o: ['hat', 'habt', 'hast'], ar: 'لديها سيارة.' },
      { fill: 'Er [nimmt] den Bus.', o: ['nimmt', 'nehmt', 'nehmen'], ar: 'هو يأخذ الحافلة.', w: '{nehmen} يتغير مع er: {er nimmt}.' },
      { fill: 'Du [fährst] zu schnell.', o: ['fährst', 'fahrst', 'fahrt'], ar: 'أنت تقود بسرعة كبيرة.' },
      { fill: 'Die Kinder [spielen] im Park.', o: ['spielen', 'spielt', 'spiele'], ar: 'الأطفال يلعبون في الحديقة.', w: '{die Kinder} جمع مثل {sie}، لذلك {spielen}.' },
      { tr: 'نحن نتعلم الألمانية.', de: 'Wir lernen Deutsch.' }
    ]
  });

  A.addLesson({
    id: 'a1l10', level: 'A1', num: 10, icon: '❓', kind: 'grammar', de: 'W-Fragen', ar: 'الأسئلة',
    goal: 'تطرح أسئلة بأدوات الاستفهام وأسئلة نعم أو لا، وتفهم الإجابات.',
    topics: ['questions'],
    steps: [
      {
        h: 'أدوات الاستفهام', table: {
          head: ['الأداة', 'المعنى', 'مثال'], rows: [
            ['{Wer?}', 'من؟', '{Wer ist das?}'], ['{Was?}', 'ماذا؟ ما؟', '{Was machst du?}'],
            ['{Wo?}', 'أين؟', '{Wo wohnst du?}'], ['{Woher?}', 'من أين؟', '{Woher kommst du?}'],
            ['{Wohin?}', 'إلى أين؟', '{Wohin fährst du?}'], ['{Wann?}', 'متى؟', '{Wann beginnt der Kurs?}'],
            ['{Wie?}', 'كيف؟', '{Wie heißt du?}'], ['{Wie viel?}', 'كم؟ للسعر والكمية', '{Wie viel kostet das?}'],
            ['{Wie viele?}', 'كم؟ للعدد', '{Wie viele Kinder hast du?}'], ['{Warum?}', 'لماذا؟', '{Warum lernst du Deutsch?}'],
            ['{Wie lange?}', 'كم من الوقت؟', '{Wie lange dauert der Film?}']
          ]
        }
      },
      { h: 'ترتيب السؤال', p: 'أداة السؤال أولًا، ثم الفعل مباشرة، ثم الفاعل:\n{Wo wohnst du?}\n{Wann kommt der Bus?}\n\nالخطأ الشائع: «Wo du wohnst?» ✗' },
      { h: 'wo و woher و wohin', p: 'ثلاث كلمات متشابهة ومهمة جدًا:\n{Wo?} أين؟ للمكان الثابت: {Wo bist du?} {Ich bin zu Hause.}\n{Woher?} من أين؟ للأصل: {Woher kommst du?} {Aus Syrien.}\n{Wohin?} إلى أين؟ للاتجاه: {Wohin gehst du?} {Nach Hause.}' },
      { h: 'أسئلة نعم أو لا', p: 'الفعل في البداية: {Sprichst du Deutsch?}\nالجواب: {Ja, ein bisschen.} أو {Nein, leider nicht.}\n\nمثل «هل» في العربية، لكن بدون كلمة إضافية، فقط نغيّر مكان الفعل.' }
    ],
    phrases: `
Wer ist das?|من هذا؟
Was machst du?|ماذا تفعل؟
Wo wohnst du?|أين تسكن؟
Woher kommen Sie?|من أين أنت؟
Wohin fährst du?|إلى أين تذهب؟
Wann beginnt der Kurs?|متى تبدأ الدورة؟
Wie viel kostet das?|كم سعر هذا؟
Warum lernst du Deutsch?|لماذا تتعلم الألمانية؟
Wie lange dauert der Film?|كم يستغرق الفيلم؟
Sprichst du Deutsch?|هل تتكلم الألمانية؟`,
    dialog: `
Paul|Wohin fährst du?|إلى أين تذهب؟
Hana|Nach Leipzig.|إلى لايبزيغ.
Paul|Warum?|لماذا؟
Hana|Meine Schwester wohnt dort.|أختي تسكن هناك.
Paul|Wie lange bleibst du?|كم ستبقى؟
Hana|Drei Tage.|ثلاثة أيام.`,
    ex: [
      { mc: 'الجواب: {Ich komme aus Ägypten.} ما السؤال؟', o: ['Woher kommst du?', 'Wohin fährst du?', 'Wo wohnst du?'] },
      { mc: 'الجواب: {Ich gehe nach Hause.} ما أداة السؤال؟', o: ['Wohin', 'Woher', 'Wo'] },
      { mc: 'الجواب: {Um 8 Uhr.} ما أداة السؤال؟', o: ['Wann', 'Wie', 'Wer'] },
      { mc: 'الجواب: {Das kostet 5 Euro.} ما أداة السؤال؟', o: ['Wie viel', 'Wie viele', 'Warum'] },
      { mc: 'الجواب: {Zwei Stunden.} ما أداة السؤال؟', o: ['Wie lange', 'Wann', 'Wie viel'] },
      { mc: 'الجواب: {Das ist mein Bruder.} ما أداة السؤال؟', o: ['Wer', 'Was', 'Wo'] },
      { fill: '[Wie] heißt du?', o: ['Wie', 'Was', 'Wer'], ar: 'ما اسمك؟', w: 'في الألمانية نسأل عن الاسم بـ {Wie} (كيف) وليس بـ {Was}.' },
      { order: 'Wo wohnst du?', ar: 'أين تسكن؟' },
      { order: 'Wann kommt der Bus?', ar: 'متى تأتي الحافلة؟' },
      { order: 'Sprichst du Arabisch?', ar: 'هل تتكلم العربية؟' },
      { tr: 'لماذا تتعلم الألمانية؟', de: 'Warum lernst du Deutsch?', alt: ['Warum lernen Sie Deutsch?'] }
    ]
  });

  A.addLesson({
    id: 'a1l11', level: 'A1', num: 11, icon: '🧺', kind: 'vocab', de: 'Farben, Kleidung, Wetter', ar: 'الألوان والملابس والطقس',
    goal: 'تصف الأشياء بألوانها، وتتحدث عن ملابسك وعن الطقس والفصول.',
    topics: ['colors', 'clothes', 'weather'],
    steps: [
      { h: 'الألوان', p: '{rot} أحمر، {blau} أزرق، {grün} أخضر، {gelb} أصفر، {schwarz} أسود، {weiß} أبيض، {grau} رمادي، {braun} بني.\n\nبعد الفعل {sein} لا يتغير اللون أبدًا: {Das Auto ist rot.} {Die Jacke ist rot.} {Die Schuhe sind rot.}\nالسؤال: {Welche Farbe hat dein Auto?}' },
      { h: 'الملابس', p: '{die Hose} بنطال، {das Hemd} قميص، {die Jacke} سترة، {der Pullover} كنزة، {das Kleid} فستان، {die Schuhe} حذاء.\n\nالفعل {tragen} يعني يرتدي، ويتغير مع du و er: {du trägst}، {er trägt}.\n{Ich trage heute eine blaue Jacke.} أرتدي اليوم سترة زرقاء.' },
      { h: 'الطقس', p: 'نستخدم الضمير **es** للطقس، مثل «الجو» في العربية:\n{Es ist kalt.} الجو بارد.\n{Es ist warm.} الجو دافئ.\n{Es regnet.} إنها تمطر.\n{Es schneit.} إنها تثلج.\n{Die Sonne scheint.} الشمس مشرقة.\nالسؤال: {Wie ist das Wetter heute?}' },
      { h: 'الفصول', p: '{der Frühling} الربيع، {der Sommer} الصيف، {der Herbst} الخريف، {der Winter} الشتاء.\nنقول {im} قبل الفصل: {Im Winter ist es kalt.} {Im Sommer ist es heiß.}' }
    ],
    phrases: `
Das Auto ist rot.|السيارة حمراء.
Welche Farbe hat dein Auto?|ما لون سيارتك؟
Ich trage eine Jacke.|أرتدي سترة.
Die Schuhe sind neu.|الحذاء جديد.
Wie ist das Wetter heute?|كيف الطقس اليوم؟
Es ist kalt.|الجو بارد.
Es regnet.|إنها تمطر.
Im Sommer ist es heiß.|الجو حار في الصيف.
Die Sonne scheint.|الشمس مشرقة.`,
    dialog: `
Mama|Es ist kalt heute. Nimm eine Jacke!|الجو بارد اليوم. خذ سترة!
Adam|Welche Jacke? Die blaue?|أي سترة؟ الزرقاء؟
Mama|Nein, die schwarze. Sie ist warm.|لا، السوداء. إنها دافئة.
Adam|Regnet es auch?|هل تمطر أيضًا؟
Mama|Ja, ein bisschen.|نعم، قليلًا.`,
    ex: [
      { mc: 'ما لون الموز؟', o: ['gelb', 'blau', 'grün'] },
      { fill: 'Die Jacke [ist] schwarz.', o: ['ist', 'sind', 'hat'], ar: 'السترة سوداء.' },
      { fill: 'Die Schuhe [sind] neu.', o: ['sind', 'ist', 'hat'], ar: 'الحذاء جديد.', w: '{die Schuhe} جمع، لذلك {sind}.' },
      { fill: '[Es] regnet.', o: ['Es', 'Er', 'Das'], ar: 'إنها تمطر.', w: 'للطقس نستخدم دائمًا {es}.' },
      { fill: 'Im Winter ist es [kalt].', o: ['kalt', 'heiß', 'warm'], ar: 'الجو بارد في الشتاء.' },
      { mc: 'ما معنى {Es schneit}؟', o: ['إنها تثلج', 'إنها تمطر', 'الجو مشمس'] },
      { fill: 'Er [trägt] einen Mantel.', o: ['trägt', 'tragt', 'tragen'], ar: 'هو يرتدي معطفًا.' },
      { tr: 'كيف الطقس اليوم؟', de: 'Wie ist das Wetter heute?' }
    ]
  });

  A.addLesson({
    id: 'a1l12', level: 'A1', num: 12, icon: '🕐', kind: 'vocab', de: 'Uhrzeit und Datum', ar: 'الوقت والأيام والتواريخ',
    goal: 'تسأل عن الوقت وتقوله، وتستخدم am و um و im مع الأيام والساعات والشهور.',
    topics: ['time', 'days', 'months'],
    steps: [
      { h: 'كم الساعة؟', p: 'السؤال: {Wie spät ist es?} أو {Wie viel Uhr ist es?}\nالجواب: {Es ist acht Uhr.}\n\nالطريقة الرسمية (في المحطات والمواعيد) بنظام 24 ساعة:\n14:30 = {vierzehn Uhr dreißig}' },
      { h: 'الطريقة اليومية', p: '8:15 = {Viertel nach acht} (ربع بعد الثامنة)\n8:45 = {Viertel vor neun} (ربع قبل التاسعة)\n8:30 = {halb neun} ⚠️\n\n**انتبه**: {halb neun} تعني نصف ساعة **قبل** التاسعة، أي 8:30 وليس 9:30. هذا أشهر خطأ عند المتعلمين العرب.' },
      {
        h: 'am و um و im', table: {
          head: ['الكلمة', 'الاستخدام', 'مثال'], rows: [
            ['{um}', 'الساعة', '{um 8 Uhr}'], ['{am}', 'الأيام وأجزاء اليوم والتواريخ', '{am Montag}، {am Abend}، {am 5. Mai}'],
            ['{im}', 'الشهور والفصول', '{im Mai}، {im Winter}'], ['استثناء', 'الليل', '{in der Nacht}']
          ]
        }
      },
      { h: 'اليوم وغدًا وأمس', p: '{gestern} أمس، {heute} اليوم، {morgen} غدًا.\n{Heute ist Montag.} {Morgen ist Dienstag.} {Gestern war Sonntag.}\n\nملاحظة: {morgen} تعني غدًا، و {der Morgen} تعني الصباح.' },
      { h: 'التاريخ وعيد الميلاد', p: '{Welches Datum ist heute?} {Heute ist der 5. Mai.}\n{Wann hast du Geburtstag?} {Am 12. März.} أو {Im März.}\nفي ألمانيا يُكتب التاريخ: اليوم ثم الشهر ثم السنة: 12.03.2026' }
    ],
    phrases: `
Wie spät ist es?|كم الساعة؟
Es ist acht Uhr.|الساعة الثامنة.
Es ist halb drei.|الساعة الثانية والنصف.
Der Kurs beginnt um 9 Uhr.|تبدأ الدورة في الساعة التاسعة.
Am Montag arbeite ich.|أعمل يوم الاثنين.
Im Juli habe ich Urlaub.|عندي إجازة في يوليو.
Heute ist Freitag.|اليوم هو الجمعة.
Wann hast du Geburtstag?|متى عيد ميلادك؟
Ich habe am 12. März Geburtstag.|عيد ميلادي في 12 مارس.
Am Wochenende habe ich frei.|في عطلة نهاية الأسبوع عندي عطلة.`,
    dialog: `
Tim|Entschuldigung, wie spät ist es?|المعذرة، كم الساعة؟
Nadia|Es ist Viertel nach zehn.|الساعة العاشرة والربع.
Tim|Danke! Wann fährt der Bus?|شكرًا! متى تأتي الحافلة؟
Nadia|Um halb elf.|في العاشرة والنصف.
Tim|Super, dann habe ich noch Zeit.|رائع، إذن لدي وقت.`,
    ex: [
      { fill: '[Am] Montag arbeite ich.', o: ['Am', 'Um', 'Im'], ar: 'أعمل يوم الاثنين.', w: 'مع أيام الأسبوع نستخدم {am}.' },
      { fill: 'Der Kurs beginnt [um] 9 Uhr.', o: ['um', 'am', 'im'], ar: 'تبدأ الدورة في التاسعة.', w: 'مع الساعة نستخدم {um}.' },
      { fill: '[Im] Juli habe ich Urlaub.', o: ['Im', 'Am', 'Um'], ar: 'عندي إجازة في يوليو.', w: 'مع الشهور نستخدم {im}.' },
      { mc: 'ماذا تعني {halb drei}؟', o: ['2:30', '3:30', '3:00'], w: '{halb drei} = نصف ساعة قبل الثالثة.' },
      { mc: 'ماذا تعني {Viertel nach vier}؟', o: ['4:15', '3:45', '4:45'] },
      { mc: 'ماذا تعني {Viertel vor sieben}؟', o: ['6:45', '7:15', '7:45'] },
      { mc: 'ما معنى {gestern}؟', o: ['أمس', 'غدًا', 'اليوم'] },
      { mc: 'أي يوم يأتي بعد {Montag}؟', o: ['Dienstag', 'Mittwoch', 'Sonntag'] },
      { tr: 'كم الساعة؟', de: 'Wie spät ist es?', alt: ['Wie viel Uhr ist es?'] }
    ]
  });
})(window.App);
