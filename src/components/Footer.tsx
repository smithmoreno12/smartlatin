
import { Button } from "@/components/ui/button";
import { Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-black mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Desarrollo web</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Desarrollo de aplicaciones</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Aplicaciones híbridas</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Diseño UI/UX</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-black mb-4">Compañía</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#acerca" className="hover:text-black transition-colors">Acerca de</a></li>
              <li><a href="#contacto" className="hover:text-black transition-colors">Contáctenos</a></li>
              <li><a href="#proyectos" className="hover:text-black transition-colors">Proyectos</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-black mb-4">Conectar</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="https://devmoreno.me" target="_blank" className="flex items-center gap-2 hover:text-black transition-colors">
                  <span className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center text-white text-xs font-bold">W</span>
                  devmoreno.me
                </a>
              </li>
              <li>
                <a href="https://github.com/smithmoreno12" target="_blank" className="flex items-center gap-2 hover:text-black transition-colors">
                  <Github className="w-4 h-4" />
                  Github
                </a>
              </li>
              <li>
                <a href="https://twitter.com/smithmoreno12" target="_blank" className="flex items-center gap-2 hover:text-black transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter Column */}
          <div>
            <h3 className="font-semibold text-black mb-4">Suscríbete a nuestro boletín</h3>
            <p className="text-gray-600 text-sm mb-4">
              Suscríbete para recibir las últimas noticias, artículos, recursos e inspiración sobre diseño.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Dirección de correo electrónico"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              />
              <Button className="bg-black text-white hover:bg-gray-800 px-4 py-2 text-sm">
                Suscribir
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">Sm</span>
            </div>
            <div>
              <p className="font-semibold text-black text-sm">Devmoreno.me</p>
              <p className="text-gray-600 text-xs">¡Construye algo grandioso!</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">© 2024 - SmartLatin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
