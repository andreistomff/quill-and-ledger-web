
import { ServiceCategory } from "@/types/services";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "contracte",
    title: "Contracte",
    services: [
      {
        name: "Contract de Vânzare-Cumpărare Imobil",
        description: "Prin contractul de vânzare a unui imobil, vânzătorul îi transmite cumpărătorului proprietatea unui apartament, case, teren, pentru prețul convenit, stabilit în bani.",
        documents: [
          "Acte de identitate părți",
          "Acte de proprietate imobil",
          "Certificat fiscal - se obține prin notariat",
          "Documentația cadastrală",
          "Extras de carte funciară pentru autentificare - se obține prin notariat",
          "Certificat de performanță energetică, eliberat de un auditor energetic atestat",
          "Pentru apartamente - adeverință de la asociația de proprietari",
          "Ultima factură și chitanță privind plata la zi a utilităților imobilului"
        ]
      },
      {
        name: "Antecontract Vânzare-Cumpărare (Precontract)",
        description: "Antecontractul de vânzare-cumpărare a unui imobil, numit și promisiune de vânzare-cumpărare sau precontract, este un act încheiat la notariat în formă autentică prin care proprietarul unui imobil se obligă față de promitentul cumpărător să i-l vândă acestuia în viitor, la data convenită.",
        documents: [
          "Acte de identitate părți",
          "Acte de proprietate imobil",
          "Documentația cadastrală",
          "Extras de carte funciară pentru informare - se obține prin notariat"
        ]
      },
      {
        name: "Contract de Donație Imobil",
        description: "Prin contractul de donație, donatorul transmite donatorului, gratuit și irevocabil, dreptul asupra unui bun.",
        documents: [
          "Acte de identitate părți",
          "Acte de proprietate imobil",
          "Certificat fiscal - se obține prin notariat",
          "Documentația cadastrală",
          "Extras de carte funciară pentru autentificare - se obține prin notariat",
          "Pentru apartamente - adeverință de la asociația de proprietari",
          "Ultima factură și chitanță privind plata la zi a utilităților aferente imobilului."
        ]
      },
      {
        name: "Contract de Partaj",
        description: "Contractul de partaj se încheie între coproprietarii unui bun pentru împărțirea bunului comun și transformarea cotelor-părți ideale în proprietăți distincte.",
        documents: [
          "Acte de identitate părți",
          "Actele de proprietate ale imobilului de partajat",
          "Certificate fiscale pe numele fiecărui coproprietar - se obțin gratuit prin notariat",
          "Documentația cadastrală",
          "Extras de carte funciară pentru autentificare - se obține prin notariat",
          "Pentru apartamente - adeverința eliberată de asociația de proprietari",
          "La imobilele dobândite prin credit - acordul scris al băncii cu privire la încheierea partajului",
          "În cazul terenurilor - certificat de urbanism"
        ]
      },
      {
        name: "Contract de Schimb Imobiliar",
        description: "Prin contractul de schimb, părțile își transmit reciproc proprietatea asupra unor bunuri imobile, fără plată de bani.",
        documents: [
          "Acte de identitate părți",
          "Actele de proprietate ale imobilelor ce fac obiectul schimbului",
          "Certificate fiscale pe numele proprietarilor, eliberate de Administrația Financiară competentă, din care să rezulte că proprietarii-coschimbași au achitat la zi datoriile către Stat",
          "Documentația cadastrală a bunurilor imobile, întocmită de un expert cadastral autorizat",
          "Extrasele de carte funciară, se obțin prin notariat",
          "În cazul schimbului de apartamente: adeverințe eliberate de asociațiile de proprietari sau locatari care să arate că proprietarul este la zi cu datoriile față de aceasta"
        ]
      },
      {
        name: "Contract de Întreținere",
        description: "Contractul de întreținere se încheie între părți pentru acordarea de servicii de întreținere și îngrijire în schimbul unor prestații convenite.",
        documents: [
          "Acte de identitate părți",
          "Acte de proprietate asupra imobilului ce face obiectul contractului",
          "Certificat fiscal pe numele proprietarului, eliberat de Administrația Financiară competentă",
          "Documentația cadastrală a bunului imobil, întocmită de un expert cadastral autorizat",
          "Extras de carte funciară pentru autentificare",
          "Pentru apartamente, adeverința eliberată de asociația de proprietari sau locatari care să arate că proprietarul este la zi cu datoriile față de aceasta"
        ]
      },
      {
        name: "Act de Dezmembrare sau Dezlipire a unui Imobil",
        description: "Actul prin care se realizează dezmembrarea sau dezlipirea unui imobil în mai multe parcele distincte, conform reglementărilor urbanistice în vigoare.",
        documents: [
          "Actele de identitate ale părților",
          "Acte de proprietate imobil",
          "Certificat fiscal, în termen de valabilitate, emis pe numele proprietarului de către Administrația Financiară",
          "Doar dacă în urma dezmembrării rezultă mai mult de două loturi - certificat de urbanism în termen de valabilitate;",
          "Documentația cadastrală a bunului imobil, întocmită de un expert cadastral autorizat",
          "Extras de carte funciară pentru autentificare, se obține prin notariat",
          "Doar pentru persoanele juridice: certificat de înregistrare, act constitutiv, hotărâre AGA"
        ]
      },
      {
        name: "Contract de Închiriere Imobil",
        description: "Prin contractul de închiriere, proprietarul (locatorul) concede locatarului dreptul de a folosi un imobil pe o perioadă determinată, în schimbul unei plăți (chiria).",
        documents: [
          "Acte de identitate părți",
          "Certificat de căsătorie proprietari (dacă este cazul)",
          "Actul de proprietate al bunului de închiriat",
          "Dacă imobilul este intabulat, documentația cadastrală și încheierea de înscriere în cartea funciară;",
          "Extras de carte funciară pentru informare, se obține prin notariat",
          "Certificat de performanță energetică"
        ]
      },
      {
        name: "Contract de Comodat Auto",
        description: "Prin contractul de comodat auto, comodantul pune gratuit la dispoziția comodatarului un autovehicul pentru folosință pe o perioadă determinată.",
        documents: [
          "Acte de identitate părți",
          "Talon și carte de identitate mașină",
          "Certificat fiscal - se obține prin notariat",
          "Pentru mașini cumpărate în leasing: acordul firmei de leasing"
        ]
      },
      {
        name: "Contract de Comodat Imobil de Tip Locuință sau Spațiu Comercial",
        description: "Prin contractul de comodat imobiliar, comodantul pune gratuit la dispoziția comodatarului un imobil (locuință sau spațiu comercial) pentru folosință pe o perioadă determinată.",
        documents: [
          "Acte de identitate părți",
          "Acte de proprietate imobil",
          "Pentru persoanele juridice: acte de funcționare Societate / PFA"
        ]
      },
      {
        name: "Contract de Tranzacție în Urma unui Accident Auto",
        description: "Contractul prin care părțile implicate într-un accident auto ajung la o înțelegere amiabilă privind despăgubirile și renunță la orice pretenții ulterioare.",
        documents: [
          "Acte de identitate părți",
          "După caz, proces-verbal eliberat de agentul constatator, talonul mașinii/mașinilor implicate în accident."
        ]
      },
      {
        name: "Contract de Credit(împrumut) cu Ipotecă sau Gaj",
        description: "Contractul prin care creditorul acordă un împrumut debitorului, iar acesta garantează rambursarea prin constituirea unei ipoteci sau unui gaj asupra unui bun.",
        documents: [
          "Acte de identitate părți",
          "Acte de proprietate asupra bunului ce face obiectul tranzacției",
          "Certificat fiscal pe numele proprietarului, eliberat de Administrația Financiară competentă",
          "Extras de carte funciară de autentificare - se obține prin notariat",
          "Documentația cadastrală a bunului imobil, întocmită de un expert cadastral autorizat"
        ]
      },
      {
        name: "Contract de Rentă Viageră",
        description: "Prin contractul de rentă viageră, debitorul de rentă se obligă să plătească creditorului de rentă, pe durata vieții acestuia, o prestație periodică, în schimbul transmiterii unui bun sau a unei sume de bani.",
        documents: [
          "Acte de identitate părți",
          "Acte de proprietate asupra imobilului ce face obiectul contractului de rentă viageră",
          "Certificat fiscal pe numele proprietarului, eliberat de Administrația Financiară competentă",
          "Documentația cadastrală a bunului imobil, întocmită de un expert cadastral autorizat",
          "Extras de carte funciară de autentificare - se obține prin notariat",
          "În cazul apartamentelor, adeverința eliberată de asociația de proprietari sau locatari care să arate că proprietarul este la zi cu datoriile față de aceasta"
        ]
      }
    ]
  },
  {
    id: "succesiune",
    title: "Succesiune",
    services: [],
    inheritanceServices: [
      {
        name: "Acte necesare succesiune - eliberare certificat moștenitor",
        description: "Puteți dezbate succesiunea la noi doar dacă ultimul domiciliu al defunctului a fost în București.",
        assetTypes: {
          imobil: {
            label: "Imobil (apartament, casă, teren)",
            documents: [
              "Acte identitate moștenitori",
              "Certificat de deces",
              "Acte stare civilă moștenitori",
              "2 martori",
              "Dacă există, testamentul",
              "Act de proprietate bun imobil",
              "Certificat fiscal imobil"
            ]
          },
          cont_bancar: {
            label: "Cont bancar sau depozit",
            documents: [
              "Acte identitate moștenitori",
              "Certificat de deces",
              "Acte stare civilă moștenitori",
              "2 martori",
              "Dacă există, testamentul",
              "Extras de cont bancar"
            ]
          },
          autoturism: {
            label: "Autoturism",
            documents: [
              "Acte identitate moștenitori",
              "Certificat de deces",
              "Acte stare civilă moștenitori",
              "2 martori",
              "Dacă există, testamentul",
              "Talon și carte de identitate auto",
              "Certificat fiscal automobil"
            ]
          },
          pensie_privata: {
            label: "Pensie privată",
            documents: [
              "Acte identitate moștenitori",
              "Certificat de deces",
              "Acte stare civilă moștenitori",
              "2 martori",
              "Dacă există, testamentul",
              "Nume administrator fond pensii"
            ]
          },
          actiuni: {
            label: "Acțiuni",
            documents: [
              "Acte identitate moștenitori",
              "Certificat de deces",
              "Acte stare civilă moștenitori",
              "2 martori",
              "Dacă există, testamentul",
              "Certificat de acționar, dacă există",
              "Extras de cont Depozitar Central"
            ]
          },
          loc_veci: {
            label: "Loc de veci",
            documents: [
              "Acte identitate moștenitori",
              "Certificat de deces",
              "Acte stare civilă moștenitori",
              "2 martori",
              "Dacă există, testamentul",
              "Act concesiune loc de veci",
              "Adeverință valoare loc de veci"
            ]
          }
        }
      }
    ]
  },
  {
    id: "divort",
    title: "Divorț",
    services: [
      {
        name: "Divorț prin Acordul Părților fără Copii Minori",
        description: "Notarul public poate constata divorțul prin acordul soților și poate elibera certificatul de divorț și când aceștia nu au copii minori.",
        documents: [
          "Actele de identitate ale soților",
          "Certificate de naștere (în original sau copie legalizată)",
          "certificat de căsătorie (în original)"
        ]
      },
      {
        name: "Divorț prin Acordul Părților cu Copii Minori",
        description: "Notarul public poate constata divorțul prin acordul soților și elibera certificatul de divorț, inclusiv dacă există copii minori născuți din căsătorie, din afara ei sau adoptați.",
        documents: [
          "Actele de identitate ale soților",
          "Certificate de naștere (original sau copie legalizată)",
          "Certificat de căsătorie (original)",
          "Certificat de naștere copil minor (original sau copie legalizată)"
        ]
      }
    ]
  },
  {
    id: "procuri",
    title: "Procuri",
    services: [
      {
        name: "Procură sau împuternicire",
        description: "Prin procura notarială puteți împuternici o altă persoană să încheie acte juridice în numele dvs. De exemplu: reprezentare la notariat pentru vânzarea unui imobil, la dezbaterea succesiunii, în fața instanței sau a unei instituții bancare.",
        documents: [
          "Act de identitate mandant, în original",
          "Copie act de identitate mandatar",
          "Documente suplimentare relevante - vă rugăm contactați-ne pentru detalii"
        ]
      }
    ]
  },
  {
    id: "alte-servicii",
    title: "Alte Servicii",
    services: [
      {
        name: "Consultanță Juridică",
        description: "Notarul public acordă consultații juridice scrise sau verbale, la sediul cabinetului notarial, în următoarele domenii: contracte imobiliare (vânzare, donație, partaj etc.), divorț și partaj între soți, succesiuni și testamente (drept succesoral), precum și orice alte acte notariale. Notarul public titular al Biroului este Mariana Cîrstocea, care a absolvit Facultatea de Drept din cadrul Universității București în anul 1989 și are o experiență de peste 25 de ani în profesii juridice (avocat, magistrat). În desfășurarea activității ca magistrat a soluționat cauze în materie civilă și comercială, iar ultima instanță la care a activat a fost Înalta Curte de Casație și Justiție – Secția a II-a Civilă.",
        documents: []
      },
      {
        name: "Convenție Matrimonială",
        description: "Soții pot alege prin convenție matrimonială între regimul separației de bunuri sau cel al comunității convenționale. Când soții nu încheie o convenție matrimonială, li se va aplica de drept regimul comunității legale. Pentru mai multe vă rugăm contactați-ne.",
        documents: []
      },
      {
        name: "Dată Certă",
        description: "Prin darea de dată certă înscrisului sub semnătură privată de către notarul public, data menționată în acest înscris devine opozabilă și altor persoane decât celor care l-au semnat.",
        documents: [
          "Actul căruia urmează să i se dea dată certă (original și nesemnat)",
          "Actul de identitate al solicitantului (BI, CI etc.)"
        ]
      },
      {
        name: "Declarații Notariale",
        description: "Uneori, pentru ca o declarație pe proprie răspundere să fie valabilă juridic, legea impune să fie încheiată în formă autentică, la notariat. De ex., declarația de renunțare la moștenire, conform Codului Civil, trebuie dată în fața notarului public. De asemenea, diverse acte normative, legi speciale, regulamente interioare ale instituțiilor, ordine de ministru, hotărâri de guvern sau consiliu local pot impune necesitatea declarației notariale. Pentru orice alte informații vă rugăm contactați-ne.",
        documents: []
      }
    ],
    legalizationServices: [
      {
        name: "Legalizări",
        description: "Vă puteți adresa biroului nostru notarial pentru a solicita următoarele servicii de legalizări:",
        legalizationTypes: {
          copii_inscrisuri: {
            label: "Legalizare copii de pe înscrisuri (acte)",
            documents: [
              "Originalul sau duplicatul documentului",
              "Cerere de legalizare - se va completa la notariat",
              "Pentru copii din arhiva biroului notarial, actul de identitate"
            ]
          },
          semnatura_sigiliu: {
            label: "Legalizare semnătură sau sigiliu",
            documents: [
              "Exemplarele înscrisului, nesemnate",
              "Acte de identitate",
              "Pentru sigilii, sigiliul propriu-zis"
            ]
          },
          traduceri: {
            label: "Traduceri legalizate",
            documents: [
              "Vă rugăm contactați-ne pentru mai multe informații"
            ]
          }
        }
      }
    ]
  }
];
