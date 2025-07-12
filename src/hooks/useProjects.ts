
import { useState, useMemo } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  category: string;
  technologies: string[];
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  url?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Aplicación de chat de pila completa",
    description: "Una aplicación de chat en tiempo real con autenticación, salas privadas y notificaciones push.",
    image: "/lovable-uploads/509b5205-1c56-4ce9-802b-44cd33476ecb.png",
    bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/20 dark:to-yellow-800/20",
    category: "React Native",
    technologies: ["React Native", "Firebase", "Node.js"],
    date: "2024-01",
    status: "completed"
  },
  {
    id: 2,
    title: "Interfaz de usuario de aplicación móvil",
    description: "Diseño moderno y responsivo para aplicación de comercio electrónico con animaciones fluidas.",
    image: "/lovable-uploads/38974e28-bab1-48f3-bc18-bd300bd74f69.png",
    bgColor: "bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/20 dark:to-teal-800/20",
    category: "Viento de cola",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    date: "2024-02",
    status: "completed"
  },
  {
    id: 3,
    title: "Aplicación de seguimiento de gastos",
    description: "Herramienta completa para gestión de finanzas personales con gráficos interactivos y reportes.",
    image: "/lovable-uploads/9452c13b-b5ef-4db3-a4dc-dabcc045e9e8.png",
    bgColor: "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20",
    category: "React Native",
    technologies: ["React Native", "MongoDB", "Express"],
    date: "2024-03",
    status: "in-progress"
  },
  {
    id: 4,
    title: "Dashboard administrativo",
    description: "Panel de control completo con analíticas en tiempo real y gestión de usuarios avanzada.",
    image: "/lovable-uploads/af0bea1a-886c-4074-aef5-fe6bd37d0b7a.png",
    bgColor: "bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20",
    category: "Next js",
    technologies: ["NextJs", "Supabase", "Tailwind CSS"],
    date: "2024-04",
    status: "completed"
  },
  {
    id: 5,
    title: "Aplicación de redes sociales",
    description: "Plataforma social completa con feed en tiempo real, stories y sistema de mensajería.",
    image: "/lovable-uploads/509b5205-1c56-4ce9-802b-44cd33476ecb.png",
    bgColor: "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20",
    category: "Firebase",
    technologies: ["React", "Firebase", "Node.js"],
    date: "2024-05",
    status: "in-progress"
  },
];

export const useProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todo');

  const categories = useMemo(() => {
    const allCategories = ['Todo', ...Array.from(new Set(projectsData.map(p => p.category)))];
    return allCategories;
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = projectsData;

    if (selectedCategory !== 'Todo') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  return {
    projects: filteredProjects,
    allProjects: projectsData,
    categories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
  };
};
