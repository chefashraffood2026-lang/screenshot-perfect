import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { img, menu, packages, events } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "השף אשרף | קייטרינג, פיקניקים ומועדון בשר" },
      { name: "description", content: "קייטרינג ביתי, פיקניקים בשטח וערבי מועדון לחובבי בשר עם השף אשרף. הזמנה בעברית ובערבית." },
      { property: "og:title", content: "השף אשרף | קייטרינג, פיקניקים ומועדון בשר" },
      { property: "og:description", content: "קייטרינג ביתי, פיקניקים בשטח וערבי מועדון לחובבי בשר." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, pick } = useLang();
  return (
    <>
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <img src={img.mezzeTable} alt={t("hero_title")} className="absolute inset-0 size-full object-cover" />
        <div className="bg-hero-fade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 text-coal-foreground">
          <p className="mb-3 text-sm tracking-widest text-ember">{t("brand")}</p>
          <h1 className="max-w-2xl text-5xl font-bold leading-tight sm:text-7xl">{t("hero_title")}</h1>
          <p className="mt-4 max-w-lg text-lg opacity-85">{t("hero_sub")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/catering" className="btn-ember">{t("cta_catering")}</Link>
            <Link to="/picnic" className="btn-ghost-light">{t("cta_picnic")}</Link>
            <Link to="/club" className="btn-ghost-light">{t("cta_club")}</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-3xl font-bold">{t("featured")}</h2>
          <Link to="/menu" className="text-sm font-semibold text-primary">{t("see_all")} ←</Link>
        </div>
        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2">
          {menu.slice(0, 5).map((m) => (
            <div key={m.id} className="w-64 shrink-0 snap-start overflow-hidden rounded-2xl bg-card shadow-warm">
              <img src={m.image} alt={pick(m.name)} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{pick(m.name)}</h3>
                <p className="text-primary">₪{m.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-3xl font-bold">{t("packages")}</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((p) => (
              <Link key={p.id} to="/book" search={{ service: "catering", item: p.id }} className="group overflow-hidden rounded-2xl bg-card">
                <img src={p.image} alt={pick(p.name)} className="aspect-video w-full object-cover transition group-hover:scale-105" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-xl font-bold">{pick(p.name)}</h3>
                  <p className="text-sm text-muted-foreground">{pick(p.desc)}</p>
                  <p className="mt-2 font-semibold text-primary">{pick(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-6 text-3xl font-bold">{t("upcoming")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {events.map((e) => (
            <Link key={e.id} to="/club" className="flex gap-4 rounded-2xl border border-border bg-card p-3">
              <img src={e.image} alt="" className="size-24 rounded-xl object-cover" />
              <div>
                <p className="text-sm text-primary">{e.date} · {e.time}</p>
                <h3 className="text-lg font-bold">{pick(e.name)}</h3>
                <p className="text-sm text-muted-foreground">{pick(e.location)} · {e.left > 0 ? `${e.left} ${t("seats_left")}` : t("full")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
