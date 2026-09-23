import Link from "next/link";
import { Shield, ShoppingBag } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-white text-stone-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-1.5 mb-3 group">
              <div className="w-6 h-6 rounded bg-[#e8590c] text-white flex items-center justify-center font-bold text-xs">
                AS
              </div>
              <span className="font-extrabold text-lg text-stone-900 tracking-tight">
                Alfa<span className="text-[#e8590c]">shop</span>bd
              </span>
            </Link>
            <p className="text-xs text-stone-500 max-w-sm leading-relaxed mb-4">
              Your one-stop destination for authentic homemade snack combos, trending gadgets, and lifestyle bundles. Enjoy guaranteed combo savings with fast, secure delivery.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-stone-400">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Secure Private API Gateway Connected</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link href="/?category=food" className="hover:text-[#e8590c] transition-colors">
                  Food & Homemade Snacks
                </Link>
              </li>
              <li>
                <Link href="/?category=gadget" className="hover:text-[#e8590c] transition-colors">
                  Smart Tech & Gadgets
                </Link>
              </li>
              <li>
                <Link href="/?category=lifestyle" className="hover:text-[#e8590c] transition-colors">
                  Lifestyle & Wellness
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#e8590c] transition-colors">
                  All Ready-made Combos
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <span className="hover:text-stone-900 cursor-pointer">Track My Order</span>
              </li>
              <li>
                <span className="hover:text-stone-900 cursor-pointer">Shipping & Delivery Info</span>
              </li>
              <li>
                <span className="hover:text-stone-900 cursor-pointer">Return & Refund Policy</span>
              </li>
              <li>
                <span className="hover:text-stone-900 cursor-pointer">Helpline: +880 1700-000000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Alfashopbd. All rights reserved.</p>
          <p>Powered by Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
