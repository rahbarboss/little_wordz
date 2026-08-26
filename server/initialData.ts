import { AppDatabase } from '../src/types.js';

export const initialDatabase: AppDatabase = {
  alphabets: [
    // English A-Z
    { id: 'en-a', language: 'en', letter: 'A', phonics: '/eɪ/', exampleWord: 'Apple', exampleWordTranslation: 'Seb (سیب / सेब)', meaning: 'A sweet red or green fruit', imageUrl: '🍎', audioText: 'A for Apple', order: 1 },
    { id: 'en-b', language: 'en', letter: 'B', phonics: '/biː/', exampleWord: 'Ball', exampleWordTranslation: 'Gend (گیند / गेंद)', meaning: 'A round object used in games', imageUrl: '⚽', audioText: 'B for Ball', order: 2 },
    { id: 'en-c', language: 'en', letter: 'C', phonics: '/siː/', exampleWord: 'Cat', exampleWordTranslation: 'Billi (بلی / बिल्ली)', meaning: 'A friendly furry pet', imageUrl: '🐱', audioText: 'C for Cat', order: 3 },
    { id: 'en-d', language: 'en', letter: 'D', phonics: '/diː/', exampleWord: 'Dog', exampleWordTranslation: 'Kutta (کتا / कुत्ता)', meaning: 'A loyal animal friend', imageUrl: '🐶', audioText: 'D for Dog', order: 4 },
    { id: 'en-e', language: 'en', letter: 'E', phonics: '/iː/', exampleWord: 'Elephant', exampleWordTranslation: 'Hathi (ہاتھی / हाथी)', meaning: 'A big gentle giant with a trunk', imageUrl: '🐘', audioText: 'E for Elephant', order: 5 },
    { id: 'en-f', language: 'en', letter: 'F', phonics: '/ɛf/', exampleWord: 'Fish', exampleWordTranslation: 'Machhli (مچھلی / मछली)', meaning: 'Swims happily in water', imageUrl: '🐟', audioText: 'F for Fish', order: 6 },
    { id: 'en-g', language: 'en', letter: 'G', phonics: '/dʒiː/', exampleWord: 'Grapes', exampleWordTranslation: 'Angoor (انگور / अंगूर)', meaning: 'Sweet juicy green or purple fruit', imageUrl: '🍇', audioText: 'G for Grapes', order: 7 },
    { id: 'en-h', language: 'en', letter: 'H', phonics: '/eɪtʃ/', exampleWord: 'Horse', exampleWordTranslation: 'Ghora (گھوڑا / घोड़ा)', meaning: 'A fast running strong animal', imageUrl: '🐴', audioText: 'H for Horse', order: 8 },
    { id: 'en-i', language: 'en', letter: 'I', phonics: '/aɪ/', exampleWord: 'Ice Cream', exampleWordTranslation: 'Ice Cream (آئس کریم)', meaning: 'Cold delicious sweet treat', imageUrl: '🍦', audioText: 'I for Ice Cream', order: 9 },
    { id: 'en-j', language: 'en', letter: 'J', phonics: '/dʒeɪ/', exampleWord: 'Jug', exampleWordTranslation: 'Jug (جگ / जग)', meaning: 'Used for pouring clean water', imageUrl: '🫖', audioText: 'J for Jug', order: 10 },
    { id: 'en-k', language: 'en', letter: 'K', phonics: '/keɪ/', exampleWord: 'Kite', exampleWordTranslation: 'Patang (پتنگ / पतंग)', meaning: 'Flies high up in the blue sky', imageUrl: '🪁', audioText: 'K for Kite', order: 11 },
    { id: 'en-l', language: 'en', letter: 'L', phonics: '/ɛl/', exampleWord: 'Lion', exampleWordTranslation: 'Sher (شیر / शेर)', meaning: 'The brave king of the jungle', imageUrl: '🦁', audioText: 'L for Lion', order: 12 },
    { id: 'en-m', language: 'en', letter: 'M', phonics: '/ɛm/', exampleWord: 'Mango', exampleWordTranslation: 'Aam (آم / आम)', meaning: 'The sweet king of all fruits', imageUrl: '🥭', audioText: 'M for Mango', order: 13 },
    { id: 'en-n', language: 'en', letter: 'N', phonics: '/ɛn/', exampleWord: 'Nest', exampleWordTranslation: 'Ghosla (گھونسلا / घोंसला)', meaning: 'Cozy little home for birds', imageUrl: '🪺', audioText: 'N for Nest', order: 14 },
    { id: 'en-o', language: 'en', letter: 'O', phonics: '/oʊ/', exampleWord: 'Orange', exampleWordTranslation: 'Santra (سنترا / संतरा)', meaning: 'Juicy citrus orange fruit', imageUrl: '🍊', audioText: 'O for Orange', order: 15 },
    { id: 'en-p', language: 'en', letter: 'P', phonics: '/piː/', exampleWord: 'Parrot', exampleWordTranslation: 'Tota (طوطا / तोता)', meaning: 'A green bird that talks', imageUrl: '🦜', audioText: 'P for Parrot', order: 16 },
    { id: 'en-q', language: 'en', letter: 'Q', phonics: '/kjuː/', exampleWord: 'Queen', exampleWordTranslation: 'Malka / Rani (ملکہ / रानी)', meaning: 'A royal lady with a crown', imageUrl: '👑', audioText: 'Q for Queen', order: 17 },
    { id: 'en-r', language: 'en', letter: 'R', phonics: '/ɑːr/', exampleWord: 'Rabbit', exampleWordTranslation: 'Khargosh (خرگوش / खरगोश)', meaning: 'Cute hopping animal with long ears', imageUrl: '🐰', audioText: 'R for Rabbit', order: 18 },
    { id: 'en-s', language: 'en', letter: 'S', phonics: '/ɛs/', exampleWord: 'Sun', exampleWordTranslation: 'Sooraj (سورج / सूरज)', meaning: 'Bright yellow star that warms Earth', imageUrl: '☀️', audioText: 'S for Sun', order: 19 },
    { id: 'en-t', language: 'en', letter: 'T', phonics: '/tiː/', exampleWord: 'Tree', exampleWordTranslation: 'Darakht / Ped (درخت / पेड़)', meaning: 'Tall green plant giving fresh oxygen', imageUrl: '🌳', audioText: 'T for Tree', order: 20 },
    { id: 'en-u', language: 'en', letter: 'U', phonics: '/juː/', exampleWord: 'Umbrella', exampleWordTranslation: 'Chhatri (چھتری / छाता)', meaning: 'Protects us from heavy rain', imageUrl: '☂️', audioText: 'U for Umbrella', order: 21 },
    { id: 'en-v', language: 'en', letter: 'V', phonics: '/viː/', exampleWord: 'Van', exampleWordTranslation: 'Gari (گاڑی / वैन)', meaning: 'Takes kids safely to school', imageUrl: '🚐', audioText: 'V for Van', order: 22 },
    { id: 'en-w', language: 'en', letter: 'W', phonics: '/ˈdʌbəl.juː/', exampleWord: 'Watch', exampleWordTranslation: 'Ghadi (گھڑی / घड़ी)', meaning: 'Tells us what time it is', imageUrl: '⌚', audioText: 'W for Watch', order: 23 },
    { id: 'en-x', language: 'en', letter: 'X', phonics: '/ɛks/', exampleWord: 'Xylophone', exampleWordTranslation: 'Baja (ساز / जलतरंग)', meaning: 'Musical instrument with colorful bars', imageUrl: '🎼', audioText: 'X for Xylophone', order: 24 },
    { id: 'en-y', language: 'en', letter: 'Y', phonics: '/waɪ/', exampleWord: 'Yak', exampleWordTranslation: 'Pahari Bail (پہاڑی بیل)', meaning: 'Fluffy mountain animal', imageUrl: '🐂', audioText: 'Y for Yak', order: 25 },
    { id: 'en-z', language: 'en', letter: 'Z', phonics: '/zɛd/', exampleWord: 'Zebra', exampleWordTranslation: 'Zebra (زیبرا / ज़ेब्रा)', meaning: 'Wild horse with black and white stripes', imageUrl: '🦓', audioText: 'Z for Zebra', order: 26 },

    // Urdu Alphabet
    { id: 'ur-alif', language: 'ur', letter: 'ا', phonics: 'Alif', exampleWord: 'انار', exampleWordTranslation: 'Pomegranate (Anar)', meaning: 'Meetha laal phal', imageUrl: '🍎', audioText: 'الف سے انار', order: 1 },
    { id: 'ur-be', language: 'ur', letter: 'ب', phonics: 'Bay', exampleWord: 'بلی', exampleWordTranslation: 'Cat (Billi)', meaning: 'Pyari si billi', imageUrl: '🐱', audioText: 'بے سے بلی', order: 2 },
    { id: 'ur-pe', language: 'ur', letter: 'پ', phonics: 'Pay', exampleWord: 'پتنگ', exampleWordTranslation: 'Kite (Patang)', meaning: 'Aasman mein udne wali patang', imageUrl: '🪁', audioText: 'پے سے پتنگ', order: 3 },
    { id: 'ur-te', language: 'ur', letter: 'ت', phonics: 'Tay', exampleWord: 'تتلی', exampleWordTranslation: 'Butterfly (Titli)', meaning: 'Rang barangi titli', imageUrl: '🦋', audioText: 'تے سے تتلی', order: 4 },
    { id: 'ur-tte', language: 'ur', letter: 'ٹ', phonics: 'Ttay', exampleWord: 'ٹماٹر', exampleWordTranslation: 'Tomato (Tamatar)', meaning: 'Surkh laal tamatar', imageUrl: '🍅', audioText: 'ٹے سے ٹماٹر', order: 5 },
    { id: 'ur-se', language: 'ur', letter: 'ث', phonics: 'Say', exampleWord: 'ثمر', exampleWordTranslation: 'Fruits (Samar)', meaning: 'Taaza meetha phal', imageUrl: '🍇', audioText: 'ثے سے ثمر', order: 6 },
    { id: 'ur-jeem', language: 'ur', letter: 'ج', phonics: 'Jeem', exampleWord: 'جہاز', exampleWordTranslation: 'Airplane (Jahaz)', meaning: 'Hawa mein udne wala jahaz', imageUrl: '✈️', audioText: 'جیم سے جہاز', order: 7 },
    { id: 'ur-che', language: 'ur', letter: 'چ', phonics: 'Chay', exampleWord: 'چاند', exampleWordTranslation: 'Moon (Chaand)', meaning: 'Raat ka chamakta chaand', imageUrl: '🌙', audioText: 'چے سے چاند', order: 8 },
    { id: 'ur-bari-he', language: 'ur', letter: 'ح', phonics: 'Hay', exampleWord: 'حقہ / حوض', exampleWordTranslation: 'Pool (Hauz)', meaning: 'Saaf paani ka hauz', imageUrl: '💧', audioText: 'حے سے حوض', order: 9 },
    { id: 'ur-khe', language: 'ur', letter: 'خ', phonics: 'Khay', exampleWord: 'خرگوش', exampleWordTranslation: 'Rabbit (Khargosh)', meaning: 'Safaid pyara khargosh', imageUrl: '🐰', audioText: 'خے سے خرگوش', order: 10 },
    { id: 'ur-daal', language: 'ur', letter: 'د', phonics: 'Daal', exampleWord: 'درخت', exampleWordTranslation: 'Tree (Darakht)', meaning: 'Hara bhara darakht', imageUrl: '🌳', audioText: 'دال سے درخت', order: 11 },
    { id: 'ur-ddaal', language: 'ur', letter: 'ڈ', phonics: 'Ddaal', exampleWord: 'ڈول', exampleWordTranslation: 'Bucket (Dol)', meaning: 'Paani bharne wala dol', imageUrl: '🪣', audioText: 'ڈال سے ڈول', order: 12 },
    { id: 'ur-zaal', language: 'ur', letter: 'ذ', phonics: 'Zaal', exampleWord: 'ذخیرہ', exampleWordTranslation: 'Store/Treasure', meaning: 'Ilm ka zakheera', imageUrl: '📦', audioText: 'ذال سے ذخیرہ', order: 13 },
    { id: 'ur-re', language: 'ur', letter: 'ر', phonics: 'Ray', exampleWord: 'ریل گاڑی', exampleWordTranslation: 'Train (Rail Gari)', meaning: 'Chhuk chhuk rail gari', imageUrl: '🚆', audioText: 'رے سے ریل گاڑی', order: 14 },
    { id: 'ur-rre', language: 'ur', letter: 'ڑ', phonics: 'Rray', exampleWord: 'پہاڑ', exampleWordTranslation: 'Mountain (Pahar)', meaning: 'Ooncha pahar', imageUrl: '🏔️', audioText: 'ڑے سے پہاڑ', order: 15 },
    { id: 'ur-ze', language: 'ur', letter: 'ز', phonics: 'Zay', exampleWord: 'زرافہ', exampleWordTranslation: 'Giraffe (Zarafa)', meaning: 'Lambi gardan wala zarafa', imageUrl: '🦒', audioText: 'زے سے زرافہ', order: 16 },
    { id: 'ur-seen', language: 'ur', letter: 'س', phonics: 'Seen', exampleWord: 'سیب', exampleWordTranslation: 'Apple (Saib)', meaning: 'Taaza meetha laal seb', imageUrl: '🍎', audioText: 'سین سے سیب', order: 17 },
    { id: 'ur-sheen', language: 'ur', letter: 'ش', phonics: 'Sheen', exampleWord: 'شیر', exampleWordTranslation: 'Lion (Sher)', meaning: 'Jungle ka raja sher', imageUrl: '🦁', audioText: 'شین سے شیر', order: 18 },
    { id: 'ur-swaad', language: 'ur', letter: 'ص', phonics: 'Swaad', exampleWord: 'صابن', exampleWordTranslation: 'Soap (Sabun)', meaning: 'Haath dhone ka sabun', imageUrl: '🧼', audioText: 'صاد سے صابن', order: 19 },
    { id: 'ur-zwaad', language: 'ur', letter: 'ض', phonics: 'Zwaad', exampleWord: 'ضعیف', exampleWordTranslation: 'Elderly person', meaning: 'Buzurg insaan', imageUrl: '👴', audioText: 'ضاد سے ضعیف', order: 20 },
    { id: 'ur-toye', language: 'ur', letter: 'ط', phonics: 'Toye', exampleWord: 'طوطا', exampleWordTranslation: 'Parrot (Tota)', meaning: 'Hara bhara tota', imageUrl: '🦜', audioText: 'طوئے سے طوطا', order: 21 },
    { id: 'ur-zoye', language: 'ur', letter: 'ظ', phonics: 'Zoye', exampleWord: 'ظروف', exampleWordTranslation: 'Utensils (Zuroof)', meaning: 'Bartan', imageUrl: '🥣', audioText: 'ظوئے سے ظروف', order: 22 },
    { id: 'ur-ain', language: 'ur', letter: 'ع', phonics: 'Ain', exampleWord: 'عینک', exampleWordTranslation: 'Glasses (Ainak)', meaning: 'Dekhne ki ainak', imageUrl: '👓', audioText: 'عین سے عینک', order: 23 },
    { id: 'ur-ghain', language: 'ur', letter: 'غ', phonics: 'Ghain', exampleWord: 'غبارہ', exampleWordTranslation: 'Balloon (Ghubara)', meaning: 'Rang baranga ghubara', imageUrl: '🎈', audioText: 'غین سے غبارہ', order: 24 },
    { id: 'ur-fe', language: 'ur', letter: 'ف', phonics: 'Fay', exampleWord: 'فوارہ', exampleWordTranslation: 'Fountain (Fawwara)', meaning: 'Paani ka khubsurat fawwara', imageUrl: '⛲', audioText: 'فے سے فوارہ', order: 25 },
    { id: 'ur-qaaf', language: 'ur', letter: 'ق', phonics: 'Qaaf', exampleWord: 'قلم', exampleWordTranslation: 'Pen (Qalam)', meaning: 'Likhne wala qalam', imageUrl: '✒️', audioText: 'قاف سے قلم', order: 26 },
    { id: 'ur-kaaf', language: 'ur', letter: 'ک', phonics: 'Kaaf', exampleWord: 'کتاب', exampleWordTranslation: 'Book (Kitaab)', meaning: 'Ilm wali kitaab', imageUrl: '📖', audioText: 'کاف سے کتاب', order: 27 },
    { id: 'ur-gaaf', language: 'ur', letter: 'گ', phonics: 'Gaaf', exampleWord: 'گائے', exampleWordTranslation: 'Cow (Gaaye)', meaning: 'Meetha doodh dene wali gaaye', imageUrl: '🐄', audioText: 'گاف سے گائے', order: 28 },
    { id: 'ur-laam', language: 'ur', letter: 'ل', phonics: 'Laam', exampleWord: 'لومڑی', exampleWordTranslation: 'Fox (Lomri)', meaning: 'Chalaak lomri', imageUrl: '🦊', audioText: 'لام سے لومڑی', order: 29 },
    { id: 'ur-meem', language: 'ur', letter: 'م', phonics: 'Meem', exampleWord: 'مور', exampleWordTranslation: 'Peacock (Mor)', meaning: 'Khubsurat pankhon wala mor', imageUrl: '🦚', audioText: 'میم سے مور', order: 30 },
    { id: 'ur-noon', language: 'ur', letter: 'ن', phonics: 'Noon', exampleWord: 'نل', exampleWordTranslation: 'Tap (Nal)', meaning: 'Paani ka nal', imageUrl: '🚰', audioText: 'نون سے نل', order: 31 },
    { id: 'ur-wao', language: 'ur', letter: 'و', phonics: 'Wao', exampleWord: 'وردی', exampleWordTranslation: 'Uniform (Wardi)', meaning: 'School ki saaf suthri wardi', imageUrl: '👔', audioText: 'واؤ سے وردی', order: 32 },
    { id: 'ur-chhoti-he', language: 'ur', letter: 'ہ', phonics: 'Chhoti Hay', exampleWord: 'ہاتھی', exampleWordTranslation: 'Elephant (Hathi)', meaning: 'Bada hathi', imageUrl: '🐘', audioText: 'ہے سے ہاتھی', order: 33 },
    { id: 'ur-hamza', language: 'ur', letter: 'ء', phonics: 'Hamza', exampleWord: 'چائے', exampleWordTranslation: 'Tea (Chai)', meaning: 'Garam garam chai', imageUrl: '☕', audioText: 'ہمزہ', order: 34 },
    { id: 'ur-chhoti-ye', language: 'ur', letter: 'ی', phonics: 'Chhoti Yay', exampleWord: 'یکہ', exampleWordTranslation: 'Horse Cart', meaning: 'Ghora gari', imageUrl: '🛺', audioText: 'چھوٹی یے سے یکہ', order: 35 },
    { id: 'ur-bari-ye', language: 'ur', letter: 'ے', phonics: 'Bari Yay', exampleWord: 'طوطے', exampleWordTranslation: 'Parrots (Tote)', meaning: 'Bari yay', imageUrl: '🦜', audioText: 'بڑی یے', order: 36 },

    // Arabic Alphabet
    { id: 'ar-alif', language: 'ar', letter: 'أ', phonics: 'Alif', exampleWord: 'أَسَد', exampleWordTranslation: 'Lion (Asad)', meaning: 'Malik al-Ghabah', imageUrl: '🦁', audioText: 'أَلِف أَسَد', order: 1 },
    { id: 'ar-baa', language: 'ar', letter: 'ب', phonics: 'Baa', exampleWord: 'بَيْت', exampleWordTranslation: 'House (Bayt)', meaning: 'Manzil jameel', imageUrl: '🏠', audioText: 'بَاء بَيْت', order: 2 },
    { id: 'ar-taa', language: 'ar', letter: 'ت', phonics: 'Taa', exampleWord: 'تُفَّاح', exampleWordTranslation: 'Apple (Tuffah)', meaning: 'Fakiha lazeezah', imageUrl: '🍎', audioText: 'تَاء تُفَّاح', order: 3 },
    { id: 'ar-thaa', language: 'ar', letter: 'ث', phonics: 'Thaa', exampleWord: 'ثَعْلَب', exampleWordTranslation: 'Fox (Tha\'lab)', meaning: 'Hayawan zaki', imageUrl: '🦊', audioText: 'ثَاء ثَعْلَب', order: 4 },
    { id: 'ar-jeem', language: 'ar', letter: 'ج', phonics: 'Jeem', exampleWord: 'جَمَل', exampleWordTranslation: 'Camel (Jamal)', meaning: 'Safeenat as-sahra', imageUrl: '🐫', audioText: 'جِيم جَمَل', order: 5 },
    { id: 'ar-haa', language: 'ar', letter: 'ح', phonics: 'Haa', exampleWord: 'حِصَان', exampleWordTranslation: 'Horse (Hisaan)', meaning: 'Hayawan saree', imageUrl: '🐴', audioText: 'حَاء حِصَان', order: 6 },
    { id: 'ar-khaa', language: 'ar', letter: 'خ', phonics: 'Khaa', exampleWord: 'خُبْز', exampleWordTranslation: 'Bread (Khubz)', meaning: 'Ta\'am tayyib', imageUrl: '🍞', audioText: 'خَاء خُبْز', order: 7 },
    { id: 'ar-daal', language: 'ar', letter: 'د', phonics: 'Daal', exampleWord: 'دُبّ', exampleWordTranslation: 'Bear (Dubb)', meaning: 'Hayawan kabeer', imageUrl: '🐻', audioText: 'دَال دُبّ', order: 8 },
    { id: 'ar-dhaal', language: 'ar', letter: 'ذ', phonics: 'Dhaal', exampleWord: 'ذُرَة', exampleWordTranslation: 'Corn (Dhurah)', meaning: 'Nabat asfar lazeez', imageUrl: '🌽', audioText: 'ذَال ذُرَة', order: 9 },
    { id: 'ar-raa', language: 'ar', letter: 'ر', phonics: 'Raa', exampleWord: 'رُمَّان', exampleWordTranslation: 'Pomegranate (Rumman)', meaning: 'Fakihat al-jannah', imageUrl: '🍎', audioText: 'رَاء رُمَّان', order: 10 },
    { id: 'ar-zaay', language: 'ar', letter: 'ز', phonics: 'Zaay', exampleWord: 'زَهْرَة', exampleWordTranslation: 'Flower (Zahrah)', meaning: 'Zahrah jameelah', imageUrl: '🌸', audioText: 'زَاي زَهْرَة', order: 11 },
    { id: 'ar-seen', language: 'ar', letter: 'س', phonics: 'Seen', exampleWord: 'سَمَكَة', exampleWordTranslation: 'Fish (Samakah)', meaning: 'Tasbah fi al-maa', imageUrl: '🐟', audioText: 'سِين سَمَكَة', order: 12 },
    { id: 'ar-sheen', language: 'ar', letter: 'ش', phonics: 'Sheen', exampleWord: 'شَمْس', exampleWordTranslation: 'Sun (Shams)', meaning: 'Tudi\' ad-dunya', imageUrl: '☀️', audioText: 'شِين شَمْس', order: 13 },
    { id: 'ar-saad', language: 'ar', letter: 'ص', phonics: 'Saad', exampleWord: 'صَقْر', exampleWordTranslation: 'Falcon (Saqr)', meaning: 'Ta\'ir qawi', imageUrl: '🦅', audioText: 'صَاد صَقْر', order: 14 },
    { id: 'ar-daad', language: 'ar', letter: 'ض', phonics: 'Daad', exampleWord: 'ضِفْدَع', exampleWordTranslation: 'Frog (Difda\')', meaning: 'Hayawan yaqfiz', imageUrl: '🐸', audioText: 'ضَاد ضِفْدَع', order: 15 },
    { id: 'ar-taa2', language: 'ar', letter: 'ط', phonics: 'Taa (Emp)', exampleWord: 'طَيَّارَة', exampleWordTranslation: 'Plane (Tayyarah)', meaning: 'Tateer fi as-samaa', imageUrl: '✈️', audioText: 'طَاء طَيَّارَة', order: 16 },
    { id: 'ar-zaa2', language: 'ar', letter: 'ظ', phonics: 'Zaa (Emp)', exampleWord: 'ظَرْف', exampleWordTranslation: 'Envelope (Zarf)', meaning: 'Rasail jameelah', imageUrl: '✉️', audioText: 'ظَاء ظَرْف', order: 17 },
    { id: 'ar-ayn', language: 'ar', letter: 'ع', phonics: 'Ayn', exampleWord: 'عَيْن', exampleWordTranslation: 'Eye (Ayn)', meaning: 'Nara biha al-ashyaa', imageUrl: '👁️', audioText: 'عَيْن عَيْن', order: 18 },
    { id: 'ar-ghayn', language: 'ar', letter: 'غ', phonics: 'Ghayn', exampleWord: 'غَزَال', exampleWordTranslation: 'Deer (Ghazaal)', meaning: 'Ghazal jameel saree', imageUrl: '🦌', audioText: 'غَيْن غَزَال', order: 19 },
    { id: 'ar-faa', language: 'ar', letter: 'ف', phonics: 'Faa', exampleWord: 'فِيل', exampleWordTranslation: 'Elephant (Feel)', meaning: 'Hayawan dakhm', imageUrl: '🐘', audioText: 'فَاء فِيل', order: 20 },
    { id: 'ar-qaaf', language: 'ar', letter: 'ق', phonics: 'Qaaf', exampleWord: 'قَمَر', exampleWordTranslation: 'Moon (Qamar)', meaning: 'Yudi\' fi al-layl', imageUrl: '🌙', audioText: 'قَاف قَمَر', order: 21 },
    { id: 'ar-kaaf', language: 'ar', letter: 'ك', phonics: 'Kaaf', exampleWord: 'كِتَاب', exampleWordTranslation: 'Book (Kitaab)', meaning: 'Naqra\'u fihi', imageUrl: '📖', audioText: 'كَاف كِتَاب', order: 22 },
    { id: 'ar-laam', language: 'ar', letter: 'ل', phonics: 'Laam', exampleWord: 'لَيْمُون', exampleWordTranslation: 'Lemon (Laymoon)', meaning: 'Hamid wa munish', imageUrl: '🍋', audioText: 'لَام لَيْمُون', order: 23 },
    { id: 'ar-meem', language: 'ar', letter: 'م', phonics: 'Meem', exampleWord: 'مَسْجِد', exampleWordTranslation: 'Mosque (Masjid)', meaning: 'Bayt Allah ta\'ala', imageUrl: '🕌', audioText: 'مِيم مَسْجِد', order: 24 },
    { id: 'ar-noon', language: 'ar', letter: 'ن', phonics: 'Noon', exampleWord: 'نَجْم', exampleWordTranslation: 'Star (Najm)', meaning: 'Yalma\' fi as-samaa', imageUrl: '⭐', audioText: 'نُون نَجْم', order: 25 },
    { id: 'ar-haa2', language: 'ar', letter: 'هـ', phonics: 'Haa', exampleWord: 'هِلَال', exampleWordTranslation: 'Crescent (Hilal)', meaning: 'Bidayat ash-shahr', imageUrl: '🌙', audioText: 'هَاء هِلَال', order: 26 },
    { id: 'ar-waw', language: 'ar', letter: 'و', phonics: 'Waw', exampleWord: 'وَرْدَة', exampleWordTranslation: 'Rose (Wardah)', meaning: 'Wardah hamra jameelah', imageUrl: '🌹', audioText: 'وَاو وَرْدَة', order: 27 },
    { id: 'ar-yaa', language: 'ar', letter: 'ي', phonics: 'Yaa', exampleWord: 'يَد', exampleWordTranslation: 'Hand (Yad)', meaning: 'Yad naqiyah', imageUrl: '✋', audioText: 'يَاء يَد', order: 28 },

    // Hindi Varnamala
    { id: 'hi-a', language: 'hi', letter: 'अ', phonics: 'A', exampleWord: 'अनार', exampleWordTranslation: 'Pomegranate (Anaar)', meaning: 'Laal daano wala phal', imageUrl: '🍎', audioText: 'अ से अनार', order: 1 },
    { id: 'hi-aa', language: 'hi', letter: 'आ', phonics: 'Aa', exampleWord: 'आम', exampleWordTranslation: 'Mango (Aam)', meaning: 'Phalo ka raja', imageUrl: '🥭', audioText: 'आ से आम', order: 2 },
    { id: 'hi-i', language: 'hi', letter: 'इ', phonics: 'I', exampleWord: 'इमली', exampleWordTranslation: 'Tamarind (Imli)', meaning: 'Khatti meethi imli', imageUrl: '🫒', audioText: 'इ से इमली', order: 3 },
    { id: 'hi-ee', language: 'hi', letter: 'ई', phonics: 'Ee', exampleWord: 'ईख', exampleWordTranslation: 'Sugarcane (Eekh)', meaning: 'Meetha ganna', imageUrl: '🎋', audioText: 'ई से ईख', order: 4 },
    { id: 'hi-u', language: 'hi', letter: 'उ', phonics: 'U', exampleWord: 'उल्लू', exampleWordTranslation: 'Owl (Ullu)', meaning: 'Raat ko jagne wala pakshi', imageUrl: '🦉', audioText: 'उ से उल्लू', order: 5 },
    { id: 'hi-oo', language: 'hi', letter: 'ऊ', phonics: 'Oo', exampleWord: 'ऊन', exampleWordTranslation: 'Wool (Oon)', meaning: 'Garam kapde banane wala oon', imageUrl: '🧶', audioText: 'ऊ से ऊन', order: 6 },
    { id: 'hi-ri', language: 'hi', letter: 'ऋ', phonics: 'Ri', exampleWord: 'ऋषि', exampleWordTranslation: 'Sage (Rishi)', meaning: 'Gyan dene wale sadhu', imageUrl: '🧘', audioText: 'ऋ से ऋषि', order: 7 },
    { id: 'hi-e', language: 'hi', letter: 'ए', phonics: 'E', exampleWord: 'एड़ी', exampleWordTranslation: 'Heel (Aedi)', meaning: 'Pair ki aedi', imageUrl: '🦶', audioText: 'ए से एड़ी', order: 8 },
    { id: 'hi-ai', language: 'hi', letter: 'ऐ', phonics: 'Ai', exampleWord: 'ऐनक', exampleWordTranslation: 'Spectacles (Ainak)', meaning: 'Aankhon ka chashma', imageUrl: '👓', audioText: 'ऐ से ऐनक', order: 9 },
    { id: 'hi-o', language: 'hi', letter: 'ओ', phonics: 'O', exampleWord: 'ओखली', exampleWordTranslation: 'Mortar (Okhli)', meaning: 'Kootne wali okhli', imageUrl: '🥣', audioText: 'ओ से ओखली', order: 10 },
    { id: 'hi-au', language: 'hi', letter: 'औ', phonics: 'Au', exampleWord: 'औरत', exampleWordTranslation: 'Woman (Aurat)', meaning: 'Pyari maa', imageUrl: '👩', audioText: 'औ से औरत', order: 11 },
    { id: 'hi-ang', language: 'hi', letter: 'अं', phonics: 'Ang', exampleWord: 'अंगूर', exampleWordTranslation: 'Grapes (Angoor)', meaning: 'Meethe angoor', imageUrl: '🍇', audioText: 'अं से अंगूर', order: 12 },
    { id: 'hi-ka', language: 'hi', letter: 'क', phonics: 'Ka', exampleWord: 'कमल', exampleWordTranslation: 'Lotus (Kamal)', meaning: 'Hamara rashtriya phool', imageUrl: '🪷', audioText: 'क से कमल', order: 13 },
    { id: 'hi-kha', language: 'hi', letter: 'ख', phonics: 'Kha', exampleWord: 'खरगोश', exampleWordTranslation: 'Rabbit (Khargosh)', meaning: 'Safed chanchal khargosh', imageUrl: '🐰', audioText: 'ख से खरगोश', order: 14 },
    { id: 'hi-ga', language: 'hi', letter: 'ग', phonics: 'Ga', exampleWord: 'गमला', exampleWordTranslation: 'Flower Pot (Gamla)', meaning: 'Paudhe lagane ka gamla', imageUrl: '🪴', audioText: 'ग से गमला', order: 15 },
    { id: 'hi-gha', language: 'hi', letter: 'घ', phonics: 'Gha', exampleWord: 'घड़ी', exampleWordTranslation: 'Clock (Ghadi)', meaning: 'Samay batane wali ghadi', imageUrl: '⏰', audioText: 'घ से घड़ी', order: 16 },
    { id: 'hi-cha', language: 'hi', letter: 'च', phonics: 'Cha', exampleWord: 'चम्मच', exampleWordTranslation: 'Spoon (Chammach)', meaning: 'Kheer khane ka chammach', imageUrl: '🥄', audioText: 'च से चम्मच', order: 17 },
    { id: 'hi-chha', language: 'hi', letter: 'छ', phonics: 'Chha', exampleWord: 'छतरी', exampleWordTranslation: 'Umbrella (Chhatri)', meaning: 'Barish me bachane wali chhatri', imageUrl: '☂️', audioText: 'छ से छतरी', order: 18 },
    { id: 'hi-ja', language: 'hi', letter: 'ज', phonics: 'Ja', exampleWord: 'जहाज', exampleWordTranslation: 'Ship/Airplane', meaning: 'Pani aur hawa me chalne wala', imageUrl: '🚢', audioText: 'ज से जहाज', order: 19 },
    { id: 'hi-jha', language: 'hi', letter: 'झ', phonics: 'Jha', exampleWord: 'झंडा', exampleWordTranslation: 'Flag (Jhanda)', meaning: 'Hamara pyara Tiranga', imageUrl: '🇮🇳', audioText: 'झ से झंडा', order: 20 },
    { id: 'hi-ta', language: 'hi', letter: 'ट', phonics: 'Ta', exampleWord: 'टमाटर', exampleWordTranslation: 'Tomato (Tamatar)', meaning: 'Lal lal tamatar', imageUrl: '🍅', audioText: 'ट से टमाटर', order: 21 },
    { id: 'hi-tha', language: 'hi', letter: 'ठ', phonics: 'Tha', exampleWord: 'ठठेरा', exampleWordTranslation: 'Tinker/Coppersmith', meaning: 'Bartan banane wala', imageUrl: '🔨', audioText: 'ठ से ठठेरा', order: 22 },
    { id: 'hi-da', language: 'hi', letter: 'ड', phonics: 'Da', exampleWord: 'डमरू', exampleWordTranslation: 'Small Drum (Damru)', meaning: 'Baja', imageUrl: '🪘', audioText: 'ड से डमरू', order: 23 },
    { id: 'hi-dha', language: 'hi', letter: 'ढ', phonics: 'Dha', exampleWord: 'ढक्कन', exampleWordTranslation: 'Lid (Dhakkan)', meaning: 'Bartan dhakne ka', imageUrl: '🍲', audioText: 'ढ से ढक्कन', order: 24 },
    { id: 'hi-ta2', language: 'hi', letter: 'त', phonics: 'Ta', exampleWord: 'तरबूज', exampleWordTranslation: 'Watermelon (Tarbooz)', meaning: 'Meetha rasila tarbooz', imageUrl: '🍉', audioText: 'त से तरबूज', order: 25 },
    { id: 'hi-tha2', language: 'hi', letter: 'थ', phonics: 'Tha', exampleWord: 'थर्मस', exampleWordTranslation: 'Thermos (Thermos)', meaning: 'Garam paani rakhne ka', imageUrl: '🍶', audioText: 'थ से थर्मस', order: 26 },
    { id: 'hi-da2', language: 'hi', letter: 'द', phonics: 'Da', exampleWord: 'दवात', exampleWordTranslation: 'Inkpot (Dawaat)', meaning: 'Siyahi ki dawat', imageUrl: '🖋️', audioText: 'द से दवात', order: 27 },
    { id: 'hi-dha2', language: 'hi', letter: 'ध', phonics: 'Dha', exampleWord: 'धनुष', exampleWordTranslation: 'Bow (Dhanush)', meaning: 'Teer chalane ka dhanush', imageUrl: '🏹', audioText: 'ध से धनुष', order: 28 },
    { id: 'hi-na', language: 'hi', letter: 'न', phonics: 'Na', exampleWord: 'नल', exampleWordTranslation: 'Tap (Nal)', meaning: 'Paani ka nal', imageUrl: '🚰', audioText: 'न से नल', order: 29 },
    { id: 'hi-pa', language: 'hi', letter: 'प', phonics: 'Pa', exampleWord: 'पतंग', exampleWordTranslation: 'Kite (Patang)', meaning: 'Aasman me udti patang', imageUrl: '🪁', audioText: 'प से पतंग', order: 30 },
    { id: 'hi-pha', language: 'hi', letter: 'फ', phonics: 'Pha', exampleWord: 'फल', exampleWordTranslation: 'Fruits (Phal)', meaning: 'Taaza swadisht phal', imageUrl: '🍓', audioText: 'फ से फल', order: 31 },
    { id: 'hi-ba', language: 'hi', letter: 'ब', phonics: 'Ba', exampleWord: 'बत्तख', exampleWordTranslation: 'Duck (Battakh)', meaning: 'Pani me tairne wali battakh', imageUrl: '🦆', audioText: 'ब से बत्तख', order: 32 },
    { id: 'hi-bha', language: 'hi', letter: 'भ', phonics: 'Bha', exampleWord: 'भालू', exampleWordTranslation: 'Bear (Bhalu)', meaning: 'Jungle ka bhalu', imageUrl: '🐻', audioText: 'भ से भालू', order: 33 },
    { id: 'hi-ma', language: 'hi', letter: 'म', phonics: 'Ma', exampleWord: 'मछली', exampleWordTranslation: 'Fish (Machhli)', meaning: 'Jal ki rani machhli', imageUrl: '🐟', audioText: 'म से मछली', order: 34 },
    { id: 'hi-ya', language: 'hi', letter: 'य', phonics: 'Ya', exampleWord: 'यज्ञ', exampleWordTranslation: 'Sacred fire ritual', meaning: 'Pavitra yagya', imageUrl: '🔥', audioText: 'य से यज्ञ', order: 35 },
    { id: 'hi-ra', language: 'hi', letter: 'र', phonics: 'Ra', exampleWord: 'रथ', exampleWordTranslation: 'Chariot (Rath)', meaning: 'Rajao ka rath', imageUrl: '🛞', audioText: 'र से रथ', order: 36 },
    { id: 'hi-la', language: 'hi', letter: 'ल', phonics: 'La', exampleWord: 'लट्टू', exampleWordTranslation: 'Spinning Top (Lattu)', meaning: 'Ghoomne wala khilona', imageUrl: '🪀', audioText: 'ल से लट्टू', order: 37 },
    { id: 'hi-va', language: 'hi', letter: 'व', phonics: 'Va', exampleWord: 'वक', exampleWordTranslation: 'Crane Bird (Vak)', meaning: 'Bagula pakshi', imageUrl: '🦩', audioText: 'व से वक', order: 38 },
    { id: 'hi-sha', language: 'hi', letter: 'श', phonics: 'Sha', exampleWord: 'शलजम', exampleWordTranslation: 'Turnip (Shaljam)', meaning: 'Gunkari sabzi', imageUrl: '🫒', audioText: 'श से शलजम', order: 39 },
    { id: 'hi-sa', language: 'hi', letter: 'स', phonics: 'Sa', exampleWord: 'सेब / सपेरा', exampleWordTranslation: 'Apple (Seb)', meaning: 'Lal laal meetha seb', imageUrl: '🍎', audioText: 'स से सेब', order: 40 },
    { id: 'hi-ha', language: 'hi', letter: 'ह', phonics: 'Ha', exampleWord: 'हाथी', exampleWordTranslation: 'Elephant (Hathi)', meaning: 'Bada hathi', imageUrl: '🐘', audioText: 'ह से हाथी', order: 41 },
    { id: 'hi-ksha', language: 'hi', letter: 'क्ष', phonics: 'Ksha', exampleWord: 'क्षत्रिय', exampleWordTranslation: 'Warrior (Kshatriya)', meaning: 'Veer yoddha', imageUrl: '🛡️', audioText: 'क्ष से क्षत्रिय', order: 42 },
    { id: 'hi-tra', language: 'hi', letter: 'त्र', phonics: 'Tra', exampleWord: 'त्रिशूल', exampleWordTranslation: 'Trident (Trishul)', meaning: 'Trishul', imageUrl: '🔱', audioText: 'त्र से त्रिशूल', order: 43 },
    { id: 'hi-gya', language: 'hi', letter: 'ज्ञ', phonics: 'Gya', exampleWord: 'ज्ञानी', exampleWordTranslation: 'Wise Scholar (Gyani)', meaning: 'Gyan se bharpoor', imageUrl: '📚', audioText: 'ज्ञ से ज्ञानी', order: 44 }
  ],
  words: [
    { id: 'w-en-1', language: 'en', letter: 'A', word: 'Apple', meaning: 'A crunchy sweet fruit', phonetic: '/ˈæp.əl/', category: 'Fruits', imageUrl: '🍎', order: 1 },
    { id: 'w-en-2', language: 'en', letter: 'B', word: 'Book', meaning: 'Filled with knowledge and stories', phonetic: '/bʊk/', category: 'School', imageUrl: '📚', order: 2 },
    { id: 'w-en-3', language: 'en', letter: 'C', word: 'Car', meaning: 'A vehicle with four wheels', phonetic: '/kɑːr/', category: 'Vehicles', imageUrl: '🚗', order: 3 },
    { id: 'w-en-4', language: 'en', letter: 'D', word: 'Duck', meaning: 'A yellow bird that quacks', phonetic: '/dʌk/', category: 'Animals', imageUrl: '🦆', order: 4 },
    { id: 'w-en-5', language: 'en', letter: 'E', word: 'Egg', meaning: 'Healthy breakfast food', phonetic: '/ɛɡ/', category: 'Food', imageUrl: '🥚', order: 5 },
    { id: 'w-en-6', language: 'en', letter: 'F', word: 'Flower', meaning: 'Colorful blossom in a garden', phonetic: '/ˈflaʊ.ər/', category: 'Nature', imageUrl: '🌸', order: 6 },
    { id: 'w-ur-1', language: 'ur', letter: 'ا', word: 'انار (Pomegranate)', meaning: 'Lal daano wala mazedar phal', phonetic: 'Anar', category: 'Fruits', imageUrl: '🍎', order: 7 },
    { id: 'w-ur-2', language: 'ur', letter: 'ب', word: 'بلی (Cat)', meaning: 'Ghar me rehne wali pyari billi', phonetic: 'Billi', category: 'Animals', imageUrl: '🐱', order: 8 },
    { id: 'w-ur-3', language: 'ur', letter: 'ک', word: 'کتاب (Book)', meaning: 'Padhne likhne ki kitaab', phonetic: 'Kitaab', category: 'School', imageUrl: '📖', order: 9 },
    { id: 'w-ur-4', language: 'ur', letter: 'گ', word: 'گیند (Ball)', meaning: 'Khelne wali gend', phonetic: 'Gend', category: 'Toys', imageUrl: '⚽', order: 10 },
    { id: 'w-ar-1', language: 'ar', letter: 'أ', word: 'أَسَد (Lion)', meaning: 'Malik al-Ghabah', phonetic: 'Asad', category: 'Animals', imageUrl: '🦁', order: 11 },
    { id: 'w-ar-2', language: 'ar', letter: 'م', word: 'مَسْجِد (Mosque)', meaning: 'Baytullah al-kareem', phonetic: 'Masjid', category: 'Places', imageUrl: '🕌', order: 12 },
    { id: 'w-ar-3', language: 'ar', letter: 'ق', word: 'قَمَر (Moon)', meaning: 'Qamar muneer fi as-samaa', phonetic: 'Qamar', category: 'Nature', imageUrl: '🌙', order: 13 },
    { id: 'w-ar-4', language: 'ar', letter: 'ك', word: 'كِتَاب (Book)', meaning: 'Noor al-ilm', phonetic: 'Kitaab', category: 'School', imageUrl: '📖', order: 14 },
    { id: 'w-hi-1', language: 'hi', letter: 'अ', word: 'अनार (Pomegranate)', meaning: 'Meetha rasdar phal', phonetic: 'Anaar', category: 'Fruits', imageUrl: '🍎', order: 15 },
    { id: 'w-hi-2', language: 'hi', letter: 'क', word: 'कमल (Lotus)', meaning: 'Hamara rashtriya phool', phonetic: 'Kamal', category: 'Nature', imageUrl: '🪷', order: 16 },
    { id: 'w-hi-3', language: 'hi', letter: 'प', word: 'पानी (Water)', meaning: 'Jeevan dene wala jal', phonetic: 'Paani', category: 'Everyday', imageUrl: '💧', order: 17 },
    { id: 'w-hi-4', language: 'hi', letter: 'स', word: 'सूरज (Sun)', meaning: 'Prakriti ko roshan karne wala', phonetic: 'Sooraj', category: 'Nature', imageUrl: '☀️', order: 18 }
  ],
  sentences: [
    {
      id: 's-1',
      category: 'daily',
      english: 'I am eating food.',
      urdu: 'میں کھانا کھا رہا ہوں۔',
      arabic: 'أَنَا آكُلُ الطَّعَامَ.',
      hindi: 'मैं खाना खा रहा हूँ।',
      order: 1
    },
    {
      id: 's-2',
      category: 'daily',
      english: 'I am drinking water.',
      urdu: 'میں پانی پی رہا ہوں۔',
      arabic: 'أَنَا أَشْرَبُ الْمَاءَ.',
      hindi: 'मैं पानी पी रहा हूँ।',
      order: 2
    },
    {
      id: 's-3',
      category: 'school',
      english: 'I am going to school.',
      urdu: 'میں اسکول جا رہا ہوں۔',
      arabic: 'أَنَا أَذْهَبُ إِلَى الْمَدْرَسَةِ.',
      hindi: 'मैं स्कूल जा रहा हूँ।',
      order: 3
    },
    {
      id: 's-4',
      category: 'school',
      english: 'I am reading a book.',
      urdu: 'میں کتاب پڑھ رہا ہوں۔',
      arabic: 'أَنَا أَقْرَأُ الْكِتَابَ.',
      hindi: 'मैं किताब पढ़ रहा हूँ।',
      order: 4
    },
    {
      id: 's-5',
      category: 'school',
      english: 'I am writing in my notebook.',
      urdu: 'میں اپنی کاپی میں لکھ رہا ہوں۔',
      arabic: 'أَنَا أَكْتُبُ فِي دَفْتَرِي.',
      hindi: 'मैं अपनी कॉपी में लिख रहा हूँ।',
      order: 5
    },
    {
      id: 's-6',
      category: 'daily',
      english: 'I am playing with my friends.',
      urdu: 'میں اپنے دوستوں کے ساتھ کھیل رہا ہوں۔',
      arabic: 'أَنَا أَلْعَبُ مَعَ أَصْدِقَائِي.',
      hindi: 'मैं अपने दोस्तों के साथ खेल रहा हूँ।',
      order: 6
    },
    {
      id: 's-7',
      category: 'school',
      english: 'This is my book.',
      urdu: 'یہ میری کتاب ہے۔',
      arabic: 'هٰذَا كِتَابِي.',
      hindi: 'यह मेरी किताब है।',
      order: 7
    },
    {
      id: 's-8',
      category: 'school',
      english: 'This is my pen.',
      urdu: 'یہ میرا قلم ہے۔',
      arabic: 'هٰذَا قَلَمِي.',
      hindi: 'यह मेरी कलम है।',
      order: 8
    },
    {
      id: 's-9',
      category: 'feelings',
      english: 'I am very happy today.',
      urdu: 'میں آج بہت خوش ہوں۔',
      arabic: 'أَنَا سَعِيدٌ جِدًّا الْيَوْمَ.',
      hindi: 'मैं आज बहुत खुश हूँ।',
      order: 9
    },
    {
      id: 's-10',
      category: 'greetings',
      english: 'Good morning, have a nice day!',
      urdu: 'صبح بخیر، آپ کا دن اچھا گزرے!',
      arabic: 'صَبَاحُ الْخَيْرِ، يَوْمٌ سَعِيدٌ!',
      hindi: 'सुप्रभात, आपका दिन शुभ हो!',
      order: 10
    },
    {
      id: 's-11',
      category: 'greetings',
      english: 'Good night, sweet dreams!',
      urdu: 'شب بخیر، میٹھے خواب!',
      arabic: 'تُصْبِحُ عَلَى خَيْرٍ!',
      hindi: 'शुभ रात्रि, मीठे सपने!',
      order: 11
    },
    {
      id: 's-12',
      category: 'manners',
      english: 'Thank you very much.',
      urdu: 'آپ کا بہت بہت شکریہ۔',
      arabic: 'شُكْرًا جَزِيلًا لَكَ.',
      hindi: 'आपका बहुत-बहुत धन्यवाद।',
      order: 12
    },
    {
      id: 's-13',
      category: 'manners',
      english: 'Please help me.',
      urdu: 'براہ کرم میری مدد کیجیے۔',
      arabic: 'مِنْ فَضْلِكَ سَاعِدْنِي.',
      hindi: 'कृपया मेरी मदद कीजिए।',
      order: 13
    },
    {
      id: 's-14',
      category: 'daily',
      english: 'Come here and sit down.',
      urdu: 'یہاں آئیں اور بیٹھ جائیں۔',
      arabic: 'تَعَالَ هُنَا وَاجْلِسْ.',
      hindi: 'यहाँ आओ और बैठ जाओ।',
      order: 14
    },
    {
      id: 's-15',
      category: 'daily',
      english: 'Stand up and listen carefully.',
      urdu: 'کھڑے ہو جائیں اور دھیان سے سنیں۔',
      arabic: 'قِفْ وَاسْتَمِعْ بِعِنَايَةٍ.',
      hindi: 'खड़े हो जाओ और ध्यान से सुनो।',
      order: 15
    },
    {
      id: 's-16',
      category: 'daily',
      english: 'Open the door, please.',
      urdu: 'براہ کرم دروازہ کھولیں۔',
      arabic: 'افْتَحِ الْبَابَ مِنْ فَضْلِكَ.',
      hindi: 'कृपया दरवाज़ा खोलें।',
      order: 16
    },
    {
      id: 's-17',
      category: 'daily',
      english: 'Close the window, please.',
      urdu: 'براہ کرم کھڑکی بند کریں۔',
      arabic: 'أَغْلِقِ النَّافِذَةَ مِنْ فَضْلِكَ.',
      hindi: 'कृपया खिड़की बंद करें।',
      order: 17
    },
    {
      id: 's-18',
      category: 'greetings',
      english: 'Peace be upon you (Assalamu Alaikum).',
      urdu: 'السلام علیکم ورحمۃ اللہ وبرکاتہ۔',
      arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ.',
      hindi: 'अस्सलाम वालेकुम व रहमतुल्लाह व बरकातहू।',
      order: 18
    }
  ],
  surahs: [
    {
      id: 'surah-1',
      number: 1,
      nameArabic: 'سُورَةُ الْفَاتِحَة',
      nameEnglish: 'Al-Fatiha',
      nameUrdu: 'سورۃ الفاتحہ',
      meaningEnglish: 'The Opening',
      versesCount: 7,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/1.mp3',
      order: 1,
      ayahs: [
        { numberInSurah: 1, textArabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', textUrdu: 'شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔', textEnglish: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3' },
        { numberInSurah: 2, textArabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', textUrdu: 'سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے۔', textEnglish: '[All] praise is [due] to Allah, Lord of the worlds -', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2.mp3' },
        { numberInSurah: 3, textArabic: 'الرَّحْمَٰنِ الرَّحِيمِ', textUrdu: 'بڑا مہربان نہایت رحم والا ہے۔', textEnglish: 'The Entirely Merciful, the Especially Merciful,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/3.mp3' },
        { numberInSurah: 4, textArabic: 'مَالِكِ يَوْمِ الدِّينِ', textUrdu: 'روزِ جزا کا مالک ہے۔', textEnglish: 'Sovereign of the Day of Recompense.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/4.mp3' },
        { numberInSurah: 5, textArabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', textUrdu: 'ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔', textEnglish: 'It is You we worship and You we ask for help.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/5.mp3' },
        { numberInSurah: 6, textArabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', textUrdu: 'ہمیں سیدھا راستہ دکھا۔', textEnglish: 'Guide us to the straight path -', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6.mp3' },
        { numberInSurah: 7, textArabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', textUrdu: 'ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ ان کا جن پر غضب نازل ہوا اور نہ گمراہوں کا۔', textEnglish: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/7.mp3' }
      ]
    },
    {
      id: 'surah-112',
      number: 112,
      nameArabic: 'سُورَةُ الْإِخْلَاص',
      nameEnglish: 'Al-Ikhlas',
      nameUrdu: 'سورۃ الاخلاص',
      meaningEnglish: 'The Sincerity (Purity of Faith)',
      versesCount: 4,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/112.mp3',
      order: 2,
      ayahs: [
        { numberInSurah: 1, textArabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', textUrdu: 'کہہ دیجیے کہ وہ اللہ ایک ہے۔', textEnglish: 'Say, "He is Allah, [who is] One,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6222.mp3' },
        { numberInSurah: 2, textArabic: 'اللَّهُ الصَّمَدُ', textUrdu: 'اللہ بے نیاز ہے۔', textEnglish: 'Allah, the Eternal Refuge.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6223.mp3' },
        { numberInSurah: 3, textArabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', textUrdu: 'نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔', textEnglish: 'He neither begets nor is born,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6224.mp3' },
        { numberInSurah: 4, textArabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', textUrdu: 'اور کوئی اس کا ہمسر نہیں۔', textEnglish: 'Nor is there to Him any equivalent."', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6225.mp3' }
      ]
    },
    {
      id: 'surah-113',
      number: 113,
      nameArabic: 'سُورَةُ الْفَلَق',
      nameEnglish: 'Al-Falaq',
      nameUrdu: 'سورۃ الفلق',
      meaningEnglish: 'The Daybreak',
      versesCount: 5,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/113.mp3',
      order: 3,
      ayahs: [
        { numberInSurah: 1, textArabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', textUrdu: 'آپ کہہ دیجیے کہ میں صبح کے رب کی پناہ مانگتا ہوں۔', textEnglish: 'Say, "I seek refuge in the Lord of daybreak,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6226.mp3' },
        { numberInSurah: 2, textArabic: 'مِن شَرِّ مَا خَلَقَ', textUrdu: 'ہر اس چیز کی برائی سے جو اس نے پیدا کی۔', textEnglish: 'From the evil of that which He created,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6227.mp3' },
        { numberInSurah: 3, textArabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', textUrdu: 'اور اندھیری رات کی برائی سے جب وہ چھا جائے۔', textEnglish: 'And from the evil of darkness when it settles,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6228.mp3' },
        { numberInSurah: 4, textArabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', textUrdu: 'اور گرہوں میں پھونکنے والیوں کی برائی سے۔', textEnglish: 'And from the evil of the blowers in knots,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6229.mp3' },
        { numberInSurah: 5, textArabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', textUrdu: 'اور حسد کرنے والے کی برائی سے جب وہ حسد کرے۔', textEnglish: 'And from the evil of an envier when he envies."', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6230.mp3' }
      ]
    },
    {
      id: 'surah-114',
      number: 114,
      nameArabic: 'سُورَةُ النَّاس',
      nameEnglish: 'An-Nas',
      nameUrdu: 'سورۃ الناس',
      meaningEnglish: 'Mankind',
      versesCount: 6,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/114.mp3',
      order: 4,
      ayahs: [
        { numberInSurah: 1, textArabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', textUrdu: 'آپ کہہ دیجیے کہ میں انسانوں کے رب کی پناہ میں آتا ہوں۔', textEnglish: 'Say, "I seek refuge in the Lord of mankind,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6231.mp3' },
        { numberInSurah: 2, textArabic: 'مَلِكِ النَّاسِ', textUrdu: 'جو انسانوں کا بادشاہ ہے۔', textEnglish: 'The Sovereign of mankind.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6232.mp3' },
        { numberInSurah: 3, textArabic: 'إِلَٰهِ النَّاسِ', textUrdu: 'جو انسانوں کا معبودِ برحق ہے۔', textEnglish: 'The God of mankind,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6233.mp3' },
        { numberInSurah: 4, textArabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', textUrdu: 'وسوسہ ڈالنے والے، پیچھے ہٹ جانے والے شیطان کے شر سے۔', textEnglish: 'From the evil of the retreating whisperer -', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6234.mp3' },
        { numberInSurah: 5, textArabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', textUrdu: 'جو لوگوں کے سینوں میں وسوسے ڈالتا ہے۔', textEnglish: 'Who whispers [evil] into the breasts of mankind -', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6235.mp3' },
        { numberInSurah: 6, textArabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', textUrdu: 'خواہ وہ جنات میں سے ہو یا انسانوں میں سے۔', textEnglish: 'From among the jinn and mankind."', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6236.mp3' }
      ]
    },
    {
      id: 'surah-108',
      number: 108,
      nameArabic: 'سُورَةُ الْكَوْثَر',
      nameEnglish: 'Al-Kawthar',
      nameUrdu: 'سورۃ الکوثر',
      meaningEnglish: 'The Abundance',
      versesCount: 3,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/108.mp3',
      order: 5,
      ayahs: [
        { numberInSurah: 1, textArabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', textUrdu: 'بے شک ہم نے آپ کو کوثر (بے انتہا بھلائی) عطا فرمائی۔', textEnglish: 'Indeed, We have granted you, [O Muhammad], al-Kawthar.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6205.mp3' },
        { numberInSurah: 2, textArabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', textUrdu: 'پس آپ اپنے رب کے لیے نماز پڑھیں اور قربانی کریں۔', textEnglish: 'So pray to your Lord and sacrifice [to Him alone].', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6206.mp3' },
        { numberInSurah: 3, textArabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ', textUrdu: 'یقیناً آپ کا دشمن ہی بے نام و نشان رہنے والا ہے۔', textEnglish: 'Indeed, your enemy is the one cut off.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6207.mp3' }
      ]
    },
    {
      id: 'surah-103',
      number: 103,
      nameArabic: 'سُورَةُ الْعَصْر',
      nameEnglish: 'Al-Asr',
      nameUrdu: 'سورۃ العصر',
      meaningEnglish: 'The Declining Day',
      versesCount: 3,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/103.mp3',
      order: 6,
      ayahs: [
        { numberInSurah: 1, textArabic: 'وَالْعَصْرِ', textUrdu: 'قسم ہے زمانے کی!', textEnglish: 'By time,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6177.mp3' },
        { numberInSurah: 2, textArabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', textUrdu: 'بے شک تمام انسان خسارے میں ہیں۔', textEnglish: 'Indeed, mankind is in loss,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6178.mp3' },
        { numberInSurah: 3, textArabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', textUrdu: 'سوائے ان لوگوں کے جو ایمان لائے اور نیک عمل کیے اور ایک دوسرے کو حق کی وصیت اور صبر کی تلقین کی۔', textEnglish: 'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6179.mp3' }
      ]
    }
  ],
  islamicItems: [
    // Six Kalimas
    {
      id: 'kalima-1',
      category: 'kalimas',
      title: 'First Kalima — Tayyab (Purity)',
      titleArabic: 'الْكَلِمَةُ الطَّيِّبَة',
      arabicText: 'لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ',
      pronunciation: 'Laa ilaaha illal Lahoo Mohammadur Rasool Ul Laah',
      translationEnglish: 'There is no god worthy of worship except Allah, and Muhammad is the Messenger of Allah.',
      translationUrdu: 'اللہ کے سوا کوئی معبود نہیں، محمد صلی اللہ علیہ وسلم اللہ کے رسول ہیں۔',
      translationHindi: 'अल्लाह के सिवा कोई इबादत के लायक नहीं, हज़रत मुहम्मद (सल्लल्लाहु अलैहि वसल्लम) अल्लाह के रसूल हैं।',
      explanation: 'The foundation of Islamic belief and faith in the oneness of Allah.',
      order: 1
    },
    {
      id: 'kalima-2',
      category: 'kalimas',
      title: 'Second Kalima — Shahadat (Evidence)',
      titleArabic: 'كَلِمَةُ الشَّهَادَة',
      arabicText: 'أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
      pronunciation: 'Ash-hadu an laa ilaaha illal-lahu wahdahu laa shareeka lahu wa ash-hadu anna Muhammadan \'abduhu wa rasooluh',
      translationEnglish: 'I bear witness that there is no deity except Allah alone without partner, and I bear witness that Muhammad is His servant and Messenger.',
      translationUrdu: 'میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں وہ اکیلا ہے اس کا کوئی شریک نہیں اور میں گواہی دیتا ہوں کہ محمد (صلی اللہ علیہ وسلم) اس کے بندے اور رسول ہیں۔',
      translationHindi: 'मैं गवाही देता हूँ कि अल्लाह के सिवा कोई इबादत के लायक नहीं, वह अकेला है उसका कोई साझीदार नहीं, और मुहम्मद (सल्ल.) उसके बन्दे और रसूल हैं।',
      explanation: 'Declaration of Faith witnessed with heart and tongue.',
      order: 2
    },
    {
      id: 'kalima-3',
      category: 'kalimas',
      title: 'Third Kalima — Tamjeed (Glory of Allah)',
      titleArabic: 'كَلِمَةُ التَّمْجِيد',
      arabicText: 'سُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ',
      pronunciation: 'Subhanallaahi wal hamdu lillaahi wa laa ilaaha illal laahu wallaahu Akbar, wa laa hawla wa laa quwwata illaa billaahil \'aliyyil \'azeem',
      translationEnglish: 'Glory be to Allah, all praise is due to Allah, there is no god but Allah, Allah is the Greatest, and there is no power or strength except with Allah, the Most High, the Supreme.',
      translationUrdu: 'اللہ پاک ہے اور سب تعریف اللہ ہی کے لیے ہے اور اللہ کے سوا کوئی معبود نہیں اور اللہ سب سے بڑا ہے، اور گناہوں سے بچنے کی طاقت اور نیکی کی قوت صرف اللہ ہی کی توفیق سے ہے۔',
      translationHindi: 'अल्लाह पाक है और सब तारीफें अल्लाह ही के लिए हैं, और अल्लाह के सिवा कोई माबूद नहीं, और अल्लाह सबसे बड़ा है।',
      explanation: 'Glorifying and praising Allah with the most beautiful words.',
      order: 3
    },
    {
      id: 'kalima-4',
      category: 'kalimas',
      title: 'Fourth Kalima — Tauheed (Oneness)',
      titleArabic: 'كَلِمَةُ التَّوْحِيد',
      arabicText: 'لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ أَبَدًا أَبَدًا، ذُو الْجَلَالِ وَالْإِكْرَامِ، بِيَدِهِ الْخَيْرُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
      pronunciation: 'Laa ilaaha illal-lahu wahdahu laa shareeka lahu, lahul mulku wa lahul hamdu, yuhyee wa yumeetu wa huwa hayyun laa yamootu abadan abada, dhul jalaali wal ikraam, biyadihil khayr, wa huwa \'ala kulli shay\'in qadeer',
      translationEnglish: 'There is no god but Allah alone, Who has no partner. His is the dominion and His is the praise. He gives life and causes death, and He is Alive and never dies. Possessor of Majesty and Honor, in His hand is all goodness, and He has power over all things.',
      translationUrdu: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کے لیے تمام تعریفیں ہیں، وہی جلاتا ہے اور وہی مارتا ہے، وہ ہمیشہ زندہ رہنے والا ہے کبھی نہیں مرے گا، بزرگی اور عزت والا ہے، بھلائی اسی کے ہاتھ میں ہے اور وہ ہر چیز پر قادر ہے۔',
      translationHindi: 'अल्लाह के सिवा कोई माबूद नहीं, वह अकेला है, उसका कोई साझी नहीं, उसी का मुल्क है और उसी के लिए सारी तारीफें हैं।',
      order: 4
    },
    {
      id: 'kalima-5',
      category: 'kalimas',
      title: 'Fifth Kalima — Astaghfar (Forgiveness)',
      titleArabic: 'كَلِمَةُ الِاسْتِغْفَار',
      arabicText: 'أَسْتَغْفِرُ اللهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمَدًا أَوْ خَطَأً، سِرًّا أَوْ عَلَانِيَةً، وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ وَسَتَّارُ الْعُيُوبِ وَغَفَّارُ الذُّنُوبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ',
      pronunciation: 'Astaghfirullah Rabbi min kulli zambin aznabtuhu \'amadan aw khata-an sirran aw \'alaniyataw wa atoobu ilayhi...',
      translationEnglish: 'I seek forgiveness from Allah, my Lord, for every sin I committed intentionally or mistakenly, secretly or openly, and I turn to Him in repentance...',
      translationUrdu: 'میں اللہ سے اپنے تمام گناہوں کی معافی مانگتا ہوں جو میں نے جان بوجھ کر کیے یا بھول کر، چھپ کر کیے یا کھل کر...',
      translationHindi: 'मैं अपने रब अल्लाह से अपने हर गुनाह की माफी मांगता हूँ...',
      order: 5
    },
    {
      id: 'kalima-6',
      category: 'kalimas',
      title: 'Sixth Kalima — Rad-e-Kufr (Rejection of Disbelief)',
      titleArabic: 'كَلِمَةُ رَدِّ الْكُفْر',
      arabicText: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ، تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكِذْبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا، وَأَسْلَمْتُ وَأَقُولُ لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ',
      pronunciation: 'Allahumma innee a\'oodhu bika min an ushrika bika shay-an wa-ana a\'lamu bihee wa-astaghfiruka limaa laa a\'lamu bihee...',
      translationEnglish: 'O Allah! I seek protection in You from that I should join any partner with You knowingly, and I ask Your forgiveness from that which I do not know...',
      translationUrdu: 'اے اللہ! میں تیری پناہ مانگتا ہوں اس بات سے کہ میں جان بوجھ کر کسی کو تیرا شریک ٹھہراؤں، اور تجھ سے معافی مانگتا ہوں اس بات کی جسے میں نہیں جانتا...',
      translationHindi: 'ऐ अल्लाह! मैं तेरी पनाह मांगता हूँ इस बात से कि मैं जान-बूझकर किसी को तेरा शरीक ठहराऊँ...',
      order: 6
    },

    // Wudu Learning
    {
      id: 'wudu-guide',
      category: 'wudu',
      title: 'How to Perform Wudu (Ablution) Step-by-Step',
      titleArabic: 'كَيْفِيَّةُ الْوُضُوء',
      arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      translationEnglish: 'Step-by-step simple visual guide to make Wudu cleanly and correctly for kids.',
      translationUrdu: 'بچوں کے لیے وضو کرنے کا مکمل اور آسان تصویری طریقہ۔',
      translationHindi: 'बच्चों के लिए वुज़ू करने का आसान और मुकम्मल तरीका।',
      explanation: 'Wudu cleans our body and prepares our heart for prayer before Allah.',
      steps: [
        { stepNumber: 1, title: 'Intention (Niyyah) & Bismillah', description: 'Make intention in heart for Wudu and say "Bismillah-ir-Rahman-ir-Raheem".', arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' },
        { stepNumber: 2, title: 'Wash Hands (3 Times)', description: 'Wash both hands up to the wrists thoroughly 3 times, cleaning between fingers.', arabicText: 'غَسْلُ الْيَدَيْنِ' },
        { stepNumber: 3, title: 'Rinse Mouth (3 Times)', description: 'Take clean water in your right hand, rinse your mouth gently 3 times.', arabicText: 'الْمَضْمَضَةُ' },
        { stepNumber: 4, title: 'Clean Nose (3 Times)', description: 'Sniff water gently into nostrils with right hand and blow out with left hand 3 times.', arabicText: 'الِاسْتِنْشَاقُ' },
        { stepNumber: 5, title: 'Wash Entire Face (3 Times)', description: 'Wash face from forehead to chin and ear to ear completely 3 times.', arabicText: 'غَسْلُ الْوَجْهِ' },
        { stepNumber: 6, title: 'Wash Arms up to Elbows (3 Times)', description: 'Wash right arm including elbow 3 times, then left arm 3 times.', arabicText: 'غَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ' },
        { stepNumber: 7, title: 'Wipe Head & Ears (Masah - 1 Time)', description: 'Wipe wet hands over head from front to back, then wipe inside and back of ears.', arabicText: 'مَسْحُ الرَّأْسِ وَالْأُذُنَيْنِ' },
        { stepNumber: 8, title: 'Wash Both Feet up to Ankles (3 Times)', description: 'Wash right foot including ankle 3 times, then left foot 3 times, cleaning between toes.', arabicText: 'غَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ' }
      ],
      order: 7
    },

    // Salah / Namaz Guide
    {
      id: 'salah-guide',
      category: 'salah',
      title: 'How to Pray Salah (Namaz) Step-by-Step',
      titleArabic: 'تَعَلُّمُ الصَّلَاة',
      arabicText: 'حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ',
      translationEnglish: 'Complete children guide to standing, bowing, prostrating, and reciting in Salah.',
      translationUrdu: 'بچوں کے لیے نماز کا آسان اور مکمل طریقہ۔',
      translationHindi: 'बच्चों के लिए नमाज़ सीखने का सरल व सम्पूर्ण तरीका।',
      steps: [
        { stepNumber: 1, title: 'Takbeer Tahreemah', description: 'Stand facing Qiblah with pure intention. Raise hands to ears and say "Allahu Akbar".', arabicText: 'اللهُ أَكْبَرُ' },
        { stepNumber: 2, title: 'Qiyam (Standing) & Thana', description: 'Fold right hand over left below chest. Recite Thana: "Subhanakallahumma...", Surah Al-Fatiha, and another Surah.', arabicText: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ' },
        { stepNumber: 3, title: 'Ruku (Bowing)', description: 'Say "Allahu Akbar" and bow with hands on knees and flat back. Recite 3 times: "Subhana Rabbiyal Azeem".', arabicText: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ' },
        { stepNumber: 4, title: 'Qawmah (Standing straight up)', description: 'Rise straight from bowing saying "Sami Allahu liman hamidah", then "Rabbana lakal hamd".', arabicText: 'سَمِعَ اللهُ لِمَنْ حَمِدَهُ، رَبَّنَا لَكَ الْحَمْدُ' },
        { stepNumber: 5, title: 'Sajdah (Prostration)', description: 'Say "Allahu Akbar" and prostrate with forehead, nose, palms, knees, and toes on ground. Recite 3 times: "Subhana Rabbiyal A\'la".', arabicText: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ' },
        { stepNumber: 6, title: 'Jalsah (Sitting between Sajdahs)', description: 'Sit up straight saying "Allahu Akbar", then perform second Sajdah the same way.', arabicText: 'رَبِّ اغْفِرْ لِي' },
        { stepNumber: 7, title: 'Tashahhud (Sitting for Attahiyyat)', description: 'Sit peacefully and recite: "Attahiyyatu Lillahi was-salawatu wat-tayyibat..." followed by Durood Ibrahim.', arabicText: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ' },
        { stepNumber: 8, title: 'Tasleem (Concluding the prayer)', description: 'Turn face to right saying "Assalamu alaykum wa rahmatullah", then to left saying same.', arabicText: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ' }
      ],
      order: 8
    },

    // Daily Duas
    {
      id: 'dua-before-eating',
      category: 'duas',
      title: 'Dua Before Eating Food',
      titleArabic: 'دُعَاءُ قَبْلَ الطَّعَام',
      arabicText: 'بِسْمِ اللَّهِ وَعَلَىٰ بَرَكَةِ اللَّهِ',
      pronunciation: 'Bismillahi wa \'ala barakatillah',
      translationEnglish: 'In the name of Allah and upon the blessings of Allah.',
      translationUrdu: 'اللہ کے نام کے ساتھ اور اللہ کی برکت پر (میں کھانا شروع کرتا ہوں)۔',
      translationHindi: 'अल्लाह के नाम से और अल्लाह की बरकत पर।',
      order: 9
    },
    {
      id: 'dua-after-eating',
      category: 'duas',
      title: 'Dua After Finishing Food',
      titleArabic: 'دُعَاءُ بَعْدَ الطَّعَام',
      arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
      pronunciation: 'Alhamdu lillahilladhi at\'amana wa saqana wa ja\'alana muslimeen',
      translationEnglish: 'All praise is due to Allah Who gave us food and drink and made us Muslims.',
      translationUrdu: 'تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمان بنایا۔',
      translationHindi: 'तमाम तारीफें अल्लाह के लिए हैं जिसने हमें खिलाया, पिलाया और हमें मुसलमान बनाया।',
      order: 10
    },
    {
      id: 'dua-sleeping',
      category: 'duas',
      title: 'Dua Before Sleeping',
      titleArabic: 'دُعَاءُ النَّوْم',
      arabicText: 'اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا',
      pronunciation: 'Allahumma bismika amootu wa ahya',
      translationEnglish: 'O Allah, in Your name I die (sleep) and I live (wake up).',
      translationUrdu: 'اے اللہ! تیرے ہی نام کے ساتھ میں مرتا ہوں اور جیتا ہوں۔',
      translationHindi: 'ऐ अल्लाह! तेरे ही नाम से मैं सोता हूँ और जागता हूँ।',
      order: 11
    },
    {
      id: 'dua-waking',
      category: 'duas',
      title: 'Dua After Waking Up',
      titleArabic: 'دُعَاءُ الِاسْتِيقَاظ',
      arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
      pronunciation: 'Alhamdu lillahilladhi ahyana ba\'da ma amatana wa ilayhin-nushoor',
      translationEnglish: 'All praise is due to Allah Who brought us to life after causing us to die, and to Him is the final return.',
      translationUrdu: 'تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مارنے کے بعد زندہ کیا اور اسی کی طرف لوٹ کر جانا ہے۔',
      translationHindi: 'सब तारीफें अल्लाह के लिए हैं जिसने हमें मौत (नींद) के बाद जिंदगी दी और उसी की तरफ उठना है।',
      order: 12
    },
    {
      id: 'dua-parents',
      category: 'duas',
      title: 'Dua for Parents (Mother & Father)',
      titleArabic: 'دُعَاءُ الْوَالِدَيْن',
      arabicText: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      pronunciation: 'Rabbir hamhuma kama rabbayani sagheera',
      translationEnglish: 'My Lord, have mercy upon them both as they raised me when I was small.',
      translationUrdu: 'اے میرے پروردگار! تو ان دونوں پر رحم فرما جس طرح انہوں نے بچپن میں میری پرورش فرمائی۔',
      translationHindi: 'ऐ मेरे रब! तू मेरे वालिदैन पर रहम फरमा जैसा कि उन्होंने मुझे बचपन में पाला।',
      order: 13
    },
    {
      id: 'dua-knowledge',
      category: 'duas',
      title: 'Dua for Increasing Knowledge',
      titleArabic: 'دُعَاءُ زِيَادَةِ الْعِلْم',
      arabicText: 'رَّبِّ زِدْنِي عِلْمًا',
      pronunciation: 'Rabbi zidnee \'ilma',
      translationEnglish: 'My Lord, increase me in knowledge.',
      translationUrdu: 'اے میرے رب! میرے علم میں اضافہ فرما۔',
      translationHindi: 'ऐ मेरे रब! मेरे इल्म (ज्ञान) में इज़ाफ़ा फरमा।',
      order: 14
    }
  ],
  mathItems: [
    // Numbers 1 to 100 sample (full numbers logic generated on client, with top seeds)
    { id: 'm-num-1', type: 'number', number: 1, nameEn: 'One', nameHi: 'एक (Ek)', nameUr: 'ایک (Aik)', audioUrl: '', order: 1 },
    { id: 'm-num-2', type: 'number', number: 2, nameEn: 'Two', nameHi: 'दो (Do)', nameUr: 'دو (Do)', audioUrl: '', order: 2 },
    { id: 'm-num-3', type: 'number', number: 3, nameEn: 'Three', nameHi: 'तीन (Teen)', nameUr: 'تین (Teen)', audioUrl: '', order: 3 },
    { id: 'm-num-4', type: 'number', number: 4, nameEn: 'Four', nameHi: 'चार (Chaar)', nameUr: 'چار (Chaar)', audioUrl: '', order: 4 },
    { id: 'm-num-5', type: 'number', number: 5, nameEn: 'Five', nameHi: 'पाँच (Paanch)', nameUr: 'پانچ (Paanch)', audioUrl: '', order: 5 },
    { id: 'm-num-6', type: 'number', number: 6, nameEn: 'Six', nameHi: 'छह (Chhah)', nameUr: 'چھ (Chhay)', audioUrl: '', order: 6 },
    { id: 'm-num-7', type: 'number', number: 7, nameEn: 'Seven', nameHi: 'सात (Saat)', nameUr: 'سات (Saat)', audioUrl: '', order: 7 },
    { id: 'm-num-8', type: 'number', number: 8, nameEn: 'Eight', nameHi: 'आठ (Aath)', nameUr: 'آٹھ (Aath)', audioUrl: '', order: 8 },
    { id: 'm-num-9', type: 'number', number: 9, nameEn: 'Nine', nameHi: 'नौ (Nau)', nameUr: 'نو (Nau)', audioUrl: '', order: 9 },
    { id: 'm-num-10', type: 'number', number: 10, nameEn: 'Ten', nameHi: 'दस (Das)', nameUr: 'دس (Das)', audioUrl: '', order: 10 },

    // Multiplication Tables 2 to 20
    {
      id: 'm-tab-2',
      type: 'table',
      tableNumber: 2,
      tableRows: [
        { factor: 1, result: 2, audioEn: '2 times 1 is 2', audioHi: 'दो एकम दो', audioUr: 'دو ایکم دو' },
        { factor: 2, result: 4, audioEn: '2 times 2 is 4', audioHi: 'दो दूनी चार', audioUr: 'دو دونی چار' },
        { factor: 3, result: 6, audioEn: '2 times 3 is 6', audioHi: 'दो तीया छह', audioUr: 'دو تیا چھ' },
        { factor: 4, result: 8, audioEn: '2 times 4 is 8', audioHi: 'दो चौके आठ', audioUr: 'دو چوکے آٹھ' },
        { factor: 5, result: 10, audioEn: '2 times 5 is 10', audioHi: 'दो पंजे दस', audioUr: 'دو پنجے دس' },
        { factor: 6, result: 12, audioEn: '2 times 6 is 12', audioHi: 'दो छक्के बारह', audioUr: 'دو چھکے بارہ' },
        { factor: 7, result: 14, audioEn: '2 times 7 is 14', audioHi: 'दो सत्ते चौदह', audioUr: 'دو ستے چودہ' },
        { factor: 8, result: 16, audioEn: '2 times 8 is 16', audioHi: 'दो अठे सोलह', audioUr: 'دو اٹھے سولہ' },
        { factor: 9, result: 18, audioEn: '2 times 9 is 18', audioHi: 'दो निम्मे अठारह', audioUr: 'دو نمے اٹھارہ' },
        { factor: 10, result: 20, audioEn: '2 times 10 is 20', audioHi: 'दो दहाम बीस', audioUr: 'دو دہائے بیس' }
      ],
      order: 11
    },
    {
      id: 'm-tab-3',
      type: 'table',
      tableNumber: 3,
      tableRows: [
        { factor: 1, result: 3, audioEn: '3 times 1 is 3', audioHi: 'तीन एकम तीन', audioUr: 'تین ایکم تین' },
        { factor: 2, result: 6, audioEn: '3 times 2 is 6', audioHi: 'तीन दूनी छह', audioUr: 'تین دونی چھ' },
        { factor: 3, result: 9, audioEn: '3 times 3 is 9', audioHi: 'तीन तीया नौ', audioUr: 'تین تیا نو' },
        { factor: 4, result: 12, audioEn: '3 times 4 is 12', audioHi: 'तीन चौके बारह', audioUr: 'تین چوکے بارہ' },
        { factor: 5, result: 15, audioEn: '3 times 5 is 15', audioHi: 'तीन पंजे पंद्रह', audioUr: 'تین پنجے پندرہ' },
        { factor: 6, result: 18, audioEn: '3 times 6 is 18', audioHi: 'तीन छक्के अठारह', audioUr: 'تین چھکے اٹھارہ' },
        { factor: 7, result: 21, audioEn: '3 times 7 is 21', audioHi: 'तीन सत्ते इक्कीस', audioUr: 'تین ستے اکیس' },
        { factor: 8, result: 24, audioEn: '3 times 8 is 24', audioHi: 'तीन अठे चौबीस', audioUr: 'تین اٹھے چوبیس' },
        { factor: 9, result: 27, audioEn: '3 times 9 is 27', audioHi: 'तीन निम्मे सत्ताईस', audioUr: 'تین نمے ستائیس' },
        { factor: 10, result: 30, audioEn: '3 times 10 is 30', audioHi: 'तीन दहाम तीस', audioUr: 'تین دہائے تیس' }
      ],
      order: 12
    },
    {
      id: 'm-tab-5',
      type: 'table',
      tableNumber: 5,
      tableRows: [
        { factor: 1, result: 5, audioEn: '5 times 1 is 5', audioHi: 'पाँच एकम पाँच', audioUr: 'پانچ ایکم پانچ' },
        { factor: 2, result: 10, audioEn: '5 times 2 is 10', audioHi: 'पाँच दूनी दस', audioUr: 'پانچ دونی دس' },
        { factor: 3, result: 15, audioEn: '5 times 3 is 15', audioHi: 'पाँच तीया पंद्रह', audioUr: 'پانچ تیا پندرہ' },
        { factor: 4, result: 20, audioEn: '5 times 4 is 20', audioHi: 'पाँच चौके बीस', audioUr: 'پانچ چوکے بیس' },
        { factor: 5, result: 25, audioEn: '5 times 5 is 25', audioHi: 'पाँच पंजे पच्चीस', audioUr: 'پانچ پنجے پچیس' },
        { factor: 6, result: 30, audioEn: '5 times 6 is 30', audioHi: 'पाँच छक्के तीस', audioUr: 'پانچ چھکے تیس' },
        { factor: 7, result: 35, audioEn: '5 times 7 is 35', audioHi: 'पाँच सत्ते पैंतीस', audioUr: 'پانچ ستے پینتیس' },
        { factor: 8, result: 40, audioEn: '5 times 8 is 40', audioHi: 'पाँच अठे चालीस', audioUr: 'پانچ اٹھے چالیس' },
        { factor: 9, result: 45, audioEn: '5 times 9 is 45', audioHi: 'पाँच निम्मे पैंतालीस', audioUr: 'پانچ نمے پینتالیس' },
        { factor: 10, result: 50, audioEn: '5 times 10 is 50', audioHi: 'पाँच दहाम पचास', audioUr: 'پانچ دہائے پچاس' }
      ],
      order: 13
    },

    // Arithmetic Problems
    {
      id: 'm-add-1',
      type: 'arithmetic',
      question: '2 + 3 = ?',
      num1: 2,
      num2: 3,
      operator: '+',
      answer: 5,
      options: [4, 5, 6, 7],
      visualObject: '🍎',
      difficulty: 'beginner',
      order: 14
    },
    {
      id: 'm-add-2',
      type: 'arithmetic',
      question: '4 + 4 = ?',
      num1: 4,
      num2: 4,
      operator: '+',
      answer: 8,
      options: [6, 7, 8, 9],
      visualObject: '⭐',
      difficulty: 'beginner',
      order: 15
    },
    {
      id: 'm-sub-1',
      type: 'arithmetic',
      question: '5 - 2 = ?',
      num1: 5,
      num2: 2,
      operator: '-',
      answer: 3,
      options: [2, 3, 4, 1],
      visualObject: '🎈',
      difficulty: 'beginner',
      order: 16
    },
    {
      id: 'm-sub-2',
      type: 'arithmetic',
      question: '8 - 3 = ?',
      num1: 8,
      num2: 3,
      operator: '-',
      answer: 5,
      options: [4, 5, 6, 7],
      visualObject: '🚗',
      difficulty: 'beginner',
      order: 17
    },
    {
      id: 'm-mul-1',
      type: 'arithmetic',
      question: '2 × 3 = ?',
      num1: 2,
      num2: 3,
      operator: '×',
      answer: 6,
      options: [5, 6, 7, 8],
      visualObject: '🌸',
      difficulty: 'intermediate',
      order: 18
    },
    {
      id: 'm-mul-2',
      type: 'arithmetic',
      question: '4 × 3 = ?',
      num1: 4,
      num2: 3,
      operator: '×',
      answer: 12,
      options: [10, 11, 12, 14],
      visualObject: '🍬',
      difficulty: 'intermediate',
      order: 19
    },
    {
      id: 'm-div-1',
      type: 'arithmetic',
      question: '6 ÷ 2 = ?',
      num1: 6,
      num2: 2,
      operator: '÷',
      answer: 3,
      options: [2, 3, 4, 5],
      visualObject: '🍕',
      difficulty: 'intermediate',
      order: 20
    },
    {
      id: 'm-div-2',
      type: 'arithmetic',
      question: '10 ÷ 5 = ?',
      num1: 10,
      num2: 5,
      operator: '÷',
      answer: 2,
      options: [1, 2, 3, 4],
      visualObject: '🍪',
      difficulty: 'intermediate',
      order: 21
    }
  ],
  gkItems: [
    // Indian States & Capitals
    {
      id: 'gk-state-1',
      category: 'states',
      titleEn: 'Bihar',
      titleHi: 'बिहार',
      titleUr: 'بہار',
      capitalEn: 'Patna',
      capitalHi: 'पटना',
      capitalUr: 'پٹنہ',
      detailEn: 'Famous for Nalanda University and ancient historic heritage.',
      detailHi: 'प्राचीन नालंदा विश्वविद्यालय और ऐतिहासिक विरासत के लिए प्रसिद्ध।',
      detailUr: 'نالندہ یونیورسٹی اور قدیم تاریخی ورثے کے لیے مشہور۔',
      imageUrl: '🏛️',
      order: 1
    },
    {
      id: 'gk-state-2',
      category: 'states',
      titleEn: 'Uttar Pradesh',
      titleHi: 'उत्तर प्रदेश',
      titleUr: 'اتر پردیش',
      capitalEn: 'Lucknow',
      capitalHi: 'लखनऊ',
      capitalUr: 'لکھنؤ',
      detailEn: 'The most populous state of India, famous for Taj Mahal in Agra.',
      detailHi: 'भारत का सबसे अधिक जनसंख्या वाला राज्य, आगरा के ताजमहल के लिए प्रसिद्ध।',
      detailUr: 'آبادی کے لحاظ سے بھارت کی سب سے بڑی ریاست، تاج محل کے لیے مشہور۔',
      imageUrl: '🕌',
      order: 2
    },
    {
      id: 'gk-state-3',
      category: 'states',
      titleEn: 'Maharashtra',
      titleHi: 'महाराष्ट्र',
      titleUr: 'مہاراشٹر',
      capitalEn: 'Mumbai',
      capitalHi: 'मुंबई',
      capitalUr: 'ممبئی',
      detailEn: 'Financial capital of India, famous for Gateway of India.',
      detailHi: 'भारत की आर्थिक राजधानी, गेटवे ऑफ इंडिया के लिए प्रसिद्ध।',
      detailUr: 'بھارت کا معاشی دارالحکومت، گیٹ وے آف انڈیا کے لیے مشہور۔',
      imageUrl: '🌆',
      order: 3
    },
    {
      id: 'gk-state-4',
      category: 'states',
      titleEn: 'West Bengal',
      titleHi: 'पश्चिम बंगाल',
      titleUr: 'مغربی بنگال',
      capitalEn: 'Kolkata',
      capitalHi: 'कोलकाता',
      capitalUr: 'کولکتہ',
      detailEn: 'City of Joy, famous for Victoria Memorial and Royal Bengal Tigers.',
      detailHi: 'विक्टोरिया मेमोरियल और रॉयल बंगाल टाइगर के लिए प्रसिद्ध।',
      detailUr: 'وکٹوریہ میموریل اور رائل بنگال ٹائیگر کے لیے مشہور۔',
      imageUrl: '🌉',
      order: 4
    },
    {
      id: 'gk-state-5',
      category: 'states',
      titleEn: 'Delhi (NCT)',
      titleHi: 'दिल्ली (राष्ट्रीय राजधानी क्षेत्र)',
      titleUr: 'دہلی (قومی دارالحکومت)',
      capitalEn: 'New Delhi (Capital of India)',
      capitalHi: 'नई दिल्ली (भारत की राजधानी)',
      capitalUr: 'نئی دہلی (دارالحکومت بھارت)',
      detailEn: 'The historic capital of India, home to Red Fort, India Gate, and Rashtrapati Bhavan.',
      detailHi: 'भारत की ऐतिहासिक राजधानी, लाल किला और इंडिया गेट का घर।',
      detailUr: 'بھارت کا تاریخی دارالحکومت، لال قلعہ اور انڈیا گیٹ۔',
      imageUrl: '🏰',
      order: 5
    },
    {
      id: 'gk-state-6',
      category: 'states',
      titleEn: 'Tamil Nadu',
      titleHi: 'तमिलनाडु',
      titleUr: 'تمل ناڈو',
      capitalEn: 'Chennai',
      capitalHi: 'चेन्नई',
      capitalUr: 'چنئی',
      detailEn: 'Famous for historic Dravidian temples and classical music.',
      detailHi: 'भव्य द्रविड़ मंदिरों और शास्त्रीय संस्कृति के लिए प्रसिद्ध।',
      detailUr: 'تاریخی دراوڑی مندروں اور ثقافت کے لیے مشہور۔',
      imageUrl: '🛕',
      order: 6
    },
    {
      id: 'gk-state-7',
      category: 'states',
      titleEn: 'Karnataka',
      titleHi: 'कर्नाटक',
      titleUr: 'کرناٹک',
      capitalEn: 'Bengaluru',
      capitalHi: 'बेंगलुरु',
      capitalUr: 'بنگلورو',
      detailEn: 'The Silicon Valley of India and science technology hub.',
      detailHi: 'भारत की सिलिकॉन वैली और विज्ञान-तकनीक का केंद्र।',
      detailUr: 'بھارت کی سلیکون ویلی اور سائنس و ٹیکنالوجی کا مرکز۔',
      imageUrl: '💻',
      order: 7
    },
    {
      id: 'gk-state-8',
      category: 'states',
      titleEn: 'Rajasthan',
      titleHi: 'राजस्थान',
      titleUr: 'راجستھان',
      capitalEn: 'Jaipur (Pink City)',
      capitalHi: 'जयपुर (गुलाबी नगर)',
      capitalUr: 'جے پور (گلابی شہر)',
      detailEn: 'The largest state by area in India, known for grand palaces and Thar Desert.',
      detailHi: 'क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य, महलों के लिए प्रसिद्ध।',
      detailUr: 'رقبے کے لحاظ سے سب سے بڑی ریاست، محلات اور صحرا کے لیے مشہور۔',
      imageUrl: '🏰',
      order: 8
    },

    // Prime Ministers of India
    {
      id: 'gk-pm-1',
      category: 'pms',
      titleEn: 'Pt. Jawaharlal Nehru',
      titleHi: 'पंडित जवाहरलाल नेहरू',
      titleUr: 'پنڈت جواہر لعل نہرو',
      tenure: '1947 – 1964',
      detailEn: 'First Prime Minister of independent India, lovingly called "Chacha Nehru" by children.',
      detailHi: 'स्वतंत्र भारत के प्रथम प्रधानमंत्री, जिन्हें बच्चे प्यार से "चाचा नेहरू" कहते हैं।',
      detailUr: 'آزاد بھارت کے پہلے وزیر اعظم، جنہیں بچے پیار سے "چاچا نہرو" کہتے تھے۔',
      imageUrl: '🌹',
      order: 9
    },
    {
      id: 'gk-pm-2',
      category: 'pms',
      titleEn: 'Lal Bahadur Shastri',
      titleHi: 'लाल बहादुर शास्त्री',
      titleUr: 'لال بہادر شاستری',
      tenure: '1964 – 1966',
      detailEn: 'Second Prime Minister, gave the inspiring slogan "Jai Jawan, Jai Kisan".',
      detailHi: 'भारत के दूसरे प्रधानमंत्री, जिन्होंने "जय जवान, जय किसान" का नारा दिया।',
      detailUr: 'دوسرے وزیر اعظم، جنہوں نے "جے جوان، جے کسان" کا مشہور نعرہ دیا۔',
      imageUrl: '🌾',
      order: 10
    },
    {
      id: 'gk-pm-3',
      category: 'pms',
      titleEn: 'Indira Gandhi',
      titleHi: 'इंदिरा गांधी',
      titleUr: 'اندرا گاندھی',
      tenure: '1966 – 1977, 1980 – 1984',
      detailEn: 'First female Prime Minister of India, known as the "Iron Lady".',
      detailHi: 'भारत की पहली महिला प्रधानमंत्री, जिन्हें "लौह महिला" कहा जाता है।',
      detailUr: 'بھارت کی پہلی خاتون وزیر اعظم، جنہیں آئرن لیڈی کہا جاتا ہے۔',
      imageUrl: '👩‍💼',
      order: 11
    },
    {
      id: 'gk-pm-4',
      category: 'pms',
      titleEn: 'Atal Bihari Vajpayee',
      titleHi: 'अटल बिहारी वाजपेयी',
      titleUr: 'اٹل بہاری واجپائی',
      tenure: '1996, 1998 – 2004',
      detailEn: 'Renowned poet and statesman who led India into the new millennium.',
      detailHi: 'प्रख्यात कवि एवं राजनेता, जिन्होंने भारत को नई सदी में नेतृत्व दिया।',
      detailUr: 'مشہور شاعر اور مدبر سیاستدان جنہوں نے بھارت کی قیادت کی۔',
      imageUrl: '📜',
      order: 12
    },
    {
      id: 'gk-pm-5',
      category: 'pms',
      titleEn: 'Dr. Manmohan Singh',
      titleHi: 'डॉ. मनमोहन सिंह',
      titleUr: 'ڈاکٹر منموہن سنگھ',
      tenure: '2004 – 2014',
      detailEn: 'Eminent economist and 13th Prime Minister of India.',
      detailHi: 'महान अर्थशास्त्री और भारत के 13वें प्रधानमंत्री।',
      detailUr: 'معروف ماہر اقتصادیات اور بھارت کے 13ویں وزیر اعظم۔',
      imageUrl: '🎓',
      order: 13
    },
    {
      id: 'gk-pm-6',
      category: 'pms',
      titleEn: 'Narendra Modi',
      titleHi: 'नरेंद्र मोदी',
      titleUr: 'نریندر مودی',
      tenure: '2014 – Present',
      detailEn: 'Current Prime Minister of India, promoting Digital India and Make in India.',
      detailHi: 'भारत के वर्तमान प्रधानमंत्री, जिन्होंने डिजिटल इंडिया और विकसित भारत की पहल की।',
      detailUr: 'بھارت کے موجودہ وزیر اعظم، ڈیجیٹل انڈیا کے علمبردار۔',
      imageUrl: '🇮🇳',
      order: 14
    },

    // Presidents of India
    {
      id: 'gk-pres-1',
      category: 'presidents',
      titleEn: 'Dr. Rajendra Prasad',
      titleHi: 'डॉ. राजेंद्र प्रसाद',
      titleUr: 'ڈاکٹر راجندر پرساد',
      tenure: '1950 – 1962',
      detailEn: 'First President of the Republic of India and President of the Constituent Assembly.',
      detailHi: 'गणतंत्र भारत के प्रथम राष्ट्रपति और संविधान सभा के अध्यक्ष।',
      detailUr: 'جمہوریہ بھارت کے پہلے صدر اور آئین ساز اسمبلی کے صدر۔',
      imageUrl: '🇮🇳',
      order: 15
    },
    {
      id: 'gk-pres-2',
      category: 'presidents',
      titleEn: 'Dr. A.P.J. Abdul Kalam',
      titleHi: 'डॉ. ए.पी.जे. अब्दुल कलाम',
      titleUr: 'ڈاکٹر اے پی جے عبد الکلام',
      tenure: '2002 – 2007',
      detailEn: '11th President, known as the "Missile Man of India" and the beloved "People\'s President".',
      detailHi: 'भारत के 11वें राष्ट्रपति, जिन्हें "मिसाइल मैन" और बच्चों का चहेता राष्ट्रपति कहा जाता है।',
      detailUr: 'بھارت کے 11ویں صدر، جنہیں "میزائل مین" اور عوام کا ہر دلعزیز صدر کہا جاتا ہے۔',
      imageUrl: '🚀',
      order: 16
    },
    {
      id: 'gk-pres-3',
      category: 'presidents',
      titleEn: 'Droupadi Murmu',
      titleHi: 'द्रौपदी मुर्मू',
      titleUr: 'دروپدی مرمو',
      tenure: '2022 – Present',
      detailEn: 'Current President of India and the first tribal woman to hold the highest constitutional office.',
      detailHi: 'भारत की वर्तमान राष्ट्रपति और सर्वोच्च पद संभालने वाली पहली जनजातीय महिला।',
      detailUr: 'بھارت کی موجودہ صدر اور پہلی قبائلی خاتون صدر۔',
      imageUrl: '👑',
      order: 17
    },

    // Important Ministers
    {
      id: 'gk-min-1',
      category: 'ministers',
      titleEn: 'Education Minister (Shiksha Mantri)',
      titleHi: 'शिक्षा मंत्री (केंद्रीय)',
      titleUr: 'وزیر تعلیم (بھارت)',
      detailEn: 'Dharmendra Pradhan — Head of Ministry of Education, shaping National Education Policy.',
      detailHi: 'धर्मेंद्र प्रधान — शिक्षा मंत्रालय के प्रमुख, राष्ट्रीय शिक्षा नीति के निर्माता।',
      detailUr: 'دھرمیندر پردھان — وزارت تعلیم کے سربراہ، نئی تعلیمی پالیسی کے نگران۔',
      imageUrl: '📚',
      order: 18
    },
    {
      id: 'gk-min-2',
      category: 'ministers',
      titleEn: 'Home Minister (Griha Mantri)',
      titleHi: 'गृह मंत्री',
      titleUr: 'وزیر داخلہ',
      detailEn: 'Amit Shah — Responsible for internal security and law enforcement of India.',
      detailHi: 'अमित शाह — आंतरिक सुरक्षा और देश की व्यवस्था के प्रमुख।',
      detailUr: 'امت شاہ — اندرونی سلامتی اور امن و امان کے ذمہ دار۔',
      imageUrl: '🛡️',
      order: 19
    },

    // National Symbols
    {
      id: 'gk-sym-1',
      category: 'symbols',
      titleEn: 'National Animal',
      titleHi: 'राष्ट्रीय पशु',
      titleUr: 'قومی جانور',
      detailEn: 'Royal Bengal Tiger (Symbol of grace, strength, and power)',
      detailHi: 'रॉयल बंगाल टाइगर (शक्ति और सुंदरता का प्रतीक)',
      detailUr: 'رائل بنگال ٹائیگر (طاقت اور خوبصورتی کی علامت)',
      imageUrl: '🐅',
      order: 20
    },
    {
      id: 'gk-sym-2',
      category: 'symbols',
      titleEn: 'National Bird',
      titleHi: 'राष्ट्रीय पक्षी',
      titleUr: 'قومی پرندہ',
      detailEn: 'Indian Peacock (Symbol of beauty and vibrant colors)',
      detailHi: 'भारतीय मोर (सुंदरता और रंगों का प्रतीक)',
      detailUr: 'بھارتی مور (خوبصورتی اور رنگ برنگے پنکھ)',
      imageUrl: '🦚',
      order: 21
    },
    {
      id: 'gk-sym-3',
      category: 'symbols',
      titleEn: 'National Flower',
      titleHi: 'राष्ट्रीय फूल',
      titleUr: 'قومی پھول',
      detailEn: 'Lotus (Kamal) — Sacred symbol of purity and auspiciousness',
      detailHi: 'कमल — पवित्रता और सुंदरता का प्रतीक',
      detailUr: 'کنول (لوٹس) — پاکیزگی اور خوبصورتی کی علامت',
      imageUrl: '🪷',
      order: 22
    },
    {
      id: 'gk-sym-4',
      category: 'symbols',
      titleEn: 'National Flag',
      titleHi: 'राष्ट्रीय ध्वज',
      titleUr: 'قومی پرچم',
      detailEn: 'Tiranga (Tricolor with Saffron, White, Green and Ashoka Chakra)',
      detailHi: 'तिरंगा (केसरिया, सफेद, हरा और 24 तीलियों वाला अशोक चक्र)',
      detailUr: 'ترنگا (زعفرانی، سفید، سبز اور 24 تیلیوں والا اشوک چکر)',
      imageUrl: '🇮🇳',
      order: 23
    }
  ],
  quizzes: [
    {
      id: 'quiz-en-alpha',
      title: 'English Alphabet Master Quiz',
      category: 'english',
      subsection: 'Alphabet A to Z',
      iconName: 'Sparkles',
      difficulty: 'beginner',
      isPublished: true,
      order: 1,
      questions: [
        {
          id: 'q-1',
          questionText: 'What letter comes immediately after "A"?',
          questionTextUrdu: 'حرف "A" کے فوراً بعد کون سا حرف آتا ہے؟',
          questionTextHindi: 'अक्षर "A" के ठीक बाद कौन सा अक्षर आता है?',
          options: ['C', 'B', 'D', 'E'],
          correctOptionIndex: 1,
          explanation: '"B" comes right after "A" in the English Alphabet.'
        },
        {
          id: 'q-2',
          questionText: 'Which word starts with the letter "C"?',
          questionTextUrdu: 'کون سا لفظ "C" سے شروع ہوتا ہے؟',
          questionTextHindi: 'कौन सा शब्द अक्षर "C" से शुरू होता है?',
          options: ['Dog', 'Apple', 'Cat', 'Ball'],
          correctOptionIndex: 2,
          explanation: '"Cat" starts with the letter C (C for Cat).'
        },
        {
          id: 'q-3',
          questionText: 'What is the last letter of the English alphabet?',
          questionTextUrdu: 'انگریزی حروف تہجی کا آخری حرف کیا ہے؟',
          questionTextHindi: 'अंग्रेजी वर्णमाला का अंतिम अक्षर क्या है?',
          options: ['Y', 'X', 'Z', 'W'],
          correctOptionIndex: 2,
          explanation: '"Z" is the 26th and final letter of the English Alphabet.'
        }
      ]
    },
    {
      id: 'quiz-ur-alpha',
      title: 'اردو حروف تہجی کوئز (Urdu Alphabet Quiz)',
      category: 'urdu',
      subsection: 'Urdu Letters',
      iconName: 'BookOpen',
      difficulty: 'beginner',
      isPublished: true,
      order: 2,
      questions: [
        {
          id: 'q-ur-1',
          questionText: 'اردو حروف تہجی کا پہلا حرف کون سا ہے؟',
          options: ['ب', 'الف (ا)', 'ت', 'ج'],
          correctOptionIndex: 1,
          explanation: 'الف (ا) اردو کا پہلا حرف ہے۔'
        },
        {
          id: 'q-ur-2',
          questionText: 'حرف "ب" سے کون سا لفظ بنتا ہے؟',
          options: ['بلی', 'طوطا', 'سیب', 'شیر'],
          correctOptionIndex: 0,
          explanation: 'بے سے بلی بنتا ہے۔'
        }
      ]
    },
    {
      id: 'quiz-ar-alpha',
      title: 'مُسَابَقَةُ الْحُرُوفِ الْعَرَبِيَّة (Arabic Alphabet Quiz)',
      category: 'arabic',
      subsection: 'Arabic Letters',
      iconName: 'Moon',
      difficulty: 'beginner',
      isPublished: true,
      order: 3,
      questions: [
        {
          id: 'q-ar-1',
          questionText: 'مَا هُوَ الْحَرْفُ الْأَوَّلُ فِي اللُّغَةِ الْعَرَبِيَّةِ؟',
          options: ['الْبَاء (ب)', 'الْأَلِف (أ)', 'التَّاء (ت)', 'الْجِيم (ج)'],
          correctOptionIndex: 1,
          explanation: 'الْأَلِف (أ) هُوَ الْحَرْفُ الْأَوَّلُ، مِثْلُ: أَسَد.'
        },
        {
          id: 'q-ar-2',
          questionText: 'كَلِمَةُ "بَيْت" تَبْدَأُ بِأَيِّ حَرْفٍ؟',
          options: ['أ', 'ب', 'ت', 'ث'],
          correctOptionIndex: 1,
          explanation: 'كَلِمَةُ بَيْت تَبْدَأُ بِحَرْفِ الْبَاء (ب).'
        }
      ]
    },
    {
      id: 'quiz-hi-alpha',
      title: 'हिंदी वर्णमाला क्विज (Hindi Alphabet Quiz)',
      category: 'hindi',
      subsection: 'Hindi Letters',
      iconName: 'Heart',
      difficulty: 'beginner',
      isPublished: true,
      order: 4,
      questions: [
        {
          id: 'q-hi-1',
          questionText: 'हिंदी वर्णमाला का पहला स्वर कौन सा है?',
          options: ['इ', 'अ', 'उ', 'क'],
          correctOptionIndex: 1,
          explanation: 'अ से अनार, यह हिंदी वर्णमाला का पहला स्वर है।'
        },
        {
          id: 'q-hi-2',
          questionText: '"कमल" शब्द किस अक्षर से शुरू होता है?',
          options: ['ख', 'ग', 'क', 'म'],
          correctOptionIndex: 2,
          explanation: 'कमल शब्द "क" अक्षर से शुरू होता है (क से कमल)।'
        }
      ]
    },
    {
      id: 'quiz-quran',
      title: 'Quran & Surahs Fun Quiz',
      category: 'quran',
      subsection: 'Surahs & Verses',
      iconName: 'Book',
      difficulty: 'beginner',
      isPublished: true,
      order: 5,
      questions: [
        {
          id: 'q-qur-1',
          questionText: 'What is the first Surah of the Holy Quran?',
          questionTextUrdu: 'قرآن پاک کی پہلی سورت کون سی ہے؟',
          questionTextHindi: 'पवित्र क़ुरआन की पहली सूरत कौन सी है?',
          options: ['Surah Al-Ikhlas', 'Surah Al-Baqarah', 'Surah Al-Fatiha', 'Surah An-Nas'],
          correctOptionIndex: 2,
          explanation: 'Surah Al-Fatiha (The Opening) is the first Surah of the Quran.'
        },
        {
          id: 'q-qur-2',
          questionText: 'How many Ayahs (verses) are there in Surah Al-Ikhlas?',
          questionTextUrdu: 'سورۃ الاخلاص میں کل کتنی آیات ہیں؟',
          questionTextHindi: 'सूरतुल इखलास में कुल कितनी आयतें हैं?',
          options: ['3', '4', '5', '7'],
          correctOptionIndex: 1,
          explanation: 'Surah Al-Ikhlas has 4 verses (Qul Huwa Allahu Ahad...).'
        }
      ]
    },
    {
      id: 'quiz-islamic',
      title: 'Islamic Studies & Kalimas Quiz',
      category: 'islamic',
      subsection: 'Faith & Prayers',
      iconName: 'Star',
      difficulty: 'beginner',
      isPublished: true,
      order: 6,
      questions: [
        {
          id: 'q-isl-1',
          questionText: 'What is the First Kalima called?',
          questionTextUrdu: 'پہلے کلمے کا نام کیا ہے؟',
          questionTextHindi: 'पहले कलिमे का नाम क्या है?',
          options: ['Kalima Shahadat', 'Kalima Tayyab', 'Kalima Tamjeed', 'Kalima Tauheed'],
          correctOptionIndex: 1,
          explanation: 'The First Kalima is called Kalima Tayyab (La ilaha illallah Muhammadur Rasulullah).'
        },
        {
          id: 'q-isl-2',
          questionText: 'What do we say before starting Wudu or eating food?',
          questionTextUrdu: 'وضو یا کھانا شروع کرنے سے پہلے ہم کیا پڑھتے ہیں؟',
          questionTextHindi: 'वुज़ू या खाना शुरू करने से पहले हम क्या कहते हैं?',
          options: ['Subhanallah', 'Alhamdulillah', 'Bismillah-ir-Rahman-ir-Raheem', 'Astaghfirullah'],
          correctOptionIndex: 2,
          explanation: 'We always begin with "Bismillah-ir-Rahman-ir-Raheem".'
        }
      ]
    },
    {
      id: 'quiz-math',
      title: 'Super Math Champions Quiz',
      category: 'math',
      subsection: 'Arithmetic & Tables',
      iconName: 'Calculator',
      difficulty: 'beginner',
      isPublished: true,
      order: 7,
      questions: [
        {
          id: 'q-mat-1',
          questionText: 'What is 5 + 3?',
          questionTextUrdu: '5 + 3 کتنا ہوتا ہے؟',
          questionTextHindi: '5 + 3 कितना होता है?',
          options: ['7', '8', '9', '6'],
          correctOptionIndex: 1,
          explanation: '5 + 3 = 8.'
        },
        {
          id: 'q-mat-2',
          questionText: 'What is 2 × 4?',
          questionTextUrdu: '2 × 4 کتنا ہوتا ہے؟',
          questionTextHindi: '2 × 4 कितना होता है?',
          options: ['6', '7', '8', '10'],
          correctOptionIndex: 2,
          explanation: '2 × 4 = 8.'
        },
        {
          id: 'q-mat-3',
          questionText: 'What is 10 - 4?',
          questionTextUrdu: '10 - 4 کتنا ہوتا ہے؟',
          questionTextHindi: '10 - 4 कितना होता है?',
          options: ['5', '6', '7', '4'],
          correctOptionIndex: 1,
          explanation: '10 - 4 = 6.'
        }
      ]
    },
    {
      id: 'quiz-gk',
      title: 'Incredible India & GK Challenge',
      category: 'gk',
      subsection: 'States, Capitals & Leaders',
      iconName: 'Globe',
      difficulty: 'beginner',
      isPublished: true,
      order: 8,
      questions: [
        {
          id: 'q-gk-1',
          questionText: 'What is the Capital of India?',
          questionTextUrdu: 'بھارت کا دارالحکومت کیا ہے؟',
          questionTextHindi: 'भारत की राजधानी क्या है?',
          options: ['Mumbai', 'New Delhi', 'Kolkata', 'Patna'],
          correctOptionIndex: 1,
          explanation: 'New Delhi is the national capital of India.'
        },
        {
          id: 'q-gk-2',
          questionText: 'What is the National Bird of India?',
          questionTextUrdu: 'بھارت کا قومی پرندہ کون سا ہے؟',
          questionTextHindi: 'भारत का राष्ट्रीय पक्षी कौन सा है?',
          options: ['Parrot', 'Peacock (Mor)', 'Eagle', 'Sparrow'],
          correctOptionIndex: 1,
          explanation: 'The Indian Peacock (Mor) is the National Bird of India.'
        },
        {
          id: 'q-gk-3',
          questionText: 'Who was the First Prime Minister of India?',
          questionTextUrdu: 'آزاد بھارت کے پہلے وزیر اعظم کون تھے؟',
          questionTextHindi: 'भारत के प्रथम प्रधानमंत्री कौन थे?',
          options: ['Pt. Jawaharlal Nehru', 'Lal Bahadur Shastri', 'Dr. APJ Abdul Kalam', 'Mahatma Gandhi'],
          correctOptionIndex: 0,
          explanation: 'Pt. Jawaharlal Nehru was the first Prime Minister of independent India.'
        }
      ]
    }
  ]
};
