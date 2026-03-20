import { Flower2, Truck, Package, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Flower2 className="w-8 h-8 text-pink-400" />,
    label: "Bouquets Artisanaux",
  },
  {
    icon: <Truck className="w-8 h-8 text-pink-400" />,
    label: "Livraison en France",
  },
  {
    icon: <Package className="w-8 h-8 text-pink-400" />,
    label: "Click & Collect",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-pink-400" />,
    label: "Creations Sur Mesure",
  },
];

export function Features() {
  return (
    <section className="bg-rose-50/50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              {feature.icon}
              <span className="text-gray-700 font-medium text-sm">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
