"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Category } from "../types/category-lists.types";
import { useState } from "react";

interface CategoryProps {
  category: Category;
}

const FALLBACK_IMAGE = "/icons/category.svg";

export default function CategoryCard({ category }: CategoryProps) {
  const [imgSrc, setImgSrc] = useState<string>(category.imageUrl || FALLBACK_IMAGE);
  const isFallback: boolean = imgSrc === FALLBACK_IMAGE;

  return (
    <div className="group relative block aspect-16/10 w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
      <Image
        src={imgSrc}
        alt={category.name || "Category"}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className={`transition-transform duration-500 ease-out group-hover:scale-[1.06] ${
          isFallback ? "object-contain p-8 bg-neutral-800" : "object-cover"
        }`}
        onError={() => setImgSrc(FALLBACK_IMAGE)}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
        <span className="text-lg font-semibold text-white">
          {category.name}
        </span>
        <Link href={`/categories/${category.slug}`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
            <ArrowRight className="h-4 w-4 text-white" />
          </span>
        </Link>
      </div>
    </div>
  );
}
