
import { Helmet } from "react-helmet-async";
import { serviceCategories } from "@/data/servicesData";
import ServiceTabs from "@/components/services/ServiceTabs";

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Servicii Notariale",
    "description": "Lista completă a serviciilor notariale oferite de Biroul Notarial Mariana Cîrstocea",
    "itemListElement": serviceCategories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": category.title,
        "description": `Servicii notariale de ${category.title.toLowerCase()}`
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Servicii Notariale - Biroul Notarial Mariana Cîrstocea</title>
        <meta name="description" content="Servicii notariale complete: contracte, succesiuni, legalizări, consultanță juridică și multe altele. Biroul Notarial Mariana Cîrstocea vă oferă servicii profesionale." />
        <meta name="keywords" content="servicii notariale, contracte notariale, succesiuni, legalizări, consultanță juridică, notar Mariana Cîrstocea" />
        <link rel="canonical" href="https://notarmarianacirstocea.ro/services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto py-8 px-4">
        <header className="mb-8">
          <h1 className="font-playfair text-3xl font-bold text-primary">
            Serviciile noastre
          </h1>
          <p className="mt-2 text-muted-foreground font-inter">
            Biroul notarial oferă o gamă completă de servicii notariale conform legislației în vigoare.
          </p>
        </header>
        
        <main>
          <ServiceTabs categories={serviceCategories} />
        </main>
      </div>
    </>
  );
}
