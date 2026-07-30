"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  MapPin,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Award,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  serviceCategory: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  quote?: string;
  clientName?: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Protecting a Toddler on a 12th-Floor High-Rise Balcony",
    location: "Koramangala, Bangalore",
    serviceCategory: "Balcony Safety Nets",
    image: "/images/services/service_balcony_net.png",
    challenge:
      "A young family in Koramangala moved into a 12th-floor apartment with wide open balcony railings, creating an immediate fall hazard for their 2-year-old daughter.",
    solution:
      "Our certified technicians conducted a free site visit within 24 hours and custom-fitted heavy-duty 100% UV-stabilized HDPE copolymer safety netting designed to withstand high-rise wind pressure without sagging.",
    result:
      "Installation was completed cleanly in under 3 hours. The family enjoys worry-free open balcony access, and the net has successfully endured two full Bangalore monsoon seasons without tension loss.",
    quote:
      "Shyam Enterprises gave us complete peace of mind. Our daughter can play safely while we enjoy our morning coffee.",
    clientName: "Priya & Vivek S., Koramangala",
  },
  {
    id: 2,
    title: "Preserving Garden Views while Securing a Modern Penthouse",
    location: "Indiranagar, Bangalore",
    serviceCategory: "Balcony Invisible Grills",
    image: "/images/services/service_balcony_grill.png",
    challenge:
      "A penthouse homeowner in Indiranagar wanted high-level balcony safety for visiting grandchildren without installing traditional heavy iron bars that block natural sunlight and garden views.",
    solution:
      "We installed marine-grade SS316 stainless steel cable invisible grills spaced at 2 inches with customized aluminum track channels powder-coated to match the balcony frame.",
    result:
      "Achieved full child and fall protection supporting 400kg tension load ratings while keeping the panoramic city skyline 98% unobstructed.",
    quote:
      "You can barely see the steel cables unless you stand right at the edge. The finish is extremely sleek and modern.",
    clientName: "Rajesh M., Indiranagar",
  },
  {
    id: 3,
    title: "Childcare Facility & Open Walkway Safety Upgrade for IT Park",
    location: "Whitefield, Bangalore",
    serviceCategory: "Commercial Invisible Grills",
    image: "/images/services/service_commercial_grill.png",
    challenge:
      "A corporate IT park facility in Whitefield needed compliance-grade window and open atrium safety barriers for an on-site employee daycare center without altering building facade aesthetics.",
    solution:
      "Deployed commercial-grade 3.0mm SS316 core invisible grills with anti-cut nylon sheath along 4,500 sq.ft. of glass window perimeters and internal atrium railings.",
    result:
      "Completed execution during off-peak weekend hours with zero workplace disruption, passing full corporate safety audit compliance on first inspection.",
    quote:
      "Shyam Enterprises met all corporate safety standards and delivered ahead of our strict project deadline.",
    clientName: "Vikram R., Facility Manager, Whitefield",
  },
  {
    id: 4,
    title: "Creating a Safe Balcony Play Area for an Active Indoor Cat",
    location: "HSR Layout, Bangalore",
    serviceCategory: "Pet Safety Nets",
    image: "/images/services/service_pet_net.png",
    challenge:
      "A cat owner in HSR Layout had an adventurous Persian cat that frequently climbed balcony railings, posing severe fall risks from the 7th floor.",
    solution:
      "Engineered high-tensile, scratch-resistant nylon safety mesh anchored with reinforced eyelets across the full balcony height to eliminate all escape gaps.",
    result:
      "The cat can freely enjoy sunshine and breeze without any danger. The netting remains taut, non-abrasive, and completely scratch-proof after a full year of daily use.",
    quote:
      "I used to keep my balcony doors locked all day out of fear. Now Leo enjoys the sunshine safely every afternoon!",
    clientName: "Kavya B., HSR Layout",
  },
  {
    id: 5,
    title: "Eliminating Chronic Pigeon Nesting at Commercial Complex",
    location: "Electronic City, Bangalore",
    serviceCategory: "Anti-Bird Spikes",
    image: "/images/services/service_anti_bird_spikes.png",
    challenge:
      "Severe pigeon infestation along exterior ledges and AC duct shafts at a 5-story commercial building in Electronic City caused persistent mess, odor, and HVAC air quality concerns.",
    solution:
      "Mounted heavy-duty weather-resistant polycarbonate base strips with stainless steel 304 anti-bird spikes along 650 linear feet of ledges and window sills.",
    result:
      "Pigeon roosting was eliminated 100% within 24 hours of installation without harming birds. Building maintenance costs dropped significantly.",
    quote:
      "The bird spikes solved a 3-year recurring maintenance nightmare in less than a day.",
    clientName: "Suresh P., Estate Lead, Electronic City",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#D4A24C] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#6B1E2C] font-bold">Case Studies</span>
        </nav>

        {/* 1. HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A24C] bg-white border border-slate-200 px-4 py-1.5 rounded-full inline-block self-center shadow-xs">
            Proven Safety Engineering
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6B1E2C] tracking-tight leading-tight">
            Real Projects, Real Results
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover how we have solved complex safety challenges, bird nesting problems, and visual clarity goals for families and businesses across Bangalore.
          </p>
        </div>

        {/* 2. CASE STUDY CARDS (Alternating Layout) */}
        <div className="space-y-16 mb-20">
          {caseStudiesData.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  {/* Image Column */}
                  <div
                    className={`relative min-h-[320px] lg:min-h-[460px] lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Badges on Image */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                      <span className="bg-[#6B1E2C] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
                        {study.serviceCategory}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-center gap-1.5 text-xs font-semibold">
                      <MapPin className="w-4 h-4 text-[#D4A24C]" />
                      <span>{study.location}</span>
                    </div>
                  </div>

                  {/* Content Story Column */}
                  <div
                    className={`p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex flex-col gap-6">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#6B1E2C] leading-snug">
                        {study.title}
                      </h2>

                      {/* Structured Story Breakdown */}
                      <div className="space-y-4 text-xs sm:text-sm">
                        {/* Challenge */}
                        <div className="flex items-start gap-3 bg-red-50/70 p-4 rounded-2xl border border-red-100">
                          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold text-red-900 block mb-0.5 uppercase text-[11px] tracking-wider">
                              The Challenge
                            </span>
                            <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                          </div>
                        </div>

                        {/* Solution */}
                        <div className="flex items-start gap-3 bg-amber-50/70 p-4 rounded-2xl border border-amber-100">
                          <Lightbulb className="w-5 h-5 text-[#D4A24C] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold text-[#6B1E2C] block mb-0.5 uppercase text-[11px] tracking-wider">
                              Our Solution
                            </span>
                            <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                          </div>
                        </div>

                        {/* Result */}
                        <div className="flex items-start gap-3 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100">
                          <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold text-emerald-900 block mb-0.5 uppercase text-[11px] tracking-wider">
                              The Result
                            </span>
                            <p className="text-slate-700 leading-relaxed">{study.result}</p>
                          </div>
                        </div>
                      </div>

                      {/* Customer Quote */}
                      {study.quote && (
                        <div className="bg-[#FBF6F0] p-4 rounded-2xl border border-[#efe6dc] italic text-xs text-slate-700">
                          &ldquo;{study.quote}&rdquo;
                          <span className="block not-italic font-bold text-[#6B1E2C] mt-1 text-[11px]">
                            — {study.clientName}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Small CTA after each study */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                      <span className="text-xs font-semibold text-slate-500">
                        Have a similar safety or bird control challenge?
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#D4A24C] hover:text-[#6B1E2C] bg-[#FBF6F0] px-4 py-2 rounded-full border border-[#efe6dc] transition-colors"
                      >
                        <span>Get Free Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. BOTTOM CTA BANNER */}
        <div className="bg-[#6B1E2C] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center flex flex-col items-center gap-6 border border-[#4A1520] mb-20">
          <div className="inline-flex items-center gap-2 bg-[#D4A24C]/20 border border-[#D4A24C]/40 text-[#D4A24C] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Ready to Start Your Project?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Let Us Solve Your Balcony &amp; Window Safety Challenge
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl leading-relaxed">
            Schedule a free on-site measurement in Bangalore. Our technicians bring physical samples, provide an exact written quote, and complete installation fast.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-2 w-full max-w-md">
            <a
              href="tel:+919513989222"
              className="flex-1 min-w-[180px] flex items-center justify-center gap-2.5 bg-[#D4A24C] hover:bg-[#C1903B] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 95139 89222</span>
            </a>

            <a
              href="https://wa.me/919513989222?text=Hi%20Shyam%20Enterprises%2C%20I%20read%20your%20case%20studies%20and%20would%20like%20a%20free%20consultation%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[180px] flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>

        {/* Contact Form Integration */}
        <ContactForm />
      </div>
    </div>
  );
}
