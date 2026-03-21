import { ShoppingBag, Truck, Wand2 } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Click & Collect",
    description:
      "Commandez en ligne et recuperez votre bouquet directement dans notre boutique a Tremblay (93).",
  },
  {
    icon: Truck,
    title: "Livraison",
    description:
      "Livraison dans toute la France, fleurs fraiches garanties. Recevez vos fleurs en parfait etat.",
  },
  {
    icon: Wand2,
    title: "Sur Mesure",
    description:
      "Bouquets personnalises concus selon vos preferences, pour chaque occasion et chaque emotion.",
  },
];

export function Services() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-[var(--beamira-dark)] mb-3">
            Nos Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--beamira-accent)] hover:shadow-md transition-shadow duration-300"
            >
              <service.icon className="w-8 h-8 text-brand mb-4" />
              <h3 className="heading-md text-[var(--beamira-dark)] mb-3">
                {service.title}
              </h3>
              <p className="body-text-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
