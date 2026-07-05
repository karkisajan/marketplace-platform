'use client'
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  href?: string;
}

interface CategoryGroup {
  id: string;
  name: string;
  items: CategoryItem[];
}

interface Category {
  id: string;
  name: string;
  groups: CategoryGroup[];
}

interface SimpleLink {
  id: string;
  name: string;
  accent?: boolean;
}

const CATEGORIES: Category[] = [
  {
    id: "apple",
    name: "Apple",
    groups: [
      {
        id: "apple-mac",
        name: "Mac",
        items: [
          { id: "macbook-air", name: "MacBook Air" },
          { id: "macbook-pro", name: "MacBook Pro" },
          { id: "imac", name: "iMac" },
          { id: "mac-mini", name: "Mac Mini" },
        ],
      },
      {
        id: "apple-iphone",
        name: "iPhone",
        items: [
          { id: "iphone-16", name: "iPhone 16 Series" },
          { id: "iphone-15", name: "iPhone 15 Series" },
          { id: "iphone-se", name: "iPhone SE" },
        ],
      },
      {
        id: "apple-wearables",
        name: "Watch & Wearables",
        items: [
          { id: "apple-watch", name: "Apple Watch" },
          { id: "airpods", name: "AirPods" },
        ],
      },
    ],
  },
  {
    id: "android",
    name: "Android",
    groups: [
      {
        id: "android-phones",
        name: "Smartphones",
        items: [
          { id: "samsung", name: "Samsung Galaxy" },
          { id: "oneplus", name: "OnePlus" },
          { id: "xiaomi", name: "Xiaomi" },
        ],
      },
      {
        id: "android-tablets",
        name: "Tablets",
        items: [
          { id: "galaxy-tab", name: "Galaxy Tab" },
          { id: "xiaomi-pad", name: "Xiaomi Pad" },
        ],
      },
    ],
  },
  {
    id: "video-photography",
    name: "Video / Photography",
    groups: [
      {
        id: "cameras",
        name: "Cameras",
        items: [
          { id: "mirrorless", name: "Mirrorless Cameras" },
          { id: "action-cams", name: "Action Cameras" },
          { id: "compact", name: "Compact Cameras" },
        ],
      },
      {
        id: "drones-gimbals",
        name: "Drones & Gimbals",
        items: [
          { id: "drones", name: "Drones" },
          { id: "gimbals", name: "Gimbals & Stabilizers" },
          { id: "mics", name: "DJI Mic" },
        ],
      },
      {
        id: "lenses-lighting",
        name: "Lenses & Lighting",
        items: [
          { id: "lenses", name: "Lenses" },
          { id: "lighting", name: "Studio Lighting" },
          { id: "tripods", name: "Tripods & Mounts" },
        ],
      },
    ],
  },
  {
    id: "audio",
    name: "Audio",
    groups: [
      {
        id: "headphones",
        name: "Headphones",
        items: [
          { id: "over-ear", name: "Over-Ear Headphones" },
          { id: "earbuds", name: "True Wireless Earbuds" },
        ],
      },
      {
        id: "portable-audio",
        name: "Portable Audio",
        items: [
          { id: "bt-speakers", name: "Bluetooth Speakers" },
          { id: "dacs", name: "DACs & Amps" },
        ],
      },
    ],
  },
  {
    id: "home-theatre",
    name: "Home Theatre",
    groups: [
      {
        id: "sound-system",
        name: "Sound System",
        items: [
          { id: "wifi-bt-speaker", name: "Wifi & Bluetooth Speaker" },
          { id: "ht-speaker-set", name: "Home Theatre Speaker Set" },
          { id: "floorstanding", name: "Floorstanding Speakers" },
          { id: "bookshelf", name: "Bookshelf Speakers" },
          { id: "center-channel", name: "Center Channel Speaker" },
          { id: "subwoofers", name: "Subwoofers" },
          { id: "soundbars", name: "Soundbars" },
          { id: "outdoor-speakers", name: "Outdoor Speakers" },
          { id: "architecture-fit", name: "Architecture Fit Speakers" },
        ],
      },
      {
        id: "receivers-amplifiers",
        name: "Receivers & Amplifiers",
        items: [
          { id: "av-receivers", name: "AV Surround Receivers" },
          { id: "digital-amp", name: "Digital Integrated Amplifier" },
        ],
      },
      {
        id: "video-system",
        name: "Video System",
        items: [
          { id: "monitor", name: "Monitor" },
          { id: "projectors", name: "Projectors" },
          { id: "projector-screen", name: "Projector Screen" },
          { id: "projector-accessories", name: "Projector Accessories" },
        ],
      },
    ],
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    groups: [
      {
        id: "wearable-tech",
        name: "Wearable Tech",
        items: [
          { id: "smartwatches", name: "Smartwatches" },
          { id: "fitness-bands", name: "Fitness Bands" },
        ],
      },
      {
        id: "smart-home",
        name: "Smart Home",
        items: [
          { id: "smart-lighting", name: "Smart Lighting" },
          { id: "smart-plugs", name: "Smart Plugs" },
        ],
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    groups: [
      {
        id: "charging",
        name: "Charging",
        items: [
          { id: "chargers", name: "Chargers" },
          { id: "power-banks", name: "Power Banks" },
          { id: "cables", name: "Cables" },
        ],
      },
      {
        id: "protection",
        name: "Protection",
        items: [
          { id: "cases", name: "Cases & Covers" },
          { id: "screen-protectors", name: "Screen Protectors" },
        ],
      },
    ],
  },
  {
    id: "ev",
    name: "EV",
    groups: [
      {
        id: "ev-charging",
        name: "Charging",
        items: [
          { id: "home-charger", name: "Home Chargers" },
          { id: "portable-charger", name: "Portable Chargers" },
        ],
      },
    ],
  },
];


export default function CategoryMenubar() {
  const [openId, setOpenId] = useState<string | null>(null);
  // ReturnType<typeof setTimeout> works in both browser and Node type
  // environments — avoids the "Timeout is not assignable to null" error
  // you get from typing this as `number` (Node lib) or a raw `Timeout` (DOM lib).
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
        <ul className="mx-auto flex max-w-7xl items-center gap-7 px-6 py-3 text-[15px] text-neutral-800">
          {CATEGORIES.map((cat) => (
            <li
              key={cat.id}
              onMouseEnter={() => handleEnter(cat.id)}
              className="relative"
            >
              <button
                className={`flex items-center gap-1 py-1 transition-colors hover:text-[#8B1A1A] ${
                  openId === cat.id ? "text-[#8B1A1A]" : ""
                }`}
              >
                {cat.name}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    openId === cat.id ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mega dropdown */}
        {CATEGORIES.map((cat) => {
          if (cat.id !== openId) return null;
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
                    gridTemplateColumns: `repeat(${Math.min(
                      cat.groups.length,
                      4,
                    )}, minmax(0, 1fr))`,
                  }}
                >
                  {cat.groups.map((group) => (
                    <div key={group.id}>
                      <h3 className="mb-4 text-[15px] font-semibold text-neutral-900">
                        {group.name}
                      </h3>
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item.id}>
                            <a
                              href="#"
                              className="text-[14px] text-neutral-600 transition-colors hover:text-[#8B1A1A]"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
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
