"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Product } from "../types/product-lists.types";
import Link from "next/link";

const FALLBACK_IMAGE = "/icons/category.svg";
interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  const [imgSrc, setImgSrc] = useState<string>(
    product.productVariant.productImage.imageUrl || FALLBACK_IMAGE,
  );
  const isFallback: boolean = imgSrc === FALLBACK_IMAGE;

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group relative w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-xs transition-all duration-300 hover:shadow-md">
        <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-50">
          <Image
            sizes="(max-width: 768px) 50vw, 25vw"
            src={imgSrc}
            alt={product.name}
            fill
            className={`transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
              isFallback ? "object-contain p-8 bg-neutral-100" : "object-cover"
            }`}
            onError={() => setImgSrc(FALLBACK_IMAGE)}
          />
        </div>
        <div className="p-3.5 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="line-clamp-1 text-sm font-semibold leading-snug text-neutral-800 group-hover:text-[#b32727] transition-colors">
              {product.name}
            </h3>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-baseline gap-1.5">
              {product.productVariant.crossPrice && (
                <span className="text-xs text-neutral-400 line-through">
                  Rs.
                  {Number(product.productVariant.crossPrice).toLocaleString()}
                </span>
              )}
              <span className="text-sm font-bold text-[#b32727]">
                Rs.
                {Number(product.productVariant.sellingPrice).toLocaleString()}
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs text-neutral-500 shrink-0">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-neutral-800">
                {product.averageRatings.toFixed(1)}
              </span>
              <span>({product.totalReviews})</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
