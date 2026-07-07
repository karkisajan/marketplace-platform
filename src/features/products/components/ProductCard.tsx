"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="relative aspect-16/10 w-full bg-neutral-50">
        <Image
          sizes="(max-width: 768px) 50vw, 25vw"
          src={""}
          alt={""}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="space-y-3 px-4 py-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-neutral-900">
          Electronics
        </h3>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#8B1A1A]">
              Rs.10,000
            </span>
            <span className="text-sm font-light text-neutral-400 line-through">
              Rs.5,000
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <div className="flex items-center gap-1">
              <span className="font-semibold text-neutral-800">4.5</span>
              <span className="text-neutral-400">(22)</span>
            </div>
          </div>
        </div>

        <Button
          id="add-to-cart-btn"
          variant="outline"
          size="default"
          className="h-10 border-gray-900 text-gray-900 hover:bg-gray-100 font-medium px-6 text-base cursor-pointer"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
