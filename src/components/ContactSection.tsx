
import { MapPin, Navigation } from "lucide-react";

const ADDRESS = {
  line1: "415 Grand Avenue, Suite 207",
  city: "San Francisco",
  state: "CA",
  zip: "94108",
  full: "415 Grand Avenue, Suite 207, San Francisco, CA 94108",
  googleMapsQuery: "415+Grand+Ave+Suite+207+San+Francisco+CA+94108",
};

const GOOGLE_MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.3658948010234!2d-122.4056!3d37.7929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cfbc2a29%3A0xabc567hefcbabfcd!2s415%20Grand%20Ave%2C%20San%20Francisco%2C%20CA%2094108!5e0!3m2!1sen!2sus!4v1688967294140!5m2!1sen!2sus`;

const wazeLink = `https://waze.com/ul?ll=37.7929,-122.4056&navigate=yes`;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-16 mb-8"
    >
      <h2 className="font-playfair text-2xl font-bold text-primary mb-4 flex items-center gap-2">
        <MapPin className="text-primary" aria-hidden="true" />
        Contact & Visit Us
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Address & Button */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="font-semibold text-gray-800 text-lg mb-1">Our Office Address:</p>
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
              View on Google Maps
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
            <Navigation className="mr-2" /> Quick Route with Waze
          </a>
        </div>

        {/* Google Map */}
        <div className="flex-1 min-w-[250px] h-[220px] md:h-auto rounded-lg overflow-hidden border border-gray-200 shadow">
          <iframe
            title="Quill & Ledger Notary Office Location"
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
