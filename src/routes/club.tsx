import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { events, img } from "@/lib/content";
import { PageHead } from "@/components/site-shell";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: "מועדון הקרניבורים | השף אשרף" },
      { name: "description", content: "ערבי בשר ואש פתוחה לחברי המועדון. אירועים קרובים והרשמה." },
      { property: "og:title", content: "מועדון הקרניבורים | השף אשרף" },
      { property: "og:description", content: "אירועים קרובים של מועדון הבשר." },
    ],
  }),
  component: Club,
});

function Club() {
  const { t, pick } = useLang();
  return (
    <>
      <PageHead title={t("nav_club")} image={img.glazed} />
      <section className="mx-auto max-w-4xl space-y-6 px-4 py-10">
        {events.map((e) => (
          <article
            key={e.id}
            className="grid overflow-hidden rounded-2xl bg-card shadow-warm sm:grid-cols-[14rem_1fr]"
          >
            <img src={e.image} alt={pick(e.name)} className="h-48 w-full object-cover sm:h-full" />
            <div className="space-y-2 p-5">
              <p className="text-sm text-primary">
                {e.date} · {e.time} · {pick(e.location)}
              </p>
              <h2 className="text-2xl font-bold">{pick(e.name)}</h2>
              <p className="text-muted-foreground">{pick(e.program)}</p>
              <p className="font-semibold">
                ₪{e.price} {t("per_person")} · {e.left}/{e.capacity} {t("seats_left")}
              </p>
              <Link
                to="/book"
                search={{ service: e.left > 0 ? "club" : "waitlist", item: e.id }}
                className="btn-ember"
              >
                {e.left > 0 ? t("register") : t("full")}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
