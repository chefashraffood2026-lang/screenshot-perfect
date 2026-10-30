// Sample content — to be replaced by the business's approved Google Sheets data.
import f1 from "@/assets/food1.jpg.asset.json";
import f2 from "@/assets/food2.jpg.asset.json";
import f3 from "@/assets/food3.jpg.asset.json";
import f4 from "@/assets/food4.jpg.asset.json";
import f5 from "@/assets/food5.jpg.asset.json";
import f6 from "@/assets/food6.jpg.asset.json";
import f7 from "@/assets/food7.jpg.asset.json";
import f8 from "@/assets/food8.jpg.asset.json";
import f9 from "@/assets/food9.jpg.asset.json";
import f10 from "@/assets/food10.jpg.asset.json";
import f11 from "@/assets/food11.jpg.asset.json";
import f12 from "@/assets/food12.jpg.asset.json";
import f13 from "@/assets/food13.jpg.asset.json";
import f14 from "@/assets/food14.jpg.asset.json";
import type { L } from "./i18n";

export const photos = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14].map(
  (a) => a.url,
);
export const img = {
  mezzeTable: f2.url,
  dessert: f3.url,
  cabbage: f4.url,
  greens: f6.url,
  glazed: f7.url,
  grillPlate: f12.url,
  saladBowl: f9.url,
  beets: f10.url,
  longTable: f14.url,
  plates: f13.url,
};

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
  price: 240,
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
