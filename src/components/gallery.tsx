"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  { src: "/gallery/1.jpg", alt: "Bouquet colore avec tournesols et roses" },
  { src: "/gallery/2.jpg", alt: "Bouquet pastel de fleurs delicates" },
  { src: "/gallery/3.jpg", alt: "Bouquet de roses roses et blanches" },
  { src: "/gallery/4.jpg", alt: "Bouquet de roses avec baby's breath" },
  { src: "/gallery/5.jpg", alt: "Bouquet de fleurs roses et blanches" },
  { src: "/gallery/6.jpg", alt: "Bouquet de roses pour occasion speciale" },
  { src: "/gallery/7.jpg", alt: "Bouquet artisanal de fleurs variees" },
  { src: "/gallery/8.jpg", alt: "Bouquet de la semaine" },
  { src: "/gallery/9.jpg", alt: "La vie en rose - bouquet rose" },
  { src: "/gallery/10.jpg", alt: "Bouquet de 101 roses rouges" },
  { src: "/gallery/11.jpg", alt: "Bouquet de roses rouges classique" },
  { src: "/gallery/12.jpg", alt: "Bouquet elegant livraison France" },
];

/**
 * Returns layout classes for a masonry-inspired grid.
 * First image spans 2 columns and 2 rows (hero).
 * A few others get tall aspect ratios for visual variety.
 */
function getItemLayout(index: number) {
  if (index === 0) {
    return "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto";
  }
  // Taller cards at positions 3, 7, 10 for rhythm
  if (index === 3 || index === 7 || index === 10) {
    return "aspect-[3/5]";
  }
  return "aspect-[3/4]";
}

export function Gallery() {
  return (
    <section
      id="galerie"
      className={cn("py-14 md:py-20 border-t-0 border-none")}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* ── Heading area ── */}
        <div className="text-center mb-10">
          <h2 className="heading-lg text-[var(--beamira-dark)] mb-2 text-balance">
            Nos Creations
          </h2>
          {/* Decorative line under heading */}
          <div
            className="mx-auto mt-3 mb-4 h-px w-16 bg-[var(--beamira-primary)]"
            aria-hidden="true"
          />
          <p className="text-[var(--beamira-text)] text-lg text-pretty">
            Chaque bouquet est une oeuvre d&apos;art unique
          </p>
        </div>

        {/* ── Masonry-inspired photo grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-3 md:gap-4">
          {images.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-2xl shadow-sm",
                getItemLayout(index)
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                }
              />

              {/* ── Hover overlay with bouquet name ── */}
              <div
                className={cn(
                  "absolute inset-0 flex items-end",
                  "bg-gradient-to-t from-black/60 via-black/20 to-transparent",
                  "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-300 ease-out"
                )}
              >
                <p className="w-full px-4 pb-4 text-sm font-medium text-white text-pretty leading-snug">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
