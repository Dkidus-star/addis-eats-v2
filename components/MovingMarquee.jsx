import Link from "next/link";
import Image from "next/image";

export function MovingMarquee({ dishes = [] }) {
  if (!dishes.length) return null;
  const loopDishes = [...dishes, ...dishes];

  return (
    <div className="w-full overflow-hidden bg-slate-900/95 py-7 border-y border-slate-800 shadow-2xl">
      <div className="animate-marquee flex items-center gap-8 px-4">
        {loopDishes.map((dish, idx) => (
          <Link
            key={`${dish.id}-${idx}`}
            href={`/menu/${dish.id}`}
            className="group flex items-center gap-5 px-6 py-4 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-400 transition-all duration-300 shrink-0 shadow-xl"
          >
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-800 shrink-0 shadow-inner">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="80px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col pr-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400/90">
                {dish.category}
              </span>
              <span className="text-xl font-black text-white group-hover:text-amber-300 transition-colors mt-0.5">
                {dish.name}
              </span>
              <span className="text-sm font-extrabold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md mt-1.5 w-fit">
                {dish.price} ETB
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
