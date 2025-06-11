
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContactSection from "../components/ContactSection";

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
          <ContactSection />
        </section>
      </div>
    </>
  );
}
