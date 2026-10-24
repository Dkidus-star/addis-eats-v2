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
    <div className="w-full">
      <MovingMarquee dishes={dishes} />

      <div className="w-full px-6 lg:px-12 xl:px-16 py-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 animate-reveal-slow">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Hourly ISR Culinary Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mt-1">
              Crafted for{" "}
              <TypewriterText
                words={[
                  "Spice Lovers.",
                  "Fasting & Vegan Days.",
                  "Sizzling Meat Feasts.",
                  "Traditional Breakfasts.",
                ]}
                className="text-blue-600"
              />
            </h1>
            <p className="mt-2 text-slate-600 text-base max-w-2xl">
              Every dish is prepared to order with freshly ground spices and
              served over warm teff injera.
            </p>
          </div>

          <div className="w-full lg:w-96">
            <MenuSearch />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-7">
          {dishes.map((dish, index) => (
            <article
              key={dish.id}
              className="group border border-slate-200/90 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <Link
                  href={`/menu/${dish.id}`}
                  className="block relative w-full aspect-[4/3] bg-slate-100 overflow-hidden"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 20vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={index === 0}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/75 text-white backdrop-blur-md">
                    {dish.category}
                  </span>
                </Link>

                <div className="p-5">
                  <h2 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    <Link href={`/menu/${dish.id}`}>{dish.name}</Link>
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-lg font-black text-slate-950">
                  {dish.price}{" "}
                  <span className="text-xs font-semibold text-slate-500">
                    ETB
                  </span>
                </span>
                <AddToCartButton dish={dish} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
