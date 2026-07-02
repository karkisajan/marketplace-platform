"use client";

import { useState } from "react";
import { BadgeIcon } from "lucide-react";
import Image from "next/image";

interface CategoryImageProps {
  src?: string;
  alt: string;
  className?: string;
  iconClassName?: string;
}

export default function CategoryImage({
  src,
  alt,
  className = "",
  iconClassName = "",
}: CategoryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`flex items-center justify-center w-full h-full ${className}`}>
        <BadgeIcon className={iconClassName} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className={`object-cover ${className}`}
      onError={() => setHasError(true)}
    />
  );
}
