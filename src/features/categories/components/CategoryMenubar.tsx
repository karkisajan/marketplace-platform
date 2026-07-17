"use client";
import { useState, useRef } from "react";

export default function CategoryMenubar() {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenId(id);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenId(null), 120);
  };

  return (
    <div className="w-full bg-white font-sans" onMouseLeave={handleLeave}>
      <nav className="relative border-y border-neutral-100">
        <ul className="mx-auto flex flex-wrap max-w-7xl items-center gap-x-7 gap-y-1 px-6 py-3 text-[15px] text-neutral-800">
          {/* Menu items removed */}
        </ul>
      </nav>
    </div>
  );
}
