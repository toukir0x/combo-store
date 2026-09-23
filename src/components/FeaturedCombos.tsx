"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ComboProduct } from "@/lib/types";
import { ArrowRight, Sparkles, Box, Check, ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedCombosProps {
  featuredCombos: ComboProduct[];
}

export function FeaturedCombos({ featuredCombos }: FeaturedCombosProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!featuredCombos || featuredCombos.length === 0) return null;

  const currentCombo = featuredCombos[currentIndex] || featuredCombos[0];
  const currency = currentCombo.currency || "৳";

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredCombos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featuredCombos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="my-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
            <span>Featured Combo Bundles</span>
            <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
              Special Deals
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            Hand-picked value packs offering maximum savings on bundled essentials.
          </p>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={prevSlide}
            aria-label="Previous Featured Combo"
            className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 hover:text-[#e8590c] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Featured Combo"
            className="w-8 h-8 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 hover:text-[#e8590c] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Featured Banner / Card */}
      <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left: Image / Visual Gallery */}
          <div className="md:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] md:aspect-auto md:h-[340px] bg-stone-100">
            <Link href={`/combos/${currentCombo.id}`}>
              <Image
                src={currentCombo.thumbnail}
                alt={currentCombo.title}
                fill
                priority
                className="object-cover"
              />
            </Link>
            {/* Top-Left Floating Discount */}
            <div className="absolute top-3 left-3">
              <span className="bg-[#e8590c] text-white text-xs font-black px-2.5 py-1 rounded shadow-sm">
                {currentCombo.badge || `SAVE ${currentCombo.discountPercentage}%`}
              </span>
            </div>
          </div>

          {/* Right: Details & Purchase Link */}
          <div className="md:col-span-6 p-5 sm:p-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                  {currentCombo.items?.length || 1} PRODUCTS IN BUNDLE
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Save {currency}{currentCombo.savings.toLocaleString()}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-stone-900 hover:text-[#e8590c] transition-colors line-clamp-2 mb-2">
                <Link href={`/combos/${currentCombo.id}`}>
                  {currentCombo.title}
                </Link>
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
                {currentCombo.shortDescription}
              </p>

              {/* Bundled Items Mini Pills */}
              <div className="mb-5 space-y-1.5 bg-[#fbf9f6] p-3 rounded-lg border border-stone-200/70">
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                  <Box className="w-3.5 h-3.5 text-[#e8590c]" />
                  <span>Includes in this combo:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentCombo.items?.slice(0, 4).map((item) => (
                    <span
                      key={item.id}
                      className="inline-flex items-center text-[11px] font-medium bg-white px-2 py-1 rounded border border-stone-200 text-stone-700"
                    >
                      <Check className="w-3 h-3 text-[#e8590c] mr-1" />
                      {item.name}
                    </span>
                  ))}
                  {(currentCombo.items?.length || 0) > 4 && (
                    <span className="text-[11px] text-stone-400 self-center pl-1">
                      +{(currentCombo.items?.length || 0) - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Price & Action CTA */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-100">
              <div>
                <div className="text-xs text-stone-400 line-through">
                  Regular: {currency}{currentCombo.originalPrice.toLocaleString()}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-[#e8590c]">
                    {currency}{currentCombo.comboPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-stone-600">
                    Combo Price
                  </span>
                </div>
              </div>

              <Link
                href={`/combos/${currentCombo.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs sm:text-sm font-bold bg-[#e8590c] hover:bg-[#cf4b06] text-white shadow-sm hover:shadow transition-all"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Dots / Strips */}
        <div className="bg-[#fbf4eb]/50 px-4 py-2 border-t border-stone-200 flex items-center justify-between">
          <div className="text-[11px] font-medium text-stone-500">
            Offer {currentIndex + 1} of {featuredCombos.length}
          </div>
          <div className="flex items-center gap-1.5">
            {featuredCombos.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === i ? "bg-[#e8590c] w-6" : "bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
