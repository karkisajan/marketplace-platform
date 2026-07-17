"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CategoryCard from "./CategoryCard";
import { useCategoryLists } from "../hooks/useCategoryLists";
import { Spinner } from "@/components/ui/spinner";

export default function HomePageCategoriesLists() {
  const { categories, isLoading, error } = useCategoryLists({
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

      {/* Categories Lists */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Spinner className="size-8 text-neutral-400" />
        </div>
      ) : error ? (
        <p className="text-sm text-red-500">
          Couldn&apos;t load categories. Please try again later.
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}
