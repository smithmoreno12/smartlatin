const AboutSection = () => {
  return (
    <section id="acerca" className="w-full py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Acerca de <span className="text-primary">SmartLatin Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              En <strong className="text-foreground">SmartLatin Technologies</strong>, somos especialistas en desarrollo 
              de software innovador y soluciones tecnológicas de vanguardia. Nuestro enfoque se centra en crear 
              experiencias digitales excepcionales que transforman ideas en realidades tecnológicas.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con experiencia en desarrollo web, aplicaciones móviles, y sistemas híbridos, ofrecemos soluciones 
              completas que impulsan el crecimiento de nuestros clientes. Utilizamos las últimas tecnologías como 
              React, React Native, Firebase, y más para garantizar productos de alta calidad.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Proyectos Completados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <p className="text-sm text-muted-foreground">Años de Experiencia</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">SM</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">E. Smith Moreno</h3>
              <p className="text-primary font-semibold mb-1">Director de Tecnología</p>
              <a 
                href="https://devmoreno.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                devmoreno.me
              </a>
            </div>
            
            <p className="text-muted-foreground text-center leading-relaxed">
              "Nuestra misión es crear soluciones tecnológicas que no solo cumplan expectativas, 
              sino que las superen, transformando la forma en que las empresas interactúan con la tecnología."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;