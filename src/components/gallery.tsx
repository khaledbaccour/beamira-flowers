import Image from "next/image";

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

export function Gallery() {
  return (
    <section id="galerie" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-[var(--beamira-dark)] mb-3">
            Nos Creations
          </h2>
          <p className="body-text-light text-lg">
            Chaque bouquet est une oeuvre d&apos;art unique
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
