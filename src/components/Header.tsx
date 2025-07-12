import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [open, setOpen] = useState(false); // 👉 controla el menú móvil

  return (
    <header className="w-full py-4 px-6 sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <img src="/logo.png" alt="SmartLatin" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">SmartLatin Tech</h1>
            <p className="text-sm text-muted-foreground">¡Construye algo grandioso!</p>
          </div>
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="nav-link">Servicios</a>
          <Link to="/projects" className="nav-link">Proyectos</Link>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        {/* Toggle dark/light + botón móvil */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
            {open ? (
              /* X icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil (slide‑down) */}
      {open && (
        <nav className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li><a onClick={() => setOpen(false)} href="#servicios" className="nav-mobile">Servicios</a></li>
            <li><Link onClick={() => setOpen(false)} to="/projects" className="nav-mobile">Proyectos</Link></li>
            <li><a onClick={() => setOpen(false)} href="#contacto" className="nav-mobile">Contacto</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
