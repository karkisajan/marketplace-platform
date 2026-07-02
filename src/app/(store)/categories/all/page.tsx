"use client";

import CategoryCardGrid from "@/features/category/components/CategoryCardGrid";
import CategoryGrid from "@/features/category/components/CategoryGrid";
import { useCategories } from "@/features/category/hooks/useCategories";

export default function CategoriesAllPage() {
  const { categories, isLoading, error } = useCategories({
    initialPage: 1,
    initialLimit: 50,
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Categories</h1>
          <p className="text-xl text-gray-500">
            Browse all product categories available on Lumina
          </p>
        </div>
      </div>

      <CategoryGrid
        isLoading={isLoading}
        error={error}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
      >
        {categories.map((category) => (
          <CategoryCardGrid key={category.id} category={category} />
        ))}
      </CategoryGrid>
    </div>
  );
}
