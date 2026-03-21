import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <Image
        src="/hero.png"
        alt="Beamira Flowers - Bouquet artisanal"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12 lg:px-16">
        <div className="max-w-2xl text-center md:text-right md:ml-auto">
          <h1 className="heading-xl text-white drop-shadow-md">
            Spread Love with Flowers
          </h1>

          <p className="mt-6 body-text-light !text-white/90 text-lg drop-shadow-sm">
            Des bouquets artisanaux confectionnes avec amour. Livraison dans
            toute la France.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-end">
            <a href="#bouquets" className="btn-primary">
              Decouvrir nos bouquets
            </a>
            <a href="#creations" className="btn-primary">
              Commander sur mesure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
