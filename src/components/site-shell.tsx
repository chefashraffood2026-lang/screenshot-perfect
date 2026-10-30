import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Send } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { faqs } from "@/lib/content";

const links = [
  { to: "/", k: "nav_home" },
  { to: "/menu", k: "nav_menu" },
  { to: "/catering", k: "nav_catering" },
  { to: "/picnic", k: "nav_picnic" },
  { to: "/club", k: "nav_club" },
  { to: "/gallery", k: "nav_gallery" },
] as const;

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-full border border-border p-0.5 text-sm" role="group" aria-label="שפה / اللغة">
      {(["he", "ar"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1 ${lang === l ? "bg-foreground text-background" : "text-muted-foreground"}`}
        >
          {l === "he" ? "עב" : "عر"}
        </button>
      ))}
    </div>
  );
}

function Chat() {
  const { t, pick } = useLang();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [msgs, setMsgs] = useState<{ me: boolean; text: string }[]>([]);
  const ask = (text: string) => {
    if (!text.trim()) return;
    const hit = faqs.find((f) => f.keywords.some((k) => text.includes(k)));
    setMsgs((m) => [...m, { me: true, text }, { me: false, text: hit ? pick(hit.a) : t("chat_unknown") }]);
    setQ("");
  };
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={t("chat_title")}
        className="btn-ember fixed bottom-5 left-5 z-50 !p-4"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
      {open && (
        <div className="fixed bottom-24 left-5 z-50 flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
          <div className="bg-coal px-4 py-3 font-display text-lg text-coal-foreground">{t("chat_title")}</div>
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            <p className="rounded-xl bg-muted p-3">{t("chat_hello")}</p>
            <div className="flex flex-wrap gap-1.5">
              {faqs.map((f) => (
                <button key={f.q.he} onClick={() => ask(pick(f.q))} className="rounded-full border border-border px-3 py-1 text-xs hover:bg-muted">
                  {pick(f.q)}
                </button>
              ))}
            </div>
            {msgs.map((m, i) => (
              <p key={i} className={`rounded-xl p-3 ${m.me ? "mr-8 bg-primary text-primary-foreground" : "ml-8 bg-muted"}`}>{m.text}</p>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); ask(q); }} className="flex gap-2 border-t border-border p-2">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("chat_placeholder")} className="field !py-2" />
            <button className="rounded-full bg-primary p-2.5 text-primary-foreground" aria-label="send"><Send className="size-4 -scale-x-100" /></button>
          </form>
        </div>
      )}
    </>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="font-display text-2xl font-bold">{t("brand")}</Link>
          <nav className="hidden gap-5 text-sm lg:flex">
            {links.map((l) => (
              <Link key={l.to} to={l.to} activeOptions={{ exact: true }} activeProps={{ className: "text-primary font-semibold" }}>{t(l.k)}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch />
            <Link to="/book" className="btn-ember hidden !py-2 sm:inline-flex">{t("book")}</Link>
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="menu">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 lg:hidden">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-muted">{t(l.k)}</Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="btn-ember mt-2">{t("book")}</Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="mt-20 bg-coal py-10 text-coal-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4">
          <p className="font-display text-2xl">{t("brand")}</p>
          <p className="opacity-70">{t("contact")}: 050-000-0000</p>
          <p className="text-xs opacity-50">© 2026 {t("brand")} · {t("rights")}</p>
        </div>
      </footer>
      <Chat />
    </div>
  );
}

export function PageHead({ title, sub, image }: { title: string; sub?: string; image: string }) {
  return (
    <section className="relative h-64 overflow-hidden sm:h-80">
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="bg-hero-fade absolute inset-0" />
      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-8 text-coal-foreground">
        <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
        {sub && <p className="mt-2 max-w-xl opacity-85">{sub}</p>}
      </div>
    </section>
  );
}
