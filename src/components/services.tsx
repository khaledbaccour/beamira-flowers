import { ShoppingBag, Truck, Wand2 } from "lucide-react";

const services = [
  {
    icon: <ShoppingBag className="w-8 h-8 text-pink-400" />,
    title: "Click & Collect",
    description:
      "Commandez en ligne et recuperez votre bouquet directement dans notre boutique a Issy-les-Moulineaux (93).",
  },
  {
    icon: <Truck className="w-8 h-8 text-pink-400" />,
    title: "Livraison",
    description:
      "Livraison dans toute la France, fleurs fraiches garanties. Recevez vos fleurs en parfait etat, ou que vous soyez.",
  },
  {
    icon: <Wand2 className="w-8 h-8 text-pink-400" />,
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
          <h2 className="font-playfair text-4xl text-gray-800 mb-3">
            Nos Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-playfair text-xl text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
