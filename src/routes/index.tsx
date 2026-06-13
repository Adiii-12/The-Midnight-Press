import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import heroCafe from "@/assets/hero-cafe.jpg";
import imgC1 from "@/assets/menu/c1.jpg";
import imgC2 from "@/assets/menu/c2.jpg";
import imgC3 from "@/assets/menu/c3.jpg";
import imgC4 from "@/assets/menu/c4.jpg";
import imgB1 from "@/assets/menu/b1.jpg";
import imgB2 from "@/assets/menu/b2.jpg";
import imgB3 from "@/assets/menu/b3.jpg";
import imgM1 from "@/assets/menu/m1.jpg";
import imgM2 from "@/assets/menu/m2.jpg";
import imgM3 from "@/assets/menu/m3.jpg";

export const Route = createFileRoute("/")({
  component: MidnightPress,
});

type Category = "All-Day" | "Specialty Coffee" | "Artisanal Bakery" | "Signature Mocktails";

interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Exclude<Category, "All-Day">;
  image: string;
}

const MENU: MenuItem[] = [
  { id: "c1", title: "Midnight Espresso", description: "Single-origin Ethiopian, double-pulled, cocoa nib finish.", price: 4.5, category: "Specialty Coffee", image: imgC1 },
  { id: "c2", title: "Smoked Cortado", description: "Cherry-smoked milk, house blend, raw demerara.", price: 5.5, category: "Specialty Coffee", image: imgC2 },
  { id: "c3", title: "Bronze Latte", description: "Burnt honey, toasted oat milk, sea salt crown.", price: 6.0, category: "Specialty Coffee", image: imgC3 },
  { id: "c4", title: "Cold Press No. 7", description: "18-hour slow drip, citrus brightness, low acid.", price: 5.0, category: "Specialty Coffee", image: imgC4 },
  { id: "b1", title: "Burnt Basque Cheesecake", description: "Caramelised crown, cloud-soft centre, fleur de sel.", price: 9.0, category: "Artisanal Bakery", image: imgB1 },
  { id: "b2", title: "Brown Butter Croissant", description: "72-hour laminated dough, cultured French butter.", price: 6.5, category: "Artisanal Bakery", image: imgB2 },
  { id: "b3", title: "Dark Chocolate Babka", description: "Valrhona 70%, toasted walnuts, espresso glaze.", price: 7.5, category: "Artisanal Bakery", image: imgB3 },
  { id: "m1", title: "Smoked Old Fashioned", description: "Non-alc bourbon, charred orange, bitters mist.", price: 12.0, category: "Signature Mocktails", image: imgM1 },
  { id: "m2", title: "Velvet Negroni", description: "Bitter aperitivo, blood orange, rosemary smoke.", price: 11.5, category: "Signature Mocktails", image: imgM2 },
  { id: "m3", title: "Copper Sour", description: "Saffron syrup, lemon, aquafaba, copper dust.", price: 13.0, category: "Signature Mocktails", image: imgM3 },
];

const CATEGORIES: Category[] = ["All-Day", "Specialty Coffee", "Artisanal Bakery", "Signature Mocktails"];

function MidnightPress() {
  const [activeCat, setActiveCat] = useState<Category>("All-Day");
  const [reserveOpen, setReserveOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const filtered = useMemo(
    () => (activeCat === "All-Day" ? MENU : MENU.filter((m) => m.category === activeCat)),
    [activeCat]
  );

  const onReserve = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    console.log("[Reservation]", payload);
    setReserveOpen(false);
    setSuccessOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/60 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-copper animate-glow-pulse" />
            <span className="hairline text-foreground">The Midnight Press</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#menu" className="hover:text-copper transition-colors">Menu</a>
            <a href="#about" className="hover:text-copper transition-colors">The Room</a>
            <button onClick={() => setReserveOpen(true)} className="hover:text-copper transition-colors">Reserve</button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroCafe}
          alt="The Midnight Press interior at night"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0a0a_85%)]" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 pb-20 sm:pb-28 pt-32">
          <div className="max-w-3xl">
            <p className="hairline text-copper animate-fade-up">Est. 2019 · Open until 2 AM</p>
            <h1 className="mt-6 font-display text-[14vw] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-balance animate-fade-up" style={{ animationDelay: "0.1s" }}>
              The Midnight<br />
              <span className="italic text-copper">Press.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              An after-hours coffee bar tucked beneath the foundry district. Specialty
              espresso, slow-laminated pastry, and zero-proof cocktails — served on
              polished brass until last call.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#menu"
                className="group inline-flex items-center justify-center px-8 py-4 bg-copper text-copper-foreground font-medium tracking-wide hover:bg-copper-glow transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(165,123,90,0.6)]"
              >
                View Menu
                <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <button
                onClick={() => setReserveOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border border-copper/60 text-copper hover:bg-copper/10 transition-all duration-300"
              >
                Table Reservations
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-5 sm:right-8 hairline text-muted-foreground z-10 hidden sm:block">
          ↓ Scroll
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section id="about" className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid sm:grid-cols-3 gap-10 sm:gap-12">
          {[
            { k: "Roasted", v: "In-house daily, single-origin only." },
            { k: "Hours", v: "Tuesday — Sunday, 6 PM until 2 AM." },
            { k: "Address", v: "14 Foundry Lane, beneath the press hall." },
          ].map((b) => (
            <div key={b.k}>
              <p className="hairline text-copper">{b.k}</p>
              <p className="mt-3 font-display text-2xl leading-snug">{b.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="hairline text-copper">The Card</p>
            <h2 className="mt-3 font-display text-5xl sm:text-6xl">Tonight's Menu</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A short list, changed often. Sourced within fifty miles wherever the season allows.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 sm:mx-0 px-5 sm:px-0 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const active = cat === activeCat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`shrink-0 px-5 py-2.5 text-sm tracking-wide border transition-all duration-300 ${
                  active
                    ? "bg-copper text-copper-foreground border-copper"
                    : "border-border text-muted-foreground hover:text-copper hover:border-copper/60"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div key={activeCat} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((item, i) => (
            <article
              key={item.id}
              className="group relative bg-card border border-border hover:border-copper/60 transition-all duration-500 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={640}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 hairline text-foreground/90 bg-background/50 backdrop-blur-sm px-2 py-1">
                  {item.category.split(" ")[0]}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl leading-tight">{item.title}</h3>
                  <span className="font-display text-xl text-copper shrink-0">${item.price.toFixed(2)}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl">The Midnight Press</p>
            <p className="mt-1 text-sm text-muted-foreground">14 Foundry Lane · Open until 2 AM</p>
          </div>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Crafted by <span className="text-copper">IdeaForge Labs</span>
          </p>
        </div>
      </footer>

      {/* RESERVATION MODAL */}
      {reserveOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center animate-fade-in-soft">
          <div
            className="absolute inset-0 bg-background/85 backdrop-blur-md"
            onClick={() => setReserveOpen(false)}
          />
          <div className="relative w-full sm:max-w-lg bg-card border border-border sm:border-copper/30 max-h-[92vh] overflow-y-auto animate-scale-pop">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="hairline text-copper">Reserve a Table</p>
                  <h3 className="mt-2 font-display text-3xl">An evening with us</h3>
                </div>
                <button
                  onClick={() => setReserveOpen(false)}
                  className="text-muted-foreground hover:text-copper text-2xl leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <form onSubmit={onReserve} className="space-y-4">
                <Field label="Full Name" name="name" placeholder="Your name" required />
                <Field label="Phone Number" name="phone" type="tel" placeholder="+1 555 000 0000" required />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Date" name="date" type="date" required />
                  <div>
                    <label className="hairline text-muted-foreground mb-2 block">Time</label>
                    <select name="time" required className="w-full bg-background border border-border focus:border-copper focus:outline-none px-4 py-3 text-sm">
                      {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="hairline text-muted-foreground mb-2 block">Guests</label>
                  <select name="guests" required defaultValue="2" className="w-full bg-background border border-border focus:border-copper focus:outline-none px-4 py-3 text-sm">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-4 bg-copper text-copper-foreground font-medium tracking-wide hover:bg-copper-glow transition-colors"
                >
                  Request Reservation
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  We'll confirm by phone within the hour.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL */}
      {successOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 animate-fade-in-soft">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setSuccessOpen(false)} />
          <div className="relative w-full max-w-md bg-card border border-copper/40 p-8 sm:p-10 text-center animate-scale-pop">
            <div className="mx-auto h-14 w-14 rounded-full border border-copper flex items-center justify-center text-copper text-2xl animate-glow-pulse">
              ✓
            </div>
            <p className="hairline text-copper mt-6">Confirmed</p>
            <h3 className="mt-3 font-display text-3xl leading-tight">Reservation Request Received</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We look forward to hosting you at The Midnight Press.
            </p>
            <button
              onClick={() => setSuccessOpen(false)}
              className="mt-8 w-full py-3 border border-copper/60 text-copper hover:bg-copper hover:text-copper-foreground transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="hairline text-muted-foreground mb-2 block">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-background border border-border focus:border-copper focus:outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/50"
      />
    </div>
  );
}
