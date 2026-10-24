import Link from "next/link";
import Image from "next/image";

export function MovingMarquee({ dishes = [] }) {
  if (!dishes.length) return null;
  const loopDishes = [...dishes, ...dishes];

  return (
    <div className="w-full overflow-hidden bg-slate-950 py-6 border-y border-slate-800/80 shadow-2xl">
      <div className="animate-marquee flex items-center gap-6">
        {loopDishes.map((dish, idx) => (
          <Link
            key={`${dish.id}-${idx}`}
            href={`/menu/${dish.id}`}
            className="group flex items-center gap-4 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/60 transition-all duration-300 shrink-0 shadow-lg hover:scale-105"
          >
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-800 shrink-0 shadow-inner">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="56px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-extrabold text-white group-hover:text-amber-400 transition-colors">
                {dish.name}
              </span>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md mt-1 w-fit">
                {dish.price} ETB
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
