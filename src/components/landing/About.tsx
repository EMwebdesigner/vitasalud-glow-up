import { Check } from "lucide-react";
import andreaImage from "@/assets/about/ana-gomez.png";

const checklistItems = [
  "Planes personalizados",
  "Acompañamiento cercano",
  "Educación alimentaria",
  "Resultados sostenibles",
];

const About = () => {
  return (
    <section id="sobre-mi" className="section-spacing">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="opacity-0 animate-fade-in-left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={andreaImage}
                  alt="Lic. Ana Gomez - Nutricionista Clínica"
                  className="w-full h-[400px] md:h-[500px] object-cover object-top"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-peach/20 rounded-full -z-10" />

              {/* Experience badge */}
              <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-primary">+8</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="opacity-0 animate-fade-in-right stagger-2">
            <h2 className="text-section-title font-display text-foreground mb-6">
              Sobre la Lic. Ana Gomez
            </h2>

            <div className="space-y-4 text-body-lg text-muted-foreground mb-8">
              <p>
                Soy nutricionista clínica y Antropometrista ISAK I. Mi enfoque está basado en crear hábitos saludables reales, sin extremos ni restricciones innecesarias.
              </p>
              <p>
                Trabajo contigo para ayudarte a mejorar tu relación con la comida, alcanzar tus objetivos y construir un bienestar sostenible.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-4">
              {checklistItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 opacity-0 animate-fade-in-up stagger-${index + 1}`}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
