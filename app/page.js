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
      {/* Hero Section - Fully fluid and immersive */}
      <section className="relative py-28 lg:py-36 px-8 lg:px-20 xl:px-32 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 animate-reveal-slow text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              Artisanal Ethiopian Gastronomy • Express Bole Dispatch
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-8xl font-black tracking-tight leading-[1.06]">
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

            <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Slow-cooked in traditional clay pots with hand-roasted berbere,
              aromatic cardamom, and clarified niter kibbeh. Delivered piping
              hot to your table.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4">
              <Link
                href="/menu"
                className="px-9 py-4.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base tracking-wide transition-all transform hover:-translate-y-0.5 shadow-2xl shadow-amber-500/25"
              >
                Explore Interactive Menu &rarr;
              </Link>
              <Link
                href="/orders/ord_101"
                className="px-9 py-4.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-bold text-base transition-all shadow-xl"
              >
                Live Order Demo (#101)
              </Link>
            </div>
          </div>

          {/* Hero Showcase Card */}
          <div className="lg:col-span-5 relative animate-float-slow">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <Image
                src="/images/dishes/doro-wat.jpg"
                alt="Signature Doro Wat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                  Chef&apos;s Signature Masterpiece
                </span>
                <div className="flex items-center justify-between mt-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    Royal Doro Wat
                  </h2>
                  <span className="px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-sm shadow-md">
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
      <section className="w-full px-8 lg:px-20 xl:px-32 py-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Engineered for Excellence
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            The Addis Eats Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/90 p-10 rounded-3xl border border-slate-800 shadow-2xl hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                01 / Heritage
              </span>
              <h3 className="text-2xl font-black text-white mt-4 mb-3">
                100% Pure Teff Injera
              </h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Fermented for 72 hours using highland red and ivory teff grain,
                baked daily on traditional clay griddles.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-slate-800 text-xs font-bold text-amber-400 flex items-center gap-2">
              <span>Authentic Sourdough Grain</span>
            </div>
          </div>

          <div className="bg-slate-900/90 p-10 rounded-3xl border border-slate-800 shadow-2xl hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-400">
                02 / Precision
              </span>
              <h3 className="text-2xl font-black text-white mt-4 mb-3">
                Live SWR Telemetry
              </h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Watch your order transition from clay pot preparation to courier
                dispatch in real time without refreshing.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-slate-800 text-xs font-bold text-blue-400 flex items-center gap-2">
              <span>SSE Real-Time Push Stream</span>
            </div>
          </div>

          <div className="bg-slate-900/90 p-10 rounded-3xl border border-slate-800 shadow-2xl hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                03 / Security
              </span>
              <h3 className="text-2xl font-black text-white mt-4 mb-3">
                3-Layer Defense
              </h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Protected by Edge Middleware, server-side role verification, and
                ownership-guarded Server Actions.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-slate-800 text-xs font-bold text-emerald-400 flex items-center gap-2">
              <span>Enterprise-Grade Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Product Grid - 3 Columns filling widescreen */}
      <section className="w-full px-8 lg:px-20 xl:px-32 pb-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Curated Tasting Menu
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mt-1">
              Most Loved in Addis Ababa
            </h2>
          </div>
          <Link
            href="/menu"
            className="text-base font-bold text-amber-400 hover:underline"
          >
            Browse all {dishes.length} authentic dishes &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {spotlight.map((dish) => (
            <article
              key={dish.id}
              className="group bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl hover:border-slate-700 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <Link
                  href={`/menu/${dish.id}`}
                  className="block relative w-full aspect-[4/3] bg-slate-950 overflow-hidden"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-wider border border-slate-800">
                    {dish.category}
                  </span>
                </Link>
                <div className="p-8">
                  <Link href={`/menu/${dish.id}`}>
                    <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                      {dish.name}
                    </h3>
                  </Link>
                  <p className="mt-3 text-base text-slate-400 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-3xl font-black text-white">
                    {dish.price}
                  </span>
                  <span className="text-xs font-bold text-slate-400 ml-1">
                    ETB
                  </span>
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
