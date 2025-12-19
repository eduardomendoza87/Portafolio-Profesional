import React from "react";
import { useParams } from 'react-router-dom';
import { projects } from "../data/Projects";
import ProjectDemo from "../components/ProjectDemo";
import { Reveal } from "../components/ui/Reveal"; 

const ProjectDetails = () => {
  const { id } = useParams();
  
  // Busca el proyecto específico
  const project = projects.find((p) => p.id === id);

  // Manejo de seguridad
  if (!project) {
    return (
        <div className="min-h-screen flex items-center justify-center text-text-primary">
            <Reveal>
                <h1 className="text-3xl">Proyecto no encontrado :(</h1>
            </Reveal>
        </div>
    );
  }

  // Clases reutilizables para mantener consistencia
  const cardClass = "group bg-surface/45 backdrop-blur-md rounded-2xl p-6 border border-border-default transition-all duration-300 overflow-hidden shadow-lg shadow-accent/5 md:hover:border-accent/50 md:hover:shadow-2xl md:hover:shadow-accent/10 h-full";
  
  const buttonBaseClass = "flex-1 text-center px-4 py-2 text-sm rounded-lg transition-all duration-300 active:scale-95";

  return (
    <div className="bg-transparent min-h-screen p-10">
      <div className="max-w-7xl mx-auto ">
        
        {/* SECCIÓN 1: HERO & INFO  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          
          {/* Columna 1 (Principal - Span 2) */}
          <div className="col-span-2">
            <div className={cardClass}>
                {/* Imagen Principal */}
                <Reveal>
                    <img
                    src={project.processImages.hero}
                    alt={project.title}
                    className="w-full h-96 object-cover object-center mb-6 rounded-xl shadow-inner"
                    />
                </Reveal>

                {/* Título */}
                <Reveal delay={0.2}>
                    <h2 className="text-3xl font-display font-bold text-text-primary mb-4">
                    {project.title}
                    </h2>
                </Reveal>

                {/* Descripción */}
                <Reveal delay={0.4}>
                    <p className="text-text-secondary font-body leading-relaxed mb-6">
                    {project.description}
                    </p>
                </Reveal>

                {/* Metadatos (Año y Rol) */}
                <Reveal delay={0.6}>
                    <div className="flex flex-wrap gap-8 border-t border-border-active pt-6">
                        <div>
                            <span className="block text-text-muted text-xs uppercase tracking-wider mb-1">Año</span>
                            <p className="text-text-primary font-mono text-lg">{project.year}</p>
                        </div>
                        <div>
                            <span className="block text-text-muted text-xs uppercase tracking-wider mb-1">Rol</span>
                            <p className="text-text-primary font-mono text-lg">{project.rol}</p>
                        </div>
                    </div>
                </Reveal>
            </div>
          </div>

          {/* Columna 2 (Sidebar) */}
          <div className="col-span-1">
            <Reveal delay={0.6}> 
                <div className={cardClass}>
                    <h3 className="text-lg font-semibold text-text-primary mb-6">Stack tecnológico</h3>
                    
                    {/* Mapeo de STACK */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.stack.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm font-mono text-text-primary bg-surface border border-border-active rounded-lg shadow-sm"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>

                    {/* Botones Secundarios (Optimizados para Touch) */}
                    <div className="flex gap-3">
                        {/* Botón Código */}
                        <a
                            href={project.links.code}
                            target="_blank"
                            rel="noreferrer"
                            className={`
                                ${buttonBaseClass}
                                border border-border-active text-text-secondary
                                active:bg-white/5 active:text-white
                                md:hover:text-white md:hover:border-white/20
                            `}
                        >
                            Código
                        </a>

                        {/* Botón Live */}
                        {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className={`
                                ${buttonBaseClass}
                                border border-success text-success
                                active:bg-success/10
                                md:hover:bg-success/10
                            `}
                        >
                            Live
                        </a>
                        )}
                    </div>
                </div>
            </Reveal>
          </div>
        </div>

        {/* SECCIÓN 2: DESAFÍO Y WIREFRAMES  */}
        <section>
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              
              {/* Columna 1: El Desafío y Stats */}
              <div className="col-span-1">
                <Reveal>
                    <h3 className="text-2xl font-display font-bold text-text-primary mb-6">
                    El Desafío
                    </h3>
                </Reveal>
                
                <Reveal delay={0.2}>
                    <p className="text-text-secondary font-body text-sm leading-relaxed mb-10">
                    {project.challenge}
                    </p>
                </Reveal>

                {/* Stats (Grid de 3) */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {project.stats.map((stat, index) => (
                    <Reveal key={index} delay={index * 0.2}>
                        <div
                        className="
                            flex flex-col items-center justify-center 
                            bg-surface/30 backdrop-blur-sm border border-white/5 p-4 rounded-xl 
                            transition-all duration-300
                            shadow-sm shadow-accent/5
                            /* Táctil: se hunde un poco */
                            active:scale-95
                            /* Desktop: Hover suave */
                            md:hover:bg-surface/50 md:hover:border-white/10
                        "
                        >
                            <span className="text-xl md:text-2xl font-display font-bold text-accent mb-1">
                                {stat.value}
                            </span>
                            <span className="text-[10px] md:text-xs text-text-secondary text-center uppercase tracking-wide">
                                {stat.label}
                            </span>
                        </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Columna 2 y 3: Imágenes del Proceso */}
              <div className="col-span-1 md:col-span-2 relative">
                <Reveal delay={0.2}>
                    <h3 className="text-2xl font-display text-center font-bold text-text-primary mb-8">
                    Desde la idea a la realidad
                    </h3>
                </Reveal>

                <div className="flex flex-col gap-6">
                  {/* Imagen Wireframes */}
                  <Reveal delay={0.4}>
                    <div className="bg-surface/20 p-2 rounded-xl border border-white/5 shadow-lg shadow-black/20">
                        <img
                            src={project.processImages.wireframes}
                            alt="Wireframes"
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
                  </Reveal>
                  
                  {/* Imagen Mockups */}
                  <Reveal delay={0.6}>
                    <div className="bg-surface/20 p-2 rounded-xl border border-white/5 shadow-lg shadow-black/20">
                        <img
                            src={project.processImages.mockups}
                            alt="Mockups Finales"
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
                  </Reveal>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECCIÓN 3: DEMO EN VIVO  */}
        <section className="mt-20">
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 gap-4 ">
              
              <Reveal>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-accent text-center mb-8">
                    Demo en vivo
                </h3>
              </Reveal>

              <Reveal delay={0.2}>
                <div>
                    {project.demo && (
                    <ProjectDemo
                        desktopVideo={project.demo.desktopVideo}
                        mobileVideo={project.demo.mobileVideo}
                        liveLink={project.demo.liveLink}
                    />
                    )}
                </div>
              </Reveal>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProjectDetails;