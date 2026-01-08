"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#advantages", label: "Why Us" },
    { href: "#faq", label: "FAQ" },
    // { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image src="/assets/deluxe-painting-logo.png" alt="Company logo" height={50} width={60}/>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-cream/80 hover:text-gold transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="gold" onClick={() => window.open("https://wa.me/233548565238", "_blank")}>
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-cream/80 hover:text-gold transition-colors font-medium text-left py-2 border-b border-charcoal-light"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+233548565238"
            className="flex items-center gap-2 text-gold py-2"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">+233 54 856 5238</span>
          </a>
          <Button
            variant="gold"
            className="w-full"
            onClick={() => scrollToSection("#contact")}
          >
            Get Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
