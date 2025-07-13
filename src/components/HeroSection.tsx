

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  /* 🔄 función reutilizable */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center px-6 py-16 bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      {/* Background blobs animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 sm:mb-8 leading-tight animate-fade-in px-4">
          ✨ Diseño, 🚀 Construcción e 🔧 Implementación
        </h1>

        {/* Descripción */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
          ¡Bienvenido a SmartLatin Technologies! 🌟 donde convertimos tus ideas en realidad...
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
          <Button
            type="button"
            onClick={() => scrollToSection("contacto")}
            className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            size="lg"
          >
            Contacto
          </Button>

          <Button
            type="button"
            onClick={() => scrollToSection("servicios")}
            variant="outline"
            className="border-2 border-border text-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-accent transition-all duration-300 hover:scale-105 backdrop-blur-sm w-full sm:w-auto"
            size="lg"
          >
            Descubra nuestros servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
