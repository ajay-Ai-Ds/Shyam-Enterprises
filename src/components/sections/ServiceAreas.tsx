"use client";

import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";

const bangaloreAreas = [
  "Koramangala",
  "Indiranagar",
  "Whitefield",
  "HSR Layout",
  "JP Nagar",
  "Jayanagar",
  "Electronic City",
  "Marathahalli",
  "BTM Layout",
  "Bellandur",
  "Sarjapur Road",
  "Hebbal",
  "Yelahanka",
  "Rajajinagar",
  "Malleswaram",
  "Banashankari",
  "RT Nagar",
  "Bannerghatta Road",
  "KR Puram",
  "Hennur",
];

export default function ServiceAreas() {
  return (
    <section className="bg-[#FBF6F0] py-24 scroll-mt-12" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Info Text */}
          <div className="lg:col-span-1 flex flex-col gap-5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block self-start">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-700 tracking-tight leading-tight">
              Serving Homes &amp; Businesses Across Bangalore
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We provide prompt, on-site measurements and safety net installations across all major residential zones, commercial complexes, and apartments in Bangalore.
            </p>
            <div className="flex items-center gap-3 text-primary-700 text-sm font-bold mt-2">
              <Globe className="w-5 h-5 text-accent-orange" />
              <span>Free Site Inspections in Bangalore Metro</span>
            </div>
          </div>

          {/* Area Chips Grid */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-slate-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {bangaloreAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-center gap-2.5 p-3.5 bg-primary-700 hover:bg-accent-orange border border-primary-600 rounded-xl transition-all group cursor-default shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-accent-orange group-hover:text-primary-800 shrink-0 transition-colors" />
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-primary-900 transition-colors truncate">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 text-center mt-8 font-medium">
              Don&apos;t see your area? We service all locations in and around the Bangalore metropolitan region. Contact support to confirm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
