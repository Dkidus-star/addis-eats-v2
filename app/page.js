// app/page.js
import Link from "next/link";
import Image from "next/image";
import { getDishes } from "@/lib/data";
import { TypewriterText } from "@/components/TypewriterText";
import { MovingMarquee } from "@/components/MovingMarquee";
import { AddToCartButton } from "@/components/AddToCartButton";

export default async function HomePage() {
  const result = await getDishes();
  const dishes = Array.isArray(result) ? result : result?.dishes || [];
  const spotlight = dishes.slice(0, 6);

  return (
    <div className="w-full overflow-hidden bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 animate-reveal-slow text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              Artisanal Ethiopian Gastronomy • Express Bole Dispatch
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08]">
              Taste the Soul of Addis. <br />
              <TypewriterText
                words={[
                  "Simmered Doro Wat.",
                  "Sizzling Shekla Tibs.",
                  "Spiced Special Kitfo.",
                  "Grand Yetsom Beyaynetu.",
                  "Bubbling Shiro Tegabino.",
                ]}
                className="text-amber-400"
              />
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Slow-cooked in traditional clay pots with hand-roasted berbere, aromatic cardamom, and clarified niter kibbeh. Delivered piping hot to your table.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/menu"
                className="px-8.5 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm tracking-wide transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-500/25"
              >
                Explore Interactive Menu &rarr;
              </Link>
              <Link
                href="/orders/ord_101"
                className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-bold text-sm transition-all shadow-lg"
              >
                Live Order Demo (#101)
              </Link>
            </div>
          </div>

          {/* Hero Showcase Card */}
          <div className="lg:col-span-5 relative animate-float-slow">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <Image
                src="/images/dishes/doro-wat.jpg"
                alt="Signature Doro Wat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                  Chef&apos;s Signature Masterpiece
                </span>
                <div className="flex items-center justify-between mt-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-white">Royal Doro Wat</h2>
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow-md">
                    480 ETB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Moving Menu Ribbon */}
      <MovingMarquee dishes={dishes} />

      {/* Apple-Style Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Engineered for Excellence</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">The Addis Eats Standard</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">01 / Heritage</span>
              <h3 className="text-2xl font-black text-white mt-3 mb-3">100% Pure Teff Injera</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fermented for 72 hours using highland red and ivory teff grain, baked daily on traditional clay griddles.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 text-xs font-bold text-amber-400 flex items-center gap-2">
              <span>Authentic Sourdough Grain</span>
            </div>
          </div>

          <div className="bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-400">02 / Precision</span>
              <h3 className="text-2xl font-black text-white mt-3 mb-3">Live SWR Telemetry</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Watch your order transition from clay pot preparation to courier dispatch in real time without refreshing.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 text-xs font-bold text-blue-400 flex items-center gap-2">
              <span>SSE Real-Time Push Stream</span>
            </div>
          </div>

          <div className="bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">03 / Security</span>
              <h3 className="text-2xl font-black text-white mt-3 mb-3">3-Layer Defense</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Protected by Edge Middleware, server-side role verification, and ownership-guarded Server Actions.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 text-xs font-bold text-emerald-400 flex items-center gap-2">
              <span>Enterprise-Grade Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Product Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Curated Tasting Menu
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
              Most Loved in Addis Ababa
            </h2>
          </div>
          <Link
            href="/menu"
            className="text-sm font-bold text-amber-400 hover:underline"
          >
            Browse all {dishes.length} authentic dishes &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {spotlight.map((dish) => (
            <article
              key={dish.id}
              className="group bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl hover:border-slate-700 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <Link href={`/menu/${dish.id}`} className="block relative w-full aspect-[4/3] bg-slate-950 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-extrabold uppercase tracking-wider border border-slate-800">
                    {dish.category}
                  </span>
                </Link>
                <div className="p-7">
                  <Link href={`/menu/${dish.id}`}>
                    <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                      {dish.name}
                    </h3>
                  </Link>
                  <p className="mt-3 text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-white">{dish.price}</span>
                  <span className="text-xs font-bold text-slate-400 ml-1">ETB</span>
                </div>
                <AddToCartButton dish={dish} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
