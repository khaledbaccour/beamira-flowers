import Image from "next/image";

export function About() {
  return (
    <section id="a-propos" className="bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: real photo */}
          <div className="rounded-2xl aspect-square overflow-hidden relative">
            <Image
              src="/hero-bouquet.jpg"
              alt="Beamira Flowers - Bouquet artisanal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: content */}
          <div>
            <p className="text-pink-500 uppercase tracking-widest text-sm font-semibold mb-3">
              Notre Histoire
            </p>
            <h2 className="font-playfair text-4xl text-gray-900 mb-6">
              Beamira Flowers
            </h2>
            <p className="font-lato text-gray-600 leading-relaxed mb-4">
              Chez Beamira Flowers, nous croyons que chaque bouquet raconte une
              histoire. Depuis notre atelier a Issy-les-Moulineaux, nous
              selectionnons avec soin les plus belles fleurs pour creer des
              compositions uniques qui illuminent vos moments precieux. Notre
              passion pour l&apos;art floral se reflete dans chaque creation,
              confectionnee avec amour et attention aux details.
            </p>
            <p className="font-lato text-gray-600 leading-relaxed mb-8">
              Que ce soit pour celebrer un anniversaire, exprimer votre amour ou
              simplement apporter de la joie, nous mettons tout notre savoir-faire
              a votre service.
            </p>
            <a
              href="https://instagram.com/beamira.flowers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 font-semibold"
            >
              Suivez-nous sur Instagram &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
