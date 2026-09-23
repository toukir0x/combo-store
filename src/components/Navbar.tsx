"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, Moon, User, ShoppingBag, ShoppingCart } from "lucide-react";

export function Navbar({ isMockMode = true }: { isMockMode?: boolean }) {
  const [search, setSearch] = useState("");

  return (
    <header className="w-full bg-[#fdfcf9] border-b border-stone-200">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <div className="w-7 h-7 rounded-md bg-[#e8590c] text-white flex items-center justify-center font-black text-sm shadow-sm">
                  AS
                </div>
                <div className="flex items-baseline">
                  <span className="font-extrabold text-xl text-stone-900 tracking-tight">Alfa</span>
                  <span className="font-extrabold text-xl text-[#e8590c] tracking-tight">shop</span>
                  <span className="text-xs font-bold text-stone-500 ml-0.5">bd</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Centered Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products, brands, categories..."
                className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-[#fbf4eb] border border-[#f0e4d2] text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#e8590c] focus:ring-1 focus:ring-[#e8590c] transition-all"
              />
              <span className="absolute right-3.5 px-1.5 py-0.5 text-[11px] font-mono font-medium text-stone-400 bg-white/80 rounded border border-stone-200 pointer-events-none">
                /
              </span>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 sm:gap-6 text-stone-600">
            <button
              aria-label="Wishlist"
              className="p-1.5 hover:text-[#e8590c] transition-colors rounded-full hover:bg-stone-100"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
            </button>
            <button
              aria-label="Dark Mode Toggle"
              className="p-1.5 hover:text-[#e8590c] transition-colors rounded-full hover:bg-stone-100"
            >
              <Moon className="w-5 h-5 stroke-[1.75]" />
            </button>
            <Link
              href="/#account"
              aria-label="User Account"
              className="p-1.5 hover:text-[#e8590c] transition-colors rounded-full hover:bg-stone-100"
            >
              <div className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center">
                <User className="w-4 h-4 stroke-[1.75]" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation (Black Bar) */}
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs sm:text-sm font-medium tracking-wide">
            {/* Left Nav items */}
            <div className="flex items-center gap-6 sm:gap-8">
              <Link href="/" className="hover:text-[#f97316] transition-colors">
                Shop
              </Link>
              <Link href="/#combos" className="text-[#f97316] font-semibold flex items-center gap-1">
                <span>Combos</span>
              </Link>
              <Link href="/?category=gadget" className="hover:text-[#f97316] transition-colors">
                Gadget
              </Link>
              <Link href="/?category=food" className="hover:text-[#f97316] transition-colors">
                Food
              </Link>
            </div>

            {/* Right Nav items */}
            <div className="flex items-center gap-6 sm:gap-8">
              <Link href="/#blog" className="hover:text-[#f97316] transition-colors">
                Blog
              </Link>
              <Link href="/#flash-sale" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1">
                <span>Flash Sale</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
