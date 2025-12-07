import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import Testimonials from "@/components/landing/Testimonials";
import Blog from "@/components/landing/Blog";
import CTASection from "@/components/landing/CTASection";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>VITASALUD | Consultorio Nutricional - Nutricionista Clínica</title>
      <meta
        name="description"
        content="Consultorio nutricional especializado en educación alimentaria, planes personalizados y acompañamiento profesional. Consultas presenciales y online con la Lic. Andrea Rodríguez."
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <Blog />
          <CTASection />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
