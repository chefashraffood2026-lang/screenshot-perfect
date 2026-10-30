import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useLang, type L } from "@/lib/i18n";
import { packages, events, picnic } from "@/lib/content";

const services = ["catering", "picnic", "club", "waitlist"] as const;

export const Route = createFileRoute("/book")({
  validateSearch: z.object({ service: z.enum(services).optional(), item: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "בקשת הזמנה | השף אשרף" },
      { name: "description", content: "שלחו בקשת הזמנה לקייטרינג, פיקניק או אירוע מועדון." },
      { property: "og:title", content: "בקשת הזמנה | השף אשרף" },
      { property: "og:description", content: "שלחו בקשת הזמנה לשף אשרף." },
    ],
  }),
  component: Book,
});

const tx = {
  title: { he: "בקשת הזמנה", ar: "طلب حجز" },
  service: { he: "שירות", ar: "الخدمة" },
  catering: { he: "קייטרינג", ar: "تموين" },
  picnic: { he: "פיקניק", ar: "نزهة" },
  club: { he: "אירוע מועדון", ar: "فعالية النادي" },
  waitlist: { he: "רשימת המתנה", ar: "قائمة الانتظار" },
  date: { he: "תאריך", ar: "التاريخ" },
  guests: { he: "מספר אורחים", ar: "عدد الضيوف" },
  location: { he: "מיקום", ar: "الموقع" },
  name: { he: "שם מלא", ar: "الاسم الكامل" },
  phone: { he: "טלפון", ar: "الهاتف" },
  email: { he: "אימייל (לא חובה)", ar: "البريد الإلكتروني (اختياري)" },
  notes: { he: "סוג אירוע, בקשות מיוחדות והערות", ar: "نوع المناسبة، طلبات خاصة وملاحظات" },
  review: { he: "לסיכום", ar: "إلى الملخص" },
  summary: { he: "סיכום ההזמנה", ar: "ملخص الحجز" },
  edit: { he: "עריכה", ar: "تعديل" },
  send: { he: "שליחת בקשה", ar: "إرسال الطلب" },
  privacy: { he: "הפרטים ישמשו לטיפול בהזמנה בלבד.", ar: "تُستخدم التفاصيل لمعالجة الحجز فقط." },
  done: { he: "הבקשה התקבלה!", ar: "تم استلام الطلب!" },
  done_sub: {
    he: "נחזור אליכם לאישור. לאחר האישור יישלח קישור תשלום מאובטח למקדמה.",
    ar: "سنتواصل معكم للتأكيد. بعد التأكيد يُرسل رابط دفع آمن للعربون.",
  },
  error: { he: "משהו השתבש, נסו שוב.", ar: "حدث خطأ، حاولوا مرة أخرى." },
  invalid: { he: "נא למלא שם וטלפון תקינים.", ar: "يرجى إدخال اسم وهاتف صحيحين." },
} satisfies Record<string, L>;

function itemName(service: string, item?: string): L | undefined {
  if (service === "picnic") return picnic.name;
  return packages.find((p) => p.id === item)?.name ?? events.find((e) => e.id === item)?.name;
}

function Book() {
  const search = Route.useSearch();
  const { pick, lang } = useLang();
  const [step, setStep] = useState<"form" | "review" | "done">("form");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [f, setF] = useState({
    service: search.service ?? "catering",
    item: search.item ?? "",
    event_date: "",
    guests: "",
    location: "",
    full_name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) =>
    setF({ ...f, [k]: e.target.value });
  const item = itemName(f.service, f.item);

  const review = (e: React.FormEvent) => {
    e.preventDefault();
    if (f.full_name.trim().length < 2 || !/^[\d+\-\s]{7,20}$/.test(f.phone.trim()))
      return setErr(pick(tx.invalid));
    setErr("");
    setStep("review");
  };

  const submit = async () => {
    setBusy(true);
    const { error } = await supabase.from("booking_requests").insert({
      service: f.service,
      item: f.item || null,
      event_date: f.event_date || null,
      guests: f.guests ? Number(f.guests) : null,
      location: f.location.trim() || null,
      full_name: f.full_name.trim(),
      phone: f.phone.trim(),
      email: f.email.trim() || null,
      notes: f.notes.trim() || null,
      language: lang,
    });
    setBusy(false);
    if (error) return setErr(pick(tx.error));
    setStep("done");
  };

  if (step === "done")
    return (
      <section className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-4xl font-bold">{pick(tx.done)}</h1>
        <p className="mt-3 text-muted-foreground">{pick(tx.done_sub)}</p>
        <Link to="/" className="btn-ember mt-8">
          ←
        </Link>
      </section>
    );

  const rows: [L, string][] = [
    [
      tx.service,
      pick(tx[f.service as (typeof services)[number]]) + (item ? ` — ${pick(item)}` : ""),
    ],
    [tx.date, f.event_date || "—"],
    [tx.guests, f.guests || "—"],
    [tx.location, f.location || "—"],
    [tx.name, f.full_name],
    [tx.phone, f.phone],
    [tx.notes, f.notes || "—"],
  ];

  return (
    <section className="mx-auto max-w-xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">{pick(step === "form" ? tx.title : tx.summary)}</h1>
      {step === "form" ? (
        <form onSubmit={review} className="space-y-4">
          <label className="block text-sm font-medium">
            {pick(tx.service)}
            <select
              value={f.service}
              onChange={(e) =>
                setF({ ...f, service: e.target.value as typeof f.service, item: "" })
              }
              className="field mt-1"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {pick(tx[s])}
                </option>
              ))}
            </select>
          </label>
          {item && <p className="rounded-xl bg-muted px-4 py-2 text-sm">{pick(item)}</p>}
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-sm font-medium">
              {pick(tx.date)}
              <input
                type="date"
                value={f.event_date}
                onChange={set("event_date")}
                className="field mt-1"
              />
            </label>
            <label className="block text-sm font-medium">
              {pick(tx.guests)}
              <input
                type="number"
                min={1}
                max={2000}
                value={f.guests}
                onChange={set("guests")}
                className="field mt-1"
              />
            </label>
          </div>
          <label className="block text-sm font-medium">
            {pick(tx.location)}
            <input
              maxLength={200}
              value={f.location}
              onChange={set("location")}
              className="field mt-1"
            />
          </label>
          <label className="block text-sm font-medium">
            {pick(tx.name)} *
            <input
              required
              maxLength={100}
              value={f.full_name}
              onChange={set("full_name")}
              className="field mt-1"
            />
          </label>
          <label className="block text-sm font-medium">
            {pick(tx.phone)} *
            <input
              required
              type="tel"
              dir="ltr"
              maxLength={20}
              value={f.phone}
              onChange={set("phone")}
              className="field mt-1 text-right"
            />
          </label>
          <label className="block text-sm font-medium">
            {pick(tx.email)}
            <input
              type="email"
              dir="ltr"
              maxLength={255}
              value={f.email}
              onChange={set("email")}
              className="field mt-1 text-right"
            />
          </label>
          <label className="block text-sm font-medium">
            {pick(tx.notes)}
            <textarea
              rows={4}
              maxLength={1000}
              value={f.notes}
              onChange={set("notes")}
              className="field mt-1"
            />
          </label>
          {err && <p className="text-sm text-destructive">{err}</p>}
          <p className="text-xs text-muted-foreground">{pick(tx.privacy)}</p>
          <button className="btn-ember w-full">{pick(tx.review)}</button>
        </form>
      ) : (
        <div className="space-y-4">
          <dl className="divide-y divide-border rounded-2xl border border-border bg-card">
            {rows.map(([k, v]) => (
              <div key={k.he} className="flex justify-between gap-4 px-4 py-3 text-sm">
                <dt className="text-muted-foreground">{pick(k)}</dt>
                <dd className="text-left font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          {err && <p className="text-sm text-destructive">{err}</p>}
          <div className="flex gap-3">
            <button
              onClick={() => setStep("form")}
              className="flex-1 rounded-full border border-border py-3"
            >
              {pick(tx.edit)}
            </button>
            <button
              onClick={submit}
              disabled={busy}
              className="btn-ember flex-1 disabled:opacity-60"
            >
              {pick(tx.send)}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
