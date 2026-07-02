"use client";

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useCategories } from "@/features/category/hooks/useCategories";
import { ArrowRight, BadgeIcon } from "lucide-react";
import Link from "next/link";

export default function CategoriesPage() {
  const { categories, isLoading, error } = useCategories({
    initialPage: 1,
    initialLimit: 8,
  });

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl font-medium text-gray-800 mb-2">Categories</h2>
        <Link className="no-underline hover:underline" href={`/categories/all`}>
          <span className="flex justify-center items-center gap-1">
            <p>See more categories</p> <ArrowRight size={16} />
          </span>
        </Link>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-5">
          <LoadingSpinner />;
        </div>
      ) : error ? (
        <div>
          <p className="text-red-500 text-center">{error}</p>;
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center gap-2 p-1 rounded-md border border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer group"
            >
              <div className="relative size-16 shrink-0 rounded-lg flex items-center justify-center text-red-500 overflow-hidden">
                <BadgeIcon />
              </div>
              <div className="flex-1 min-w-5">
                <span className="block font-medium text-lg text-gray-500 truncat transition-colors">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
