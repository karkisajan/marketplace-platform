'use client'

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useCategories } from "@/features/category/hooks/useCategories";
import { BadgeIcon } from "lucide-react";

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
      {isLoading ? (
        <div className="flex items-center justify-center p-5">
          <LoadingSpinner />;
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white hover:border-gray-400 hover:shadow-md transition-all duration-200 cursor-pointer group text-center aspect-square"
            >
              <div className="relative size-24 rounded-2x flex items-center justify-center text-red-500 overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-200">
                <BadgeIcon />
              </div>
              <span className="block text-base font-semibold text-gray-900 line-clamp-2 px-2 transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
