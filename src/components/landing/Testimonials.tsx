import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "Aprendí a comer mejor sin sentir que estoy a dieta. Hoy tengo más energía y claridad.",
    author: "Mariana G.",
    role: "Paciente desde 2023",
    rating: 5,
  },
  {
    text: "El plan fue fácil de seguir y los resultados superaron mis expectativas.",
    author: "Daniel R.",
    role: "Paciente desde 2022",
    rating: 5,
  },
  {
    text: "Finalmente encontré una nutricionista que entiende mi ritmo de vida.",
    author: "Yessica P.",
    role: "Paciente desde 2024",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating 
              ? "fill-yellow text-yellow" 
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ 
  testimonial, 
  index 
}: { 
  testimonial: typeof testimonials[0]; 
  index: number;
}) => {
  return (
    <div
      className={`group relative bg-card p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up stagger-${index + 1}`}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl rounded-bl-[80px]" />
      
      {/* Quote icon with gradient background */}
      <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
        <Quote className="w-5 h-5 text-primary-foreground" />
      </div>
      
      {/* Star Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>
      
      {/* Testimonial text */}
      <p className="text-foreground text-lg leading-relaxed mb-6 italic relative">
        <span className="text-primary/30 text-4xl absolute -top-2 -left-2">"</span>
        {testimonial.text}
        <span className="text-primary/30 text-4xl">"</span>
      </p>
      
      {/* Author info */}
      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md">
          <span className="text-primary-foreground font-bold text-lg">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

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
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-section-title font-display text-foreground mb-4">
            Lo que dicen mis pacientes
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Historias reales de transformación y bienestar que inspiran
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.author} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="group relative bg-card p-8 rounded-2xl border-2 border-primary/10 shadow-lg opacity-0 animate-fade-in-up">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl rounded-bl-[80px]" />
            
            {/* Quote icon */}
            <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-5 shadow-md">
              <Quote className="w-5 h-5 text-primary-foreground" />
            </div>
            
            {/* Star Rating */}
            <div className="mb-4">
              <StarRating rating={testimonials[currentIndex].rating} />
            </div>
            
            {/* Testimonial text */}
            <p className="text-foreground text-lg leading-relaxed mb-6 italic relative">
              <span className="text-primary/30 text-4xl absolute -top-2 -left-2">"</span>
              {testimonials[currentIndex].text}
              <span className="text-primary/30 text-4xl">"</span>
            </p>
            
            {/* Author info */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-lg">
                  {testimonials[currentIndex].author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 w-2 hover:bg-primary/50"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
