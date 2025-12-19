import React from "react";
import { Reveal } from "../components/ui/Reveal";
import MancuernaImage from "../assets/mancuerna.png"
import MandoImage from "../assets/mando.png"
import PerfilAnimado from "../assets/perfil-animado.jpg"


const About = () => {
    return (
      <div className="bg-transparent min-h-screen p-10">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/*Columna 1*/}
            <div>
              <Reveal>
                <h1 className="text-4xl font-display font-bold mb-6 text-text-primary">
                  Ingenieria, Diseño y Disciplina
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-text-secondary font-body text-md mb-2">
                  Tengo 21 años y soy estudiante de Ingeniería en Sistemas. A
                  diferencia del perfil tradicional, no creo entre Backend o
                  Frontend, domino ambos.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-text-secondary font-body text-md mb-2">
                  Creo en construir herramientas que no sólo funcionen perfecto
                  bajo el capo (Backend/Lógica), sino que se sientan increíbles al
                  usarlas (UI/UX). Me enfoco en la intersección entre el código
                  limpio y el diseño bien ejecutado.
                </p>
              </Reveal>

              <Reveal delay={0.6}>
                <p className="text-text-secondary font-body text-md mb-2">
                  Trabajo con metodologías ágiles como Scrum y Jira, asegurando
                  entregas organizadas y profesionales desde el primer día.
                </p>
              </Reveal>

              {/* Stats/Estadísticas */}
              <Reveal delay={0.8}>
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-text-secondary/20">
                  {/* Stat 1 */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">21</h3>
                    <p className="text-text-secondary text-sm lg:text-text-secondary">Años</p>
                  </div>
                  {/* Stat 2 */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">1+</h3>
                    <p className="text-text-secondary text-sm lg:text-text-secondary">Experiencia</p>
                  </div>
                  {/* Stat 3 */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">4+</h3>
                    <p className="text-text-secondary text-sm lg:text-text-secondary">Proyectos</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/*Columna 2 - Imagen Perfil */}
            <div>
              <Reveal delay={0.4}>
                <img
                  src={PerfilAnimado}
                  alt="Perfil Animado"
                  className="relative w-full h-auto aspect-3/4 object-cover object-[center_15%] rounded-3xl shadow-2xl border border-accent/30"
                />
              </Reveal>
            </div>
          </div>
        </div>

        {/* Sección de intereses personales */}
        <section className="px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
                  Más allá del código
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Lo que me inspira y me mantiene enfocado
                </p>
              </Reveal>
            </div>

            {/* Grid de cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1 - Mentalidad & Fuerza */}
              <Reveal delay={0.2}>
                <div className="
                  group h-full
                  bg-surface/45 backdrop-blur-sm rounded-2xl p-8 
                  border border-border-active 
                  transition-all duration-300
                  
                  /*  MÓVIL*/
                  shadow-lg shadow-accent/5

                  /*  ESCRITORIO  */
                  md:hover:border-accent 
                  md:hover:bg-surface/60 
                  md:hover:shadow-2xl 
                  md:hover:shadow-accent/20
                  md:hover:-translate-y-1
                ">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src={MancuernaImage}
                        alt="Mentalidad y Fuerza"
                        className="relative w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-text-primary text-center group-hover:text-accent transition-colors">
                    Mentalidad & Fuerza
                  </h3>
                  <p className="text-text-secondary font-body text-center leading-relaxed">
                    El entrenamiento de fuerza es mi base. Me ha enseñado que la
                    constancia supera al talento y que los grandes resultados
                    requieren repetición, paciencia y esfuerzo diario.
                  </p>
                </div>
              </Reveal>

              {/* Card 2 - Gaming & UI */}
              <Reveal delay={0.4}>
                <div className="
                  group h-full
                  bg-surface/45 backdrop-blur-sm rounded-2xl p-8 
                  border border-border-active 
                  transition-all duration-300
                  
                  /* MÓVIL: Sombra suave por defecto */
                  shadow-lg shadow-accent/5

                  /*  ESCRITORIO: */
                  md:hover:border-accent 
                  md:hover:bg-surface/60 
                  md:hover:shadow-2xl 
                  md:hover:shadow-accent/20
                  md:hover:-translate-y-1
                ">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src={MandoImage}
                        alt="Gaming y UI Design"
                        className="relative w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-text-primary text-center group-hover:text-accent transition-colors">
                    Gaming & UI
                  </h3>
                  <p className="text-text-secondary font-body text-center leading-relaxed">
                    Mi pasión visual viene de los videojuegos. Analizar sus
                    interfaces (HUDs), menús e inspiraciones me llevó a ese nivel
                    de interactividad y 'game-feel' al desarrollo web.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Seccion de cierre */}
        <section className="px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <Reveal delay={0.2}>
                <div className="grid grid-cols-1 gap-8">
                <div className="
                  group bg-surface/45 backdrop-blur-sm rounded-2xl p-8 
                  border border-border-active 
                  transition-all duration-300 
                  shadow-lg shadow-accent/5
                  md:hover:border-accent 
                  md:hover:bg-surface/60 
                  md:hover:shadow-xl 
                  md:hover:shadow-accent/10
                ">
                    <h3 className="text-2xl font-display font-bold mb-4 text-text-muted text-center group-hover:text-accent transition-colors">
                    Ingeniería en Sistemas Computacionales (Esp. Desarrollo
                    Multiplataforma)
                    </h3>
                    <p className="flex items-center justify-center gap-2 text-success font-mono text-lg font-semibold mb-4">
                    🟢 Estado: Activo
                    </p>
                </div>
                </div>
            </Reveal>
          </div>
        </section>
      </div>
    );
}
export default About;