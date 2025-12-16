import React from "react";
import { Link } from "react-router-dom";

//imagenes de proyectos
import AxisMain from "../assets/proyecto-axis/axis-main.jpg"
import PlataformaEducativaMain from "../assets/proyecto-plataforma-educativa/plataforma-educativa-main.jpg"
import PortafolioMain from "../assets/proyecto-portafolio/portafolio-main.png"
import NexusMain from "../assets/proyecto-nexus/nexus-main.png"



const projects = [
  {
    id: 1,
    title: "Nexus",
    description: "Control financiero diseñado para la velocidad. Permite registrar gastos en menos de 7 segundos y correlacionar emociones con hábitos de consumo.",
    stack: ["React", "Tailwind CSS", "Vite", "Figma", "Html"],
    image: NexusMain, 
    links: {
      caseStudy: "/proyectos/nexus", 
      code: "https://github.com/eduardomendoza87/Finance-flow",
      live: null
    }
  },
  {
    id: 2,
    title: "AXIS Architecture Studio",
    description: "Plataforma de portafolio para arquitectos que equilibra una estética minimalista moderna con un rendimiento técnico alto.",
    stack: ["React", "Tailwind CSS", "Vite", "Figma", "Html"],
    image: AxisMain,
    links: {
      caseStudy: "/proyectos/axis",
      code: "https://github.com/eduardomendoza87/Axis-Architecture-Studio-Web",
      live: "https://axis-arquitecture-studio.vercel.app/"
    }
  },
  {
    id: 3,
    title: "Personal Portfolio v1",
    description: "Una identidad digital construida bajo metodología Scrum, alejándose de plantillas genéricas para crear una experiencia de navegación estilo App.",
    stack: ["React", "Tailwind CSS", "Vite", "Figma", "Html"],
    image: PortafolioMain,
    links: {
      caseStudy: "/proyectos/portfolio-v1",
      code: "https://github.com/tu-usuario/portfolio-v1",
      live: null
    }
  },
  {
    id: 4,
    title: "Educational Platform",
    description: "Transformación de material teórico estático (PDFs) en una experiencia web dinámica y centralizada para estudiantes de ingeniería.",
    stack: ["React", "Tailwind CSS", "Vite", "Figma", "Html"],
    image: PlataformaEducativaMain,
    links: {
      caseStudy: "/proyectos/edu-platform",
      code: "https://github.com/eduardomendoza87/Proyecto_Unidad_3",
      live: "https://proyecto-unidad-3.vercel.app/"
    }
  }
];

const Projects = () => {
    return(
        <div className="bg-transparent min-h-screen p-10">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-4xl font-display font-semibold mb-10 text-text-primary text-center">
            Mis Proyectos
          </h1>
          {/* Contenedor GRID que envuelve al mapa */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
   {projects.map((project) => (
  <div 
    key={project.id} 
    className="group bg-surface/45 backdrop-blur-md rounded-2xl p-6 border border-border-default hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden"
  >
    {/* Contenedor FLEX para dividir: Izquierda (Texto) | Derecha (Imagen) */}
    <div className="flex flex-col md:flex-row gap-6 h-full">
      
      {/* COLUMNA IZQUIERDA: Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
            {project.title}
          </h2>
          
          <p className="text-text-secondary font-body text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Subtítulo Stack */}
          <h3 className="text-sm font-mono text-text-muted mb-3 uppercase tracking-wider">
            Stack Tecnológico
          </h3>

          {/* Mapeo de STACK (Chips individuales) */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-mono text-text-primary bg-surface border border-border-active rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center gap-4 mt-auto">
          {/* Botón Principal: Ver Caso */}
          <Link 
            to={project.links.caseStudy}
            className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-accent/20"
          >
            Ver caso de estudio
          </Link>

          {/* Botones Secundarios: Código y Live */}
          <div className="flex gap-2">
            <a 
              href={project.links.code} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 border border-border-active text-text-secondary text-sm rounded-lg hover:text-white hover:border-white/20 transition-colors"
            >
              Código
            </a>
            
            {/* Renderizado condicional: Solo si existe link 'live' */}
            {project.links.live && (
              <a 
                href={project.links.live}
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 border border-success text-success text-sm rounded-lg hover:bg-success/25  transition-colors"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* COLUMNA DERECHA Imagen  */}
      <div className="flex-1 relative h-64 md:h-auto rounded-xl overflow-hidden group-hover:ring-1 group-hover:ring-white/10 transition-all">
         {/* Overlay oscuro  */}
         <div className="absolute inset-0 bg-base/20 group-hover:bg-transparent transition-all duration-500 z-10" />
         
         <img 
           src={project.image} 
           alt={project.title} 
           className="w-full h-full object-cover object-top-left transform group-hover:scale-105 transition-transform duration-700"
         />
      </div>

    </div>
  </div>
))}

</div>

          </div>
          </div>

    );
};
export default Projects;