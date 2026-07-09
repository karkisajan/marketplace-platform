"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePageProductsLists() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Latest in market</p>

        <Link href={`/`}>
          <span className="flex items-center justify-center space-x-2">
            <p>Browse more Products</p>
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-x-5 gap-y-10">
        {/* Products will be mapped here */}
      </div>
    </div>
  );
}
