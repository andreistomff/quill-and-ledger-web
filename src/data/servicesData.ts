
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
          "Ultima factură și chitanță privind plata la zi a utilităţilor aferente imobilului."
        ]
      },
      {
        name: "Contract de Partaj",
        description: "Contractul de partaj se încheie între coproprietarii unui bun pentru împărțirea bunului comun și transformarea cotelor-părți ideale în proprietăți distincte.",
        documents: [
          "Acte de identitate părţi",
          "Actele de proprietate ale imobilului de partajat",
          "Certificate fiscale pe numele fiecărui coproprietar - se obțin gratuit prin notariat",
          "Documentaţia cadastrală",
          "Extras de carte funciară pentru autentificare - se obţine prin notariat",
          "Pentru apartamente - adeverinţa eliberată de asociaţia de proprietari",
          "La imobilele dobândite prin credit - acordul scris al băncii cu privire la încheierea partajului",
          "In cazul terenurilor - certificat de urbanism"
        ]
      },
      {
        name: "Contract de Schimb Imobiliar",
        description: "Prin contractul de schimb, părțile își transmit reciproc proprietatea asupra unor bunuri imobile, fără plată de bani.",
        documents: [
          "Acte de identitate părţi",
          "Actele de proprietate ale imobilelor ce fac obiectul schimbului",
          "Certificate fiscale pe numele proprietarilor, eliberate de Administraţia Financiară competentă, din care să rezulte că proprietarii-coschimbaşi au achitat la zi datoriile către Stat",
          "Documentaţia cadastrală a bunurilor imobile, întocmita de un expert cadastral autorizat",
          "Extrasele de carte funciară, se obţin prin notariat",
          "In cazul schimbului de apartamente: adeverinţe eliberate de asociaţiile de proprietari sau locatari care sa arate că proprietarul este la zi cu datoriile faţă de aceasta"
        ]
      },
      {
        name: "Contract de Întreținere",
        description: "Contractul de întreținere se încheie între părți pentru acordarea de servicii de întreținere și îngrijire în schimbul unor prestații convenite.",
        documents: [
          "Acte de identitate părţi",
          "Acte de proprietate asupra imobilului ce face obiectul contractului",
          "Certificat fiscal pe numele proprietarului, eliberat de Administraţia Financiară competentă",
          "Documentaţia cadastrală a bunului imobil, întocmită de un expert cadastral autorizat",
          "Extras de carte funciară pentru autentificare",
          "Pentru apartamente, adeverinţa eliberată de asociaţia de proprietari sau locatari care sa arate că proprietarul este la zi cu datoriile faţă de aceasta"
        ]
      },
      {
        name: "Act de Dezmembrare sau Dezlipire a unui Imobil",
        description: "Actul prin care se realizează dezmembrarea sau dezlipirea unui imobil în mai multe parcele distincte, conform reglementărilor urbanistice în vigoare.",
        documents: [
          "Actele de identitate ale părţilor",
          "Acte de proprietate imobil",
          "Certificat fiscal, în termen de valabilitate, emis pe numele proprietarului de către Administraţia Financiară",
          "Doar dacă în urma dezmembrării rezultă mai mult de două loturi - certificat de urbanism în termen de valabilitate;",
          "Documentaţia cadastrală a bunului imobil, întocmită de un expert cadastral autorizat",
          "Extras de carte funciară pentru autentificare, se obţine prin notariat",
          "Doar pentru persoanele juridice: certificat de înregistrare, act constitutiv, hotărâre AGA"
        ]
      },
      {
        name: "Contract de Închiriere Imobil",
        description: "Prin contractul de închiriere, proprietarul (locatorul) concede locatarului dreptul de a folosi un imobil pe o perioadă determinată, în schimbul unei plăți (chiria).",
        documents: [
          "Acte de identitate părţi",
          "Certificat de căsătorie proprietari (dacă este cazul)",
          "Actul de proprietate al bunului de închiriat",
          "Dacă imobilul este intabulat, documentația cadastrală și încheierea de înscriere în cartea funciară;",
          "Extras de carte funciară pentru informare, se obtine prin notariat",
          "Certificat de performanță energetică"
        ]
      },
      {
        name: "Contract de Comodat Auto",
        description: "Prin contractul de comodat auto, comodantul pune gratuit la dispoziția comodatarului un autovehicul pentru folosință pe o perioadă determinată.",
        documents: [
          "Acte de identitate părţi",
          "Talon şi carte de identitate maşină",
          "Certificat fiscal - se obține prin notariat",
          "Pentru mașini cumpărate în leasing: acordul firmei de leasing"
        ]
      },
      {
        name: "Contract de Comodat Imobil de Tip Locuință sau Spațiu Comercial",
        description: "Prin contractul de comodat imobiliar, comodantul pune gratuit la dispoziția comodatarului un imobil (locuință sau spațiu comercial) pentru folosință pe o perioadă determinată.",
        documents: [
          "Acte de identitate părţi",
          "Acte de proprietate imobil",
          "Pentru persoanele juridice: acte de funcţionare Societate / PFA"
        ]
      },
      {
        name: "Contract de Tranzacție în Urma unui Accident Auto",
        description: "Contractul prin care părțile implicate într-un accident auto ajung la o înțelegere amiabilă privind despăgubirile și renunță la orice pretenții ulterioare.",
        documents: [
          "Acte de identitate părţi",
          "După caz, proces-verbal eliberat de agentul constatator, talonul mașinii/mașinilor implicate în accident."
        ]
      },
      {
        name: "Contract de Credit(imprumut) cu Ipotecă sau Gaj",
        description: "Contractul prin care creditorul acordă un împrumut debitorului, iar acesta garantează rambursarea prin constituirea unei ipoteci sau unui gaj asupra unui bun.",
        documents: [
          "Acte de identitate părţi",
          "Acte de proprietate asupra bunului ce face obiectul tranzacţiei",
          "Certificat fiscal pe numele proprietarului, eliberat de Administraţia Financiară competentă",
          "Extras de carte funciară de autentificare - se obţine prin notariat",
          "Documentaţia cadastrală a bunului imobil, întocmită de un expert cadastral autorizat"
        ]
      },
      {
        name: "Contract de Rentă Viageră",
        description: "Prin contractul de rentă viageră, debitorul de rentă se obligă să plătească creditorului de rentă, pe durata vieții acestuia, o prestație periodică, în schimbul transmiterii unui bun sau a unei sume de bani.",
        documents: [
          "Acte de identitate părţi",
          "Acte de proprietate asupra imobilului ce face obiectul contractului de rentă viageră",
          "Certificat fiscal pe numele proprietarului, eliberat de Administraţia Financiară competentă",
          "Documentaţia cadastrală a bunului imobil, întocmită de un expert cadastral autorizat",
          "Extras de carte funciară de autentificare - se obţine prin notariat",
          "In cazul apartamentelor, adeverinţa eliberată de asociaţia de proprietari sau locatari care sa arate că proprietarul este la zi cu datoriile faţă de aceasta"
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
              "Adeverinţă valoare loc de veci"
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
        description: "Notarul public poate constata divortul prin acordul sotilor si poate elibera certificatul de divort si cand acestia nu au copii minori.",
        documents: [
          "Actele de identitate ale soților",
          "Certificate de naştere (în original sau copie legalizată)",
          "certificat de căsătorie (în original)"
        ]
      },
      {
        name: "Divorț prin Acordul Părților cu Copii Minori",
        description: "Notarul public poate constata divorțul prin acordul soţilor şi elibera certificatul de divorţ, inclusiv dacă există copii minori născuţi din căsătorie, din afara ei sau adoptaţi.",
        documents: [
          "Actele de identitate ale soților",
          "Certificate de naştere (original sau copie legalizată)",
          "Certificat de căsătorie (original)",
          "Certificat de naştere copil minor (original sau copie legalizată)"
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
          "Documente suplimentare relevante - va rugam contactati-ne pentru detalii"
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
        description: "Notarul public acordă consultaţii juridice scrise sau verbale, la sediul cabinetului notarial, în următoarele domenii: contracte imobiliare (vânzare, donație, partaj etc.), divorț și partaj între soți, succesiuni și testamente (drept succesoral), precum și orice alte acte notariale. Notarul public titular al Biroului este Mariana Cîrstocea, care a absolvit Facultatea de Drept din cadrul Universității București în anul 1989 și are o experiență de peste 25 de ani în profesii juridice (avocat, magistrat); in desfășurarea activității ca magistrat a soluționat cauze în materie civilă și comercială, iar ultima instanță la care a activat a fost Înalta Curte de Casație și Justiție – Secția a II-a Civilă.",
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
      }
    ],
    legalizationServices: [
      {
        name: "Legalizări",
        description: "Vă puteţi adresa biroului nostru notarial pentru a solicita următoarele servicii de legalizări:",
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

