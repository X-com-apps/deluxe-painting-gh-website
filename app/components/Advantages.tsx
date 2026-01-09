import {
  Sparkles,
  Users,
  FolderKanban,
  Star,
  Palette,
  Heart,
  DollarSign,
  Brush,
  Shield,
  Wrench,
} from "lucide-react";

const Advantages = () => {
  const advantages = [
    { icon: Sparkles, title: "Free Strategy Session" },
    { icon: Users, title: "Personalized Approach" },
    { icon: FolderKanban, title: "Organized Job Sites" },
    { icon: Star, title: "High Standards" },
    { icon: Palette, title: "Complex Designs" },
    { icon: Heart, title: "Color Comfort" },
    { icon: DollarSign, title: "Affordable Rates" },
    { icon: Brush, title: "Quality Paints" },
    { icon: Shield, title: "3 Years Warranty" },
    { icon: Wrench, title: "Free Maintenance" },
  ];

  return (
    <section
      id="advantages"
      className="py-20 lg:py-32 relative overflow-hidden bg-[#322d29] px-8 sm:px-12 lg:px-16 xl:px-20"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#d2962d] font-medium tracking-wider text-sm uppercase text-[#d2962d]">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-display font-bold text-cream mt-3 mb-6">
            We are dedicated to enhancing the beauty and value of your property,
            one wall at a time
          </h2>
           <p className="text-cream/70 max-w-3xl mx-auto leading-relaxed">
            We use only the best quality of paints and
            apparatus, ensuring a premium finish that lasts. Your satisfaction is
            our top priority — we work closely with you to understand your vision
            and ensure the final result exceeds your expectations.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.title}
                className="group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#4d4642]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#d2962d]/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-[#d2962d]/20">
                  <Icon className="w-7 h-7 text-[#d2962d]" />
                </div>
                <h3 className="text-cream font-medium text-sm leading-tight">
                  {advantage.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
