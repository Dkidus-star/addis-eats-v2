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
    <div className="w-full bg-slate-950 text-white min-h-screen">
      {/* Full-Bleed Hero Section */}
      <section className="w-full px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 animate-reveal-slow">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-sm font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              Artisanal Ethiopian Gastronomy • Express Bole Dispatch
            </div>

            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05]">
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

            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-3xl">
              Slow-cooked in traditional clay pots with hand-roasted berbere, aromatic cardamom, and clarified niter kibbeh. Delivered piping hot across Addis Ababa.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              <Link
                href="/menu"
                className="px-10 py-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-lg transition-all transform hover:-translate-y-0.5 shadow-2xl shadow-amber-500/25"
              >
                Explore Full Menu &rarr;
              </Link>
              <Link
                href="/orders/ord_101"
                className="px-10 py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-lg transition-all shadow-xl"
              >
                Live Order Demo (#101)
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <Image
                src="/images/dishes/doro-wat.jpg"
                alt="Signature Doro Wat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8 sm:p-10">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                  Chef&apos;s Signature Masterpiece
                </span>
                <div className="flex items-center justify-between mt-3">
                  <h2 className="text-3xl sm:text-4xl font-black text-white">Royal Doro Wat</h2>
                  <span className="px-5 py-2 rounded-full bg-amber-400 text-slate-950 font-black text-lg shadow-md">
                    480 ETB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Menu Ribbon */}
      <MovingMarquee dishes={dishes} />

      {/* Full-Width Bento Grid */}
      <section className="w-full px-6 lg:px-12 py-24">
        <div className="mb-14">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-400">
            Engineered for Excellence
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mt-2">
            The Addis Eats Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-10 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">01 / Heritage</span>
              <h3 className="text-3xl font-black text-white mt-4 mb-4">100% Pure Teff Injera</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Fermented for 72 hours using highland red and ivory teff grain, baked fresh daily on traditional clay metad griddles.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-slate-800 text-base font-bold text-amber-400">
              Authentic Highland Grain
            </div>
          </div>

          <div className="bg-slate-900 p-10 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-400">02 / Precision</span>
              <h3 className="text-3xl font-black text-white mt-4 mb-4">Live SWR Telemetry</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Watch your order transition from clay pot preparation to courier dispatch in real time without refreshing the page.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-slate-800 text-base font-bold text-blue-400">
              5-Second Live Status Sync
            </div>
          </div>

          <div className="bg-slate-900 p-10 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">03 / Security</span>
              <h3 className="text-3xl font-black text-white mt-4 mb-4">3-Layer Defense</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Protected by Edge Middleware, server-side role verification, and ownership-guarded Server Actions.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-slate-800 text-base font-bold text-emerald-400">
              Zero-Trust Action Guards
            </div>
          </div>
        </div>
      </section>

      {/* Strictly 3 Columns Product Grid (Full-Width) */}
      <section className="w-full px-6 lg:px-12 pb-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Curated Tasting Menu
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mt-2">
              Most Loved in Addis Ababa
            </h2>
          </div>
          <Link
            href="/menu"
            className="text-lg font-bold text-amber-400 hover:underline"
          >
            View all {dishes.length} authentic dishes &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {spotlight.map((dish) => (
            <article
              key={dish.id}
              className="group bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Link href={`/menu/${dish.id}`} className="block relative w-full aspect-[4/3] bg-slate-950 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-slate-950/85 text-amber-400 text-xs font-extrabold uppercase tracking-wider border border-slate-700 shadow-lg">
                    {dish.category}
                  </span>
                </Link>
                <div className="p-8 sm:p-10">
                  <Link href={`/menu/${dish.id}`}>
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors">
                      {dish.name}
                    </h3>
                  </Link>
                  <p className="mt-3 text-lg text-slate-300 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="px-8 sm:px-10 pb-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-white">{dish.price}</span>
                  <span className="text-xs font-bold text-slate-400 ml-1.5">ETB</span>
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
