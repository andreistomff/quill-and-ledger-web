import { MapPin, Navigation, Phone, Mail, Smartphone } from "lucide-react";

const ADDRESS = {
  line1: "B-dul Ion Mihalache, nr. 106, Bl. 84, Sc. B, Et. 2, Ap. 32",
  city: "București",
  state: "Sector 1",
  zip: "",
  full: "B-dul Ion Mihalache, nr. 106, Bl. 84, Sc. B, Et. 2, Ap. 32, București, Sector 1",
  googleMapsQuery: "B-dul+Ion+Mihalache+106+Bloc+84+Sector+1+București",
};

const CONTACT_INFO = {
  phone: "031 422 8848",
  fax: "031 422 8848",
  mobile: "0774 646 195",
};

const GOOGLE_MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.5432!2d26.0977!3d44.4459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4868c2c1b5%3A0x1f3d7c20bfb3b457!2sBulevardul%20Ion%20Mihalache%20106%2C%20București!5e0!3m2!1sro!2sro!4v1719848123456!5m2!1sro!2sro`;

const wazeLink = `https://www.waze.com/en/live-map/directions?to=ll.44.4459%2C26.0977&q=B-dul%20Ion%20Mihalache%20106%20Bloc%2084%20Sector%201%20București`;

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
        {/* Address & Contact Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="font-semibold text-gray-800 text-lg mb-1">Adresa Biroului Nostru:</p>
            <address className="not-italic text-gray-600 mb-5 leading-relaxed">
              {ADDRESS.line1} <br />
              {ADDRESS.city}, {ADDRESS.state}
            </address>

            {/* Contact Methods */}
            <div className="space-y-2 mb-5">
              <div className="flex items-center text-gray-700">
                <Phone className="mr-2 text-primary" size={20} />
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="mr-2 text-primary" size={20} />
                <a href={`tel:${CONTACT_INFO.fax}`}>{CONTACT_INFO.fax}</a>
              </div>
              <div className="flex items-center text-gray-700">
                <Smartphone className="mr-2 text-primary" size={20} />
                <a href={`tel:${CONTACT_INFO.mobile}`}>{CONTACT_INFO.mobile}</a>
              </div>
            </div>

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
