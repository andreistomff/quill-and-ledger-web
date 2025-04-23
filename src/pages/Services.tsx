
type Service = {
  name: string;
  description: string;
  documents: string[];
  price: string;
};

const services: Service[] = [
  {
    name: "Standard Document Notarization",
    description: "For powers of attorney, affidavits, medical forms, and more.",
    documents: [
      "Government-issued ID",
      "Unsigned documents needing notarization",
      "Related supporting documents",
    ],
    price: "$25 per signature",
  },
  {
    name: "Real Estate Closings",
    description: "Professional handling of deeds, mortgages, and real estate documents.",
    documents: [
      "Valid photo ID",
      "All relevant real estate documents (deed, mortgage, etc.)",
      "Completed forms as provided by parties",
    ],
    price: "$150 per closing",
  },
  {
    name: "Business & Corporate Notarization",
    description: "For business formation documents, contracts, and resolutions.",
    documents: [
      "Officer/representative government-issued ID",
      "Unsigned business documents",
      "Business entity formation papers",
    ],
    price: "$40 per document",
  },
];

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="font-playfair text-3xl font-bold mb-6 text-primary">
        Our Services
      </h2>
      <div className="space-y-8">
        {services.map((service) => (
          <div key={service.name} className="rounded-lg border border-gray-200 shadow-sm bg-white p-6">
            <h3 className="font-playfair text-2xl font-semibold mb-2 text-primary">{service.name}</h3>
            <p className="text-gray-700 font-inter mb-3">{service.description}</p>
            <div className="mb-2">
              <span className="block text-gray-500 text-sm font-semibold mb-1 font-inter">Required Documents:</span>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-[15px] font-inter">
                {service.documents.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
            <div className="font-semibold text-primary font-inter text-lg mt-4">Price: {service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
