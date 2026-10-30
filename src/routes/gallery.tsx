import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, ChevronLeft, X, ZoomIn, Calendar } from "lucide-react";
import { useLang } from "@/lib/i18n";
import {
  galleryItems,
  galleryCategories,
  img,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/content";
import { PageHead } from "@/components/site-shell";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "גלריית תמונות | השף אשרף" },
      {
        name: "description",
        content: "כל התמונות מהאירועים, המנות המובחרות, הבשרים והסלטים של השף אשרף.",
      },
      { property: "og:title", content: "גלריית תמונות | השף אשרף" },
      {
        property: "og:description",
        content: "תמונות מנות השף, גריל, סלטים ואירועים של השף אשרף.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const { t, pick } = useLang();
  const [selectedCat, setSelectedCat] = useState<GalleryCategory>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => selectedCat === "all" || item.category === selectedCat,
  );

  const activeIndex = activeItem ? galleryItems.findIndex((it) => it.id === activeItem.id) : -1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex > 0) {
      setActiveItem(galleryItems[activeIndex - 1] ?? null);
    } else {
      setActiveItem(galleryItems[galleryItems.length - 1] ?? null);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex < galleryItems.length - 1) {
      setActiveItem(galleryItems[activeIndex + 1] ?? null);
    } else {
      setActiveItem(galleryItems[0] ?? null);
    }
  };

  return (
    <>
      <PageHead title={t("nav_gallery")} image={img.beets} />

      <section className="mx-auto max-w-6xl px-4 py-8">
        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all ${
                selectedCat === c.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
            >
              {pick(c.name)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={item.src}
                  alt={pick(item.title)}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-4 text-coal-foreground">
                  <span className="text-sm font-medium flex items-center gap-1.5">
                    <ZoomIn className="size-4 text-ember" />
                    {pick({ he: "הגדלת תמונה", ar: "تكبير الصورة" })}
                  </span>
                  <span className="text-xs rounded-full bg-coal/60 px-2 py-1 backdrop-blur">
                    #{index + 1}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {pick(item.title)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{pick(item.desc)}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-14 text-center rounded-2xl bg-secondary/60 p-8 border border-border">
          <h2 className="font-display text-2xl font-bold">
            {pick({
              he: "אהבתם את המנות? הזמינו לאירוע שלכם",
              ar: "أعجبتكم الأطباق؟ اطلبوا لمناسبتكم",
            })}
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            {pick({
              he: "השף אשרף מעמיד לרשותכם מגוון תפריטי קייטרינג, פיקניקים וערבי בשר בלתי נשכחים.",
              ar: "الشيف أشرف يقدم تشكيلة قوائم طعام مميزة للمناسبات ونزهات في الطبيعة.",
            })}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/book" className="btn-ember">
              <Calendar className="size-4" />
              {t("cta_catering")}
            </Link>
            <Link to="/menu" className="btn-ghost-light !text-foreground !border-border">
              {t("see_all")}
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col max-h-[92vh] max-w-4xl w-full overflow-hidden rounded-2xl bg-card border border-border shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5 bg-background/80">
              <div>
                <h3 className="font-display text-xl font-bold">{pick(activeItem.title)}</h3>
                <span className="text-xs text-muted-foreground">
                  {activeIndex + 1} / {galleryItems.length}
                </span>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close"
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Image & Navigation */}
            <div className="relative flex items-center justify-center bg-black/95 max-h-[65vh] overflow-hidden">
              <img
                src={activeItem.src}
                alt={pick(activeItem.title)}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute right-4 rounded-full bg-coal/70 p-3 text-white backdrop-blur hover:bg-coal transition cursor-pointer"
              >
                <ChevronRight className="size-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute left-4 rounded-full bg-coal/70 p-3 text-white backdrop-blur hover:bg-coal transition cursor-pointer"
              >
                <ChevronLeft className="size-6" />
              </button>
            </div>

            {/* Modal Caption and Booking Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-card">
              <p className="text-sm text-foreground/80 max-w-lg">{pick(activeItem.desc)}</p>
              <div className="flex items-center gap-3">
                <Link
                  to="/book"
                  onClick={() => setActiveItem(null)}
                  className="btn-ember !text-sm !py-2"
                >
                  {t("cta_catering")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
