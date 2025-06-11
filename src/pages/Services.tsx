
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Service = {
  name: string;
  description: string;
  documents: string[];
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
        description: "Prin contractul de vânzare a unui imobil, vânzătorul îi transmite cumpărătorului proprietatea unui apartament, case, teren, pentru prețul convenit, stabilit în bani.",
        documents: [
          "Acte de identitate părţi",
          "Acte de proprietate imobil",
          "Certificat fiscal - se obține prin notariat",
          "Documentaţia cadastrală",
          "Extras de carte funciară pentru autentificare - se obţine prin notariat",
          "Certificat de performanță energetică, eliberat de un auditor energetic atestat",
          "Pentru apartamente - adeverinţă de la asociaţia de proprietari",
          "Ultima factură și chitanță privind plata la zi a utilităţilor imobilului"
        ]
      },
      {
        name: "Antecontract Vânzare-Cumpărare (Precontract)",
        description: "Antecontractul de vânzare-cumpărare a unui imobil, numit și promisiune de vânzare-cumpărare sau precontract, este un act încheiat la notariat în formă autentică prin care proprietarul unui imobil se obligă faţă de promitentul cumpărător să i-l vândă acestuia în viitor, la data convenită.",
        documents: [
          "Acte de identitate părţi",
          "Acte de proprietate imobil",
          "Documentaţia cadastrală",
          "Extras de carte funciară pentru informare - se obţine prin notariat"
        ]
      },
      {
        name: "Contract de Donaţie Imobil",
        description: "Prin contractul de donaţie, donatorul transmite donatarului, gratuit şi irevocabil, dreptul asupra unui bun.",
        documents: [
          "Acte de identitate părţi",
          "Acte de proprietate imobil",
          "Certificat fiscal - se obține prin notariat",
          "Documentaţia cadastrală",
          "Extras de carte funciară pentru autentificare - se obţine prin notariat",
          "Pentru apartamente - adeverinţă de la asociaţia de proprietari",
          "Ultima factură și chitanță privind plata la zi a utilităţilor imobilului"
        ]
      },
      {
        name: "Contract de Partaj",
        description: "Contractul de partaj se încheie între coproprietarii unui bun pentru împărțirea bunului comun și transformarea cotelor-părți ideale în proprietăți distincte.",
        documents: [
          "Acte de identitate ale tuturor coproprietarilor",
          "Acte de proprietate ale bunului comun",
          "Documentația cadastrală",
          "Extras de carte funciară pentru autentificare",
          "Acordul tuturor coproprietarilor"
        ]
      },
      {
        name: "Contract de Schimb Imobiliar",
        description: "Prin contractul de schimb, părțile își transmit reciproc proprietatea asupra unor bunuri imobile, fără plată de bani.",
        documents: [
          "Acte de identitate părţi",
          "Acte de proprietate pentru ambele imobile",
          "Certificat fiscal pentru ambele imobile",
          "Documentaţia cadastrală pentru ambele imobile",
          "Extras de carte funciară pentru autentificare pentru ambele imobile",
          "Certificat de performanță energetică pentru ambele imobile"
        ]
      },
      {
        name: "Toate Contractele",
        description: "Servicii complete pentru întocmirea și autentificarea oricărui tip de contract conform legislației în vigoare.",
        documents: [
          "Acte de identitate părţi",
          "Documente specifice obiectului contractului",
          "Documente suplimentare conform tipului de contract"
        ]
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
        ]
      },
      {
        name: "Declarație de Moștenitor",
        description: "Documentul prin care se confirmă calitatea de moștenitor.",
        documents: [
          "Certificatul de deces",
          "Actele de identitate",
          "Documentele care dovedesc relația de rudenie"
        ]
      }
    ]
  },
  {
    id: "divort",
    title: "Divorț",
    services: [
      {
        name: "Divorț prin Acordul Părților fără Copii Minori",
        description: "Procedura de divorț consensual pentru cuplurile fără copii minori, realizată prin înțelegerea ambilor soți.",
        documents: [
          "Actele de identitate ale soților",
          "Certificatul de căsătorie",
          "Acordul de divorț semnat",
          "Dovada lipsei copiilor minori",
          "Convenția privind bunurile comune (dacă este cazul)"
        ]
      },
      {
        name: "Divorț prin Acordul Părților cu Copii Minori",
        description: "Procedura de divorț consensual pentru cuplurile cu copii minori, care necesită aprobarea instanței de judecată.",
        documents: [
          "Actele de identitate ale soților",
          "Certificatul de căsătorie",
          "Actele de naștere ale copiilor minori",
          "Acordul de divorț semnat",
          "Convenția privind exercitarea autorității părintești",
          "Convenția privind pensia de întreținere",
          "Convenția privind bunurile comune (dacă este cazul)"
        ]
      }
    ]
  },
  {
    id: "procuri",
    title: "Procuri",
    services: [
      {
        name: "Legalizare Documente Standard",
        description: "Pentru procuri, declarații pe proprie răspundere, formulare medicale și altele.",
        documents: [
          "Act de identitate emis de autorități",
          "Documente nesemnate ce necesită legalizare",
          "Documente suplimentare relevante"
        ]
      }
    ]
  },
  {
    id: "alte-servicii",
    title: "Alte Servicii",
    services: [
      {
        name: "Legalizare Acte pentru Societăți",
        description: "Pentru acte de înființare firmă, contracte comerciale și hotărâri.",
        documents: [
          "Act de identitate al administratorului/reprezentantului",
          "Documente nesemnate ale societății",
          "Acte privind înființarea societății"
        ]
      },
      {
        name: "Consultanță Juridică",
        description: "Servicii de consultanță juridică profesională în diverse domenii ale dreptului civil și comercial.",
        documents: [
          "Act de identitate",
          "Documentele relevante pentru consultația solicitată"
        ]
      },
      {
        name: "Convenție Matrimonială",
        description: "Întocmirea convenției matrimoniale pentru stabilirea regimului bunurilor între soți.",
        documents: [
          "Actele de identitate ale viitorilor soți",
          "Documentele privind bunurile ce fac obiectul convenției",
          "Certificatul de căsătorie (pentru convenții post-matrimoniale)"
        ]
      },
      {
        name: "Dată Certă",
        description: "Acordarea datei certe documentelor private pentru a le conferi opozabilitate față de terți.",
        documents: [
          "Act de identitate",
          "Documentul pentru care se solicită data certă",
          "Documente justificative (dacă este cazul)"
        ]
      },
      {
        name: "Declarații Notariale",
        description: "Primirea și autentificarea declarațiilor unilaterale de voință în formă notarială.",
        documents: [
          "Act de identitate al declarantului",
          "Documente justificative pentru conținutul declarației",
          "Documentele de proprietate (dacă declarația se referă la bunuri)"
        ]
      },
      {
        name: "Legalizări",
        description: "Servicii complete de legalizare pentru diverse tipuri de documente și semnături.",
        documents: [
          "Act de identitate emis de autorități",
          "Documentele ce necesită legalizare",
          "Documente suplimentare specifice tipului de legalizare"
        ]
      }
    ]
  }
];

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="border-l-4 border-primary/20 pl-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
    <div className="mb-2">
      <h4 className="font-playfair text-lg font-semibold text-primary">
        {service.name}
      </h4>
    </div>
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
  </div>
);

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="font-playfair text-3xl font-bold mb-8 text-primary">
        Serviciile noastre
      </h2>
      
      <Tabs defaultValue="contracte" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
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
