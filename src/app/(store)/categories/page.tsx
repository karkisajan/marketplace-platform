"use client";

import { useCategories } from "@/features/category/hooks/useCategories";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CategoryGrid from "@/features/category/components/CategoryGrid";
import CategoryCardCompact from "@/features/category/components/CategoryCardCompact";

export default function CategoriesPage() {
  const { categories, isLoading, error } = useCategories({
    initialPage: 1,
    initialLimit: 5,
  });

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl font-medium text-gray-800 mb-2">Categories</h2>
        <Link className="no-underline hover:underline" href={`/categories/all`}>
          <span className="flex justify-center items-center gap-1">
            <p>See more categories</p> <ArrowRight size={16} />
          </span>
        </Link>
      </div>

      <CategoryGrid
        isLoading={isLoading}
        error={error}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        {categories.map((category) => (
          <CategoryCardCompact key={category.id} category={category} />
        ))}
      </CategoryGrid>
    </div>
  );
}
