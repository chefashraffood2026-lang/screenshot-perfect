import type { L } from "./i18n";

export const photos = [
  "/assets/food1.jpg",
  "/assets/food2.jpg",
  "/assets/food3.jpg",
  "/assets/food4.jpg",
  "/assets/food5.jpg",
  "/assets/food6.jpg",
  "/assets/food7.jpg",
  "/assets/food8.jpg",
  "/assets/food9.jpg",
  "/assets/food10.jpg",
  "/assets/food11.jpg",
  "/assets/food12.jpg",
  "/assets/food13.jpg",
  "/assets/food14.jpg",
];

export const img = {
  food1: "/assets/food1.jpg",
  mezzeTable: "/assets/food2.jpg",
  dessert: "/assets/food3.jpg",
  cabbage: "/assets/food4.jpg",
  food5: "/assets/food5.jpg",
  greens: "/assets/food6.jpg",
  glazed: "/assets/food7.jpg",
  food8: "/assets/food8.jpg",
  saladBowl: "/assets/food9.jpg",
  beets: "/assets/food10.jpg",
  food11: "/assets/food11.jpg",
  grillPlate: "/assets/food12.jpg",
  plates: "/assets/food13.jpg",
  longTable: "/assets/food14.jpg",
};

export type GalleryCategory = "all" | "meat" | "salads" | "events" | "dessert";

export type GalleryItem = {
  id: string;
  src: string;
  title: L;
  desc: L;
  category: GalleryCategory;
};

export const galleryCategories: { id: GalleryCategory; name: L }[] = [
  { id: "all", name: { he: "הכל (14 תמונות)", ar: "الكل (14 صورة)" } },
  { id: "meat", name: { he: "בשרים וגריל", ar: "لحوم ومشاوي" } },
  { id: "salads", name: { he: "סלטים ומאזטים", ar: "سلطات ومقبلات" } },
  { id: "events", name: { he: "אירוח ופיקניק", ar: "ضيافة ونزهات" } },
  { id: "dessert", name: { he: "קינוחים", ar: "حلويات" } },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "food1",
    src: "/assets/food1.jpg",
    title: { he: "מגש אירוח עשיר", ar: "صينية ضيافة غنية" },
    desc: {
      he: "נתחי בשר מובחרים, סלטים טריים ומטבלים",
      ar: "قطع لحم مختارة، سلطات طازجة وتغميسات",
    },
    category: "meat",
  },
  {
    id: "food2",
    src: "/assets/food2.jpg",
    title: { he: "שולחן מאזטים ביתי", ar: "طاولة مقبلات بيتية" },
    desc: {
      he: "מבחר סלטים ומאזטים מסורתיים מהמטבח השאמי",
      ar: "تشكيلة سلطات ومقبلات شامية تقليدية",
    },
    category: "salads",
  },
  {
    id: "food3",
    src: "/assets/food3.jpg",
    title: { he: "שולחן מתוקים וקינוחים", ar: "طاولة حلويات وفاكهة" },
    desc: {
      he: "מגוון קינוחי שף ופירות העונה המעוצבים באהבה",
      ar: "مجموعة حلويات شيف وفواكه موسمية",
    },
    category: "dessert",
  },
  {
    id: "food4",
    src: "/assets/food4.jpg",
    title: { he: "פיקניק שף בטבע", ar: "نزهة شيف في الطبيعة" },
    desc: {
      he: "חוויית אוכל באוויר הפתוח עם ירקות טריים ובשרים",
      ar: "تجربة طعام في الهواء الطلق مع خضار ولحوم",
    },
    category: "events",
  },
  {
    id: "food5",
    src: "/assets/food5.jpg",
    title: { he: "מאפים ופוקאצ'ות טריות", ar: "معجنات وفوكاشيا طازجة" },
    desc: {
      he: "לחמים חמים מהטאבון עם שמן זית ועשבי תיבול",
      ar: "خبز ساخن من الطابون مع زيت زيتון وأعشاب",
    },
    category: "events",
  },
  {
    id: "food6",
    src: "/assets/food6.jpg",
    title: { he: "סלט ירוקים וגרעינים קלויים", ar: "سلطة خضراء وبذور محمصة" },
    desc: { he: "עשבי תיבול רעננים, ויניגרט לימון ושמן זית", ar: "أعشاب طازجة، ليمون وزيت زيتون" },
    category: "salads",
  },
  {
    id: "food7",
    src: "/assets/food7.jpg",
    title: { he: "אסאדו מזוגג ובשר מעושן", ar: "أسادو مزجج ولحم مدخن" },
    desc: {
      he: "צלייה איטית באש פתוחה עם זיגוג מתקתק ושומשום",
      ar: "شواء بطيء على النار مع سمسم وتزجيج خاص",
    },
    category: "meat",
  },
  {
    id: "food8",
    src: "/assets/food8.jpg",
    title: { he: "שיפודים וקבב פרימיום", ar: "أسياخ وكباب فاخر" },
    desc: {
      he: "בשר טרי מתובל במדויק וצלוי על גחלים לוחשות",
      ar: "لحم طازج متبل بدقة ومشوي على الفحم",
    },
    category: "meat",
  },
  {
    id: "food9",
    src: "/assets/food9.jpg",
    title: { he: "סלט כרוב וירקות שף", ar: "سلطة ملفوف وخضار شيف" },
    desc: { he: "הגשה מיוחדת בקערת כרוב פריך עם עשבי בר", ar: "تقديم مميز في وعاء ملفوف مقرمش" },
    category: "salads",
  },
  {
    id: "food10",
    src: "/assets/food10.jpg",
    title: { he: "סלטי שורש וסלק מובחר", ar: "سلطة شمندر وخضار جذرية" },
    desc: { he: "סלק חי וגזר מגוררים בתיבול שאמי מסורתי", ar: "شمندر وجزر متبل بنكهات أصيلة" },
    category: "salads",
  },
  {
    id: "food11",
    src: "/assets/food11.jpg",
    title: { he: "נתחי בשר למועדון הקרניבורים", ar: "قطع لحم لنادي اللحوم" },
    desc: {
      he: "נתחים מיושנים ועשירים בטעמים לאוהבי בשר אמיתיים",
      ar: "لحوم معتقة غنية بالنكهات لعشاق اللحم",
    },
    category: "meat",
  },
  {
    id: "food12",
    src: "/assets/food12.jpg",
    title: { he: "צלחת גריל חגיגית", ar: "صحن مشاوي احتفالي" },
    desc: { he: "מבחר נתחי בשר וירקות צלויים למופת", ar: "تشكيلة لحوم وخضار مشوية باحترافية" },
    category: "meat",
  },
  {
    id: "food13",
    src: "/assets/food13.jpg",
    title: { he: "עריכת שולחנות והגשה אישית", ar: "ترتيب موائد وتقديم شخصي" },
    desc: {
      he: "עיצוב שולחנות מלא סטייל ודיוק לכל אירוע",
      ar: "تصميم طاولات مميز ואניק לכל אירוע",
    },
    category: "events",
  },
  {
    id: "food14",
    src: "/assets/food14.jpg",
    title: { he: "שולחן אירוח ארוך", ar: "مائدة طعام طويلة للمناسبات" },
    desc: {
      he: "חוויית קייטרינג מלאה לאירועים גדולים ומשפחתיים",
      ar: "تجربة ضيافة كاملة للمناسبات الكبيرة",
    },
    category: "events",
  },
];

export type Category = "starters" | "meats" | "sides" | "desserts" | "packages";
export const categories: { id: Category; name: L }[] = [
  { id: "starters", name: { he: "מנות פתיחה", ar: "مقبلات" } },
  { id: "meats", name: { he: "בשרים", ar: "لحوم" } },
  { id: "sides", name: { he: "תוספות", ar: "أطباق جانبية" } },
  { id: "desserts", name: { he: "קינוחים", ar: "حلويات" } },
  { id: "packages", name: { he: "חבילות", ar: "باقات" } },
];

export type MenuItem = {
  id: string;
  category: Category;
  name: L;
  desc: L;
  price: number;
  size: L;
  allergens?: L;
  approval?: boolean;
  image: string;
};

export const menu: MenuItem[] = [
  {
    id: "m1",
    category: "starters",
    name: { he: "מגש סלטים ביתיים", ar: "صينية سلطات بيتية" },
    desc: {
      he: "סלק, גזר מתובל, זיתים, חצילים וטחינה",
      ar: "شمندر، جزر متبل، زيتون، باذنجان وطحينة",
    },
    price: 120,
    size: { he: "ל־6 סועדים", ar: "لـ 6 أشخاص" },
    allergens: { he: "שומשום", ar: "سمسم" },
    image: img.mezzeTable,
  },
  {
    id: "m2",
    category: "starters",
    name: { he: "סלט ירקות בקערת כרוב", ar: "سلطة خضار بوعاء ملفوف" },
    desc: { he: "ירקות קצוצים, לבנה וסומק", ar: "خضار مقطعة، لبنة وسماق" },
    price: 45,
    size: { he: "קערה אישית", ar: "وعاء فردي" },
    allergens: { he: "חלב", ar: "حليب" },
    image: img.saladBowl,
  },
  {
    id: "m3",
    category: "meats",
    name: { he: "צלחת גריל מעורבת", ar: "صحن مشاوي مشكل" },
    desc: { he: "שיפוד קבב, פרגית, קציצה ופטריות", ar: "سيخ كباب، دجاج، كفتة وفطر" },
    price: 105,
    size: { he: "מנה אישית", ar: "وجبة فردية" },
    image: img.grillPlate,
  },
  {
    id: "m4",
    category: "meats",
    name: { he: "אסאדו מזוגג בשומשום", ar: "أضلاع مزججة بالسمسم" },
    desc: { he: "בישול ארוך, זיגוג מתקתק", ar: "طهي طويل وتزجيج حلو" },
    price: 140,
    size: { he: "מנה אישית", ar: "وجبة فردية" },
    allergens: { he: "שומשום", ar: "سمسم" },
    approval: true,
    image: img.glazed,
  },
  {
    id: "m5",
    category: "sides",
    name: { he: "סלט ירוקים וגרעינים", ar: "سلطة خضراء وبذور" },
    desc: { he: "עלים, עשבי תיבול וגרעינים קלויים", ar: "أوراق، أعشاب وبذور محمصة" },
    price: 38,
    size: { he: "קערה", ar: "وعاء" },
    image: img.greens,
  },
  {
    id: "m6",
    category: "sides",
    name: { he: "סלק מגורר", ar: "شمندر مبشور" },
    desc: { he: "בלימון ושמן זית", ar: "بالليمون وزيت الزيتون" },
    price: 25,
    size: { he: "צלחת", ar: "صحن" },
    image: img.beets,
  },
  {
    id: "m7",
    category: "desserts",
    name: { he: "שולחן קינוחים", ar: "طاولة حلويات" },
    desc: { he: "פירות חתוכים, עוגיות ומתוקים", ar: "فواكه مقطعة، كعك وحلويات" },
    price: 35,
    size: { he: "לאדם", ar: "للشخص" },
    allergens: { he: "גלוטן, אגוזים", ar: "غلوتين، مكسرات" },
    approval: true,
    image: img.dessert,
  },
];

export type Pkg = { id: string; name: L; desc: L; price: L; includes: L[]; image: string };
export const packages: Pkg[] = [
  {
    id: "family",
    name: { he: "ארוחה משפחתית", ar: "وجبة عائلية" },
    desc: { he: "שולחן מלא לאירוח בבית", ar: "مائدة كاملة للضيافة في البيت" },
    price: { he: "₪150 לאדם", ar: "150 ₪ للشخص" },
    includes: [
      { he: "8 סלטים", ar: "8 سلطات" },
      { he: "צלחת גריל", ar: "صحن مشاوي" },
      { he: "קינוח", ar: "حلوى" },
    ],
    image: img.mezzeTable,
  },
  {
    id: "event",
    name: { he: "אירוע גדול", ar: "مناسبة كبيرة" },
    desc: { he: "חתונות, אירוסין וימי הולדת", ar: "أعراس، خطوبة وأعياد ميلاد" },
    price: { he: "₪180–260 לאדם", ar: "180–260 ₪ للشخص" },
    includes: [
      { he: "הגשה ועריכה", ar: "تقديم وترتيب" },
      { he: "בשרים על האש", ar: "لحوم مشوية" },
      { he: "שולחן קינוחים", ar: "طاولة حلويات" },
    ],
    image: img.longTable,
  },
  {
    id: "org",
    name: { he: "ארגונים וקבוצות", ar: "مؤسسات ومجموعات" },
    desc: { he: "ארוחות צוות וכנסים", ar: "وجبات فرق ومؤتمرات" },
    price: { he: "לפי הצעת מחיר", ar: "حسب عرض السعر" },
    includes: [
      { he: "מנות אישיות", ar: "وجبات فردية" },
      { he: "משלוח", ar: "توصيل" },
    ],
    image: img.plates,
  },
];

export type ClubEvent = {
  id: string;
  name: L;
  date: string;
  time: string;
  location: L;
  program: L;
  price: number;
  capacity: number;
  left: number;
  image: string;
};
export const events: ClubEvent[] = [
  {
    id: "e1",
    name: { he: "ערב אסאדו ואש פתוחה", ar: "أمسية أسادو ونار مفتوحة" },
    date: "2026-11-20",
    time: "19:00",
    location: { he: "הגליל", ar: "الجليل" },
    program: {
      he: "סדנת צלייה, ארוחה מלאה ושיחה עם השף",
      ar: "ورشة شواء، وجبة كاملة وحديث مع الشيف",
    },
    price: 290,
    capacity: 30,
    left: 8,
    image: img.glazed,
  },
  {
    id: "e2",
    name: { he: "ערב שיפודים", ar: "أمسية أسياخ" },
    date: "2026-12-11",
    time: "20:00",
    location: { he: "חיפה", ar: "حيفا" },
    program: { he: "שיפודים, סלטים וקינוח", ar: "أسياخ، سلطات وحلوى" },
    price: 220,
    capacity: 24,
    left: 0,
    image: img.grillPlate,
  },
];

export const picnic = {
  name: { he: "פיקניק שף בטבע", ar: "نزهة شيف في الطبيعة" },
  area: {
    he: "צפון הארץ — מיקום מדויק נמסר לאחר ההרשמה",
    ar: "شمال البلاد — يُرسل الموقع الدقيق بعد التسجيل",
  },
  duration: { he: "כ־4 שעות", ar: "حوالي 4 ساعات" },
  price: 250,
  seats: 20,
  includes: [
    { he: "סלטים טריים", ar: "سلطات طازجة" },
    { he: "בשר על האש במקום", ar: "لحم مشوي في المكان" },
    { he: "שתייה וקינוח", ar: "مشروبات وحلوى" },
    { he: "ציוד ישיבה", ar: "معدات جلوس" },
  ],
  terms: {
    he: "מקדמה של 30% שומרת מקום ל־48 שעות. ביטול עד 7 ימים לפני — החזר מלא של המקדמה.",
    ar: "عربون 30% يحجز المكان لمدة 48 ساعة. الإلغاء حتى 7 أيام قبل — استرجاع كامل للعربون.",
  },
};

export type Faq = { keywords: string[]; q: L; a: L };
export const faqs: Faq[] = [
  {
    keywords: ["מחיר", "עולה", "سعر", "كم", "تكلفة"],
    q: { he: "כמה זה עולה?", ar: "كم التكلفة؟" },
    a: {
      he: "חבילה משפחתית מתחילה ב־₪150 לאדם. לאירועים גדולים נשלח הצעת מחיר מותאמת.",
      ar: "الباقة العائلية تبدأ من 150 ₪ للشخص. للمناسبات الكبيرة نرسل عرض سعر مخصص.",
    },
  },
  {
    keywords: ["אזור", "איפה", "מגיעים", "منطقة", "أين", "مكان"],
    q: { he: "לאן אתם מגיעים?", ar: "إلى أين تصلون؟" },
    a: { he: "אנחנו פועלים בעיקר בצפון ובמרכז.", ar: "نعمل أساساً في الشمال والمركز." },
  },
  {
    keywords: ["תשלום", "מקדמה", "ביט", "دفع", "عربون", "بيت"],
    q: { he: "איך משלמים?", ar: "كيف أدفع؟" },
    a: {
      he: "לאחר אישור ההזמנה נשלח קישור תשלום מאובטח. מקדמה של 30% שומרת את התאריך.",
      ar: "بعد تأكيد الحجز نرسل رابط دفع آمن. عربون 30% يحجز الموعد.",
    },
  },
  {
    keywords: ["ביטול", "החזר", "إلغاء", "استرجاع"],
    q: { he: "מה מדיניות הביטול?", ar: "ما سياسة الإلغاء؟" },
    a: {
      he: "ביטול עד 7 ימים לפני האירוע — החזר מלא של המקדמה.",
      ar: "الإلغاء حتى 7 أيام قبل المناسبة — استرجاع كامل للعربون.",
    },
  },
  {
    keywords: ["תפריט", "מנות", "צמחוני", "قائمة", "أطباق", "نباتي"],
    q: { he: "מה בתפריט?", ar: "ماذا في القائمة؟" },
    a: {
      he: "סלטים ביתיים, בשרים על האש, תוספות וקינוחים. יש גם אפשרויות צמחוניות.",
      ar: "سلطات بيتية، لحوم مشوية، أطباق جانبية وحلويات. توجد أيضاً خيارات نباتية.",
    },
  },
];
