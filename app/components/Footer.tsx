"use client";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Us", href: "#advantages" },
    { label: "FAQ", href: "#faq" },
    // { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Residential Painting",
    "Commercial Painting",
    "Industrial Painting",
    "Wall Arts & Murals",
    "3D Digital Plans",
    "Wall Panel Installation",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="pt-16 pb-8 bg-[#322d29] px-8 sm:px-12 lg:px-16 xl:px-20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-charcoal-light">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/assets/deluxe-painting-logo.png" alt="Company logo" height={80} width={60}/>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Premier painting company dedicated to delivering exceptional
              painting experiences across Ghana. Dreams Into Reality.
            </p>
            <div className="flex gap-1">
              <a
                href="https://instagram.com/Deluxepaintingsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#d2962d]/10 flex items-center justify-center text-[#d2962d] hover:bg-[#d2962d] hover:text-secondary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/Deluxepaintingsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-secondary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.threads.com/@deluxepaintingsolutions"
                className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-secondary transition-all"
              >
                <Image src="/assets/threads.svg" width={20} height={20} alt="Threads icon" className="w-5 h-5 invert" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-display font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-0">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/60 hover:text-[#d2962d] transition-colors text-sm"
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream font-display font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-cream/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-display font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+233548565238"
                  className="flex items-start gap-3 text-cream/60 hover:text-[#d2962d] transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">+233 54 856 5238</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-cream/60">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">
                    Community 5 traffic, behind MTN office, Tema, Ghana
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-cream/40 text-sm">
            © {currentYear} Deluxe Painting Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
