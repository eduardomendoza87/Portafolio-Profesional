import React from "react";
import { useParams } from 'react-router-dom';
import { projects } from "../data/Projects";
import ProjectDemo from "../components/ProjectDemo";


const ProjectDetails = () => {
 const { id } = useParams(); //Captura "nexus" de la URL
  
  // Busca el proyecto específico
  const project = projects.find((p) => p.id === id);

  // Manejo de seguridad (si el usuario pone un ID que no existe)
  if (!project) {
    return <div>Proyecto no encontrado :(</div>;
  }
    return (
      <div className="bg-transparent min-h-screen p-10">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {/*Columna 1*/}
            <div className="col-span-2 group bg-surface/45 backdrop-blur-md rounded-2xl p-6 border border-border-default hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden">
              <img
                src={project.processImages.hero}
                alt={project.title}
                className="w-full h-96 object-bottom-right mb-4 rounded-xl"
              />
              <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
                {project.title}
              </h2>
              <p className="text-text-secondary font-body text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="text-text-primary font-mono text-lg mb-6">
                Año:{project.year}
              </p>
              <p className="text-text-primary font-mono text-lg mb-6">
                Rol:{project.rol}
              </p>
            </div>
            {/*Columna 2*/}
            <div className="col-span-1">
              <div className="group bg-surface/45 backdrop-blur-md rounded-2xl p-6 border border-border-default hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden">
                <h3>Stack tecnologico</h3>
                {/* Mapeo de STACK (Chips individuales) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-lg font-mono text-text-primary bg-surface border border-border-active rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
          </div>
        </div>
        {/*Seccion 2: Desafio y wireframes*/}
        <section>
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/*Columna 1*/}
              <div className="col-span-1">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-20">
                  Desafio
                </h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed mb-20">
                  {project.challenge}
                </p>
                {/* Stats*/}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {project.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center bg-surface/30 backdrop-blur-sm border border-white/5 p-4 rounded-xl hover:bg-surface/50 transition-colors"
                    >
                      {/* 1. El Valor (Grande y color Acento) */}
                      <span className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">
                        {stat.value}
                      </span>

                      {/* 2. La Etiqueta (Pequeña y gris) */}
                      <span className="text-xs text-text-secondary text-center uppercase tracking-wide">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/*Columna 2 y 3*/}
              {/* Columna Derecha: Collage de Imágenes */}
              <div className="col-span-1 md:col-span-2 relative">
                <h3 className="text-2xl font-display text-center font-bold text-text-primary mb-2">
                  Desde la idea a la realidad
                </h3>
                <div className="flex flex-col items-center justify-center">
                  {/*Imagen 1*/}
                  <img
                    src={project.processImages.wireframes}
                    alt={project.title}
                    className="w-full h-96 object-bottom-right mb-4 rounded-xl"
                  />
                  {/*Imagen 2*/}
                  <img
                    src={project.processImages.mockups}
                    alt={project.title}
                    className="w-full h-96 object-bottom-right mb-4 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Seccion 3: Demo en vivo*/}

        <section>
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 gap-4 ">
              {/*Titulo*/}
              <h3 className="text-5xl font-display font-bold text-accent text-center mb-4">
                Demo en vivo
              </h3>
              <div>
                {project.demo && (
                  <ProjectDemo
                    desktopVideo={project.demo.desktopVideo}
                    mobileVideo={project.demo.mobileVideo}
                    liveLink={project.demo.liveLink}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
export default ProjectDetails;