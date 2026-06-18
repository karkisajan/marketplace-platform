import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex min-h-24 w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link
          href="/"
          className="shrink-0 font-serif text-4xl font-bold leading-none tracking-normal sm:text-5xl"
        >
          <span className="text-black">Lu</span>
          <span className="text-zinc-500">mina</span>
        </Link>

        <div className="flex w-full flex-col gap-3 sm:flex-row md:max-w-3xl">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-500" />
            <Input
              placeholder="Search categories, products, and listings"
              className="h-12 rounded-md border-zinc-300 bg-zinc-50 pl-12 pr-4 text-base shadow-sm placeholder:text-zinc-500 focus-visible:border-zinc-900 focus-visible:ring-zinc-900/15"
            />
          </div>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-md border-zinc-900 px-6 text-base font-semibold hover:bg-zinc-900 hover:text-white"
          >
            <Link href="/register">Register as customer</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
