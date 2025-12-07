import { Check, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-peach/10 rounded-full blur-3xl" />
      </div>

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="opacity-0 animate-fade-in-down">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Check size={16} className="text-primary" />
                Consultas presenciales y online
              </div>

              {/* Title */}
              <h1 className="text-hero font-display text-foreground mb-6">
                Transformá tu salud con un plan nutricional{" "}
                <span className="text-primary">diseñado para vos</span>
              </h1>

              {/* Subtitle */}
              <p className="text-body-lg text-muted-foreground mb-8 max-w-xl">
                El acompañamiento profesional que necesitás para mejorar tus hábitos y alcanzar tus objetivos de bienestar.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="hover-scale-btn gap-2"
                >
                  <Calendar size={20} />
                  Agendar Consulta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openWhatsApp}
                  className="hover-scale-btn gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <MessageCircle size={20} />
                  Escribir por WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in-up stagger-2">
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1470&auto=format&fit=crop"
                  alt="Platillos saludables y nutritivos"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">+500</p>
                    <p className="text-sm text-muted-foreground">Pacientes felices</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-peach/30 rounded-full blur-xl" />
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/40 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
