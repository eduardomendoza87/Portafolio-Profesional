import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/ui/Reveal";
import { Linkedin, Github, Instagram, Download, ArrowRight } from "lucide-react";

//Foto de hero
import HeroImage from "../assets/foto-perfil.png";

const Home = () => {
  return (
    <div className="bg-transparent min-h-screen p-10">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/*Column 1*/}
          <div>
            <Reveal>
              <p className="text-text-secondary font-normal text-lg mb-4">
                Hola mundo
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-text-primary font-display font-semibold text-2xl mb-4 ">
                Soy Eduardo Mendoza
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <h1 className="text-4xl font-display font-bold mb-6 text-accent">
                Frontend Engineer & Product Designer
              </h1>
            </Reveal>

            {/*Parrafo hero*/}
            <Reveal delay={0.6}>
              <p className="text-text-secondary font-body text-md mb-8">
                No elijo entre funcionalidad y estética; construyo la
                intersección de ambas. A mis 21 años, combino la lógica
                estructurada de la Ingeniería en Sistemas con la sensibilidad
                visual del Diseño UX/UI.
                <br />
                Mi enfoque no es solo escribir líneas de código, sino crear
                productos digitales que la gente disfrute usar. Desde la
                arquitectura de base de datos hasta el último píxel en pantalla,
                me obsesiona la calidad, el rendimiento y la experiencia de
                usuario. <br />
                La disciplina del gimnasio la llevo al teclado: constancia,
                mejora continua y entregas precisas bajo metodologías ágiles.
              </p>
            </Reveal>

            {/* Botones de Disponibilidad y Ubicación */}
            <div className="flex space-x-2 mb-6">
              <Reveal delay={0.8}>
                <div className="flex gap-2">
                  <span className="rounded-lg border border-success px-6 py-2 text-success hover:bg-success/20">
                    🟢 Disponible
                  </span>
                  <span className="rounded-lg border border-accent-hover px-6 py-2 text-text-secondary hover:bg-accent/20">
                    📍 Villahermosa,Tabasco, Mexico
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Botones de acción */}
            <Reveal delay={1.0}>
              <div className="flex items-center gap-4 mb-4">
                {/* Botón primario */}
                <button
                  className="
        group
        w-full sm:w-auto  /* Ancho completo en cel, auto en PC */
        bg-accent text-text-primary font-semibold
        px-8 py-3 rounded-full
        transition-all duration-300
        
        /* MÓVIL */
        active:scale-95 
        active:bg-accent-hover
        
        /* ESCRITORIO */
        md:hover:bg-accent-hover 
        md:hover:scale-105
        
        /* SOMBRAS */
        shadow-lg shadow-accent/20
        md:hover:shadow-accent/50
        
        flex items-center justify-center gap-2
      "
                >
                  Descargar CV
                  <Download className="w-5 h-5 group-active:translate-y-1 md:group-hover:translate-y-0.5 transition-transform" />
                </button>

                {/* Botón secundario */}
                <Link
                  to="/proyectos"
                  className="
        group
        w-full sm:w-auto
        inline-flex items-center justify-center gap-2
        rounded-full font-semibold
        border-2 border-accent-hover 
        px-8 py-3
        text-text-secondary 
        transition-all duration-300

        /* MÓVIL */
        active:scale-95
        active:bg-accent/10
        active:text-white

        /* ESCRITORIO */
        md:hover:bg-accent/20 
        md:hover:border-accent 
        md:hover:text-accent
        md:hover:scale-105
      "
                >
                  Ver proyectos
                  <ArrowRight className="w-5 h-5 group-active:translate-x-1 md:group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </Reveal>

            {/* Redes sociales */}
            <Reveal delay={1.2}>
              <div className="flex items-center gap-6 mb-6">
                <p className="text-text-secondary text-lg font-mono font-semibold mr-2">
                  Sígueme:
                </p>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/eduardo-mendoza-701450289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl text-text-secondary hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/50 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/EduardoMendoza289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl text-text-secondary hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/50 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/eduardo_mendoza289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl text-text-secondary hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/50 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </Reveal>

            {/* Badges de habilidades - (CORREGIDO: Delay 1.4 para secuencia final) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20 text-center">
                Diseño UX/UI
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20 text-center">
                React
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20 text-center">
                Wireframing
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20 text-center">
                Mockups
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20 text-center">
                Prototipos
              </span>
              <span className="rounded-lg border border-border-active px-6 py-2 text-text-secondary hover:bg-accent/20 text-center">
                Figma
              </span>
            </div>
          </div>

          {/* Column 2 - Imagen */}
          <div className="flex justify-center items-start lg:justify-end lg:items-center">
            {/* Imagen sale rápido (0.4) para acompañar al título */}
            <Reveal delay={0.4}>
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
                  "
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;