import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export function Carousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0 relative">
          <Image
            src="/slide1.jpg"
            alt="Slide 1"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0 relative">
          <Image
            src="/slide2.jpg"
            alt="Slide 2"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0 relative">
          <Image
            src="/slide3.jpg"
            alt="Slide 3"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
