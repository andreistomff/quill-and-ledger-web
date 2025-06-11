
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Service = {
  name: string;
  description: string;
  documents: string[];
  price: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  services: Service[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "contracte",
    title: "Contracte",
    services: [
      {
        name: "Contract de Vânzare-Cumpărare Imobil",
        description: "Întocmire și autentificare contracte pentru tranzacții imobiliare.",
        documents: [
          "Act de identitate valabil",
          "Documentele de proprietate ale imobilului",
          "Certificat de urbanism și autorizații necesare"
        ],
        price: "200 RON"
      },
      {
        name: "Contract de Donație",
        description: "Pentru transferul gratuit de bunuri între părți.",
        documents: [
          "Act de identitate al donatorului și donatarului",
          "Documentele de proprietate",
          "Certificat medical (dacă este necesar)"
        ],
        price: "150 RON"
      }
    ]
  },
  {
    id: "succesiune",
    title: "Succesiune",
    services: [
      {
        name: "Deschidere Succesiune",
        description: "Procedura legală pentru moștenirea bunurilor defunctului.",
        documents: [
          "Certificatul de deces",
          "Act de identitate al moștenitorilor",
          "Documentele de proprietate ale defunctului",
          "Certificatul de căsătorie (dacă este cazul)"
        ],
        price: "300 RON"
      },
      {
        name: "Declarație de Moștenitor",
        description: "Documentul prin care se confirmă calitatea de moștenitor.",
        documents: [
          "Certificatul de deces",
          "Actele de identitate",
          "Documentele care dovedesc relația de rudenie"
        ],
        price: "100 RON"
      }
    ]
  },
  {
    id: "divort",
    title: "Divorț",
    services: [
      {
        name: "Divorț prin Acordul Părților",
        description: "Procedura de divorț consensual pentru cuplurile fără copii minori.",
        documents: [
          "Actele de identitate ale soților",
          "Certificatul de căsătorie",
          "Acordul de divorț semnat",
          "Dovada lipsei copiilor minori"
        ],
        price: "250 RON"
      }
    ]
  },
  {
    id: "procuri",
    title: "Procuri și Alte Servicii",
    services: [
      {
        name: "Legalizare Documente Standard",
        description: "Pentru procuri, declarații pe proprie răspundere, formulare medicale și altele.",
        documents: [
          "Act de identitate emis de autorități",
          "Documente nesemnate ce necesită legalizare",
          "Documente suplimentare relevante"
        ],
        price: "25 RON / semnătură"
      },
      {
        name: "Legalizare Acte pentru Societăți",
        description: "Pentru acte de înființare firmă, contracte comerciale și hotărâri.",
        documents: [
          "Act de identitate al administratorului/reprezentantului",
          "Documente nesemnate ale societății",
          "Acte privind înființarea societății"
        ],
        price: "40 RON / document"
      }
    ]
  }
];

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="border-l-4 border-primary/20 pl-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
    <h4 className="font-playfair text-lg font-semibold mb-2 text-primary">
      {service.name}
    </h4>
    <p className="text-gray-700 font-inter mb-3">
      {service.description}
    </p>
    <div className="mb-2">
      <span className="block text-gray-500 text-sm font-semibold mb-1 font-inter">
        Documente necesare:
      </span>
      <ul className="list-disc list-inside space-y-1 text-gray-600 text-[15px] font-inter">
        {service.documents.map((doc, idx) => (
          <li key={idx}>{doc}</li>
        ))}
      </ul>
    </div>
    <div className="font-semibold text-primary font-inter text-lg mt-4">
      Preț: {service.price}
    </div>
  </div>
);

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="font-playfair text-3xl font-bold mb-8 text-primary">
        Serviciile noastre
      </h2>
      
      <Tabs defaultValue="contracte" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          {serviceCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="font-inter text-sm"
            >
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {serviceCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            {category.services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
