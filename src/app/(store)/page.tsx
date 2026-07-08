import {
  MapPin,
} from "lucide-react";
import HomePageCategoriesLists from "@/features/categories/components/HomePageCategoriesLists";
import HomePageProductsLists from "@/features/products/components/HomePageProductsLists";

export default function StorePage() {
  return (
    <div>
      <section className="px-4 pt-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1700px]">
          <div className="relative overflow-hidden rounded-md border border-[#d8def0] bg-[#f6f7fb] px-6 py-10 text-[#313b77] shadow-sm sm:px-10 sm:py-12 lg:px-12 lg:py-16">
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-2xl">
                <h1 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Discover what&apos;s nearby
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#56618f] sm:text-xl">
                  Find local Products, Categories and Businesses in one clean
                  marketplace.
                </p>
              </div>
              <div className="relative flex min-h-60 items-center justify-center lg:min-h-80">
                <div className="absolute inset-x-10 bottom-8 h-24 rounded-full bg-[#c8d2ee]/45 blur-3xl" />
                <div className="relative h-70 w-90 rounded-[32px] border border-[#d9def0] bg-white shadow-2xl sm:h-80 sm:w-107.5">
                  <div className="flex items-center gap-1.5 rounded-t-[32px] bg-[#eef2fb] px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-[#d5dbef]" />
                    <span className="h-3 w-3 rounded-full bg-[#d5dbef]" />
                    <span className="h-3 w-3 rounded-full bg-[#d5dbef]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center px-6 pt-10">
                    <svg
                      viewBox="0 0 560 300"
                      className="h-full w-full max-w-125"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="nepalBase" x1="0" x2="1">
                          <stop offset="0%" stopColor="#9aa2cb" />
                          <stop offset="55%" stopColor="#515a99" />
                          <stop offset="100%" stopColor="#2f386f" />
                        </linearGradient>
                      </defs>
                      <g transform="translate(18 18) rotate(10 250 120)">
                        <polygon
                          points="10,120 55,70 108,54 163,58 202,33 259,40 306,36 348,62 402,56 452,78 493,108 478,152 428,170 380,162 331,179 281,165 236,174 189,166 141,178 92,161 54,149 24,143"
                          fill="url(#nepalBase)"
                          stroke="#ffffff"
                          strokeWidth="3"
                          strokeLinejoin="round"
                        />
                        <polygon
                          points="55,70 108,54 163,58 145,103 92,96"
                          fill="#7178a7"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <polygon
                          points="145,103 202,33 259,40 248,86 199,107"
                          fill="#343c7a"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <polygon
                          points="248,86 306,36 348,62 331,101 281,116"
                          fill="#343c7a"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <polygon
                          points="331,101 402,56 452,78 428,122 380,136"
                          fill="#6e76a8"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <polygon
                          points="92,96 145,103 141,178 92,161 54,149 24,143 10,120 55,114"
                          fill="#8f97c2"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <polygon
                          points="199,107 248,86 281,116 236,174 189,166 178,136"
                          fill="#8b93c0"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <polygon
                          points="281,116 331,101 380,136 331,179 281,165 236,174"
                          fill="#3e4887"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <polygon
                          points="380,136 428,122 478,152 452,187 402,193 331,179"
                          fill="#7c85b4"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <g transform="translate(120 92)">
                          <MapPin className="h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-[#ef5350]" />
                        </g>
                        <g transform="translate(230 70)">
                          <MapPin className="h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-[#ef5350]" />
                        </g>
                        <g transform="translate(330 98)">
                          <MapPin className="h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-[#ef5350]" />
                        </g>
                        <g transform="translate(405 125)">
                          <MapPin className="h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-[#ef5350]" />
                        </g>
                        <g transform="translate(280 150)">
                          <MapPin className="h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-[#ef5350]" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
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
