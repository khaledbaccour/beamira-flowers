import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Beamira Flowers - Bouquet artisanal"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12 lg:px-16">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="font-playfair text-5xl leading-tight text-gray-900 md:text-7xl">
            Spread Love with Flowers
          </h1>

          <p className="mt-6 font-lato text-lg text-gray-700">
            Des bouquets artisanaux confectionnes avec amour. Livraison dans
            toute la France.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Button className="rounded-full bg-pink-500 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-pink-600 border-0">
              Decouvrir nos bouquets
            </Button>

            <Button className="rounded-full border border-gray-800 bg-white/80 px-8 py-3 text-base font-medium text-gray-800 backdrop-blur-sm hover:bg-gray-800 hover:text-white">
              Commander sur mesure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
