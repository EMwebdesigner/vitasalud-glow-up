import { Instagram, Heart, Leaf } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-dark text-white py-12 md:py-16">
      <div className="container-main">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Logo & Description */}
          <div>
            <a href="#inicio" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-green rounded-full flex items-center justify-center shadow-md">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-display font-bold tracking-tight text-white">
                  VITA<span className="text-primary">SALUD</span>
                </span>
                <span className="text-[10px] text-white/60 tracking-widest uppercase">
                  Nutrición Clínica
                </span>
              </div>
            </a>
            <p className="text-white/70 leading-relaxed">
              Consultorio nutricional especializado en educación alimentaria, hábitos saludables y planes personalizados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white/70 hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
            <a
              href="https://instagram.com/vitasaludve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/70 hover:text-brand-magenta transition-colors group"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-magenta/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <span>@vitasaludve</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>
              © {new Date().getFullYear()} VITASALUD. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-brand-magenta" /> para tu bienestar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
