import { UserCheck, Monitor, FileText, BookOpen } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Consulta Presencial",
    description: "Evaluación completa, mediciones antropométricas y plan nutricional personalizado.",
  },
  {
    icon: Monitor,
    title: "Consulta Online",
    description: "Acompañamiento profesional desde cualquier lugar, con seguimiento por WhatsApp.",
  },
  {
    icon: FileText,
    title: "Planes Personalizados",
    description: "Programas específicos para pérdida de peso, masa muscular, salud digestiva y más.",
  },
  {
    icon: BookOpen,
    title: "Educación Alimentaria",
    description: "Herramientas prácticas, recetas y guías para un cambio real y sostenible.",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card p-6 lg:p-8 rounded-card shadow-card hover:shadow-card-hover hover-scale-card transition-all duration-300 opacity-0 animate-fade-in-up stagger-${index + 1}`}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-card-title font-display text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
