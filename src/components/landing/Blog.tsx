import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Cómo empezar a comer de forma más consciente",
    excerpt: "Descubre técnicas simples para conectar con tu alimentación y hacer mejores elecciones.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop",
    category: "Hábitos",
  },
  {
    title: "El plato saludable explicado fácil",
    excerpt: "Aprende a armar comidas balanceadas con esta guía práctica y visual.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop",
    category: "Educación",
  },
  {
    title: "Errores comunes al iniciar un plan nutricional",
    excerpt: "Evita estos obstáculos frecuentes y maximiza tus resultados desde el inicio.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1470&auto=format&fit=crop",
    category: "Tips",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section-spacing">
      <div className="container-main">
        {/* Title */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-section-title font-display text-foreground mb-4">
            Contenido útil para tu día a día
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Artículos y consejos para ayudarte en tu camino hacia una alimentación más saludable
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`group bg-card rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover-scale-card transition-all duration-300 opacity-0 animate-fade-in-up stagger-${index + 1}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-card-title font-display text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium group/link"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
