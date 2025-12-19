import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/Projects";
import { Reveal } from "../components/ui/Reveal";

const Projects = () => {
    return (
      <div className="bg-transparent min-h-screen p-10">
        <div className="max-w-7xl mx-auto ">
          
          {/* Título animado */}
          <Reveal>
            <h1 className="text-4xl font-display font-semibold mb-10 text-text-primary text-center">
              Mis Proyectos
            </h1>
          </Reveal>

          {/* Contenedor GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.2}> 
                
                <div
                  className="
                    group h-full
                    bg-surface/45 backdrop-blur-md rounded-2xl p-6 
                    border border-border-default 
                    transition-all duration-300 
                    overflow-hidden
                    
                    /*  MÓVIL */
                    shadow-lg shadow-accent/5
                    
                    /*  ESCRITORIO */
                    md:hover:border-accent/50 
                    md:hover:shadow-2xl 
                    md:hover:shadow-accent/10
                    md:hover:-translate-y-1
                  "
                >
                  {/* Contenedor FLEX */}
                  <div className="flex flex-col md:flex-row gap-6 h-full">
                    
                    {/* COLUMNA IZQUIERDA: Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-display font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h2>

                        <p className="text-text-secondary font-body text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <h3 className="text-sm font-mono text-text-muted mb-3 uppercase tracking-wider">
                          Stack Tecnológico
                        </h3>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.stack.map((tech, indexStack) => (
                            <span
                              key={indexStack}
                              className="px-3 py-1 text-xs font-mono text-text-primary bg-surface border border-border-active rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Botones de Acción */}
                      <div className="flex flex-wrap items-center gap-4 mt-auto">
                        
                        {/* Botón Principal: Ver Caso */}
                        <Link
                          to={project.links.caseStudy}
                          className="
                            px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                            bg-accent text-white
                            shadow-lg shadow-accent/20
                            
                            /*  Móvil */
                            active:scale-95 active:bg-accent-hover
                            
                            /*  Escritorio */
                            md:hover:bg-accent-hover md:hover:scale-105
                          "
                        >
                          Ver caso de estudio
                        </Link>

                        <div className="flex gap-2">
                          {/* Botón Código */}
                          <a
                            href={project.links.code}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              px-4 py-2 rounded-lg text-sm transition-all duration-300
                              border border-border-active text-text-secondary
                              
                              /*  Móvil */
                              active:scale-95 active:bg-white/5 active:text-white
                              
                              /*  Escritorio */
                              md:hover:text-white md:hover:border-white/20
                            "
                          >
                            Código
                          </a>

                          {/* Botón Live */}
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noreferrer"
                              className="
                                px-4 py-2 rounded-lg text-sm transition-all duration-300
                                border border-success text-success
                                
                                /*  Móvil */
                                active:scale-95 active:bg-success/10
                                
                                /* Escritorio */
                                md:hover:bg-success/20
                              "
                            >
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* COLUMNA DERECHA Imagen */}
                    <div className="flex-1 relative h-64 md:h-auto rounded-xl overflow-hidden transition-all md:group-hover:ring-1 md:group-hover:ring-white/10">
                      {/* Overlay: Solo desaparece al hover en escritorio */}
                      <div className="absolute inset-0 bg-base/20 transition-all duration-500 z-10 md:group-hover:bg-transparent" />

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top-left transform transition-transform duration-700 md:group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    );
};
export default Projects;