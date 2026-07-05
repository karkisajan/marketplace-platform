"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useCategoriesTree } from "../hooks/useCategory-tree";

export default function CategoryMenubar() {
  const { categories, isLoading } = useCategoriesTree();
  const [openId, setOpenId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenId(id);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenId(null), 120);
  };

  if (isLoading) {
    return (
      <div className="w-full bg-white font-sans">
        <nav className="relative border-y border-neutral-100">
          <ul className="mx-auto flex max-w-7xl items-center gap-7 px-6 py-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className="h-4 w-20 animate-pulse rounded bg-neutral-200"
              />
            ))}
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div className="w-full bg-white font-sans" onMouseLeave={handleLeave}>
      <nav className="relative border-y border-neutral-100">
        <ul className="mx-auto flex flex-wrap max-w-7xl items-center gap-x-7 gap-y-1 px-6 py-3 text-[15px] text-neutral-800">
          {categories.map((cat) => (
            <li
              key={cat.id}
              onMouseEnter={() => handleEnter(cat.id)}
              className="relative"
            >
              <button
                className={`flex items-center gap-1 whitespace-nowrap py-1 transition-colors hover:text-[#8B1A1A] ${
                  openId === cat.id ? "text-[#8B1A1A]" : ""
                }`}
              >
                {cat.name}
                {/* Only show chevron if this category has children */}
                {cat.children && cat.children.length > 0 && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      openId === cat.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mega dropdown */}
        {categories.map((cat) => {
          if (cat.id !== openId) return null;
          const groups = cat.children ?? [];
          if (groups.length === 0) return null;

          return (
            <div
              key={cat.id}
              onMouseEnter={() => handleEnter(cat.id)}
              className="absolute left-0 right-0 top-full z-30 border-t border-neutral-100 bg-white shadow-lg"
            >
              <div className="mx-auto max-w-7xl px-6 py-8">
                <div
                  className="grid gap-x-10 gap-y-8"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(groups.length, 4)}, minmax(0, 1fr))`,
                  }}
                >
                  {groups.map((group) => (
                    <div key={group.id}>
                      <h3 className="mb-4 text-[15px] font-semibold text-neutral-900">
                        {group.name}
                      </h3>
                      {group.children && group.children.length > 0 && (
                        <ul className="space-y-3">
                          {group.children.map((item) => (
                            <li key={item.id}>
                              <a
                                href={`/categories/${item.slug}`}
                                className="text-[14px] text-neutral-600 transition-colors hover:text-[#8B1A1A]"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
