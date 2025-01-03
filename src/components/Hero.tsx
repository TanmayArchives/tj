import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="text-center mt-10 sm:mt-20 space-y-4 sm:space-y-6 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-center space-y-2">
        <span className="text-[2.5rem] sm:text-[3rem] md:text-[3.55rem] block">
          Where Strength Meets Emotion
        </span>
        <div className="mt-2">
          The Art of{" "}
          <span className="font-extrabold">Tushar Baliram Jadhav</span>
        </div>
      </h1>
      <p className="text-lg sm:text-xl w-full md:max-w-lg font-medium text-gray-600 max-w-2xl mx-auto">
        Explore timeless masterpieces inspired by devotion, nature, and the
        beauty of life.
      </p>
      <div className="flex flex-col font-secondary font-medium sm:flex-row gap-4 justify-center items-center">
        <Link
          href={"#about"}
          className="w-full sm:w-auto bg-primary text-primary-foreground shadow hover:bg-primary/90 px-4 py-2 rounded-lg"
        >
          About me
        </Link>
        <Link
          href="mailto:tusharjtush@gmail.com"
          className="w-full sm:w-auto bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
}
