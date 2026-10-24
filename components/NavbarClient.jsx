"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/Providers";

export function NavbarClient({ user, signOutAction }) {
  const pathname = usePathname();
  const { cart = [] } = useCart() || {};
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { href: "/", label: "Showcase" },
    { href: "/menu", label: "Menu" },
    { href: "/orders/history", label: "Analytics" },
    { href: "/checkout", label: "Checkout" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300">
      <div className="w-full px-8 lg:px-16 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3.5 group">
          <span className="w-11 h-11 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-amber-400/20 group-hover:scale-105 transition-transform">
            A
          </span>
          <div>
            <span className="font-black text-xl text-white tracking-tight block leading-none">
              Addis Eats
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-400/90 font-bold mt-1 block">
              Addis Ababa • Est. 2026
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-3 lg:gap-6 text-sm font-semibold">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4.5 py-2 rounded-full transition-all duration-300 ${
                  active
                    ? "bg-amber-400 text-slate-950 font-extrabold shadow-md shadow-amber-400/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/cart"
            className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-400 hover:text-slate-950 transition-all duration-300 font-bold"
          >
            <span>Bag</span>
            <span className="inline-flex items-center justify-center min-w-[22px] h-5 px-1.5 text-xs font-black rounded-full bg-amber-400 text-slate-950">
              {itemCount}
            </span>
          </Link>

          {user?.role === "staff" && (
            <Link
              href="/kitchen"
              className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold hover:bg-emerald-500 hover:text-slate-950 transition"
            >
              Kitchen Live
            </Link>
          )}

          {user ? (
            <div className="hidden md:flex items-center gap-3 ml-3 border-l border-slate-800 pl-4">
              <span className="text-slate-400 text-xs font-medium">
                Hi, {user.name}
              </span>
              <form action={signOutAction}>
                <button
                  type="submit"
                  className="text-xs text-red-400 hover:underline font-semibold"
                >
                  Sign Out
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/signin"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-md font-bold text-xs sm:text-sm"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
