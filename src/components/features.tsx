import { Flower2, Truck, Package, Sparkles } from "lucide-react";

const features = [
  { icon: Flower2, label: "Bouquets Artisanaux" },
  { icon: Truck, label: "Livraison en France" },
  { icon: Package, label: "Click & Collect" },
  { icon: Sparkles, label: "Creations Sur Mesure" },
];

export function Features() {
  return (
    <section className="bg-brand-light py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <feature.icon className="w-8 h-8 text-brand" />
              <span className="body-text font-medium text-sm">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
