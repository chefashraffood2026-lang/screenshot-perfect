import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { packages, img } from "@/lib/content";
import { PageHead } from "@/components/site-shell";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "קייטרינג ואירועים | השף אשרף" },
      { name: "description", content: "חבילות קייטרינג למשפחות, אירועים וארגונים. בקשו הצעת מחיר." },
      { property: "og:title", content: "קייטרינג ואירועים | השף אשרף" },
      { property: "og:description", content: "חבילות קייטרינג ובקשת הצעת מחיר." },
    ],
  }),
  component: Catering,
});

function Catering() {
  const { t, pick } = useLang();
  return (
    <>
      <PageHead title={t("nav_catering")} image={img.longTable} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        {packages.map((p) => (
          <article key={p.id} className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-warm">
            <img src={p.image} alt={pick(p.name)} className="aspect-video w-full object-cover" loading="lazy" />
            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-2xl font-bold">{pick(p.name)}</h2>
              <p className="text-muted-foreground">{pick(p.desc)}</p>
              <p className="my-3 text-lg font-semibold text-primary">{pick(p.price)}</p>
              <p className="text-sm font-semibold">{t("included")}</p>
              <ul className="mb-5 mt-1 space-y-1 text-sm">
                {p.includes.map((i) => (
                  <li key={i.he} className="flex items-center gap-2"><Check className="size-4 text-olive" />{pick(i)}</li>
                ))}
              </ul>
              <Link to="/book" search={{ service: "catering", item: p.id }} className="btn-ember mt-auto">{t("request_quote")}</Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
