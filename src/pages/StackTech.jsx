import React from "react";
import { Reveal } from "../components/ui/Reveal";
import { 
  Code2, FileCode, Boxes, Zap, Braces, 
  Figma, PenTool, Image, Workflow, Layers, 
  CheckSquare, Users, GitBranch, Code
} from 'lucide-react';
import ServicesAccordion from "../components/ui/Acordeon";

const StackTech = () => {
    
    // Clase reutilizable para los Chips de tecnología (Optimizado Móvil/PC)
    const chipClass = "inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-sm shadow-accent/5 active:scale-95 active:bg-accent/20 md:hover:bg-accent/20 md:hover:scale-105";

    // Clase reutilizable para las Tarjetas Grandes
    const cardClass = "group bg-surface/45 backdrop-blur-sm rounded-2xl p-8 border border-border-active transition-all duration-300 shadow-lg shadow-accent/5 md:hover:border-accent md:hover:bg-surface/60 md:hover:shadow-xl md:hover:shadow-accent/10 h-full";

    return (
      <div className="bg-transparent min-h-screen p-10">
        <div className="max-w-7xl mx-auto ">
          
          <Reveal>
            <h1 className="text-4xl font-display font-semibold mb-10 text-text-primary text-center">
              Mi stack tecnológico
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            
            {/* COLUMNA 1: Habilidades (Ocupa 2 espacios) */}
            <div className="col-span-1 md:col-span-2"> 
              <Reveal delay={0.2}>
                <div className={cardClass}>
                  
                  {/* Sección 1: Núcleo */}
                  <h3 className="text-xl font-semibold text-text-primary mb-6 mt-2">
                    Núcleo de desarrollo
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <span className={chipClass}>
                      <Code2 className="w-5 h-5 text-accent" /> React
                    </span>
                    <span className={chipClass}>
                      <FileCode className="w-5 h-5 text-yellow-400" /> JavaScript
                    </span>
                    <span className={chipClass}>
                      <Boxes className="w-5 h-5 text-cyan-400" /> Tailwind CSS
                    </span>
                    <span className={chipClass}>
                      <Braces className="w-5 h-5 text-orange-400" /> HTML5 & CSS3
                    </span>
                    <span className={chipClass}>
                      <Zap className="w-5 h-5 text-purple-400" /> Vite
                    </span>
                  </div>

                  {/* Sección 2: Diseño */}
                  <h3 className="text-xl font-semibold text-text-primary mb-6">
                    Diseño de producto
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <span className={chipClass}>
                      <Figma className="w-5 h-5 text-purple-500" /> Figma
                    </span>
                    <span className={chipClass}>
                      <PenTool className="w-5 h-5 text-blue-400" /> Wireframing
                    </span>
                    <span className={chipClass}>
                      <Image className="w-5 h-5 text-pink-400" /> Mockups
                    </span>
                    <span className={chipClass}>
                      <Workflow className="w-5 h-5 text-green-400" /> Prototyping
                    </span>
                    <span className={chipClass}>
                      <Layers className="w-5 h-5 text-indigo-400" /> Design System
                    </span>
                  </div>

                  {/* Sección 3: Flujo de trabajo */}
                  <h3 className="text-xl font-semibold text-text-primary mb-6">
                    Flujo de trabajo y gestión
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <span className={chipClass}>
                      <CheckSquare className="w-5 h-5 text-blue-500" /> Jira
                    </span>
                    <span className={chipClass}>
                      <Users className="w-5 h-5 text-orange-400" /> Scrum
                    </span>
                    <span className={chipClass}>
                      <GitBranch className="w-5 h-5 text-orange-500" /> Git
                    </span>
                    <span className={chipClass}>
                      <Code className="w-5 h-5 text-blue-400" /> VS Code
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* COLUMNA 2: Servicios */}
            <div className="col-span-1">
              <Reveal delay={0.4}>
                <div className={cardClass}>
                  <ServicesAccordion />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    );
};

export default StackTech;