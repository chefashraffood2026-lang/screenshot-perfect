import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { categories, menu, img, type Category } from "@/lib/content";
import { PageHead } from "@/components/site-shell";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "תפריט ומחירון | השף אשרף" },
      { name: "description", content: "מנות פתיחה, בשרים, תוספות, קינוחים וחבילות — עם מחירים וסימון אלרגנים." },
      { property: "og:title", content: "תפריט ומחירון | השף אשרף" },
      { property: "og:description", content: "כל המנות והמחירים של השף אשרף." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t, pick } = useLang();
  const [cat, setCat] = useState<Category | "all">("all");
  const [q, setQ] = useState("");
  const items = menu.filter(
    (m) => (cat === "all" || m.category === cat) && (pick(m.name) + pick(m.desc)).includes(q.trim()),
  );
  return (
    <>
      <PageHead title={t("nav_menu")} image={img.grillPlate} />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("search")} className="field mb-4" />
        <div className="mb-8 flex flex-wrap gap-2">
          {[{ id: "all" as const, name: { he: t("all"), ar: t("all") } }, ...categories].map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)} className={`rounded-full px-4 py-1.5 text-sm ${cat === c.id ? "bg-foreground text-background" : "bg-muted"}`}>
              {pick(c.name)}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m) => (
            <article key={m.id} className="overflow-hidden rounded-2xl bg-card shadow-warm">
              <img src={m.image} alt={pick(m.name)} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="space-y-1 p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-xl font-bold">{pick(m.name)}</h2>
                  <span className="font-semibold text-primary">₪{m.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{pick(m.desc)}</p>
                <p className="text-xs text-muted-foreground">{pick(m.size)}{m.allergens && ` · ${t("allergens")}: ${pick(m.allergens)}`}</p>
                {m.approval && <p className="text-xs font-semibold text-olive">{t("needs_approval")}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
