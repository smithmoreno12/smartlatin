
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Youtube, ArrowLeft, ExternalLink } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const {
    projects,
    categories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
  } = useProjects();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Nuestros Proyectos</h1>
              <p className="text-muted-foreground">Explora nuestro portafolio completo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="relative mb-8 animate-fade-in">
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
        <div className="flex flex-wrap gap-2 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {categories.map((category, index) => (
            <Badge
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                category === selectedCategory 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => setSelectedCategory(category)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
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
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Youtube className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={project.status === 'completed' ? 'default' : project.status === 'in-progress' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {project.status === 'completed' ? 'Completado' : project.status === 'in-progress' ? 'En Progreso' : 'Planeado'}
                    </Badge>
                    {project.url && (
                      <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">No se encontraron proyectos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
