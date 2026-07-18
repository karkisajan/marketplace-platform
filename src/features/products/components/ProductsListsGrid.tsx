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

      <div className="grid gap-6 xl:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="self-start rounded-md border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold tracking-tight text-neutral-900">
              FILTER BY:
            </p>
            <button
              type="button"
              className="cursor-pointer rounded-md px-2 py-1 text-xs font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
            >
              Reset filters
            </button>
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="mt-4 space-y-5">
            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-800">
                Category
              </h3>
              <Select defaultValue="all-categories">
                <SelectTrigger className="h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-800 shadow-sm data-[size=default]:h-10">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-categories">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="home-garden">Home & Garden</SelectItem>
                </SelectContent>
              </Select>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-800">
                Price Range
              </h3>
              <div className="space-y-2">
                <Input
                  type="number"
                  placeholder="Min price"
                  className="h-10 rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)] [appearance:textfield] placeholder:text-neutral-400 focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <Input
                  type="number"
                  placeholder="1000000"
                  className="h-10 rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)] [appearance:textfield] placeholder:text-neutral-400 focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-800">
                Date Posted
              </h3>
              <div className="space-y-2 text-sm text-neutral-900">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-neutral-800 text-xs text-neutral-900">
                    ✓
                  </span>
                  <span>Any time</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-neutral-300 text-xs text-transparent">
                    ✓
                  </span>
                  <span>Today</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-neutral-300 text-xs text-transparent">
                    ✓
                  </span>
                  <span>This week</span>
                </div>
              </div>
            </section>
          </div>
        </aside>

        <div className="space-y-4">
          <section className="space-y-3">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-1 items-center gap-2">
                <div className="flex h-10 flex-1 items-center gap-2.5 rounded-lg border border-neutral-200 bg-white px-3 shadow-sm">
                  <Search className="h-4 w-4 text-neutral-400" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="h-auto border-0 bg-transparent p-0 text-sm text-neutral-800 shadow-none placeholder:text-neutral-400 focus-visible:ring-0"
                  />
                </div>
              </div>

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

          <section>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"></div>
          </section>
        </div>
      </div>
    </div>
  );
}
