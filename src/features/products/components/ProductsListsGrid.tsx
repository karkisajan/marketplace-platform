"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductLists } from "../hooks/useProductLists";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  CategoryNode,
  filterLeafNodeCategories,
} from "@/common/utils/filter-leafCategories.util";
import { useCategoryTree } from "@/features/categories/hooks/useCategoryTree";
import {
  DATE_POSTED_OPTIONS,
  DatePostedTypeEnum,
} from "@/common/enums/date-filters.enum";
import { useState } from "react";
import { useDebouncedValue } from "@/common/hooks/useDebouncedValue";

export default function ProductListsGrid() {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch: string = useDebouncedValue(search, 400);

  const [minPrice, setMinPrice] = useState<string>("");
  const debouncedMinPrice: string = useDebouncedValue(minPrice, 400);

  const [maxPrice, setMaxPrice] = useState<string>("");
  const debouncedMaxPrice: string = useDebouncedValue(maxPrice, 400);

  const [datePosted, setDatePosted] = useState<DatePostedTypeEnum>(DatePostedTypeEnum.ANY_TIME,);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const {
    products,
    isLoading,
    error,
    hasNextPage,
    loadMoreProducts,
    isLoadingMore,
  } = useProductLists({
    limit: 12,
    search: debouncedSearch || undefined,
    datePosted: datePosted,
    categoryId: selectedCategory || undefined,
    minPrice: debouncedMinPrice ? Number(debouncedMinPrice) : undefined,
    maxPrice: debouncedMaxPrice ? Number(debouncedMaxPrice) : undefined,
  });

  const { categories } = useCategoryTree();
  const leafCategories: CategoryNode[] = filterLeafNodeCategories(categories);

  return (
    <div className="relative mx-auto flex w-full max-w-[1700px] flex-col gap-6 px-4 py-4 sm:px-6 lg:px-10">
      <section className="relative overflow-hidden rounded-[20px] bg-linear-to-r from-[#951d1d] via-[#b32727] to-[#c5413d] px-6 py-8 text-white shadow-sm sm:px-8 sm:py-10 lg:px-10 lg:py-10">
        <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Have Something to sell or offer?
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              Join thousands of sellers who have found buyers through our
              platform.
            </p>
          </div>
          <div className="relative flex min-h-40 items-center justify-center lg:min-h-52">
            <div className="absolute inset-x-8 bottom-0 h-16 rounded-full bg-white/15 blur-2xl" />
            <div className="relative h-44 w-64 rounded-[20px] border border-white/10 bg-[#f6e3c2]/95 shadow-2xl">
              <div className="flex items-center gap-1.5 rounded-t-[20px] bg-[#ea7070] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-white/90" />
                <span className="h-2 w-2 rounded-full bg-white/90" />
                <span className="h-2 w-2 rounded-full bg-white/90" />
              </div>
              <div className="grid h-[calc(100%-36px)] grid-cols-3 gap-2 px-4 py-4">
                <div className="rounded-lg bg-white/75" />
                <div className="rounded-full bg-[#f2c552]" />
                <div className="rounded-lg bg-white/75" />
                <div className="rounded-lg bg-white/75" />
                <div className="rounded-lg bg-white/75" />
                <div className="rounded-lg bg-white/75" />
              </div>
              <div className="absolute left-1/2 top-1/2 h-24 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[999px_999px_28px_28px] bg-[#f3b63e]" />
              <div className="absolute bottom-6 left-1/2 h-18 w-22 -translate-x-1/2 rounded-[30px_30px_14px_14px] bg-[#f06b71]" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Sidebar Section */}
      <div className="grid gap-6 xl:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="self-start rounded-md border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold tracking-tight text-neutral-900">
              FILTER BY:
            </p>
          </div>
          <hr className="my-4 border-gray-200" />

          {/* Filters section (Pricing/Categories/DateFields/Searching) */}
          <div className="mt-4 space-y-5">
            {/* Filter by categories */}
            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-800">
                Category
              </h3>
              <Select
                value={selectedCategory || "all-categories"}
                onValueChange={(val) =>
                  setSelectedCategory(val === "all-categories" ? "" : val)
                }
              >
                <SelectTrigger className="h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-800 shadow-sm data-[size=default]:h-10">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-categories">All Categories</SelectItem>
                  {leafCategories.map((leafCategory) => (
                    <SelectItem key={leafCategory.id} value={leafCategory.id}>
                      {leafCategory.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </section>

            {/* Filter by products price range */}
            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-800">
                Price Range
              </h3>
              <div className="space-y-2">
                <Input
                  type="number"
                  placeholder="Min price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="h-10 rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)] placeholder:text-neutral-400 focus-visible:ring-0"
                />
                <Input
                  type="number"
                  placeholder="1000000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="h-10 rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)] placeholder:text-neutral-400 focus-visible:ring-0"
                />
              </div>
            </section>

            {/* Filter by date posted */}
            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-800">
                Date Posted
              </h3>
              <div className="space-y-2 text-sm text-neutral-900">
                {DATE_POSTED_OPTIONS.map((dateOption) => (
                  <label
                    key={dateOption.label}
                    className="flex cursor-pointer items-center gap-2.5"
                  >
                    <input
                      type="radio"
                      name="date-posted"
                      className="peer sr-only"
                      checked={datePosted === dateOption.value}
                      value={dateOption.value}
                      onChange={() => setDatePosted(dateOption.value)}
                    />
                    <span className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-neutral-800 text-transparent transition-colors peer-checked:bg-white peer-checked:text-neutral-900 text-xs">
                      ✓
                    </span>
                    <span>{dateOption.label}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* Filter by searching through the products */}
        <div className="space-y-4">
          <section className="space-y-3">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-1 items-center gap-2">
                <div className="flex h-10 flex-1 items-center gap-2.5 rounded-lg border border-neutral-200 bg-white px-3 shadow-sm">
                  <Search className="h-4 w-4 text-neutral-400" />
                  <Input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="h-auto border-0 bg-transparent p-0 text-sm text-neutral-800 shadow-none placeholder:text-neutral-400 focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Filter by products creation age */}
              <div className="flex items-center gap-2">
                <Select defaultValue="newest">
                  <SelectTrigger className="h-10 w-full min-w-44 rounded-lg border border-neutral-200 bg-white px-3 text-sm text-neutral-800 shadow-sm data-[size=default]:h-10">
                    <SelectValue placeholder="Newest First" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section>
            <div className="relative">
              {isLoading && products.length === 0 ? (
                <div className="flex items-center justify-center py-20">
                  <Spinner className="size-8 text-neutral-400" />
                </div>
              ) : error ? (
                <p className="text-sm text-red-500">
                  Couldn&apos;t load products. Please try again later.
                </p>
              ) : products.length === 0 ? (
                <div className="flex items-center-safe justify-center py-20">
                  <p className="text-xl text-gray-400">No products found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>

            {/* Load more products if nextPageCursorValue exists */}
            {hasNextPage && (
              <div className="flex justify-center mt-6">
                <Button
                  onClick={loadMoreProducts}
                  id="register-customer-btn"
                  variant="outline"
                  size="default"
                  className="flex items-center justify-center h-10 border-gray-900 text-gray-900 hover:bg-gray-100 font-medium px-6 text-base cursor-pointer"
                >
                  {isLoadingMore ? "Loading..." : "Load more products"}
                </Button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
