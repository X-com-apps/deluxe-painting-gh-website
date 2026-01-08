"use client";
import { useState } from "react";
import afroArt from "@/app/assets//afro-art.jpg";
import abstractArt from "@/app/assets//abstract-art.jpg";
import minimalistArt from "@/app/assets//minimalist-art.jpg";
import geometricArt from "@/app/assets//geometric-art.jpg";
import Image from "next/image";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Arts" },
    { id: "afro", label: "Afro Arts" },
    { id: "abstract", label: "Abstract" },
    { id: "minimalist", label: "Minimalist" },
    { id: "geometric", label: "Geometric" },
  ];

  const artworks = [
    {
      id: 1,
      image: afroArt,
      title: "African Heritage",
      category: "afro",
      description:
        "Celebrate African culture with vibrant patterns and bold colors",
    },
    {
      id: 2,
      image: abstractArt,
      title: "Ocean Dreams",
      category: "abstract",
      description:
        "Bold textures and unique compositions that spark imagination",
    },
    {
      id: 3,
      image: minimalistArt,
      title: "Serene Balance",
      category: "minimalist",
      description: "Clean lines and subtle colors creating calm and serenity",
    },
    {
      id: 4,
      image: geometricArt,
      title: "Modern Geometry",
      category: "geometric",
      description: "Contemporary patterns with triangles and bold lines",
    },
  ];

  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((art) => art.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold font-medium tracking-wider text-sm uppercase">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Stunning Wall Art Collection
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our diverse collection of wall arts designed to transform
            and personalize your space.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gold text-secondary shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-gold/20 hover:text-gold"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold text-sm uppercase tracking-wider">
                    {artwork.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-cream mt-1">
                    {artwork.title}
                  </h3>
                  <p className="text-cream/70 text-sm mt-2">
                    {artwork.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
