export interface AreaDetail {
  slug: string;
  name: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  nearbySlugs: string[];
}

const localTraits: Record<string, { name: string; desc: string; housingType: string; localizedDetail: string }> = {
  "koramangala": {
    name: "Koramangala",
    desc: "Koramangala is a premier startup hub and vibrant residential district in South-Central Bangalore, known for luxury apartments and tree-lined avenues.",
    housingType: "luxury high-rise apartments, gated communities, and villas",
    localizedDetail: "High-rise balcony safety nets and sleek invisible grills are top requests for families living in Koramangala's multi-story apartments.",
  },
  "indiranagar": {
    name: "Indiranagar",
    desc: "Indiranagar is an upscale residential and commercial neighborhood in East Bangalore with high-density housing blocks and villas.",
    housingType: "luxury apartments, modern independent houses, and penthouses",
    localizedDetail: "Balcony invisible grills and translucent pigeon nets are popular choices for preserving aesthetics while keeping birds away.",
  },
  "whitefield": {
    name: "Whitefield",
    desc: "Whitefield is Bangalore's major IT technology corridor, featuring massive high-rise apartment townships going up to 30 stories.",
    housingType: "premium high-rise gated community townships and luxury complexes",
    localizedDetail: "High-floor wind pressure and child safety on high balconies make UV-treated safety nets and SS316 invisible grills essential.",
  },
  "hsr-layout": {
    name: "HSR Layout",
    desc: "HSR Layout is a prime residential sector in South-East Bangalore, favored by IT professionals, families, and young couples.",
    housingType: "modern multi-story apartments and independent residential floors",
    localizedDetail: "Families with young children and active pets prioritize heavy-duty safety netting along balcony handrails.",
  },
  "jp-nagar": {
    name: "JP Nagar",
    desc: "JP Nagar is an established, peaceful residential neighborhood in South Bangalore known for family apartments and civic amenities.",
    housingType: "family-oriented apartment complexes and low-rise blocks",
    localizedDetail: "Child safety nets and ceiling cloth hangers are highly requested for apartment balcony utility spaces.",
  },
  "jayanagar": {
    name: "Jayanagar",
    desc: "Jayanagar is one of Bangalore's traditional, highly structured residential areas, featuring lush green parks and established housing.",
    housingType: "spacious family apartments and residential layouts",
    localizedDetail: "Pigeon exclusion nets for balconies and window sills help maintain clean, hygienic home environments.",
  },
  "electronic-city": {
    name: "Electronic City",
    desc: "Electronic City is a sprawling IT hub in South Bangalore, housing thousands of tech professionals in modern high-rise townships.",
    housingType: "high-rise IT professional apartments and gated communities",
    localizedDetail: "Duct area safety netting and child fall protection nets are standard setup requirements for high-density complexes.",
  },
  "marathahalli": {
    name: "Marathahalli",
    desc: "Marathahalli is a bustling commercial and residential nexus along the Outer Ring Road, witnessing continuous apartment growth.",
    housingType: "multi-story apartments and tech-worker residential flats",
    localizedDetail: "Densely populated apartment balconies frequently require pigeon safety nets and anti-bird spikes.",
  },
  "btm-layout": {
    name: "BTM Layout",
    desc: "BTM Layout is a popular residential node in South Bangalore with convenient access to Koramangala and tech hubs.",
    housingType: "multi-family apartments, PG accommodations, and flats",
    localizedDetail: "Balcony safety nets provide essential peace of mind for residents securing open windows and balconies.",
  },
  "bellandur": {
    name: "Bellandur",
    desc: "Bellandur is a key tech corridor along the Outer Ring Road, lined with expansive high-rise residential complexes.",
    housingType: "high-rise apartment complexes and luxury towers",
    localizedDetail: "Tall high-rise balconies benefit from marine-grade SS316 invisible grills that withstand strong winds.",
  },
  "sarjapur-road": {
    name: "Sarjapur Road",
    desc: "Sarjapur Road is a rapidly developing residential belt in East Bangalore, surrounded by international schools and IT parks.",
    housingType: "gated villa communities and modern high-rise townships",
    localizedDetail: "Child safety nets and pet safety netting are installed across balcony rails for complete family safety.",
  },
  "hebbal": {
    name: "Hebbal",
    desc: "Hebbal is a prominent North Bangalore gateway known for lake views, luxury high-rises, and prime airport connectivity.",
    housingType: "high-end luxury apartments and lake-view towers",
    localizedDetail: "Invisible grills allow residents to enjoy lake views without compromising high-floor balcony safety.",
  },
  "yelahanka": {
    name: "Yelahanka",
    desc: "Yelahanka is a fast-growing residential zone in North Bangalore, characterized by spacious townships and green spaces.",
    housingType: "planned apartment townships and residential layouts",
    localizedDetail: "Pigeon exclusion nets for balcony ducts and open window sills are frequently requested by homeowners.",
  },
  "rajajinagar": {
    name: "Rajajinagar",
    desc: "Rajajinagar is a well-established commercial and residential area in West Bangalore, featuring multi-story housing.",
    housingType: "established residential apartments and commercial structures",
    localizedDetail: "Anti-bird spikes and window safety nets effectively prevent pigeons from nesting on window ledges.",
  },
  "malleswaram": {
    name: "Malleswaram",
    desc: "Malleswaram is a heritage residential area in West Bangalore, blending traditional charm with modern multi-story apartments.",
    housingType: "heritage family flats and luxury modern apartments",
    localizedDetail: "Balcony invisible grills maintain unobstructed views while securing open balconies for seniors and kids.",
  },
  "banashankari": {
    name: "Banashankari",
    desc: "Banashankari is the largest residential locality in Bangalore, stretching across multiple stages with family housing.",
    housingType: "family-oriented multi-story apartments and independent layouts",
    localizedDetail: "Space-saving ceiling cloth drying hangers and balcony safety nets are top utility choices.",
  },
  "rt-nagar": {
    name: "RT Nagar",
    desc: "RT Nagar is a central residential locality in North Bangalore, close to Hebbal and palace grounds.",
    housingType: "residential apartments and close-knit family housing",
    localizedDetail: "Duct area netting protects central ventilation shafts from bird nesting and fallen debris.",
  },
  "bannerghatta-road": {
    name: "Bannerghatta Road",
    desc: "Bannerghatta Road is a major residential and institutional corridor in South Bangalore, housing major hospitals and high-rises.",
    housingType: "high-rise residential towers and family apartment complexes",
    localizedDetail: "Monkey safety nets and heavy-gauge balcony netting keep wild animals and birds out of balconies.",
  },
  "kr-puram": {
    name: "KR Puram",
    desc: "KR Puram is a major railway nexus and growing residential suburb in East Bangalore near IT parks.",
    housingType: "budget to premium apartment developments and family flats",
    localizedDetail: "Balcony pigeon safety nets provide clean, hygienic living spaces for multi-story apartment flats.",
  },
  "hennur": {
    name: "Hennur",
    desc: "Hennur is a booming residential corridor in North Bangalore, popular among families for its serene living environment.",
    housingType: "modern gated community apartments and villa complexes",
    localizedDetail: "Child safety netting and pet protection nets ensure complete peace of mind on open balconies.",
  },
};

export const areasList = Object.keys(localTraits);
export const bangaloreAreasList = areasList;

export const areasData: Record<string, AreaDetail> = areasList.reduce((acc, slug) => {
  const trait = localTraits[slug];
  const areaName = trait.name;

  const currentIdx = areasList.indexOf(slug);
  const nearbySlugs = [
    areasList[(currentIdx + 1) % areasList.length],
    areasList[(currentIdx + 2) % areasList.length],
    areasList[(currentIdx + 3) % areasList.length],
    areasList[(currentIdx + 4) % areasList.length],
    areasList[(currentIdx + 5) % areasList.length],
  ];

  acc[slug] = {
    slug,
    name: areaName,
    overview: `${trait.desc} As more families relocate to ${areaName} for its infrastructure and proximity to tech hubs, high-rise apartment living has become the standard. Shyam Enterprises provides premium safety netting and invisible grill solutions across ${areaName}.`,
    apartmentLiving: `Living in modern multi-story apartments in ${areaName} offers comfort, but open balconies and window openings pose fall hazards. Balconies with standard railing heights represent potential risks for active children and pets. Shyam Enterprises installs custom-fit protective netting to secure these spaces.`,
    balconySafety: `Accidental balcony slips are a primary safety concern. Our child safety nets and bite-resistant pet safety nets seal open balcony gaps in ${areaName} homes. ${trait.localizedDetail}`,
    birdProblem: `Pigeons and urban birds nesting in open ducts and window ledges present serious hygiene risks. In ${areaName}, our transparent monofilament bird nets block pigeons from duct shafts and balconies while keeping your view clear.`,
    weatherDetails: `Bangalore's climate and heavy seasonal monsoons require durable materials. For ${areaName} homes, Shyam installs UV-treated netting and rustproof SS316 marine-grade invisible grills engineered to last without degrading.`,
    nearbySlugs,
  };

  return acc;
}, {} as Record<string, AreaDetail>);
