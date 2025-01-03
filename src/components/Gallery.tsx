"use client";
import { useState } from "react";
import { artworkData, ArtworkItem } from "@/data/artworkData";
import Image from "next/image";
import Modal from "./Modal";

export function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(
    null
  );

  return (
    <section id="gallery" className="py-8 mt-20 sm:py-16 sm:mt-20">
      <div className="text-center flex items-center flex-col gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          <span>Discover the</span>
          <div>Masterpieces</div>
        </h2>
        <span className="text-lg sm:text-xl font-secondary">
          Each painting tells a unique story, from the affection of Lord Nandi
        </span>
      </div>
      <div className="px-4 columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-4">
        {artworkData.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            onSelect={() => setSelectedArtwork(artwork)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
}

function ArtworkCard({
  artwork,
  onSelect,
}: {
  artwork: ArtworkItem;
  onSelect: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative mb-2 sm:mb-4 break-inside-avoid cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <Image
        src={artwork.imageUrl}
        alt={artwork.title}
        className="w-full h-auto rounded-lg"
      />

      {/* Overlay with artwork details */}
      <div
        className={`absolute inset-0 bg-black/70 rounded-lg p-2 sm:p-4 transition-opacity duration-300 flex flex-col justify-end
          ${isHovered ? "opacity-100" : "opacity-0"} touch:opacity-100`}
      >
        <h3 className="text-white text-base sm:text-xl font-semibold mb-1 sm:mb-2">
          {artwork.title}
        </h3>
        <p className="text-white/90 text-sm sm:text-base mb-1 sm:mb-2">
          {artwork.description}
        </p>
        <p className="text-white/80 text-xs sm:text-sm">Size: {artwork.size}</p>
      </div>
    </div>
  );
}
