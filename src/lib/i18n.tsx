import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "he" | "ar";
export type L = { he: string; ar: string };

const dict = {
  brand: { he: "השף אשרף", ar: "الشيف أشرف" },
  nav_home: { he: "בית", ar: "الرئيسية" },
  nav_menu: { he: "תפריט", ar: "القائمة" },
  nav_catering: { he: "קייטרינג", ar: "تموين" },
  nav_picnic: { he: "פיקניק בשטח", ar: "نزهة في الطبيعة" },
  nav_club: { he: "מועדון הקרניבורים", ar: "نادي محبي اللحوم" },
  nav_gallery: { he: "גלריה", ar: "معرض الصور" },
  book: { he: "הזמנה", ar: "احجز" },
  hero_title: { he: "אש, בשר ושולחן מלא", ar: "نار، لحم ومائدة عامرة" },
  hero_sub: {
    he: "קייטרינג ביתי, פיקניקים בשטח וערבי מועדון לחובבי בשר — מהמטבח של השף אשרף.",
    ar: "تموين بيتي، نزهات في الطبيعة وأمسيات نادي لمحبي اللحوم — من مطبخ الشيف أشرف.",
  },
  cta_catering: { he: "הזמנת קייטרינג", ar: "اطلب تموين" },
  cta_picnic: { he: "פיקניק בשטח", ar: "نزهة في الطبيعة" },
  cta_club: { he: "אירועי המועדון", ar: "فعاليات النادي" },
  featured: { he: "מנות נבחרות", ar: "أطباق مختارة" },
  packages: { he: "חבילות מומלצות", ar: "باقات مقترحة" },
  upcoming: { he: "אירועים קרובים", ar: "فعاليات قريبة" },
  see_all: { he: "לכל התפריט", ar: "القائمة كاملة" },
  search: { he: "חיפוש מנה…", ar: "ابحث عن طبق…" },
  all: { he: "הכל", ar: "الكل" },
  needs_approval: { he: "דורש אישור מראש", ar: "يتطلب موافقة مسبقة" },
  allergens: { he: "אלרגנים", ar: "مسببات الحساسية" },
  per_person: { he: "לאדם", ar: "للشخص" },
  from: { he: "החל מ־", ar: "ابتداءً من " },
  included: { he: "מה כלול", ar: "ماذا يشمل" },
  seats_left: { he: "מקומות פנויים", ar: "أماكن متبقية" },
  full: { he: "מלא — הצטרפו לרשימת המתנה", ar: "ممتلئ — انضموا لقائمة الانتظار" },
  register: { he: "הרשמה", ar: "تسجيل" },
  request_quote: { he: "בקשת הצעת מחיר", ar: "طلب عرض سعر" },
  terms: { he: "תנאי הרשמה, ביטול ותשלום", ar: "شروط التسجيل والإلغاء والدفع" },
  chat_title: { he: "שאלו אותנו", ar: "اسألونا" },
  chat_placeholder: { he: "כתבו שאלה…", ar: "اكتبوا سؤالاً…" },
  chat_hello: {
    he: "שלום! אפשר לשאול על תפריט, מחירים, אזורי פעילות, תשלום וביטולים.",
    ar: "مرحباً! يمكنكم السؤال عن القائمة، الأسعار، مناطق العمل، الدفع والإلغاء.",
  },
  chat_unknown: {
    he: "אין לי מידע מאושר על זה. אפשר להשאיר פרטים בטופס ההזמנה ונחזור אליכם.",
    ar: "لا تتوفر لدي معلومات معتمدة حول ذلك. يمكنكم ترك تفاصيلكم في نموذج الحجز وسنعود إليكم.",
  },
  contact: { he: "יצירת קשר", ar: "تواصل معنا" },
  rights: { he: "כל הזכויות שמורות", ar: "جميع الحقوق محفوظة" },
} satisfies Record<string, L>;

type Key = keyof typeof dict;

const Ctx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: Key) => string;
  pick: (v: L) => string;
}>({
  lang: "he",
  setLang: () => {},
  t: (k) => dict[k].he,
  pick: (v) => v.he,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("he");
  useEffect(() => {
    const saved = sessionStorage.getItem("lang");
    if (saved === "ar" || saved === "he") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = "rtl";
  }, [lang]);
  const setLang = (l: Lang) => {
    sessionStorage.setItem("lang", l);
    setLangState(l);
  };
  return (
    <Ctx.Provider value={{ lang, setLang, t: (k) => dict[k][lang], pick: (v) => v[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
