import { getCategories, getCombos } from "@/lib/api";
import { FeaturedCombos } from "@/components/FeaturedCombos";
import { ComboCatalog } from "@/components/ComboCatalog";

export const revalidate = 60; // Revalidate server cache every 60 seconds

export default async function HomePage() {
  const [categories, combos] = await Promise.all([
    getCategories(),
    getCombos(),
  ]);

  // Extract featured combos for the top gallery/showcase
  const featuredCombos = combos.filter((c) => c.isFeatured || c.badge);

  return (
    <div className="pb-16 pt-2">
      {/* 1. Feature Combo Products Showcase */}
      {featuredCombos.length > 0 && (
        <FeaturedCombos featuredCombos={featuredCombos} />
      )}

      {/* 2. Ready-Made Combos Gallery */}
      <ComboCatalog initialCombos={combos} categories={categories} />
    </div>
  );
}
