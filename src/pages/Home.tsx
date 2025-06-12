
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Lazy load ContactSection since it's below the fold
const ContactSection = lazy(() => import("../components/ContactSection"));

const ContactSectionLoader = () => (
  <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-8 mt-16 mb-8 border border-border">
    <div className="h-8 bg-muted animate-pulse rounded mb-4"></div>
    <div className="space-y-4">
      <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
      <div className="h-4 bg-muted animate-pulse rounded w-1/2"></div>
      <div className="h-32 bg-muted animate-pulse rounded"></div>
    </div>
  </div>
);

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Biroul Notarial Mariana Cîrstocea",
    "description": "Biroul notarial Mariana Cîrstocea oferă servicii notariale complete conform Legii notarilor publici și a activității notariale.",
    "url": "https://notarmarianacirstocea.ro",
    "serviceType": "Notary Services",
    "areaServed": {
      "@type": "Country",
      "name": "România"
    },
    "provider": {
      "@type": "Person",
      "name": "Mariana Cîrstocea",
      "jobTitle": "Notar Public"
    }
  };

  return (
    <>
      <Helmet>
        <title>Biroul Notarial Mariana Cîrstocea - Servicii Notariale Profesionale</title>
        <meta name="description" content="Biroul notarial Mariana Cîrstocea oferă servicii notariale complete conform Legii notarilor publici: contracte, succesiuni, legalizări, consultanță juridică." />
        <meta name="keywords" content="notar, biroul notarial, Mariana Cîrstocea, servicii notariale, contracte, succesiuni, legalizări" />
        <link rel="canonical" href="https://notarmarianacirstocea.ro" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/services" as="document" />
        <link rel="preload" href="/lovable-uploads/8f8cac27-aa5b-47fa-beae-433a11078e3d.png" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//maps.google.com" />
        <link rel="dns-prefetch" href="//www.waze.com" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col justify-center items-center py-16 px-4 bg-background">
        <div className="text-center max-w-4xl mx-auto">
          <header>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Biroul Notarial Mariana Cîrstocea
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 font-inter leading-relaxed">
              Biroul notarial Mariana Cîrstocea oferă serviciile care sunt prevăzute de Legea notarilor publici și a activității notariale.
            </p>
          </header>
          
          <div className="mb-16">
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-4 rounded shadow transition hover:bg-primary/90 font-inter text-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Navigare la pagina cu toate serviciile notariale oferite de biroul nostru"
            >
              Vizualizează Serviciile
            </Link>
          </div>
        </div>
        
        <section className="w-full max-w-4xl mx-auto" aria-labelledby="contact-heading">
          <Suspense fallback={<ContactSectionLoader />}>
            <ContactSection />
          </Suspense>
        </section>
      </div>
    </>
  );
}
