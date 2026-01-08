import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we provide completely free estimates for all projects. Our team will visit your location, assess the scope of work, and provide a detailed quote with no obligation.",
    },
    {
      question: "What factors do you consider before choosing paint colors?",
      answer:
        "We consider lighting conditions, room size, existing décor, architectural features, the purpose of the space, and your personal preferences to recommend the perfect color palette.",
    },
    {
      question: "How many painters will be on your crew for my project?",
      answer:
        "The crew size depends on the project scope. Residential projects typically have 2-4 painters, while larger commercial projects may have larger teams to ensure timely completion.",
    },
    {
      question: "Can I choose my own design?",
      answer:
        "Absolutely! We encourage clients to share their vision. You can choose from our design catalog or bring your own ideas, and we'll work to bring them to life.",
    },
    {
      question: "Do you offer workmanship warranty?",
      answer:
        "Yes, we offer a comprehensive 3-year workmanship warranty on all our painting projects. This covers any defects in application, peeling, or bubbling under normal conditions.",
    },
    {
      question: "How do you prepare a house or room for painting?",
      answer:
        "Our preparation includes protecting furniture and floors, cleaning surfaces, filling holes and cracks, sanding rough areas, priming surfaces, and taping edges for clean lines.",
    },
    {
      question: "What paints do you use for interiors and exteriors?",
      answer:
        "We use only premium quality paints from trusted brands. For interiors, we use low-VOC, washable paints. For exteriors, we use weather-resistant, UV-protective coatings.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 lg:py-32 px-8 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side */}
          <div>
            <span className="text-[#d2962d] font-medium tracking-wider text-sm uppercase text-[#d2962d]">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal mt-3 mb-6 text-[#322d29]">
              Questions Often Asked
            </h2>
            <p className="text-charcoal/70 text-lg mb-8 text-[#322d29]">
              Find answers to common questions about our painting services. If
              you have more questions, don&apos;t hesitate to contact us.
            </p>
            <div className="rounded-2xl p-6 border  bg-[#edeae7]">
              <h3 className="font-display font-bold text-charcoal mb-2 text-[#322d29]">
                Still have questions?
              </h3>
              <p className="text-charcoal/70 text-sm mb-4 text-[#322d29]">
                Our team is ready to help you with any inquiries about your
                project.
              </p>
              <a
                href="tel:+233548565238"
                className="text-[#d2962d] font-semibold hover:underline text-[#322d29]"
              >
                Call us: +233 54 856 5238
              </a>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-charcoal/20 px-6 data-[state=open]:shadow-md transition-shadow bg-[#edeae7]"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-charcoal text-[#322d29] hover:text-[#d2962d] transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-charcoal/70 pb-5 text-[#322d29]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
