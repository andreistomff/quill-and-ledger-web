
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

const GOOGLE_MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.5432!2d26.0977!3d44.4459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4868c2c1b5%3A0x1f3d7c20bfb3b457!2sBulevardul%20Ion%20Mihalache%20106%2C%20București!5e0!3m2!1sro!2sro!4v1719848123456!5m2!1sro!2sro`;

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

  // Passive event listeners for scroll performance
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // Touch handling with passive listener
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Touch handling with passive listener
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-8 mt-16 mb-8 border border-border"
    >
      <h2 className="font-playfair text-xl sm:text-2xl font-bold text-primary mb-4 flex items-center gap-2 leading-tight">
        <MapPin className="text-primary flex-shrink-0" size={20} aria-hidden="true" />
        <span className="break-words">Contact & Vizitați-ne</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="font-semibold text-foreground text-lg mb-1">Adresa Biroului Nostru:</p>
            <address className="not-italic text-muted-foreground mb-5 leading-relaxed">
              {ADDRESS.line1} <br />
              {ADDRESS.city}, {ADDRESS.state}
            </address>

            <div className="space-y-2 mb-5">
              <div className="flex items-center text-foreground">
                <Phone className="mr-2 text-primary" size={20} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center text-foreground">
                <Mail className="mr-2 text-primary" size={20} />
                <a href={`tel:${CONTACT_INFO.fax}`} className="hover:text-primary transition-colors">{CONTACT_INFO.fax}</a>
              </div>
              <div className="flex items-center text-foreground">
                <Smartphone className="mr-2 text-primary" size={20} />
                <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-primary transition-colors">{CONTACT_INFO.mobile}</a>
              </div>
              <div className="flex items-center text-foreground">
                <Mail className="mr-2 text-primary" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
              </div>
            </div>

            <div className="mb-5 p-3 bg-muted rounded-lg border border-border">
              <div className="flex items-center text-foreground mb-1">
                <Clock className="mr-2 text-primary" size={20} />
                <span className="font-semibold">Program Birou:</span>
              </div>
              <p className="text-muted-foreground ml-7">{OFFICE_HOURS.schedule}</p>
              <p className="text-sm text-muted-foreground ml-7 mt-1 italic">{OFFICE_HOURS.note}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <a
              href={`https://maps.google.com/?q=${ADDRESS.googleMapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-primary-foreground text-base font-semibold py-2 px-4 rounded-lg shadow hover:bg-primary/90 transition-colors w-max"
            >
              <MapPin className="mr-2" size={20} />
              Vizualizați pe Google Maps
            </a>
            <a
              href="https://www.waze.com/ul?ll=44.461971%2C26.073061&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-primary-foreground text-base font-semibold py-2 px-4 rounded-lg shadow hover:bg-primary/90 transition-colors w-max"
            >
              <Navigation className="mr-2" /> Rută rapidă cu Waze
            </a>
          </div>
        </div>

        <div 
          ref={mapContainerRef}
          className="flex-1 min-w-[250px] h-[220px] md:h-auto rounded-lg overflow-hidden border border-border shadow"
        >
          {shouldLoadMap ? (
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
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 text-muted-foreground" size={24} />
                <p className="text-sm text-muted-foreground">Se încarcă harta...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
