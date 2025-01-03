"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArtworkImage } from "./ArtWorkImage";
import { artworkData } from "@/data/artworkData";

export function ArtworkCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 0, // No delay for continuous movement
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })
  );

  const duplicatedArtworks = artworkData.map((item) => item.imageUrl);

  return (
    <section className="py-20  overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: true,
          dragFree: true,
          containScroll: "trimSnaps",
          duration: 30000,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4 animate-scroll">
          {duplicatedArtworks.map((artwork, index) => (
            <CarouselItem
              key={`${artwork}-${index}`}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-[30%]"
            >
              <ArtworkImage src={artwork} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
