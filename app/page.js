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
    <div className="w-full overflow-hidden">
      {/* Dark Apple-Style Split Hero Section */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 animate-reveal-slow">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Artisanal Ethiopian Gastronomy • Express Bole Dispatch
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06]">
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

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Slow-cooked in traditional clay pots with hand-roasted berbere,
              aromatic cardamom, and clarified niter kibbeh. Experience
              Ethiopia&apos;s finest culinary craft delivered to your table.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/menu"
                className="px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm tracking-wide transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/20"
              >
                Explore Interactive Menu &rarr;
              </Link>
              <Link
                href="/orders/ord_101"
                className="px-7 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm transition-all"
              >
                Live Order Demo (#101)
              </Link>
            </div>
          </div>

          {/* Floating Hero Dish Showcase Card */}
          <div className="lg:col-span-5 relative animate-float-slow">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="/images/dishes/doro-wat.jpg"
                alt="Signature Doro Wat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  Chef&apos;s Signature Dish
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h2 className="text-2xl font-black text-white">
                    Royal Doro Wat
                  </h2>
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs">
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

      {/* Apple-Style Bento Value Props */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              01 / Heritage
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-2 mb-2">
              100% Pure Teff Injera
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Fermented for 72 hours using highland red and ivory teff grain for
              an authentic, airy texture.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              02 / Precision
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-2 mb-2">
              Live SWR Telemetry
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Watch your order transition from clay pot preparation to courier
              dispatch in real time without refreshing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              03 / Security
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-2 mb-2">
              3-Layer Verified
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Protected by Edge Middleware, Server Component role claims, and
              ownership-verified Server Actions.
            </p>
          </div>
        </div>
      </section>

      {/* Curated E-Commerce Product Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Curated Tasting Menu
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
              Most Loved in Addis Ababa
            </h2>
          </div>
          <Link
            href="/menu"
            className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Browse all {dishes.length} authentic dishes &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {spotlight.map((dish) => (
            <article
              key={dish.id}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <Link
                  href={`/menu/${dish.id}`}
                  className="block relative aspect-[4/3] bg-slate-100 overflow-hidden"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {dish.category}
                  </span>
                </Link>
                <div className="p-6">
                  <Link href={`/menu/${dish.id}`}>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {dish.name}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xl font-black text-slate-950">
                    {dish.price}
                  </span>
                  <span className="text-xs font-bold text-slate-500 ml-1">
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
