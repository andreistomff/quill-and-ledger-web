
type Service = {
  name: string;
  description: string;
  documents: string[];
  price: string;
};

const services: Service[] = [
  {
    name: "Legalizare Documente Standard",
    description: "Pentru procuri, declarații pe proprie răspundere, formulare medicale și altele.",
    documents: [
      "Act de identitate emis de autorități",
      "Documente nesemnate ce necesită legalizare",
      "Documente suplimentare relevante",
    ],
    price: "25 RON / semnătură",
  },
  {
    name: "Întocmire Acte Imobiliare",
    description: "Asistență profesională pentru acte de proprietate, ipoteci și tranzacții imobiliare.",
    documents: [
      "Act de identitate valabil",
      "Toate documentele relevante pentru actul imobiliar (contract vânzare-cumpărare, ipotecă, etc.)",
      "Formulare completate de către părți",
    ],
    price: "150 RON / tranzacție",
  },
  {
    name: "Legalizare Acte pentru Societăți",
    description: "Pentru acte de înființare firmă, contracte comerciale și hotărâri.",
    documents: [
      "Act de identitate al administratorului/reprezentantului",
      "Documente nesemnate ale societății",
      "Acte privind înființarea societății",
    ],
    price: "40 RON / document",
  },
];

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="font-playfair text-3xl font-bold mb-6 text-primary">
        Serviciile noastre
      </h2>
      <div className="space-y-8">
        {services.map((service) => (
          <div key={service.name} className="rounded-lg border border-gray-200 shadow-sm bg-white p-6">
            <h3 className="font-playfair text-2xl font-semibold mb-2 text-primary">{service.name}</h3>
            <p className="text-gray-700 font-inter mb-3">{service.description}</p>
            <div className="mb-2">
              <span className="block text-gray-500 text-sm font-semibold mb-1 font-inter">Documente necesare:</span>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-[15px] font-inter">
                {service.documents.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
            <div className="font-semibold text-primary font-inter text-lg mt-4">Preț: {service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
