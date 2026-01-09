"use client";
import { Button } from "@/app/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "/assets/hero-bg.jpg";
import Image from "next/image";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background Image */}
      <Image
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        src={heroBg}
        alt="Hero background image describing painting services"
      />
      {/* <video
        src="/promotion-video.mp4"
        autoPlay
        muted
        loop
        className="inset-0 w-full h-full object-cover bg-cover bg-center absolute"
      ></video> */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in-up inline-block mb-6">
            <span className="px-4 py-2 bg-[#d2962d]/20 border border-gold/40 rounded-full text-[#d2962d] text-sm font-medium tracking-wider">
              PREMIUM PAINTING SOLUTIONS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-6 leading-tight">
            Coloring <span className="text-gradient">Dreams</span>
            <br />
            Into Reality
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-delay-2 text-lg md:text-xl text-cream/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are a premier painting company dedicated to delivering
            exceptional painting experiences for residential, commercial, and
            industrial clients across Ghana.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="heroSolid"
              size="xl"
              onClick={() =>
                window.open("https://wa.me/233548565238", "_blank")
              }
              className="min-w-50 bg-[#d2962d] text-[#322d29] hover:bg-[#d29623]"
            >
              Get Free Estimate
            </Button>
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToAbout}
              className="min-w-50 text-[#d2962d] hover:text-[#322d29] hover:bg-[#d2962d]"
            >
              Explore Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in-delay-3">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-[#d2962d] mb-1 text-[#d2962d]">
                3+
              </div>
              <div className="text-cream/60 text-sm">Years Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-[#d2962d] mb-1 text-[#d2962d]">
                500+
              </div>
              <div className="text-cream/60 text-sm">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-[#d2962d] mb-1 text-[#d2962d]">
                100%
              </div>
              <div className="text-cream/60 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d2962d] animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
