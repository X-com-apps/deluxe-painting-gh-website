import interiorImg from "@/app/assets//interior-painting.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="pt-20 lg:pt-35 pb-20 lg:pb-35 px-8 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={interiorImg}
                alt="Professional interior painting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div
              className="absolute -bottom-6 -right-6 text-cream p-6 rounded-xl shadow-lg max-w-50 hidden sm:block"
              style={{ backgroundColor: "#322d29" }}
            >
              <div className="text-3xl font-display font-bold text-[#d2962d] mb-1 text-[#d2962d]">
                3+
              </div>
              <div className="text-sm text-cream/70">
                Years of Combined Experience
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-[#d2962d] font-medium tracking-wider text-sm uppercase text-[#d2962d]">
              About Deluxe Painting
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6 text-[#322d29]">
              Transforming Spaces with Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-[#322d29]">
              We are a premier painting company dedicated to delivering
              exceptional painting experiences for residential, commercial, and
              industrial clients. With a passion for transforming spaces, our
              team of skilled youthful professionals combines creativity,
              expertise, and attention to detail to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
