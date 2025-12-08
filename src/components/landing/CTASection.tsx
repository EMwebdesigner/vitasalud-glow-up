import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import mandarinaPattern from "@/assets/mandarina-pattern.png";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Mandarina pattern background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${mandarinaPattern})`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
        }}
      />
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center opacity-0 animate-fade-in-up">
          <h2 className="text-section-title font-display text-primary-foreground mb-6">
            ¿Lista(o) para mejorar tu salud y tus hábitos?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Da el primer paso hacia una vida más saludable. Estoy aquí para acompañarte.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={scrollToContact}
            className="hover-scale-btn gap-2 bg-white text-primary hover:bg-white/90"
          >
            <Calendar size={20} />
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
