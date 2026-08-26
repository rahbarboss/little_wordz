import { AppDatabase } from '../src/types.ts';

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
      id: 'surah-93',
      number: 93,
      nameArabic: 'سُورَةُ الضُّحَىٰ',
      nameEnglish: 'Ad-Duha',
      nameUrdu: 'سورۃ الضحیٰ',
      meaningEnglish: 'The Morning Hours',
      versesCount: 11,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3',
      order: 2,
      ayahs: [
        { numberInSurah: 1, textArabic: 'وَالضُّحَىٰ', textUrdu: 'قسم ہے چاشت کے وقت کی!', textEnglish: 'By the morning sunlight,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 2, textArabic: 'وَاللَّيْلِ إِذَا سَجَىٰ', textUrdu: 'اور رات کی جب وہ چھا جائے!', textEnglish: 'And by the night when it covers with darkness,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 3, textArabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ', textUrdu: 'آپ کے رب نے نہ تو آپ کو چھوڑا ہے اور نہ وہ ناراض ہوا ہے۔', textEnglish: 'Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you].', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 4, textArabic: 'وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ', textUrdu: 'اور یقیناً آخرت آپ کے لیے دنیا سے کہیں بہتر ہے۔', textEnglish: 'And the Hereafter is better for you than the first [life].', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 5, textArabic: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ', textUrdu: 'اور عنقریب آپ کا رب آپ کو اتنا عطا فرمائے گا کہ آپ خوش ہو جائیں گے۔', textEnglish: 'And your Lord is going to give you, and you will be satisfied.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 6, textArabic: 'أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ', textUrdu: 'کیا اس نے آپ کو یتیم پا کر پناہ نہیں دی؟', textEnglish: 'Did He not find you an orphan and give [you] refuge?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 7, textArabic: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ', textUrdu: 'اور اس نے آپ کو راستہ کی تلاش میں پایا تو سیدھا راستہ دکھایا۔', textEnglish: 'And He found you lost and guided [you],', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 8, textArabic: 'وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ', textUrdu: 'اور اس نے آپ کو ضرورت مند پایا تو غنی کر دیا۔', textEnglish: 'And He found you poor and made [you] self-sufficient.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 9, textArabic: 'فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ', textUrdu: 'پس آپ بھی یتیم پر سختی نہ کیجیے۔', textEnglish: 'So as for the orphan, do not oppress [him].', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 10, textArabic: 'وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ', textUrdu: 'اور مانگنے والے کو نہ جھڑکیے۔', textEnglish: 'And as for the petitioner, do not repel [him].', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' },
        { numberInSurah: 11, textArabic: 'وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ', textUrdu: 'اور اپنے رب کی نعمتوں کا خوب چرچا کیجیے۔', textEnglish: 'But as for the favor of your Lord, report [it].', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/93.mp3' }
      ]
    },
    {
      id: 'surah-94',
      number: 94,
      nameArabic: 'سُورَةُ الشَّرْح',
      nameEnglish: 'Ash-Sharh',
      nameUrdu: 'سورۃ الشرح',
      meaningEnglish: 'The Relief & Expansion',
      versesCount: 8,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/94.mp3',
      order: 3,
      ayahs: [
        { numberInSurah: 1, textArabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ', textUrdu: 'کیا ہم نے آپ کی خاطر آپ کا سینہ کشادہ نہیں فرمایا؟', textEnglish: 'Did We not expand for you, [O Muhammad], your breast?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/94.mp3' },
        { numberInSurah: 2, textArabic: 'وَوَضَعْنَا عَنكَ وِزْرَكَ', textUrdu: 'اور ہم نے آپ پر سے آپ کا بوجھ اتار دیا۔', textEnglish: 'And We removed from you your burden', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/94.mp3' },
        { numberInSurah: 3, textArabic: 'الَّذِي أَنقَضَ ظَهْرَكَ', textUrdu: 'جس نے آپ کی پیٹھ توڑ رکھی تھی۔', textEnglish: 'Which had weighed upon your back', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/94.mp3' },
        { numberInSurah: 4, textArabic: 'وَرَفَعْنَا لَكَ ذِكْرَكَ', textUrdu: 'اور ہم نے آپ کا ذکر بلند کر دیا۔', textEnglish: 'And raised high for you your repute.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/94.mp3' },
        { numberInSurah: 5, textArabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', textUrdu: 'پس یقیناً ہر مشکل کے ساتھ آسانی ہے۔', textEnglish: 'For indeed, with hardship [will be] ease.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/94.mp3' },
        { numberInSurah: 6, textArabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', textUrdu: 'بے شک ہر مشکل کے ساتھ آسانی ہے۔', textEnglish: 'Indeed, with hardship [will be] ease.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/94.mp3' },
        { numberInSurah: 7, textArabic: 'فَإِذَا فَرَغْتَ فَانصَبْ', textUrdu: 'پس جب آپ فارغ ہوں تو عبادت میں محنت کیجیے۔', textEnglish: 'So when you have finished [your duties], then stand up [for worship].', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/94.mp3' },
        { numberInSurah: 8, textArabic: 'وَإِلَىٰ رَبِّكَ فَارْغَب', textUrdu: 'اور اپنے رب ہی کی طرف رغبت رکھیے۔', textEnglish: 'And to your Lord direct [your] longing.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/94.mp3' }
      ]
    },
    {
      id: 'surah-95',
      number: 95,
      nameArabic: 'سُورَةُ التِّين',
      nameEnglish: 'At-Tin',
      nameUrdu: 'سورۃ التین',
      meaningEnglish: 'The Fig',
      versesCount: 8,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/95.mp3',
      order: 4,
      ayahs: [
        { numberInSurah: 1, textArabic: 'وَالتِّينِ وَالزَّيْتُونِ', textUrdu: 'قسم ہے انجیر کی اور زیتون کی!', textEnglish: 'By the fig and the olive', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/95.mp3' },
        { numberInSurah: 2, textArabic: 'وَطُورِ سِينِينَ', textUrdu: 'اور طورِ سینا کی!', textEnglish: 'And [by] Mount Sinai', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/95.mp3' },
        { numberInSurah: 3, textArabic: 'وَهَٰذَا الْبَلَدِ الْأَمِينِ', textUrdu: 'اور اس امن والے شہر (مکہ) کی!', textEnglish: 'And [by] this secure city [Makkah],', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/95.mp3' },
        { numberInSurah: 4, textArabic: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ', textUrdu: 'یقیناً ہم نے انسان کو بہترین ساخت پر پیدا کیا۔', textEnglish: 'We have certainly created man in the best of stature;', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/95.mp3' },
        { numberInSurah: 5, textArabic: 'ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ', textUrdu: 'پھر ہم نے اسے پست ترین حالت میں لوٹا دیا۔', textEnglish: 'Then We return him to the lowest of the low,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/95.mp3' },
        { numberInSurah: 6, textArabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ', textUrdu: 'سوائے ان کے جو ایمان لائے اور نیک عمل کیے، پس ان کے لیے کبھی ختم نہ ہونے والا اجر ہے۔', textEnglish: 'Except for those who believe and do righteous deeds, for they will have a reward uninterrupted.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/95.mp3' },
        { numberInSurah: 7, textArabic: 'فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ', textUrdu: 'پھر اس کے بعد کون سی چیز تمہیں جزا و سزا کو جھٹلانے پر آمادہ کرتی ہے؟', textEnglish: 'So what yet causes you to deny the Recompense?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/95.mp3' },
        { numberInSurah: 8, textArabic: 'أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ', textUrdu: 'کیا اللہ سب حاکموں سے بڑا حاکم نہیں ہے؟', textEnglish: 'Is not Allah the most just of judges?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/95.mp3' }
      ]
    },
    {
      id: 'surah-96',
      number: 96,
      nameArabic: 'سُورَةُ الْعَلَق',
      nameEnglish: 'Al-Alaq',
      nameUrdu: 'سورۃ العلق',
      meaningEnglish: 'The Clot (First Revelation)',
      versesCount: 19,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3',
      order: 5,
      ayahs: [
        { numberInSurah: 1, textArabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', textUrdu: 'پڑھیے اپنے رب کے نام کے ساتھ جس نے پیدا کیا۔', textEnglish: 'Recite in the name of your Lord who created -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 2, textArabic: 'خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ', textUrdu: 'اس نے انسان کو جمے ہوئے خون کے لوتھڑے سے پیدا کیا۔', textEnglish: 'Created man from a clinging substance.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 3, textArabic: 'اقْرَأْ وَرَبُّكَ الْأَكْرَمُ', textUrdu: 'پڑھیے اور آپ کا رب سب سے بڑا کریم ہے۔', textEnglish: 'Recite, and your Lord is the most Generous -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 4, textArabic: 'الَّذِي عَلَّمَ بِالْقَلَمِ', textUrdu: 'جس نے قلم کے ذریعے علم سکھایا۔', textEnglish: 'Who taught by the pen -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 5, textArabic: 'عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ', textUrdu: 'انسان کو وہ سکھایا جو وہ نہیں جانتا تھا۔', textEnglish: 'Taught man that which he knew not.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 6, textArabic: 'كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَىٰ', textUrdu: 'ہرگز نہیں، یقیناً انسان سرکشی کرتا ہے۔', textEnglish: 'No! [But] indeed, man transgresses', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 7, textArabic: 'أَن رَّآهُ اسْتَغْنَىٰ', textUrdu: 'اس بات پر کہ وہ اپنے آپ کو بے نیاز دیکھتا ہے۔', textEnglish: 'Because he sees himself self-sufficient.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 8, textArabic: 'إِنَّ إِلَىٰ رَبِّكَ الرُّجْعَىٰ', textUrdu: 'یقیناً آپ کے رب ہی کی طرف لوٹنا ہے۔', textEnglish: 'Indeed, to your Lord is the return.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 9, textArabic: 'أَرَأَيْتَ الَّذِي يَنْهَىٰ', textUrdu: 'کیا آپ نے اس شخص کو دیکھا جو روکتا ہے؟', textEnglish: 'Have you seen the one who forbids', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 10, textArabic: 'عَبْدًا إِذَا صَلَّىٰ', textUrdu: 'ایک بندے کو جب وہ نماز پڑھتا ہے۔', textEnglish: 'A servant when he prays?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 11, textArabic: 'أَرَأَيْتَ إِن كَانَ عَلَى الْهُدَىٰ', textUrdu: 'بھلا بتائیے اگر وہ ہدایت پر ہو؟', textEnglish: 'Have you seen if he is upon guidance', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 12, textArabic: 'أَوْ أَمَرَ بِالتَّقْوَىٰ', textUrdu: 'یا پرہیزگاری کا حکم دیتا ہو؟', textEnglish: 'Or enjoins righteousness?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 13, textArabic: 'أَرَأَيْتَ إِن كَذَّبَ وَتَوَلَّىٰ', textUrdu: 'بھلا دیکھیے اگر اس نے جھٹلایا اور منہ موڑا؟', textEnglish: 'Have you seen if he denies and turns away -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 14, textArabic: 'أَلَمْ يَعْلَم بِأَنَّ اللَّهَ يَرَىٰ', textUrdu: 'کیا وہ نہیں جانتا کہ اللہ سب کچھ دیکھ رہا ہے؟', textEnglish: 'Does he not know that Allah sees?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 15, textArabic: 'كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًا بِالنَّاصِيَةِ', textUrdu: 'ہرگز نہیں، اگر وہ باز نہ آیا تو ہم پیشانی کے بال پکڑ کر گھسیٹیں گے۔', textEnglish: 'No! If he does not desist, We will surely drag him by the forelock -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 16, textArabic: 'نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ', textUrdu: 'جھوٹی، خطا کار پیشانی۔', textEnglish: 'A lying, sinning forelock.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 17, textArabic: 'فَلْيَدْعُ نَادِيَهُ', textUrdu: 'پس وہ اپنی مجلس والوں کو بلا لے۔', textEnglish: 'Then let him call his associates;', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 18, textArabic: 'سَنَدْعُ الزَّبَانِيَةَ', textUrdu: 'ہم بھی عذاب کے فرشتوں کو بلائیں گے۔', textEnglish: 'We will call the angels of Hell.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' },
        { numberInSurah: 19, textArabic: 'كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِب', textUrdu: 'ہرگز اس کا کہنا نہ مانیں، اور سجدہ کیجیے اور اللہ کا قرب حاصل کیجیے۔', textEnglish: 'No! Do not obey him. But prostrate and draw near [to Allah].', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/96.mp3' }
      ]
    },
    {
      id: 'surah-97',
      number: 97,
      nameArabic: 'سُورَةُ الْقَدْر',
      nameEnglish: 'Al-Qadr',
      nameUrdu: 'سورۃ القدر',
      meaningEnglish: 'The Night of Decree',
      versesCount: 5,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/97.mp3',
      order: 6,
      ayahs: [
        { numberInSurah: 1, textArabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ', textUrdu: 'بے شک ہم نے اس (قرآن) کو شبِ قدر میں نازل فرمایا۔', textEnglish: 'Indeed, We sent the Qur\'an down during the Night of Decree.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/97.mp3' },
        { numberInSurah: 2, textArabic: 'وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ', textUrdu: 'اور آپ کو کیا معلوم کہ شبِ قدر کیا ہے؟', textEnglish: 'And what can make you know what is the Night of Decree?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/97.mp3' },
        { numberInSurah: 3, textArabic: 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ', textUrdu: 'شبِ قدر ہزار مہینوں سے بہتر ہے۔', textEnglish: 'The Night of Decree is better than a thousand months.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/97.mp3' },
        { numberInSurah: 4, textArabic: 'تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ', textUrdu: 'اس میں فرشتے اور روح القدس اپنے رب کے حکم سے ہر کام کے لیے اترتے ہیں۔', textEnglish: 'The angels and the Spirit descend therein by permission of their Lord for every matter.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/97.mp3' },
        { numberInSurah: 5, textArabic: 'سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ', textUrdu: 'یہ رات طلوعِ فجر تک سراسر سلامتی ہے۔', textEnglish: 'Peace it is until the emergence of dawn.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/97.mp3' }
      ]
    },
    {
      id: 'surah-98',
      number: 98,
      nameArabic: 'سُورَةُ الْبَيِّنَة',
      nameEnglish: 'Al-Bayyinah',
      nameUrdu: 'سورۃ البینہ',
      meaningEnglish: 'The Clear Proof',
      versesCount: 8,
      revelationType: 'Medinan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/98.mp3',
      order: 7,
      ayahs: [
        { numberInSurah: 1, textArabic: 'لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ', textUrdu: 'اہلِ کتاب میں سے کفر کرنے والے اور مشرکین باز آنے والے نہ تھے جب تک کہ ان کے پاس واضح دلیل نہ آ جاتی۔', textEnglish: 'Those who disbelieved among the People of the Scripture and the polytheists were not to be parted until there came to them clear evidence -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/98.mp3' },
        { numberInSurah: 2, textArabic: 'رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً', textUrdu: 'اللہ کی طرف سے ایک رسول جو پاکیزہ صحیفے پڑھ کر سنائے۔', textEnglish: 'A Messenger from Allah, reciting purified scriptures', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/98.mp3' },
        { numberInSurah: 3, textArabic: 'فِيهَا كُتُبٌ قَيِّمَةٌ', textUrdu: 'جن میں بالکل سیدھی اور درست تحریریں ہیں۔', textEnglish: 'Within which are correct writings.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/98.mp3' },
        { numberInSurah: 4, textArabic: 'وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ', textUrdu: 'اور اہلِ کتاب میں پھوٹ نہیں پڑی مگر اس کے بعد کہ ان کے پاس روشن دلیل آ گئی۔', textEnglish: 'Nor did those who were given the Scripture become divided until after there had come to them clear evidence.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/98.mp3' },
        { numberInSurah: 5, textArabic: 'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ ۚ وَذَٰلِكَ دِينُ الْقَيِّمَةِ', textUrdu: 'اور انہیں صرف یہی حکم دیا گیا تھا کہ وہ یکسو ہو کر خلوصِ نیت سے اللہ کی بندگی کریں اور نماز قائم کریں اور زکوٰۃ دیں۔ اور یہی درست دین ہے۔', textEnglish: 'And they were not commanded except to worship Allah, [being] sincere to Him in religion, inclining to truth, and to establish prayer and to give zakah. And that is the correct religion.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/98.mp3' },
        { numberInSurah: 6, textArabic: 'إِنَّ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ فِي نَارِ جَهَنَّمَ خَالِدِينَ فِيهَا ۚ أُولَٰئِكَ هُمْ شَرُّ الْبَرِيَّةِ', textUrdu: 'بے شک جو لوگ اہلِ کتاب اور مشرکین میں سے کافر ہوئے وہ جہنم کی آگ میں ہوں گے، ہمیشہ اس میں رہیں گے۔ یہی لوگ بدترین مخلوق ہیں۔', textEnglish: 'Indeed, they who disbelieved among the People of the Scripture and the polytheists will be in the fire of Hell, abiding eternally therein. Those are the worst of creatures.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/98.mp3' },
        { numberInSurah: 7, textArabic: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ هُمْ خَيْرُ الْبَرِيَّةِ', textUrdu: 'بے شک جو لوگ ایمان لائے اور انہوں نے نیک عمل کیے، وہی لوگ بہترین مخلوق ہیں۔', textEnglish: 'Indeed, they who have believed and done righteous deeds - those are the best of creatures.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/98.mp3' },
        { numberInSurah: 8, textArabic: 'جَزَاؤُهُمْ عِندَ رَبِّهِمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۖ رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ۚ ذَٰلِكَ لِمَنْ خَشِيَ رَبَّهُ', textUrdu: 'ان کا بدلہ ان کے رب کے پاس سدا بہار باغات ہیں جن کے نیچے نہریں بہتی ہیں، وہ ان میں ہمیشہ رہیں گے۔ اللہ ان سے راضی ہوا اور وہ اس سے راضی ہوئے۔ یہ اس شخص کے لیے ہے جو اپنے رب سے ڈرا۔', textEnglish: 'Their reward with their Lord will be gardens of perpetual residence beneath which rivers flow, wherein they will abide forever, Allah being pleased with them and they with Him. That is for whoever has feared his Lord.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/98.mp3' }
      ]
    },
    {
      id: 'surah-99',
      number: 99,
      nameArabic: 'سُورَةُ الزَّلْزَلَة',
      nameEnglish: 'Az-Zalzalah',
      nameUrdu: 'سورۃ الزلزلہ',
      meaningEnglish: 'The Earthquake',
      versesCount: 8,
      revelationType: 'Medinan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/99.mp3',
      order: 8,
      ayahs: [
        { numberInSurah: 1, textArabic: 'إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا', textUrdu: 'جب زمین اپنی پوری شدت سے ہلا دی جائے گی!', textEnglish: 'When the earth is shaken with its [final] earthquake', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/99.mp3' },
        { numberInSurah: 2, textArabic: 'وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا', textUrdu: 'اور زمین اپنے اندر کے بوجھ باہر نکال پھینکے گی!', textEnglish: 'And the earth discharges its burdens', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/99.mp3' },
        { numberInSurah: 3, textArabic: 'وَقَالَ الْإِنسَانُ مَا لَهَا', textUrdu: 'اور انسان کہے گا کہ اسے کیا ہو گیا ہے؟', textEnglish: 'And man says, "What is [wrong] with it?"', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/99.mp3' },
        { numberInSurah: 4, textArabic: 'يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا', textUrdu: 'اس دن وہ اپنے حالات بیان کرے گی۔', textEnglish: 'That Day, it will report its news', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/99.mp3' },
        { numberInSurah: 5, textArabic: 'بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا', textUrdu: 'کیونکہ آپ کے رب نے اسے یہی حکم دیا ہوگا۔', textEnglish: 'Because your Lord has commanded it.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/99.mp3' },
        { numberInSurah: 6, textArabic: 'يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ', textUrdu: 'اس دن لوگ مختلف گروہوں میں نکلیں گے تاکہ ان کے اعمال دکھائے جائیں۔', textEnglish: 'That Day, the people will depart separated [into categories] to be shown [the result of] their deeds.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/99.mp3' },
        { numberInSurah: 7, textArabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ', textUrdu: 'پس جس نے ذرہ برابر نیکی کی ہوگی وہ اسے دیکھ لے گا۔', textEnglish: 'So whoever does an atom\'s weight of good will see it,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/99.mp3' },
        { numberInSurah: 8, textArabic: 'وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ', textUrdu: 'اور جس نے ذرہ برابر برائی کی ہوگی وہ اسے بھی دیکھ لے گا۔', textEnglish: 'And whoever does an atom\'s weight of evil will see it.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/99.mp3' }
      ]
    },
    {
      id: 'surah-100',
      number: 100,
      nameArabic: 'سُورَةُ الْعَادِيَات',
      nameEnglish: 'Al-Adiyat',
      nameUrdu: 'سورۃ العادیات',
      meaningEnglish: 'The Courser / Charging Steeds',
      versesCount: 11,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3',
      order: 9,
      ayahs: [
        { numberInSurah: 1, textArabic: 'وَالْعَادِيَاتِ ضَبْحًا', textUrdu: 'قسم ہے ہانپتے ہوئے دوڑنے والے گھوڑوں کی!', textEnglish: 'By the racers, panting,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 2, textArabic: 'فَالْمُورِيَاتِ قَدْحًا', textUrdu: 'پھر ٹاپوں سے چنگاریاں نکالنے والوں کی!', textEnglish: 'And the producers of sparks [when] striking', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 3, textArabic: 'فَالْمُغِيرَاتِ صُبْحًا', textUrdu: 'پھر صبح کے وقت حملہ کرنے والوں کی!', textEnglish: 'And the chargers at dawn,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 4, textArabic: 'فَأَثَرْنَ بِهِ نَقْعًا', textUrdu: 'پھر اس وقت گرد و غبار اڑانے والوں کی!', textEnglish: 'Stirring up thereby [clouds of] dust,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 5, textArabic: 'فَوَسَطْنَ بِهِ جَمْعًا', textUrdu: 'پھر اس کے ساتھ دشمن کی فوج میں گھس جانے والوں کی!', textEnglish: 'Arriving thereby in the center collectively,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 6, textArabic: 'إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ', textUrdu: 'بے شک انسان اپنے رب کا بڑا ناشکرا ہے۔', textEnglish: 'Indeed mankind, to his Lord, is ungrateful.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 7, textArabic: 'وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ', textUrdu: 'اور وہ خود بھی اس بات پر گواہ ہے۔', textEnglish: 'And indeed, to that he is to witness.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 8, textArabic: 'وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ', textUrdu: 'اور وہ مال کی محبت میں بہت سخت ہے۔', textEnglish: 'And indeed he is, in love of wealth, intense.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 9, textArabic: 'أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِي الْقُبُورِ', textUrdu: 'کیا وہ نہیں جانتا جب قبروں میں جو کچھ ہے نکال لیا جائے گا؟', textEnglish: 'But does he not know that when the contents of the graves are scattered', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 10, textArabic: 'وَحُصِّلَ مَا فِي الصُّدُورِ', textUrdu: 'اور جو کچھ سینوں میں ہے ظاہر کر دیا جائے گا؟', textEnglish: 'And that within the breasts is obtained,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' },
        { numberInSurah: 11, textArabic: 'إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ', textUrdu: 'یقیناً ان کا رب اس دن ان کے حال سے پوری طرح باخبر ہوگا۔', textEnglish: 'Indeed, their Lord with them, that Day, is [fully] Acquainted.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/100.mp3' }
      ]
    },
    {
      id: 'surah-101',
      number: 101,
      nameArabic: 'سُورَةُ الْقَارِعَة',
      nameEnglish: 'Al-Qari\'ah',
      nameUrdu: 'سورۃ القارعہ',
      meaningEnglish: 'The Calamity / Striking Hour',
      versesCount: 11,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3',
      order: 10,
      ayahs: [
        { numberInSurah: 1, textArabic: 'الْقَارِعَةُ', textUrdu: 'کھڑکھڑانے والی آفت!', textEnglish: 'The Striking Calamity -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 2, textArabic: 'مَا الْقَارِعَةُ', textUrdu: 'وہ کھڑکھڑانے والی کیا ہے؟', textEnglish: 'What is the Striking Calamity?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 3, textArabic: 'وَمَا أَدْرَاكَ مَا الْقَارِعَةُ', textUrdu: 'اور آپ کو کیا معلوم کہ وہ کھڑکھڑانے والی کیا ہے؟', textEnglish: 'And what can make you know what is the Striking Calamity?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 4, textArabic: 'يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ', textUrdu: 'جس دن لوگ بکھرے ہوئے پروانوں کی طرح ہو جائیں گے۔', textEnglish: 'It is the Day when people will be like moths, dispersed,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 5, textArabic: 'وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ', textUrdu: 'اور پہاڑ دھنی ہوئی اون کی طرح ہو جائیں گے۔', textEnglish: 'And the mountains will be like wool, fluffed up.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 6, textArabic: 'فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ', textUrdu: 'پس جس کے پلڑے بھاری ہوں گے۔', textEnglish: 'Then as for one whose scales are heavy [with good deeds],', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 7, textArabic: 'فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ', textUrdu: 'تو وہ من پسند عیش میں ہوگا۔', textEnglish: 'He will be in a pleasant life.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 8, textArabic: 'وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ', textUrdu: 'اور جس کے پلڑے ہلکے ہوں گے۔', textEnglish: 'But as for one whose scales are light,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 9, textArabic: 'فَأُمُّهُ هَاوِيَةٌ', textUrdu: 'تو اس کا ٹھکانہ ہاویہ (گہری کھائی) ہوگا۔', textEnglish: 'His refuge will be an abyss.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 10, textArabic: 'وَمَا أَدْرَاكَ مَا هِيَهْ', textUrdu: 'اور آپ کو کیا معلوم کہ وہ کیا ہے؟', textEnglish: 'And what can make you know what that is?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' },
        { numberInSurah: 11, textArabic: 'نَارٌ حَامِيَةٌ', textUrdu: 'وہ دہکتی ہوئی آگ ہے!', textEnglish: 'It is a Fire, intensely hot.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/101.mp3' }
      ]
    },
    {
      id: 'surah-102',
      number: 102,
      nameArabic: 'سُورَةُ التَّكَاثُر',
      nameEnglish: 'At-Takathur',
      nameUrdu: 'سورۃ التکاثر',
      meaningEnglish: 'Competition in Increase',
      versesCount: 8,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/102.mp3',
      order: 11,
      ayahs: [
        { numberInSurah: 1, textArabic: 'أَلْهَاكُمُ التَّكَاثُرُ', textUrdu: 'تمہیں کثرت کی ہوس نے غافل کر دیا۔', textEnglish: 'Competition in [worldly] increase diverts you', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/102.mp3' },
        { numberInSurah: 2, textArabic: 'حَتَّىٰ زُرْتُمُ الْمَقَابِرَ', textUrdu: 'یہاں تک کہ تم نے قبریں جا دیکھیں۔', textEnglish: 'Until you visit the graveyards.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/102.mp3' },
        { numberInSurah: 3, textArabic: 'كَلَّا سَوْفَ تَعْلَمُونَ', textUrdu: 'ہرگز نہیں، عنقریب تم جان لو گے۔', textEnglish: 'No! You are going to know.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/102.mp3' },
        { numberInSurah: 4, textArabic: 'ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ', textUrdu: 'پھر ہرگز نہیں، جلد ہی تم جان لو گے۔', textEnglish: 'Then no! You are going to know.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/102.mp3' },
        { numberInSurah: 5, textArabic: 'كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ', textUrdu: 'ہرگز نہیں! کاش تم یقینی علم کے ساتھ جانتے۔', textEnglish: 'No! If you only knew with knowledge of certainty...', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/102.mp3' },
        { numberInSurah: 6, textArabic: 'لَتَرَوُنَّ الْجَحِيمَ', textUrdu: 'تم ضرور جہنم کو دیکھو گے۔', textEnglish: 'You will surely see the Hellfire.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/102.mp3' },
        { numberInSurah: 7, textArabic: 'ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ', textUrdu: 'پھر تم اسے یقین کی آنکھ سے دیکھو گے۔', textEnglish: 'Then you will surely see it with the eye of certainty.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/102.mp3' },
        { numberInSurah: 8, textArabic: 'ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ', textUrdu: 'پھر اس دن تم سے نعمتوں کے بارے میں ضرور سوال کیا جائے گا۔', textEnglish: 'Then you will surely be asked that Day about pleasure.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/102.mp3' }
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
      order: 12,
      ayahs: [
        { numberInSurah: 1, textArabic: 'وَالْعَصْرِ', textUrdu: 'قسم ہے زمانے کی!', textEnglish: 'By time,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/103.mp3' },
        { numberInSurah: 2, textArabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', textUrdu: 'بے شک تمام انسان خسارے میں ہیں۔', textEnglish: 'Indeed, mankind is in loss,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/103.mp3' },
        { numberInSurah: 3, textArabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', textUrdu: 'سوائے ان کے جو ایمان لائے اور نیک عمل کیے اور ایک دوسرے کو حق کی وصیت اور صبر کی تلقین کی۔', textEnglish: 'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/103.mp3' }
      ]
    },
    {
      id: 'surah-104',
      number: 104,
      nameArabic: 'سُورَةُ الْهُمَزَة',
      nameEnglish: 'Al-Humazah',
      nameUrdu: 'سورۃ الہمزہ',
      meaningEnglish: 'The Slanderer',
      versesCount: 9,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3',
      order: 13,
      ayahs: [
        { numberInSurah: 1, textArabic: 'وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ', textUrdu: 'تباہی ہے ہر طعنہ زنی کرنے والے اور عیب جوئی کرنے والے کے لیے!', textEnglish: 'Woe to every scorner and mocker', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3' },
        { numberInSurah: 2, textArabic: 'الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ', textUrdu: 'جس نے مال جمع کیا اور اسے گن گن کر رکھا۔', textEnglish: 'Who collects wealth and [continuously] counts it.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3' },
        { numberInSurah: 3, textArabic: 'يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ', textUrdu: 'وہ سمجھتا ہے کہ اس کا مال اسے ہمیشہ زندہ رکھے گا۔', textEnglish: 'He thinks that his wealth will make him immortal.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3' },
        { numberInSurah: 4, textArabic: 'كَلَّا ۖ لَيُنبَذَنَّ فِي الْحُطَمَةِ', textUrdu: 'ہرگز نہیں! وہ ضرور حطمہ (توڑ پھوڑ دینے والی آگ) میں پھینکا جائے گا۔', textEnglish: 'No! He will surely be thrown into the Crusher.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3' },
        { numberInSurah: 5, textArabic: 'وَمَا أَدْرَاكَ مَا الْحُطَمَةُ', textUrdu: 'اور آپ کو کیا معلوم کہ حطمہ کیا ہے؟', textEnglish: 'And what can make you know what is the Crusher?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3' },
        { numberInSurah: 6, textArabic: 'نَارُ اللَّهِ الْمُوقَدَةُ', textUrdu: 'وہ اللہ کی بھڑکائی ہوئی آگ ہے۔', textEnglish: 'It is the fire of Allah, [eternally] fueled,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3' },
        { numberInSurah: 7, textArabic: 'الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ', textUrdu: 'جو دلوں تک پہنچ جائے گی۔', textEnglish: 'Which mounts directed at the hearts.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3' },
        { numberInSurah: 8, textArabic: 'إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ', textUrdu: 'بے شک وہ ان پر بند کر دی جائے گی۔', textEnglish: 'Indeed, Hellfire will be closed down upon them', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3' },
        { numberInSurah: 9, textArabic: 'فِي عَمَدٍ مُّمَدَّدَةٍ', textUrdu: 'لمبے لمبے ستونوں میں۔', textEnglish: 'In extended columns.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/104.mp3' }
      ]
    },
    {
      id: 'surah-105',
      number: 105,
      nameArabic: 'سُورَةُ الْفِيل',
      nameEnglish: 'Al-Fil',
      nameUrdu: 'سورۃ الفیل',
      meaningEnglish: 'The Elephant',
      versesCount: 5,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/105.mp3',
      order: 14,
      ayahs: [
        { numberInSurah: 1, textArabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ', textUrdu: 'کیا آپ نے نہیں دیکھا کہ آپ کے رب نے ہاتھی والوں کے ساتھ کیا کیا؟', textEnglish: 'Have you not considered, [O Muhammad], how your Lord dealt with the companions of the elephant?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/105.mp3' },
        { numberInSurah: 2, textArabic: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ', textUrdu: 'کیا اس نے ان کی چال کو برباد نہیں کر دیا؟', textEnglish: 'Did He not make their plan into misguidance?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/105.mp3' },
        { numberInSurah: 3, textArabic: 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ', textUrdu: 'اور ان پر پرندوں کے غول کے غول بھیجے۔', textEnglish: 'And He sent against them birds in flocks,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/105.mp3' },
        { numberInSurah: 4, textArabic: 'تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ', textUrdu: 'جو ان پر پکی ہوئی مٹی کے پتھر پھینک رہے تھے۔', textEnglish: 'Striking them with stones of hard clay,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/105.mp3' },
        { numberInSurah: 5, textArabic: 'فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ', textUrdu: 'پس اس نے انہیں کھائے ہوئے بھوسے جیسا کر دیا۔', textEnglish: 'And He made them like eaten straw.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/105.mp3' }
      ]
    },
    {
      id: 'surah-106',
      number: 106,
      nameArabic: 'سُورَةُ قُرَيْش',
      nameEnglish: 'Quraysh',
      nameUrdu: 'سورۃ قریش',
      meaningEnglish: 'Quraysh',
      versesCount: 4,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/106.mp3',
      order: 15,
      ayahs: [
        { numberInSurah: 1, textArabic: 'لِإِيلَافِ قُرَيْشٍ', textUrdu: 'قریش کو مانوس کرنے کی خاطر!', textEnglish: 'For the accustomed security of the Quraysh -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/106.mp3' },
        { numberInSurah: 2, textArabic: 'إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ', textUrdu: 'انہیں سردی اور گرمی کے سفر سے مانوس کرنے کی خاطر!', textEnglish: 'Their accustomed security [in] the caravan of winter and summer -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/106.mp3' },
        { numberInSurah: 3, textArabic: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ', textUrdu: 'پس انہیں چاہیے کہ وہ اس گھر (خانہ کعبہ) کے رب کی عبادت کریں۔', textEnglish: 'Let them worship the Lord of this House,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/106.mp3' },
        { numberInSurah: 4, textArabic: 'الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ', textUrdu: 'جس نے انہیں بھوک میں کھانا کھلایا اور خوف سے امن بخشا۔', textEnglish: 'Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/106.mp3' }
      ]
    },
    {
      id: 'surah-107',
      number: 107,
      nameArabic: 'سُورَةُ الْمَاعُون',
      nameEnglish: 'Al-Ma\'un',
      nameUrdu: 'سورۃ الماعون',
      meaningEnglish: 'Small Kindnesses',
      versesCount: 7,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/107.mp3',
      order: 16,
      ayahs: [
        { numberInSurah: 1, textArabic: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ', textUrdu: 'کیا آپ نے اس شخص کو دیکھا جو جزا و سزا کو جھٹلاتا ہے؟', textEnglish: 'Have you seen the one who denies the Recompense?', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/107.mp3' },
        { numberInSurah: 2, textArabic: 'فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ', textUrdu: 'یہ وہی ہے جو یتیم کو دھکے دیتا ہے۔', textEnglish: 'For that is the one who drives away the orphan', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/107.mp3' },
        { numberInSurah: 3, textArabic: 'وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ', textUrdu: 'اور مسکین کو کھانا کھلانے کی ترغیب نہیں دیتا۔', textEnglish: 'And does not encourage the feeding of the poor.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/107.mp3' },
        { numberInSurah: 4, textArabic: 'فَوَيلٌ لِّلْمُصَلِّينَ', textUrdu: 'پس ہلاکت ہے ان نماز پڑھنے والوں کے لیے!', textEnglish: 'So woe to those who pray', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/107.mp3' },
        { numberInSurah: 5, textArabic: 'الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ', textUrdu: 'جو اپنی نماز سے غافل ہیں۔', textEnglish: '[But] who are heedless of their prayer -', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/107.mp3' },
        { numberInSurah: 6, textArabic: 'الَّذِينَ هُمْ يُرَاءُونَ', textUrdu: 'جو صرف دکھاوا کرتے ہیں۔', textEnglish: 'Those who make show [of their deeds]', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/107.mp3' },
        { numberInSurah: 7, textArabic: 'وَيَمْنَعُونَ الْمَاعُونَ', textUrdu: 'اور روزمرہ استعمال کی معمولی چیزیں مانگے پر دینے سے روکتے ہیں۔', textEnglish: 'And withhold [simple] assistance.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/107.mp3' }
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
      order: 17,
      ayahs: [
        { numberInSurah: 1, textArabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', textUrdu: 'بے شک ہم نے آپ کو کوثر (بے انتہا بھلائی) عطا فرمائی۔', textEnglish: 'Indeed, We have granted you, [O Muhammad], al-Kawthar.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6205.mp3' },
        { numberInSurah: 2, textArabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', textUrdu: 'پس آپ اپنے رب کے لیے نماز پڑھیں اور قربانی کریں۔', textEnglish: 'So pray to your Lord and sacrifice [to Him alone].', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6206.mp3' },
        { numberInSurah: 3, textArabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ', textUrdu: 'یقیناً آپ کا دشمن ہی بے نام و نشان رہنے والا ہے۔', textEnglish: 'Indeed, your enemy is the one cut off.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6207.mp3' }
      ]
    },
    {
      id: 'surah-109',
      number: 109,
      nameArabic: 'سُورَةُ الْكَافِرُونَ',
      nameEnglish: 'Al-Kafirun',
      nameUrdu: 'سورۃ الکافرون',
      meaningEnglish: 'The Disbelievers',
      versesCount: 6,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/109.mp3',
      order: 18,
      ayahs: [
        { numberInSurah: 1, textArabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ', textUrdu: 'آپ کہہ دیجیے کہ اے کافرو!', textEnglish: 'Say, "O disbelievers,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/109.mp3' },
        { numberInSurah: 2, textArabic: 'لَا أَعْبُدُ مَا تَعْبُدُونَ', textUrdu: 'میں ان بتوں کی پوجا نہیں کرتا جنہیں تم پوجتے ہو۔', textEnglish: 'I do not worship what you worship.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/109.mp3' },
        { numberInSurah: 3, textArabic: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ', textUrdu: 'اور نہ تم اس کی بندگی کرتے ہو جس کی میں بندگی کرتا ہوں۔', textEnglish: 'Nor are you worshippers of what I worship.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/109.mp3' },
        { numberInSurah: 4, textArabic: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ', textUrdu: 'اور نہ میں آئندہ ان کی پوجا کروں گا جن کی تم نے پوجا کی۔', textEnglish: 'Nor will I be a worshipper of what you worship.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/109.mp3' },
        { numberInSurah: 5, textArabic: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ', textUrdu: 'اور نہ تم اس کی بندگی کرنے والے ہو جس کی میں بندگی کرتا ہوں۔', textEnglish: 'Nor will you be worshippers of what I worship.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/109.mp3' },
        { numberInSurah: 6, textArabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ', textUrdu: 'تمہارے لیے تمہارا دین اور میرے لیے میرا دین ہے۔', textEnglish: 'For you is your religion, and for me is my religion."', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/109.mp3' }
      ]
    },
    {
      id: 'surah-110',
      number: 110,
      nameArabic: 'سُورَةُ النَّصْر',
      nameEnglish: 'An-Nasr',
      nameUrdu: 'سورۃ النصر',
      meaningEnglish: 'The Divine Support',
      versesCount: 3,
      revelationType: 'Medinan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/110.mp3',
      order: 19,
      ayahs: [
        { numberInSurah: 1, textArabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ', textUrdu: 'جب اللہ کی مدد اور فتح آ پہنچے!', textEnglish: 'When the victory of Allah has come and the conquest,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/110.mp3' },
        { numberInSurah: 2, textArabic: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا', textUrdu: 'اور آپ لوگوں کو دیکھ لیں کہ وہ فوج در فوج اللہ کے دین میں داخل ہو رہے ہیں۔', textEnglish: 'And you see the people entering into the religion of Allah in multitudes,', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/110.mp3' },
        { numberInSurah: 3, textArabic: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا', textUrdu: 'تو اپنے رب کی حمد کے ساتھ تسبیح کیجیے اور اس سے مغفرت مانگیے، بے شک وہ بڑا معاف فرمانے والا ہے۔', textEnglish: 'Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/110.mp3' }
      ]
    },
    {
      id: 'surah-111',
      number: 111,
      nameArabic: 'سُورَةُ الْمَسَد',
      nameEnglish: 'Al-Lahab (Al-Masad)',
      nameUrdu: 'سورۃ اللھب',
      meaningEnglish: 'The Palm Fiber / The Flame',
      versesCount: 5,
      revelationType: 'Meccan',
      audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/111.mp3',
      order: 20,
      ayahs: [
        { numberInSurah: 1, textArabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ', textUrdu: 'ٹوٹ گئے ابو لہب کے دونوں ہاتھ اور وہ خود بھی برباد ہو گیا!', textEnglish: 'May the hands of Abu Lahab be ruined, and ruined is he.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/111.mp3' },
        { numberInSurah: 2, textArabic: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ', textUrdu: 'نہ تو اس کا مال اس کے کچھ کام آیا اور نہ وہ جو اس نے کمایا۔', textEnglish: 'His wealth will not avail him or that which he gained.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/111.mp3' },
        { numberInSurah: 3, textArabic: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ', textUrdu: 'وہ عنقریب شعلہ زن آگ میں داخل ہوگا۔', textEnglish: 'He will [enter to] burn in a Fire of [blazing] flame', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/111.mp3' },
        { numberInSurah: 4, textArabic: 'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ', textUrdu: 'اور اس کی عورت بھی جو لکڑیاں ڈھونے والی ہے۔', textEnglish: 'And his wife [as well] - the carrier of firewood.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/111.mp3' },
        { numberInSurah: 5, textArabic: 'فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ', textUrdu: 'اس کی گردن میں بٹی ہوئی رسی ہوگی۔', textEnglish: 'Around her neck is a rope of [twisted] fiber.', audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/111.mp3' }
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
      order: 21,
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
      order: 22,
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
      order: 23,
      ayahs: [
        { numberInSurah: 1, textArabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', textUrdu: 'آپ کہہ دیجیے کہ میں انسانوں کے رب کی پناہ میں آتا ہوں۔', textEnglish: 'Say, "I seek refuge in the Lord of mankind,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6231.mp3' },
        { numberInSurah: 2, textArabic: 'مَلِكِ النَّاسِ', textUrdu: 'جو انسانوں کا بادشاہ ہے۔', textEnglish: 'The Sovereign of mankind.', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6232.mp3' },
        { numberInSurah: 3, textArabic: 'إِلَٰهِ النَّاسِ', textUrdu: 'جو انسانوں کا معبودِ برحق ہے۔', textEnglish: 'The God of mankind,', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6233.mp3' },
        { numberInSurah: 4, textArabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', textUrdu: 'وسوسہ ڈالنے والے، پیچھے ہٹ جانے والے شیطان کے شر سے۔', textEnglish: 'From the evil of the retreating whisperer -', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6234.mp3' },
        { numberInSurah: 5, textArabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', textUrdu: 'جو لوگوں کے سینوں میں وسوسے ڈالتا ہے۔', textEnglish: 'Who whispers [evil] into the breasts of mankind -', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6235.mp3' },
        { numberInSurah: 6, textArabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', textUrdu: 'خواہ وہ جنات میں سے ہو یا انسانوں میں سے۔', textEnglish: 'From among the jinn and mankind."', audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/6236.mp3' }
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

    // Daily Duas & Supplications (Full Comprehensive 34+ Collection)
    {
      id: 'dua-leaving-house',
      category: 'duas',
      title: 'Dua when Leaving the House (گھر سے نکلنے کی دعا)',
      titleArabic: 'دُعَاءُ الْخُرُوجِ مِنَ الْمَنْزِل',
      arabicText: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
      pronunciation: 'Bismillahi tawakkaltu \'alallahi, la hawla wa la quwwata illa billah',
      translationEnglish: 'In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.',
      translationUrdu: 'اللہ کے نام سے، میں نے اللہ پر بھروسہ کیا، گناہوں سے بچنے اور نیکی کرنے کی طاقت اللہ ہی کی طرف سے ہے۔',
      translationHindi: 'अल्लाह के नाम से, मैंने अल्लाह पर भरोसा किया, और कोई ताक़त और कुव्वत नहीं सिवाय अल्लाह के।',
      order: 1
    },
    {
      id: 'dua-entering-house',
      category: 'duas',
      title: 'Dua when Entering the House (گھر میں داخل ہونے کی دعا)',
      titleArabic: 'دُعَاءُ دُخُولِ الْمَنْزِل',
      arabicText: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا',
      pronunciation: 'Bismillahi walajna, wa bismillahi kharajna, wa \'ala Rabbina tawakkalna',
      translationEnglish: 'In the name of Allah we enter, and in the name of Allah we leave, and upon our Lord we place our trust.',
      translationUrdu: 'اللہ کے نام سے ہم داخل ہوئے اور اللہ کے نام سے ہم نکلے، اور اپنے رب ہی پر ہم نے بھروسہ کیا۔',
      translationHindi: 'अल्लाह के नाम से हम दाखिल हुए और अल्लाह के नाम से निकले, और अपने रब पर हमने भरोसा किया।',
      order: 2
    },
    {
      id: 'dua-entering-restroom',
      category: 'duas',
      title: 'Dua before Entering the Restroom (بیت الخلاء میں داخل ہونے کی دعا)',
      titleArabic: 'دُعَاءُ دُخُولِ الْخَلَاءِ',
      arabicText: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
      pronunciation: 'Allahumma innee a\'oodhu bika minal khubuthi wal khabaa\'ith',
      translationEnglish: 'O Allah, I seek refuge in You from the male and female evil spirits.',
      translationUrdu: 'اے اللہ! میں خبیث جنوں اور خبیث جننیوں (کی برائی) سے تیری پناہ مانگتا ہوں۔',
      translationHindi: 'ऐ अल्लाह! मैं ख़बीस जिन्नों और जिन्नियों (की बुराई) से तेरी पनाह मांगता हूँ।',
      order: 3
    },
    {
      id: 'dua-leaving-restroom',
      category: 'duas',
      title: 'Dua after Leaving the Restroom (بیت الخلاء سے نکلنے کی دعا)',
      titleArabic: 'دُعَاءُ الْخُرُوجِ مِنَ الْخَلَاءِ',
      arabicText: 'غُفْرَانَكَ',
      pronunciation: 'Ghufranaka',
      translationEnglish: '(O Allah) I seek Your forgiveness.',
      translationUrdu: 'اے اللہ! میں تیری بخشش مانگتا ہوں۔',
      translationHindi: 'ऐ अल्लाह! मैं तेरी मग़फ़िरत (माफ़ी) चाहता हूँ।',
      order: 4
    },
    {
      id: 'dua-wearing-clothes',
      category: 'duas',
      title: 'Dua when Wearing Clothes (کپڑے پہننے کی دعا)',
      titleArabic: 'دُعَاءُ لُبْسِ الثَّوْب',
      arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
      pronunciation: 'Alhamdu lillahilladhi kasani hadhath-thawba wa razaqaneehi min ghayri hawlim-minni wa la quwwah',
      translationEnglish: 'All praise is for Allah who has clothed me with this garment and provided it for me, with no power or might from myself.',
      translationUrdu: 'تمام تعریفیں اس اللہ کے لیے ہیں جس نے مجھے یہ کپڑا پہنایا اور میری کسی طاقت اور قوت کے بغیر مجھے یہ عطا فرمایا۔',
      translationHindi: 'तमाम तारीफें अल्लाह के लिए हैं जिसने मुझे यह कपड़ा पहनाया और मेरी किसी ताक़त के बिना मुझे यह अता फरमाया।',
      order: 5
    },
    {
      id: 'dua-entering-mosque',
      category: 'duas',
      title: 'Dua when Entering the Mosque (مسجد میں داخل ہونے کی دعا)',
      titleArabic: 'دُعَاءُ دُخُولِ الْمَسْجِد',
      arabicText: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
      pronunciation: 'Allahummaf-tah lee abwaaba rahmatik',
      translationEnglish: 'O Allah, open the doors of Your mercy for me.',
      translationUrdu: 'اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔',
      translationHindi: 'ऐ अल्लाह! मेरे लिए अपनी रहमत के दरवाज़े खोल दे।',
      order: 6
    },
    {
      id: 'dua-leaving-mosque',
      category: 'duas',
      title: 'Dua when Leaving the Mosque (مسجد سے نکلنے کی دعا)',
      titleArabic: 'دُعَاءُ الْخُرُوجِ مِنَ الْمَسْجِد',
      arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
      pronunciation: 'Allahumma innee as\'aluka min fadlik',
      translationEnglish: 'O Allah, I ask You from Your bounty.',
      translationUrdu: 'اے اللہ! بے شک میں تجھ سے تیرا فضل مانگتا ہوں۔',
      translationHindi: 'ऐ अल्लाह! मैं तुझसे तेरा फ़ज़ल मांगता हूँ।',
      order: 7
    },
    {
      id: 'dua-looking-mirror',
      category: 'duas',
      title: 'Dua when Looking in the Mirror (آئینہ دیکھنے کی دعا)',
      titleArabic: 'دُعَاءُ النَّظَرِ فِي الْمِرْآة',
      arabicText: 'اللَّهُمَّ أَنْتَ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي',
      pronunciation: 'Allahumma anta hassanta khalqee fahassin khuluqee',
      translationEnglish: 'O Allah, You have made my physical form beautiful, so make my character beautiful as well.',
      translationUrdu: 'اے اللہ! تو نے میری صورت اچھی بنائی ہے، پس میری سیرت بھی اچھی بنا دے۔',
      translationHindi: 'ऐ अल्लाह! तूने मेरी सूरत अच्छी बनाई है, पस मेरा अख़लाक़ भी अच्छा बना दे।',
      order: 8
    },
    {
      id: 'dua-drinking-milk',
      category: 'duas',
      title: 'Dua after Drinking Milk (دودھ پینے کے بعد کی دعا)',
      titleArabic: 'دُعَاءُ شُرْبِ اللَّبَن',
      arabicText: 'اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ',
      pronunciation: 'Allahumma barik lana feehi wa zidna minh',
      translationEnglish: 'O Allah, bless it for us and give us more of it.',
      translationUrdu: 'اے اللہ! اس میں ہمارے لیے برکت عطا فرما اور ہمیں اس سے زیادہ دے۔',
      translationHindi: 'ऐ अल्लाह! इसमें हमारे लिए बरकत अता फरमा और हमें इससे ज़्यादा दे।',
      order: 9
    },
    {
      id: 'dua-after-sneezing',
      category: 'duas',
      title: 'Dua after Sneezing (چھینک آنے کے بعد کی دعا)',
      titleArabic: 'دُعَاءُ الْعُطَاس',
      arabicText: 'الْحَمْدُ لِلَّهِ',
      pronunciation: 'Alhamdulillah',
      translationEnglish: 'All praise is for Allah.',
      translationUrdu: 'تمام تعریفیں اللہ کے لیے ہیں۔',
      translationHindi: 'तमाम तारीफें अल्लाह के लिए हैं।',
      order: 10
    },
    {
      id: 'dua-reply-sneezing',
      category: 'duas',
      title: 'Dua when replying to someone who Sneezes (چھینکنے والے کے جواب کی دعا)',
      titleArabic: 'تَشْمِيتُ الْعَاطِس',
      arabicText: 'يَرْحَمُكَ اللَّهُ',
      pronunciation: 'Yarhamukallah',
      translationEnglish: 'May Allah have mercy on you.',
      translationUrdu: 'اللہ تم پر رحم کرے۔',
      translationHindi: 'अल्लाह तुम पर रहम फरमाए।',
      order: 11
    },
    {
      id: 'dua-boarding-vehicle',
      category: 'duas',
      title: 'Dua when Boarding a Vehicle / Traveling (سواری پر بیٹھنے / سفر کی دعا)',
      titleArabic: 'دُعَاءُ الرُّكُوبِ وَالسَّفَر',
      arabicText: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
      pronunciation: 'Subhanalladhi sakh-khara lana hadha wa ma kunna lahoo muqrineen, wa inna ila Rabbina lamunqaliboon',
      translationEnglish: 'Glory be to Him who has subjected this to us, and we could not have otherwise subdued it, and indeed we are returning to our Lord.',
      translationUrdu: 'پاک ہے وہ ذات جس نے اس (سواری) کو ہمارے تابع کر دیا، حالانکہ ہم اسے قابو کرنے والے نہ تھے، اور بے شک ہم اپنے رب کی طرف ہی لوٹ کر جانے والے ہیں۔',
      translationHindi: 'पाक है वह ज़ात जिसने इसे हमारे काबू में कर दिया, और हम अपने रब की तरफ लौटने वाले हैं।',
      order: 12
    },
    {
      id: 'dua-distress-hardship',
      category: 'duas',
      title: 'Dua when in Distress or Hardship (پریشانی اور مصیبت کی دعا)',
      titleArabic: 'دُعَاءُ الْكَرْبِ (دُعَاءُ يُونُس)',
      arabicText: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
      pronunciation: 'Laa ilaaha illa anta subhaanaka innee kuntu minaz-zaalimeen',
      translationEnglish: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
      translationUrdu: 'تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی ظالموں میں سے تھا۔',
      translationHindi: 'तेरे सिवा कोई माबूद नहीं, तू पाक है, बेशक मैं ही ज़ालिमों में से था।',
      order: 13
    },
    {
      id: 'dua-visiting-sick',
      category: 'duas',
      title: 'Dua when Visiting the Sick (بیمار کی عیادت کی دعا)',
      titleArabic: 'دُعَاءُ عِيَادَةِ الْمَرِيض',
      arabicText: 'لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ',
      pronunciation: 'Laa ba\'sa tahoorun in sha\'Allah',
      translationEnglish: 'Do not worry, it will be a purification (from sins), if Allah wills.',
      translationUrdu: 'کوئی حرج نہیں، اگر اللہ نے چاہا تو یہ بیماری گناہوں سے پاک کرنے والی ہے۔',
      translationHindi: 'कोई हरज नहीं, इन्शाअल्लाह यह बीमारी गुनाहों से पाक करने वाली है।',
      order: 14
    },
    {
      id: 'dua-hearing-good-news',
      category: 'duas',
      title: 'Dua upon Hearing Good News (خوشی کی خبر سننے کی دعا)',
      titleArabic: 'دُعَاءُ سَمَاعِ الْخَبَرِ السَّارّ',
      arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ',
      pronunciation: 'Alhamdu lillahilladhi bini\'matihi tatimmus-saalihaat',
      translationEnglish: 'All praise is for Allah by whose favor good works are accomplished.',
      translationUrdu: 'تمام تعریفیں اس اللہ کے لیے ہیں جس کی نعمت سے اچھے کام مکمل ہوتے ہیں۔',
      translationHindi: 'सब तारीफें अल्लाह के लिए हैं जिसकी नेमत से अच्छे काम पूरे होते हैं।',
      order: 15
    },
    {
      id: 'dua-hearing-bad-news',
      category: 'duas',
      title: 'Dua upon Hearing Bad News (بری خبر یا مصیبت کے وقت کی دعا)',
      titleArabic: 'دُعَاءُ الْمُصِيبَة',
      arabicText: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
      pronunciation: 'Inna lillahi wa inna ilayhi raaji\'oon',
      translationEnglish: 'Indeed, to Allah we belong and to Him we shall return.',
      translationUrdu: 'بے شک ہم اللہ ہی کے لیے ہیں اور بے شک ہم اسی کی طرف لوٹ کر جانے والے ہیں۔',
      translationHindi: 'बेशक हम अल्लाह ही के हैं और हमें उसी की तरफ लौट कर जाना है।',
      order: 16
    },
    {
      id: 'dua-when-angry',
      category: 'duas',
      title: 'Dua when Angry (غصہ آنے کی دعا)',
      titleArabic: 'دُعَاءُ الْغَضَب',
      arabicText: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
      pronunciation: 'A\'oodhu billahi minash-shaytanir-rajeem',
      translationEnglish: 'I seek refuge in Allah from the accursed devil.',
      translationUrdu: 'میں شیطان مردود سے اللہ کی پناہ مانگتا ہوں۔',
      translationHindi: 'मैं शैतान मर्दूद से अल्लाह की पनाह मांगता हूँ।',
      order: 17
    },
    {
      id: 'dua-protection-harm',
      category: 'duas',
      title: 'Dua for Protection from Harm (نقصان سے بچاؤ کی دعا)',
      titleArabic: 'دُعَاءُ الْحِفْظِ وَالْحِمَايَة',
      arabicText: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      pronunciation: 'Bismillahilladhi la yadurru ma\'as-mihee shay\'un fil-ardi wa la fis-samaa\'i wa huwas-Samee\'ul \'Aleem',
      translationEnglish: 'In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, All-Knowing.',
      translationUrdu: 'اللہ کے نام سے جس کے نام کے ساتھ زمین اور آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی، اور وہ خوب سننے والا اور جاننے والا ہے۔',
      translationHindi: 'अल्लाह के नाम से जिसके नाम के साथ ज़मीन और आसमान में कोई चीज़ नुकसान नहीं पहुंचा सकती, और वह खूब सुनने और जानने वाला है।',
      order: 18
    },
    {
      id: 'dua-world-hereafter',
      category: 'duas',
      title: 'Dua for Good in this World and the Hereafter (دنیا اور آخرت کی بھلائی کی دعا)',
      titleArabic: 'دُعَاءُ خَيْرِ الدُّنْيَا وَالْآخِرَة',
      arabicText: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      pronunciation: 'Rabbana aatina fid-dunya hasanataw-wa fil-aakhirati hasanataw-wa qina \'adhaban-naar',
      translationEnglish: 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.',
      translationUrdu: 'اے ہمارے رب! ہمیں دنیا میں بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا۔',
      translationHindi: 'ऐ हमारे रब! हमें दुनिया में भी भलाई अता फरमा और आख़िरत में भी भलाई दे और हमें आग के अज़ाब से बचा।',
      order: 19
    },
    {
      id: 'dua-iftar',
      category: 'duas',
      title: 'Dua for Breaking Fast - Iftar (روزہ افطار کرنے کی دعا)',
      titleArabic: 'دُعَاءُ الْإِفْطَار',
      arabicText: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
      pronunciation: 'Dhahabaz-zama\'u wabtallatil \'urooqu wa thabatal ajru in sha\'Allah',
      translationEnglish: 'The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills.',
      translationUrdu: 'پیاس بجھ گئی، رگیں تر ہو گئیں، اور اگر اللہ نے چاہا تو ثواب پکا ہو گیا۔',
      translationHindi: 'प्यास बुझ गई, नसें तर हो गईं और इन्शाअल्लाह सवाब पक्का हो गया।',
      order: 20
    },
    {
      id: 'dua-new-moon',
      category: 'duas',
      title: 'Dua upon Sighting the New Moon (نیا چاند دیکھنے کی دعا)',
      titleArabic: 'دُعَاءُ رُؤْيَةِ الْهِلَال',
      arabicText: 'اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ، وَالسَّلَامَةِ وَالْإِسْلَامِ، رَبِّي وَرَبُّكَ اللَّهُ',
      pronunciation: 'Allahumma ahillahu \'alayna bil-amni wal-eemaan, was-salaamati wal-Islam, Rabbee wa Rabbukallah',
      translationEnglish: 'O Allah, let this moon appear on us with security and faith, and with safety and Islam. (O moon!) Your Lord and my Lord is Allah.',
      translationUrdu: 'اے اللہ! اس چاند کو ہم پر امن و ایمان، اور سلامتی و اسلام کے ساتھ طلوع فرما، (اے چاند!) میرا اور تیرا رب اللہ ہے۔',
      translationHindi: 'ऐ अल्लाह! इस चाँद को हम पर अमन व ईमान और सलामती व इस्लाम के साथ तुलू फरमा।',
      order: 21
    },
    {
      id: 'dua-when-raining',
      category: 'duas',
      title: 'Dua when it Rains (بارش ہوتے وقت کی دعا)',
      titleArabic: 'دُعَاءُ نُزُولِ الْمَطَر',
      arabicText: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
      pronunciation: 'Allahumma sayyiban naafi\'aa',
      translationEnglish: 'O Allah, (make it) a beneficial downpour.',
      translationUrdu: 'اے اللہ! اس بارش کو نفع بخش بنا دے۔',
      translationHindi: 'ऐ अल्लाह! इस बारिश को फायदेमंद बना दे।',
      order: 22
    },
    {
      id: 'dua-hearing-thunder',
      category: 'duas',
      title: 'Dua upon Hearing Thunder (بادل گرجنے کی دعا)',
      titleArabic: 'دُعَاءُ سَمَاعِ الرَّعْد',
      arabicText: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ',
      pronunciation: 'Subhanalladhi yusabbihur-ra\'du bihamdihee wal-malaa\'ikatu min kheefatih',
      translationEnglish: 'Glory be to Him whom the thunder glorifies with His praise, and the angels from the fear of Him.',
      translationUrdu: 'پاک ہے وہ ذات جس کی حمد کے ساتھ بادل کی گرج تسبیح کرتی ہے، اور فرشتے اس کے خوف سے تسبیح کرتے ہیں۔',
      translationHindi: 'पाक है वह ज़ात जिसकी तारीफ के साथ बादल की गरज तस्बीह करती है और फ़रिश्ते उसके खौफ से तस्बीह करते हैं।',
      order: 23
    },
    {
      id: 'dua-steadfast-heart',
      category: 'duas',
      title: 'Dua for Steadfastness of the Heart (دل کی ثابت قدمی کی دعا)',
      titleArabic: 'دُعَاءُ ثَبَاتِ الْقَلْب',
      arabicText: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',
      pronunciation: 'Yaa Muqallibal quloobi thabbit qalbee \'ala deenik',
      translationEnglish: 'O Changer of the hearts, make my heart firm upon Your religion.',
      translationUrdu: 'اے دلوں کو پھیرنے والے! میرے دل کو اپنے دین پر ثابت قدم رکھ۔',
      translationHindi: 'ऐ दिलों को फेरने वाले! मेरे दिल को अपने दीन पर क़ायम रख।',
      order: 24
    },
    {
      id: 'dua-visiting-graveyard',
      category: 'duas',
      title: 'Dua when Visiting the Graveyard (قبرستان میں داخل ہونے کی دعا)',
      titleArabic: 'دُعَاءُ زِيَارَةِ الْقُبُور',
      arabicText: 'السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ',
      pronunciation: 'Assalamu \'alaykum ahlad-diyaari minal mu\'mineena wal muslimeen',
      translationEnglish: 'Peace be upon you, O inhabitants of the dwellings, believers and Muslims.',
      translationUrdu: 'اے ان گھروں (قبروں) میں رہنے والے مومنو اور مسلمانو! تم پر سلامتی ہو۔',
      translationHindi: 'ऐ कब्रों में रहने वाले मोमिनो और मुसलमानो! तुम पर सलामती हो।',
      order: 25
    },
    {
      id: 'dua-ending-gathering',
      category: 'duas',
      title: 'Dua for Ending a Gathering (مجلس کے اختتام کی دعا)',
      titleArabic: 'دُعَاءُ كَفَّارَةِ الْمَجْلِس',
      arabicText: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
      pronunciation: 'Subhanakallahumma wa bihamdika, ash-hadu an laa ilaaha illa anta, astaghfiruka wa atoobu ilayk',
      translationEnglish: 'Glory is to You, O Allah, and praise is to You. I bear witness that there is none worthy of worship but You. I seek Your forgiveness and repent to You.',
      translationUrdu: 'اے اللہ! تو پاک ہے اور تیری ہی تعریف ہے، میں گواہی دیتا ہوں کہ تیرے سوا کوئی معبود نہیں، میں تجھ سے بخشش مانگتا ہوں اور تیری طرف توبہ کرتا ہوں۔',
      translationHindi: 'ऐ अल्लाह! तू पाक है और तेरी ही तारीफ है, मैं गवाही देता हूँ कि तेरे सिवा कोई माबूद नहीं, मैं तुझसे माफ़ी मांगता हूँ।',
      order: 26
    },
    {
      id: 'dua-asking-forgiveness',
      category: 'duas',
      title: 'Dua for Asking Forgiveness (مغفرت طلب کرنے کی دعا)',
      titleArabic: 'دُعَاءُ طَلَبِ الْمَغْفِرَة',
      arabicText: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
      pronunciation: 'Rabbigh-fir lee wa tub \'alayya innaka antat-Tawwaabur-Raheem',
      translationEnglish: 'O my Lord, forgive me and accept my repentance, indeed You are the Accepting of repentance, the Merciful.',
      translationUrdu: 'اے میرے رب! مجھے بخش دے اور میری توبہ قبول فرما، بے شک تو ہی توبہ قبول کرنے والا، نہایت رحم کرنے والا ہے۔',
      translationHindi: 'ऐ मेरे रब! मुझे बख्श दे और मेरी तौबा कुबूल फरमा, बेशक तू तौबा कुबूल करने वाला और रहम करने वाला है।',
      order: 27
    },
    {
      id: 'dua-difficult-task',
      category: 'duas',
      title: 'Dua when Facing a Difficult Task (مشکل کام کے وقت کی دعا)',
      titleArabic: 'دُعَاءُ تَيْسِيرِ الْأُمُور',
      arabicText: 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا',
      pronunciation: 'Allahumma laa sahla illa maa ja\'altahoo sahla, wa anta taj\'alul hazna idha shi\'ta sahla',
      translationEnglish: 'O Allah, there is no ease except in that which You have made easy, and You make the difficulty, if You wish, easy.',
      translationUrdu: 'اے اللہ! کوئی کام آسان نہیں مگر جسے تو آسان کر دے، اور تو جب چاہے مشکل کو بھی آسان کر دیتا ہے۔',
      translationHindi: 'ऐ अल्लाह! कोई काम आसान नहीं मगर जिसे तू आसान कर दे, और तू जब चाहे मुश्किल को आसान बना देता है।',
      order: 28
    },
    {
      id: 'dua-entering-market',
      category: 'duas',
      title: 'Dua when Entering the Market (بازار میں داخل ہونے کی دعا)',
      titleArabic: 'دُعَاءُ دُخُولِ السُّوق',
      arabicText: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِیکَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      pronunciation: 'Laa ilaaha illallahu wahdahu la shareeka lah, lahul mulku wa lahul hamdu, yuhyee wa yumeetu, wa huwa hayyun laa yamoot, biyadihil khayr, wa huwa \'ala kulli shay\'in qadeer',
      translationEnglish: 'There is none worthy of worship except Allah alone, without partner. To Him belongs the dominion, and to Him is all praise. He gives life and causes death, and He is living and does not die. In His hand is all good, and He is over all things competent.',
      translationUrdu: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کے لیے تمام تعریفیں ہیں، وہی زندہ کرتا ہے اور وہی مارتا ہے، اور وہ ہمیشہ زندہ رہنے والا ہے اسے موت نہیں، اسی کے ہاتھ میں ہر بھلائی ہے اور وہ ہر چیز پر قادر ہے۔',
      translationHindi: 'अल्लाह के सिवा कोई माबूद नहीं, वह अकेला है उसका कोई साझी नहीं, उसी का मुल्क है और उसी के हाथ में सारी भलाई है।',
      order: 29
    },
    {
      id: 'dua-seeing-afflicted',
      category: 'duas',
      title: 'Dua when Seeing Someone in Affliction (کسی کو مصیبت یا بیماری میں دیکھنے کی دعا)',
      titleArabic: 'دُعَاءُ رُؤْيَةِ الْمُبْتَلَى',
      arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلَاكَ بِهِ وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلًا',
      pronunciation: 'Alhamdu lillahilladhi \'aafaanee mim-mabtalaaka bihee wa faddalanee \'ala katheerim-mimman khalaqa tafdeela',
      translationEnglish: 'All praise is to Allah Who has saved me from what He has afflicted you with, and has greatly preferred me over many of His creation.',
      translationUrdu: 'تمام تعریفیں اس اللہ کے لیے ہیں جس نے مجھے اس مصیبت سے عافیت دی جس میں اس نے تجھے مبتلا کیا، اور مجھے اپنی بہت سی مخلوقات پر بڑی فضیلت دی۔',
      translationHindi: 'तमाम तारीफें अल्लाह के लिए हैं जिसने मुझे इस मुसीबत से बचाया जिसमें तुझे मुब्तिला किया।',
      order: 30
    },
    {
      id: 'dua-thana-salah',
      category: 'duas',
      title: 'Thana (ثناء - نماز کی شروعات کی دعا)',
      titleArabic: 'دُعَاءُ الِاسْتِفْتَاحِ (الثَّنَاء)',
      arabicText: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ',
      pronunciation: 'Subhaanakallahumma wa bihamdika, wa tabaarakas-muka, wa ta\'aala jadduka, wa laa ilaaha ghayruk',
      translationEnglish: 'Glory be to You, O Allah, and all praise is due to You. Blessed is Your name, and high is Your majesty, and there is no deity worthy of worship except You.',
      translationUrdu: 'اے اللہ! تو پاک ہے اور تیری ہی تعریف ہے، اور تیرا نام برکت والا ہے، اور تیری شان بہت بلند ہے، اور تیرے سوا کوئی معبود نہیں۔',
      translationHindi: 'ऐ अल्लाह! तू पाक है और तेरी ही तारीफ है, और तेरा नाम बरकत वाला है, और तेरी शान बहुत बुलंद है, और तेरे सिवा कोई माबूद नहीं।',
      order: 31
    },
    {
      id: 'dua-attahiyat-tashahhud',
      category: 'duas',
      title: 'Attahiyat / Tashahhud (التحيات - نماز میں قعدہ/بیٹھنے کی دعا)',
      titleArabic: 'التَّشَهُّد (التَّحِيَّات)',
      arabicText: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
      pronunciation: 'Attahiyyatu lillahi was-salawaatu wat-tayyibaat, assalaamu \'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakaatuh, assalaamu \'alayna wa \'ala \'ibaadillahis-saaliheen, ash-hadu an laa ilaaha illallahu, wa ash-hadu anna Muhammadan \'abduhoo wa rasooluh',
      translationEnglish: 'All verbal, physical, and monetary worship is due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His servant and His Messenger.',
      translationUrdu: 'تمام قولی، بدنی اور مالی عبادتیں اللہ ہی کے لیے ہیں۔ اے نبی! آپ پر سلام ہو اور اللہ کی رحمت اور اس کی برکتیں نازل ہوں۔ ہم پر اور اللہ کے تمام نیک بندوں پر سلام ہو۔ میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، اور میں گواہی دیتا ہوں کہ محمد (ﷺ) اس کے بندے اور رسول ہیں۔',
      translationHindi: 'तमाम इबादतें अल्लाह ही के लिए हैं। ऐ नबी! आप पर सलाम हो और अल्लाह की रहमत और बरकतें हों। हम पर और अल्लाह के नेक बन्दों पर सलाम हो।',
      order: 32
    },
    {
      id: 'dua-masoora-salah',
      category: 'duas',
      title: 'Dua-e-Masoora (دعائے ماثورہ - نماز کے آخر میں درود کے بعد کی دعا)',
      titleArabic: 'الدُّعَاءُ الْمَأْثُورُ فِي آخِرِ الصَّلَاة',
      arabicText: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
      pronunciation: 'Allahumma innee zalamtu nafsee zulman katheera, wa la yaghfirudh-dhunooba illa anta, faghfir lee maghfiratam-min \'indika, warhamnee innaka antal Ghafoorur-Raheem',
      translationEnglish: 'O Allah! I have wronged myself greatly, and none forgives sins except You. So grant me forgiveness from Yourself and have mercy upon me. Indeed, You are the Forgiving, the Merciful.',
      translationUrdu: 'اے اللہ! بے شک میں نے اپنی جان پر بہت ظلم کیا ہے، اور تیرے سوا کوئی گناہوں کو معاف نہیں کر سکتا، پس مجھے اپنے پاس سے خاص بخشش کے ساتھ معاف فرما اور مجھ پر رحم فرما، بے شک تو ہی بہت بخشنے والا اور نہایت رحم کرنے والا ہے۔',
      translationHindi: 'ऐ अल्लाह! बेशक मैंने अपनी जान पर बहुत ज़ुल्म किया है, और तेरे सिवा कोई गुनाहों को माफ नहीं कर सकता, पस मुझे अपनी तरफ से खास बख्शिश अता फरमा।',
      order: 33
    },
    {
      id: 'dua-qunoot-witr',
      category: 'duas',
      title: 'Dua-e-Qunoot (دعائے قنوت - نمازِ وتر کی دعا)',
      titleArabic: 'دُعَاءُ الْقُنُوتِ فِي صَلَاةِ الْوِتْر',
      arabicText: 'اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ، وَنَشْكُرُكَ وَلَا نَكْفُرُكَ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ. اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، وَنَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ',
      pronunciation: 'Allahumma inna nasta\'eenuka wa nastaghfiruka wa nu\'minu bika wa natawakkalu \'alayka wa nuthnee \'alaykal khayr, wa nashkuruka wa laa nakfuruka, wa nakhla\'u wa natruku may-yafjuruk. Allahumma iyyaka na\'budu wa laka nusallee wa nasjudu wa ilayka nas\'aa wa nahfid, wa narjoo rahmataka wa nakhshaa \'adhaabaka, inna \'adhaabaka bil-kuffaari mulhiq',
      translationEnglish: 'O Allah! We seek Your help, seek Your forgiveness, believe in You, rely on You, and praise You in the best manner. We thank You and are not ungrateful to You, and we alienate and forsake those who disobey You. O Allah! You alone we worship, to You we pray and prostrate, to You we strive and hasten. We hope for Your mercy and fear Your punishment. Indeed, Your punishment will overtake the disbelievers.',
      translationUrdu: 'اے اللہ! ہم تجھ سے مدد مانگتے ہیں، تجھ سے بخشش طلب کرتے ہیں، تجھ پر ایمان لاتے ہیں، تجھ پر بھروسہ کرتے ہیں، اور تیری بہت اچھی تعریف کرتے ہیں، ہم تیرا شکر ادا کرتے ہیں اور تیری ناشکری نہیں کرتے، اور جو تیری نافرمانی کرے ہم اس سے الگ ہوتے ہیں اور اسے چھوڑ دیتے ہیں۔ اے اللہ! ہم تیری ہی عبادت کرتے ہیں، تیرے ہی لیے نماز پڑھتے ہیں اور سجدہ کرتے ہیں، اور تیری ہی طرف دوڑتے اور خدمت کے لیے حاضر رہتے ہیں، ہم تیری رحمت کے امیدوار ہیں اور تیرے عذاب سے ڈرتے ہیں، بے شک تیرا عذاب کافروں کو پہنچنے والا ہے۔',
      translationHindi: 'ऐ अल्लाह! हम तुझसे मदद मांगते हैं, तुझसे बख्शिश चाहते हैं, तुझ पर ईमान लाते हैं, और तुझ पर भरोसा करते हैं। हम तेरी ही इबादत करते हैं, तेरे ही लिए नमाज़ पढ़ते और सजदा करते हैं।',
      order: 34
    },
    {
      id: 'dua-before-eating',
      category: 'duas',
      title: 'Dua Before Eating Food (کھانا کھانے سے پہلے کی دعا)',
      titleArabic: 'دُعَاءُ قَبْلَ الطَّعَام',
      arabicText: 'بِسْمِ اللَّهِ وَعَلَىٰ بَرَكَةِ اللَّهِ',
      pronunciation: 'Bismillahi wa \'ala barakatillah',
      translationEnglish: 'In the name of Allah and upon the blessings of Allah.',
      translationUrdu: 'اللہ کے نام کے ساتھ اور اللہ کی برکت پر (میں کھانا شروع کرتا ہوں)۔',
      translationHindi: 'अल्लाह के नाम से और अल्लाह की बरकत पर।',
      order: 35
    },
    {
      id: 'dua-after-eating',
      category: 'duas',
      title: 'Dua After Finishing Food (کھانا کھانے کے بعد کی دعا)',
      titleArabic: 'دُعَاءُ بَعْدَ الطَّعَام',
      arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
      pronunciation: 'Alhamdu lillahilladhi at\'amana wa saqana wa ja\'alana muslimeen',
      translationEnglish: 'All praise is due to Allah Who gave us food and drink and made us Muslims.',
      translationUrdu: 'تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمان بنایا۔',
      translationHindi: 'तमाम तारीफें अल्लाह के लिए हैं जिसने हमें खिलाया, पिलाया और हमें मुसलमान बनाया।',
      order: 36
    },
    {
      id: 'dua-sleeping',
      category: 'duas',
      title: 'Dua Before Sleeping (سوتے وقت کی دعا)',
      titleArabic: 'دُعَاءُ النَّوْم',
      arabicText: 'اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا',
      pronunciation: 'Allahumma bismika amootu wa ahya',
      translationEnglish: 'O Allah, in Your name I die (sleep) and I live (wake up).',
      translationUrdu: 'اے اللہ! تیرے ہی نام کے ساتھ میں مرتا ہوں اور جیتا ہوں۔',
      translationHindi: 'ऐ अल्लाह! तेरे ही नाम से मैं सोता हूँ और जागता हूँ।',
      order: 37
    },
    {
      id: 'dua-waking',
      category: 'duas',
      title: 'Dua After Waking Up (نیند سے بیدار ہونے کی دعا)',
      titleArabic: 'دُعَاءُ الِاسْتِيقَاظ',
      arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
      pronunciation: 'Alhamdu lillahilladhi ahyana ba\'da ma amatana wa ilayhin-nushoor',
      translationEnglish: 'All praise is due to Allah Who brought us to life after causing us to die, and to Him is the final return.',
      translationUrdu: 'تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مارنے کے بعد زندہ کیا اور اسی کی طرف لوٹ کر جانا ہے۔',
      translationHindi: 'सब तारीफें अल्लाह के लिए हैं जिसने हमें मौत (नींद) के बाद जिंदगी दी और उसी की तरफ उठना है।',
      order: 38
    },
    {
      id: 'dua-parents',
      category: 'duas',
      title: 'Dua for Parents / Mother & Father (والدین کے لیے دعا)',
      titleArabic: 'دُعَاءُ الْوَالِدَيْن',
      arabicText: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      pronunciation: 'Rabbir hamhuma kama rabbayani sagheera',
      translationEnglish: 'My Lord, have mercy upon them both as they raised me when I was small.',
      translationUrdu: 'اے میرے پروردگار! تو ان دونوں پر رحم فرما جس طرح انہوں نے بچپن میں میری پرورش فرمائی۔',
      translationHindi: 'ऐ मेरे रब! तू मेरे वालिदैन पर रहम फरमा जैसा कि उन्होंने मुझे बचपन में पाला।',
      order: 39
    },
    {
      id: 'dua-knowledge',
      category: 'duas',
      title: 'Dua for Increasing Knowledge (علم میں اضافے کی دعا)',
      titleArabic: 'دُعَاءُ زِيَادَةِ الْعِلْم',
      arabicText: 'رَّبِّ زِدْنِي عِلْمًا',
      pronunciation: 'Rabbi zidnee \'ilma',
      translationEnglish: 'My Lord, increase me in knowledge.',
      translationUrdu: 'اے میرے رب! میرے علم میں اضافہ فرما۔',
      translationHindi: 'ऐ मेरे रब! मेरे इल्म (ज्ञान) में इज़ाफ़ा फरमा।',
      order: 40
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
          questionText: 'Which word comes SECOND if you arrange them like a dictionary?',
          options: ['Ant', 'Ape', 'Apple', 'Axe'],
          correctOptionIndex: 1,
          explanation: 'They all start with "A", so look at the second letter! "n" comes before "p", so Ant is first and Ape is second.'
        },
        {
          id: 'q-4',
          questionText: 'If you start at "C" and jump forward 3 steps in the alphabet, where do you land?',
          options: ['E', 'F', 'G', 'H'],
          correctOptionIndex: 1,
          explanation: 'Count forward 3 times: C -> D(1) -> E(2) -> F(3).'
        },
        {
          id: 'q-5',
          questionText: 'Which of these words has MORE vowels than consonants?',
          options: ['BIRD', 'TREE', 'IDEA', 'FROG'],
          correctOptionIndex: 2,
          explanation: '"IDEA" has 3 vowels (I, E, A) and only 1 consonant (D).'
        },
        {
          id: 'q-6',
          questionText: 'What is the 5th CONSONANT of the alphabet?',
          options: ['E', 'F', 'G', 'H'],
          correctOptionIndex: 2,
          explanation: 'The first five consonants are B, C, D, F, G (remember, A and E are vowels and get skipped!).'
        },
        {
          id: 'q-7',
          questionText: 'If we write the alphabet backwards, what is the 3rd letter?',
          options: ['C', 'X', 'Y', 'W'],
          correctOptionIndex: 1,
          explanation: 'Going backwards: Z is 1st, Y is 2nd, and X is 3rd!'
        },
        {
          id: 'q-8',
          questionText: 'Which letter is exactly in the middle of "A" and "I"?',
          options: ['D', 'E', 'F', 'G'],
          correctOptionIndex: 1,
          explanation: 'Count: A, B, C, D, E, F, G, H, I. "E" sits perfectly in the center.'
        },
        {
          id: 'q-9',
          questionText: 'If A=1, B=2, and C=3, which word\'s letters add up to exactly 6?',
          options: ['CAB', 'DAD', 'BED', 'ADD'],
          correctOptionIndex: 0,
          explanation: 'Let\'s add them up: C(3) + A(1) + B(2) = 6!'
        },
        {
          id: 'q-10',
          questionText: 'Which letter is missing in this jumping pattern? B, D, F, H, __',
          options: ['I', 'J', 'K', 'L'],
          correctOptionIndex: 1,
          explanation: 'We are skipping one letter every time. Skip I and jump to J.'
        },
        {
          id: 'q-11',
          questionText: 'Which word STARTS with a vowel and ENDS with a consonant?',
          options: ['APPLE', 'IGLOO', 'OSTRICH', 'UMBRELLA'],
          correctOptionIndex: 2,
          explanation: 'It starts with "O" (vowel) and ends with "H" (consonant).'
        },
        {
          id: 'q-12',
          questionText: 'What is the 4th letter of the month that comes right after March?',
          options: ['R', 'I', 'L', 'A'],
          correctOptionIndex: 1,
          explanation: 'The month is APRIL. The letters are A-P-R-I-L.'
        },
        {
          id: 'q-13',
          questionText: 'How many consonants are in the word "BUTTERFLY"?',
          options: ['5', '6', '7', '8'],
          correctOptionIndex: 2,
          explanation: 'U and E are vowels. The rest (B, T, T, R, F, L, Y) are 7 consonants!'
        },
        {
          id: 'q-14',
          questionText: 'Which of these letters is drawn using ONLY straight lines?',
          options: ['C', 'O', 'S', 'H'],
          correctOptionIndex: 3,
          explanation: 'H has two straight lines down and one across. No curvy lines!'
        },
        {
          id: 'q-15',
          questionText: 'If you take the word "SMILE" and remove all the vowels, how many letters are left?',
          options: ['2', '3', '4', '5'],
          correctOptionIndex: 1,
          explanation: 'Take away the vowels I and E. You are left with S, M, L (which is 3 letters).'
        },
        {
          id: 'q-16',
          questionText: 'Which letter appears exactly TWICE in the word "UMBRELLA"?',
          options: ['A', 'E', 'L', 'R'],
          correctOptionIndex: 2,
          explanation: 'The letter "L" appears twice in U-M-B-R-E-L-L-A.'
        }
      ]
    },
    {
      id: 'quiz-ar-alpha',
      title: 'Arabic Alphabet Challenge (حروف الهجاء)',
      category: 'arabic',
      subsection: 'Arabic Letters',
      iconName: 'Sparkles',
      difficulty: 'beginner',
      isPublished: true,
      order: 2,
      questions: [
        {
          id: 'q-ar-1',
          questionText: 'Which letter comes first in the Arabic alphabet?',
          options: ['ب', 'أ', 'ت', 'ج'],
          correctOptionIndex: 1,
          explanation: 'Alif (أ) is the first letter of the Arabic alphabet.'
        },
        {
          id: 'q-ar-2',
          questionText: 'Which letter comes immediately after "أ" (Alif)?',
          options: ['ت', 'ث', 'ب', 'ج'],
          correctOptionIndex: 2,
          explanation: 'Baa (ب) comes right after Alif.'
        },
        {
          id: 'q-ar-3',
          questionText: 'Which letter has ONE dot underneath it?',
          options: ['ت', 'ب', 'ث', 'ن'],
          correctOptionIndex: 1,
          explanation: 'Baa (ب) has one dot placed beneath it.'
        },
        {
          id: 'q-ar-4',
          questionText: 'Which letter has TWO dots on top?',
          options: ['ب', 'ت', 'ث', 'ي'],
          correctOptionIndex: 1,
          explanation: 'Taa (ت) has two dots above it.'
        },
        {
          id: 'q-ar-5',
          questionText: 'Which letter has THREE dots on top?',
          options: ['ت', 'ب', 'ث', 'ش'],
          correctOptionIndex: 2,
          explanation: 'Thaa (ث) has three dots on top in a triangle shape.'
        },
        {
          id: 'q-ar-6',
          questionText: 'Which letter has a dot in its belly (center)?',
          options: ['ح', 'ج', 'خ', 'ع'],
          correctOptionIndex: 1,
          explanation: 'Jeem (ج) has a single dot inside its curve.'
        },
        {
          id: 'q-ar-7',
          questionText: 'Which of these letters has NO dots at all?',
          options: ['ج', 'خ', 'ح', 'ذ'],
          correctOptionIndex: 2,
          explanation: 'Haa (ح) has no dots at all.'
        },
        {
          id: 'q-ar-8',
          questionText: 'Which letter looks like "ح" but has a dot on top?',
          options: ['ج', 'خ', 'غ', 'ع'],
          correctOptionIndex: 1,
          explanation: 'Khaa (خ) has a dot directly on top.'
        },
        {
          id: 'q-ar-9',
          questionText: 'Which letter comes after "د" (Daal)?',
          options: ['ر', 'ز', 'ذ', 'س'],
          correctOptionIndex: 2,
          explanation: 'Thaal (ذ) comes right after Daal (د).'
        },
        {
          id: 'q-ar-10',
          questionText: 'Which letter looks like "ر" (Raa) with a dot above it?',
          options: ['ز', 'ذ', 'د', 'و'],
          correctOptionIndex: 0,
          explanation: 'Zay (ز) is written just like Raa (ر) with a dot on top.'
        },
        {
          id: 'q-ar-11',
          questionText: 'Which letter has three teeth (curves) and NO dots?',
          options: ['ش', 'س', 'ص', 'ض'],
          correctOptionIndex: 1,
          explanation: 'Seen (س) has three small peaks and no dots.'
        },
        {
          id: 'q-ar-12',
          questionText: 'Which letter has three teeth AND three dots on top?',
          options: ['س', 'ش', 'ث', 'ص'],
          correctOptionIndex: 1,
          explanation: 'Sheen (ش) is Seen with three dots above.'
        },
        {
          id: 'q-ar-13',
          questionText: 'शब्द "شَمْس" (सूरज) का पहला अक्षर कौन सा है?',
          options: ['س', 'ص', 'ش', 'ق'],
          correctOptionIndex: 2,
          explanation: '"شَمْس" (शम्स) शब्द \'ش\' (शीन) से शुरू होता है।'
        },
        {
          id: 'q-ar-14',
          questionText: 'कौन सा अक्षर छाते की मुड़ी हुई डंडी (Umbrella handle) जैसा दिखता है?',
          options: ['ك', 'ل', 'م', 'أ'],
          correctOptionIndex: 1,
          explanation: '\'ل\' (लाम) का आकार छाते की डंडी जैसा होता है।'
        },
        {
          id: 'q-ar-15',
          questionText: 'इस क्रम में कौन सा अक्षर गायब है? ك, ل, __, ن',
          options: ['هـ', 'م', 'و', 'ي'],
          correctOptionIndex: 1,
          explanation: 'सही क्रम है: ك, ل, م (मीम), ن।'
        },
        {
          id: 'q-ar-16',
          questionText: 'इनमें से कौन सा अक्षर अपने आगे (बाद) वाले अक्षर से नहीं जुड़ता?',
          options: ['ب', 'س', 'د', 'ج'],
          correctOptionIndex: 2,
          explanation: '\'د\' (दाल) उन अक्षरों में से एक है जो अपने बाद वाले अक्षर का हाथ नहीं पकड़ते।'
        },
        {
          id: 'q-ar-17',
          questionText: 'कौन सा अक्षर \'ر\' (रा) जैसा दिखता है लेकिन उस पर एक बिंदु होता है?',
          options: ['د', 'ذ', 'ز', 'و'],
          correctOptionIndex: 2,
          explanation: '\'ز\' (ज़ा) बिल्कुल \'ر\' (रा) जैसा होता है बस ऊपर एक बिंदु होता है।'
        },
        {
          id: 'q-ar-18',
          questionText: 'अरबी वर्णमाला का तीसरा (3rd) अक्षर कौन सा है?',
          options: ['ت', 'ث', 'أ', 'ب'],
          correctOptionIndex: 0,
          explanation: 'क्रम है: أ (पहला), ب (दूसरा), ت (तीसरा)।'
        },
        {
          id: 'q-ar-19',
          questionText: 'इनमें से किस अक्षर के ऊपर दो बिंदु (नुक़्ते) होते हैं?',
          options: ['ف', 'ق', 'م', 'ك'],
          correctOptionIndex: 1,
          explanation: '\'ق\' (क़ाफ़) के ऊपर दो बिंदु होते हैं, जबकि \'ف\' पर सिर्फ एक होता है।'
        },
        {
          id: 'q-ar-20',
          questionText: 'इनमें से कौन सा अक्षर \'س\' (सीन) का जुड़वा भाई है जिसके ऊपर 3 बिंदु होते हैं?',
          options: ['ش', 'ص', 'ض', 'ث'],
          correctOptionIndex: 0,
          explanation: '\'ش\' (शीन) बिल्कुल \'س\' (सीन) जैसा होता है, बस उस पर 3 बिंदु होते हैं।'
        },
        {
          id: 'q-ar-21',
          questionText: 'इनमें से किस अक्षर की शक्ल नाव (Boat) जैसी नहीं है?',
          options: ['ب', 'ت', 'ث', 'ج'],
          correctOptionIndex: 3,
          explanation: '(ب, ت, ث) तीनों नाव की तरह होते हैं, जबकि \'ج\' (जीम) की शक्ल अलग है।'
        },
        {
          id: 'q-ar-22',
          questionText: 'शब्द "كِتَاب" (किताब) का पहला अक्षर कौन सा है?',
          options: ['ق', 'ك', 'ح', 'ع'],
          correctOptionIndex: 1,
          explanation: '"كِتَاب" (किताब) शब्द \'ك\' (काफ़) से शुरू होता है।'
        },
        {
          id: 'q-ar-23',
          questionText: 'इनमें से किस शब्द के किसी भी अक्षर पर कोई बिंदु (नुक़्ता) नहीं है?',
          options: ['حِمَار', 'قِطَّة', 'أَسَد', 'كَلْب'],
          correctOptionIndex: 2,
          explanation: 'أَسَد (असद यानी शेर) में अलिफ़, सीन और दाल हैं, और इनमें से किसी पर भी बिंदु नहीं होता।'
        },
        {
          id: 'q-ar-24',
          questionText: 'किस अक्षर के नीचे दो बिंदु (नुक़्ते) होते हैं?',
          options: ['ق', 'ت', 'ي', 'ث'],
          correctOptionIndex: 2,
          explanation: '\'ي\' (या) जब शुरू या बीच में आता है तो उसके नीचे 2 बिंदु होते हैं।'
        },
        {
          id: 'q-ar-25',
          questionText: 'शब्द "قَمَر" (चाँद) के बिल्कुल बीच में कौन सा अक्षर है?',
          options: ['ق', 'ر', 'م', 'ن'],
          correctOptionIndex: 2,
          explanation: 'قَمَر में (ق - م - ر) आते हैं, इसलिए बीच में \'م\' (मीम) है।'
        },
        {
          id: 'q-ar-26',
          questionText: 'इनमें से कौन सा शब्द गोल ता \'ة\' (ता मरबूता) पर खत्म होता है?',
          options: ['بَيْت', 'بِنْت', 'شَجَرَة', 'حُوت'],
          correctOptionIndex: 2,
          explanation: '"شَجَرَة" (पेड़) के अंत में गोल ता (ة) आती है जो अरबी में स्त्रीलिंग की पहचान है।'
        },
        {
          id: 'q-ar-27',
          questionText: 'इनमें से कौन सा पक्षी \'ع\' (ऐन) अक्षर से शुरू होता है?',
          options: ['عُصْفُور', 'قِطَّة', 'غَزَال', 'كَلْب'],
          correctOptionIndex: 0,
          explanation: 'عُصْفُور (उसफ़ूर यानी चिड़िया) \'ع\' (ऐन) से शुरू होता है।'
        },
        {
          id: 'q-ar-28',
          questionText: 'अगर हम इन अक्षरों (ل - ي - ف) को उल्टा पढ़ें, तो कौन सा शब्द बनेगा?',
          options: ['قَفْل', 'فِيل', 'لَيْل', 'فُل'],
          correctOptionIndex: 1,
          explanation: 'उल्टा पढ़ने पर ف - ي - ل (फ़ील यानी हाथी) बनेगा!'
        },
        {
          id: 'q-ar-29',
          questionText: 'शब्द "بَاب" (दरवाज़ा) में कुल मिलाकर कितने बिंदु (नुक़्ते) हैं?',
          options: ['١', '٢', '٣', '٠'],
          correctOptionIndex: 1,
          explanation: 'पहले \'ب\' का 1 बिंदु और आखिरी \'ب\' का 1 बिंदु। (1+1=2 अरबी में ٢)।'
        },
        {
          id: 'q-ar-30',
          questionText: 'कौन सा अक्षर शुरू और अंत में अपनी शक्ल बिल्कुल बदल लेता है (जैसे هَدِيَّة और وَجْه में)?',
          options: ['ا', 'هـ', 'د', 'ر'],
          correctOptionIndex: 1,
          explanation: '\'هـ\' (हा) शुरू में \'هـ\' और अंत में \'ـه\' या \'ه\' लिखा जाता है।'
        },
        {
          id: 'q-ar-31',
          questionText: 'अगर हम एक-एक अक्षर छोड़कर आगे बढ़ें: \'أ\' से \'ت\' (ب छोड़ा), तो \'ج\' के बाद क्या आएगा?',
          options: ['د', 'خ', 'ذ', 'ر'],
          correctOptionIndex: 1,
          explanation: 'ج, ح, خ। \'ح\' को छोड़ने पर हम \'خ\' (ख़ा) पर पहुँचेंगे।'
        },
        {
          id: 'q-ar-32',
          questionText: 'इनमें से कौन सा शब्द \'ن\' (नून) अक्षर पर खत्म होता है?',
          options: ['عَيْن', 'فَم', 'رَأْس', 'قَدَم'],
          correctOptionIndex: 0,
          explanation: '"عَيْن" (ऐन यानी आँख) के अंत में \'ن\' (नून) आता है।'
        },
        {
          id: 'q-ar-33',
          questionText: 'जब \'अलिफ़\' के नीचे \'ज़ेर\' (Kasra) की आवाज़ हो, तो उसे कैसे लिखते हैं?',
          options: ['أ', 'آ', 'إ', 'ؤ'],
          correctOptionIndex: 2,
          explanation: 'ज़ेर होने पर हमज़ा भी अलिफ़ के नीचे आ जाता है, जैसे (إ)।'
        },
        {
          id: 'q-ar-34',
          questionText: 'इस क्रम को पूरा करें: ا , ب , ت , __ , ج',
          options: ['ث', 'ح', 'خ', 'د'],
          correctOptionIndex: 0,
          explanation: 'अलिफ़, बा, ता के बाद \'ث\' (सा) आता है।'
        },
        {
          id: 'q-ar-35',
          questionText: '\'ج\' (जीम) के पेट (बीच) में कितने बिंदु होते हैं?',
          options: ['١', '٢', '٣', '٠'],
          correctOptionIndex: 0,
          explanation: '\'ج\' के बीच में सिर्फ एक (١) बिंदु होता है।'
        },
        {
          id: 'q-ar-36',
          questionText: 'कौन सा अक्षर \'ج\' (जीम) जैसा दिखता है, लेकिन उसके अंदर कोई बिंदु नहीं होता?',
          options: ['خ', 'ح', 'ع', 'غ'],
          correctOptionIndex: 1,
          explanation: '\'ح\' (हा) बिल्कुल खाली होता है, इसमें कोई नुक़्ता नहीं होता।'
        },
        {
          id: 'q-ar-37',
          questionText: 'इनमें से कौन सा फल \'ت\' (ता) से शुरू होता है?',
          options: ['تُفَّاحَة', 'بُرْتُقَال', 'مَوْز', 'عِنَب'],
          correctOptionIndex: 0,
          explanation: '"تُفَّاحَة" (सेब) \'ت\' (ता) से शुरू होता है।'
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
        },
        {
          id: 'q-hi-3',
          questionText: 'हिंदी वर्णमाला का सबसे पहला अक्षर कौन सा है?',
          options: ['आ', 'अ', 'क', 'इ'],
          correctOptionIndex: 1,
          explanation: 'हिंदी वर्णमाला (Varnamala) हमेशा स्वर \'अ\' (जैसे अ से अनार) से शुरू होती है।'
        },
        {
          id: 'q-hi-4',
          questionText: '\'अ\' के ठीक बाद कौन सा अक्षर आता है?',
          options: ['इ', 'ऊ', 'आ', 'ए'],
          correctOptionIndex: 2,
          explanation: '\'अ\' के बाद \'आ\' आता है (जैसे आ से आम)। \'आ\' में एक अतिरिक्त डंडी (मात्रा) होती है।'
        },
        {
          id: 'q-hi-5',
          questionText: '\'क\' के ठीक बाद कौन सा अक्षर आता है?',
          options: ['ग', 'ख', 'घ', 'च'],
          correctOptionIndex: 1,
          explanation: 'सही क्रम है: क, ख, ग, घ। इसलिए \'क\' के बाद \'ख\' आता है।'
        },
        {
          id: 'q-hi-6',
          questionText: 'इनमें से कौन सा अक्षर एक \'स्वर\' (Vowel) है?',
          options: ['प', 'म', 'इ', 'ल'],
          correctOptionIndex: 2,
          explanation: 'अ, आ, इ, ई आदि स्वर होते हैं। बाकी (प, म, ल) व्यंजन (Consonants) हैं।'
        },
        {
          id: 'q-hi-7',
          questionText: '\'च\' और \'ज\' के बीच में कौन सा अक्षर आता है?',
          options: ['छ', 'झ', 'ट', 'ठ'],
          correctOptionIndex: 0,
          explanation: 'वर्णमाला पढ़ते समय हम कहते हैं: च, छ, ज। इसलिए बीच में \'छ\' आता है।'
        },
        {
          id: 'q-hi-8',
          questionText: '\'प\' के ठीक बाद क्या आता है?',
          options: ['ब', 'भ', 'फ', 'म'],
          correctOptionIndex: 2,
          explanation: '\'प\' से पतंग के बाद \'फ\' से फल आता है!'
        },
        {
          id: 'q-hi-9',
          questionText: 'किस अक्षर से "उल्लू" (Owl) शब्द शुरू होता है?',
          options: ['अ', 'ऊ', 'उ', 'ओ'],
          correctOptionIndex: 2,
          explanation: '"उल्लू" शब्द छोटे \'उ\' से शुरू होता है।'
        },
        {
          id: 'q-hi-10',
          questionText: '\'त\' के बाद कौन सा अक्षर आता है?',
          options: ['थ', 'द', 'ध', 'न'],
          correctOptionIndex: 0,
          explanation: 'त से तरबूज़ के बाद थ से थर्मस (थ) आता है।'
        },
        {
          id: 'q-hi-11',
          questionText: 'इनमें से कौन सा अक्षर एक \'व्यंजन\' (Consonant) है?',
          options: ['ओ', 'औ', 'ए', 'म'],
          correctOptionIndex: 3,
          explanation: 'ओ, औ, ए स्वर हैं। \'म\' (मछली) एक व्यंजन है।'
        },
        {
          id: 'q-hi-12',
          questionText: '\'य\' के ठीक बाद कौन सा अक्षर आता है?',
          options: ['ल', 'व', 'र', 'श'],
          correctOptionIndex: 2,
          explanation: 'सही क्रम है: य, र, ल, व। इसलिए \'य\' के बाद \'र\' आता है।'
        },
        {
          id: 'q-hi-13',
          questionText: 'इनमें से किस अक्षर के पेट में एक तिरछी लाइन (लकीर) खींची होती है?',
          options: ['व', 'ब', 'क', 'प'],
          correctOptionIndex: 1,
          explanation: '\'ब\' (बकरी) और \'व\' (वन) एक जैसे दिखते हैं, लेकिन \'ब\' के पेट में एक लाइन कटी होती है।'
        },
        {
          id: 'q-hi-14',
          questionText: 'शब्द "कमल" (Lotus) का पहला अक्षर कौन सा है?',
          options: ['म', 'ल', 'क', 'ख'],
          correctOptionIndex: 2,
          explanation: 'क + म + ल = कमल! पहला अक्षर \'क\' है।'
        },
        {
          id: 'q-hi-15',
          questionText: '\'ल\' अक्षर से कौन सा शब्द शुरू होता है?',
          options: ['भालू', 'लट्टू', 'आम', 'केला'],
          correctOptionIndex: 1,
          explanation: '\'ल\' से लट्टू (Top) होता है!'
        },
        {
          id: 'q-hi-16',
          questionText: 'इनमें से किस अक्षर के ऊपर एक बिंदी (Anusvara) लगी होती है?',
          options: ['अ', 'आ', 'अं', 'अः'],
          correctOptionIndex: 2,
          explanation: '\'अं\' (अंगूर) के ऊपर हमेशा एक बिंदी (Dot) होती है।'
        },
        {
          id: 'q-hi-17',
          questionText: 'शब्द "किताब" (Book) में मूल रूप से पहला अक्षर कौन सा है?',
          options: ['त', 'ब', 'क', 'ख'],
          correctOptionIndex: 2,
          explanation: '"किताब" शब्द \'क\' अक्षर (जिस पर इ की मात्रा लगी है) से शुरू होता है।'
        },
        {
          id: 'q-hi-18',
          questionText: 'कौन सा अक्षर \'ट\' जैसा दिखता है, बस नीचे से पूरा गोल (बंद) होता है?',
          options: ['ढ', 'द', 'ठ', 'ड'],
          correctOptionIndex: 2,
          explanation: '\'ट\' आधा गोल होता है, और \'ठ\' (ठठेरा) पूरा गोल होता है।'
        },
        {
          id: 'q-hi-19',
          questionText: '\'स\' के ठीक बाद वर्णमाला में कौन सा अक्षर आता है?',
          options: ['ह', 'क्ष', 'श', 'ष'],
          correctOptionIndex: 0,
          explanation: 'सही क्रम है: श, ष, स, ह। \'स\' के बाद \'ह\' (हाथी) आता है।'
        },
        {
          id: 'q-hi-20',
          questionText: 'इनमें से किस अक्षर को अंग्रेजी के अक्षर \'U\' की तरह नीचे से घुमाकर लिखते हैं?',
          options: ['ग', 'प', 'न', 'र'],
          correctOptionIndex: 1,
          explanation: '\'प\' (पतंग) का आकार नीचे से \'U\' की तरह गोल होता है।'
        },
        {
          id: 'q-hi-21',
          questionText: 'शब्द "अनार" (Pomegranate) किस अक्षर से शुरू होता है?',
          options: ['आ', 'अं', 'अ', 'न'],
          correctOptionIndex: 2,
          explanation: 'अ से अनार! यह वर्णमाला का सबसे पहला शब्द है जो बच्चे सीखते हैं।'
        },
        {
          id: 'q-hi-22',
          questionText: '\'ड\' और \'ण\' के बीच में क्या आता है?',
          options: ['ट', 'ठ', 'ढ', 'त'],
          correctOptionIndex: 2,
          explanation: 'क्रम है: ट, ठ, ड, ढ, ण। बीच में \'ढ\' (ढक्कन) आता है।'
        },
        {
          id: 'q-hi-23',
          questionText: 'क, ख, ग, घ के बाद इस लाइन का आखिरी (5वाँ) अक्षर कौन सा है?',
          options: ['च', 'ञ', 'ण', 'ङ'],
          correctOptionIndex: 3,
          explanation: '\'क\' वर्ग (लाइन) का आखिरी अक्षर \'ङ\' (अंगा) होता है।'
        },
        {
          id: 'q-hi-24',
          questionText: 'शब्द "मछली" के बिल्कुल बीच में कौन सा अक्षर है?',
          options: ['म', 'छ', 'ल', 'ई'],
          correctOptionIndex: 1,
          explanation: 'म + छ + ली = मछली। बीच में \'छ\' (छाता) आता है।'
        },
        {
          id: 'q-hi-25',
          questionText: 'इनमें से किस अक्षर में कोई सीधी खड़ी डंडी (Standing line) नहीं होती?',
          options: ['क', 'म', 'र', 'प'],
          correctOptionIndex: 2,
          explanation: '\'क\', \'म\', \'प\' सब में एक सीधी लाइन होती है, लेकिन \'र\' (रथ) में कोई सीधी लाइन नहीं होती।'
        },
        {
          id: 'q-hi-26',
          questionText: 'अगर \'प\' (पतंग) के पेट में एक तिरछी लाइन खींच दें, तो वह कौन सा अक्षर बन जाएगा?',
          options: ['फ', 'ष', 'श', 'स'],
          correctOptionIndex: 1,
          explanation: '\'प\' के बीच में लाइन खींचने से वह \'ष\' (षट्कोण) बन जाता है!'
        },
        {
          id: 'q-hi-27',
          questionText: '"त्रिशूल" (Trident) शब्द किस अक्षर से शुरू होता है?',
          options: ['त', 'क्ष', 'त्र', 'ज्ञ'],
          correctOptionIndex: 2,
          explanation: 'त्रिशूल शब्द संयुक्त अक्षर \'त्र\' (T-R-A) से शुरू होता है।'
        },
        {
          id: 'q-hi-28',
          questionText: 'शब्द "मगरमच्छ" (Crocodile) का पहला अक्षर कौन सा है?',
          options: ['ग', 'म', 'र', 'छ'],
          correctOptionIndex: 1,
          explanation: 'मगरमच्छ की शुरुआत \'म\' से होती है।'
        },
        {
          id: 'q-hi-29',
          questionText: '\'ड\' (डमरू) के बिल्कुल नीचे एक बिंदु (बिंदी) लगाने से कौन सा अक्षर बनता है?',
          options: ['ढ़', 'ड़', 'ढ', 'झ'],
          correctOptionIndex: 1,
          explanation: '\'ड\' के नीचे बिंदी लगाने से \'ड़\' (जैसे सड़क में) बन जाता है।'
        },
        {
          id: 'q-hi-30',
          questionText: 'इनमें से कौन सा अक्षर स्वर (Vowel) नहीं है?',
          options: ['ऋ', 'ए', 'ओ', 'स'],
          correctOptionIndex: 3,
          explanation: '\'स\' (सेब) एक व्यंजन (Consonant) है। बाकी सब स्वर हैं।'
        },
        {
          id: 'q-hi-31',
          questionText: 'शब्द "बचपन" (Childhood) में कुल कितने अक्षर हैं?',
          options: ['2', '3', '4', '5'],
          correctOptionIndex: 2,
          explanation: 'ब + च + प + न = कुल 4 अक्षर हैं!'
        },
        {
          id: 'q-hi-32',
          questionText: '\'ज्ञ\' से कौन सा शब्द बनता है?',
          options: ['क्षत्रिय', 'त्रिशूल', 'ज्ञानी', 'श्रमिक'],
          correctOptionIndex: 2,
          explanation: '\'ज्ञ\' से ज्ञानी (Wise person) बनता है!'
        },
        {
          id: 'q-hi-33',
          questionText: 'अगर हम \'प\', \'फ\', \'ब\' को उल्टा (पीछे से) पढ़ें, तो सबसे पहले क्या आएगा?',
          options: ['प', 'फ', 'ब', 'भ'],
          correctOptionIndex: 2,
          explanation: 'उल्टा पढ़ने पर सबसे पहले \'ब\', फिर \'फ\', और अंत में \'प\' आएगा।'
        },
        {
          id: 'q-hi-34',
          questionText: 'इनमें से किस अक्षर के ऊपर पूरी शिरोरेखा (छत वाली लाइन) नहीं खींची जाती?',
          options: ['क', 'प', 'भ', 'त'],
          correctOptionIndex: 2,
          explanation: '\'भ\' और \'ध\' जैसे अक्षरों के ऊपर का गोल हिस्सा खुला रहता है, वहाँ लाइन नहीं खींचते।'
        },
        {
          id: 'q-hi-35',
          questionText: 'वर्णमाला का सबसे आखिरी संयुक्त अक्षर कौन सा होता है?',
          options: ['क्ष', 'त्र', 'ज्ञ', 'श्र'],
          correctOptionIndex: 3,
          explanation: 'हिंदी वर्णमाला के अंत में क्ष, त्र, ज्ञ और \'श्र\' (जैसे श्रमिक में) आते हैं।'
        },
        {
          id: 'q-hi-36',
          questionText: '"औ" (Aau) में ऊपर कितनी मात्राएँ (डंडियाँ) लगी होती हैं?',
          options: ['एक', 'दो', 'तीन', 'एक भी नहीं'],
          correctOptionIndex: 1,
          explanation: '\'ओ\' में ऊपर 1 मात्रा होती है, और \'औ\' (औरत) में ऊपर 2 मात्राएँ होती हैं।'
        },
        {
          id: 'q-hi-37',
          questionText: 'अगर \'व\' के पेट में लाइन खींचें तो वह \'ब\' बनता है। अगर \'च\' की खड़ी डंडी हटा दें तो वह कैसा दिखेगा?',
          options: ['U जैसा', 'O जैसा', 'C (या आधा चाँद) और एक लेटी लाइन', 'V जैसा'],
          correctOptionIndex: 2,
          explanation: '\'च\' से डंडी हटाने पर सिर्फ एक लेटी लाइन और एक आधा गोल हिस्सा बचेगा।'
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
                  "id": "q-qur-1",
                  "questionText": "What is the first Surah of the Holy Quran?",
                  "questionTextUrdu": "قرآن پاک کی پہلی سورت کون سی ہے؟",
                  "questionTextHindi": "पवित्र क़ुरआन की पहली सूरत कौन सी है?",
                  "options": [
                          "سورۃ الاخلاص",
                          "سورۃ البقرہ",
                          "سورۃ الفاتحہ",
                          "سورۃ الناس"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "سورۃ الفاتحہ قرآن پاک کی سب سے پہلی سورت ہے، اسی لیے اسے \"فاتحہ\" (آغاز کرنے والی) کہا جاتا ہے۔"
          },
          {
                  "id": "q-qur-2",
                  "questionText": "What is the last Surah of the Holy Quran?",
                  "questionTextUrdu": "قرآن پاک کی آخری سورت کون سی ہے؟",
                  "questionTextHindi": "पवित्र क़ुरआन की आखिरी सूरत कौन सी है?",
                  "options": [
                          "سورۃ الفلق",
                          "سورۃ الناس",
                          "سورۃ الکافرون",
                          "سورۃ الاخلاص"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "سورۃ الناس قرآن مجید کی 114ویں اور سب سے آخری سورت ہے۔"
          },
          {
                  "id": "q-qur-3",
                  "questionText": "Which is the longest Surah in the Quran?",
                  "questionTextUrdu": "قرآن پاک کی سب سے لمبی سورت کون سی ہے؟",
                  "questionTextHindi": "क़ुरआन की सबसे लंबी सूरत कौन सी है?",
                  "options": [
                          "سورۃ آل عمران",
                          "سورۃ یسین",
                          "سورۃ النساء",
                          "سورۃ البقرہ"
                  ],
                  "correctOptionIndex": 3,
                  "explanation": "سورۃ البقرہ قرآن کی سب سے طویل سورت ہے جس میں 286 آیات ہیں۔"
          },
          {
                  "id": "q-qur-4",
                  "questionText": "Which is the shortest Surah in the Quran?",
                  "questionTextUrdu": "قرآن پاک کی سب سے چھوٹی سورت کون سی ہے؟",
                  "questionTextHindi": "क़ुरआन की सबसे छोटी सूरत कौन सी है?",
                  "options": [
                          "سورۃ الکوثر",
                          "سورۃ العصر",
                          "سورۃ الاخلاص",
                          "سورۃ الناس"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "سورۃ الکوثر میں صرف 3 مختصر آیات ہیں، جو اسے قرآن کی سب سے چھوٹی سورت بناتی ہیں۔"
          },
          {
                  "id": "q-qur-5",
                  "questionText": "How many Surahs are there in the Holy Quran in total?",
                  "questionTextUrdu": "قرآن پاک میں کل کتنی سورتیں ہیں؟",
                  "questionTextHindi": "पवित्र क़ुरआन में कुल कितनी सूरतें हैं?",
                  "options": [
                          "100",
                          "114",
                          "120",
                          "99"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "قرآن پاک میں کل 114 سورتیں ہیں۔"
          },
          {
                  "id": "q-qur-6",
                  "questionText": "How many Juz (Paras) are in the Quran?",
                  "questionTextUrdu": "قرآن پاک میں کتنے پارے (جزو) ہیں؟",
                  "questionTextHindi": "क़ुरआन में कितने पारे (जुज़) हैं?",
                  "options": [
                          "30",
                          "40",
                          "20",
                          "114"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "قرآن پاک کو 30 برابر حصوں میں تقسیم کیا گیا ہے جنہیں پارے یا جزو کہا جاتا ہے۔"
          },
          {
                  "id": "q-qur-7",
                  "questionText": "Which Surah is known as the \"Heart of the Quran\"?",
                  "questionTextUrdu": "کس سورت کو قرآن پاک کا \"دل\" کہا جاتا ہے؟",
                  "questionTextHindi": "किस सूरत को क़ुरआन का \"दिल\" कहा जाता है?",
                  "options": [
                          "سورۃ الرحمٰن",
                          "سورۃ الملک",
                          "سورۃ یسین",
                          "سورۃ الکہف"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "پیارے نبی کریمﷺ کی حدیث کے مطابق سورۃ یسین قرآن کا دل ہے۔"
          },
          {
                  "id": "q-qur-8",
                  "questionText": "Which Surah does NOT start with \"Bismillah\"?",
                  "questionTextUrdu": "کون سی سورت \"بسم اللہ\" سے شروع نہیں ہوتی؟",
                  "questionTextHindi": "कौन सी सूरत \"बिस्मिल्लाह\" से शुरू नहीं होती?",
                  "options": [
                          "سورۃ الانفال",
                          "سورۃ التوبہ",
                          "سورۃ یونس",
                          "سورۃ ہود"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "سورۃ التوبہ واحد سورت ہے جس کے آغاز میں \"بسم اللہ الرحمٰن الرحیم\" نہیں لکھی گئی۔"
          },
          {
                  "id": "q-qur-9",
                  "questionText": "Which Surah contains \"Bismillah\" twice?",
                  "questionTextUrdu": "کس سورت میں دو مرتبہ \"بسم اللہ\" آئی ہے؟",
                  "questionTextHindi": "किस सूरत में दो बार \"बिस्मिल्लाह\" आई है?",
                  "options": [
                          "سورۃ النمل",
                          "سورۃ القصص",
                          "سورۃ طہٰ",
                          "سورۃ الاسراء"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "سورۃ النمل میں ایک بار شروع میں اور دوسری بار حضرت سلیمانؑ کے خط (آیت 30) میں بسم اللہ آئی ہے۔"
          },
          {
                  "id": "q-qur-10",
                  "questionText": "To which Prophet was the Quran revealed?",
                  "questionTextUrdu": "قرآن پاک کس نبی پر نازل ہوا؟",
                  "questionTextHindi": "क़ुरआन किस नबी पर नाज़िल (अवतरित) हुआ?",
                  "options": [
                          "حضرت عیسیٰؑ",
                          "حضرت موسیٰؑ",
                          "حضرت ابراہیمؑ",
                          "حضرت محمدﷺ"
                  ],
                  "correctOptionIndex": 3,
                  "explanation": "قرآن پاک اللہ کی آخری کتاب ہے جو آخری نبی حضرت محمد مصطفیٰﷺ پر نازل ہوئی۔"
          },
          {
                  "id": "q-qur-11",
                  "questionText": "Which Angel brought the Quran from Allah to the Prophet?",
                  "questionTextUrdu": "اللہ کی طرف سے نبی کریمﷺ پر قرآن پاک کون سے فرشتہ لے کر آئے؟",
                  "questionTextHindi": "अल्लाह की तरफ से नबी (PBUH) पर क़ुरआन कौन से फरिश्ते लेकर आए?",
                  "options": [
                          "حضرت میکائیلؑ",
                          "حضرت جبرائیلؑ",
                          "حضرت اسرافیلؑ",
                          "حضرت عزرائیلؑ"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "حضرت جبرائیل علیہ السلام اللہ کی طرف سے وحی اور قرآن پاک لے کر آتے تھے۔"
          },
          {
                  "id": "q-qur-12",
                  "questionText": "In which sacred month was the Quran first revealed?",
                  "questionTextUrdu": "قرآن پاک کس مبارک مہینے میں نازل ہونا شروع ہوا؟",
                  "questionTextHindi": "क़ुरआन किस मुबारक महीने में नाज़िल होना शुरू हुआ?",
                  "options": [
                          "ماہِ رجب",
                          "ماہِ شعبان",
                          "ماہِ رمضان",
                          "ماہِ ذوالحجہ"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "قرآن پاک کا نزول رمضان المبارک کے بابرکت مہینے میں لیلۃ القدر کی رات شروع ہوا۔"
          },
          {
                  "id": "q-qur-13",
                  "questionText": "In which night was the Quran first revealed?",
                  "questionTextUrdu": "قرآن پاک کس رات نازل کیا گیا؟",
                  "questionTextHindi": "क़ुरआन किस रात नाज़िल किया गया?",
                  "options": [
                          "شبِ برات",
                          "شبِ قدر (لیلۃ القدر)",
                          "شبِ معراج",
                          "عید کی رات"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "قرآن پاک لیلۃ القدر (شبِ قدر) کی بابرکت رات کو نازل کیا گیا۔"
          },
          {
                  "id": "q-qur-14",
                  "questionText": "In which cave did the first revelation of the Quran take place?",
                  "questionTextUrdu": "قرآن پاک کی پہلی وحی کس غار میں نازل ہوئی؟",
                  "questionTextHindi": "क़ुरआन की पहली वही किस गुफा (गार) में नाज़िल हुई?",
                  "options": [
                          "غارِ ثور",
                          "غارِ حرا",
                          "کوہِ طور",
                          "غارِ صفا"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "مکہ مکرمہ کے قریب جبلِ نور پر واقع \"غارِ حرا\" میں سب سے پہلی وحی نازل ہوئی۔"
          },
          {
                  "id": "q-qur-15",
                  "questionText": "What was the first word of the Holy Quran revealed to Prophet Muhammad (PBUH)?",
                  "questionTextUrdu": "قرآن پاک کا سب سے پہلا کون سا لفظ نازل ہوا؟",
                  "questionTextHindi": "क़ुरआन का सबसे पहला कौन सा लफ्ज़ नाज़िल हुआ?",
                  "options": [
                          "قُل (کہو)",
                          "اِقْرَأْ (پڑھو)",
                          "اَلْحَمْدُ (سب تعریف)",
                          "ن (نون)"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "سب سے پہلا لفظ \"اِقْرَأْ\" (پڑھو اپنے رب کے نام سے) نازل ہوا تھا۔"
          },
          {
                  "id": "q-qur-16",
                  "questionText": "Which Surah was revealed first (the first 5 verses)?",
                  "questionTextUrdu": "سب سے پہلے کس سورت کی ابتدائی 5 آیات نازل ہوئیں؟",
                  "questionTextHindi": "सबसे पहले किस सूरत की शुरुआती 5 आयतें नाज़िल हुईं?",
                  "options": [
                          "سورۃ الفاتحہ",
                          "سورۃ العلق",
                          "سورۃ المدثر",
                          "سورۃ القلم"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "سورۃ العلق (پارہ 30) کی ابتدائی پانچ آیات غارِ حرا میں سب سے پہلے نازل ہوئیں۔"
          },
          {
                  "id": "q-qur-17",
                  "questionText": "In which language was the Holy Quran revealed?",
                  "questionTextUrdu": "قرآن مجید کس زبان میں نازل ہوا؟",
                  "questionTextHindi": "पवित्र क़ुरआन किस भाषा (ज़बान) में नाज़िल हुआ?",
                  "options": [
                          "اردو",
                          "فارسی",
                          "عربی",
                          "عبرانی"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "قرآن پاک فصیح و بلیغ عربی زبان میں نازل ہوا۔"
          },
          {
                  "id": "q-qur-18",
                  "questionText": "For how many years did the revelation of the Quran continue?",
                  "questionTextUrdu": "قرآن پاک تقریباً کتنے سالوں کے عرصے میں مکمل نازل ہوا؟",
                  "questionTextHindi": "क़ुरआन लगभग कितने वर्षों में मुकम्मल नाज़िल हुआ?",
                  "options": [
                          "10 سال",
                          "23 سال",
                          "30 سال",
                          "40 سال"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "قرآن پاک تقریباً 23 سال کے عرصے میں موقع بموقع ضرورت کے مطابق نازل ہوا۔"
          },
          {
                  "id": "q-qur-19",
                  "questionText": "Which Surah is considered equal to one-third (1/3) of the Quran?",
                  "questionTextUrdu": "کس سورت کو پڑھنے کا ثواب ایک تہائی (1/3) قرآن کے برابر ہے؟",
                  "questionTextHindi": "किस सूरत को पढ़ने का सवाब एक तिहाई (1/3) क़ुरआन के बराबर है?",
                  "options": [
                          "سورۃ الاخلاص",
                          "سورۃ الفلق",
                          "سورۃ الکوثر",
                          "سورۃ الملک"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "حدیث شریف کے مطابق سورۃ الاخلاص پڑھنا ایک تہائی قرآن پڑھنے کے برابر ثواب رکھتا ہے۔"
          },
          {
                  "id": "q-qur-20",
                  "questionText": "Which Surah is known as the \"Beauty / Adornment of the Quran\" (Uroos-ul-Quran)?",
                  "questionTextUrdu": "کس سورت کو \"عروس القرآن\" (قرآن کی دلہن/زینت) کہا جاتا ہے؟",
                  "questionTextHindi": "किस सूरत को \"उरूस-उल-क़ुरआन\" (क़ुरआन की दुल्हन/ज़ीनत) कहा जाता है?",
                  "options": [
                          "سورۃ یسین",
                          "سورۃ الرحمٰن",
                          "سورۃ الواقعہ",
                          "سورۃ الفتح"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "حدیث میں سورۃ الرحمٰن کو \"عروس القرآن\" (قرآن کی زینت و دلہن) فرمایا گیا ہے۔"
          },
          {
                  "id": "q-qur-21",
                  "questionText": "Which Surah protects from the punishment of the grave?",
                  "questionTextUrdu": "کون سی سورت قبر کے عذاب سے بچاتی اور شفاعت کرتی ہے؟",
                  "questionTextHindi": "कौन सी सूरत क़ब्र के अज़ाब से बचाती है?",
                  "options": [
                          "سورۃ السجدہ",
                          "سورۃ الملک",
                          "سورۃ الدخان",
                          "سورۃ المزمل"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "حدیث پاک میں آیا ہے کہ سورۃ الملک روزانہ رات کو پڑھنے والے کے لیے قبر میں نجات کا ذریعہ بنتی ہے۔"
          },
          {
                  "id": "q-qur-22",
                  "questionText": "How many times is the name of Prophet \"Muhammad\" (PBUH) mentioned in the Quran?",
                  "questionTextUrdu": "قرآن پاک میں نبی کریم حضرت محمدﷺ کا نامِ نامی \"محمد\" کتنی بار آیا ہے؟",
                  "questionTextHindi": "क़ुरआन में नबी करीम (PBUH) का नाम \"मुहम्मद\" कितनी बार आया है?",
                  "options": [
                          "4 بار",
                          "10 بار",
                          "25 بار",
                          "1 بار"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "قرآن مجید میں اسمِ مبارک \"محمد\" 4 مرتبہ اور اسمِ مبارک \"احمد\" 1 مرتبہ آیا ہے۔"
          },
          {
                  "id": "q-qur-23",
                  "questionText": "Which Prophet's name is mentioned the MOST number of times in the Quran?",
                  "questionTextUrdu": "قرآن مجید میں کس نبی کا نام سب سے زیادہ مرتبہ آیا ہے؟",
                  "questionTextHindi": "क़ुरआन में किस नबी का नाम सबसे ज़्यादा बार आया है?",
                  "options": [
                          "حضرت ابراہیمؑ",
                          "حضرت موسیٰؑ",
                          "حضرت عیسیٰؑ",
                          "حضرت نوحؑ"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "حضرت موسیٰ علیہ السلام کا مبارک نام قرآن پاک میں 136 سے زیادہ مرتبہ ذکر ہوا ہے۔"
          },
          {
                  "id": "q-qur-24",
                  "questionText": "Which is the greatest Ayat (verse) in the Holy Quran?",
                  "questionTextUrdu": "قرآن مجید کی سب سے عظیم اور فضیلت والی آیت کون سی ہے؟",
                  "questionTextHindi": "क़ुरआन की सबसे अज़ीम (महान) आयत कौन सी है?",
                  "options": [
                          "آیت الکرسی",
                          "آیت قطعی",
                          "آمن الرسول",
                          "آیت سجدہ"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "سورۃ البقرہ کی آیت نمبر 255 \"آیت الکرسی\" قرآن کی سب سے افضل آیت ہے۔"
          },
          {
                  "id": "q-qur-25",
                  "questionText": "In which Surah is Ayat-ul-Kursi located?",
                  "questionTextUrdu": "آیت الکرسی کس سورت میں ہے؟",
                  "questionTextHindi": "आयत-उल-कुर्सी किस सूरत में है?",
                  "options": [
                          "سورۃ آل عمران",
                          "سورۃ البقرہ",
                          "سورۃ النساء",
                          "سورۃ المائدہ"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "آیت الکرسی سورۃ البقرہ (پارہ 3) کی آیت نمبر 255 ہے۔"
          },
          {
                  "id": "q-qur-26",
                  "questionText": "Which only woman's personal name is explicitly mentioned in the Quran?",
                  "questionTextUrdu": "قرآن پاک میں کس واحد خاتون کا مبارک نام صراحت کے ساتھ ذکر کیا گیا ہے؟",
                  "questionTextHindi": "क़ुरआन में किस अकेली महिला का नाम साफ़ तौर पर आया है?",
                  "options": [
                          "حضرت مریمؑ",
                          "حضرت عائشہؓ",
                          "حضرت فاطمہؓ",
                          "حضرت خدیجہؓ"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "حضرت عیسیٰؑ کی والدہ ماجدہ \"حضرت مریم علیہا السلام\" کا مبارک نام قرآن میں آیا ہے اور ان کے نام پر پوری سورت بھی ہے۔"
          },
          {
                  "id": "q-qur-27",
                  "questionText": "Which Surah gives protection against the evil of black magic, jealousy, and whispers?",
                  "questionTextUrdu": "کونسے سورتیں وسوسوں، حسد اور جادو سے حفاظت کے لیے پڑھی جاتی ہیں (معوذتین)؟",
                  "questionTextHindi": "कौन सी सूरतें बुरी नज़र, जादू और वसवसों से हिफ़ाज़त के लिए पढ़ी जाती हैं?",
                  "options": [
                          "سورۃ الفلق اور سورۃ الناس",
                          "سورۃ الکوثر اور سورۃ الکافرون",
                          "سورۃ الفاتحہ اور سورۃ الاخلاص",
                          "سورۃ الملک اور سورۃ القلم"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "سورۃ الفلق اور سورۃ الناس کو \"معوذتین\" کہا جاتا ہے، جو ہر قسم کی برائی اور حسد سے پناہ دیتی ہیں۔"
          },
          {
                  "id": "q-qur-28",
                  "questionText": "Which Surah is named after an insect (The Honey Bee)?",
                  "questionTextUrdu": "کس سورت کا نام \"شہد کی مکھی\" کے نام پر ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"शहद की मक्खी\" के नाम पर है?",
                  "options": [
                          "سورۃ النمل",
                          "سورۃ النحل",
                          "سورۃ العنکبوت",
                          "سورۃ الفیل"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "عربی میں شہد کی مکھی کو \"نحل\" کہتے ہیں، اسی پر سورۃ النحل کا نام رکھا گیا ہے۔"
          },
          {
                  "id": "q-qur-29",
                  "questionText": "Which Surah is named after \"The Ant\"?",
                  "questionTextUrdu": "کس سورت کا نام \"چیونٹی\" کے نام پر رکھا گیا ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"चींटी\" (Ant) के नाम पर है?",
                  "options": [
                          "سورۃ النمل",
                          "سورۃ النحل",
                          "سورۃ البقرہ",
                          "سورۃ الفیل"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "عربی میں چیونٹی کو \"نمل\" کہتے ہیں، اس سورت میں حضرت سلیمانؑ اور چیونٹی کا واقعہ موجود ہے۔"
          },
          {
                  "id": "q-qur-30",
                  "questionText": "Which Surah is named after \"The Spider\"?",
                  "questionTextUrdu": "کس سورت کا نام \"مکڑی\" (Spider) کے نام پر ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"मकड़ी\" के नाम पर है?",
                  "options": [
                          "سورۃ العنکبوت",
                          "سورۃ النحل",
                          "سورۃ الجاثیہ",
                          "سورۃ الفیل"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "عربی میں مکڑی کو \"عنکبوت\" کہا جاتا ہے۔"
          },
          {
                  "id": "q-qur-31",
                  "questionText": "Which Surah is named after \"The Elephant\"?",
                  "questionTextUrdu": "کس سورت کا نام \"ہاتھی\" کے نام پر ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"हाथी\" के नाम पर है?",
                  "options": [
                          "سورۃ البقرہ",
                          "سورۃ الفیل",
                          "سورۃ النحل",
                          "سورۃ الاسد"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "عربی میں ہاتھی کو \"فیل\" کہتے ہیں، اس سورت میں اصحابِ فیل (ہاتھی والوں) پر عذاب کا ذکر ہے۔"
          },
          {
                  "id": "q-qur-32",
                  "questionText": "Which Surah is named after \"The Cow\"?",
                  "questionTextUrdu": "کس سورت کا نام \"گائے\" کے نام پر ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"गाय\" के नाम पर है?",
                  "options": [
                          "سورۃ الانعام",
                          "سورۃ البقرہ",
                          "سورۃ النحل",
                          "سورۃ المائدہ"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "عربی میں گائے کو \"بقرہ\" کہتے ہیں، جس میں بنی اسرائیل کے گائے ذبح کرنے کے واقعے کا بیان ہے۔"
          },
          {
                  "id": "q-qur-33",
                  "questionText": "How many Sajdahs (prostrations of recitation) are there in the Quran?",
                  "questionTextUrdu": "قرآن پاک میں کل کتنے سجدہ تلاوت ہیں؟",
                  "questionTextHindi": "पवित्र क़ुरआन में कुल कितने सजदा-ए-तिलावत हैं?",
                  "options": [
                          "10",
                          "12",
                          "14",
                          "15"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "قرآن مجید میں تلاوت کے کل 14 سجدے مقرر ہیں۔"
          },
          {
                  "id": "q-qur-34",
                  "questionText": "What are the Surahs revealed in Makkah called?",
                  "questionTextUrdu": "مکہ مکرمہ میں ہجرت سے پہلے نازل ہونے والی سورتوں کو کیا کہا جاتا ہے؟",
                  "questionTextHindi": "मक्का में नाज़िल होने वाली सूरतों को क्या कहा जाता है?",
                  "options": [
                          "مدنی سورتیں",
                          "مکی سورتیں",
                          "کوفی سورتیں",
                          "بصری سورتیں"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "ہجرتِ مدینہ سے پہلے مکہ مکرمہ میں نازل ہونے والی سورتوں کو \"مکی سورتیں\" کہا جاتا ہے۔"
          },
          {
                  "id": "q-qur-35",
                  "questionText": "What are the Surahs revealed in Madinah called?",
                  "questionTextUrdu": "ہجرت کے بعد مدینہ منورہ میں نازل ہونے والی سورتوں کو کیا کہا جاتا ہے؟",
                  "questionTextHindi": "हिजरत के बाद मदीना में नाज़िल होने वाली सूरतों को क्या कहा जाता है?",
                  "options": [
                          "مکی سورتیں",
                          "مدنی سورتیں",
                          "شامی سورتیں",
                          "عراقی سورتیں"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "ہجرت کے بعد مدینہ منورہ کے دور میں نازل ہونے والی سورتوں کو \"مدنی سورتیں\" کہا جاتا ہے۔"
          },
          {
                  "id": "q-qur-36",
                  "questionText": "Which Surah tells the detailed story of Prophet Yusuf (AS) as the \"Best of Stories\"?",
                  "questionTextUrdu": "کس سورت میں حضرت یوسفؑ کا واقعہ \"احسن القصص\" (سب سے بہترین قصہ) کے طور پر بیان ہوا ہے؟",
                  "questionTextHindi": "किस सूरत में हज़रत यूसुफ़ (AS) का पूरा वाक़िआ बयान हुआ है?",
                  "options": [
                          "سورۃ یوسف",
                          "سورۃ یونس",
                          "سورۃ طہٰ",
                          "سورۃ ہود"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "سورۃ یوسف میں حضرت یوسف علیہ السلام کی زندگی کا پورا سبق آموز قصہ تفصیل سے بیان کیا گیا ہے۔"
          },
          {
                  "id": "q-qur-37",
                  "questionText": "Which Surah is recommended to recite every Friday for special light and protection from Dajjal?",
                  "questionTextUrdu": "جمعہ کے دن کون سی سورت پڑھنے کی خاص فضیلت اور نور کی بشارت ہے؟",
                  "questionTextHindi": "जुमे (शुक्रवार) के दिन कौन सी सूरत पढ़ने की ख़ास फ़ज़ीलत है?",
                  "options": [
                          "سورۃ الکہف",
                          "سورۃ یسین",
                          "سورۃ الملک",
                          "سورۃ الفتح"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "جمعہ کے دن سورۃ الکہف پڑھنے والے کے لیے دونوں جمعوں کے درمیان نور روشن رہتا ہے اور فتنہ دجال سے حفاظت رہتی ہے۔"
          },
          {
                  "id": "q-qur-38",
                  "questionText": "Which Surah discusses the companions of the cave (Ashab-e-Kahf)?",
                  "questionTextUrdu": "\"اصحابِ کہف\" (غار والے نوجوانوں) کا ایمان افروز واقعہ کس سورت میں ہے؟",
                  "questionTextHindi": "\"असहाब-ए-कहफ़\" (गुफ़ा वाले) का वाक़िआ किस सूरत में है?",
                  "options": [
                          "سورۃ مریم",
                          "سورۃ الکہف",
                          "سورۃ النور",
                          "سورۃ الحج"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "سورۃ الکہف میں ان سچے مومن نوجوانوں کا ذکر ہے جو اپنے ایمان کی حفاظت کے لیے غار میں پناہ گزیں ہوئے تھے۔"
          },
          {
                  "id": "q-qur-39",
                  "questionText": "Which Surah is named after \"The Daybreak / Dawn\"?",
                  "questionTextUrdu": "کس سورت کا مطلب \"صبح کا وقت / پو پھٹنا\" ہے؟",
                  "questionTextHindi": "किस सूरत का मतलब \"सुबह का वक़्त / भोर\" (Dawn) है?",
                  "options": [
                          "سورۃ الفجر",
                          "سورۃ الضحیٰ",
                          "سورۃ اللیل",
                          "سورۃ الفلق"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "سورۃ الفجر کا مطلب \"صبح کی پو / فجر کا وقت\" ہے۔"
          },
          {
                  "id": "q-qur-40",
                  "questionText": "Which Surah is named after \"The Night\"?",
                  "questionTextUrdu": "کس سورت کا نام \"رات\" کے نام پر ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"रात\" (The Night) के नाम पर है?",
                  "options": [
                          "سورۃ الفلق",
                          "سورۃ اللیل",
                          "سورۃ القدر",
                          "سورۃ الشمس"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "عربی میں رات کو \"اللیل\" کہا جاتا ہے۔"
          },
          {
                  "id": "q-qur-41",
                  "questionText": "Which Surah is named after \"The Sun\"?",
                  "questionTextUrdu": "کس سورت کا نام \"سورج\" کے نام پر ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"سورج\" (The Sun) کے نام پر ہے؟",
                  "options": [
                          "سورۃ النجم",
                          "سورۃ الشمس",
                          "سورۃ القمر",
                          "سورۃ الفجر"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "عربی میں سورج کو \"شمس\" کہا جاتا ہے، جس کی قسم اللہ تعالیٰ نے اس سورت میں کھائی ہے۔"
          },
          {
                  "id": "q-qur-42",
                  "questionText": "Which Surah is named after \"The Moon\"?",
                  "questionTextUrdu": "کس سورت کا نام \"چاند\" کے نام پر ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"चाँद\" (The Moon) کے نام پر ہے?",
                  "options": [
                          "سورۃ النور",
                          "سورۃ القمر",
                          "سورۃ النجم",
                          "سورۃ الطارق"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "عربی میں چاند کو \"قمر\" کہا جاتا ہے، اس سورت میں شق القمر (چاند کے دو ٹکڑے ہونے) کے معجزے کا ذکر ہے۔"
          },
          {
                  "id": "q-qur-43",
                  "questionText": "Which Surah is named after \"Time / The Declining Day\"?",
                  "questionTextUrdu": "کس سورت کا نام \"زمانہ / وقت\" کے نام پر ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"ज़माना / वक़्त\" (Time) के نام पर है?",
                  "options": [
                          "سورۃ العصر",
                          "سورۃ الدھر",
                          "سورۃ الفجر",
                          "سورۃ اللیل"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "سورۃ العصر میں اللہ نے زمانے اور وقت کی قسم کھا کر انسان کے خسارے اور کامیابی کے اصول بتائے ہیں۔"
          },
          {
                  "id": "q-qur-44",
                  "questionText": "Which fruit is mentioned in the very first verse of Surah At-Teen?",
                  "questionTextUrdu": "سورۃ التین کی پہلی آیت میں کن پھلوں کی قسم کھائی گئی ہے؟",
                  "questionTextHindi": "सूरत अत-तीन की पहली आयत में किन फलों की क़सम खाई गई है?",
                  "options": [
                          "انجیر اور زیتون",
                          "کھجور اور انار",
                          "سیب اور انگور",
                          "کیلا اور امرود"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "وَالتِّيْنِ وَالزَّيْتُوْنِ (قسم ہے انجیر کی اور زیتون کی)۔"
          },
          {
                  "id": "q-qur-45",
                  "questionText": "In which Surah does the verse \"So which of the favors of your Lord would you deny?\" repeat 31 times?",
                  "questionTextUrdu": "کس سورت میں \"فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ\" 31 بار دہرائی گئی ہے؟",
                  "questionTextHindi": "किस सूरत में \"तुम अपने रब की कौन-कौन सी नेमतों को झुठलाओगे?\" 31 बार आया है?",
                  "options": [
                          "سورۃ الواقعہ",
                          "سورۃ الرحمٰن",
                          "سورۃ الملک",
                          "سورۃ المزمل"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "سورۃ الرحمٰن میں اللہ تعالیٰ نے جن و انس کو اپنی بے شمار نعمتیں یاد دلاتے ہوئے یہ آیت 31 مرتبہ فرمائی ہے۔"
          },
          {
                  "id": "q-qur-46",
                  "questionText": "Which Surah discusses the Night of Decree (Laylat-ul-Qadr) and angels descending?",
                  "questionTextUrdu": "لیلۃ القدر اور فرشتوں کے نزول کی عظمت کس سورت میں بیان کی گئی ہے؟",
                  "questionTextHindi": "शब-ए-क़द्र की रात की अज़मत किस सूरत में बयान की गई है?",
                  "options": [
                          "سورۃ القدر",
                          "سورۃ الفجر",
                          "سورۃ الکوثر",
                          "سورۃ الاخلاص"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "سورۃ القدر میں فرمایا گیا ہے کہ لیلۃ القدر کی رات ہزار مہینوں سے افضل ہے۔"
          },
          {
                  "id": "q-qur-47",
                  "questionText": "How many verses (Ayahs) are there in Surah Al-Fatiha?",
                  "questionTextUrdu": "سورۃ الفاتحہ میں کل کتنی آیات ہیں؟",
                  "questionTextHindi": "सूरह अल-फ़ातिहा में कुल कितनी आयतें हैं?",
                  "options": [
                          "5",
                          "6",
                          "7",
                          "8"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "سورۃ الفاتحہ میں بسم اللہ سمیت 7 آیات ہیں، اسی لیے اسے \"السبع المثانی\" بھی کہتے ہیں۔"
          },
          {
                  "id": "q-qur-48",
                  "questionText": "Which Surah is named after \"Iron\"?",
                  "questionTextUrdu": "کس سورت کا نام \"لوہا\" (Iron) کے نام پر ہے؟",
                  "questionTextHindi": "किस सूरत का नाम \"लोहा\" (Iron) के नाम पर है?",
                  "options": [
                          "سورۃ النحاس",
                          "سورۃ الحدید",
                          "سورۃ الذہب",
                          "سورۃ الفضہ"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "عربی میں لوہے کو \"حدید\" کہتے ہیں، اس سورت میں اللہ نے لوہے کی طاقت اور فوائد کا ذکر فرمایا ہے۔"
          },
          {
                  "id": "q-qur-49",
                  "questionText": "Who gathered and compiled the Quran into one standard single Mus-haf book copy for the Ummah?",
                  "questionTextUrdu": "تمام مسلمانوں کے لیے ایک ہی مصحف (قرآن کے معیاری نسخے) پر جمع فرمانے والے خلیفہ کون ہیں؟",
                  "questionTextHindi": "क़ुरआन को एक मुसहफ़ (किताब) की शक्ल में जमा करने वाले ख़लीफ़ा कौन हैं?",
                  "options": [
                          "حضرت ابوبکر صدیقؓ اور حضرت عثمان غنیؓ",
                          "حضرت علی المرتضیٰؓ",
                          "حضرت عمر فاروقؓ",
                          "حضرت خالد بن ولیدؓ"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "حضرت ابوبکرؓ نے سب سے پہلے ایک کتابی شکل میں جمع کرایا اور حضرت عثمان غنیؓ نے امت کو ایک معیاری مصحف پر متحد فرمایا (جامع القرآن)۔"
          },
          {
                  "id": "q-qur-50",
                  "questionText": "Which Surah is named after \"The Star\"?",
                  "questionTextUrdu": "کس سورت کا مطلب \"ستارہ\" ہے؟",
                  "questionTextHindi": "किस सूरत का मतलब \"तारा\" (Star) है?",
                  "options": [
                          "سورۃ النجم",
                          "سورۃ الفجر",
                          "سورۃ الشمس",
                          "سورۃ القمر"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "عربی زبان میں تارے (ستارے) کو \"نجم\" کہا جاتا ہے۔"
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
                  "id": "q-isl-1",
                  "questionText": "How many pillars of Islam are there?",
                  "questionTextUrdu": "اسلام کے کتنے بنیادی ارکان ہیں؟",
                  "questionTextHindi": "इस्लाम के कितने बुनियादी अरकान (स्तंभ) हैं?",
                  "options": [
                          "3",
                          "4",
                          "5",
                          "6"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "اسلام کے 5 ارکان ہیں: کلمہ، نماز، روزہ، زکوٰۃ، اور حج۔"
          },
          {
                  "id": "q-isl-2",
                  "questionText": "Who is the last Prophet of Allah?",
                  "questionTextUrdu": "اللہ کے آخری نبی کون ہیں؟",
                  "questionTextHindi": "अल्लाह के आखिरी नबी कौन हैं?",
                  "options": [
                          "حضرت عیسیٰؑ",
                          "حضرت موسیٰؑ",
                          "حضرت ابراہیمؑ",
                          "حضرت محمدﷺ"
                  ],
                  "correctOptionIndex": 3,
                  "explanation": "حضرت محمدﷺ اللہ کے آخری نبی اور رسول ہیں، ان کے بعد کوئی نبی نہیں آئے گا۔"
          },
          {
                  "id": "q-isl-3",
                  "questionText": "How many obligatory prayers are there in a day?",
                  "questionTextUrdu": "ایک دن میں کتنی نمازیں فرض ہیں؟",
                  "questionTextHindi": "एक दिन में कितनी नमाज़ें फ़र्ज़ हैं?",
                  "options": [
                          "3",
                          "5",
                          "7",
                          "4"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "ہر مسلمان پر دن رات میں 5 نمازیں فرض ہیں (فجر، ظہر، عصر، مغرب، عشاء)۔"
          },
          {
                  "id": "q-isl-4",
                  "questionText": "In which month do Muslims fast?",
                  "questionTextUrdu": "مسلمان کس مہینے میں روزے رکھتے ہیں؟",
                  "questionTextHindi": "मुसलमान किस महीने में रोज़े रखते हैं?",
                  "options": [
                          "محرم",
                          "رجب",
                          "شعبان",
                          "رمضان"
                  ],
                  "correctOptionIndex": 3,
                  "explanation": "رمضان المبارک کے پورے مہینے میں روزے رکھنا مسلمانوں پر فرض ہے۔"
          },
          {
                  "id": "q-isl-5",
                  "questionText": "Where is the Holy Kaaba located?",
                  "questionTextUrdu": "خانہ کعبہ کس شہر میں واقع ہے؟",
                  "questionTextHindi": "खाना काबा किस शहर में स्थित है?",
                  "options": [
                          "مدینہ",
                          "مکہ",
                          "یروشلم",
                          "بغداد"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "مسلمانوں کا مقدس ترین گھر خانہ کعبہ سعودی عرب کے شہر مکہ مکرمہ میں ہے۔"
          },
          {
                  "id": "q-isl-6",
                  "questionText": "What is the name of the morning prayer?",
                  "questionTextUrdu": "صبح کی نماز کا کیا نام ہے؟",
                  "questionTextHindi": "सुबह की नमाज़ का क्या नाम है?",
                  "options": [
                          "فجر",
                          "ظہر",
                          "عصر",
                          "مغرب"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "سورج نکلنے سے پہلے جو نماز پڑھی جاتی ہے اسے فجر کہتے ہیں۔"
          },
          {
                  "id": "q-isl-7",
                  "questionText": "Which Angel brought revelations (Wahy) to the Prophets?",
                  "questionTextUrdu": "کون سے فرشتہ انبیاء کرام پر وحی لے کر آتے تھے؟",
                  "questionTextHindi": "कौन से फ़रिश्ते अम्बिया-ए-किराम पर वही लेकर आते थे?",
                  "options": [
                          "حضرت میکائیلؑ",
                          "حضرت اسرافیلؑ",
                          "حضرت جبرائیلؑ",
                          "حضرت عزرائیلؑ"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "اللہ کا پیغام (وحی) انبیاء تک پہنچانے کی ذمہ داری حضرت جبرائیلؑ کی تھی۔"
          },
          {
                  "id": "q-isl-8",
                  "questionText": "Who was the first human and first Prophet?",
                  "questionTextUrdu": "دنیا کے سب سے پہلے انسان اور پہلے نبی کون تھے؟",
                  "questionTextHindi": "दुनिया के सबसे पहले इंसान और पहले नबी कौन थे?",
                  "options": [
                          "حضرت نوحؑ",
                          "حضرت آدمؑ",
                          "حضرت ادریسؑ",
                          "حضرت شیثؑ"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "اللہ تعالیٰ نے سب سے پہلے حضرت آدم علیہ السلام کو پیدا فرمایا۔"
          },
          {
                  "id": "q-isl-9",
                  "questionText": "What is the first month of the Islamic calendar?",
                  "questionTextUrdu": "اسلامی (ہجری) کیلنڈر کا پہلا مہینہ کون سا ہے؟",
                  "questionTextHindi": "इस्लामी (हिजरी) कैलेंडर का पहला महीना कौन सा है?",
                  "options": [
                          "صفر",
                          "محرم",
                          "شوال",
                          "ربیع الاول"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "اسلامی سال کا آغاز محرم الحرام کے مہینے سے ہوتا ہے۔"
          },
          {
                  "id": "q-isl-10",
                  "questionText": "Which Holy Book was revealed to Prophet Musa (AS)?",
                  "questionTextUrdu": "حضرت موسیٰؑ پر کون سی آسمانی کتاب نازل ہوئی؟",
                  "questionTextHindi": "हज़रत मूसा (AS) पर कौन सी आसमानी किताब नाज़िल हुई?",
                  "options": [
                          "زبور",
                          "تورات",
                          "انجیل",
                          "قرآن مجید"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "اللہ تعالیٰ نے حضرت موسیٰ علیہ السلام پر 'تورات' نازل فرمائی۔"
          },
          {
                  "id": "q-isl-11",
                  "questionText": "Which Holy Book was revealed to Prophet Isa (AS)?",
                  "questionTextUrdu": "حضرت عیسیٰؑ پر کون سی آسمانی کتاب نازل ہوئی؟",
                  "questionTextHindi": "हज़रत ईसा (AS) पर कौन सी आसमानी किताब नाज़िल हुई?",
                  "options": [
                          "انجیل",
                          "تورات",
                          "زبور",
                          "قرآن مجید"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "اللہ تعالیٰ نے حضرت عیسیٰ علیہ السلام پر 'انجیل' نازل فرمائی۔"
          },
          {
                  "id": "q-isl-12",
                  "questionText": "How many names of Allah (Asma-ul-Husna) are commonly known?",
                  "questionTextUrdu": "اللہ تعالیٰ کے کتنے صفاتی نام مشہور ہیں؟",
                  "questionTextHindi": "अल्लाह तआला के कितने सिफ़ाती नाम (अस्मा-उल-हुस्ना) मशहूर हैं?",
                  "options": [
                          "50",
                          "70",
                          "99",
                          "100"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "اللہ تعالیٰ کے 99 خوبصورت نام ہیں جنہیں اسماء الحسنیٰ کہا جاتا ہے۔"
          },
          {
                  "id": "q-isl-13",
                  "questionText": "What is the call to prayer called?",
                  "questionTextUrdu": "نماز کے لیے بلانے کی آواز کو کیا کہتے ہیں؟",
                  "questionTextHindi": "नमाज़ के लिए बुलाने की आवाज़ को क्या कहते हैं?",
                  "options": [
                          "اقامت",
                          "تکبیر",
                          "اذان",
                          "خطبہ"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "مسلمانوں کو مسجد میں نماز کے لیے بلانے کے عمل کو اذان کہتے ہیں۔"
          },
          {
                  "id": "q-isl-14",
                  "questionText": "Who was the first Caliph of Islam?",
                  "questionTextUrdu": "اسلام کے پہلے خلیفہ کون تھے؟",
                  "questionTextHindi": "इस्लाम के पहले खलीफा कौन थे?",
                  "options": [
                          "حضرت عمرؓ",
                          "حضرت علیؓ",
                          "حضرت عثمانؓ",
                          "حضرت ابوبکرؓ"
                  ],
                  "correctOptionIndex": 3,
                  "explanation": "نبی کریمﷺ کے وصال کے بعد حضرت ابوبکر صدیقؓ مسلمانوں کے پہلے خلیفہ بنے۔"
          },
          {
                  "id": "q-isl-15",
                  "questionText": "What is washing before prayer called?",
                  "questionTextUrdu": "نماز سے پہلے پاک ہونے کے عمل کو کیا کہتے ہیں؟",
                  "questionTextHindi": "नमाज़ से पहले पाक होने के अमल को क्या कहते हैं?",
                  "options": [
                          "غسل",
                          "وضو",
                          "تیمم",
                          "طہارت"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "نماز پڑھنے سے پہلے ہاتھ، منہ، سر اور پاؤں دھونے کو وضو کہا جاتا ہے۔"
          },
          {
                  "id": "q-isl-16",
                  "questionText": "What was the name of Prophet Muhammad's (PBUH) mother?",
                  "questionTextUrdu": "نبی کریمﷺ کی والدہ ماجدہ کا کیا نام تھا؟",
                  "questionTextHindi": "नबी करीम (PBUH) की वालिदा माजिदा का क्या नाम था?",
                  "options": [
                          "حضرت حلیمہ سعدیہؓ",
                          "حضرت آمنہؓ",
                          "حضرت خدیجہؓ",
                          "حضرت فاطمہؓ"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "آپﷺ کی والدہ کا نام حضرت آمنہ رضی اللہ عنہا تھا۔"
          },
          {
                  "id": "q-isl-17",
                  "questionText": "What was the name of Prophet Muhammad's (PBUH) father?",
                  "questionTextUrdu": "نبی کریمﷺ کے والد محترم کا کیا نام تھا؟",
                  "questionTextHindi": "नबी करीम (PBUH) के वालिद मोहतरम का क्या नाम था?",
                  "options": [
                          "حضرت عبدالمطلب",
                          "حضرت ابوطالب",
                          "حضرت عبداللہ",
                          "حضرت حمزہؓ"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "آپﷺ کے والد محترم کا نام حضرت عبداللہ تھا۔"
          },
          {
                  "id": "q-isl-18",
                  "questionText": "Which festival comes immediately after Ramadan?",
                  "questionTextUrdu": "رمضان کے فوراً بعد کون سا تہوار آتا ہے؟",
                  "questionTextHindi": "रमज़ान के फौरन बाद कौन सा त्यौहार आता है?",
                  "options": [
                          "عید الاضحیٰ",
                          "شبِ برأت",
                          "عید الفطر",
                          "شبِ معراج"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "رمضان کے روزے مکمل ہونے کی خوشی میں یکم شوال کو عید الفطر منائی جاتی ہے۔"
          },
          {
                  "id": "q-isl-19",
                  "questionText": "What is the direction Muslims face while praying?",
                  "questionTextUrdu": "مسلمان نماز پڑھتے وقت کس طرف منہ کرتے ہیں؟",
                  "questionTextHindi": "मुसलमान नमाज़ पढ़ते वक़्त किस तरफ रुख़ करते हैं?",
                  "options": [
                          "مسجدِ نبوی",
                          "قبلہ (خانہ کعبہ)",
                          "مسجدِ اقصیٰ",
                          "سورج کی طرف"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "مسلمان مکہ میں موجود خانہ کعبہ کی طرف رخ کر کے نماز پڑھتے ہیں، جسے قبلہ کہتے ہیں۔"
          },
          {
                  "id": "q-isl-20",
                  "questionText": "Giving a fixed portion of wealth to the poor is called?",
                  "questionTextUrdu": "مال داروں پر غریبوں کا جو حق مقرر ہے، اسے کیا کہتے ہیں؟",
                  "questionTextHindi": "मालदारों पर गरीबों का जो हक़ मुक़र्रर है, उसे क्या कहते हैं?",
                  "options": [
                          "زکوٰۃ",
                          "صدقہ",
                          "فطرانہ",
                          "ہدیہ"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "ہر صاحبِ نصاب مسلمان پر سال میں ایک بار اپنے مال کا 2.5٪ غریبوں کو دینا فرض ہے جسے زکوٰۃ کہتے ہیں۔"
          },
          {
                  "id": "q-isl-21",
                  "questionText": "Who was the second Caliph of Islam?",
                  "questionTextUrdu": "اسلام کے دوسرے خلیفہ کون تھے؟",
                  "questionTextHindi": "इस्लाम के दूसरे खलीफा कौन थे?",
                  "options": [
                          "حضرت علیؓ",
                          "حضرت عثمانؓ",
                          "حضرت ابوبکرؓ",
                          "حضرت عمرؓ"
                  ],
                  "correctOptionIndex": 3,
                  "explanation": "حضرت عمر فاروق رضی اللہ عنہ مسلمانوں کے دوسرے خلیفہ تھے۔"
          },
          {
                  "id": "q-isl-22",
                  "questionText": "In which city is the Prophet's Mosque (Masjid-e-Nabawi) located?",
                  "questionTextUrdu": "مسجدِ نبوی کس شہر میں واقع ہے؟",
                  "questionTextHindi": "मस्जिद-ए-नबवी किस शहर में स्थित है?",
                  "options": [
                          "طائف",
                          "مکہ",
                          "مدینہ",
                          "جدہ"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "مسجدِ نبوی اور نبی کریمﷺ کا روضہ مبارک مدینہ منورہ میں ہے۔"
          },
          {
                  "id": "q-isl-23",
                  "questionText": "Who was the first wife of Prophet Muhammad (PBUH)?",
                  "questionTextUrdu": "نبی کریمﷺ کی پہلی زوجہ محترمہ کون تھیں؟",
                  "questionTextHindi": "नबी करीम (PBUH) की पहली ज़ौजा (पत्नी) कौन थीं?",
                  "options": [
                          "حضرت عائشہؓ",
                          "حضرت خدیجہؓ",
                          "حضرت زینبؓ",
                          "حضرت حفصہؓ"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "حضرت خدیجہ رضی اللہ عنہا آپﷺ کی پہلی بیوی تھیں اور عورتوں میں سب سے پہلے ایمان لائیں۔"
          },
          {
                  "id": "q-isl-24",
                  "questionText": "What is the prayer offered after sunset called?",
                  "questionTextUrdu": "سورج غروب ہونے کے بعد کون سی نماز پڑھی جاتی ہے؟",
                  "questionTextHindi": "सूरज डूबने के बाद कौन सी नमाज़ पढ़ी जाती है?",
                  "options": [
                          "عصر",
                          "عشاء",
                          "مغرب",
                          "تہجد"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "سورج کے ڈوبتے ہی مغرب کی نماز کا وقت شروع ہو جاتا ہے۔"
          },
          {
                  "id": "q-isl-25",
                  "questionText": "The festival of sacrifice is associated with which Prophet?",
                  "questionTextUrdu": "عید الاضحیٰ (قربانی والی عید) کس نبی کی سنت ہے؟",
                  "questionTextHindi": "ईद-उल-अज़हा (क़ुरबानी की ईद) किस नबी की सुन्नत है?",
                  "options": [
                          "حضرت اسماعیلؑ",
                          "حضرت ابراہیمؑ",
                          "حضرت موسیٰؑ",
                          "حضرت عیسیٰؑ"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "ہم حضرت ابراہیم علیہ السلام اور حضرت اسماعیل علیہ السلام کی قربانی کی یاد میں عید الاضحیٰ مناتے ہیں۔"
          },
          {
                  "id": "q-isl-26",
                  "questionText": "What is the meaning of the word \"Islam\"?",
                  "questionTextUrdu": "لفظ \"اسلام\" کا کیا مطلب ہے؟",
                  "questionTextHindi": "शब्द \"इस्लाम\" का क्या अर्थ है?",
                  "options": [
                          "शांति (Peace) और अल्लाह की आज्ञा मानना",
                          "युद्ध (War)",
                          "प्रकाश (Light)",
                          "ज्ञान (Knowledge)"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "इस्लाम का मतलब है अल्लाह की मर्ज़ी के आगे सिर झुकाना और शांति फैलाना।"
          },
          {
                  "id": "q-isl-27",
                  "questionText": "What is the 12th and final month of the Islamic calendar?",
                  "questionTextUrdu": "اسلامی کیلنڈر کا 12واں اور آخری مہینہ کون سا ہے؟",
                  "questionTextHindi": "इस्लामी कैलेंडर का 12वाँ और आखिरी महीना कौन सा है?",
                  "options": [
                          "मुहर्रम",
                          "रमज़ान",
                          "शव्वाल",
                          "ज़ुल-हिज्जा (ज़िलहज)"
                  ],
                  "correctOptionIndex": 3,
                  "explanation": "ज़ुल-हिज्जा इस्लामी साल का आखिरी महीना है, इसी महीने में हज किया जाता है।"
          },
          {
                  "id": "q-isl-28",
                  "questionText": "How many times do Muslims walk around the Kaaba during Tawaf?",
                  "questionTextUrdu": "طواف کے دوران کعبہ کے کتنے چکر لگائے جاتے ہیں؟",
                  "questionTextHindi": "तवाफ़ के दौरान काबा के कितने चक्कर लगाए जाते हैं?",
                  "options": [
                          "3",
                          "5",
                          "7",
                          "10"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "उमरा या हज के दौरान काबा के 7 चक्कर लगाने को तवाफ़ कहते हैं।"
          },
          {
                  "id": "q-isl-29",
                  "questionText": "Which prayer has no Adhan and no Iqamah?",
                  "questionTextUrdu": "وہ کون سی نماز ہے جس کی کوئی اذان اور اقامت نہیں ہوتی؟",
                  "questionTextHindi": "वह कौन सी नमाज़ है जिसकी कोई अज़ान और इकामत नहीं होती?",
                  "options": [
                          "फ़ज़र की नमाज़",
                          "जुमे की नमाज़",
                          "जनाज़े की नमाज़",
                          "असर की नमाज़"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "नमाज़-ए-जनाज़ा (Funeral Prayer) के लिए अज़ान नहीं दी जाती।"
          },
          {
                  "id": "q-isl-30",
                  "questionText": "Who was the third Caliph of Islam?",
                  "questionTextUrdu": "اسلام کے تیسرے خلیفہ کون تھے؟",
                  "questionTextHindi": "इस्लाम के तीसरे खलीफा कौन थे?",
                  "options": [
                          "हज़रत अली (RA)",
                          "हज़रत उस्मान (RA)",
                          "हज़रत अबू बक्र (RA)",
                          "हज़रत उमर (RA)"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "हज़रत उस्मान गनी (रज़ि.) इस्लाम के तीसरे खलीफा थे।"
          },
          {
                  "id": "q-isl-31",
                  "questionText": "Who was the fourth Caliph of Islam?",
                  "questionTextUrdu": "اسلام کے چوتھے خلیفہ کون تھے؟",
                  "questionTextHindi": "इस्लाम के चौथे खलीफा कौन थे?",
                  "options": [
                          "हज़रत हसन (RA)",
                          "हज़रत हुसैन (RA)",
                          "हज़रत मुआविया (RA)",
                          "हज़रत अली (RA)"
                  ],
                  "correctOptionIndex": 3,
                  "explanation": "हज़रत अली (रज़ि.) इस्लाम के चौथे खलीफा थे।"
          },
          {
                  "id": "q-isl-32",
                  "questionText": "What is the night prayer called?",
                  "questionTextUrdu": "رات کی آخری نماز کا کیا نام ہے؟",
                  "questionTextHindi": "रात की सबसे आखिरी नमाज़ कौन सी है?",
                  "options": [
                          "इशा (Isha)",
                          "मग़रिब (Maghrib)",
                          "ज़ुहर (Zuhr)",
                          "असर (Asr)"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "रात के समय पढ़ी जाने वाली 5वीं और आखिरी फ़र्ज़ नमाज़ इशा है।"
          },
          {
                  "id": "q-isl-33",
                  "questionText": "Which Angel is responsible for blowing the trumpet on the Day of Judgment?",
                  "questionTextUrdu": "قیامت کے دن صور پھونکنے کی ذمہ داری کس فرشتے کی ہے؟",
                  "questionTextHindi": "क़यामत के दिन शंख (सूर) फूंकने की ज़िम्मेदारी किस फरिश्ते की है?",
                  "options": [
                          "हज़रत जिब्रील (AS)",
                          "हज़रत इसराफ़ील (AS)",
                          "हज़रत मीकाईल (AS)",
                          "हज़रत इज़राईल (AS)"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "हज़रत इसराफ़ील (AS) क़यामत के दिन सूर (trumpet) फूकेंगे जिससे दुनिया खत्म हो जाएगी।"
          },
          {
                  "id": "q-isl-34",
                  "questionText": "What is the Angel of Death called?",
                  "questionTextUrdu": "موت کے فرشتے (روح قبض کرنے والے فرشتے) کا نام کیا ہے؟",
                  "questionTextHindi": "मौत के फरिश्ते (रूह निकालने वाले फरिश्ते) का क्या नाम है?",
                  "options": [
                          "हज़रत मीकाईल (AS)",
                          "हज़रत इज़राईल (AS)",
                          "हज़रत रिज़वान (AS)",
                          "हज़रत मालिक (AS)"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "हज़रत इज़राईल (AS) को मलकुल मौत (मौत का फरिश्ता) कहा जाता है।"
          },
          {
                  "id": "q-isl-35",
                  "questionText": "What is the prayer called which is read only in Ramadan after Isha?",
                  "questionTextUrdu": "رمضان میں عشاء کے بعد پڑھی جانے والی خاص نماز کو کیا کہتے ہیں؟",
                  "questionTextHindi": "रमज़ान में इशा के बाद पढ़ी जाने वाली विशेष नमाज़ को क्या कहते हैं?",
                  "options": [
                          "तरावीह (Tarawih)",
                          "तहज्जुद (Tahajjud)",
                          "इशराक़ (Ishraq)",
                          "चाश्त (Chasht)"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "रमज़ान के महीने में इशा की नमाज़ के बाद तरावीह पढ़ी जाती है जिसमें क़ुरआन सुना जाता है।"
          },
          {
                  "id": "q-isl-36",
                  "questionText": "Which holy book was revealed to Prophet Dawud (AS)?",
                  "questionTextUrdu": "حضرت داؤدؑ پر کون سی کتاب نازل ہوئی؟",
                  "questionTextHindi": "हज़रत दाऊद (AS) पर कौन सी किताब नाज़िल हुई?",
                  "options": [
                          "क़ुरआन",
                          "ज़बूर (Psalms)",
                          "तौरात",
                          "इंजील"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "अल्लाह ने हज़रत दाऊद (AS) पर 'ज़बूर' नाज़िल फ़रमाई थी।"
          },
          {
                  "id": "q-isl-37",
                  "questionText": "What is the person who calls the Adhan called?",
                  "questionTextUrdu": "اذان دینے والے شخص کو کیا کہتے ہیں؟",
                  "questionTextHindi": "अज़ान देने वाले व्यक्ति को क्या कहा जाता है?",
                  "options": [
                          "इमाम (Imam)",
                          "मुअज़्ज़िन (Mu'azzin)",
                          "हाफ़िज़ (Hafiz)",
                          "मौलवी (Maulvi)"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "जो व्यक्ति नमाज़ के लिए मस्जिद से आवाज़ (अज़ान) देता है, उसे मुअज़्ज़िन कहते हैं।"
          },
          {
                  "id": "q-isl-38",
                  "questionText": "Who leads the congregational prayer?",
                  "questionTextUrdu": "مسجد میں جماعت کی امامت کون کراتا ہے؟",
                  "questionTextHindi": "मस्जिद में जमात के साथ नमाज़ कौन पढ़ाता है?",
                  "options": [
                          "खतीब",
                          "मुअज़्ज़िन",
                          "इमाम (Imam)",
                          "मुफ़्ती"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "नमाज़ का नेतृत्व करने वाले (आगे खड़े होने वाले) व्यक्ति को इमाम कहा जाता है।"
          },
          {
                  "id": "q-isl-39",
                  "questionText": "Which relative of the Prophet (PBUH) took care of him after his grandfather's death?",
                  "questionTextUrdu": "دادا کے انتقال کے بعد نبی کریمﷺ کی پرورش کس نے کی؟",
                  "questionTextHindi": "दादा के इंतकाल के बाद नबी (PBUH) की परवरिश किसने की?",
                  "options": [
                          "हज़रत अबू तालिब (चाचा)",
                          "हज़रत अब्बास (चाचा)",
                          "हज़रत हमज़ा (चाचा)",
                          "हज़रत अबू लहब (चाचा)"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "अब्दुल मुत्तलिब के इंतकाल के बाद उनके चाचा अबू तालिब ने उनकी देखभाल की।"
          },
          {
                  "id": "q-isl-40",
                  "questionText": "What is the washing of the whole body for purification called?",
                  "questionTextUrdu": "مکمل پاکی کے لیے پورے جسم کو غسل دینے کو کیا کہتے ہیں؟",
                  "questionTextHindi": "पूरी तरह से पाक होने के लिए पूरे शरीर को धोने (नहाने) को क्या कहते हैं?",
                  "options": [
                          "वुज़ू",
                          "ग़ुस्ل (Ghusl)",
                          "तयम्मुम",
                          "मसाह"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "शरिया के अनुसार पूरे शरीर को खास तरीके से धोने को ग़ुस्ल कहते हैं।"
          },
          {
                  "id": "q-isl-41",
                  "questionText": "How many times is the Adhan called in a day?",
                  "questionTextUrdu": "ایک دن میں کتنی بار اذان دی جاتی ہے؟",
                  "questionTextHindi": "एक दिन में कितनी बार अज़ान दी जाती है?",
                  "options": [
                          "3",
                          "4",
                          "5",
                          "7"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "5 वक़्त की नमाज़ के लिए मस्जिद से 5 बार ही अज़ान दी जाती है।"
          },
          {
                  "id": "q-isl-42",
                  "questionText": "Where do Muslims go to perform Hajj?",
                  "questionTextUrdu": "مسلمان حج کرنے کے لیے کہاں جاتے ہیں؟",
                  "questionTextHindi": "मुसलमान हज करने के लिए कहाँ जाते हैं?",
                  "options": [
                          "जेरूसलम",
                          "मदीना",
                          "इस्तांबुल",
                          "मक्का (Makkah)"
                  ],
                  "correctOptionIndex": 3,
                  "explanation": "हज सिर्फ और सिर्फ मक्का (सऊदी अरब) में काबा और उसके आस-पास के स्थानों पर किया जाता है।"
          },
          {
                  "id": "q-isl-43",
                  "questionText": "Which Prophet built the Kaaba?",
                  "questionTextUrdu": "خانہ کعبہ کی تعمیر کن انبیاء نے کی تھی؟",
                  "questionTextHindi": "काबा की इमारत का निर्माण किन नबियों ने किया था?",
                  "options": [
                          "हज़रत आदम (AS)",
                          "हज़रत इब्राहीम और हज़रत इस्माईल (AS)",
                          "हज़रत मूसा (AS)",
                          "हज़रत ईसा (AS)"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "अल्लाह के हुक्म से हज़रत इब्राहीम (AS) और उनके बेटे हज़रत इस्माईल (AS) ने काबा बनाया था।"
          },
          {
                  "id": "q-isl-44",
                  "questionText": "What is it called when there is no water, and dust/sand is used to purify oneself?",
                  "questionTextUrdu": "جب پانی نہ ہو تو پاک مٹی سے طہارت حاصل کرنے کو کیا کہتے ہیں؟",
                  "questionTextHindi": "जब पानी न हो, तो पाक होने के लिए मिट्टी का उपयोग करने को क्या कहते हैं?",
                  "options": [
                          "ग़ुस्ल",
                          "वुज़ू",
                          "तयम्मुम (Tayammum)",
                          "सुन्नत"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "पानी न मिलने की मजबूरी में पाक मिट्टी से चेहरा और हाथ पोछने को तयम्मुम कहते हैं।"
          },
          {
                  "id": "q-isl-45",
                  "questionText": "Which animal did Prophet Salih (AS) bring out of a rock?",
                  "questionTextUrdu": "حضرت صالحؑ کے معجزے کے طور پر پہاڑ سے کون سا جانور نکلا تھا؟",
                  "questionTextHindi": "हज़रत सालेह (AS) के चमत्कार के रूप में पहाड़ से कौन सा जानवर निकला था?",
                  "options": [
                          "ऊंटनी (She-camel)",
                          "घोड़ा",
                          "बकरी",
                          "गाय"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "अल्लाह के हुक्म से चट्टान फट कर एक ऊंटनी (नाक़तल्लाह) निकली थी।"
          },
          {
                  "id": "q-isl-46",
                  "questionText": "What is the meal eaten before dawn during fasting called?",
                  "questionTextUrdu": "روزہ رکھنے کے لیے صبح صادق سے پہلے کھائے جانے والے کھانے کو کیا کہتے ہیں؟",
                  "questionTextHindi": "रोज़ा रखने के लिए सुबह सूरज निकलने से पहले जो खाना खाया जाता है, उसे क्या कहते हैं?",
                  "options": [
                          "इफ़्तार (Iftar)",
                          "सहरी (Suhoor)",
                          "दावत",
                          "फितर"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "सुबह के समय रोज़े की नीयत से खाए जाने वाले भोजन को सहरी (Suhoor) कहते हैं।"
          },
          {
                  "id": "q-isl-47",
                  "questionText": "What is the meal eaten to break the fast at sunset called?",
                  "questionTextUrdu": "سورج غروب ہونے پر روزہ کھولنے کے کھانے کو کیا کہتے ہیں؟",
                  "questionTextHindi": "सूरज डूबने पर रोज़ा खोलने के लिए खाए जाने वाले भोजन को क्या कहते हैं?",
                  "options": [
                          "इफ़्तार (Iftar)",
                          "सहरी (Suhoor)",
                          "वलीमा",
                          "सदक़ा"
                  ],
                  "correctOptionIndex": 0,
                  "explanation": "मग़रिब की अज़ान के समय खजूर या पानी से रोज़ा खोलने को इफ़्तार कहते हैं।"
          },
          {
                  "id": "q-isl-48",
                  "questionText": "Which Prophet could speak to animals and control the Jinn?",
                  "questionTextUrdu": "وہ کون سے نبی تھے جو جانوروں سے بات کر سکتے تھے اور جنوں پر حکومت کرتے تھے؟",
                  "questionTextHindi": "वे कौन से नबी थे जो जानवरों से बात कर सकते थे और जिनों पर हुकूमत करते थे?",
                  "options": [
                          "हज़रत दाऊद (AS)",
                          "हज़रत सुलैमान (AS)",
                          "हज़रत मूसा (AS)",
                          "हज़रत युसूफ (AS)"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "अल्लाह ने हज़रत सुलैमान (Solomon) को जानवरों की भाषा समझने और जिनों पर हुकूमत करने का चमत्कार दिया था।"
          },
          {
                  "id": "q-isl-49",
                  "questionText": "What is the shortest Surah in the Quran?",
                  "questionTextUrdu": "قرآن مجید کی سب سے چھوٹی سورت کون سی ہے؟",
                  "questionTextHindi": "क़ुरआन की सबसे छोटी सूरत कौन सी है?",
                  "options": [
                          "सूरह अल-फातिहा",
                          "सूरह अल-कौसर (Al-Kawthar)",
                          "सूरह अल-इखलास",
                          "सूरह अन-नास"
                  ],
                  "correctOptionIndex": 1,
                  "explanation": "सूरह अल-कौसर में केवल 3 आयतें (Verses) हैं, जो इसे क़ुरआन की सबसे छोटी सूरत बनाती है।"
          },
          {
                  "id": "q-isl-50",
                  "questionText": "Where did Prophet Muhammad (PBUH) migrate to from Makkah?",
                  "questionTextUrdu": "حضرت محمدﷺ نے مکہ سے ہجرت کر کے کہاں تشریف لے گئے؟",
                  "questionTextHindi": "हज़रत मुहम्मद (PBUH) मक्का से हिजरत करके (पलायन करके) कहाँ गए थे?",
                  "options": [
                          "सीरिया (Syria)",
                          "ताइफ़ (Taif)",
                          "मदीना (Madinah)",
                          "यमन (Yemen)"
                  ],
                  "correctOptionIndex": 2,
                  "explanation": "मक्का वालों के ज़ुल्म के कारण नबी (PBUH) ने अल्लाह के हुक्म से मदीना (जिसे पहले यसरिब कहा जाता था) की तरफ हिजरत की थी।"
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
