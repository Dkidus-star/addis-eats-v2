import Link from "next/link";
import Image from "next/image";

export function MovingMarquee({ dishes = [] }) {
  if (!dishes.length) return null;
  const loopDishes = [...dishes, ...dishes];

  return (
    <div className="w-full overflow-hidden bg-slate-950 py-5 border-y border-slate-800">
      <div className="animate-marquee flex items-center gap-6">
        {loopDishes.map((dish, idx) => (
          <Link
            key={`${dish.id}-${idx}`}
            href={`/menu/${dish.id}`}
            className="group flex items-center gap-3.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 transition-all duration-300 shrink-0"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-800 shrink-0">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="36px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
              {dish.name}
            </span>
            <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
              {dish.price} ETB
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
