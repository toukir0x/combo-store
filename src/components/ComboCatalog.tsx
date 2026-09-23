"use client";

import { useState, useMemo } from "react";
import { ComboProduct, Category } from "@/lib/types";
import { ComboCard } from "./ComboCard";
import { Search, X, ArrowUpDown } from "lucide-react";

interface ComboCatalogProps {
  initialCombos: ComboProduct[];
  categories: Category[];
}

export function ComboCatalog({ initialCombos, categories }: ComboCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("default");

  // Filtered and sorted combos
  const filteredCombos = useMemo(() => {
    return initialCombos
      .filter((combo) => {
        const matchesCategory =
          selectedCategory === "all" ||
          combo.category.toLowerCase() === selectedCategory.toLowerCase();

        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          combo.title.toLowerCase().includes(q) ||
          combo.shortDescription.toLowerCase().includes(q) ||
          combo.items.some((item) => item.name.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "savings") {
          return b.savings - a.savings;
        }
        if (sortBy === "discount") {
          return b.discountPercentage - a.discountPercentage;
        }
        if (sortBy === "price-low") {
          return a.comboPrice - b.comboPrice;
        }
        if (sortBy === "price-high") {
          return b.comboPrice - a.comboPrice;
        }
        return 0;
      });
  }, [initialCombos, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="combos" className="my-8">
      {/* Section Header Matching Screenshot: "Ready-made combos" */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Ready-made combos
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Browse our specially prepared multi-item combo packages.
          </p>
        </div>

        {/* Filter / Sort bar */}
        <div className="flex items-center gap-2.5">
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter combos..."
              className="pl-8 pr-7 py-1.5 rounded-md bg-white border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#e8590c]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Sort selection */}
          <div className="relative flex items-center">
            <ArrowUpDown className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-7 pr-6 py-1.5 rounded-md bg-white border border-stone-200 text-xs text-stone-700 focus:outline-none focus:border-[#e8590c] cursor-pointer appearance-none"
            >
              <option value="default">Default Sorting</option>
              <option value="savings">Highest Savings</option>
              <option value="discount">Highest Discount %</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills (Subtle and clean) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.slug || selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug || cat.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                isActive
                  ? "bg-[#e8590c] text-white shadow-sm"
                  : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300"
              }`}
            >
              {cat.name}
              {cat.productCount !== undefined && (
                <span
                  className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-orange-800/40 text-white" : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {cat.productCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid of Ready-made Combos */}
      {filteredCombos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredCombos.map((combo) => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white rounded-lg border border-stone-200">
          <p className="text-sm font-semibold text-stone-700">No combo products found</p>
          <p className="text-xs text-stone-500 mt-1 mb-4">
            Try adjusting your search query or select another category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="px-4 py-2 rounded-md text-xs font-semibold bg-[#e8590c] text-white hover:bg-[#cf4b06]"
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}
