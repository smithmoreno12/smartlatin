
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Youtube, ArrowRight } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const {
    projects,
    categories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
  } = useProjects();

  // Show only first 6 projects in the home section
  const displayedProjects = projects.slice(0, 6);

  return (
    <section id="proyectos" className="w-full py-20 px-6 bg-accent/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SL</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">SmartLatin Technologies</h2>
              <p className="text-sm text-muted-foreground">¡Construye algo grandioso!</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">Servicios</a>
            <Link to="/projects" className="text-primary font-semibold">Project</Link>
            <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
            <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
            <a href="#acerca" className="text-muted-foreground hover:text-foreground transition-colors">Acerca de</a>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pr-12 border border-border rounded-lg bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
          />
          <Button
            size="sm"
            className="absolute right-1 top-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((tag, index) => (
            <Badge
              key={index}
              variant={tag === selectedCategory ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                tag === selectedCategory
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => setSelectedCategory(tag)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${project.bgColor} p-8 flex items-center justify-center min-h-[200px] relative overflow-hidden`}>
                <div className="w-32 h-24 bg-white/80 dark:bg-black/20 rounded-lg shadow-lg flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <span className="text-muted-foreground text-xs font-medium">Preview</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Youtube className="w-4 h-4" />
                  <span className="text-sm">YouTube</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link to="/projects">
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver Todos los Proyectos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
