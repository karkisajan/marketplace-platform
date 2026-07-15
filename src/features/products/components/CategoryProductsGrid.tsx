"use client";
import { ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { Product } from "../types/product-lists.types";
import Link from "next/link";

const FAKE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "2/2/1 Sofa Set",
    slug: "2-2-1-sofa-set",
    createdAt: "2024-01-01",
    averageRatings: 4.5,
    totalReviews: 12,
    productVariant: {
      id: "v1",
      sellingPrice: "19500",
      crossPrice: "24500",
      productImage: { id: "i1", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
    },
  },
  {
    id: "2",
    name: "2/2/2 Sofa",
    slug: "2-2-2-sofa",
    createdAt: "2024-01-02",
    averageRatings: 4.2,
    totalReviews: 8,
    productVariant: {
      id: "v2",
      sellingPrice: "24500",
      crossPrice: "30500",
      productImage: { id: "i2", imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=300&fit=crop" },
    },
  },
  {
    id: "3",
    name: "Corner Sofa Modern",
    slug: "corner-sofa-modern",
    createdAt: "2024-01-03",
    averageRatings: 4.8,
    totalReviews: 21,
    productVariant: {
      id: "v3",
      sellingPrice: "27000",
      crossPrice: "35500",
      productImage: { id: "i3", imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=300&fit=crop" },
    },
  },
  {
    id: "4",
    name: "Study Table Wooden",
    slug: "study-table-wooden",
    createdAt: "2024-01-04",
    averageRatings: 4.0,
    totalReviews: 5,
    productVariant: {
      id: "v4",
      sellingPrice: "12500",
      crossPrice: "18500",
      productImage: { id: "i4", imageUrl: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c5?w=400&h=300&fit=crop" },
    },
  },
  {
    id: "5",
    name: "Premium Sofa Sale",
    slug: "premium-sofa-sale",
    createdAt: "2024-01-05",
    averageRatings: 4.6,
    totalReviews: 17,
    productVariant: {
      id: "v5",
      sellingPrice: "21500",
      crossPrice: "26000",
      productImage: { id: "i5", imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop" },
    },
  },
  {
    id: "6",
    name: "6/6 Ko 3 Pic Darax",
    slug: "6-6-ko-3-pic-darax",
    createdAt: "2024-01-06",
    averageRatings: 3.9,
    totalReviews: 3,
    productVariant: {
      id: "v6",
      sellingPrice: "36500",
      crossPrice: "40500",
      productImage: { id: "i6", imageUrl: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=400&h=300&fit=crop" },
    },
  },
  {
    id: "7",
    name: "Waithong Chair Set",
    slug: "waithong-chair-set",
    createdAt: "2024-01-07",
    averageRatings: 4.3,
    totalReviews: 9,
    productVariant: {
      id: "v7",
      sellingPrice: "14300",
      crossPrice: "18000",
      productImage: { id: "i7", imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop" },
    },
  },
  {
    id: "8",
    name: "L-Shape Sofa Gray",
    slug: "l-shape-sofa-gray",
    createdAt: "2024-01-08",
    averageRatings: 4.7,
    totalReviews: 14,
    productVariant: {
      id: "v8",
      sellingPrice: "32000",
      crossPrice: "42000",
      productImage: { id: "i8", imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
    },
  },
  {
    id: "9",
    name: "Dining Table 6 Seater",
    slug: "dining-table-6-seater",
    createdAt: "2024-01-09",
    averageRatings: 4.4,
    totalReviews: 7,
    productVariant: {
      id: "v9",
      sellingPrice: "45000",
      crossPrice: "58000",
      productImage: { id: "i9", imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop" },
    },
  },
  {
    id: "10",
    name: "Office Chair Ergonomic",
    slug: "office-chair-ergonomic",
    createdAt: "2024-01-10",
    averageRatings: 4.1,
    totalReviews: 11,
    productVariant: {
      id: "v10",
      sellingPrice: "9800",
      crossPrice: "13500",
      productImage: { id: "i10", imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop" },
    },
  },
];

const FAKE_SUBCATEGORIES = [
  { id: "s1", label: "Sofas" },
  { id: "s2", label: "Tables" },
  { id: "s3", label: "Chairs" },
  { id: "s4", label: "Beds" },
  { id: "s5", label: "Wardrobes" },
];

export default function CategoryProductsGrid() {
  return (
    <div className="mx-auto max-w-[1700px] px-4 py-6 sm:px-6 lg:px-10">
      {/* Breadcrumb */}
      <nav className="mb-5 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition-colors hover:text-neutral-800">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
        <span className="font-medium text-neutral-800">Home &amp; Living</span>
      </nav>

      {/* Top filter bar */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {/* Subcategory dropdown */}
        <Select defaultValue="all">
          <SelectTrigger className="h-10 w-48 rounded-md border border-neutral-200 bg-white text-sm text-neutral-800 shadow-sm data-[size=default]:h-10">
            <SelectValue placeholder="All Subcategories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subcategories</SelectItem>
            {FAKE_SUBCATEGORIES.map((sub) => (
              <SelectItem key={sub.id} value={sub.id}>
                {sub.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex-1" />

        {/* Sort dropdown */}
        <Select defaultValue="newest">
          <SelectTrigger className="h-10 w-44 rounded-md border border-neutral-200 bg-white text-sm text-neutral-800 shadow-sm data-[size=default]:h-10">
            <SelectValue placeholder="Newest First" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

        {/* Search */}
        <div className="flex h-10 w-64 items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 shadow-sm">
          <Search className="h-4 w-4 shrink-0 text-neutral-400" />
          <Input
            type="text"
            placeholder="Search products..."
            className="h-auto border-0 bg-transparent p-0 text-sm text-neutral-800 shadow-none placeholder:text-neutral-400 focus-visible:ring-0"
          />
        </div>
      </div>

      {/* Category heading */}
      <h1 className="mb-5 text-3xl font-bold tracking-tight text-neutral-900">
        Category: <span className="font-semibold">Home &amp; Living</span>
      </h1>

      {/* Buying guide box */}
      <div className="mb-8 rounded-xl border border-neutral-200 bg-white px-7 py-6 shadow-sm">
        <h2 className="mb-2 text-base font-semibold text-neutral-900">
          Buying Guide for Home &amp; Living
        </h2>
        <p className="text-sm leading-relaxed text-neutral-500">
          Explore Home &amp; Living listings in Nepal on Marketplace. Discover
          products and services from local sellers, compare prices, and connect
          directly to ask about condition, availability, and delivery. Whether
          you are buying something new or looking for affordable used options,
          this category helps you find relevant listings faster with practical
          filters for budget and location.
        </p>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {FAKE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load more */}
      <div className="mt-10 flex justify-center">
        <Button
          variant="outline"
          className="h-11 border-neutral-300 px-8 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
        >
          Load more products
        </Button>
      </div>
    </div>
  );
}
