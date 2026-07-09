"use client";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useCategories } from "../hooks/useCategories";
import CategoryCard from "./CategoryCard";

export default function CategoriesListsGrid() {
  const { categories, isLoading, error } = useCategories({
    initialPage: 1,
    initialLimit: 140,
  });

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Categories</p>
      </div>

      {/* Loading spinner state */}
      {isLoading && <LoadingSpinner />}

      {/* Error handler state */}
      {!isLoading && error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {/* Categories Lists */}
      {!isLoading && !error && (
        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}
