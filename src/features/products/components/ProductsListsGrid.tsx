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

export default function ProductListsGrid() {
  return (
    <div className="relative mx-auto flex w-full max-w-[1700px] flex-col gap-7 px-4 py-5 sm:px-6 lg:px-10">
      <section className="relative overflow-hidden rounded-[28px] bg-linear-to-r from-[#951d1d] via-[#b32727] to-[#c5413d] px-6 py-10 text-white shadow-sm sm:px-10 sm:py-12 lg:px-12 lg:py-16">
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Have Something to sell or offer?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Join thousands of sellers who have found buyers through our
              platform.
            </p>
          </div>

          <div className="relative flex min-h-55 items-center justify-center lg:min-h-70">
            <div className="absolute inset-x-8 bottom-0 h-24 rounded-full bg-white/15 blur-2xl" />
            <div className="relative h-57.5 w-82.5 rounded-[28px] border border-white/10 bg-[#f6e3c2]/95 shadow-2xl">
              <div className="flex items-center gap-1.5 rounded-t-[28px] bg-[#ea7070] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-white/90" />
                <span className="h-3 w-3 rounded-full bg-white/90" />
                <span className="h-3 w-3 rounded-full bg-white/90" />
              </div>
              <div className="grid h-[calc(100%-48px)] grid-cols-3 gap-3 px-5 py-5">
                <div className="rounded-xl bg-white/75" />
                <div className="rounded-full bg-[#f2c552]" />
                <div className="rounded-xl bg-white/75" />
                <div className="rounded-xl bg-white/75" />
                <div className="rounded-xl bg-white/75" />
                <div className="rounded-xl bg-white/75" />
              </div>
              <div className="absolute left-1/2 top-1/2 h-30 w-47.5 -translate-x-1/2 -translate-y-1/2 rounded-[999px_999px_36px_36px] bg-[#f3b63e]" />
              <div className="absolute bottom-10 left-1/2 h-24 w-28 -translate-x-1/2 rounded-[40px_40px_18px_18px] bg-[#f06b71]" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Sidebar Section */}
      <div className="grid gap-8 xl:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="self-start rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <p className="text-xl font-semibold tracking-tight text-neutral-900">
              FILTER BY:
            </p>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="mt-7 space-y-7">
            <section className="space-y-4">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Category
              </h3>
              <Select defaultValue="all-categories">
                <SelectTrigger className="h-12 w-full rounded-md border border-neutral-200 bg-white px-4 text-[15px] text-neutral-800 shadow-sm data-[size=default]:h-12">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-categories">All Categories</SelectItem>
                </SelectContent>
              </Select>
            </section>

            <section className="space-y-4">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Price Range
              </h3>

              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Min price"
                  className="h-12 rounded-md border-neutral-200 bg-white px-4 text-[15px] text-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.04)] placeholder:text-neutral-400 focus-visible:ring-0"
                />
                <Input
                  type="text"
                  placeholder="1000000"
                  className="h-12 rounded-md border-neutral-200 bg-white px-4 text-[15px] text-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.04)] placeholder:text-neutral-400 focus-visible:ring-0"
                />
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-[17px] font-semibold text-neutral-900">
                Date Posted
              </h3>

              <div className="space-y-3 text-[16px] text-neutral-900">
                {[
                  "Any time",
                  "Last 24 hours",
                  "Last 15 days",
                  "Last 30 days",
                ].map((label, index) => (
                  <label
                    key={label}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input
                      type="radio"
                      name="date-posted"
                      defaultChecked={index === 0}
                      className="peer sr-only"
                    />
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-neutral-800 text-transparent transition-colors peer-checked:bg-white peer-checked:text-neutral-900">
                      ✓
                    </span>
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* Search and Filters Section */}
        <div className="space-y-5">
          <section className="space-y-4">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-1 items-center gap-3">
                <div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 shadow-sm">
                  <Search className="h-5 w-5 text-neutral-400" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="h-auto border-0 bg-transparent p-0 text-[15px] text-neutral-800 shadow-none placeholder:text-neutral-400 focus-visible:ring-0"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Select defaultValue="newest">
                  <SelectTrigger className="h-12 w-full min-w-55 rounded-2xl border border-neutral-200 bg-white px-4 text-[15px] text-neutral-800 shadow-sm data-[size=default]:h-12">
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
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {/* <ProductCard /> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
