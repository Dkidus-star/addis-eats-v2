"use client";

import { useState } from "react";
import { useCart } from "./Providers";

export function AddToCartButton({ dish }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 transform active:scale-95 shadow-sm ${
        added
          ? "bg-emerald-600 text-white scale-105"
          : "bg-slate-950 text-white hover:bg-blue-600 hover:-translate-y-0.5"
      }`}
    >
      {added ? "✓ Added to Bag" : "+ Add to Bag"}
    </button>
  );
}
