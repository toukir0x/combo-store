import Link from "next/link";
import { Sparkles, ShieldCheck, ArrowRight, Truck, Check, Percent } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 border-b border-slate-800/80">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-950/80 border border-indigo-700/40 text-indigo-300 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Exclusive Private API Combos & Bundles</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none mb-6">
          Premium Hardware Combos.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Engineered Together.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Stop guessing compatibility. Explore curated multi-product bundles engineered for peak synergy — with guaranteed combo discount pricing.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#combos-section"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
          >
            <span>Browse All Combos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#benefits"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all"
          >
            <span>Why Buy A Combo?</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div id="benefits" className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/60 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Percent className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Guaranteed Combo Savings</div>
              <div className="text-[11px] text-slate-400">Up to 30% cheaper than buying separately</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">100% Tested Compatibility</div>
              <div className="text-[11px] text-slate-400">All bundled components fit & connect seamlessly</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Single Box Express Delivery</div>
              <div className="text-[11px] text-slate-400">Shipped together with comprehensive warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
