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
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-200/80 transition-all duration-300">
      <div className="w-full px-6 lg:px-12 xl:px-16 py-3.5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-black text-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
            A
          </span>
          <div>
            <span className="font-black text-xl text-slate-950 tracking-tight block leading-none">
              Addis Eats
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
              Addis Ababa • Est. 2026
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-5 text-sm font-semibold">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
                  active
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/cart"
            className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 font-bold"
          >
            <span>Bag</span>
            <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-extrabold rounded-full bg-slate-950 text-white">
              {itemCount}
            </span>
          </Link>

          {user?.role === "staff" && (
            <Link
              href="/kitchen"
              className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold hover:bg-emerald-100 transition"
            >
              Kitchen Live
            </Link>
          )}

          {user ? (
            <div className="hidden sm:flex items-center gap-3 ml-2 border-l border-slate-200 pl-4">
              <span className="text-slate-600 text-xs font-medium">
                Hi, {user.name}
              </span>
              <form action={signOutAction}>
                <button
                  type="submit"
                  className="text-xs text-red-600 hover:underline font-semibold"
                >
                  Sign Out
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/signin"
              className="px-4 py-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-sm font-semibold text-xs sm:text-sm"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
