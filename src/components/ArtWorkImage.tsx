"use client";

import Image, { StaticImageData } from "next/image";

interface ArtworkImageProps {
  src: StaticImageData;
  index: number;
}

export function ArtworkImage({ src, index }: ArtworkImageProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl group">
      <Image
        src={src}
        alt={`Artwork ${index + 1}`}
        fill
        className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        priority={index < 4}
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
