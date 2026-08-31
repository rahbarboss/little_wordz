const fs = require('fs');
const path = require('path');

// 1. Read base before PMs
const raw = fs.readFileSync(path.join(__dirname, '../data/db.json'), 'utf-8');
const pm1Idx = raw.indexOf('"id": "pm-1"');
if (pm1Idx === -1) {
  console.error('Cannot find pm-1 in db.json');
  process.exit(1);
}
const beforePm1 = raw.substring(0, raw.lastIndexOf('{', pm1Idx));
const baseDb = JSON.parse(beforePm1.replace(/,\s*$/, '') + ']}');

// 2. Define PMs
const pms = [
  {
    id: "pm-1",
    category: "pms",
    titleEn: "Jawaharlal Nehru",
    titleHi: "पंडित जवाहरलाल नेहरू",
    titleUr: "پنڈت جواہر لعل نہرو",
    capitalEn: "1947–1964",
    capitalHi: "कार्यकाल: 1947–1964",
    capitalUr: "مدت: 1947–1964",
    detailEn: "First and longest-serving Prime Minister of India (16 years, 286 days). Architect of modern India, non-aligned movement leader, and visionary for science, IITs, and AIIMS.",
    detailHi: "स्वतंत्र भारत के प्रथम एवं सर्वाधिक समय (16 वर्ष 286 दिन) तक सेवा देने वाले प्रधानमंत्री। आधुनिक भारत के निर्माता और 'चाचा नेहरू' के नाम से लोकप्रिय।",
    detailUr: "آزاد بھارت کے پہلے اور طویل ترین مدت (16 سال 286 دن) تک خدمت انجام دینے والے وزیر اعظم۔ جدید بھارت کے معمار اور چاچا نہرو کے نام سے مشہور۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1947–1964",
    order: 1
  },
  {
    id: "pm-2",
    category: "pms",
    titleEn: "Gulzarilal Nanda",
    titleHi: "गुलजारीलाल नंदा (कार्यवाहक)",
    titleUr: "گلزاری لال نندا (قائم مقام)",
    capitalEn: "1964, 1966",
    capitalHi: "कार्यकाल: 1964, 1966",
    capitalUr: "مدت: 1964, 1966",
    detailEn: "Served twice as interim Prime Minister of India: first after Jawaharlal Nehru in 1964, and second after Lal Bahadur Shastri in 1966. Revered Gandhian economist and Bharat Ratna awardee.",
    detailHi: "भारत के दो बार कार्यवाहक प्रधानमंत्री रहे: पहली बार 1964 में नेहरू जी के निधन के बाद और दूसरी बार 1966 में शास्त्री जी के निधन के बाद। प्रख्यात गांधीवादी अर्थशास्त्री।",
    detailUr: "بھارت کے دو مرتبہ قائم مقام وزیر اعظم رہے (1964 اور 1966)۔ عظیم گاندھیائی ماہر معاشیات اور بھارت رتن یافتہ رہنما۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1964, 1966",
    order: 2
  },
  {
    id: "pm-3",
    category: "pms",
    titleEn: "Lal Bahadur Shastri",
    titleHi: "लाल बहादुर शास्त्री",
    titleUr: "لال بہادر شاستری",
    capitalEn: "1964–1966",
    capitalHi: "कार्यकाल: 1964–1966",
    capitalUr: "مدت: 1964–1966",
    detailEn: "Second Prime Minister of India who gave the immortal slogan 'Jai Jawan, Jai Kisan'. Led the nation victoriously through the 1965 India-Pakistan war and initiated the White Revolution.",
    detailHi: "भारत के दूसरे प्रधानमंत्री जिन्होंने 'जय जवान, जय किसान' का अमर नारा दिया। 1965 के भारत-पाक युद्ध में देश का सफल नेतृत्व किया और श्वेत क्रांति की नींव रखी।",
    detailUr: "دوسرے وزیر اعظم جنہوں نے 'جے جوان، جے کسان' کا تاریخی نعرہ دیا۔ 1965 کی جنگ میں قوم کی شاندار رہنمائی کی اور سفید انقلاب کی بنیاد رکھی۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1964–1966",
    order: 3
  },
  {
    id: "pm-4",
    category: "pms",
    titleEn: "Indira Gandhi",
    titleHi: "इंदिरा गांधी",
    titleUr: "اندرا گاندھی",
    capitalEn: "1966–1977, 1980–1984",
    capitalHi: "कार्यकाल: 1966–1977, 1980–1984",
    capitalUr: "مدت: 1966–1977، 1980–1984",
    detailEn: "First and only woman Prime Minister of India, known as the 'Iron Lady'. Led India during the 1971 war leading to the liberation of Bangladesh, and initiated India's nuclear program.",
    detailHi: "भारत की प्रथम व एकमात्र महिला प्रधानमंत्री, जिन्हें 'लौह महिला' कहा जाता है। 1971 के युद्ध में निर्णायक विजय दिलाकर बांग्लादेश का निर्माण कराया और बैंकों का राष्ट्रीयकरण किया।",
    detailUr: "بھارت کی پہلی اور واحد خاتون وزیر اعظم جنہیں 'آئرن لیڈی' کہا جاتا ہے۔ 1971 کی تاریخی فتح سے بنگلہ دیش آزاد کروایا اور بھارت کو ایٹمی طاقت بنایا۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1966–1977, 1980–1984",
    order: 4
  },
  {
    id: "pm-5",
    category: "pms",
    titleEn: "Morarji Desai",
    titleHi: "मोरारजी देसाई",
    titleUr: "مورار جی دیسائی",
    capitalEn: "1977–1979",
    capitalHi: "कार्यकाल: 1977–1979",
    capitalUr: "مدت: 1977–1979",
    detailEn: "First non-Congress Prime Minister of India, heading the Janata Party government. Honoured with both Bharat Ratna and Pakistan's highest civilian honour Nishan-e-Pakistan.",
    detailHi: "भारत के प्रथम गैर-कांग्रेसी प्रधानमंत्री, जिन्होंने जनता पार्टी सरकार का नेतृत्व किया। भारत रत्न और पाकिस्तान के सर्वोच्च नागरिक सम्मान 'निशान-ए-पाकिस्तान' दोनों से सम्मानित।",
    detailUr: "بھارت کے پہلے غیر کانگریسی وزیر اعظم جنہوں نے جنتا پارٹی حکومت کی قیادت کی۔ بھارت رتن اور نشان پاکستان دونوں اعلیٰ ترین اعزازات حاصل کیے۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1977–1979",
    order: 5
  },
  {
    id: "pm-6",
    category: "pms",
    titleEn: "Charan Singh (Chaudhary Charan Singh)",
    titleHi: "चौधरी चरण सिंह",
    titleUr: "چودھری چرن سنگھ",
    capitalEn: "1979–1980",
    capitalHi: "कार्यकाल: 1979–1980",
    capitalUr: "مدت: 1979–1980",
    detailEn: "Champion of Indian farmers and peasants. 5th Prime Minister of India whose birth anniversary (23 December) is celebrated nationwide as National Farmers Day (Kisan Diwas).",
    detailHi: "भारतीय किसानों और ग्रामीणों के मसीहा। भारत के 5वें प्रधानमंत्री, जिनकी जयंती (23 दिसंबर) पूरे देश में 'राष्ट्रीय किसान दिवस' के रूप में मनाई जाती है।",
    detailUr: "ہندوستانی کسانوں اور محنت کشوں کے عظیم رہنما۔ 5ویں وزیر اعظم جن کے یوم پیدائش (23 دسمبر) پر قومی یوم کسان منایا جاتا ہے۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1979–1980",
    order: 6
  },
  {
    id: "pm-7",
    category: "pms",
    titleEn: "Rajiv Gandhi",
    titleHi: "राजीव गांधी",
    titleUr: "راجیو گاندھی",
    capitalEn: "1984–1989",
    capitalHi: "कार्यकाल: 1984–1989",
    capitalUr: "مدت: 1984–1989",
    detailEn: "Youngest Prime Minister of India (assumed office at age 40). Visionary pioneer of India's IT and telecommunications revolution, Panchayati Raj reforms, and voting age reduction to 18.",
    detailHi: "भारत के सबसे युवा प्रधानमंत्री (40 वर्ष की आयु में)। भारत में कंप्यूटर, आईटी और दूरसंचार क्रांति के जनक; पंचायती राज को मजबूत किया और मतदान आयु घटाकर 18 वर्ष की।",
    detailUr: "بھارت کے سب سے کم عمر وزیر اعظم (40 سال کی عمر میں)۔ کمپیوٹر اور ٹیلی کام انقلاب کے بانی اور پنچایتی راج کو آئینی درجہ دینے والے رہنما۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1984–1989",
    order: 7
  },
  {
    id: "pm-8",
    category: "pms",
    titleEn: "V. P. Singh (Vishwanath Pratap Singh)",
    titleHi: "विश्वनाथ प्रताप सिंह",
    titleUr: "وی پی سنگھ (وشواناتھ پرتاپ سنگھ)",
    capitalEn: "1989–1990",
    capitalHi: "कार्यकाल: 1989–1990",
    capitalUr: "مدت: 1989–1990",
    detailEn: "7th Prime Minister of India, heading the National Front government. Champion of social justice who implemented the historic Mandal Commission recommendations for backward classes.",
    detailHi: "भारत के 7वें प्रधानमंत्री, जिन्होंने नेशनल फ्रंट सरकार का नेतृत्व किया। सामाजिक न्याय के पुरोधा जिन्होंने अन्य पिछड़े वर्गों (OBC) के लिए मंडल आयोग की सिफारिशें लागू कीं।",
    detailUr: "بھارت کے 7ویں وزیر اعظم، جنہوں نے پسماندہ طبقات کے حقوق اور سماجی انصاف کے لیے منڈل کمیشن کی سفارشات نافذ کیں۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1989–1990",
    order: 8
  },
  {
    id: "pm-9",
    category: "pms",
    titleEn: "Chandra Shekhar",
    titleHi: "चन्द्र शेखर",
    titleUr: "چندر شیکھر",
    capitalEn: "1990–1991",
    capitalHi: "कार्यकाल: 1990–1991",
    capitalUr: "مدت: 1990–1991",
    detailEn: "Prominent socialist leader popularly called 'Young Turk', who served as the 8th Prime Minister heading the Samajwadi Janata Party.",
    detailHi: "\"युवा तुर्क\" के नाम से मशहूर प्रख्यात समाजवादी नेता, जिन्होंने समाजवादी जनता पार्टी के प्रमुख के रूप में 8वें प्रधानमंत्री का पद संभाला।",
    detailUr: "\"ینگ ترک\" کے نام سے مشہور عظیم سوشلسٹ رہنما، جنہوں نے سماجوادی جنتا پارٹی کی قیادت کرتے ہوئے 8ویں وزیر اعظم کے فرائض انجام دیے۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1990–1991",
    order: 9
  },
  {
    id: "pm-10",
    category: "pms",
    titleEn: "P. V. Narasimha Rao",
    titleHi: "पी. वी. नरसिम्हा राव",
    titleUr: "پی وی نرسمہا راؤ",
    capitalEn: "1991–1996",
    capitalHi: "कार्यकाल: 1991–1996",
    capitalUr: "مدت: 1991–1996",
    detailEn: "Revered as the 'Father of Indian Economic Reforms' for initiating LPG (Liberalisation, Privatisation, Globalisation), brilliant scholar and polyglot.",
    detailHi: "भारतीय आर्थिक उदारीकरण (LPG सुधारों) के जनक, महान विद्वान और 17 से अधिक भाषाओं के ज्ञाता।",
    detailUr: "ہندوستانی معاشی اصلاحات (ایل پی جی) کے معمار، ممتاز دانشور اور 17 زبانوں کے ماہر رہنما۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1991–1996",
    order: 10
  },
  {
    id: "pm-11",
    category: "pms",
    titleEn: "Atal Bihari Vajpayee",
    titleHi: "अटल बिहारी वाजपेयी",
    titleUr: "اٹل بہاری واجپئی",
    capitalEn: "1996, 1998–2004",
    capitalHi: "कार्यकाल: 1996, 1998–2004",
    capitalUr: "مدت: 1996، 1998–2004",
    detailEn: "Eminent poet, orator, and first non-Congress PM to complete a full 5-year term. Conducted 1998 Pokhran-II nuclear tests, launched Golden Quadrilateral highway network and Sarva Shiksha Abhiyan.",
    detailHi: "महान कवि, प्रखर वक्ता और पूर्ण 5 वर्ष का कार्यकाल पूरा करने वाले पहले गैर-कांग्रेसी प्रधानमंत्री। 1998 पोखरण परमाणु परीक्षण, स्वर्णिम चतुर्भुज राजमार्ग और सर्व शिक्षा अभियान के प्रणेता।",
    detailUr: "عظیم شاعر، شعلہ بیان خطیب اور پہلے غیر کانگریسی پی ایم جنہوں نے 5 سال مکمل کیے۔ 1998 پوکھران ایٹمی دھماکے اور سنہری شاہراہوں کا جال بچھایا۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1996, 1998–2004",
    order: 11
  },
  {
    id: "pm-12",
    category: "pms",
    titleEn: "H. D. Deve Gowda",
    titleHi: "एच. डी. देवेगौड़ा",
    titleUr: "ایچ ڈی دیوے گوڑا",
    capitalEn: "1996–1997",
    capitalHi: "कार्यकाल: 1996–1997",
    capitalUr: "مدت: 1996–1997",
    detailEn: "11th Prime Minister of India, heading the United Front coalition government; prominent farmer leader known as 'Mannina Maga' (Son of the Soil).",
    detailHi: "भारत के 11वें प्रधानमंत्री, जिन्होंने यूनाइटेड फ्रंट गठबंधन सरकार का नेतृत्व किया; कर्नाटक के 'मिट्टी के बेटे' कहे जाने वाले किसान नेता।",
    detailUr: "بھارت کے 11ویں وزیر اعظم جنہوں نے یونائیٹڈ فرنٹ حکومت کی قیادت کی؛ کسانوں کے حقوق کے سرکردہ رہنما۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1996–1997",
    order: 12
  },
  {
    id: "pm-13",
    category: "pms",
    titleEn: "I. K. Gujral (Inder Kumar Gujral)",
    titleHi: "इंद्र कुमार गुजराल",
    titleUr: "اندر کمار گجرال",
    capitalEn: "1997–1998",
    capitalHi: "कार्यकाल: 1997–1998",
    capitalUr: "مدت: 1997–1998",
    detailEn: "12th Prime Minister of India, author of the famous 'Gujral Doctrine' for peaceful neighborhood foreign policy, former diplomat and freedom fighter.",
    detailHi: "भारत के 12वें प्रधानमंत्री, जिन्होंने पड़ोसियों के साथ शांति और मित्रता के लिए प्रसिद्ध 'गुजराल सिद्धांत' प्रतिपादित किया।",
    detailUr: "بھارت کے 12ویں وزیر اعظم اور ہمسایہ ممالک سے دوستانہ تعلقات کے لیے تاریخی 'گجرال ڈاکٹرائن' کے خالق۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "1997–1998",
    order: 13
  },
  {
    id: "pm-14",
    category: "pms",
    titleEn: "Dr. Manmohan Singh",
    titleHi: "डॉ. मनमोहन सिंह",
    titleUr: "ڈاکٹر منموہن سنگھ",
    capitalEn: "2004–2014",
    capitalHi: "कार्यकाल: 2004–2014",
    capitalUr: "مدت: 2004–2014",
    detailEn: "World-renowned economist who served 10 years as 13th PM. Enacted historic MGNREGA rural employment guarantee, Right to Information (RTI) Act, Right to Education (RTE) Act, and the Indo-US Civil Nuclear Agreement.",
    detailHi: "विश्वविख्यात अर्थशास्त्री जिन्होंने 10 वर्ष तक प्रधानमंत्री पद संभाला। मनरेगा (MGNREGA), सूचना का अधिकार (RTI), शिक्षा का अधिकार (RTE) और भारत-अमेरिका असैन्य परमाणु समझौते के ऐतिहासिक कानून बनाए।",
    detailUr: "عالمی شہرت یافتہ ماہر معاشیات جنہوں نے 10 سال ملک کی قیادت کی۔ منریگا روزگار اسکیم، حق معلومات (RTI)، حق تعلیم (RTE) اور تاریخی امریکہ-بھارت ایٹمی معاہدہ نافذ کیا۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "2004–2014",
    order: 14
  },
  {
    id: "pm-15",
    category: "pms",
    titleEn: "Narendra Modi",
    titleHi: "नरेंद्र मोदी",
    titleUr: "نریندر مودی",
    capitalEn: "2014–Present",
    capitalHi: "कार्यकाल: 2014–वर्तमान",
    capitalUr: "مدت: 2014 تا حال",
    detailEn: "14th Prime Minister of India, longest-serving non-Congress PM. Championed Digital India, UPI revolution, Jan Dhan Yojana, Swachh Bharat Abhiyan, Make in India, and led India to become 5th largest world economy.",
    detailHi: "भारत के 14वें प्रधानमंत्री और सबसे लंबे समय तक सेवा देने वाले गैर-कांग्रेसी नेता। डिजिटल इंडिया, यूपीआई क्रांति, जन धन योजना, स्वच्छ भारत और भारत को दुनिया की 5वीं सबसे बड़ी अर्थव्यवस्था बनाने वाले नेता।",
    detailUr: "بھارت کے 14ویں وزیر اعظم اور طویل ترین خدمت انجام دینے والے غیر کانگریسی رہنما۔ ڈیجیٹل انڈیا، یو پی آئی، جن دھن، اور بھارت کو دنیا کی 5ویں بڑی معیشت بنانے والے قائد۔",
    imageUrl: "🇮🇳",
    audioUrl: "",
    tenure: "2014–Present",
    order: 15
  }
];

// 3. Define Presidents
const presidents = [
  {
    id: "pres-1",
    category: "presidents",
    titleEn: "Dr. Rajendra Prasad",
    titleHi: "डॉ. राजेन्द्र प्रसाद",
    titleUr: "ڈاکٹر راجندر پرساد",
    tenure: "1950 – 1962",
    detailEn: "First President of independent India and the only President to serve two full terms (12 years). President of the Constituent Assembly.",
    detailHi: "स्वतंत्र भारत के प्रथम राष्ट्रपति और दो पूर्ण कार्यकाल (12 वर्ष) सेवा देने वाले एकमात्र राष्ट्रपति। संविधान सभा के अध्यक्ष।",
    detailUr: "آزاد بھارت کے پہلے صدر اور واحد صدر جنہوں نے دو مکمل مدتیں (12 سال) خدمات انجام دیں۔ آئین ساز اسمبلی کے صدر۔",
    imageUrl: "🇮🇳",
    order: 1
  },
  {
    id: "pres-2",
    category: "presidents",
    titleEn: "Dr. Sarvepalli Radhakrishnan",
    titleHi: "डॉ. सर्वपल्ली राधाकृष्णन",
    titleUr: "ڈاکٹر سروپلی رادھا کرشنن",
    tenure: "1962 – 1967",
    detailEn: "Second President, eminent philosopher, scholar. His birthday on 5th September is celebrated nationwide as Teachers' Day (Shikshak Diwas).",
    detailHi: "द्वितीय राष्ट्रपति, महान दार्शनिक और शिक्षक। इनकी जयंती 5 सितंबर को पूरे देश में 'शिक्षक दिवस' के रूप में मनाई जाती है।",
    detailUr: "دوسرے صدر، ممتاز فلسفی اور استاد۔ ان کے یوم پیدائش 5 ستمبر کو ملک بھر میں یوم اساتذہ منایا جاتا ہے۔",
    imageUrl: "🇮🇳",
    order: 2
  },
  {
    id: "pres-3",
    category: "presidents",
    titleEn: "Dr. Zakir Husain",
    titleHi: "डॉ. ज़ाकिर हुसैन",
    titleUr: "ڈاکٹر ذاکر حسین",
    tenure: "1967 – 1969",
    detailEn: "Third President of India, distinguished educationist, pioneer of basic education (Nai Talim), and co-founder of Jamia Millia Islamia.",
    detailHi: "भारत के तीसरे राष्ट्रपति, प्रख्यात शिक्षाविद, जामिया मिल्लिया इस्लामिया के सह-संस्थापक और भारत के पहले मुस्लिम राष्ट्रपति।",
    detailUr: "بھارت کے تیسرے صدر، ممتاز ماہر تعلیم، جامعہ ملیہ اسلامیہ کے شریک بانی اور پہلے مسلم صدر۔",
    imageUrl: "🇮🇳",
    order: 3
  },
  {
    id: "pres-4",
    category: "presidents",
    titleEn: "V. V. Giri",
    titleHi: "वी. वी. गिरि",
    titleUr: "وی وی گری",
    tenure: "1969 – 1974",
    detailEn: "Fourth President of India, renowned trade union leader and the only person elected as an independent candidate.",
    detailHi: "भारत के चौथे राष्ट्रपति, प्रख्यात मजदूर नेता और स्वतंत्र उम्मीदवार के रूप में चुने जाने वाले एकमात्र राष्ट्रपति।",
    detailUr: "بھارت کے چوتھے صدر، مزدور تحریک کے عظیم رہنما اور بطور آزاد امیدوار منتخب ہونے والے واحد صدر۔",
    imageUrl: "🇮🇳",
    order: 4
  },
  {
    id: "pres-5",
    category: "presidents",
    titleEn: "Fakhruddin Ali Ahmed",
    titleHi: "फखरुद्दीन अली अहमद",
    titleUr: "فخر الدین علی احمد",
    tenure: "1974 – 1977",
    detailEn: "Fifth President of India, freedom fighter from Assam and veteran Union Cabinet minister.",
    detailHi: "भारत के पांचवें राष्ट्रपति, असम के प्रमुख स्वतंत्रता सेनानी और वरिष्ठ केंद्रीय कैबिनेट मंत्री।",
    detailUr: "بھارت کے پانچویں صدر، آسام کے نامور مجاہد آزادی اور مرکزی وزیر۔",
    imageUrl: "🇮🇳",
    order: 5
  },
  {
    id: "pres-6",
    category: "presidents",
    titleEn: "Neelam Sanjiva Reddy",
    titleHi: "नीलम संजीव रेड्डी",
    titleUr: "نیلم سنجیوا ریڈی",
    tenure: "1977 – 1982",
    detailEn: "Sixth President of India, first Chief Minister of Andhra Pradesh, Lok Sabha Speaker, and only President elected unopposed.",
    detailHi: "भारत के छठे राष्ट्रपति, आंध्र प्रदेश के प्रथम मुख्यमंत्री और निर्विरोध चुने जाने वाले एकमात्र राष्ट्रपति।",
    detailUr: "بھارت کے چھٹے صدر، آندھرا پردیش کے پہلے وزیر اعلیٰ اور بلا مقابلہ منتخب ہونے والے واحد صدر۔",
    imageUrl: "🇮🇳",
    order: 6
  },
  {
    id: "pres-7",
    category: "presidents",
    titleEn: "Giani Zail Singh",
    titleHi: "ज्ञानी जैल सिंह",
    titleUr: "گیانی ذیل سنگھ",
    tenure: "1982 – 1987",
    detailEn: "Seventh President of India, first Sikh President, former Chief Minister of Punjab and Union Home Minister.",
    detailHi: "भारत के सातवें राष्ट्रपति, भारत के पहले सिख राष्ट्रपति, पंजाब के पूर्व मुख्यमंत्री और केंद्रीय गृह मंत्री।",
    detailUr: "بھارت کے ساتویں صدر، پہلے سکھ صدر، پنجاب کے سابق وزیر اعلیٰ اور مرکزی وزیر داخلہ۔",
    imageUrl: "🇮🇳",
    order: 7
  },
  {
    id: "pres-8",
    category: "presidents",
    titleEn: "R. Venkataraman",
    titleHi: "आर. वेंकटरमण",
    titleUr: "آر وینکٹارمن",
    tenure: "1987 – 1992",
    detailEn: "Eighth President of India, eminent lawyer, freedom fighter, and former Union Finance & Defence Minister.",
    detailHi: "भारत के आठवें राष्ट्रपति, प्रख्यात विधिवेत्ता, स्वतंत्रता सेनानी और पूर्व केंद्रीय वित्त व रक्षा मंत्री।",
    detailUr: "بھارت کے آٹھویں صدر، ممتاز قانون دان، مجاہد آزادی اور سابق وزیر خزانہ و دفاع۔",
    imageUrl: "🇮🇳",
    order: 8
  },
  {
    id: "pres-9",
    category: "presidents",
    titleEn: "Dr. Shankar Dayal Sharma",
    titleHi: "डॉ. शंकर दयाल शर्मा",
    titleUr: "ڈاکٹر شنکر دیال شرما",
    tenure: "1992 – 1997",
    detailEn: "Ninth President of India, scholar of international law (Cambridge University), Chief Minister of Bhopal State.",
    detailHi: "भारत के नौवें राष्ट्रपति, कैम्ब्रिज विश्वविद्यालय से कानून में डॉक्टरेट और भोपाल राज्य के प्रथम मुख्यमंत्री।",
    detailUr: "بھارت کے نویں صدر، کیمبرج یونیورسٹی سے قانون کے اسکالر اور بھوپال کے سابق وزیر اعلیٰ۔",
    imageUrl: "🇮🇳",
    order: 9
  },
  {
    id: "pres-10",
    category: "presidents",
    titleEn: "K. R. Narayanan",
    titleHi: "के. आर. नारायणन",
    titleUr: "کے آر نارائنن",
    tenure: "1997 – 2002",
    detailEn: "Tenth President of India, first Dalit President, distinguished diplomat (London School of Economics), Vice-Chancellor of JNU.",
    detailHi: "भारत के 10वें राष्ट्रपति, भारत के पहले दलित राष्ट्रपति, प्रख्यात राजनयिक और लंदन स्कूल ऑफ इकोनॉमिक्स के विद्वान।",
    detailUr: "بھارت کے 10ویں صدر، پہلے دلت صدر، ممتاز سفارت کار اور ایل ایس ای کے نمایاں اسکالر۔",
    imageUrl: "🇮🇳",
    order: 10
  },
  {
    id: "pres-11",
    category: "presidents",
    titleEn: "Dr. A. P. J. Abdul Kalam",
    titleHi: "डॉ. ए. पी. जे. अब्दुल कलाम",
    titleUr: "ڈاکٹر اے پی جے عبدالکلام",
    tenure: "2002 – 2007",
    detailEn: "Eleventh President of India, globally renowned aerospace scientist known as the 'Missile Man of India' and beloved 'People's President'.",
    detailHi: "भारत के 11वें राष्ट्रपति, 'मिसाइल मैन' और 'जनता के राष्ट्रपति' के नाम से लोकप्रिय विश्वप्रसिद्ध वैज्ञानिक व भारत रत्न।",
    detailUr: "بھارت کے 11ویں صدر، 'میزائل مین' اور عوام کے محبوب صدر کے طور پر مشہور عظیم سائنسدان۔",
    imageUrl: "🇮🇳",
    order: 11
  },
  {
    id: "pres-12",
    category: "presidents",
    titleEn: "Pratibha Patil",
    titleHi: "प्रतिभा पाटिल",
    titleUr: "پرتھبھا پاٹل",
    tenure: "2007 – 2012",
    detailEn: "Twelfth President of India and the first woman President of the Republic of India; former Governor of Rajasthan.",
    detailHi: "भारत की 12वीं राष्ट्रपति और भारतीय गणराज्य की पहली महिला राष्ट्रपति; राजस्थान की पूर्व राज्यपाल।",
    detailUr: "بھارت کی 12ویں صدر اور جمہوریہ ہند کی پہلی خاتون صدر؛ راجستھان کی سابق گورنر۔",
    imageUrl: "🇮🇳",
    order: 12
  },
  {
    id: "pres-13",
    category: "presidents",
    titleEn: "Pranab Mukherjee",
    titleHi: "प्रणब मुखर्जी",
    titleUr: "پرنب مکھرجی",
    tenure: "2012 – 2017",
    detailEn: "Thirteenth President of India, veteran statesman with 5 decades of public service holding Finance, Defence, External Affairs ministries.",
    detailHi: "भारत के 13वें राष्ट्रपति, भारत रत्न से सम्मानित वरिष्ठ राजनेता जिन्होंने वित्त, रक्षा और विदेश मंत्रालयों का नेतृत्व किया।",
    detailUr: "بھارت کے 13ویں صدر، بھارت رتن یافتہ سینئر مدبر جنہوں نے وزارت خزانہ، دفاع اور خارجہ سنبھالی۔",
    imageUrl: "🇮🇳",
    order: 13
  },
  {
    id: "pres-14",
    category: "presidents",
    titleEn: "Ram Nath Kovind",
    titleHi: "राम नाथ कोविंद",
    titleUr: "رام ناتھ کووند",
    tenure: "2017 – 2022",
    detailEn: "Fourteenth President of India, eminent lawyer, Rajya Sabha MP, and former Governor of Bihar.",
    detailHi: "भारत के 14वें राष्ट्रपति, वरिष्ठ अधिवक्ता और बिहार के पूर्व राज्यपाल।",
    detailUr: "بھارت کے 14ویں صدر، سپریم کورٹ کے سینئر وکیل اور بہار کے سابق گورنر۔",
    imageUrl: "🇮🇳",
    order: 14
  },
  {
    id: "pres-15",
    category: "presidents",
    titleEn: "Droupadi Murmu",
    titleHi: "द्रौपदी मुर्मू",
    titleUr: "دروپدی مرمو",
    tenure: "2022 – Present",
    detailEn: "Fifteenth President of India, first tribal person and second woman to hold the office; former Governor of Jharkhand.",
    detailHi: "भारत की 15वीं राष्ट्रपति, पहली आदिवासी और दूसरी महिला राष्ट्रपति; झारखंड की पूर्व राज्यपाल।",
    detailUr: "بھارت کی 15ویں صدر، پہلی قبائلی اور دوسری خاتون صدر؛ جھارکھنڈ کی سابق گورنر۔",
    imageUrl: "🇮🇳",
    order: 15
  }
];

// 4. Import the minister sets and states/symbols from existing script files
const minScript = fs.readFileSync(path.join(__dirname, 'repair_and_sync_ministers.cjs'), 'utf-8');

function extractArray(scriptText, varName) {
  const startIdx = scriptText.indexOf('const ' + varName + ' = [');
  if (startIdx === -1) throw new Error('Cannot find ' + varName);
  const arrStart = scriptText.indexOf('[', startIdx);
  const endIdx = scriptText.indexOf('];', arrStart);
  const arrCode = scriptText.substring(arrStart, endIdx + 1);
  return eval(arrCode);
}

const homeMinisters = extractArray(minScript, 'homeMinisters');
const educationMinisters = extractArray(minScript, 'educationMinisters');
const financeMinisters = extractArray(minScript, 'financeMinisters');
const defenceMinisters = extractArray(minScript, 'defenceMinisters');
const externalAffairsMinisters = extractArray(minScript, 'externalAffairsMinisters');

const statesScript = fs.readFileSync(path.join(__dirname, 'add_all_states_and_symbols.cjs'), 'utf-8');
const allStatesAndUTs = extractArray(statesScript, 'allStatesAndUTs');
const nationalSymbols = extractArray(statesScript, 'nationalSymbols');

// 5. Assemble all GK items cleanly
const allGkItems = [
  ...allStatesAndUTs,
  ...pms,
  ...presidents,
  ...homeMinisters,
  ...educationMinisters,
  ...financeMinisters,
  ...defenceMinisters,
  ...externalAffairsMinisters,
  ...nationalSymbols
];

baseDb.gkItems = allGkItems;

console.log('Total clean GK items assembled:', baseDb.gkItems.length);

// 6. Write data/db.json
const dbJsonPath = path.join(__dirname, '../data/db.json');
const finalJson = JSON.stringify(baseDb, null, 2);
fs.writeFileSync(dbJsonPath, finalJson, 'utf-8');
console.log('Successfully wrote clean data/db.json! Size:', fs.statSync(dbJsonPath).size);

// 7. Write server/initialData.ts
const tsPath = path.join(__dirname, '../server/initialData.ts');
const tsContent = `import type { AppDatabase } from '../src/types.ts';\n\nexport const initialDatabase: AppDatabase = ${finalJson};\n`;
fs.writeFileSync(tsPath, tsContent, 'utf-8');
console.log('Successfully wrote clean server/initialData.ts! Size:', fs.statSync(tsPath).size);
