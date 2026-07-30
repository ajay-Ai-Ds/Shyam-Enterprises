import { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Ruler,
  Layers,
  FileCheck,
  Maximize,
  Award,
  Building,
  ShieldCheck,
  Phone,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Fair & Transparent Pricing Approach | Shyam Enterprises Bangalore",
  description:
    "Learn about Shyam Enterprises' honest, transparent pricing approach for safety nets, invisible grills, and cloth hangers in Bangalore. Free site visits and written quotes.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Fair & Transparent Pricing Approach | Shyam Enterprises Bangalore",
    description:
      "Learn about Shyam Enterprises' honest, transparent pricing approach for safety nets, invisible grills, and cloth hangers in Bangalore.",
    url: "https://www.shyaminvisiblegrills.com/pricing",
  },
};

export default function PricingPage() {
  const howWePriceSteps = [
    {
      step: "01",
      icon: <Ruler className="w-7 h-7 text-[#D4A24C]" />,
      title: "Free Site Visit & Measurement",
      description:
        "We send a certified technician to measure your exact balcony, window, or duct space in Bangalore — no estimates or guesswork.",
    },
    {
      step: "02",
      icon: <Layers className="w-7 h-7 text-[#D4A24C]" />,
      title: "Material Selection",
      description:
        "Inspect physical samples of Standard, Premium, or Elite grade netting and SS316 cable grills directly at your doorstep.",
    },
    {
      step: "03",
      icon: <FileCheck className="w-7 h-7 text-[#D4A24C]" />,
      title: "Instant Written Quote",
      description:
        "Receive an accurate, transparent written quotation on the spot. No waiting for days and no hidden charges after installation.",
    },
  ];

  const priceFactors = [
    {
      icon: <Maximize className="w-6 h-6 text-[#6B1E2C]" />,
      title: "Total Area & Dimensions",
      description:
        "The overall square footage of your balconies, open window frames, stairwells, or vertical duct shafts.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#6B1E2C]" />,
      title: "Material Grade Selection",
      description:
        "Choice of netting thickness (HDPE/copolymer grade) or cable specifications (SS316 marine steel wire invisible grills).",
    },
    {
      icon: <Building className="w-6 h-6 text-[#6B1E2C]" />,
      title: "Installation Complexity",
      description:
        "Height of the floor, high-rise building accessibility, scaffolding needs, and specific wall anchoring conditions.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#6B1E2C]" />,
      title: "Hardware & Accessories",
      description:
        "Custom heavy-duty aluminum track channels, stainless steel eyelets, burglar alarm integrations, or specialized fittings.",
    },
  ];

  const trustBadges = [
    {
      title: "No Advance Payment for Site Visit",
      desc: "Our inspection, measurements, and sample showcases are 100% free with zero obligation.",
    },
    {
      title: "Written Quote, No Verbal Surprises",
      desc: "Every cost breakdown is documented in writing upfront before installation starts.",
    },
    {
      title: "Free Re-Inspection if Needed",
      desc: "If you have any questions or alignment checks after inspection, we revisit free of charge.",
    },
    {
      title: "Best Value in Bangalore",
      desc: "ISO-certified netting and marine-grade SS316 cable grills at fair, competitive rates.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#D4A24C] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#6B1E2C] font-bold">Pricing Approach</span>
        </nav>

        {/* 1. HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A24C] bg-white border border-slate-200 px-4 py-1.5 rounded-full inline-block self-center shadow-xs">
            Honest &amp; Transparent
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6B1E2C] tracking-tight leading-tight">
            Fair, Transparent Pricing
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            No hidden costs, no surprises — just honest, accurate quotes tailored to your exact space and chosen material specification in Bangalore.
          </p>
        </div>

        {/* 2. HOW WE PRICE (3-Step Explainer) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6B1E2C] tracking-tight">
              How We Calculate Your Quote
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Our 3-step transparent pricing workflow ensures absolute clarity before any work begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWePriceSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col items-center text-center group"
              >
                <div className="absolute top-4 right-6 text-3xl font-black text-slate-100 group-hover:text-[#D4A24C]/20 transition-colors">
                  {stepItem.step}
                </div>
                <div className="p-4 bg-[#FBF6F0] rounded-2xl mb-6 shadow-xs group-hover:bg-[#6B1E2C] transition-colors duration-300">
                  {stepItem.icon}
                </div>
                <h3 className="text-lg font-bold text-[#6B1E2C] mb-3 group-hover:text-[#D4A24C] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. WHAT AFFECTS YOUR PRICE */}
        <div className="bg-[#FBF6F0] rounded-3xl p-8 sm:p-12 border border-[#efe6dc] mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A24C]">Cost Factors</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6B1E2C]">
              What Affects Your Installation Price?
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Pricing varies depending on key technical specifications of your installation space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceFactors.map((factor) => (
              <div
                key={factor.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <div className="p-3 bg-[#FBF6F0] rounded-xl self-start">
                  {factor.icon}
                </div>
                <h3 className="text-sm font-bold text-[#6B1E2C] mt-1">{factor.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TRUST BADGES */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6B1E2C]">
              Our Honest Pricing Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4"
              >
                <div className="p-2.5 bg-[#6B1E2C] text-[#D4A24C] rounded-xl shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1">{badge.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. LARGE PROMINENT CTA BANNER */}
        <div className="bg-[#6B1E2C] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden text-center flex flex-col items-center gap-6 border border-[#4A1520]">
          <div className="inline-flex items-center gap-2 bg-[#D4A24C]/20 border border-[#D4A24C]/40 text-[#D4A24C] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Ready for an Exact On-Site Quote?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Get Your Free On-Site Measurement Today
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl leading-relaxed">
            Our technician will visit your location in Bangalore with physical material samples, measure your space accurately, and share a written quote on the spot.
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
              href="https://wa.me/919513989222?text=Hi%20Shyam%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20on-site%20measurement%20and%20pricing%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[180px] flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>

        {/* Contact Form Inclusion */}
        <ContactForm />
      </div>
    </div>
  );
}
