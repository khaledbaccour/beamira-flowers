import { Flower2, Truck, Package, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { icon: Flower2, label: "Bouquets Artisanaux" },
  { icon: Truck, label: "Livraison en France" },
  { icon: Package, label: "Click & Collect" },
  { icon: Sparkles, label: "Creations Sur Mesure" },
];

export function Features() {
  return (
    <section className="bg-brand-light border-y border-pink-100 py-14">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div
              key={feature.label}
              className={cn(
                "group flex flex-col items-center gap-4 text-center",
                "cursor-default transition-transform duration-200 ease-out",
                "hover:scale-105"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center size-14 rounded-2xl",
                  "bg-pink-100 text-brand",
                  "transition-colors duration-200 ease-out",
                  "group-hover:bg-pink-200"
                )}
              >
                <feature.icon className="size-7" strokeWidth={1.5} />
              </div>
              <span className="body-text text-base font-semibold text-pretty">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
