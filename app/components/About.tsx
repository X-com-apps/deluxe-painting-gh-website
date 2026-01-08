
import Image from "next/image";

const About = () => {

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/interior-painting.jpg"
                alt="Professional interior painting"
                className="w-full h-full object-cover"
                width={120}
                height={120}
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-cream p-6 rounded-xl shadow-lg max-w-50 hidden sm:block">
              <div className="text-3xl font-display font-bold text-gold mb-1">
                3+
              </div>
              <div className="text-sm text-cream/70">
                Years of Combined Experience
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-medium tracking-wider text-sm uppercase">
              About Deluxe Painting
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
              Transforming Spaces with Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
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
