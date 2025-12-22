import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Product images
import harinaAvena from "@/assets/products/harina-avena.jpg";
import harinaAlmendras from "@/assets/products/harina-almendras.jpg";
import toppingCrunch from "@/assets/products/topping-crunch.jpg";
import galletasProteicas from "@/assets/products/galletas-proteicas.jpg";
import galletasAvenaCacao from "@/assets/products/galletas-avena-cacao.jpg";
import granolaNatural from "@/assets/products/granola-natural.jpg";
import mantequillaMani from "@/assets/products/mantequilla-mani.jpg";
import barritasEnergeticas from "@/assets/products/barritas-energeticas.jpg";
import mixFrutosSecos from "@/assets/products/mix-frutos-secos.jpg";
import pancakeMix from "@/assets/products/pancake-mix.jpg";
import productsBgPattern from "@/assets/products-bg-pattern.png";

interface Product {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Harina de Avena Integral",
    description: "Ideal para recetas saludables ricas en fibra.",
    benefits: ["Saciedad", "Control glucémico"],
    price: "$—",
    image: harinaAvena,
  },
  {
    id: 2,
    name: "Harina de Almendras",
    description: "Perfecta para preparaciones sin gluten.",
    benefits: ["Baja en carbohidratos"],
    price: "$—",
    image: harinaAlmendras,
  },
  {
    id: 3,
    name: "Topping Crunch",
    description: "Mezcla nutritiva para bowls y yogures.",
    benefits: ["Omega 3", "Fibra"],
    price: "$—",
    image: toppingCrunch,
  },
  {
    id: 4,
    name: "Galletas Proteicas",
    description: "Snack saludable alto en proteína.",
    benefits: ["Saciedad", "Energía"],
    price: "$—",
    image: galletasProteicas,
  },
  {
    id: 5,
    name: "Galletas de Avena con Cacao",
    description: "Dulce saludable sin azúcar refinada.",
    benefits: ["Antioxidantes"],
    price: "$—",
    image: galletasAvenaCacao,
  },
  {
    id: 6,
    name: "Granola Natural sin Azúcar",
    description: "Ideal para desayunos o meriendas.",
    benefits: ["Fibra", "Energía sostenida"],
    price: "$—",
    image: granolaNatural,
  },
  {
    id: 7,
    name: "Mantequilla de Maní Natural",
    description: "100% maní tostado.",
    benefits: ["Proteínas", "Grasas buenas"],
    price: "$—",
    image: mantequillaMani,
  },
  {
    id: 8,
    name: "Barritas Energéticas Caseras",
    description: "Perfectas para llevar contigo.",
    benefits: ["Energía rápida"],
    price: "$—",
    image: barritasEnergeticas,
  },
  {
    id: 9,
    name: "Mix de Frutos Secos",
    description: "Almendras, nueces y arándanos.",
    benefits: ["Antioxidantes"],
    price: "$—",
    image: mixFrutosSecos,
  },
  {
    id: 10,
    name: "Pancake Mix Saludable",
    description: "Mezcla lista para desayunos nutritivos.",
    benefits: ["Alto en proteína"],
    price: "$—",
    image: pancakeMix,
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative h-[420px] w-full flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
        <h3 className="text-xl font-display font-bold mb-2">{product.name}</h3>
        <p className="text-sm opacity-90 mb-3">{product.description}</p>
        
        {/* Benefits */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.benefits.map((benefit, index) => (
            <span
              key={index}
              className="text-xs bg-primary/80 text-primary-foreground px-3 py-1 rounded-full"
            >
              {benefit}
            </span>
          ))}
        </div>
        
        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{product.price}</span>
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-4 transition-transform duration-200 hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slidesPerView = 2;
  const totalSlides = Math.ceil(products.length / slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section 
      id="productos" 
      className="section-spacing overflow-hidden relative"
      style={{
        backgroundImage: `url(${productsBgPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Productos Saludables
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de productos naturales y nutritivos, 
            elaborados con los mejores ingredientes para tu bienestar.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 -translate-x-1/2 md:translate-x-0"
            aria-label="Anterior producto"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 translate-x-1/2 md:translate-x-0"
            aria-label="Siguiente producto"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-8 md:mx-16">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-2 md:px-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {products
                      .slice(slideIndex * slidesPerView, slideIndex * slidesPerView + slidesPerView)
                      .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
