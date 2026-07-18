"use client";
import { ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/features/products/components/ProductCard";
import { useCategoryProductLists } from "../hooks/useCategoryProductLists";
import { Spinner } from "@/components/ui/spinner";
import { useCategoryTree } from "../hooks/useCategoryTree";
import { filterLeafNodesUnderParent } from "@/common/utils/filter-leafCategories.util";
import { CategoryNode } from "../types/category-tree.types";
import { useState } from "react";
import { useDebouncedValue } from "@/common/hooks/useDebouncedValue";

interface PageProps {
  slug: string;
}

export default function CategoryProductsGrid({ slug }: PageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>("");

  const [search, setSearch] = useState<string | undefined>("");
  const debouncedSearch: string | undefined = useDebouncedValue(search, 400);

  const {
    categoryProducts,
    isLoading,
    error,
    hasNextPage,
    isLoadingMore,
    loadMoreCategoryProductLists,
  } = useCategoryProductLists({
    slug: slug,
    limit: 20,
    search: debouncedSearch,
    categoryId: selectedCategory,
  });

  const { categories } = useCategoryTree();
  const leafCategories: CategoryNode[] = filterLeafNodesUnderParent(
    categories,
    categoryProducts?.id,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-10">
      <nav className="mb-5 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition-colors hover:text-neutral-800">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
        <span className="font-medium text-neutral-800">
          {categoryProducts?.name}
        </span>
      </nav>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Select
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
          defaultValue="all"
        >
          <SelectTrigger className="h-10 w-48 rounded-md border border-neutral-200 bg-white text-sm text-neutral-800 shadow-sm data-[size=default]:h-10">
            <SelectValue placeholder="All Subcategories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subcategories</SelectItem>
            {leafCategories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex-1" />
        <Select defaultValue="newest">
          <SelectTrigger className="h-10 w-44 rounded-md border border-neutral-200 bg-white text-sm text-neutral-800 shadow-sm data-[size=default]:h-10">
            <SelectValue placeholder="Newest First" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex h-10 w-64 items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 shadow-sm">
          <Search className="h-4 w-4 shrink-0 text-neutral-400" />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            placeholder="Search products..."
            className="h-auto border-0 bg-transparent p-0 text-sm text-neutral-800 shadow-none placeholder:text-neutral-400 focus-visible:ring-0"
          />
        </div>
      </div>
      <h1 className="mb-5 text-3xl font-bold tracking-tight text-neutral-900">
        Category:{" "}
        <span className="font-semibold">{categoryProducts?.name}</span>
      </h1>
      <div className="mb-8 rounded-xl border border-neutral-200 bg-white px-7 py-6 shadow-sm">
        <h2 className="mb-2 text-base font-semibold text-neutral-900">
          {categoryProducts?.shortDescription}
        </h2>
        <p className="text-sm leading-relaxed text-neutral-500">
          {categoryProducts?.longDescription}
        </p>
      </div>

      {/* Products Lists */}
      {isLoading &&
      (!categoryProducts || categoryProducts.products.length === 0) ? (
        <div className="flex min-h-80 items-center justify-center rounded-2xl border border-neutral-200 bg-white">
          <Spinner className="size-8 text-neutral-400" />
        </div>
      ) : error ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          Couldn&apos;t load products. Please try again later.
        </p>
      ) : !categoryProducts || categoryProducts.products.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-neutral-200 bg-white px-4 py-10 text-center text-lg text-gray-500">
          No products found.
        </p>
      ) : (
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categoryProducts.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {hasNextPage && (
        <div className="mt-10 flex justify-center">
          <Button
            onClick={loadMoreCategoryProductLists}
            variant="outline"
            className="h-11 cursor-pointer border-neutral-300 px-8 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
          >
            {isLoadingMore ? "Loading..." : "Load more products"}
          </Button>
        </div>
      )}
    </div>
  );
}
