"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ComboProduct } from "@/lib/types";
import {
  Star,
  CheckCircle2,
  Box,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ShoppingBag,
  ArrowLeft,
  Share2,
  Check,
  PackageCheck
} from "lucide-react";

interface ComboDetailViewProps {
  combo: ComboProduct;
}

export function ComboDetailView({ combo }: ComboDetailViewProps) {
  const [selectedImage, setSelectedImage] = useState<string>(
    combo.images && combo.images.length > 0 ? combo.images[0] : combo.thumbnail
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const currency = combo.currency || "৳";

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="py-6 sm:py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <Link href="/" className="hover:text-[#e8590c] transition-colors flex items-center gap-1 font-medium">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Ready-made combos</span>
        </Link>
        <span>/</span>
        <span className="capitalize text-stone-600">{combo.category}</span>
        <span>/</span>
        <span className="text-stone-900 font-semibold truncate max-w-xs">{combo.title}</span>
      </nav>

      {/* Main Grid: Gallery on Left, Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm">
        {/* Left Column: Image Gallery (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {/* Main Hero Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
            <Image
              src={selectedImage}
              alt={combo.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Top-Left Discount Badge */}
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
              <span className="bg-[#e8590c] text-white text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-[2px] shadow-sm">
                {combo.badge || `SAVE ${combo.discountPercentage}%`}
              </span>
            </div>
          </div>

          {/* Thumbnails row */}
          {combo.images && combo.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {combo.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all shrink-0 bg-stone-100 ${
                    selectedImage === img
                      ? "border-[#e8590c] shadow-sm"
                      : "border-stone-200 hover:border-stone-300 opacity-80 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${combo.title} view ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Trust Guarantee Box */}
          <div className="mt-2 p-4 rounded-lg bg-[#fbf9f6] border border-stone-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#e8590c] shrink-0" />
                <span>Fast Home Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-[#e8590c] shrink-0" />
                <span>Hygienic Packaging</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Pricing & Actions (6 cols) */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Header row */}
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#e8590c] bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
              {combo.items?.length || 1} PRODUCTS IN COMBO
            </span>
            <button
              onClick={handleShare}
              className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1.5 transition-colors p-1 rounded hover:bg-stone-100"
              title="Copy share link"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? "Copied!" : "Share"}</span>
            </button>
          </div>

          {/* Product Title */}
          <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug mb-3">
            {combo.title}
          </h1>

          {/* Rating & Stock */}
          <div className="flex items-center gap-3 text-xs text-stone-500 mb-5">
            <div className="flex items-center gap-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(combo.rating)
                        ? "fill-amber-500 text-amber-500"
                        : "text-stone-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-stone-800">{combo.rating}</span>
              <span>({combo.reviewCount} reviews)</span>
            </div>
            <span>•</span>
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
              In Stock ({combo.stockCount} available)
            </span>
          </div>

          {/* Price Box */}
          <div className="p-4 rounded-lg bg-[#fbf4eb]/60 border border-[#f0e4d2] mb-6">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-xs text-stone-400 line-through">
                  Regular Price: {currency}{combo.originalPrice.toLocaleString()}
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-extrabold text-[#e8590c]">
                    {currency}{combo.comboPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Save {currency}{combo.savings.toLocaleString()} ({combo.discountPercentage}% OFF)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
            {combo.description}
          </p>

          {/* Quantity Selector & Add to Cart */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center border border-stone-300 bg-white rounded-md h-10 w-28 shrink-0">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-full flex items-center justify-center text-stone-500 hover:text-stone-900 font-bold"
              >
                -
              </button>
              <span className="flex-1 text-center font-bold text-sm text-stone-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-full flex items-center justify-center text-stone-500 hover:text-stone-900 font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`flex-1 h-10 rounded-md font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                addedToCart
                  ? "bg-emerald-600 text-white"
                  : "bg-[#e8590c] hover:bg-[#cf4b06] text-white shadow-sm"
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Combo Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Combo to Cart • {currency}{(combo.comboPrice * quantity).toLocaleString()}</span>
                </>
              )}
            </button>
          </div>

          {/* Features Checklist */}
          {combo.features && combo.features.length > 0 && (
            <div className="border-t border-stone-200 pt-5">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
                Special Highlights:
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {combo.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e8590c] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Included Products in Combo Section */}
      <section className="mt-8 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm">
        <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
          <Box className="w-5 h-5 text-[#e8590c]" />
          What&apos;s Included In This Combo ({combo.items.length} Products)
        </h2>
        <p className="text-xs text-stone-500 mb-6">
          All items listed below are packed and dispatched together in a single combo package.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {combo.items.map((item, idx) => (
            <div
              key={item.id || idx}
              className="flex items-center gap-3.5 p-3.5 rounded-lg border border-stone-200 bg-[#fbf9f6] hover:bg-white hover:border-stone-300 transition-colors"
            >
              {item.image && (
                <div className="relative w-16 h-16 rounded-md overflow-hidden bg-stone-200 shrink-0 border border-stone-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-orange-100 text-[#e8590c]">
                    QTY: {item.quantity}
                  </span>
                  <span className="text-[11px] text-stone-400">
                    Retail: {currency}{item.individualPrice}
                  </span>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-stone-900 truncate">
                  {item.name}
                </h4>
                {item.specs && (
                  <p className="text-[11px] text-stone-500 truncate mt-0.5">{item.specs}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
