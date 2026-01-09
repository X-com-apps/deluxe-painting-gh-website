"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Votre message a été envoyé avec succès !",
        });
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Une erreur est survenue. Veuillez réessayer.",
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setSubmitStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+233 54 856 5238",
      href: "tel:+233548565238",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Deluxepaintingsolutions@gmail.com",
      href: "mailto:Deluxepaintingsolutions@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Community 5 traffic, behind MTN office, Tema, Ghana",
      href: "https://maps.google.com/?q=Community+5+Tema+Ghana",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@Deluxepaintingsolutions",
      href: "https://instagram.com/Deluxepaintingsolutions",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-[#322d29] px-8 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="container mx-auto px-4">
        <div className="row">
          {/* Left Side - Info */}
          <div>
            <span className="text-[#d2962d] font-medium tracking-wider text-sm uppercase text-[#d2962d]">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-3 mb-6">
              Let&apos;s Bring Your Vision to Life
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              Ready to transform your space? Contact us today for a free
              consultation and estimate. We&apos;re here to answer all your
              questions and help you achieve the perfect finish.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="bg-charcoal rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-display font-gradient text-cream mb-6">Request a Free Quote</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-cream/70 text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full border bg-[#4d4642] rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-[#d2962d] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-cream/70 text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+233"
                    className="w-full border bg-[#4d4642] rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-[#d2962d] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-cream/70 text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-[#4d4642] border border-charcoal-light rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-[#d2962d] transition-colors"
                />
              </div>
              <div>
                <label className="block text-cream/70 text-sm mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-[#4d4642] border border-charcoal-light rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-[#d2962d] transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Painting</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="industrial">Industrial Painting</option>
                  <option value="art">Wall Art / Murals</option>
                  <option value="panels">Wall Panels</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-cream/70 text-sm mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full bg-[#4d4642] border border-charcoal-light rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-[#d2962d] transition-colors resize-none"
                />
              </div>
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full text-[#322d29]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Send Request"}
              </Button>
              <p className="text-cream/50 text-sm text-center">
                We&apos;ll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
