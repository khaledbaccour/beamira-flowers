import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-white">
      {/* Decorative background circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-pink-200 opacity-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-rose-200 opacity-15"
      />

      {/* Decorative floral SVG accent */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden md:block"
        width="420"
        height="420"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" fill="#f9a8d4" />
        <circle cx="100" cy="40" r="30" fill="#fbcfe8" />
        <circle cx="100" cy="160" r="30" fill="#fbcfe8" />
        <circle cx="40" cy="100" r="30" fill="#fbcfe8" />
        <circle cx="160" cy="100" r="30" fill="#fbcfe8" />
        <circle cx="57" cy="57" r="22" fill="#fce7f3" />
        <circle cx="143" cy="57" r="22" fill="#fce7f3" />
        <circle cx="57" cy="143" r="22" fill="#fce7f3" />
        <circle cx="143" cy="143" r="22" fill="#fce7f3" />
        <circle cx="100" cy="100" r="18" fill="#f472b6" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12 lg:px-16">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="font-playfair text-5xl leading-tight text-gray-900 md:text-7xl">
            Spread Love with Flowers
          </h1>

          <p className="mt-6 font-lato text-lg text-gray-600">
            Des bouquets artisanaux confectionnés avec amour. Livraison dans
            toute la France.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Button
              className="rounded-full bg-pink-500 px-8 py-3 text-base font-medium text-white hover:bg-pink-600 border-0"
            >
              Découvrir nos bouquets
            </Button>

            <Button
              className="rounded-full border border-gray-800 bg-transparent px-8 py-3 text-base font-medium text-gray-800 hover:bg-gray-800 hover:text-white"
            >
              Commander sur mesure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
