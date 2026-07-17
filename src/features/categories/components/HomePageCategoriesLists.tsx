"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePageCategoriesLists() {
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
      <div className="grid grid-cols-4 gap-x-5 gap-y-10">
        {/* Category list items removed */}
      </div>
    </div>
  );
}
