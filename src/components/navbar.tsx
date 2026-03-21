"use client";

import { Search, Heart, Instagram, Menu } from "lucide-react";
import Image from "next/image";
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
      <div className="bg-[var(--beamira-primary)] py-2 px-4 text-center text-white text-sm font-lato">
        Livraison offerte a partir de 50EUR &mdash; Click &amp; Collect disponible
      </div>

      <nav className="bg-white border-b border-[var(--beamira-border-light)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex items-center gap-2 font-playfair text-lg font-medium uppercase tracking-widest text-[var(--beamira-dark)]"
              >
                <Image
                  src="/icon.svg"
                  alt=""
                  width={26}
                  height={26}
                  className="flex-shrink-0"
                  aria-hidden="true"
                />
                Beamira Flowers
              </a>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button aria-label="Rechercher" className="nav-link">
                <Search size={20} />
              </button>
              <button aria-label="Favoris" className="nav-link">
                <Heart size={20} />
              </button>
              <a
                href="https://www.instagram.com/beamira.flowers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="nav-link"
              >
                <Instagram size={20} />
              </a>

              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger aria-label="Ouvrir le menu" className="nav-link">
                    <Menu size={22} />
                  </SheetTrigger>
                  <SheetContent side="right" className="w-72 p-0">
                    <SheetHeader className="border-b border-[var(--beamira-border-light)] px-6 py-5">
                      <SheetTitle className="font-playfair text-sm uppercase tracking-widest text-[var(--beamira-dark)]">
                        Beamira Flowers
                      </SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-1 px-6 py-6">
                      {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link py-2">
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
