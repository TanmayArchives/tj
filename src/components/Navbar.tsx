"use client";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="border-b border-neutral-300 drop-shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-end">
          <div className="font-bold text-xl">TJ</div>
          <span className="font-secondary">arts</span>
        </div>
        <div className="space-x-2  font-secondary">
          <Button variant="ghost" onClick={() => scrollToSection("about")}>
            About
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("gallery")}>
            Gallery
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
}
