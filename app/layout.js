import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Providers } from "@/components/Providers";
import { NavbarClient } from "@/components/NavbarClient";
import { getSession } from "@/lib/session";
import { signOut } from "@/app/auth-actions";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),
  title: {
    default: "Addis Eats — Artisanal Ethiopian Culinary Delivery",
    template: "%s | Addis Eats",
  },
  description:
    "Order fresh, authentic Ethiopian dishes delivered hot across Addis Ababa.",
};

export default async function RootLayout({ children }) {
  const user = await getSession();

  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Addis Eats",
    description: "Authentic Ethiopian food ordering and delivery service",
    servesCuisine: "Ethiopian",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    currenciesAccepted: "ETB",
    openingHours: "Mo-Su 10:00-22:00",
  };

  return (
    <html lang="en">
      <body
        className="bg-slate-50 text-slate-900 min-h-screen flex flex-col selection:bg-amber-400 selection:text-slate-950"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <Providers>
          <NavbarClient user={user} signOutAction={signOut} />
          <main className="flex-1 w-full">{children}</main>

          {/* High-End E-Commerce Visual Footer */}
          <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-20">
            {/* Visual Culinary Showcase Strip inside Footer */}
            <div className="relative w-full overflow-hidden border-b border-slate-800">
              <div className="w-full px-4 sm:px-8 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    From Our Traditional Clay Kitchen
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    Crafted with 100% Organic Teff Injera & Aged Niter Kibbeh.
                  </h2>
                  <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                    Every order is prepared fresh in Bole Medhanialem and
                    dispatched in thermal-sealed earthenware carriers within 35
                    minutes.
                  </p>
                </div>
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                  <div className="relative h-36 rounded-2xl overflow-hidden border border-slate-800 group">
                    <Image
                      src="/images/dishes/yetsom-beyaynetu.jpg"
                      alt="Grand Fasting Platter"
                      fill
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                      <span className="text-xs font-bold text-white">
                        Yetsom Beyaynetu
                      </span>
                    </div>
                  </div>
                  <div className="relative h-36 rounded-2xl overflow-hidden border border-slate-800 group">
                    <Image
                      src="/images/dishes/shekla-tibs.jpg"
                      alt="Sizzling Shekla Tibs"
                      fill
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                      <span className="text-xs font-bold text-white">
                        Sizzling Clay Tibs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-column agency footer links */}
            <div className="w-full px-4 sm:px-8 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                    A
                  </span>
                  <span className="font-black text-lg text-white">
                    Addis Eats
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bole Medhanialem, Cameroon Street, Addis Ababa, Ethiopia. Open
                  Daily 10:00 AM – 10:00 PM EAT.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                  Culinary Collections
                </h3>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li>
                    <Link
                      href="/menu"
                      className="hover:text-amber-400 transition"
                    >
                      Slow-Simmered Stews (Wats)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/menu"
                      className="hover:text-amber-400 transition"
                    >
                      Sizzling Prime Shekla Tibs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/menu"
                      className="hover:text-amber-400 transition"
                    >
                      Yetsom Vegetarian Platters
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/menu"
                      className="hover:text-amber-400 transition"
                    >
                      Traditional Ethiopian Breakfast
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                  Platform & Dispatch
                </h3>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li>
                    <Link
                      href="/cart"
                      className="hover:text-amber-400 transition"
                    >
                      Interactive Order Bag
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders/history"
                      className="hover:text-amber-400 transition"
                    >
                      Live Sales & Map Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders/ord_101"
                      className="hover:text-amber-400 transition"
                    >
                      Real-Time Order Tracker
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kitchen"
                      className="hover:text-amber-400 transition"
                    >
                      Staff Kitchen Dispatch
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                  Delivery Guarantee
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  5km priority radius covering Bole, Kazanchis, Bambis, and
                  Meskel Square with live SWR telemetry.
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                  ● Kitchen Dispatch Online
                </span>
              </div>
            </div>

            <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Addis Eats Culinary Group. Built with
              Next.js 16 App Router, React 19 & Tailwind CSS.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
