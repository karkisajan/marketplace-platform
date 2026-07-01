import { LayoutGrid, ShoppingBag, Store } from "lucide-react";
import Link from "next/link";
import CategoriesPage from "./categories/page";

const quickLinks = [
  { label: "Categories", href: "/categories", icon: LayoutGrid },
  { label: "Products", href: "/products", icon: ShoppingBag },
  { label: "Stores", href: "/stores", icon: Store },
];

export default function StorePage() {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-10 py-30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-md">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-4">
                Discover what&apos;s nearby
              </h1>
              <p className="text-gray-500 text-xl leading-relaxed">
                Find local products, categories and stores in one clean
                marketplace.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    id={`quick-link-${link.label.toLowerCase()}`}
                    className="flex items-center justify-center gap-2 w-44 h-20 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold text-base hover:border-gray-500 hover:shadow-sm transition-all duration-200"
                  >
                    <Icon className="size-5 text-gray-600" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <CategoriesPage />
        </div>
      </section>
    </div>
  );
}
