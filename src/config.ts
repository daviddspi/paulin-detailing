export const BUSINESS_CONFIG = {
  name: "Paulin Detailing",
  logo: "https://paulin.rs/images/paulin.svg",
  slug: "paulin-detailing",
  tagline: "Vrhunski Detailing i Nega za Vaša Premijum Vozila.",
  shortDescription: "Specijalizovan studio u Novom Sadu za kompletnu negu: od pranja u tri faze i dubinskog čišćenja, do višeslojnog poliranja i vrhunske keramičke zaštite.",
  longDescription: "Smešten na adresi Slavka Rodića 1 u Novom Sadu, Paulin Detailing studio pruža beskompromisni kvalitet u svetu auto-detailinga. Naš pristup podrazumeva upotrebu najsavremenijih tehnologija i materijala, uz strogu pažnju na svaki milimetar vašeg vozila. Bez obzira na to da li je reč o osvežavanju enterijera ili potpunoj restauraciji sjaja karoserije, garantujemo rezultat koji nadilazi očekivanja.",
  philosophy: {
    quote: "Detailing Novi Sad - Transformacija i zaštita vašeg automobila uz vrhunsku pažnju.",
    author: "Branko Paulin, Osnivač"
  },
  stats: [
    { label: 'Standard', value: 'Premijum' },
    { label: 'Lokacija', value: 'Novi Sad' },
    { label: 'Iskustvo', value: 'Dugogodišnje' },
    { label: 'Garancija', value: 'Kvalitet' },
  ],
  contact: {
    phones: ["062 124 92 00"],
    emails: ["detailing@paulin.rs"],
    locations: [
      {
        name: "Paulin Detailing Studio",
        address: "Slavka Rodića 1, Novi Sad, Srbija",
        mapUrl: "https://www.google.com/maps/dir//45.2355833,19.7884167/@45.2355833,19.7884167,14z"
      }
    ],
    workingHours: "Po dogovoru / Zakazivanje obavezno",
    social: {
      instagram: "https://www.instagram.com/paulin_detailing"
    }
  },
  services: [
    { 
      title: 'Detailing i nega', 
      description: 'Kompletna nega eksterijera i enterijera koristeći najkvalitetnije PH neutralne preparate i precizne tehnike čišćenja.',
      price: 'od 2.500 RSD',
      duration: 'h / d',
      targetId: 'cat-detailing'
    },
    { 
      title: 'Poliranje', 
      description: 'Profesionalna korekcija laka i vraćanje visokog sjaja uz uklanjanje mikro-ogrebotina i holograma.',
      price: 'od 13.000 RSD',
      duration: '1-2 dana',
      targetId: 'cat-poliranje'
    },
    { 
      title: 'Zaštitni premazi', 
      description: 'Dugotrajna hemijska i UV zaštita karoserije, felni i enterijera vrhunskim keramičkim i grafenskim premazima.',
      price: 'od 25.000 RSD',
      duration: '2-3 dana',
      targetId: 'cat-zastita'
    },
    { 
      title: 'Folia', 
      description: 'Vrhunska zaštita od kamenčića (PPF) ili potpuna estetska transformacija vašeg vozila uz najkvalitetnije vinil folije.',
      price: 'Upit',
      duration: '2-4 dana',
      targetId: 'cat-folia'
    },
    { 
      title: 'Ostali radovi', 
      description: 'Specijalizovane usluge poput PDR ispravljanja udubljenja, restauracije kože, farbanje felni i dodatne zvučne izolacije.',
      price: 'Upit',
      duration: 'h/dan',
      targetId: 'cat-ostalo'
    },
    { 
      title: 'Obuka za detailing', 
      description: 'Profesionalna 1 na 1 edukacija za sve koji žele da savladaju veštine detailinga od osnova do naprednih tehnika.',
      price: 'Upit',
      duration: 'po dogovoru',
      targetId: 'cat-obuka'
    },
  ],
  serviceCategories: [
    {
      id: "cat-detailing",
      title: "Detailing i nega",
      services: [
        { 
          name: "Dubinsko pranje enterijera", 
          prices: [8200, 9400, 10600, 11700], 
          desc: "Temeljno čišćenje svih površina uz ekstrakciju.",
          longDesc: "Dubinsko pranje enterijera podrazumeva detaljnu dezinfekciju i revitalizaciju unutrašnjosti vozila. Proces počinje detaljnim usisavanjem i izduvavanjem svih nabora komprimovanim vazduhom. Sledi tretman fleka na sedištima, podovima i nebu specijalnim hemijskim sredstvima i ručno četkanje. Glavni deo procesa je mašinsko ekstrakciono pranje vrhunskim mašinama, koje izvlače prljavštinu iz dubine materijala. Na kraju se vrši neutralizacija mirisa i zaštita materijala (kože ili tekstila) kako bi enterijer ostao duže čist.",
          duration: "1-2 dana",
          subServices: [
            { name: "Ozonizacija kabine (neutralizacija mirisa)", prices: [4000, 4000, 4000, 4000] },
            { name: "Čišćenje kožnih sedišta (detailing kože)", prices: [2000, 2000, 2000, 3000] },
            { name: "Uklanjanje dlaka kućnih ljubimaca", prices: [1500, 1500, 2000, 2500] }
          ]
        },
        { 
          name: "Detailing enterijera", 
          prices: [13000, 14000, 16000, 18000], 
          desc: "Premium nega kože, plastike i svih detalja.",
          longDesc: "Ovaj tretman ide korak dalje od klasičnog dubinskog pranja. Fokus je na svakom milimetru unutrašnjosti - od ventilacionih otvora do najsitnijih dugmića. Sve plastične i vinilne površine se detaljno čiste i premazuju zaštitnim sredstvima koja vraćaju fabrički izgled i pružaju UV zaštitu. Kožni elementi se tretiraju posebnim balzamima koji čuvaju elastičnost i sprečavaju pucanje. Enterijer ne samo da je čist, već izgleda i miriše kao nov.",
          duration: "1-2 dana"
        },
        { 
          name: "Pranje u tri faze", 
          prices: [2500, 3000, 3500, 4000], 
          desc: "Beskontaktno i ručno pranje sa dekontaminacijom.",
          longDesc: "Ekskluzivno pranje koje garantuje nula ogrebotina. (1) Prva faza je beskontaktno pranje aktivnom penom. (2) Druga faza je detaljno ručno pranje 'two-bucket' metodom uz korišćenje PH neutralnih šampona. (3) Treća faza je dekontaminacija laka (glina/clay bar) radi uklanjanja čestica metala i katrana. Rezultat je savršeno glatka karoserija spremna za zaštitu.",
          duration: "2-4h"
        },
        { 
          name: "Nega motornog prostora", 
          prices: [3000, 3500, 4000, 4500], 
          desc: "Bezbedno čišćenje i zaštita agregata.",
          longDesc: "Motorni prostor se čisti uz maksimalnu pažnju na elektronske komponente. Koristimo specijalne odmašćivače koji ne nagrizaju gumu i plastiku. Nakon sušenja, svi plastični i gumeni delovi se konzerviraju premazom koji trpi visoke temperature, čime se sprečava njihovo starenje i olakšava buduće održavanje.",
          duration: "2-3h"
        },
        { name: "Dubinsko čišćenje hladnjaka", prices: [6000, 6000, 6000, 6000], desc: "Uklanjanje prljavštine za optimalno hlađenje." },
        { name: "Detailing nega vešanja i lukova", prices: [4000, 4500, 5000, 6000], desc: "Detailing pristup donjem postroju vozila." },
        { name: "Čišćenje krova kabrioleta", prices: [8000, 8000, 8000, 8000], desc: "Specijalizovana nega za platnene krovove." },
        { name: "Detailing motocikala", prices: [6000, 8000, 10000, 12000], desc: "Kompletna nega za sve tipove dvotočkaša." },
        { name: "Dezinfekcija osvežavanje (Ozon)", prices: [4000, 4000, 4000, 4000], desc: "Uklanjanje bakterija i mirisa (2.000 uz detailing)." }
      ]
    },
    {
      id: "cat-poliranje",
      title: "Poliranje",
      services: [
        { 
          name: "Poliranje auta", 
          prices: [13000, 14000, 15000, 16000], 
          desc: "Osvežavanje sjaja i uklanjanje lakših oštećenja.",
          longDesc: "Jednoslojno poliranje namenjeno vozilima sa dobro očuvanim lakom. Uklanja sitne površinske ogrebotine i vraća kristalni sjaj i dubinu boje.",
          duration: "1 dan"
        },
        { name: "Poliranje farova i stakala", prices: [3000, 3000, 3000, 3000], desc: "Vraćanje prozirnosti i UV zaštita staklenih i plastičnih površina." },
        { name: "Poliranje enterijerskih delova", prices: [4000, 5000, 6000, 7000], desc: "Osvežavanje piano-black i drvenih površina unutar kabine." },
      ]
    },
    {
      id: "cat-zastita",
      title: "Zaštitni premazi",
      services: [
        { 
          name: "Keramička zaštita za auto", 
          prices: [13000, 14000, 16000, 18000], 
          desc: "Dugotrajna hemijska i UV zaštita karoserije.",
          longDesc: "Keramički premaz stvara čvrst, stakleni štit na površini laka. Pruža ekstremnu hidrofobnost, zaštitu od ptičjeg izmeta, smole i UV zračenja.",
          duration: "1-2 dana"
        },
        { name: "Zaštita felni", prices: [5000, 7000, 8000, 11000], desc: "Dugotrajna zaštita od kočione prašine i soli keramičkim premazima." },
        { name: "Zaštita keramika za enterijer", prices: [5000, 6000, 7000, 8000], desc: "Nevidljiva zaštita za kožu i tekstil od fleka i habanja." },
        { name: "Keramička zaštita za staklo - HIDROFOBNI PREMAZ STAKLA", prices: [4500, 4500, 4500, 5000], desc: "Ekstremna hidrofobnost za bolju vidljivost i lakše čišćenje." },
      ]
    },
    {
      id: "cat-folia",
      title: "Folia",
      services: [
        { 
          name: "Oblaganje atermalnom folijom", 
          prices: [9000, 11000, 13000, 15000], 
          desc: "Termoizolaciona zaštita koja smanjuje prodor toplote u kabinu." 
        },
        { 
          name: "Oblaganje vinil folijom", 
          prices: [75000, 80000, 100000, 120000], 
          desc: "Promena boje i zaštita laka najkvalitetnijim vinil folijama.",
          subServices: [
            { name: "OBLAGANJE VINIL FOLIJOM - CELO VOZILO", prices: [75000, 80000, 100000, 120000] },
            { name: "DELOVI - KROV, RETROVIZORI, HAUBA", prices: [8000, 12000, 16000, 0] }
          ]
        },
        { 
          name: "Oblaganje tonirnom folijom", 
          prices: [9000, 11000, 13000, 15000], 
          desc: "Zatamnjivanje stakala radi privatnosti i UV zaštite.",
          subServices: [
            { name: "TONIRANJE STAKALA - KOMPLET ZADNjI DEO", prices: [9000, 11000, 13000, 15000] },
            { name: "POJEDINAČNO STAKLO - BOČNO/ZADNjE", prices: [2500, 3000, 3500, 4000] }
          ]
        },
        { 
          name: "Toniranje farova i zadnjih svetala", 
          prices: [4000, 5000, 6000, 7000], 
          desc: "Estetsko zatamnjivanje uz zadržavanje svetlosnog snopa." 
        },
        { 
          name: "Oblaganje dekorativnih elemenata", 
          prices: [3000, 4000, 5000, 6000], 
          desc: "Brendiranje ili estetsko osvežavanje detalja folijom.",
          subServices: [
            { name: "OBLAGANJE DEKORATIVNIH ELEMENATA - SPOLJA", prices: [3000, 4000, 5000, 6000] },
            { name: "OBLAGANJE DEKORATIVNIH ELEMENATA - ENTERIJER", prices: [4000, 5000, 6000, 7000] }
          ]
        },
        { 
          name: "Oblaganje stakala automobila", 
          prices: [15000, 18000, 21000, 24000], 
          desc: "Kompletno rešenje za zaštitu i estetiku svih stakala.",
          subServices: [
            { name: "OBLAGANJE STAKALA - KOMPLET VOZILO", prices: [15000, 18000, 21000, 24000] },
            { name: "PREDNjI DEO - ATERMALNA FOLIJA", prices: [9000, 11000, 13000, 15000] },
            { name: "ZADNjI DEO - TONIRANA FOLIJA", prices: [9000, 11000, 13000, 15000] }
          ]
        },
        { 
          name: "PPF folija", 
          prices: [105000, 115000, 125000, 140000], 
          desc: "Vrhunska prozirna zaštita od fizičkih oštećenja i kamenčića.",
          subServices: [
            { name: "PPF zaštitna folija - PREDNJI PAKET", prices: [105000, 115000, 125000, 140000] },
            { name: "PPF zaštitna folija - FULL PANELI", prices: [240000, 290000, 355000, 420000] }
          ]
        },
      ]
    },
    {
      id: "cat-ostalo",
      title: "Ostali radovi",
      services: [
        { 
          name: "Popravka oštećenja na staklima", 
          prices: [2000, 2500, 3000, 3500], 
          desc: "Sanacija oštećenja na vetrobranskom staklu najsavremenijom opremom.",
          subServices: [
            { name: "POPRAVKA TAČKASTOG OŠTEĆENJA - DO 5 mm", prices: [2000, 2500, 3000, 3500] },
            { name: "STAR - BULL'S EYE - KOMBINOVANO OŠTEĆENjE", prices: [3000, 3500, 4000, 4500] },
            { name: "KRATKA PUKOTINA - DO ~30 mm", prices: [3500, 4000, 4500, 5000] }
          ]
        },
        { 
          name: "Zvučna izolacija", 
          prices: [10000, 12000, 14000, 16000], 
          desc: "Smanjenje buke i vibracija vrhunskim izolacionim materijalima.",
          subServices: [
            { name: "VRATA - SET 4 PANELA", prices: [10000, 12000, 14000, 16000] },
            { name: "POD I FIREWALL", prices: [22000, 26000, 3000, 35000] },
            { name: "GEPEK I LUKOVI", prices: [16000, 18000, 21000, 24000] },
            { name: "FULL KABINA", prices: [45000, 55000, 65000, 75000] }
          ]
        },
        { 
          name: "Ugradnja auto multimedije", 
          prices: [20000, 25000, 30000, 35000], 
          desc: "Profesionalna ugradnja Android/CarPlay multimedija i audio opreme.",
          subServices: [
            { name: "UGRADNJA AUTO MULTIMEDIJE", prices: [20000, 25000, 30000, 35000] },
            { name: "UGRADNJA RIKVERC KAMERE", prices: [8000, 10000, 12000, 14000] },
            { name: "UGRADNJA DVR KAMERE", prices: [10000, 12000, 14000, 16000] },
            { name: "UGRADNJA ZVUČNIKA", prices: [6000, 8000, 10000, 12000] },
            { name: "PODEŠAVANJE CARPLAY / ANDROID AUTO", prices: [5000, 6000, 7000, 8000] }
          ]
        },
        { 
          name: "Farbanje felni", 
          prices: [18000, 24000, 28000, 34000], 
          desc: "Plastifikacija ili tečno farbanje felni sa reparacijom oštećenja.",
          subServices: [
            { name: "FARBANJE FELNI - SET 4 KOM", prices: [18000, 24000, 28000, 34000] },
            { name: "POPRAVKA CURB RASH - PO KOM", prices: [2000, 2500, 3000, 3500] },
            { name: "PESKARENJE I PRIPREMA - PO KOM", prices: [2500, 3000, 3500, 4000] }
          ]
        },
        { 
          name: "Farbanje kočionih čeljusti", 
          prices: [9000, 11000, 13000, 15000], 
          desc: "Farbanje bojama otpornim na visoke temperature.",
          subServices: [
            { name: "FARBANJE KOČIONIH ČELJUSTI - SET 4 KOM", prices: [9000, 11000, 13000, 15000] },
            { name: "DETALJNO ČIŠĆENjE I PRIPREMA - SET", prices: [2000, 2500, 3000, 3500] },
            { name: "LOGOTIPI - HEAT-RESIST DECAL - PO KOM", prices: [-1, -1, -1, -1] }
          ]
        },
        { 
          name: "Uklanjanje udubljenja bez farbanja", 
          prices: [2000, 2500, 3000, 3500], 
          desc: "Ispravljanje limarije hladnom metodom bez oštećenja farbe.",
          subServices: [
            { name: "PDR - MALO UDUBLjENJE DO ~25 mm", prices: [2000, 2500, 3000, 3500] },
            { name: "PDR - SREDNjE DO ~50 mm", prices: [3000, 3500, 4000, 4500] },
            { name: "GRADOBITjA - PANEL PO PANEL", prices: [4000, 5000, 6000, 7000] }
          ]
        },
        { 
          name: "Mobilne usluge", 
          prices: [7500, 9000, 10500, 12000], 
          desc: "Dolazak na vašu adresu za dubinsko pranje, detailing ili PDR.",
          subServices: [
            { name: "DUBINSKO PRANJE ENTERIJERA - NA ADRESI", prices: [7500, 9000, 10500, 12000] },
            { name: "DETAILING ENTERIJERA - NA ADRESI", prices: [9000, 11000, 13000, 15000] },
            { name: "DEZINFEKCIJA OZON - NA ADRESI", prices: [2500, 3000, 3500, 4000] },
            { name: "PDR - UKLANjANJE UDUBLjENjA - NA ADRESI", prices: [2500, 3500, 4500, 5500] }
          ]
        },
      ]
    },
    {
      id: "cat-obuka",
      title: "Obuka za detailing",
      services: [
        { 
          name: "Praktična obuka 1 na 1", 
          prices: [0, 0, 0, 0], 
          desc: "Individualni mentorski program prilagođen vašim potrebama i tempu.",
          longDesc: "Nudimo individualnu obuku koja pokriva sve što treba da znate o detaljingu - od osnovnih tehnika čišćenja i poliranja, do primene zaštitnih premaza i folija. Naša obuka je prilagođena vašim potrebama i tempu, sa praktičnim radom koji će vas osposobiti za obavljanje svih usluga na visokom nivou. Učite od stručnjaka i steknite veštine koje su ključne za uspeh u ovoj industriji.",
          subServices: [
            { name: "Poliranje i keramička zaštita - 5 dana", prices: [52000, 52000, 52000, 52000] },
            { name: "Detailing enterijera - 2 dana", prices: [30000, 30000, 30000, 30000] },
            { name: "FULL - 7 dana", prices: [72000, 72000, 72000, 72000] }
          ]
        },
      ]
    }
  ],
  packages: [
    {
      title: "Osnovni Paket",
      subtitle: "2-3 dana trajanja",
      badge: "Startni",
      items: [
        "Premium pranje u tri faze",
        "Čišćenje felni (bez skidanja)",
        "Detailing podkrila (bez skidanja)",
        "Voskiranje",
        "Detailing enterijera"
      ],
      duration: "2-3 dana",
      price: "140",
      currency: "€"
    },
    {
      title: "Premium Paket",
      subtitle: "3-4 dana trajanja",
      recommended: true,
      badge: "Najpopularnije",
      items: [
        "Premium pranje u tri faze",
        "Čišćenje felni (bez skidanja)",
        "Detailing podkrila (bez skidanja)",
        "Jednoslojno poliranje",
        "Ručno voskiranje",
        "Poliranje farova",
        "Detailing enterijera"
      ],
      duration: "3-4 dana",
      price: "290",
      currency: "€"
    },
    {
      title: "Ekskluzivni Paket",
      subtitle: "5-7 dana trajanja",
      badge: "Totalni Detailing",
      items: [
        "Premium pranje u tri faze",
        "Čišćenje felni (bez skidanja)",
        "Detailing podkrila (bez skidanja)",
        "Održavanje motornog prostora",
        "Višeslojno poliranje",
        "Poliranje farova",
        "Keramička zaštita (1 godina)",
        "Anti-kiša zaštita",
        "Detailing enterijera"
      ],
      duration: "5-7 dana",
      price: "470",
      currency: "€"
    }
  ],
  reviews: [
    { 
      name: 'Milan Petrović', 
      location: 'Novi Sad', 
      vehicle: 'BMW M4',
      service: 'Kompletan Detailing',
      text: 'Ostavio sam automobil na kompletan detailing i rezultat je prevazišao moja očekivanja. Enterijer je kao nov, a spoljašnjost sija kao prvog dana.', 
      rating: 5 
    },
    { 
      name: 'Marko Nikolić', 
      location: 'Novi Sad', 
      vehicle: 'Audi A6',
      service: 'Poliranje i Keramika',
      text: 'Zakažem, dođem, ostavim auto i dobijem ga nazad u stanju koje nisam ni zamisljao. Sve je urađeno brzo i precizno.', 
      rating: 5 
    },
    { 
      name: 'Ana Jovanović', 
      location: 'Novi Sad', 
      vehicle: 'Porsche Macan',
      service: 'Dubinsko pranje',
      text: 'Odlično iskustvo! Tim je izuzetno ljubazan i pažljiv, a hemijsko čišćenje enterijera je učinilo da automobil izgleda i miriše savršeno.', 
      rating: 5 
    },
  ],
  faqs: [
    {
      q: 'Da li će rezultat zaista biti vidljiv?',
      a: 'Da! Koristimo proverene tehnologije i profesionalne materijale koji garantuju besprekoran izgled vašeg automobila. Dobićete savršeno čist enterijer, sjajnu poliranu karoseriju i pouzdanu zaštitu laka.',
    },
    {
      q: 'Da li postoji rizik od oštećenja mog automobila tokom obrade?',
      a: 'Nikako. Radimo isključivo sa bezbednim sredstvima koja su pogodna za sve tipove površina i materijala. Naši stručnjaci imaju dugogodišnje iskustvo i tretiraju svaki automobil s najvećom pažnjom.',
    },
    {
      q: 'Da li je cena opravdana? Da li postoje skriveni troškovi?',
      a: 'Cena se unapred definiše i potpuno je transparentna. Jasno objašnjavamo šta sve uključuje usluga i ne dodajemo skrivene troškove.',
    },
    {
      q: 'Koliko traje postupak? Da li ću morati dugo da čekam?',
      a: 'Vreme trajanja zavisi od izabrane usluge, ali uvek nastojimo da radimo brzo i efikasno. Za vaše maksimalno uživanje, obezbedili smo prostor za odmor sa kafom.',
    },
  ]
};
