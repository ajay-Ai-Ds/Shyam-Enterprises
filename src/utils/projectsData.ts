import { SpecItem } from "./servicesData";

export interface ProjectDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  service: string;
  serviceName: string;
  location: string;
  locationSlug: string;
  date: string; // Will display Content Required From Client
  description: string;
  problem: string;
  solution: string;
  materialsUsed: string[];
  process: string[];
  image: string;
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  specs: SpecItem[];
}

export const projectsData: Record<string, ProjectDetail> = {
  "balcony-safety-nets-koramangala": {
    slug: "balcony-safety-nets-koramangala",
    name: "Balcony Safety Nets Installation in Koramangala Residential Complex",
    category: "safety-nets",
    service: "balcony-safety-nets",
    serviceName: "Balcony Safety Nets",
    location: "Koramangala",
    locationSlug: "koramangala",
    date: "Content Required From Client",
    description: "Installation of heavy-duty double-locked HDPE safety netting on the 7th and 8th floor balconies of a luxury apartment complex in Koramangala.",
    problem: "The client resided on a high-floor apartment in Koramangala. Due to open balcony railings, there was an active hazard for children and domestic cats. Pigeons were also nesting on the AC ledge, causing noise and hygiene issues.",
    solution: "Shyam Enterprises installed a custom-fit, high-tensile HDPE safety netting barrier across the entire balcony frame. The net was anchored securely into concrete ceilings and walls using stainless steel expansion bolts and border ropes.",
    materialsUsed: [
      "100% UV-Stabilized HDPE Nylon netting",
      "0.8mm mesh border ropes",
      "SS304 wall anchoring brackets",
    ],
    process: [
      "Conducted a free site inspection and measurements of balcony boundaries.",
      "Prepared concrete anchor points and drilled hooks at regular intervals.",
      "Tensioned and tied the HDPE mesh across border ropes.",
      "Conducted load testing on the netting anchors to ensure child-safe tension.",
    ],
    image: "/images/materials/Balconynetwork.jpeg",
    gallery: [
      "/images/materials/Balconynetwork.jpeg",
      "/images/materials/shyam-material1.jpg",
      "/images/materials/shyam-material2.jpg",
    ],
    beforeImage: "/images/gallery/before_balcony.png",
    afterImage: "/images/materials/Balconynetwork.jpeg",
    specs: [
      { label: "Material Used", value: "HDPE Monofilament" },
      { label: "Mesh Diameter", value: "35mm x 35mm" },
      { label: "Tensile Strength", value: "Content Required From Client" },
      { label: "Project Warranty", value: "Content Required From Client" },
    ],
  },
  "invisible-grills-whitefield": {
    slug: "invisible-grills-whitefield",
    name: "Window and Balcony Invisible Grills in Whitefield High-Rise Apartment",
    category: "invisible-grills",
    service: "balcony-invisible-grills",
    serviceName: "Balcony Invisible Grills",
    location: "Whitefield",
    locationSlug: "whitefield",
    date: "Content Required From Client",
    description: "Elegant invisible steel wire grill installation along balcony railings of a high-rise IT corridor apartment in Whitefield.",
    problem: "The resident of a 14th-floor Whitefield apartment wanted to secure their balcony for pet safety. Traditional heavy iron grills blocked the view and clashed with the modern glass facade of the building.",
    solution: "Shyam installed SS316 marine-grade invisible steel wire grills spaced 3 inches apart. The wires are wrapped in a clear nylon sleeve to prevent scratches, clamped firmly in heavy aluminium base tracking.",
    materialsUsed: [
      "SS316 Stainless Steel wire core",
      "High-elastic Nylon protective sheath",
      "Heavy-duty Aluminium track clamps",
    ],
    process: [
      "Mapped and measured the balcony railing profile.",
      "Mounted the heavy aluminium tracking rails at the ceiling and floor base.",
      "Threaded and tensioned the SS316 cables through tracking guides.",
      "Locked the cables at high tension using internal copper sleeves.",
    ],
    image: "/images/materials/BoxCricketnet.jpeg",
    gallery: [
      "/images/materials/BoxCricketnet.jpeg",
      "/images/materials/materias5.jpeg",
      "/images/materials/Materials7.jpeg",
    ],
    beforeImage: "/images/gallery/before_balcony.png",
    afterImage: "/images/materials/BoxCricketnet.jpeg",
    specs: [
      { label: "Grill Core", value: "316 Stainless Steel" },
      { label: "Spacing", value: "3 inches (75mm)" },
      { label: "Cable Diameter", value: "2.5mm" },
      { label: "Strength Rating", value: "Content Required From Client" },
    ],
  },
  "ceiling-hangers-indiranagar": {
    slug: "ceiling-hangers-indiranagar",
    name: "Ceiling-Mounted Pulley Cloth Hanger Setup in Indiranagar Flat",
    category: "cloth-hangers",
    service: "ceiling-cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    location: "Indiranagar",
    locationSlug: "indiranagar",
    date: "Content Required From Client",
    description: "Installation of a 6-pipe dual-rope pulley ceiling drying hanger in a compact utility balcony of an Indiranagar residence.",
    problem: "The resident faced severe drying space constraints. Standard metal floor racks blocked the utility balcony, restricting access to the washing machine and blocking ventilation.",
    solution: "Shyam installed a premium ceiling-mounted pulley cloth drying system with 6 rustproof stainless steel pipes, allowing the resident to lift damp clothes easily to ceiling height.",
    materialsUsed: [
      "SS304 rustproof stainless steel rods",
      "Braided high-strength nylon ropes",
      "Dual rope pulley lockers & rollers",
    ],
    process: [
      "Inspected ceiling structure to confirm secure anchoring spots.",
      "Drilled and mounted pulley pulleys into concrete ceiling.",
      "Threaded the braided nylon cords and locked SS304 rods in place.",
      "Tested vertical lift weight limit (up to 15kg per rod).",
    ],
    image: "/images/materials/clothhangerwork.jpeg",
    gallery: [
      "/images/materials/clothhangerwork.jpeg",
      "/images/services/service_balcony_hanger.png",
    ],
    beforeImage: "/images/gallery/before_balcony.png",
    afterImage: "/images/materials/clothhangerwork.jpeg",
    specs: [
      { label: "Rod Count", value: "6 Pipes" },
      { label: "Rod Length", value: "6 feet (SS304)" },
      { label: "Rope material", value: "Braided Nylon cord" },
      { label: "Warranty", value: "Content Required From Client" },
    ],
  },
};
