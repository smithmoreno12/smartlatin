import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Github, Twitter, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="w-full py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Acerca de <span className="text-primary">SmartLatin Technologies</span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Transformamos ideas innovadoras en soluciones tecnológicas excepcionales
              </p>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              {/* CEO Image */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-4 border-primary/20">
                    <div className="w-72 h-72 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-8xl">SM</span>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* CEO Info */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-2">E. Smith Moreno</h2>
                    <p className="text-xl text-primary font-semibold mb-4">CEO & Director de Tecnología</p>
                    <div className="w-16 h-1 bg-primary mb-6"></div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Con más de 3 años de experiencia en desarrollo de software, lidero SmartLatin Technologies 
                    con la visión de crear soluciones tecnológicas innovadoras que transformen la forma en que 
                    las empresas interactúan con la tecnología.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Especializado en desarrollo web, aplicaciones móviles y sistemas híbridos, mi enfoque se 
                    centra en la excelencia técnica y la satisfacción del cliente.
                  </p>

                  {/* Contact Info */}
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Contáctame</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://devmoreno.me" target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          devmoreno.me
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="mailto:contact@devmoreno.me">
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Sígueme en:</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/smithmoreno12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors group"
                      >
                        <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span className="font-medium">GitHub</span>
                      </a>
                      
                      <a
                        href="https://twitter.com/smithmoreno12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors group"
                      >
                        <Twitter className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span className="font-medium">Twitter</span>
                      </a>
                      
                      <a
                        href="https://www.linkedin.com/in/smith-moreno-83773a280/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors group"
                      >
                        <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span className="font-medium">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="w-full py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Misión</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-card rounded-lg border border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Innovación</h3>
                  <p className="text-muted-foreground">Desarrollamos soluciones tecnológicas de vanguardia</p>
                </div>
                
                <div className="text-center p-6 bg-card rounded-lg border border-border animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Excelencia</h3>
                  <p className="text-muted-foreground">Calidad superior en cada proyecto que realizamos</p>
                </div>
                
                <div className="text-center p-6 bg-card rounded-lg border border-border animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Crecimiento</h3>
                  <p className="text-muted-foreground">Impulsamos el éxito de nuestros clientes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;