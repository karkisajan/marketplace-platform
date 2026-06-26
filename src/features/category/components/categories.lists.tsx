'use client';

import Image from "next/image";
import Link from "next/link";
import { useCategories } from "../hooks/use-categories";

export default function CategoriesLists() {
  const { categories, loading, error } = useCategories(1, 50);
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium text-gray-600 tracking-widest">
          Categories
        </p>
        <Link
          className="text-xl transition-colors text-gray-600"
          href={`/categories/all`}
        >
          view all →
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {categories.slice(0, 7).map((category) => (
          <div
            key={`${category.id}`}
            className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <Image
              src="/icons/category.svg"
              alt="electronics"
              width={28}
              height={28}
              className="object-contain shrink-0"
            />
            <p className="text-lg text-gray-500 truncate">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
