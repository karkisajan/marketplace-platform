import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StoreNavbar() {
  return (
    <header className="w-full">
      <div className="bg-[#3b1c1c] h-10 w-full" />
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto p-6 h-20 flex items-center gap-8">
          <Link href="/" className="flex items-baseline gap-0">
            <span className="text-4xl font-bold text-gray-900 tracking-tight">
              Lu
            </span>
            <span className="text-4xl font-light text-gray-900 tracking-tight italic">
              mina
            </span>
          </Link>
          <div className="flex-1 max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-3 size-6 text-gray-400 pointer-events-none" />
              <input
                id="store-search"
                type="search"
                placeholder="Search categories, products, and listings"
                className="w-full h-12 pl-12 pr-4 rounded-md border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all"
              />
            </div>
          </div>
          <div className="flex-1" />
          <div className="flex justify-center items-center gap-8">
            <Button
              id="register-customer-btn"
              variant="outline"
              size="default"
              className="h-12 border-gray-900 text-gray-900 hover:bg-gray-100 font-medium px-6 text-base cursor-pointer"
            >
              Register as customer
            </Button>
            <div className="relative cursor-pointer">
              <ShoppingCart size={34} />
              <span className="absolute -top-2 -right-2 flex items-center justify-center size-5 rounded-full bg-gray-900 text-white text-[10px] font-semibold leading-none">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
