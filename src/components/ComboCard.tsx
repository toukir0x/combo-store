"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ComboProduct } from "@/lib/types";
import { ShoppingBag, Check } from "lucide-react";

interface ComboCardProps {
  combo: ComboProduct;
}

export function ComboCard({ combo }: ComboCardProps) {
  const [added, setAdded] = useState(false);
  const currency = combo.currency || "৳";

  const handleAddCombo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group flex flex-col bg-white border border-stone-200/90 rounded-md overflow-hidden combo-card-shadow hover:border-stone-300 transition-all duration-200">
      {/* Top Image Box */}
      <Link href={`/combos/${combo.id}`} className="relative aspect-square w-full bg-stone-100 overflow-hidden block">
        <Image
          src={combo.thumbnail}
          alt={combo.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />

        {/* Discount Badge on Top-Left */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-block bg-[#e8590c] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[2px] shadow-sm">
            {combo.badge || `SAVE ${combo.discountPercentage}%`}
          </span>
        </div>
      </Link>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-4">
        {/* Title */}
        <h3 className="font-bold text-sm sm:text-[15px] text-stone-900 group-hover:text-[#e8590c] transition-colors line-clamp-1 leading-snug">
          <Link href={`/combos/${combo.id}`} title={combo.title}>
            {combo.title}
          </Link>
        </h3>

        {/* Number of Products */}
        <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mt-1">
          {combo.items?.length || 1} PRODUCTS
        </div>

        {/* Price Row */}
        <div className="flex items-baseline gap-1.5 mt-2">
          <span className="text-base sm:text-lg font-bold text-[#e8590c] tracking-tight">
            {currency}{combo.comboPrice.toLocaleString()}
          </span>
          <span className="text-xs text-stone-400 line-through">
            {currency}{combo.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Add Combo Button */}
        <div className="mt-3.5 pt-1">
          <button
            onClick={handleAddCombo}
            className={`w-full py-2 px-3 rounded-md border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
              added
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-[#e8590c] text-[#e8590c] bg-white hover:bg-[#e8590c] hover:text-white"
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Added to Cart</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 stroke-[2]" />
                <span>Add combo</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
