"use client";

import { useState } from "react";
import { artworkData, ArtworkItem } from "@/data/artworkData";
import Modal from "./Modal";
import Image from "next/image";

export const ArtworkGrid = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(
    null
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworkData.map((artwork) => (
          <div
            key={artwork.id}
            className="cursor-pointer"
            onClick={() => setSelectedArtwork(artwork)}
          >
            <div className="relative h-64 w-full">
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="mt-2 text-lg font-semibold">{artwork.title}</h3>
            <p className="text-gray-600">{artwork.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </>
  );
};

export default ArtworkGrid;
