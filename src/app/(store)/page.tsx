import HomePageCategoriesLists from "@/features/categories/components/HomePageCategoriesLists";
import HomePageProductsLists from "@/features/products/components/HomePageProductsLists";

export default function StorePage() {
  return (
    <div>
      <section className="px-4 pt-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1700px]">
          <div className="relative overflow-hidden rounded-md border border-[#d8def0] bg-[#f6f7fb] px-6 py-14 text-[#313b77] shadow-sm sm:px-10 sm:py-16 lg:px-12 lg:py-20">
            {/* Subtle decorative background elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d8def0]/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#c8d2ee]/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Discover what&apos;s nearby
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#56618f] sm:text-xl">
                Find local Products, Categories and Businesses in one clean
                marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products and Categories Section */}
      <section>
        <div className="max-w-7xl mx-auto px-10 mt-25">
          <HomePageCategoriesLists />
        </div>
        <div className="max-w-7xl mx-auto px-10 py-15">
          <HomePageProductsLists />
        </div>
      </section>
    </div>
  );
}
