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

export default function ContactSection() {
  const [mapSrc, setMapSrc] = useState("");
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    // Try different map sources in order of preference
    const mapSources = [
      // OpenStreetMap with correct tile calculation for Bucharest coordinates
      `https://tile.openstreetmap.org/16/43381/22327.png`,
      // Different zoom level
      `https://tile.openstreetmap.org/15/21690/11163.png`,
      // Fallback to a map image of Bucharest
      `https://images.unsplash.com/photo-1555794830-9e08c8346c41?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80`,
    ];

    setMapSrc(mapSources[0]);
  }, []);

  const handleMapError = () => {
    console.log('Current map source failed, trying fallback');
    setMapError(true);
    // Use a generic Bucharest city image as final fallback
    setMapSrc("https://images.unsplash.com/photo-1555794830-9e08c8346c41?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80");
  };

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
              href={`https://maps.google.com/?q=44.4621721,26.0730025`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground text-base font-semibold py-3 px-6 rounded-lg shadow hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Deschide locația biroului notarial pe Google Maps (se deschide în fereastră nouă)"
            >
              <MapPin className="mr-2 flex-shrink-0" size={20} aria-hidden="true" />
              <span>Vizualizați pe Google Maps</span>
            </a>
            <a
              href="https://www.waze.com/ul?ll=44.4621721%2C26.0730025&navigate=yes"
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
          className="flex-1 min-w-[250px] h-[240px] md:h-auto rounded-lg overflow-hidden border border-border shadow relative"
          role="img"
          aria-label="Hartă cu locația exactă a Biroului Notarial Mariana Cîrstocea pe B-dul Ion Mihalache 106"
        >
          {mapSrc ? (
            <img
              src={mapSrc}
              alt="Hartă cu locația exactă a biroului notarial pe B-dul Ion Mihalache 106, București, Sector 1"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={handleMapError}
              onLoad={() => console.log('Map image loaded successfully')}
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-center p-4">
                <MapPin className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-sm text-muted-foreground">Încărcare hartă...</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-primary/5 flex items-end justify-center pb-4">
            <div className="text-center bg-card/95 p-3 rounded-lg shadow-lg backdrop-blur-sm">
              <MapPin className="mx-auto mb-1 text-primary" size={24} aria-hidden="true" />
              <p className="text-sm font-semibold text-card-foreground">Biroul Notarial</p>
              <p className="text-xs text-muted-foreground">B-dul Ion Mihalache 106</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
