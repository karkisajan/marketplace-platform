"use client";
import { Spinner } from "@/components/ui/spinner";
import { useCategoryLists } from "../hooks/useCategoryLists";
import CategoryCard from "./CategoryCard";

export default function CategoriesListsGrid() {
  const { categories, isLoading, error } = useCategoryLists({
    initialPage: 1,
    initialLimit: 20,
  });

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Categories</p>
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
