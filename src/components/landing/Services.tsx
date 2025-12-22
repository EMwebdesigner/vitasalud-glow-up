import { UserCheck, Monitor, FileText, BookOpen } from "lucide-react";

// Import service images
import consultaPresencial from "@/assets/services/consulta-presencial.jpg";
import consultaOnline from "@/assets/services/consulta-online.jpg";
import planesPersonalizados from "@/assets/services/planes-personalizados.jpg";
import educacionAlimentaria from "@/assets/services/educacion-alimentaria.jpg";

const services = [
  {
    icon: UserCheck,
    title: "Consulta Presencial",
    description: "Evaluación completa, mediciones antropométricas y plan nutricional personalizado.",
    image: consultaPresencial,
  },
  {
    icon: Monitor,
    title: "Consulta Online",
    description: "Acompañamiento profesional desde cualquier lugar, con seguimiento por WhatsApp.",
    image: consultaOnline,
  },
  {
    icon: FileText,
    title: "Planes Personalizados",
    description: "Programas específicos para pérdida de peso, masa muscular, salud digestiva y más.",
    image: planesPersonalizados,
  },
  {
    icon: BookOpen,
    title: "Educación Alimentaria",
    description: "Herramientas prácticas, recetas y guías para un cambio real y sostenible.",
    image: educacionAlimentaria,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-spacing section-alt">
      <div className="container-main">
        {/* Title */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-section-title font-display text-foreground mb-4">
            Servicios de Nutrición
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones personalizadas para cada etapa de tu camino hacia el bienestar
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative overflow-hidden rounded-card shadow-card hover:shadow-card-hover hover-scale-card transition-all duration-300 opacity-0 animate-fade-in-up stagger-${index + 1} group min-h-[320px]`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/30" />

              {/* Content */}
              <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-end">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/90 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                  <service.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <h3 className="text-card-title font-display text-background mb-3">
                  {service.title}
                </h3>
                <p className="text-background/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
