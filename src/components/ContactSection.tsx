
import { MapPin, Navigation } from "lucide-react";

const ADDRESS = {
  line1: "Str. Hristo Botev 12",
  city: "București",
  state: "Sector 3",
  zip: "030195",
  full: "Str. Hristo Botev 12, București, Sector 3, 030195",
  googleMapsQuery: "Str.+Hristo+Botev+12+București+Sector+3+030195",
};

const GOOGLE_MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.989018990013!2d26.104793!3d44.4325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770aed5c7%3A0x9c5ebafb30186f!2sStrada%20Hristo%20Botev%2012%2C%20București!5e0!3m2!1sro!2sro!4v1719848123456!5m2!1sro!2sro`;

const wazeLink = `https://www.waze.com/en/live-map/directions/municipiul-bucuresti/bucuresti?place=11173323.106`;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-16 mb-8"
    >
      <h2 className="font-playfair text-2xl font-bold text-primary mb-4 flex items-center gap-2">
        <MapPin className="text-primary" aria-hidden="true" />
        Contact & Vizitați-ne
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Address & Button */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="font-semibold text-gray-800 text-lg mb-1">Adresa Biroului Nostru:</p>
            <address className="not-italic text-gray-600 mb-5 leading-relaxed">
              {ADDRESS.line1} <br />
              {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
            </address>
            <a
              href={`https://maps.google.com/?q=${ADDRESS.googleMapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline text-sm mb-6"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Vizualizați pe Google Maps
            </a>
          </div>
          <a
            href={wazeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 bg-[#1A1F2C] text-white text-base font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#222] transition-colors w-max"
            style={{
              background: "#1A1F2C",
            }}
          >
            <Navigation className="mr-2" /> Rută rapidă cu Waze
          </a>
        </div>

        {/* Google Map */}
        <div className="flex-1 min-w-[250px] h-[220px] md:h-auto rounded-lg overflow-hidden border border-gray-200 shadow">
          <iframe
            title="Biroul Notarial Mariana Cîrstocea Locație"
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height="225"
            loading="lazy"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

