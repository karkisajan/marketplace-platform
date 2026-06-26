"use client";

import Image from "next/image";
import { useCategories } from "../hooks/use-categories";

export default function AllCategories() {
  const { categories, loading, error } = useCategories(1, 50);
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((category) => (
          <div
            key={`${category.id}`}
            className="group flex flex-col items-center rounded-2xl bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="mb-4">
              <Image
                src="/icons/category.svg"
                alt="Electronics"
                width={72}
                height={72}
                className="object-contain"
              ></Image>
            </div>
            <p className="text-lg text-gray-500">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
