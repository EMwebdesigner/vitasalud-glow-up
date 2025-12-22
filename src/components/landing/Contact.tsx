import { useState } from "react";
import { MapPin, Instagram, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="section-spacing section-alt">
      <div className="container-main">
        {/* Title */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-section-title font-display text-foreground mb-4">
            Hablemos
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Estoy aquí para responder tus preguntas y ayudarte a comenzar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full hover-scale-btn gap-2"
                disabled={isSubmitting}
              >
                <Send size={20} />
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="opacity-0 animate-fade-in-right stagger-2">
            <div className="bg-card p-8 rounded-card shadow-card h-full">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Atención</h4>
                    <p className="text-muted-foreground">Presencial y Online</p>
                    <p className="text-muted-foreground">Lunes a Viernes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Instagram</h4>
                    <a
                      href="https://instagram.com/vitasaludve"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      @vitasaludve
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">Consultas presenciales disponibles</p>
                    <p className="text-muted-foreground">Venezuela</p>
                  </div>
                </div>
              </div>

              {/* Quick note */}
              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  💬 También puedes escribirme directamente por WhatsApp para una respuesta más rápida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 lg:mt-16 opacity-0 animate-fade-in-up stagger-3">
          <div className="bg-card p-6 rounded-card shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                Encuéntranos
              </h3>
            </div>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.0673956614!2d-67.0211!3d10.4806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI4JzUwLjIiTiA2N8KwMDEnMTUuOSJX!5e0!3m2!1ses!2sve!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio VitaSalud"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Consultas presenciales con cita previa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
