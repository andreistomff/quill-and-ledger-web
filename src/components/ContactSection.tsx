
import { MapPin, Navigation, Phone, Mail, Smartphone, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  email: "notariat.mcirstocea@yahoo.com",
};

const OFFICE_HOURS = {
  schedule: "Luni - Vineri: 09:00 - 17:00",
  note: "Recomandăm programări in avans"
};

// Google Maps embed URL with exact coordinates from the provided link
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0123456789!2d26.073061!3d44.461971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cfa01%3A0x12345!2sB-dul%20Ion%20Mihalache%20106%2C%20Bucure%C8%99ti%20011171%2C%20Romania!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s`;

export default function ContactSection() {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadMap(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-8 mt-16 mb-8 border border-border"
      aria-labelledby="contact-heading"
    >
      <h2 
        id="contact-heading" 
        className="font-playfair text-xl sm:text-2xl font-bold text-card-foreground mb-4 flex items-center gap-2 leading-tight"
      >
        <MapPin className="text-primary flex-shrink-0" size={20} aria-hidden="true" />
        <span className="break-words">Contact & Vizitați-ne</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="font-semibold text-card-foreground text-lg mb-1">Adresa Biroului Nostru:</p>
            <address className="not-italic text-muted-foreground mb-5 leading-relaxed">
              {ADDRESS.line1} <br />
              {ADDRESS.city}, {ADDRESS.state}
            </address>

            <div className="space-y-3 mb-5">
              <div className="flex items-center text-card-foreground">
                <Phone className="mr-3 text-primary flex-shrink-0" size={20} aria-hidden="true" />
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                  className="hover:text-primary transition-colors py-1"
                  aria-label={`Telefon birou: ${CONTACT_INFO.phone}`}
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center text-card-foreground">
                <Phone className="mr-3 text-primary flex-shrink-0" size={20} aria-hidden="true" />
                <a 
                  href={`tel:${CONTACT_INFO.fax.replace(/\s/g, '')}`} 
                  className="hover:text-primary transition-colors py-1"
                  aria-label={`Fax: ${CONTACT_INFO.fax}`}
                >
                  {CONTACT_INFO.fax} (Fax)
                </a>
              </div>
              <div className="flex items-center text-card-foreground">
                <Smartphone className="mr-3 text-primary flex-shrink-0" size={20} aria-hidden="true" />
                <a 
                  href={`tel:${CONTACT_INFO.mobile.replace(/\s/g, '')}`} 
                  className="hover:text-primary transition-colors py-1"
                  aria-label={`Telefon mobil: ${CONTACT_INFO.mobile}`}
                >
                  {CONTACT_INFO.mobile}
                </a>
              </div>
              <div className="flex items-center text-card-foreground">
                <Mail className="mr-3 text-primary flex-shrink-0" size={20} aria-hidden="true" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="hover:text-primary transition-colors py-1 break-all"
                  aria-label={`Email: ${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
              <div className="flex items-center text-card-foreground mb-2">
                <Clock className="mr-3 text-primary flex-shrink-0" size={20} aria-hidden="true" />
                <span className="font-semibold">Program Birou:</span>
              </div>
              <p className="text-muted-foreground ml-8">{OFFICE_HOURS.schedule}</p>
              <p className="text-sm text-muted-foreground ml-8 mt-1 italic">{OFFICE_HOURS.note}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <a
              href={`https://maps.google.com/?q=${ADDRESS.googleMapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground text-base font-semibold py-3 px-6 rounded-lg shadow hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Deschide locația biroului notarial pe Google Maps (se deschide în fereastră nouă)"
            >
              <MapPin className="mr-2 flex-shrink-0" size={20} aria-hidden="true" />
              <span>Vizualizați pe Google Maps</span>
            </a>
            <a
              href="https://www.waze.com/ul?ll=44.461971%2C26.073061&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground text-base font-semibold py-3 px-6 rounded-lg shadow hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Deschide navigația către birou în aplicația Waze (se deschide în fereastră nouă)"
            >
              <Navigation className="mr-2 flex-shrink-0" size={20} aria-hidden="true" />
              <span>Rută rapidă cu Waze</span>
            </a>
          </div>
        </div>

        <div 
          ref={mapContainerRef}
          className="flex-1 min-w-[250px] h-[240px] md:h-auto rounded-lg overflow-hidden border border-border shadow"
          role="img"
          aria-label="Hartă interactivă cu locația Biroului Notarial Mariana Cîrstocea"
        >
          {shouldLoadMap ? (
            <iframe
              title="Locația Biroului Notarial Mariana Cîrstocea pe Google Maps"
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="240"
              loading="lazy"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Hartă Google Maps cu locația exactă a biroului notarial"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center" aria-label="Se încarcă harta">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 text-muted-foreground" size={24} aria-hidden="true" />
                <p className="text-sm text-muted-foreground">Se încarcă harta...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
