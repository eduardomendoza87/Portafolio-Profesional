import React from "react";
import MancuernaImage from "../assets/mancuerna.png"
import MandoImage from "../assets/mando.png"


const About = () => {
    return (
      <div className="bg-transparent min-h-screen p-10">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            {/*Columna 1*/}
            <div>
              <h1 className="text-4xl font-display font-bold mb-6 text-text-primary">
                Ingenieria, Diseño y Disciplina
              </h1>
              <p className="text-text-secondary font-body text-md mb-2">
                Tengo 21 años y soy estudiante de Ingeniería en Sistemas. A
                diferencia del perfil tradicional, no creo entre Backend o
                Frontend, domino ambos.
              </p>
              <p className="text-text-secondary font-body text-md mb-2">
                Creo en construir herramientas que no sólo funcionen perfecto
                bajo el capo (Backend/Lógica), sino que se sientan increíbles al
                usarlas (UI/UX). Me enfoco en la intersección entre el código
                limpio y el diseño bien ejecutado.
              </p>
              <p className="text-text-secondary font-body text-md mb-2">
                Trabajo con metodologías ágiles como Scrum y Jira, asegurando
                entregas organizadas y profesionales desde el primer día.
              </p>
              {/* Stats/Estadísticas - Dentro de la Columna 1 */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-text-secondary/20">
                {/* Stat 1 - Años */}
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    21
                  </h3>
                  <p className="text-text-secondary text-sm lg:text-text-secondary">
                    Años
                  </p>
                </div>

                {/* Stat 2 - Experiencia */}
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    1+
                  </h3>
                  <p className="text-text-secondary text-sm lg:text-text-secondary">
                    De experiencia
                  </p>
                </div>

                {/* Stat 3 - Proyectos */}
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    4+
                  </h3>
                  <p className="text-text-secondary text-sm lg:text-text-secondary">
                    Proyectos
                  </p>
                </div>
              </div>
            </div>
            {/*Columna 2*/}
            <div>
              <img
                src="/about-illustration.svg"
                alt="About Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* Sección de intereses personales */}
        <section className="px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Título de sección  */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
                Más allá del código
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Lo que me inspira y me mantiene enfocado
              </p>
            </div>

            {/* Grid de cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 - Mentalidad & Fuerza */}
              <div className="group bg-surface/45 backdrop-blur-sm rounded-2xl p-8 border border-border-active hover:border-accent hover:bg-surface/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                {/* Imagen centrada */}
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

                {/* Título */}
                <h3 className="text-2xl font-display font-bold mb-4 text-text-primary text-center group-hover:text-accent transition-colors">
                  Mentalidad & Fuerza
                </h3>

                {/* Párrafo */}
                <p className="text-text-secondary font-body text-center leading-relaxed">
                  El entrenamiento de fuerza es mi base. Me ha enseñado que la
                  constancia supera al talento y que los grandes resultados
                  requieren repetición, paciencia y esfuerzo diario.
                </p>
              </div>

              {/* Card 2 - Gaming & UI */}
              <div className="group bg-surface/45 backdrop-blur-sm rounded-2xl p-8 border border-border-active hover:border-accent hover:bg-surface/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                {/* Imagen centrada */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <img
                      src={MandoImage}
                      alt="Gaming y UI Design"
                      className="relative w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-display font-bold mb-4 text-text-primary text-center group-hover:text-accent transition-colors">
                  Gaming & UI
                </h3>

                {/* Párrafo */}
                <p className="text-text-secondary font-body text-center leading-relaxed">
                  Mi pasión visual viene de los videojuegos. Analizar sus
                  interfaces (HUDs), menús e inspiraciones me llevó a ese nivel
                  de interactividad y 'game-feel' al desarrollo web.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Seccion de cierre */}
        <section className="px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {/* Título de sección  */}
              <div className="group bg-surface/45 backdrop-blur-sm rounded-2xl p-8 border border-border-active hover:border-accent hover:bg-surface/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <h3 className="text-2xl font-display font-bold mb-4 text-text-muted text-center group-hover:text-accent transition-colors">
                  Ingeniería en Sistemas Computacionales (Esp. Desarrollo
                  Multiplataforma)
                </h3>
                <p className="flex items-center justify-center gap-2 text-success font-mono text-lg font-semibold mb-4">
                  <span className="w-3 h-3 bg-success rounded-full"></span>
                  Estado: Activo
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
export default About;