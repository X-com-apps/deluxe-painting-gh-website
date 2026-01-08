"use client;"
import { Button } from "@/app/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="row">
          {/* Left Side - Info */}
          <div>
            <span className="text-gold font-medium tracking-wider text-sm uppercase">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-3 mb-6">
              Let&apos;s Bring Your Vision to Life
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              Ready to transform your space? Contact us today for a free consultation and estimate. We&apos;re here to answer
              all your questions and help you achieve the perfect finish.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="bg-charcoal rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-display font-gradient text-cream mb-6">Request a Free Quote</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-cream/70 text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-charcoal-light border border-charcoal-light rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-cream/70 text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+233"
                    className="w-full bg-charcoal-light border border-charcoal-light rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-cream/70 text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-charcoal-light border border-charcoal-light rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-cream/70 text-sm mb-2">Project Type</label>
                <select className="w-full bg-charcoal-light border border-charcoal-light rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors">
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
                <label className="block text-cream/70 text-sm mb-2">Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-charcoal-light border border-charcoal-light rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <Button variant="gold" size="lg" className="w-full">
                Send Request
              </Button>
              <p className="text-cream/50 text-sm text-center">We&apos;ll get back to you within 24 hours</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
