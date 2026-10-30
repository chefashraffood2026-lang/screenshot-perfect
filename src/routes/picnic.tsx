import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, MapPin, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { picnic, img } from "@/lib/content";
import { PageHead } from "@/components/site-shell";

export const Route = createFileRoute("/picnic")({
  head: () => ({
    meta: [
      { title: "פיקניק שף בטבע | השף אשרף" },
      { name: "description", content: "פיקניק בשטח עם בשר על האש, סלטים טריים וקינוח. בחרו תאריך והירשמו." },
      { property: "og:title", content: "פיקניק שף בטבע | השף אשרף" },
      { property: "og:description", content: "פיקניק בשטח עם השף אשרף." },
    ],
  }),
  component: Picnic,
});

function Picnic() {
  const { t, pick } = useLang();
  return (
    <>
      <PageHead title={pick(picnic.name)} image={img.cabbage} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="flex items-center gap-2"><MapPin className="size-5 text-primary" />{pick(picnic.area)}</p>
          <p className="flex items-center gap-2"><Clock className="size-5 text-primary" />{pick(picnic.duration)}</p>
          <p className="flex items-center gap-2"><Users className="size-5 text-primary" />{picnic.seats} {t("seats_left")}</p>
          <p className="text-2xl font-bold text-primary">₪{picnic.price} <span className="text-base font-normal text-muted-foreground">{t("per_person")}</span></p>
          <h2 className="pt-2 text-2xl font-bold">{t("included")}</h2>
          <ul className="space-y-1">
            {picnic.includes.map((i) => <li key={i.he} className="flex items-center gap-2"><Check className="size-4 text-olive" />{pick(i)}</li>)}
          </ul>
        </div>
        <div className="space-y-4">
          <img src={img.saladBowl} alt="" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="mb-1 text-lg font-bold">{t("terms")}</h2>
            <p className="text-sm text-muted-foreground">{pick(picnic.terms)}</p>
          </div>
          <Link to="/book" search={{ service: "picnic", item: "picnic" }} className="btn-ember w-full">{t("register")}</Link>
        </div>
      </section>
    </>
  );
}
