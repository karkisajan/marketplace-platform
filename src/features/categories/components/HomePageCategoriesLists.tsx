"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CategoryCard from "./CategoryCard";
import { useCategories } from "../hooks/useCategories";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function HomePageCategoriesLists() {
  const { categories, isLoading, error } = useCategories({
    initialPage: 1,
    initialLimit: 8,
  });
  
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Browse Categories</p>
        <Link href={`/categories`}>
          <span className="flex items-center justify-center space-x-2">
            <p>Browse more categories</p>
            <ArrowRight size={16} />
          </span>
        </Link>
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
