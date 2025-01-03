import { artist } from "@/images/image";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-8 sm:py-16 mt-10 sm:mt-20">
      <div className="flex flex-col mb-8 sm:mb-12 items-center justify-center px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl flex font-bold flex-col text-center">
          <span>Meet</span>
          <span>Tushar Baliram Jadhav</span>
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-center mt-2">
          A Visionary Artist
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center px-4">
        <div className="flex-1 space-y-6 sm:space-y-8 w-full">
          {/* Introduction Section */}
          <div className="bg-accent p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Introduction
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              A humble farmer&apos;s son with a passion for perfection, Tushar
              Baliram Jadhav has established himself as a versatile artist for
              over a decade.
            </p>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              From his childhood spent amidst nature to his deep devotion to
              Lord Shiva, every stroke of his brush tells a story.
            </p>
          </div>

          {/* Key Highlights Section */}
          <div className="bg-accent p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Key Highlights
            </h3>
            <ul className="space-y-2 font-secondary text-gray-700 text-sm sm:text-base">
              <li>
                <span className="font-medium">Education:</span> A.T.D / G.D.Art
                / A.M / MFA
              </li>
              <li>
                <span className="font-medium">Experience:</span> More than 10
                years of creating captivating masterpieces.
              </li>
              <li>
                <span className="font-medium">Specialty:</span> Unique and
                versatile painting skills with an eye for detail and emotion.
              </li>
            </ul>
          </div>
        </div>

        {/* Artist Image */}
        <div className="flex-1 w-full px-4 sm:px-0">
          <Image
            src={artist}
            alt="Tushar Baliram Jadhav"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Quote */}
      <div className="mt-8 sm:mt-12 text-center italic text-gray-600 max-w-3xl mx-auto px-4 text-sm sm:text-base">
        &quot;Art is my meditation, my prayer, and my way of spreading joy.
        Through my paintings, I aim to touch hearts and inspire souls.&quot;
      </div>
    </section>
  );
}
