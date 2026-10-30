import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { photos, img } from "@/lib/content";
import { PageHead } from "@/components/site-shell";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "גלריה | השף אשרף" },
      { name: "description", content: "תמונות משולחנות, אירועים ומנות של השף אשרף." },
      { property: "og:title", content: "גלריה | השף אשרף" },
      { property: "og:description", content: "תמונות מהאירועים והמנות." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const { t } = useLang();
  return (
    <>
      <PageHead title={t("nav_gallery")} image={img.beets} />
      <section className="mx-auto max-w-6xl columns-2 gap-3 px-4 py-10 md:columns-3">
        {photos.map((p, i) => (
          <img key={p} src={p} alt={`${t("brand")} ${i + 1}`} loading="lazy" className="mb-3 w-full break-inside-avoid rounded-xl" />
        ))}
      </section>
    </>
  );
}
