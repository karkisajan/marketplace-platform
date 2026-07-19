"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Search,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const productImages = [
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80",
];

const colourOptions = [
  { name: "Natural", color: "#efe4d0", selected: true },
  { name: "Graphite", color: "#3f4753" },
  { name: "Pearl", color: "#d7dce2" },
  { name: "Ice Blue", color: "#ced9e4" },
];

const sizes = [
  "10-core CPU | 8-core GPU | 16GB | 512GB",
  "10-core CPU | 10-core GPU | 16GB | 1TB",
  "10-core CPU | 10-core GPU | 24GB | 1TB",
];

const specifications = [
  { label: "Product Type", value: "MacBook" },
  { label: "Display", value: "13.6-inch Liquid Retina (2560 × 1664)" },
  { label: "Processor", value: "Apple M5 Chip" },
  { label: "GPU", value: "Integrated Apple GPU (8-core / 10-core)" },
  { label: "RAM", value: "16GB (configurable)" },
  { label: "Storage", value: "256GB / 512GB / higher SSD options" },
  { label: "Operating System", value: "macOS" },
  { label: "Battery Life", value: "Up to 18 hours" },
  { label: "Build", value: "Aluminum Unibody (Fanless Design)" },
  { label: "Weight", value: "Approx. 1.24 kg" },
  { label: "Connectivity", value: "Wi‑Fi, Bluetooth" },
];

const reviewBars = [
  { label: "5 Stars", value: 0 },
  { label: "4 Stars", value: 0 },
  { label: "3 Stars", value: 0 },
  { label: "2 Stars", value: 0 },
  { label: "1 Stars", value: 0 },
];

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState<"details" | "review">("details");
  const [activeImage, setActiveImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-10">
        <div className="mb-5 flex items-center gap-2 text-sm text-neutral-500">
          <Link href="/" className="transition-colors hover:text-neutral-800">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-neutral-400" />
          <span className="font-medium text-neutral-800">Products</span>
          <ChevronRight className="h-4 w-4 text-neutral-400" />
          <span className="font-medium text-neutral-800">
            Apple MacBook Air M5 13&quot;
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-start">
          <section className="space-y-5">
            <div className="relative overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-sm">
              <button
                type="button"
                aria-label="Previous image"
                className="absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                className="absolute right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="relative aspect-5/4 w-full bg-white">
                <Image
                  src={activeImage}
                  alt="Apple MacBook Air M5 13 inch"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain p-5 sm:p-7"
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2.5">
              {productImages.map((image, index) => {
                const selected = activeImage === image;
                return (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={`relative overflow-hidden rounded-xl border bg-white p-2 transition-all ${
                      selected
                        ? "border-neutral-900 ring-1 ring-neutral-300"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <div className="relative aspect-4/3 w-full">
                      <Image
                        src={image}
                        alt={`Preview ${index + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

          </section>

          <section className="space-y-6">
            <div className="space-y-3">
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 text-sm text-neutral-600">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-700">
                  Laptops
                </span>
              </div>

              <h1 className="text-2xl font-semibold tracking-tight text-neutral-800 sm:text-[2.15rem]">
                Apple MacBook Air M5 13&quot;
              </h1>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-neutral-400 line-through">
                    Rs 2,80,000
                  </span>
                  <p className="text-3xl font-bold text-[#b32727]">
                    Rs 2,48,500
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm text-neutral-500">
                Shipping is calculated at checkout
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <h2 className="text-base font-semibold text-neutral-700">
                  Choose Colour
                </h2>
                <div className="mt-3 flex items-center gap-4">
                  {colourOptions.map((option) => (
                    <button
                      key={option.name}
                      type="button"
                      aria-label={option.name}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                        option.selected
                          ? "border-neutral-900 ring-2 ring-neutral-300"
                          : "border-transparent"
                      }`}
                    >
                      <span
                        className="h-7 w-7 rounded-full"
                        style={{ backgroundColor: option.color }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-base font-semibold text-neutral-700">
                  Choose Size
                </h2>
                <div className="mt-3 space-y-3">
                  {sizes.map((size) => {
                    const selected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-all sm:text-[0.98rem] ${
                          selected
                            ? "border-neutral-900 bg-neutral-50 text-neutral-900"
                            : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {selected ? (
                            <span className="text-neutral-900">✓</span>
                          ) : null}
                          <span>{size}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-12 items-center rounded-lg border border-neutral-200 bg-white">
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center text-neutral-700"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="flex h-12 w-12 items-center justify-center border-x border-neutral-200 text-base font-semibold">
                    1
                  </div>
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center text-neutral-700"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  id="add-to-cart-btn"
                  variant="outline"
                  size="default"
                  className="h-12 border-gray-900 text-gray-900 hover:bg-gray-100 font-medium px-6 text-base cursor-pointer"
                >
                  Add to cart
                </Button>
              </div>
            </div>

            <div className="space-y-4 border-t border-neutral-200 pt-6">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-neutral-800" />
                <h2 className="text-lg font-semibold text-neutral-800">
                  Description
                </h2>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800">
                Apple MacBook Air 13-inch (M5)
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                The Apple MacBook Air 13-inch (M5) is a lightweight and
                high-performance laptop designed for seamless everyday computing
                and professional productivity. Powered by the advanced M5 chip,
                it delivers fast processing, efficient multitasking, and
                improved graphics performance while maintaining a silent,
                fanless design.
              </p>
            </div>

          </section>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-8 border-b border-neutral-200">
            <button
              type="button"
              onClick={() => setActiveTab("details")}
              className={`relative pb-4 text-base font-medium transition-colors sm:text-lg ${
                activeTab === "details"
                  ? "text-[#b32727]"
                  : "text-[#b32727]/70 hover:text-[#b32727]"
              }`}
            >
              Details
              {activeTab === "details" ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#b32727]" />
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("review")}
              className={`relative pb-4 text-base font-medium transition-colors sm:text-lg ${
                activeTab === "review"
                  ? "text-[#b32727]"
                  : "text-[#b32727]/70 hover:text-[#b32727]"
              }`}
            >
              Review
              {activeTab === "review" ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#b32727]" />
              ) : null}
            </button>
          </div>

          {activeTab === "details" ? (
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-neutral-800 sm:text-xl">
                Key Specifications
              </h2>

              <div className="mt-5 overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="border-b border-r border-neutral-200 px-4 py-4 text-left font-semibold text-neutral-700 sm:px-5">
                        Specification
                      </th>
                      <th className="border-b border-neutral-200 px-4 py-4 text-left font-semibold text-neutral-700 sm:px-5">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((spec) => (
                      <tr key={spec.label}>
                        <td className="border-b border-r border-neutral-200 px-4 py-4 text-neutral-600 sm:px-5">
                          {spec.label}
                        </td>
                        <td className="border-b border-neutral-200 px-4 py-4 text-neutral-700 sm:px-5">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : (
            <section className="mt-8">
              <div className="rounded-2xl bg-neutral-50 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-800 sm:text-xl">
                      Reviews
                      <span className="ml-2 text-sm font-normal text-neutral-500">
                        (0.0 reviews for this product)
                      </span>
                    </h2>
                  </div>
                  <div className="flex items-center gap-1 text-base font-semibold text-neutral-900 sm:text-lg">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    0
                  </div>
                </div>

                <div className="mt-5 space-y-3.5">
                  {reviewBars.map((row) => (
                    <div key={row.label} className="flex items-center gap-4">
                      <div className="w-16 text-sm font-medium text-neutral-700 sm:text-base">
                        {row.label}
                      </div>
                      <div className="h-3 flex-1 rounded-full bg-neutral-200 sm:h-4">
                        <div className="h-3 w-0 rounded-full bg-neutral-900 sm:h-4" />
                      </div>
                      <div className="w-10 text-sm text-neutral-700 sm:text-base">
                        ({row.value})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      <button
        type="button"
        aria-label="WhatsApp support"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl"
      >
        <FaWhatsapp className="h-8 w-8" />
      </button>
    </div>
  );
}
