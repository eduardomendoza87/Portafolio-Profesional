import React from "react";
import { Reveal } from "../components/ui/Reveal";
import { 
  //Nucleo de desarrollo
  Code2,        // React (átomo)
  FileCode,     // JavaScript
  Boxes,        // CSS/Tailwind
  Zap,          // Vite
  Braces,       // HTML5
  // Diseño de producto
  Figma,        // Figma
  PenTool,      // Wireframing
  Image,        // Mockups
  Workflow,     // Prototyping
  Layers,       // Design System
  // Flujo de trabajo
  CheckSquare,  // Jira
  Users,        // Scrum
  GitBranch,    // Git
  Code          // VS Code
} from 'lucide-react';
import ServicesAccordion from "../components/ui/Acordeon";

const StackTech = () => {
    return (
      <div className="bg-transparent min-h-screen p-10">
        <div className="max-w-7xl mx-auto ">
          
          {/* Título con animación */}
          <Reveal>
            <h1 className="text-4xl font-display font-semibold mb-10 text-text-primary text-center">
              Mi stack tecnológico
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            
            {/* COLUMNA 1: Habilidades (Ocupa 2 espacios) */}
            <div className="col-span-1 md:col-span-2"> 
              <Reveal delay={0.2}>
                <div className="group bg-surface/45 backdrop-blur-sm rounded-2xl p-8 border border-border-active hover:border-accent hover:bg-surface/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 h-full">
                  
                  {/* Sección 1: Núcleo */}
                  <h3 className="text-xl font-semibold text-text-primary mb-6 mt-2">
                    Núcleo de desarrollo
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* React */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Code2 className="w-5 h-5 text-accent" />
                      React
                    </span>

                    {/* JavaScript */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <FileCode className="w-5 h-5 text-yellow-400" />
                      JavaScript
                    </span>

                    {/* Tailwind CSS */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Boxes className="w-5 h-5 text-cyan-400" />
                      Tailwind CSS
                    </span>

                    {/* HTML5 & CSS3 */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Braces className="w-5 h-5 text-orange-400" />
                      HTML5 & CSS3
                    </span>

                    {/* Vite */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Zap className="w-5 h-5 text-purple-400" />
                      Vite
                    </span>
                  </div>

                  {/* Sección 2: Diseño */}
                  <h3 className="text-xl font-semibold text-text-primary mb-6">
                    Diseño de producto
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* Figma */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Figma className="w-5 h-5 text-purple-500" />
                      Figma
                    </span>

                    {/* Wireframing */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <PenTool className="w-5 h-5 text-blue-400" />
                      Wireframing
                    </span>

                    {/* Mockups */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Image className="w-5 h-5 text-pink-400" />
                      Mockups
                    </span>

                    {/* Prototyping */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Workflow className="w-5 h-5 text-green-400" />
                      Prototyping
                    </span>

                    {/* Design System */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Layers className="w-5 h-5 text-indigo-400" />
                      Design System
                    </span>
                  </div>

                  {/* Sección 3: Flujo de trabajo */}
                  <h3 className="text-xl font-semibold text-text-primary mb-6">
                    Flujo de trabajo y gestión
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Jira */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <CheckSquare className="w-5 h-5 text-blue-500" />
                      Jira
                    </span>

                    {/* Scrum */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Users className="w-5 h-5 text-orange-400" />
                      Scrum
                    </span>

                    {/* Git */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <GitBranch className="w-5 h-5 text-orange-500" />
                      Git
                    </span>

                    {/* VS Code */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-text-primary px-5 py-2.5 rounded-xl font-medium hover:bg-accent/20 hover:scale-105 transition-all duration-300">
                      <Code className="w-5 h-5 text-blue-400" />
                      VS Code
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* COLUMNA 2: Servicios */}
            <div className="col-span-1">
              <Reveal delay={0.4}>
                <div className="group bg-surface/45 backdrop-blur-sm rounded-2xl p-8 border border-border-active hover:border-accent hover:bg-surface/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 h-full">
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