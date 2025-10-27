
import type { HeroSlide, Category, Product, Brand, Promotion, PhoneProduct } from './types';

export const heroSlides: HeroSlide[] = [
  { 
    id: 1, 
    videoUrl: 'https://images.samsung.com/il/smartphones/galaxy-z-fold7/videos/galaxy-z-fold7-features-unveiling.webm?imbypass=true', 
    title: 'Galaxy Z Fold 7', 
    subtitle: '', 
    buttonText: 'לרכישה', 
    productId: 109,
    textPosition: 'top-center' 
  },
  { 
    id: 2, 
    videoUrl: 'https://images.samsung.com/is/content/samsung/assets/il/galaxy-watch6/kv/Watch6_PC_Main-KV_1440X640_pc.mp4',
    title: 'Galaxy Watch', 
    subtitle: 'השעון שמכיר אותך הכי טוב', 
    buttonText: 'לרכישה',
    productId: 201,
    textPosition: 'bottom-left'
  },
  { id: 3, imageUrl: 'https://picsum.photos/seed/promo3/1200/500', title: 'ROG STRIX SCAR 16/18', subtitle: 'VICTORY, ACCELERATED.', buttonText: 'לרכישה', textPosition: 'left' },
  { id: 4, imageUrl: 'https://img.ksp.co.il/item/410164/b_1.jpg?v=1757507517', title: 'iPhone 17 Magichromatic', subtitle: 'חוויה שלא הכרתם. זמין עכשיו.', buttonText: 'לפרטים ורכישה', productId: 112, textPosition: 'left' },
];

export const categories: Category[] = [
    { 
        name: 'טלפונים',
        imageUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/PBC48_Z_P_7290107310567_2.png',
        path: 'phones'
    },
    { 
        name: 'מחשבים ניידים',
        imageUrl: 'https://www.lytrade.co.il/images/itempics/83ES000QIV_16112024175758_large.jpg'
    },
    { 
        name: 'שעונים חכמים',
        imageUrl: 'https://img.ksp.co.il/item/395555/b_6.jpg?v=1751894523',
        path: 'smartwatches'
    },
    { name: 'טלוויזיות וסאונד' },
    { name: 'גיימינג' },
    { name: 'צילום' },
    { name: 'לבית ולגינה' },
    { name: 'מיזוג וחימום' },
    { name: 'כלי עבודה' },
    { name: 'למטבח' },
    { name: 'פארם וטיפוח' },
    { name: 'בשמים וקוסמטיקה' },
    { name: 'תינוקות' },
    { name: 'צעצועים וילדים' },
    { name: 'ציוד לבית הספר' },
    { name: 'ספורט' },
    { name: 'קמפינג וטיולים' },
    { name: 'אופניים וקורקינטים' },
    { name: 'לרכב' },
];

export const popularProducts: Product[] = [
    { id: 1, name: 'סט דוכן ברד מבית Melissa and Doug', price: '₪149', imageUrl: 'https://picsum.photos/seed/toy1/300/300' },
    { id: 2, name: 'LEGO Star Wars 75375 מילניום פלקון', price: '₪349', imageUrl: 'https://picsum.photos/seed/toy2/300/300' },
    { id: 3, name: 'רובה כדורי ג\'ל X-Shot - Hyper Trace Fire', price: '₪99', imageUrl: 'https://picsum.photos/seed/toy3/300/300' },
    { id: 4, name: 'לוח פעילות לפעוטות מבית Battat', price: '₪129', imageUrl: 'https://picsum.photos/seed/toy4/300/300' },
    { id: 5, name: 'הקוביה - חדר בריחה הבקתה הנטושה', price: '₪79', imageUrl: 'https://picsum.photos/seed/toy5/300/300' },
];

export const electricalProducts: Product[] = [
    { id: 6, name: 'שואב אבק / שוטף רובוטי Ecovacs Deebot X8 Pro', price: '₪3,499', imageUrl: 'https://picsum.photos/seed/elec1/300/300' },
    { id: 7, name: 'מקרר 4 דלתות Haier HRF-5800FB', price: '₪5,990', imageUrl: 'https://picsum.photos/seed/elec2/300/300' },
    { id: 8, name: 'טוסטר וופל בלגי SE-240 מבית Selmor', price: '₪119', imageUrl: 'https://picsum.photos/seed/elec3/300/300' },
    { id: 9, name: 'מסיר שיער Braun Silk Expert Pro 5', price: '₪1,290', imageUrl: 'https://picsum.photos/seed/elec4/300/300' },
    { id: 10, name: 'קומקום טמפרטורה מדויק Ninja KT200EU', price: '₪399', imageUrl: 'https://picsum.photos/seed/elec5/300/300' },
];

export const homeProducts: Product[] = [
    { id: 11, name: 'מזרן זוגי King Comfort Elite 160x200', price: '₪1,799', imageUrl: 'https://picsum.photos/seed/home1/300/300' },
    { id: 12, name: 'כוננית 5 מדפים מודולרית Smith', price: '₪249', imageUrl: 'https://picsum.photos/seed/home2/300/300' },
    { id: 13, name: 'פח אשפה אלקטרוני 40 ליטר Ramos', price: '₪199', imageUrl: 'https://picsum.photos/seed/home3/300/300' },
    { id: 14, name: 'מערכת נעילה חכמה לדלת Nuki Smart Lock Pro 4', price: '₪1,190', imageUrl: 'https://picsum.photos/seed/home4/300/300' },
    { id: 15, name: 'ספה נפתחת דגם Louisiana', price: '₪1,490', imageUrl: 'https://picsum.photos/seed/home5/300/300' },
];

export const phoneBrands = ['Apple', 'Samsung', 'Google'];

export const phoneProducts: PhoneProduct[] = [
    {
        id: 101,
        name: 'Apple iPhone 16 Pro',
        price: '₪5,600',
        imageUrl: 'https://img.ksp.co.il/item/333432/b_1.jpg?v=1726475201',
        brand: 'Apple',
        description: 'האייפון המתקדם ביותר עם שבב A18 Bionic, מערכת מצלמות פורצת דרך ועיצוב טיטניום יוקרתי.',
        specs: { 'מעבד': 'A18 Bionic', 'מסך': '6.1" Super Retina XDR ProMotion', 'מצלמה ראשית': '48MP', 'סוללה': 'עד 23 שעות צפייה בוידאו' },
        colors: ['טיטניום טבעי', 'טיטניום לבן'],
        storageOptions: [
            { size: '512GB', priceModifier: 0 },
            { size: '1TB', priceModifier: 1000 },
        ],
        screenSizeInches: 6.1,
        waterResistance: 'IP68',
    },
    {
        id: 102,
        name: 'Samsung Galaxy S25 Ultra',
        price: '₪4,500',
        imageUrl: 'https://img.ksp.co.il/item/358776/b_1.jpg?v=1737362118',
        brand: 'Samsung',
        description: 'חווית ה-AI המתקדמת בעולם, עם מצלמת 200MP מדהימה, S Pen מובנה וביצועים ללא פשרות. דגם SM-S938B/DS.',
        specs: { 'מעבד': 'Snapdragon 9 Gen 1 for Galaxy', 'מסך': '6.8" Dynamic AMOLED 2X', 'מצלמה ראשית': '200MP', 'סוללה': '5000mAh' },
        colors: ['טיטניום כחול', 'טיטניום לבן', 'טיטניום שחור', 'טיטניום אפור'],
        storageOptions: [
            { size: '256GB', priceModifier: 0, inStock: true },
            { size: '512GB', priceModifier: 400, inStock: true },
            { size: '1TB', priceModifier: 0, inStock: false },
        ],
        manufacturerUrl: 'https://www.samsung.com/il/smartphones/galaxy-s25-ultra/',
        screenSizeInches: 6.8,
        waterResistance: 'IP68',
    },
    {
        id: 106,
        name: 'Apple iPhone 15 128GB',
        price: '₪2,700',
        imageUrl: 'https://img.ksp.co.il/item/277502/b_1.jpg?v=1694611601',
        brand: 'Apple',
        description: 'חוויה מדהימה עם שבב A16 Bionic, מערכת מצלמות כפולה מתקדמת ו-Dynamic Island.',
        specs: { 'מעבד': 'A16 Bionic', 'מסך': '6.1" Super Retina XDR', 'מצלמה ראשית': '48MP', 'סוללה': 'עד 20 שעות צפייה בוידאו' },
        colors: ['שחור', 'כחול', 'ירוק', 'ורוד'],
        storageOptions: [
            { size: '128GB', priceModifier: 0 },
            { size: '256GB', priceModifier: 630 },
            { size: '512GB', priceModifier: 1350 },
        ],
        screenSizeInches: 6.1,
        waterResistance: 'IP68',
    },
    {
        id: 107,
        name: 'Apple iPhone 16',
        price: '₪3,999',
        imageUrl: 'https://img.ksp.co.il/item/333405/b_1.jpg',
        brand: 'Apple',
        description: 'האייפון החדש עם שבב A17 Pro, מערכת צילום כפולה ומתקדמת וצג Super Retina XDR בהיר מתמיד.',
        specs: { 'מעבד': 'A17 Pro', 'מסך': '6.1" Super Retina XDR', 'מצלמה ראשית': '48MP', 'סוללה': 'עד 20 שעות צפייה בוידאו' },
        colors: ['שחור', 'כחול', 'ירוק', 'ורוד', 'צהוב'],
        storageOptions: [
            { size: '128GB', priceModifier: 0 },
            { size: '256GB', priceModifier: 450 },
            { size: '512GB', priceModifier: 900 },
        ],
        screenSizeInches: 6.1,
        waterResistance: 'IP68',
    },
    {
        id: 108,
        name: 'Google Pixel 10',
        price: '₪4,499',
        imageUrl: 'https://picsum.photos/seed/pixel10/400/400',
        brand: 'Google',
        description: 'חוו את עתיד הבינה המלאכותית עם Google Pixel 10. מופעל על ידי שבב Tensor G5 החדש, עם מצלמת הפיקסל המתקדמת ביותר ותכונות AI בלעדיות.',
        specs: { 'מעבד': 'Google Tensor G5', 'מסך': '6.3" Actua LTPO OLED', 'מצלמה ראשית': '50MP', 'סוללה': '5050mAh' },
        colors: ['Obsidian', 'Porcelain', 'Mint'],
        storageOptions: [
            { size: '128GB', priceModifier: 0 },
            { size: '256GB', priceModifier: 300 },
            { size: '512GB', priceModifier: 600 },
        ],
        screenSizeInches: 6.3,
        waterResistance: 'IP68',
    },
    {
        id: 109,
        name: 'Samsung Galaxy Z Fold 7',
        price: '₪7,800',
        imageUrl: 'https://img.ksp.co.il/item/395513/b_9.jpg?v=1751886680',
        brand: 'Samsung',
        description: 'פתחו את עולמכם עם ה-Galaxy Z Fold 7 המהפכני. חוויה קולנועית שנכנסת לכיס.',
        specs: { 'מעבד': 'Snapdragon 9 Gen 2 for Galaxy', 'מסך ראשי': '8.0" Dynamic AMOLED 2X', 'מסך חיצוני': '6.5" Dynamic AMOLED 2X', 'מצלמה ראשית': '200MP', 'סוללה': '4400mAh' },
        colors: ['כחול', 'מנטה', 'כסף', 'שחור'],
        storageOptions: [
            { size: '512GB', priceModifier: 0 },
        ],
        screenSizeInches: 8.0,
        waterResistance: 'IPX8',
        featureSections: [
            {
                title: 'עוצמתי במיוחד',
                description: 'הרחיבו את חוויית המשחק שלכם על גבי המסך הגדול ומעבד Snapdragon®‎ המתקדם ביותר מבין מכשירי ה-Fold. המעבד החדשני, הכולל שיפורים ב-CPU, GPU ו-NPU, מספק שיפורים מרהיבים בתחום הגיימינג וה-AI, ומשפר באופן משמעותי את חוויית ה-Galaxy הכוללת שלכם. בואו לשקוע בחוויה עם תמיכה ממוטבת של Vulkan וניתוב קרניים בזמן אמת שמעורר לחיים כל סצנה. בנוסף, מנוע התמונה הטבעית הדיגיטלי למכשירים ניידים (mDNIe) פורץ הדרך של סמסג מבטיח איכות תצוגה – מבלי לרוקן את הסוללה.',
                videoUrl: 'https://media.ksp.co.il/4kk56rob7u7p469rs0rwq.mp4'
            },
            {
                title: 'עריכת פרטים עם השוואה',
                description: 'בואו לערוך תמונות כאוות נפשכם עם תצוגות מקדימות השוואתיות ב-Photo Assist. פשוט לחצו לחיצה ארוכה על אובייקט כדי להזיז, למחוק או להגדיל אותו, להתאים זוויות או למלא רקעים.',
                videoUrl: 'https://media.ksp.co.il/0bhp45zolsnupc31fps6o.webm'
            },
            {
                title: 'One UI 8',
                description: 'ה-UI הטוב ביותר של סמסג, עם התאמה אישית מרבית, נבנה באופן חדשני לחלוטין גם עבור המסך הראשי הענק וגם עבור מסך הכיסוי. עם טפט ניתן להתאמה אישית וגם וידג\'טים אינטראקטיביים של מזג אוויר וגלריה, ה-Fold שלכם יהיה ייחודי עבורכם.',
                videoUrl: 'https://media.ksp.co.il/aqh2bglpqohlq8y8x4ign.mp4'
            }
        ],
        detailedSpecs: {
            "מעבד": [
                "מהירות מעבד: 4.47GHz, 3.5GHz",
                "סוג מעבד: 8 ליבות"
            ],
            "תצוגה": [
                "גודל (תצוגה ראשית): 203.1mm (8.0\")",
                "רזולוציה (תצוגה ראשית): 2184x1968 (QXGA+)",
                "טכנולוגיה (תצוגה ראשית): Dynamic AMOLED 2X",
                "עומק צבע (תצוגה ראשית): 16M",
                "קצב ריענון מרבי (תצוגה ראשית): 120Hz",
                "גודל (תצוגה משנית): 164.8mm (6.5\")",
                "רזולוציה (תצוגה משנית): 2520x1080 (FHD+)",
                "טכנולוגיה (תצוגה משנית): Dynamic AMOLED 2X",
                "עומק צבעים: 16M"
            ],
            "מצלמה": [
                "מצלמה אחורית - רזולוציה (רבים): 200.0 MP + 12.0 MP + 10.0 MP",
                "מצלמה אחורית - מפתח צמצם (רבים): F1.7 , F2.2 , F2.4",
                "מצלמה אחורית - פוקוס אוטומטי: כן",
                "מצלמה אחורית - מייצב תמונה אופטי: כן",
                "מצלמה אחורית - זום: זום אופטי 3x, זום באיכות אופטית 2x (מופעל על ידי חיישן פיקסל מסתגל), זום דיגיטלי עד 30x",
                "מצלמה קדמית - רזולוציה: 10.0 MP",
                "מצלמה קדמית - מפתח צמצם: F2.2",
                "מצלמה קדמית - פוקוס אוטומטי: לא",
                "מצלמה קדמית - מייצב תמונה אופטי: לא",
                "מצלמה אחורית - מבזק: כן",
                "מצלמה כיסוי - רזולוצייה: 10.0 MP",
                "מצלמה כיסוי - מפתח צמצם: F2.2",
                "מצלמה כיסוי - פוקוס אוטומטי: לא",
                "רזולוצית הקלטת וידאו: UHD 8K (7680 x 4320)@30fps",
                "הילוך איטי: 240fps @FHD, 120fps @FHD, 120fps @UHD"
            ],
            "אחסון/זכרון": [
                "זיכרון (GB): 12",
                "אחסון (GB): 512",
                "אחסון זמין (GB): 474.6"
            ],
            "רשת": [
                "מספר כרטיסי SIM: SIM כפול",
                "גודל SIM: Nano-SIM (4FF), Embedded-SIM",
                "סוג חריץ כרטיס SIM: SIM 1 + SIM 2 / SIM 1 + eSIM / Dual eSIM",
                "Infra: 2G GSM, 3G WCDMA, 4G LTE FDD, 4G LTE TDD, 5G Sub6 FDD, 5G Sub6 TDD",
                "2G GSM: GSM850, GSM900, DCS1800, PCS1900",
                "3G UMTS: B1(2100), B2(1900), B4(AWS), B5(850), B8(900)",
                "4G FDD LTE: B1(2100), B2(1900), B3(1800), B4(AWS), B5(850), B7(2600), B8(900), B12(700), B13(700), B17(700), B18(800), B19(800), B20(800), B25(1900), B26(850), B28(700), B66(AWS-3)",
                "4G TDD LTE: B38(2600), B39(1900), B40(2300), B41(2500)",
                "5G FDD Sub6: N1(2100), N2(1900), N3(1800), N5(850), N7(2600), N8(900), N12(700), N20(800), N25(1900), N26(850), N28(700), N66(AWS-3), N71(600)",
                "5G TDD Sub6: N38(2600), N40(2300), N41(2500), N77(3700), N78(3500)"
            ],
            "קישוריות": [
                "ממשק USB: USB Type-C",
                "גרסת USB: USB 3.2 Gen 1",
                "טכנולוגית מיקום: GPS, Glonass, Beidou, Galileo, QZSS",
                "כניסת אזניה: USB Type-C",
                "MHL: לא",
                "Wi-Fi: 802.11a/b/g/n/ac/ax/be 2.4GHz+5GHz+6GHz, EHT320, MIMO, 4096-QAM",
                "Wi-Fi Direct: כן",
                "גרסת בלוטות': Bluetooth v5.4",
                "NFC: כן",
                "UWB (Ultra-Wideband): כן",
                "סנכרון למחשב: Smart Switch (גרסת מחשב)"
            ],
            "מערכת הפעלה": [
                "אנדרואיד"
            ],
            "חיישנים": [
                "חיישן תנועה, ברומטר, חיישן ביומטרי, ג'יירוסקופ, חיישן גיאומטי, חיישן מכסה, חיישן תאורה, חיישן קרבה"
            ],
            "מאפיינים פיזיים": [
                "ממדים: 158.4x143.2x4.2 מ\"מ",
                "ממדים במצב מקופל: 158.4x72.8x8.9 מ\"מ",
                "משקל (גרם): 215"
            ],
            "סוללה": [
                "אורך קטע וידאו (שעות, אלחוטי): עד 24",
                "גודל סוללה (mAh, Typical): 4400.0",
                "ניתן להסרה: לא"
            ],
            "שמע ווידאו": [
                "תמיכה בסטריאו: כן",
                "פורמט תצוגת וידאו: MP4, M4V, 3GP, 3G2, AVI, FLV, MKV, WEBM",
                "רזולוצית תצוגת וידאו: UHD 8K (7680 x 4320)@60fps",
                "פורמט השמעת אודיו: MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE"
            ],
            "שירותים ואפליקציות": [
                "תמיכה במכשירי Gear: Galaxy Ring, Galaxy Buds Core, Galaxy Buds3 Pro, Galaxy Buds2 Pro, Galaxy Buds Pro, Galaxy Buds Live, Galaxy Buds+, Galaxy Buds3, Galaxy Buds2, Galaxy Buds, Galaxy Buds FE, Galaxy Fit3, Galaxy Fit2, Galaxy Fit e, Galaxy Fit, Galaxy Watch FE, Galaxy Watch Ultra, Galaxy Watch8, Galaxy Watch7, Galaxy Watch6, Galaxy Watch5, Galaxy Watch4, Galaxy Watch3, Galaxy Watch, Galaxy Watch Active2, Galaxy Watch Active",
                "תמיכה DeX Samsung: כן",
                "תמיכה במכשירי שמיעה Bluetooth®: הזרמת אודיו של אנדרואיד למכשיר שמיעה (ASHA)",
                "תמיכה SmartThings: כן",
                "Mobile TV: לא"
            ]
        }
    },
    {
        id: 110,
        name: 'Samsung Galaxy S25 12GB+256GB',
        price: '₪3,800',
        imageUrl: 'https://img.ksp.co.il/item/358621/b_3.jpg?v=1737280413',
        brand: 'Samsung',
        description: 'הכירו את ה-Galaxy S25, עם יכולות AI מתקדמות של Google Gemini, עיצוב מרהיב וצילום לילה מהפכני.',
        specs: { 'מעבד': '8 ליבות, 4.47GHz', 'מסך': '6.2" Dynamic AMOLED 2X', 'מצלמה ראשית': '50MP', 'סוללה': '4000mAh' },
        colors: ['כחול', 'ירוק', 'תכלת', 'כסוף'],
        storageOptions: [
            { size: '256GB', priceModifier: 0, inStock: true },
        ],
        screenSizeInches: 6.2,
        waterResistance: 'IP68',
        featureSections: [
            {
                title: 'ללחוץ, לדבר, לסיים',
                description: 'השלימו את המשימות שלכם בצורה חלקה מבלי שתצטרכו לעבור בין אפליקציות שונות. פשוט לחצו לחיצה ארוכה על מקש הצד כדי לומר ל-Google Gemini מה אתם צריכים, בשפה טבעית, והוא ידאג להכול בפעולה אחת.',
                videoUrl: 'https://media.ksp.co.il/uivpdt1sqz5xobf64y2vs.webm'
            },
            {
                title: '',
                description: '',
                imageUrl: 'https://media.ksp.co.il/ajo4moz8nkd57ys4objqs.png'
            },
            {
                title: 'סרטוני צילום לילה ללא תחרות. רועש פחות, חד יותר',
                description: 'עכשיו אתם יכולים לצלם ב-HDR 10 סיביות משופר ולקבל חוויית צילום וידיאו מדהימה אפילו יותר. ה-AP המתקדם מספק גם הסרת רעשים מדויקת יותר כך שלא תצטרכו לדאוג יותר בנוגע לסרטוני לילה מגורענים.',
                videoUrl: 'https://media.ksp.co.il/nnv952b4a1a33hprqkt21.mp4'
            },
            {
                title: '',
                description: '',
                imageUrl: 'https://media.ksp.co.il/pynbnotp99bcfgq9qxe8a.png'
            },
            {
                title: '',
                description: '',
                imageUrl: 'https://media.ksp.co.il/bnk549319kla5xdbr57vl.png'
            }
        ],
        detailedSpecs: {
            "מעבד": [
                "מהירות מעבד: 4.47GHz, 3.5GHz",
                "סוג מעבד: 8 ליבות"
            ],
            "תצוגה": [
                "גודל (תצוגה ראשית): 156.4mm (6.2\")",
                "רזולוציה (תצוגה ראשית): 2340 x 1080 (FHD+)",
                "טכנולוגיה (תצוגה ראשית): Dynamic AMOLED 2X",
                "עומק צבע (תצוגה ראשית): 16M",
                "קצב ריענון מרבי (תצוגה ראשית): 120Hz"
            ],
            "מצלמה": [
                "מצלמה אחורית - רזולוציה: 50.0 MP + 10.0 MP + 12.0 MP",
                "מצלמה אחורית - מפתח צמצם: F1.8 , F2.4 , F2.2",
                "מצלמה אחורית - פוקוס אוטומטי: כן",
                "מצלמה אחורית - מייצב תמונה אופטי: כן",
                "מצלמה אחורית - זום: זום אופטי 3x, זום באיכות אופטית 2x (מופעל על ידי חיישן פיקסל מסתגל), זום דיגיטלי עד 30x",
                "מצלמה קדמית - רזולוצייה: 12.0MP",
                "מצלמה קדמית - מפתח צמצם: F2.2",
                "מצלמה קדמית - פוקוס אוטומטי: כן",
                "מצלמה אחורית - מבזק: כן",
                "רזולוצית הקלטת וידאו: UHD 8K (7680 x 4320)@30fps",
                "הילוך איטי: 240fps @FHD, 120fps @FHD, 120fps @UHD"
            ],
            "אחסון/זכרון": [
                "זיכרון (GB): 12",
                "אחסון (GB): 256"
            ],
            "רשת": [
                "מספר כרטיסי SIM: SIM כפול",
                "גודל SIM: Nano-SIM (4FF), Embedded-SIM",
                "סוג חריץ כרטיס SIM: SIM 1 + SIM 2 / SIM 1 + eSIM / Dual eSIM",
                "Infra: 2G GSM, 3G WCDMA, 4G LTE FDD, 4G LTE TDD, 5G Sub6 FDD, 5G Sub6 TDD",
                "2G GSM: GSM850, GSM900, DCS1800, PCS1900",
                "3G UMTS: B1(2100), B2(1900), B4(AWS), B5(850), B8(900)",
                "4G FDD LTE: B1(2100), B2(1900), B3(1800), B4(AWS), B5(850), B7(2600), B8(900), B12(700), B13(700), B17(700), B18(800), B19(800), B20(800), B25(1900), B26(850), B28(700), B66(AWS-3)",
                "4G TDD LTE: B38(2600), B39(1900), B40(2300), B41(2500)",
                "5G FDD Sub6: N1(2100), N2(1900), N3(1800), N5(850), N7(2600), N8(900), N12(700), N20(800), N25(1900), N26(850), N28(700), N66(AWS-3), N71(600)",
                "5G TDD Sub6: N38(2600), N40(2300), N41(2500), N77(3700), N78(3500)"
            ],
            "קישוריות": [
                "ממשק USB: USB Type-C",
                "גרסת USB: USB 3.2 Gen 1",
                "טכנולוגית מיקום: GPS, Glonass, Beidou, Galileo, QZSS",
                "כניסת אזניה: USB Type-C",
                "MHL: לא",
                "Wi-Fi: 802.11a/b/g/n/ac/ax/be 2.4GHz+5GHz+6GHz, EHT320, MIMO, 4096-QAM",
                "Wi-Fi Direct: כן",
                "גרסת Bluetooth: Bluetooth v5.4",
                "NFC: כן",
                "סנכרון למחשב: Smart Switch (גרסת מחשב)"
            ],
            "מערכת הפעלה": [
                "אנדרואיד"
            ],
            "חיישנים": [
                "חיישן תנועה, ברומטר, חיישן ביומטרי, ג'יירוסקופ, חיישן גיאומטי, חיישן מכסה, חיישן תאורה, חיישן קרבה"
            ],
            "מאפיינים פיזיים": [
                "ממדים (גxרxע, מ\"מ): 146.9 x 70.5 x 7.2",
                "משקל (גרם): 162"
            ],
            "סוללה": [
                "אורך קטע וידאו (שעות): עד 29",
                "גודל סוללה (mAh, Typical): 4000",
                "ניתן להסרה: לא"
            ],
            "שמע ווידאו": [
                "תמיכה בסטריאו: כן",
                "פורמט תצוגת וידאו: MP4, M4V, 3GP, 3G2, AVI, FLV, MKV, WEBM",
                "רזולוצית תצוגת וידאו: UHD 8K (7680 x 4320)@60fps",
                "פורמט השמעת אודיו: MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE"
            ],
            "שירותים ואפליקציות": [
                "תמיכה במכשירי Gear: Galaxy Ring, Galaxy Buds3 Pro, Galaxy Buds2 Pro, Galaxy Buds Pro, Galaxy Buds Live, Galaxy Buds+, Galaxy Buds3, Galaxy Buds2, Galaxy Buds, Galaxy Buds FE, Galaxy Fit3, Galaxy Fit2, Galaxy Fit e, Galaxy Fit, Galaxy Watch FE, Galaxy Watch Ultra, Galaxy Watch7, Galaxy Watch6, Galaxy Watch5, Galaxy Watch4, Galaxy Watch3, Galaxy Watch, Galaxy Watch Active2, Galaxy Watch Active",
                "תמיכת Samsung DeX: כן",
                "תמיכה במכשירי שמיעה Bluetooth: הזרמת אודיו של אנדרואיד למכשיר שמיעה (ASHA)",
                "תמיכה SmartThings: כן",
                "Mobile TV: לא"
            ]
        }
    },
    {
        id: 111,
        name: 'Samsung Galaxy S25 Edge 12GB+512GB',
        price: '₪5,000',
        imageUrl: 'https://img.ksp.co.il/item/384315/b_1.jpg?v=1746703818',
        brand: 'Samsung',
        description: 'גלו את ה-Galaxy S25 Edge, המשלב עיצוב עוצר נשימה עם ביצועי AI מתקדמים ומערך צילום מקצועי.',
        specs: { 
            'מעבד': 'Exynos 2500', 
            'מסך': '6.7" Dynamic AMOLED 2X', 
            'מצלמה ראשית': '200MP', 
            'סוללה': '4900mAh' 
        },
        colors: ['שחור', 'כסוף', 'תכלת'],
        storageOptions: [
            { size: '512GB', priceModifier: 0, inStock: true },
        ],
        screenSizeInches: 6.7,
        waterResistance: 'IP68',
        featureSections: [
            {
                title: 'עיצוב וביצועים ללא פשרות',
                description: 'חוויה ויזואלית מושלמת עם מסך חד וביצועים מהירים שיעמדו בכל משימה.',
                videoUrl: 'https://media.ksp.co.il/85jghewu386fpnc8g0kj1.mp4'
            },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/qb4wfnc36qsvkl7rk8gip.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/34t4t7nbe32affhhhuxri.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/iccdbpnlu8s0cx1bt1oz8.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/m714i34cmbj85jcl2hxy9.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/dz7ec445mvp2ajq2xrozr.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/tgsxlnxqws03s4ks74r6n.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/6ihtb0dp231ey6pjur493.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/n2x9ktgs9k419fqp8lszb.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/bayj839um1ldw47u881is.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/c9t46rdlo5me11mr4rncz.jpg' },
            { title: '', description: '', imageUrl: 'https://media.ksp.co.il/z5o1mhb1ltb2fewbt7wly.jpg' },
        ]
    },
    {
        id: 112,
        name: 'Apple iPhone 17 256GB',
        price: '₪4,899',
        imageUrl: 'https://img.ksp.co.il/item/410164/b_1.jpg?v=1757507517',
        brand: 'Apple',
        description: 'הכירו את ה-iPhone 17 החדשני עם עיצוב מגיכרומטי מרהיב, שבב A19 עוצמתי, ומערכת מצלמות Dual Fusion 48MP שתשנה את הדרך בה אתם מצלמים. חוויה שלא הכרתם.',
        specs: {
            'מעבד': 'שבב A19',
            'מסך': '6.3" Super Retina XDR',
            'מצלמה ראשית': '48MP Dual Fusion',
            'סוללה': 'עד 30 שעות צפייה בוידאו'
        },
        colors: ['תכלת', 'ירוק'],
        storageOptions: [
            { size: '256GB', priceModifier: 0, inStock: true },
        ],
        screenSizeInches: 6.3,
        waterResistance: 'IP68',
        featureSections: [
            {
                title: 'עיצוב מגיכרומטי מהפכני',
                description: 'חוויה ויזואלית חדשה עם גימור מגיכרומטי המשנה את צבעו בהתאם לתאורה, יחד עם שבב A19 שמציב סטנדרט חדש בביצועים.',
                videoUrl: 'https://media.ksp.co.il/osxzj46v2cwb8vlu0epnm.mp4'
            }
        ],
        detailedSpecs: {
            "עיצוב וגימור": [
                "עיצוב אלומיניום",
                "מגן קרמי 2 קדמי",
                "גב זכוכית בצבע"
              ],
              "אחסון/זכרון": [
                "נפח: 256GB",
                "השטח הזמין קטן יותר ומשתנה עקב גורמים רבים. תצורה סטנדרטית משתמשת בכ-12GB עד 24GB של שטח, כולל iOS 26 עם התכונות העדכניות ביותר ואפליקציות Apple הניתנות למחיקה. דגמי Apple Intelligence במכשירים משתמשים בכ-7GB של שטח וניתן למחוק אותם אם Apple Intelligence כבוי. הפעלת Apple Intelligence תוריד את המודלים שוב. אפליקציות Apple הניתנות למחיקה משתמשות בכ-4.5GB של שטח אחסון, וניתן להוריד אותן מחדש מחנות האפליקקציות. קיבולת האחסון עשויה להשתנות בהתאם לגרסת התוכנה, ההגדרות ודגם האייפון."
              ],
              "מאפיינים פיזיים": [
                "גובה: 149.6 מ\"מ",
                "רוחב: 71.5 מ\"מ",
                "עומק: 7.95 מ\"מ",
                "משקל: 177 גרם",
                "גודל ומשקל משתנים בהתאם לתצורה ותהליך הייצור."
              ],
              "תצוגה": [
                "תצוגת Super Retina XDR",
                "צג OLED מלא-מסך בגודל 6.3 אינץ' (אלכסון)",
                "רזולוציה של 2622x1206 פיקסלים עם 460 ppi",
                "אי דינמי (Dynamic Island)",
                "תצוגה תמידית (Always-On display)",
                "טכנולוגיית ProMotion עם קצב רענון אדפטיבי של עד 120Hz",
                "תצוגת HDR",
                "True Tone",
                "צבע רחב (P3)",
                "Haptic Touch",
                "יחס ניגודיות של 2,000,000:1 (אופייני)",
                "בהירות מרבית של 1,000 ניטים (אופייני); בהירות שיא של 1,600 ניטים (HDR); בהירות שיא של 3,000 ניטים (בחוץ); בהירות מינימלית של 1 ניט",
                "ציפוי אולאופובי עמיד לטביעות אצבעות",
                "ציפוי אנטי-רפלקטיבי",
                "תמיכה בתצוגה של מספר שפות ותווים בו זמנית",
                "לתצוגת האייפון 17 פינות מעוגלות העוקבות אחר עיצוב מעוגל ויפהפה, ופינות אלו נמצאות בתוך מלבן סטנדרטי. כאשר נמדד כצורה מלבנית סטנדרטית, המסך הוא 6.27 אינץ' באלכסון (שטח הצפייה בפועל קטן יותר)."
              ],
              "מעבד": [
                "שבב A19",
                "מעבד בעל 6 ליבות עם 2 ליבות ביצועים ו-4 ליבות יעילות",
                "מעבד גרפי בעל 5 ליבות עם מאיצי נוירונים",
                "מנוע עצבי בעל 16 ליבות",
                "מעקב קרניים מואץ חומרה"
              ],
              "מצלמה": [
                "מערכת מצלמות Dual Fusion 48MP",
                "מצלמה ראשית Fusion 48MP: 26 מ\"מ, צמצם ƒ/1.6, ייצוב תמונה אופטי עם חיישן הזזה, 100% פיקסלים בפוקוס, תמיכה בתמונות ברזולוציה גבוהה במיוחד (24MP ו-48MP)",
                "מאפשר גם עדשת טלפוטו 2x באיכות אופטית של 12 מגה פיקסל: 52 מ\"מ, צמצם ƒ/1.6, ייצוב תמונה אופטי עם הזזת חיישן, 100% פיקסלים בפוקוס",
                "עדשת Fusion Ultra Wide 48MP: 13 מ\"מ, צמצם ƒ/2.2 ושדה ראייה של 120°, פיקסלים היברידיים לפוקוס, תמיכה בתמונות ברזולוציה גבוהה במיוחד (24MP ו-48MP)",
                "זום אופטי פנימה פי 2, זום אופטי החוצה פי 2; טווח זום אופטי פי 4",
                "זום דיגיטלי עד פי 10",
                "כיסוי עדשת קריסטל ספיר",
                "פלאש True Tone",
                "מנוע פוטוני",
                "Deep Fusion",
                "HDR חכם 5",
                "דיוקנאות מהדור הבא עם בקרת מיקוד ועומק",
                "תאורת פורטרט עם שישה אפקטים",
                "מצב לילה",
                "פנורמה (עד 63 מגה פיקסל)",
                "סגנונות צילום מהדור האחרון",
                "תמונות מרחביות",
                "צילום מאקרו 48MP",
                "לכידת צבעים רחבה לתמונות ולתמונות חיות",
                "תיקון עדשה (Fusion Ultra Wide)",
                "תיקון עיניים אדומות מתקדם",
                "ייצוב תמונה אוטומטי",
                "מצב צילום מתפרץ",
                "תיוג גיאוגרפי של תמונות",
                "פורמטי תמונה שצולמו: HEIF ו-JPEG"
              ],
              "הקלטת וידאו": [
                "הקלטת וידאו 4K Dolby Vision ב-24/25/30/60fps",
                "הקלטת וידאו 1080p Dolby Vision ב-25/30/60fps",
                "הקלטת וידאו 720p Dolby Vision ב-30fps",
                "מצב קולנועי עד 4K Dolby Vision ב-30fps",
                "מצב פעולה עד 2.8K Dolby Vision ב-60fps",
                "הקלטת וידאו מאקרו, כולל הילוך איטי ו-time-lapse",
                "תמיכה בוידאו בהילוך איטי 1080p ב-120/240fps",
                "הקלטת וידאו מרחבית 1080p ב-30fps",
                "לכידה כפולה עד 4K Dolby Vision ב-30fps",
                "וידאו Time-lapse עם ייצוב",
                "Time-lapse במצב לילה",
                "וידאו QuickTake עד 4K Dolby Vision ב-60fps",
                "ייצוב תמונה אופטי עם הזזת חיישן לווידאו (Fusion Main)",
                "זום דיגיטלי עד פי 6",
                "זום אודיו",
                "פלאש True Tone",
                "ייצוב וידאו קולנועי (4K, 1080p, 720p)",
                "וידאו פוקוס אוטומטי רציף",
                "צילום תמונות סטילס 8MP תוך כדי הקלטת וידאו 4K",
                "זום בהשמעה",
                "פורמטי וידאו מוקלטים: HEVC ו-H.264",
                "הקלטת שמע מרחבית וסטריאו",
                "הפחתת רעשי רוח",
                "מיקס אודיו"
              ],
              "מצלמה קדמית": [
                "מצלמת Center Stage 18MP",
                "צמצם ƒ/1.9",
                "פוקוס אוטומטי עם Focus Pixels",
                "פלאש Retina",
                "הקש כדי להגדיל ולסובב",
                "Center Stage לתמונות",
                "וידאו אולטרה-מיוצב",
                "לכידה כפולה",
                "Center Stage לשיחות וידאו",
                "מנוע פוטוני",
                "Deep Fusion",
                "HDR חכם 5",
                "דיוקנאות מהדור הבא עם בקרת מיקוד ועומק",
                "תאורת פורטרט עם שישה אפקטים",
                "Animoji ו-Memoji",
                "מצב לילה",
                "סגנונות צילום מהדור האחרון",
                "לכידת צבעים רחבה לתמונות ותמונות חיות",
                "תיקון עדשה",
                "ייצוב תמונה אוטומטי",
                "מצב צילום מתפרץ",
                "הקלטת וידאו 4K Dolby Vision ב-24/25/30/60fps",
                "הקלטת וידאו 1080p Dolby Vision ב-25/30/60fps",
                "מצב קולנועי עד 4K Dolby Vision ב-30fps",
                "תמיכה בוידאו הילוך איטי 1080p ב-120fps",
                "וידאו Time-lapse עם ייצוב",
                "Time-lapse במצב לילה",
                "וידאו QuickTake עד 4K Dolby Vision ב-60fps",
                "ייצוב וידאו קולנועי (4K, 1080p, 720p)",
                "הקלטת שמע מרחבית וסטריאו",
                "הפחתת רעשי רוח",
                "מיקס אודיו"
              ],
              "זיהוי פנים": [
                "מופעל על ידי טכנולוגיית TrueDepth במצלמה הקדמית של Center Stage"
              ],
              "תשלומים": [
                "Apple Pay: שלמו עם האייפון באמצעות Face ID בחנויות, אפליקציות ובאינטרנט",
                "השלמת רכישות Apple Pay ב-Mac",
                "Express Travel"
              ],
              "קישוריות": [
                "5G (sub-6 GHz) עם 4x4 MIMO",
                "Gigabit LTE עם 4x4 MIMO",
                "שבב רשת אלחוטית N1 של אפל",
                "Wi-Fi 7 (802.11be) עם 2x2 MIMO",
                "Bluetooth 6.0",
                "טכנולוגיית רשת Thread",
                "שבב Ultra Wideband דור שני",
                "NFC עם מצב קריאה",
                "כרטיסי Express עם מצב חיסכון"
              ],
              "מיקום": [
                "GPS מדויק בתדר כפול (GPS, GLONASS, Galileo, QZSS, BeiDou, NavIC)",
                "מצפן דיגיטלי",
                "Wi-Fi",
                "רשת סלולרית",
                "מיקרו-מיקום iBeacon"
              ],
              "שיחות וידאו ושמע": [
                "שיחות וידאו FaceTime דרך רשת סלולרית או Wi-Fi",
                "שיחות וידאו FaceTime HD (1080p) דרך 5G או Wi-Fi",
                "Center Stage",
                "SharePlay לשיתוף חוויות בשיחות FaceTime",
                "שיתוף מסך",
                "מצב פורטרט בוידאו FaceTime",
                "שמע מרחבי (Spatial Audio)",
                "מצבי מיקרופון: בידוד קולי וספקטרום רחב",
                "זום עם מצלמה אחורית",
                "שמע FaceTime",
                "Voice over LTE (VoLTE)",
                "שיחות Wi-Fi"
              ],
              "שמע ווידאו": [
                "פורמטים נתמכים: AAC, APAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus, Dolby Atmos",
                "השמעת שמע מרחבית",
                "מגבלת עוצמת קול ניתנת להגדרה",
                "פורמטים נתמכים: HEVC, H.264, AV1",
                "HDR עם Dolby Vision, HDR10+/HDR10, HLG",
                "AirPlay עד 4K HDR לשיקוף והזרמה ל-Apple TV או טלוויזיות חכמות",
                "שיקוף ויציאת וידאו: עד 4K HDR דרך DisplayPort באמצעות USB-C"
              ],
              "Siri": [
                "קבל עזרה במשימות יומיומיות באמצעות קולך",
                "הפעלת דיבורית עם \"Siri\" או \"היי Siri\"",
                "מופעל על ידי Apple Intelligence לחוויה טבעית ומועילה יותר (בטא)"
              ],
              "כפתורים וחיבורים": [
                "כפתור פעולה (Action Button) עם מצבים שונים (שקט, מיקוד, מצלמה, פנס ועוד)",
                "בקרות מצלמה ייעודיות",
                "מחבר USB-C עם תמיכה בטעינה, DisplayPort, ו-USB 2 (עד 480Mb/s)"
              ],
              "סוללה": [
                "הפעלת וידאו: עד 30 שעות",
                "הפעלת וידאו (סטרימינג): עד 27 שעות",
                "סוללת ליתיום-יון נטענת מובנית",
                "טעינה אלחוטית MagSafe",
                "טעינה אלחוטית Qi2"
              ],
              "חיישנים": [
                "Face ID",
                "ברומטר",
                "ג'ירוסקופ עם טווח דינמי גבוה",
                "מד תאוצה g-high",
                "חיישן קרבה",
                "חיישני תאורת סביבה כפולים"
              ],
              "מערכת הפעלה": [
                "iOS 26"
              ],
              "SIM": [
                "Dual SIM (nano-SIM ו-eSIM)"
              ],
              "תכולת האריזה": [
                "iPhone עם iOS 26",
                "כבל טעינה USB-C (1 מטר)",
                "תיעוד"
              ]
        }
    },
    {
        id: 113,
        name: 'Apple iPhone 17 Air',
        price: '₪4,800',
        imageUrl: 'https://img.ksp.co.il/item/410693/b_1.jpg?v=1757596492',
        brand: 'Apple',
        description: 'הכירו את iPhone 17 Air, האייפון הדק ביותר אי פעם. עם עיצוב טיטניום, מגן Ceramic Shield 2, שבב A19 Pro עוצמתי ומערכת מצלמות Fusion 48MP.',
        specs: {
            'מעבד': 'שבב A19 Pro',
            'מסך': '6.5" Super Retina XDR',
            'מצלמה ראשית': '48MP Fusion',
            'סוללה': 'עד 27 שעות צפייה בוידאו'
        },
        colors: ['Space Black', 'כחול שמיים', 'זהב בהיר', 'לבן'],
        storageOptions: [
            { size: '256GB', priceModifier: 0, inStock: true },
            { size: '512GB', priceModifier: 800, inStock: true },
            { size: '1TB', priceModifier: 1700, inStock: true },
        ],
        screenSizeInches: 6.5,
        manufacturerUrl: 'https://www.apple.com/uk/iphone-air/',
        featureSections: [
            {
                title: 'ה-iPhone הדק ביותר, אי פעם',
                description: '',
                videoUrl: 'https://media.ksp.co.il/hisfya0d0gkm544sa0vle.mp4'
            },
            {
                title: 'קשיח. יותר קשיח.',
                description: 'Ceramic Shield. מגן על גב ה-iPhone Air, מה שהופך אותו לעמיד פי 4 בפני שברים⁵. כמו כן, Ceramic Shield 2 חדש בחזית מספק עמידות בפני שריטות טובה פי 3⁶.\n\n⁵ בהשוואה לגב הזכוכית של ה-iPhone מהדור הקודם.\n⁶ בהשוואה לדור הקודם של iPhone.',
                videoUrl: 'https://media.ksp.co.il/zrgprecl94plnqlpbe5oh.mp4'
            },
            {
                title: 'מצלמה קדמית שעושה ריבוע',
                description: 'חיישן חדש בצורת ריבוע מאפשר אפשרויות זום וסיבוב, לדרכים גמישות יותר למסגר סלפי ווידאו. והוא גם מכניס את כולם לתמונה קבוצתית - באופן אוטומטי.',
                videoUrl: 'https://media.ksp.co.il/gin9v98jgxmyxuheq5ir7.mp4'
            }
        ],
        detailedSpecs: {
            "גימור": [
                "Titanium design",
                "Ceramic Shield 2 front",
                "Ceramic Shield back"
            ],
            "נפח": [
                "256GB, 512GB, 1TB",
                "השטח הזמין קטן יותר ומשתנה עקב גורמים רבים. תצורה סטנדרטית משתמשת בכ-12GB עד 24GB של שטח, כולל iOS 26 עם התכונות העדכניות ביותר ואפליקציות Apple הניתנות למחיקה. דגמי Apple Intelligence במכשירים משתמשים בכ-7GB של שטח וניתן למחוק אותם אם Apple Intelligence כבוי. הפעלת Apple Intelligence תוריד את המודלים שוב. אפליקציות Apple הניתנות למחיקה משתמשות בכ-4.5GB של שטח אחסון, וניתן להוריד אותן מחדש מחנות האפליקציות. קיבולת האחסון עשויה להשתנות בהתאם לגרסת התוכנה, ההגדרות ודגם האייפון."
            ],
            "מימדים ומשקל": [
                "גובה: 156.2 מ\"מ",
                "רוחב: 74.7 מ\"מ",
                "עומק: 5.64 מ\"מ",
                "משקל: 165 גרם",
                "הגודל והמשקל משתנים בהתאם לתצורה ותהליך הייצור."
            ],
            "תצוגה": [
                "Super Retina XDR display",
                "6.5‑inch (diagonal) all‑screen OLED display",
                "2736x1260‑pixel resolution at 460 ppi",
                "Dynamic Island",
                "Always-On display",
                "ProMotion technology with adaptive refresh rates up to 120Hz",
                "HDR display",
                "True Tone",
                "Wide colour (P3)",
                "Haptic Touch",
                "2,000,000:1 contrast ratio (typical)",
                "1,000 nits max brightness (typical); 1,600 nits peak brightness (HDR); 3,000 nits peak brightness (outdoor); 1 nit minimum brightness",
                "Fingerprint-resistant oleophobic coating",
                "Anti-reflective coating",
                "Support for display of multiple languages and characters simultaneously",
                "לתצוגת ה-iPhone Air פינות מעוגלות העוקבות אחר עיצוב מעוגל ויפהפה, ופינות אלו נמצאות בתוך מלבן סטנדרטי. כאשר נמדד כצורה מלבנית סטנדרטית, המסך הוא 6.55 אינץ' באלכסון (שטח הצפייה בפועל קטן יותר)."
            ],
            "מעבד": [
                "A19 Pro chip",
                "6‑core CPU with 2 performance and 4 efficiency cores",
                "5‑core GPU with Neural Accelerators",
                "16‑core Neural Engine",
                "Hardware-accelerated ray tracing"
            ],
            "מצלמה": [
                "48MP Fusion camera system",
                "48MP Fusion Main: 26mm, ƒ/1.6 aperture, sensor-shift optical image stabilisation, 100% Focus Pixels, support for super-high-resolution photos (24MP and 48MP)",
                "Also enables 12MP optical-quality 2x Telephoto: 52mm, ƒ/1.6 aperture, sensor-shift optical image stabilisation, 100% Focus Pixels",
                "Digital zoom up to 10x",
                "Customisable default lens (Fusion Main)",
                "Sapphire crystal lens cover",
                "True Tone flash",
                "Photonic Engine",
                "Deep Fusion",
                "Smart HDR 5",
                "Next-generation portraits with Focus and Depth Control",
                "Portrait Lighting with six effects",
                "Night mode",
                "Panorama (up to 63MP)",
                "Latest-generation Photo­graphic Styles",
                "Wide colour capture for photos and Live Photos",
                "Advanced red‑eye correction",
                "Auto image stabilisation",
                "Burst mode",
                "Photo geotagging",
                "Image formats captured: HEIF and JPEG"
            ],
            "הקלטת וידאו": [
                "4K Dolby Vision video recording at 24 fps, 25 fps, 30 fps or 60 fps",
                "1080p Dolby Vision video recording at 25 fps, 30 fps or 60 fps",
                "720p Dolby Vision video recording at 30 fps",
                "Action mode up to 2.8K Dolby Vision at 60 fps",
                "Slo‑mo video support for 1080p at 120 fps or 240 fps",
                "Dual Capture up to 4K Dolby Vision at 30 fps",
                "Time‑lapse video with stabilisation",
                "Night mode Time-lapse",
                "QuickTake video up to 4K Dolby Vision at 60 fps",
                "Sensor-shift optical image stabilisation for video",
                "Digital zoom up to 6x",
                "Audio zoom",
                "True Tone flash",
                "Cinematic video stabilisation (4K, 1080p and 720p)",
                "Continuous autofocus video",
                "Take 8MP still photos while recording 4K video",
                "Playback zoom",
                "Video formats recorded: HEVC and H.264",
                "Spatial Audio and stereo recording",
                "Wind noise reduction",
                "Audio Mix"
            ],
            "מצלמה קדמית": [
                "18MP Center Stage camera",
                "ƒ/1.9 aperture",
                "Autofocus with Focus Pixels",
                "Retina Flash",
                "Tap to zoom and rotate",
                "Centre Stage for photos",
                "Ultra-stabilised video",
                "Dual Capture",
                "Centre Stage for video calls",
                "Photonic Engine",
                "Deep Fusion",
                "Smart HDR 5",
                "Next-generation portraits with Focus and Depth Control",
                "Portrait Lighting with six effects",
                "Animoji and Memoji",
                "Night mode",
                "Latest-generation Photographic Styles",
                "Wide colour capture for photos and Live Photos",
                "Lens correction",
                "Auto image stabilisation",
                "Burst mode",
                "4K Dolby Vision video recording at 24 fps, 25 fps, 30 fps or 60 fps",
                "1080p Dolby Vision video recording at 25 fps, 30 fps or 60 fps",
                "Slo-mo video support for 1080p at 120 fps",
                "Time‑lapse video with stabilisation",
                "Night mode Time-lapse",
                "QuickTake video up to 4K Dolby Vision at 60 fps",
                "Cinematic video stabilisation (4K, 1080p and 720p)",
                "Spatial Audio and stereo recording",
                "Wind noise reduction",
                "Audio Mix"
            ],
            "זיהוי פנים": [
                "Enabled by TrueDepth technology in the Center Stage front camera"
            ],
            "תשלומים": [
                "Apple Pay: Pay with your iPhone using Face ID in shops, within apps and on the web",
                "Complete purchases made with Apple Pay on your Mac",
                "Pay for your journey using Express Travel"
            ],
            "קישוריות": [
                "Apple C1X cellular modem",
                "5G (sub-6GHz) with 4x4 MIMO",
                "Gigabit LTE with 4x4 MIMO",
                "Apple N1 wireless networking chip",
                "Wi‑Fi 7 (802.11be) with 2x2 MIMO",
                "Bluetooth 6",
                "Thread networking technology",
                "Apple second-generation Ultra Wideband chip",
                "NFC with reader mode",
                "Express Cards with Power Reserve"
            ],
            "מיקום": [
                "Precision dual-frequency GPS (GPS, GLONASS, Galileo, QZSS, BeiDou and NavIC)",
                "Digital compass",
                "Wi‑Fi",
                "Mobile data",
                "iBeacon micro-location"
            ],
            "שיחות וידאו ושמע": [
                "FaceTime video calling over Wi‑Fi or a mobile network",
                "FaceTime HD (1080p) video calling over 5G or Wi‑Fi",
                "Centre Stage",
                "Share experiences like movies, TV, music and other apps in a FaceTime call with SharePlay",
                "Screen sharing",
                "Portrait mode in FaceTime video",
                "Spatial Audio",
                "Voice Isolation and Wide Spectrum microphone modes",
                "Zoom with rear-facing camera",
                "FaceTime audio",
                "Voice over LTE (VoLTE)",
                "Wi‑Fi calling"
            ],
            "שמע ווידאו": [
                "Supported formats include AAC, APAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus and Dolby Atmos",
                "Spatial Audio playback with compatible AirPods",
                "User‑configurable maximum volume limit",
                "Supported formats include HEVC, H.264 and AV1",
                "HDR with Dolby Vision, HDR10+/HDR10 and HLG",
                "Up to 4K HDR AirPlay for mirroring, photos and video out to Apple TV (2nd generation or later) or AirPlay‑enabled smart TV"
            ],
            "Siri": [
                "Get help with everyday tasks like sending messages, setting reminders and more",
                "Activate hands‑free with only your voice using “Siri” or “Hey Siri”, or use Type to Siri",
                "Protected by the strongest privacy of any intelligent assistant",
                "Powered by Apple Intelligence, Siri is more natural and helpful"
            ],
            "כפתורים וחיבורים": [
                "Action button features: Silent mode, Focus, Camera, Visual intelligence, Torch, Voice Memo, Recognise Music, Translate, Magnifier, Controls, Shortcut or Accessi­bility",
                "Camera controls: Exposure, Depth, Zoom, Cameras, Styles, Tone",
                "USB-C connector with support for: Char­ging, USB 2 (up to 480Mb/s)"
            ],
            "סוללה": [
                "Video playback: Up to 27 hours",
                "Video playback (streamed): Up to 22 hours",
                "Built‑in rechargeable lithium‑ion battery"
            ],
            "MagSafe וטעינה אלחוטית": [
                "MagSafe wireless charging",
                "Qi2 wireless charging"
            ],
            "חיישנים": [
                "Face ID",
                "Barometer",
                "High dynamic range gyro",
                "High-g accelerometer",
                "Proximity sensor",
                "Dual ambient light sensors"
            ],
            "מערכת הפעלה": [
                "iOS 26"
            ],
            "SIM": [
                "Dual eSIM (two active eSIMs; stores eight or more eSIMs)",
                "iPhone Air is not compatible with physical SIM cards."
            ],
            "תכולת האריזה": [
                "iPhone with iOS 26",
                "USB-C Charge Cable (1m)",
                "Documentation"
            ]
        }
    }
];

export const smartwatchProducts: PhoneProduct[] = [
    {
        id: 201,
        name: 'Samsung Galaxy Watch 8',
        price: '₪1,200', // Base price, will be updated based on variant selection
        imageUrl: 'https://img.ksp.co.il/item/395555/b_6.jpg?v=1751894523', // Default to white/silver
        brand: 'Samsung',
        description: 'שעון חכם מתקדם עם ניטור בריאות מקיף, GPS מובנה ועיצוב אלגנטי.',
        specs: { 
            'מעבד': '3nm 5-Core',
            'אחסון': '32GB',
            'סוללה': 'עד 30 שעות (AOD מופעל)',
            'עמידות': '5ATM + IP68 / MIL-STD-810H'
        },
        colors: ['לבן', 'שחור'],
        storageOptions: [], // Not applicable for this product structure
        variants: [
            { size: '40mm', connectivity: 'WiFi', price: 1200 },
            { size: '44mm', connectivity: 'WiFi', price: 1400 },
            { size: '40mm', connectivity: 'LTE', price: 1320 },
            { size: '44mm', connectivity: 'LTE', price: 1500 },
        ],
        featureSections: [
            {
                title: 'נוחות יוצאת דופן',
                description: 'נוחות יוצאת דופן, לאורך כל היום. בזכות מערכת החיבורים הדינמית, Galaxy Watch8 עוטף את פרק היד בצורה מושלמת – קרוב לעור ועם מרווח מינימלי. העיצוב המשופר מבטיח יציבות והתאמה מושלמת, וכמעט שלא תרגישו שאתם עונדים את השעון. חוויית השימוש הנוחה ביותר של Galaxy Watch עד כה.',
                videoUrl: 'https://media.ksp.co.il/hksywflujeu0kb7xbqrdc.mp4'
            },
            {
                title: 'צרו שגרת שינה בריאה',
                description: 'בנו הרגלי שינה טובים עם הדרכת שעת שינה. Galaxy Watch8 משתמש בנתוני שינה של שלושה ימים כדי למצוא את שעת השינה האופטימלית שלכם – הצעד הראשון לשינה טובה יותר. קבלו נדנודים חכמים לגבי שעת השינה האידיאלית ותוכלו ליהנות מהמנוחה שאתם צריכים. קומו רעננים, מלאי אנרגיה ומוכנים ליום החדש – הודות ללוח זמנים אישי לשינה.',
                videoUrl: 'https://media.ksp.co.il/9y57a96r7p6vmnelpwome.webm'
            },
            {
                title: 'הכירו את רמת האנרגיה שלכם. נצלו טוב יותר את היום',
                description: 'הבינו את הגוף שלכם כדי להתחיל את היום בצורה חכמה יותר. Galaxy Watch8 מנתח את האימונים, את דפוסי השינה ואת אותות הלב בלילה כדי להציג תחזית יומית – ה-Energy Score שלכם. קבלו תובנות מ-Galaxy AI, ובדקו כל מדד לעומק. התאימו את הפעילות היומית לרמת האנרגיה שלכם.',
                videoUrl: 'https://media.ksp.co.il/k2qphze01ovctxgp0usus.webm'
            },
            {
                title: 'רוצו בקצב שלכם עם אימון אישי',
                description: 'אחרי התאוששות מלאה בזכות שנת לילה טובה, הגיע הזמן לזוז. התחילו במבדק לזיהוי רמת הריצה שלכם בסולם של 1 עד 10. הגדירו יעדים והתקדמו לקראתם באימונים בקצב שלכם. לא משנה אם אתם רק אצנים מתחילים או שאתם מתאמנים למרתון מלא, תוכנית אימון ריצה של 3-‏5 שבועות שמותאמת ליכולת הריצה שלכם תנחה ותעודד אתכם בכל שלב, כדי שתוכלו לשבור שיאים.',
                videoUrl: 'https://media.ksp.co.il/oby0sssl9u8v943xhsvgd.webm'
            },
            {
                title: 'עקבו אחרי בריאות הלב בזמן השינה',
                description: 'נהלו את העומס בכלי הדם בזמן השינה. ענדו את Galaxy Watch8 לפחות 4 שעות בכל לילה במשך יותר מ-3 לילות כדי למצוא את נקודת ההתחלה שלכם, ועקבו אחרי המדידות לאורך זמן. אם המדדים במגמת עלייה, תקבלו הצעות מועילות - אולי הגיע הזמן לאכול יותר מזון טרי, לשפר את הרגלי השינה או להפחית את הלחץ היומיומי. הישארו מעודכנים לגבי בריאות הלב שלכם וקבלו החלטות שיגרמו לכם להרגיש טוב יותר מחר.',
                videoUrl: 'https://media.ksp.co.il/wf8tsodu7h4xrygyhgpzb.mp4'
            },
            {
                title: 'פשוט מבקשים, ומקבלים',
                description: 'הרימו את היד ודברו – Google Gemini יעזור לכם. Galaxy Watch8 עם Gemini מובנה עוזר לכם לבצע משימות במהירות גם ברגעים העמוסים ביותר במהלך היום. פשוט שואלים, ומקבלים תשובות ורעיונות, מבצעים מספר משימות באפליקציות שונות, או משיגים מידע חשוב על המקום. משיגים את מה שצריכים, ישר מהשעון.',
                imageUrl: 'https://media.ksp.co.il/l6noxa3m86dwctfk214l3.jpg'
            },
            {
                title: 'השעון החדש עם One UI 8 Watch',
                description: 'שעון חדש, One UI חדש. קבלו את המידע החיוני שלכם באמצעות אריח ריכוז המידע, שמרכז פרטים חשובים מהאפליקציות שבחרתם. תוכלו להישאר מעודכנים במבט מהיר עם התראות משופרות, ולגשת בקלות לאפליקציות הנבחרות שלכם מהחלק העליון של רשימת האפליקציות. צפו במידע בזמן אמת, משיחות ועד זמן ריצה וטיימרים, והכול במקום אחד עם ה-Now bar.',
                imageUrl: 'https://media.ksp.co.il/dnk1hivywalq2wlq3961e.jpg'
            }
        ],
        detailedSpecs: {
            "מפרט כללי": [
                "חומר: Armor Aluminum",
                "מעבד: מעבד 3 ננומטר, 5 ליבות",
                "GPS: GPS L1+L5 בעל תדר כפול",
                "קישוריות: Bluetooth",
                "זיכרון/אחסון: 2GB/32GB",
                "בהירות תצוגה: עד 3,000nits",
                "עמידות: 5ATM + IP68 ‏/ MIL-STD-810H",
                "סוללה: 325mAh (עד 30 שעות *AOD מופעל)",
                "בטיחות וחירום: זיהוי מצוקה/נפילה"
            ],
            "בריאות": [
                "Energy Score",
                "הדרכת זמן שינה",
                "התראת רמת סטרס גבוהה",
                "אימון ריצה",
                "מותאם אישית אזור קצב לב",
                "כוס סף פונקציונלי מותאם אישית",
                "AGEs מדד",
                "עומס בכלי הדם",
                "לחץ דם",
                "ECG",
                "Irregular Heart Rhythm Notification",
                "נוגד חמצון",
                "הרכב גוף",
                "מעקב מחזור"
            ]
        },
        screenSizeInches: 1.4, // Represents the larger option
        waterResistance: '5ATM',
    }
];


export const brands: Brand[] = [
    { id: 1, name: 'Apple', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { id: 2, name: 'Samsung', logoUrl: 'https://ksp.co.il/images/brands/137.png' },
    { id: 3, name: 'Google', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { id: 6, name: 'Dell', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
];

export const promotions: Promotion[] = [
    { id: 1, title: 'חזרה ללימודים', description: 'כל מה שצריך לשנת לימודים מוצלחת במקום אחד.', imageUrl: 'https://picsum.photos/seed/promo_school/600/400', buttonText: 'לכל המבצעים' },
    { id: 2, title: 'מבצעי קיץ', description: 'מתכוננים לחופש הגדול עם דילים שלא תרצו לפספס.', imageUrl: 'https://picsum.photos/seed/promo_summer/600/400', buttonText: 'גלו עוד' },
    { id: 3, title: 'גיימינג זה כאן', description: 'שדרגו את עמדת המשחקים שלכם עם הציוד החם ביותר.', imageUrl: 'https://picsum.photos/seed/promo_gaming/600/400', buttonText: 'לעולם הגיימינג' },
    { id: 4, title: 'מטבח חכם', description: 'מוצרי חשמל קטנים וגדולים שישדרגו לכם את המטבח.', imageUrl: 'https://picsum.photos/seed/promo_kitchen/600/400', buttonText: 'למבצעים' },
];
