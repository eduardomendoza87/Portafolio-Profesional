import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, Download, ArrowRight } from "lucide-react";


//Foto de hero
import HeroImage from "../assets/foto-perfil.png";

const Home = () => {
  return (
    <div className="bg-transparent min-h-screen p-10">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
          {/*Column 1*/}
          <div>
            <p className="text-text-secondary font-normal text-lg mb-4">
              Hola mundo
            </p>
            <h2 className="text-text-primary font-display font-semibold text-2xl mb-4 ">
              Soy Eduardo Mendoza
            </h2>
            <h1 className="text-4xl font-display font-bold mb-6 text-accent">
              Frontend Engineer & Product Designer
            </h1>
            {/*Parrafo hero*/}
            <p className="text-text-secondary font-body text-md mb-8">
              Estudiante de Ingeniería de Sistemas especializado en el
              ecosistema React. Cierro la brecha entre el diseño y el código
              construyendo aplicaciones web escalables, rápidas y pixel-perfect.
            </p>
            <div className="flex space-x-2 mb-6">
              <span className="rounded-lg border border-success px-6 py-2 text-success hover:bg-success/20">
                Disponible
              </span>
              <span className="rounded-lg border border-accent-hover px-6 py-2 text-text-secondary hover:bg-accent/20">
                Villahermosa,Tabasco, Mexico
              </span>
            </div>
            {/* Botones de acción */}
            <div className="flex items-center gap-4 mb-4">
              {/* Botón primario */}
              <button
                className="
    group
    bg-accent text-text-primary font-semibold
    px-8 py-3 rounded-2xl
    hover:bg-accent-hover hover:scale-105
    active:scale-95
    transition-all duration-300
    shadow-lg shadow-accent/50 hover:shadow-md hover:shadow-accent/60
    flex items-center gap-2
  "
              >
                Descargar CV
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Botón secundario */}
              <Link
                to="/proyectos"
                className="
      group
      inline-flex items-center justify-center gap-2
      rounded-2xl font-semibold
      border-2 border-accent-hover 
      px-8 py-3
      text-text-secondary 
      hover:bg-accent/20 hover:border-accent hover:text-accent
      hover:scale-105
      active:scale-95
      transition-all duration-300
    "
              >
                Ver proyectos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            {/* Redes sociales  */}
            <div className="flex items-center gap-6 mb-6">
              <p className="text-text-secondary text-lg font-mono font-semibold mr-2">
                Sígueme:
              </p>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/eduardo-mendoza-701450289/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  p-3 rounded-xl
                  text-text-secondary 
                  hover:text-accent hover:bg-accent/10
                  border border-transparent hover:border-accent/50
                  transition-all duration-300
                  hover:scale-110
                "
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/EduardoMendoza289"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  p-3 rounded-xl
                  text-text-secondary 
                  hover:text-accent hover:bg-accent/10
                  border border-transparent hover:border-accent/50
                  transition-all duration-300
                  hover:scale-110
                "
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/eduardo_mendoza289/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  p-3 rounded-xl
                  text-text-secondary 
                  hover:text-accent hover:bg-accent/10
                  border border-transparent hover:border-accent/50
                  transition-all duration-300
                  hover:scale-110 
                "
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            {/*Badges de habilidades*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20">
                Diseño UX/UI
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20">
                React
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20">
                Wireframing
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20">
                Mockups
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20">
                Prototipos
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20">
                Figma
              </span>
            </div>
          </div>
          {/* Column 2 - Imagen */}
          <div className="flex justify-center items-start lg:justify-end lg:items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Efecto glow */}
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl"></div>

              {/* Imagen */}
              <img
                src={HeroImage}
                alt="Eduardo Mendoza - Frontend Developer"
                className="
        relative
        w-full 
        h-auto
        aspect-3/4
        object-cover 
        object-[center_15%]
        rounded-3xl
        shadow-2xl
        border border-accent/30
      "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;