import { Instagram, Facebook, Mail, Heart, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <p className="font-playfair text-xl font-bold mb-3">
              BEAMIRA FLOWERS
            </p>
            <p className="text-gray-400 text-sm mb-6">Spread love with flowers</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/beamira.flowers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contact@beamira-flowers.fr"
                aria-label="Email"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {["Bouquets", "Creations Sur Mesure", "Galerie", "A Propos"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {["Livraison", "Click & Collect", "Sur Mesure", "Catalogue"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Issy-les-Moulineaux, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+33 X XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>contact@beamira-flowers.fr</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="shrink-0" />
                <span>@beamira.flowers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Beamira Flowers. Tous droits reserves.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Fait avec amour{" "}
            <Heart size={16} className="text-pink-400 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
