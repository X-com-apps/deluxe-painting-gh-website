import {
  Home,
  Building2,
  Factory,
  Palette,
  PenTool,
  Layers,
} from "lucide-react";
import exteriorImg from "@/app/assets//exterior-painting.jpg";
import interiorImg from "@/app/assets//interior-painting.jpg";
import commercialImg from "@/app/assets//commercial-painting.jpg";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Painting",
      description:
        "From vibrant exteriors to serene living rooms, we personalize every space to add beauty and character to your home.",
      image: interiorImg,
    },
    {
      icon: Building2,
      title: "Commercial Painting",
      description:
        "We understand the importance of aesthetics in business and deliver top-notch results that reflect your company's reputation.",
      image: commercialImg,
    },
    {
      icon: Factory,
      title: "Industrial Painting",
      description:
        "Protect and enhance your industrial facilities with specialized solutions using durable paints designed for industrial environments.",
      image: exteriorImg,
    },
    {
      icon: Palette,
      title: "Wall Arts & Murals",
      description:
        "Celebrate culture with vibrant Afro, Abstract, Neon, Minimalistic, and Geometric wall art designs tailored to your taste.",
      image: null,
    },
    {
      icon: PenTool,
      title: "3D Digital Plans",
      description:
        "Our state-of-the-art 3D design technology creates precise, photo-realistic visualizations of your painting project.",
      image: null,
    },
    {
      icon: Layers,
      title: "Wall Panels",
      description:
        "Elevate your space with stunning installed wall panels that add texture, depth, and visual interest to any room.",
      image: null,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-[#322d29] px-8 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#d2962d] font-medium tracking-wider text-sm uppercase text-[#d2962d]">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mt-3 mb-6">
            Expert painting solutions for all your needs
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl ${
                  service.image ? "aspect-4/3" : "p-8"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.image ? (
                  <>
                    {/* Image Background */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />

                    {/* Content Overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-6"
                      style={{
                        background:
                          "linear-gradient(to top, #322d29, transparent)",
                      }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#d2962d]/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#d2962d]" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-cream mb-2">
                        {service.title}
                      </h3>
                      <p className="text-cream/70 text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Icon Card */}
                    <div className="w-14 h-14 rounded-xl bg-[#d2962d]/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#d2962d]/20">
                      <Icon className="w-7 h-7 text-[#d2962d]" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-cream mb-3">
                      {service.title}
                    </h3>
                    <p className="text-cream/60 leading-relaxed">
                      {service.description}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
