"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Star, Users } from "lucide-react";

export default function Stats() {
  const statItems = [
    {
      id: 1,
      icon: <CheckCircle2 className="w-8 h-8 text-accent-orange" />,
      label: "Completed Projects",
      value: "5,000+",
      description: "Residential & commercial safety net and grill installations across Bangalore",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8 text-accent-orange" />,
      label: "Happy Homes Protected",
      value: "4,800+",
      description: "Families enjoying balcony safety and pet security",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-8 h-8 text-accent-orange" />,
      label: "Industry Experience",
      value: "12+ Years",
      description: "Providing trusted protective netting services in Karnataka",
    },
    {
      id: 4,
      icon: <Star className="w-8 h-8 text-accent-orange" />,
      label: "Client Rating & Feedback",
      value: "4.9 ★ (500+ Reviews)",
      description: "Based on verified local Google reviews",
    },
  ];

  return (
    <section className="bg-primary-700 text-white py-16 border-y border-primary-800 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-primary-800/80 rounded-2xl border border-primary-600/50 shadow-md hover:border-accent-orange/40 transition-all"
            >
              <div className="p-3 bg-white/10 rounded-xl shadow-xs mb-4 backdrop-blur-xs">
                {stat.icon}
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                {stat.label}
              </h2>
              <p className="text-base sm:text-lg font-extrabold text-accent-orange mb-2 px-3 py-1 bg-black/20 border border-dashed border-accent-orange/40 rounded-md inline-block max-w-full truncate">
                {stat.value}
              </p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
