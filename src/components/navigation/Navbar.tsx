"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Shield,
  Eye,
  Settings,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";

const safetyNetsServices = [
  { name: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
  { name: "Children Safety Nets", href: "/services/children-safety-nets" },
  { name: "Pet Safety Nets", href: "/services/pet-safety-nets" },
  { name: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
  { name: "Sports Nets", href: "/services/sports-nets" },
  { name: "Construction Safety Nets", href: "/services/construction-safety-nets" },
  { name: "Duct Area Safety Nets", href: "/services/duct-area-safety-nets" },
  { name: "Monkey Safety Nets", href: "/services/monkey-safety-nets" },
  { name: "Cricket Practice Nets", href: "/services/cricket-practice-nets" },
  { name: "Anti-Bird Spikes", href: "/services/anti-bird-spikes" },
];

const invisibleGrillsServices = [
  { name: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
  { name: "Children Invisible Grills", href: "/services/children-invisible-grills" },
  { name: "Pet Invisible Grills", href: "/services/pet-invisible-grills" },
  { name: "Window Invisible Grills", href: "/services/window-invisible-grills" },
  { name: "Staircase Invisible Grills", href: "/services/staircase-invisible-grills" },
  { name: "Commercial Invisible Grills", href: "/services/commercial-invisible-grills" },
];

const clothHangersServices = [
  { name: "Ceiling Cloth Hangers", href: "/services/ceiling-cloth-hangers" },
  { name: "Balcony Cloth Hangers", href: "/services/balcony-cloth-hangers" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", isMegaMenu: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuHoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnterServices = () => {
    if (megaMenuHoverTimeout.current) clearTimeout(megaMenuHoverTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    megaMenuHoverTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* PART 1: TOP BAR (Thin Strip in Deep Burgundy #6B1E2C) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#6B1E2C] text-white text-xs font-medium py-1.5 px-3 sm:px-4 shadow-sm border-b border-[#4A1520]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Phone numbers */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="tel:+919513989222"
              className="flex items-center gap-1.5 hover:text-[#D4A24C] transition-colors"
              aria-label="Call Primary Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4A24C]" />
              <span className="font-bold text-xs sm:text-sm">+91 95139 89222</span>
            </a>
            <span className="hidden md:inline text-slate-400">|</span>
            <a
              href="tel:+919963092290"
              className="hidden md:flex items-center gap-1.5 hover:text-[#D4A24C] transition-colors text-slate-200"
              aria-label="Call Secondary Phone"
            >
              <span>+91 99630 92290</span>
            </a>
          </div>

          {/* Center: Banner statement */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] font-semibold text-amber-100/90 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A24C]" />
            <span>Free Doorstep Inspection | Serving All Bangalore</span>
          </div>

          {/* Right: Email & Mobile WhatsApp Badge */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Mobile WhatsApp Quick Action */}
            <a
              href="https://wa.me/919513989222?text=Hi%20Shyam%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
              target="_blank"
              rel="noopener noreferrer"
              className="flex sm:hidden items-center gap-1 bg-[#25D366]/25 hover:bg-[#25D366]/40 text-emerald-300 px-2.5 py-0.5 rounded border border-[#25D366]/40 text-[11px] font-bold transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
              <span>WhatsApp Quote</span>
            </a>

            <a
              href="mailto:info.shyaminvisiblegrills@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#D4A24C] transition-colors text-slate-200"
              aria-label="Email Us"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4A24C]" />
              <span className="truncate max-w-[200px] md:max-w-none">info.shyaminvisiblegrills@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* PART 2 & 3: MAIN STICKY NAVBAR (With glassmorphism on scroll) */}
      <header
        className={`fixed top-[34px] left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5"
            : "bg-white border-b border-slate-100 py-4"
        }`}
        ref={megaMenuRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* PART 3: LOGO */}
            <div className="flex items-center shrink-0">
              <Logo light={false} />
            </div>

            {/* PART 4: DESKTOP NAVIGATION LINKS WITH MEGA-MENU */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => {
                if (link.isMegaMenu) {
                  return (
                    <div
                      key={link.label}
                      className="relative py-2"
                      onMouseEnter={handleMouseEnterServices}
                      onMouseLeave={handleMouseLeaveServices}
                    >
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className={`flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors cursor-pointer ${
                          isMegaMenuOpen
                            ? "text-[#D4A24C]"
                            : isScrolled
                            ? "text-slate-800 hover:text-[#D4A24C]"
                            : "text-[#6B1E2C] hover:text-[#D4A24C]"
                        }`}
                        aria-expanded={isMegaMenuOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isMegaMenuOpen ? "rotate-180 text-[#D4A24C]" : "text-slate-400"
                          }`}
                        />
                      </button>

                      {/* DESKTOP MEGA-MENU DROPDOWN PANEL */}
                      <AnimatePresence>
                        {isMegaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="fixed left-0 right-0 top-[100%] w-full bg-white shadow-2xl border-t border-slate-100 py-8 px-4 sm:px-8 rounded-b-3xl z-50 pointer-events-auto"
                          >
                            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 text-left">
                              {/* COLUMN 1: Safety Nets (10 Services) */}
                              <div className="col-span-5 bg-slate-50/60 p-6 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                                  <Shield className="w-5 h-5 text-[#6B1E2C]" />
                                  <h3 className="text-base font-extrabold text-[#6B1E2C]">
                                    Safety Nets <span className="text-xs font-semibold text-slate-500">(10 Services)</span>
                                  </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                  {safetyNetsServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="text-xs font-semibold text-slate-700 hover:text-[#D4A24C] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D4A24C] transition-colors"></span>
                                      <span className="truncate">{item.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* COLUMN 2: Invisible Grills (6 Services) */}
                              <div className="col-span-4 bg-slate-50/60 p-6 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                                  <Eye className="w-5 h-5 text-[#6B1E2C]" />
                                  <h3 className="text-base font-extrabold text-[#6B1E2C]">
                                    Invisible Grills <span className="text-xs font-semibold text-slate-500">(6 Services)</span>
                                  </h3>
                                </div>
                                <div className="flex flex-col gap-2">
                                  {invisibleGrillsServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="text-xs font-semibold text-slate-700 hover:text-[#D4A24C] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D4A24C] transition-colors"></span>
                                      <span>{item.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* COLUMN 3: Cloth Hangers (2 Services) + Promo Card */}
                              <div className="col-span-3 flex flex-col justify-between">
                                <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 mb-4">
                                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                                    <Settings className="w-4 h-4 text-[#6B1E2C]" />
                                    <h3 className="text-sm font-extrabold text-[#6B1E2C]">
                                      Cloth Hangers <span className="text-[11px] font-semibold text-slate-500">(2)</span>
                                    </h3>
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    {clothHangersServices.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMegaMenuOpen(false)}
                                        className="text-xs font-semibold text-slate-700 hover:text-[#D4A24C] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D4A24C] transition-colors"></span>
                                        <span>{item.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Promo Consultation Card */}
                                <div className="bg-[#FBF6F0] p-5 rounded-2xl border border-[#efe6dc] flex flex-col gap-2.5">
                                  <span className="text-[10px] font-extrabold text-[#6B1E2C] uppercase tracking-wider">Free Guidance</span>
                                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Not sure what you need?</h4>
                                  <p className="text-[11px] text-slate-500 leading-tight">Get a free consultation &amp; on-site estimate across Bangalore.</p>
                                  <Link
                                    href="/contact"
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className="mt-1 bg-[#D4A24C] hover:bg-[#C1903B] text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                                  >
                                    <span>Get Free Quote</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                      isScrolled ? "text-slate-800 hover:text-[#D4A24C]" : "text-[#6B1E2C] hover:text-[#D4A24C]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* PART 5: RIGHT SIDE BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Call Now Button */}
              <a
                href="tel:+919513989222"
                className="flex items-center gap-2 bg-[#D4A24C] hover:bg-[#C1903B] text-white font-bold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all text-xs"
                aria-label="Call Now"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919513989222?text=Hi%20Shyam%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all text-xs"
                aria-label="WhatsApp Us"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282 0 11.782 0c3.148.001 6.107 1.227 8.331 3.454 2.224 2.227 3.447 5.189 3.445 8.34-.005 6.505-5.282 11.783-11.784 11.783-2.001-.001-3.973-.513-5.733-1.488L0 24zm6.49-4.22c1.674.993 3.328 1.52 5.232 1.522 5.344 0 9.69-4.346 9.693-9.693.002-2.593-1.002-5.029-2.827-6.856-1.825-1.826-4.26-2.83-6.853-2.83-5.348 0-9.695 4.345-9.698 9.692-.001 1.954.513 3.619 1.547 5.247l-.99 3.614 3.738-.98l.161.096zm12.39-7.142c-.27-.135-1.597-.788-1.848-.88-.25-.091-.433-.135-.615.135-.183.27-.707.88-.867 1.064-.16.183-.32.206-.59.072-1.353-.679-2.355-1.196-3.149-2.55-.213-.364.213-.338.61-.1.356.208.4.27.6.4.2.13.1.25.05.35-.05.1-.515 1.24-.635 1.53-.12.285-.24.3-.51.185-.27-.135-1.144-.421-2.18-1.346-.806-.717-1.35-1.605-1.508-1.876-.158-.27-.017-.417.118-.551.121-.12.27-.315.405-.473.134-.158.18-.27.27-.45.09-.18.045-.337-.023-.472-.067-.135-.615-1.485-.84-2.03-.22-.53-.443-.457-.615-.466-.16-.008-.344-.01-.527-.01-.183 0-.482.068-.733.338-.25.27-.954.934-.954 2.279s.977 2.639 1.114 2.82c.137.18 1.921 2.934 4.654 4.114.65.28 1.157.447 1.554.573.653.208 1.248.179 1.718.109.523-.078 1.598-.654 1.825-1.254.227-.6.227-1.114.159-1.224-.069-.11-.25-.18-.52-.315z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* PART 6: MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-[#6B1E2C] hover:text-[#D4A24C] focus:outline-hidden p-2 rounded-xl border border-slate-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* PART 6: MOBILE OVERLAY MENU (Slide in from right) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#6B1E2C] text-white">
                <Logo light={true} />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-white hover:text-[#D4A24C] focus:outline-hidden"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="p-6 flex flex-col gap-4 flex-grow">
                {navLinks.map((link) => {
                  if (link.isMegaMenu) {
                    return (
                      <div key={link.label} className="border-b border-slate-100 pb-3">
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="w-full flex items-center justify-between text-base font-bold text-[#6B1E2C] py-1"
                        >
                          <span>{link.label} (18 Services)</span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#D4A24C] transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Accordion Services */}
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-3 pt-3 flex flex-col gap-4 text-xs"
                            >
                              {/* Safety Nets */}
                              <div>
                                <span className="font-bold text-[#6B1E2C] uppercase tracking-wider block mb-2 border-b border-slate-100 pb-1">
                                  Safety Nets (10)
                                </span>
                                <div className="flex flex-col gap-2 pl-2">
                                  {safetyNetsServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={closeMobileMenu}
                                      className="text-slate-700 font-semibold hover:text-[#D4A24C] py-0.5"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Invisible Grills */}
                              <div>
                                <span className="font-bold text-[#6B1E2C] uppercase tracking-wider block mb-2 border-b border-slate-100 pb-1">
                                  Invisible Grills (6)
                                </span>
                                <div className="flex flex-col gap-2 pl-2">
                                  {invisibleGrillsServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={closeMobileMenu}
                                      className="text-slate-700 font-semibold hover:text-[#D4A24C] py-0.5"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Cloth Hangers */}
                              <div>
                                <span className="font-bold text-[#6B1E2C] uppercase tracking-wider block mb-2 border-b border-slate-100 pb-1">
                                  Cloth Hangers (2)
                                </span>
                                <div className="flex flex-col gap-2 pl-2">
                                  {clothHangersServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={closeMobileMenu}
                                      className="text-slate-700 font-semibold hover:text-[#D4A24C] py-0.5"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="text-base font-bold text-slate-800 hover:text-[#D4A24C] border-b border-slate-100 pb-3"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Footer Action Buttons */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="tel:+919513989222"
                  className="w-full flex items-center justify-center gap-2 bg-[#D4A24C] text-white font-bold py-3 rounded-xl shadow-md text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 95139 89222</span>
                </a>
                <a
                  href="https://wa.me/919513989222?text=Hi%20Shyam%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl shadow-md text-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282 0 11.782 0c3.148.001 6.107 1.227 8.331 3.454 2.224 2.227 3.447 5.189 3.445 8.34-.005 6.505-5.282 11.783-11.784 11.783-2.001-.001-3.973-.513-5.733-1.488L0 24zm6.49-4.22c1.674.993 3.328 1.52 5.232 1.522 5.344 0 9.69-4.346 9.693-9.693.002-2.593-1.002-5.029-2.827-6.856-1.825-1.826-4.26-2.83-6.853-2.83-5.348 0-9.695 4.345-9.698 9.692-.001 1.954.513 3.619 1.547 5.247l-.99 3.614 3.738-.98l.161.096zm12.39-7.142c-.27-.135-1.597-.788-1.848-.88-.25-.091-.433-.135-.615.135-.183.27-.707.88-.867 1.064-.16.183-.32.206-.59.072-1.353-.679-2.355-1.196-3.149-2.55-.213-.364.213-.338.61-.1.356.208.4.27.6.4.2.13.1.25.05.35-.05.1-.515 1.24-.635 1.53-.12.285-.24.3-.51.185-.27-.135-1.144-.421-2.18-1.346-.806-.717-1.35-1.605-1.508-1.876-.158-.27-.017-.417.118-.551.121-.12.27-.315.405-.473.134-.158.18-.27.27-.45.09-.18.045-.337-.023-.472-.067-.135-.615-1.485-.84-2.03-.22-.53-.443-.457-.615-.466-.16-.008-.344-.01-.527-.01-.183 0-.482.068-.733.338-.25.27-.954.934-.954 2.279s.977 2.639 1.114 2.82c.137.18 1.921 2.934 4.654 4.114.65.28 1.157.447 1.554.573.653.208 1.248.179 1.718.109.523-.078 1.598-.654 1.825-1.254.227-.6.227-1.114.159-1.224-.069-.11-.25-.18-.52-.315z" />
                  </svg>
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
