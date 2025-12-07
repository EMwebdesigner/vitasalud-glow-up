import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Aprendí a comer mejor sin sentir que estoy a dieta. Hoy tengo más energía y claridad.",
    author: "Mariana G.",
  },
  {
    text: "El plan fue fácil de seguir y los resultados superaron mis expectativas.",
    author: "Daniel R.",
  },
  {
    text: "Finalmente encontré una nutricionista que entiende mi ritmo de vida.",
    author: "Yessica P.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="section-spacing section-green">
      <div className="container-main">
        {/* Title */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-section-title font-display text-foreground mb-4">
            Lo que dicen mis pacientes
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Historias reales de transformación y bienestar
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`bg-card p-8 rounded-card shadow-card hover-scale-card transition-all duration-300 opacity-0 animate-fade-in-up stagger-${index + 1}`}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-card p-8 rounded-card shadow-card opacity-0 animate-fade-in-up">
            <Quote className="w-10 h-10 text-primary/20 mb-4" />
            <p className="text-foreground text-lg leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {testimonials[currentIndex].author.charAt(0)}
                </span>
              </div>
              <p className="font-semibold text-foreground">
                {testimonials[currentIndex].author}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
