import { useState, useEffect, useCallback } from "react";
import { Check, MessageCircle, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import hero slideshow images
import slide1 from "@/assets/hero/slide-1.jpg";
import slide2 from "@/assets/hero/slide-2.jpg";
import slide3 from "@/assets/hero/slide-3.png";
import slide4 from "@/assets/hero/slide-4.jpg";
import slide5 from "@/assets/hero/slide-5.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5];
const SLIDE_INTERVAL = 5000; // 5 seconds

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/584121234567?text=Hola,%20quiero%20agendar%20una%20consulta", "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 md:pt-0 md:pb-0">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50 md:from-foreground/90 md:via-foreground/70 md:to-foreground/40" />
      </div>

      {/* Slide Navigation Arrows - Hidden on mobile to prevent overlap */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 items-center justify-center text-background hover:bg-background/30 transition-all duration-300"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 items-center justify-center text-background hover:bg-background/30 transition-all duration-300"
        aria-label="Siguiente slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-background/50 hover:bg-background/80"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container-main relative z-10 pointer-events-auto">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="opacity-0 animate-fade-in-down space-y-4 md:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm text-background px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-background/20">
              <Check size={14} className="text-primary md:w-4 md:h-4" />
              Consultas presenciales y online
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-background leading-tight drop-shadow-lg">
              Transformá tu salud con un plan nutricional{" "}
              <span className="text-primary">diseñado para vos</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-background/90 max-w-xl drop-shadow-md leading-relaxed">
              El acompañamiento profesional que necesitás para mejorar tus hábitos y alcanzar tus objetivos de bienestar.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="default"
                onClick={scrollToContact}
                className="hover-scale-btn gap-2 shadow-lg text-sm md:text-base"
              >
                <Calendar size={18} />
                Agendar Consulta
              </Button>
              <Button
                size="default"
                variant="outline"
                onClick={openWhatsApp}
                className="hover-scale-btn gap-2 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20 hover:text-background shadow-lg text-sm md:text-base"
              >
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-4 md:pt-8">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/90 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-background text-base md:text-xl">+500</p>
                  <p className="text-xs md:text-sm text-background/80">Pacientes felices</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/90 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-secondary-foreground font-bold text-sm md:text-base">5★</span>
                </div>
                <div>
                  <p className="font-semibold text-background text-base md:text-xl">Excelente</p>
                  <p className="text-xs md:text-sm text-background/80">Valoración</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
