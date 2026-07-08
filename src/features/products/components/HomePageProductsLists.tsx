"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function HomePageProductsLists() {
  const { products, isLoading, error } = useProducts({ limit: 8 });

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

      {/* Loading spinner component */}
      {isLoading && <LoadingSpinner />}

      {/* Error response (If API fails) */}
      {!isLoading && error && (
        <p role="alert" className="text-center text-red-500">
          {error}
        </p>
      )}

      {/* Populate the Product Lists */}
      {!isLoading && !error && (
        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
