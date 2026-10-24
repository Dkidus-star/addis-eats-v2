import Image from "next/image";
import Link from "next/link";
import { getDishes } from "@/lib/data";
import { AddToCartButton } from "@/components/AddToCartButton";
import { MenuSearch } from "@/components/MenuSearch";
import { TypewriterText } from "@/components/TypewriterText";
import { MovingMarquee } from "@/components/MovingMarquee";

export const revalidate = 3600;

export default async function MenuPage() {
  const result = await getDishes();
  const dishes = Array.isArray(result) ? result : result?.dishes || [];

  return (
    <div className="w-full bg-slate-950 text-white min-h-screen">
      <MovingMarquee dishes={dishes} />

      <div className="w-full px-8 lg:px-20 xl:px-28 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 animate-reveal-slow">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Hourly ISR Culinary Catalog
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mt-2">
              Crafted for{" "}
              <TypewriterText
                words={[
                  "Spice Lovers.",
                  "Fasting & Vegan Days.",
                  "Sizzling Meat Feasts.",
                  "Traditional Breakfasts.",
                ]}
                className="text-amber-400"
              />
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Every dish is prepared to order with freshly ground berbere and
              served over warm teff injera.
            </p>
          </div>

          <div className="w-full lg:w-[460px]">
            <MenuSearch />
          </div>
        </div>

        {/* Full-bleed 3-column grid matching the landing page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {dishes.map((dish, index) => (
            <article
              key={dish.id}
              className="group border border-slate-800 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index === 0}
                  />
                  <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-950/85 text-amber-400 border border-slate-700 backdrop-blur-md shadow-lg">
                    {dish.category}
                  </span>
                </Link>

                <div className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors">
                    <Link href={`/menu/${dish.id}`}>{dish.name}</Link>
                  </h2>
                  <p className="mt-3 text-lg text-slate-300 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="px-8 sm:px-10 pb-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {dish.price}
                  </span>
                  <span className="text-xs font-bold text-slate-400 ml-1.5">
                    ETB
                  </span>
                </div>
                <AddToCartButton dish={dish} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
