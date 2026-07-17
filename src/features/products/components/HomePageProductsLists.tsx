'use client'
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { useProductLists } from "../hooks/useProductLists";
import { Spinner } from "@/components/ui/spinner";

export default function HomePageProductsLists() {
  const { products, isLoading, error } = useProductLists({ limit: 12 });

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Latest in market</p>

        <Link href={`/products`}>
          <span className="flex items-center justify-center space-x-2">
            <p>Browse more Products</p>
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>

      {/* Product Lists Response */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Spinner className="size-8 text-neutral-400" />
        </div>
      ) : error ? (
        <p className="text-sm text-red-500">
          Couldn&apos;t load products. Please try again later.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
