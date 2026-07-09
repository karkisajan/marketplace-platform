"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Product } from "../types/product.types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="relative aspect-4/3 w-full bg-neutral-50">
        <Image
          sizes="(max-width: 768px) 50vw, 25vw"
          src={product.productVariant.productImage.imageUrl}
          alt={""}
          fill
          className="object-cover p-4 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="space-y-3 px-4 py-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-neutral-900">
          {product.name}
        </h3>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#8B1A1A]">
              Rs.{product.productVariant.sellingPrice}
            </span>
            <span className="text-sm font-light text-neutral-400 line-through">
              Rs.{product.productVariant.crossPrice}
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
      </div>
    </div>
  );
}
