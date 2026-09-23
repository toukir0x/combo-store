import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getComboById, getCombos } from "@/lib/api";
import { ComboDetailView } from "@/components/ComboDetailView";
import { ComboCard } from "@/components/ComboCard";
import { ArrowLeft, Sparkles, Box } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const combo = await getComboById(id);

  if (!combo) {
    return {
      title: "Combo Product Not Found | Alfashopbd",
    };
  }

  const currency = combo.currency || "৳";

  return {
    title: `${combo.title} - ${currency}${combo.comboPrice} | Alfashopbd`,
    description: combo.shortDescription,
    openGraph: {
      title: combo.title,
      description: combo.shortDescription,
      images: combo.images && combo.images.length > 0 ? [combo.images[0]] : [combo.thumbnail],
    },
  };
}

export default async function ComboDetailPage({ params }: PageProps) {
  const { id } = await params;
  const combo = await getComboById(id);

  if (!combo) {
    return (
      <div className="py-20 text-center bg-white rounded-xl border border-stone-200 my-8 p-8">
        <div className="w-14 h-14 rounded-full bg-orange-100 text-[#e8590c] flex items-center justify-center mx-auto mb-4">
          <Box className="w-7 h-7" />
        </div>
        <h1 className="text-xl font-bold text-stone-900 mb-2">Combo Product Not Found</h1>
        <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto mb-6">
          The requested combo package may have expired or is currently unavailable in the catalog.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-[#e8590c] hover:bg-[#cf4b06] text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Ready-made combos</span>
        </Link>
      </div>
    );
  }

  // Fetch related combos in the same category or other top deals
  const allCombos = await getCombos();
  const relatedCombos = allCombos
    .filter((c) => c.id !== combo.id)
    .slice(0, 4);

  return (
    <div className="pb-16">
      {/* Product Details View */}
      <ComboDetailView combo={combo} />

      {/* Related / Alternative Combos */}
      {relatedCombos.length > 0 && (
        <section className="mt-12 pt-8 border-t border-stone-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                <span>More Ready-made combos</span>
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Customers who viewed this combo also explored these bundles.
              </p>
            </div>
            <Link
              href="/"
              className="text-xs font-semibold text-[#e8590c] hover:text-[#cf4b06] transition-colors"
            >
              View All Combos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {relatedCombos.map((related) => (
              <ComboCard key={related.id} combo={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
