"use client";

import { Search, Heart, Instagram, Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Bouquets", href: "#bouquets" },
  { label: "Creations Sur Mesure", href: "#creations" },
  { label: "Galerie", href: "#galerie" },
  { label: "A Propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-pink-400 py-2 px-4 text-center text-white text-sm font-lato">
        Livraison offerte a partir de 50EUR &mdash; Click &amp; Collect disponible
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Left: Brand */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="font-playfair text-base font-semibold uppercase tracking-widest text-gray-900"
              >
                Beamira Flowers
              </a>
            </div>

            {/* Center: Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-lato text-sm uppercase tracking-wide text-gray-700 transition-colors hover:text-pink-500"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Rechercher"
                className="text-gray-700 transition-colors hover:text-pink-500"
              >
                <Search size={20} />
              </button>
              <button
                aria-label="Favoris"
                className="text-gray-700 transition-colors hover:text-pink-500"
              >
                <Heart size={20} />
              </button>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-700 transition-colors hover:text-pink-500"
              >
                <Instagram size={20} />
              </a>

              {/* Mobile Hamburger */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger
                    aria-label="Ouvrir le menu"
                    className="text-gray-700 transition-colors hover:text-pink-500"
                  >
                    <Menu size={22} />
                  </SheetTrigger>
                  <SheetContent side="right" className="w-72 p-0">
                    <SheetHeader className="border-b border-gray-100 px-6 py-5">
                      <SheetTitle className="font-playfair text-sm uppercase tracking-widest text-gray-900">
                        Beamira Flowers
                      </SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-1 px-6 py-6">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="font-lato text-sm uppercase tracking-wide text-gray-700 py-2 transition-colors hover:text-pink-500"
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}
