import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ServicesAccordion = () => {
  // Estado para controlar qué acordeón está abierto
  // null = ninguno abierto, 0 = primero abierto, 1 = segundo, etc.
  const [openIndex, setOpenIndex] = useState(null);

  //  Función para abrir/cerrar
  const toggleAccordion = (index) => {
    // Si el que haces clic ya está abierto, lo cierra (null)
    // Si no, lo abre (guarda su índice)
    setOpenIndex(openIndex === index ? null : index);
  };

  //  Datos de los servicios
  const services = [
    {
      title: "UX/UI Design",
      description: "Diseño de interfaces intuitivas y experiencias memorables. Creo productos digitales que los usuarios aman usar, combinando investigación, prototipado y testing.",
      features: [
        "Research y análisis de usuarios",
        "Wireframes y prototipos interactivos",
        "Design systems y componentes reutilizables",
        "Testing de usabilidad"
      ]
    },
    {
      title: "Diseño de aplicaciones",
      description: "Desarrollo de aplicaciones web modernas y responsivas. Transformo mockups en código funcional con animaciones fluidas y performance optimizada.",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Arquitectura escalable y mantenible",
        "Integración con APIs y servicios"
      ]
    },
    {
      title: "Frontend Development",
      description: "Construcción de interfaces con las últimas tecnologías. Código limpio, semántico y optimizado para SEO y rendimiento.",
      features: [
        "React, Next.js, TypeScript",
        "Tailwind CSS y Styled Components",
        "Optimización de performance",
        "Responsive design mobile-first"
      ]
    },
    {
      title: "Gestión de proyectos",
      description: "Coordinación end-to-end de proyectos digitales. Metodologías ágiles, comunicación clara y entrega de valor constante.",
      features: [
        "Metodología Scrum/Kanban",
        "Planificación de sprints",
        "Gestión de stakeholders",
        "Documentación técnica"
      ]
    }
  ];

  return (
    <div className="space-y-4">
      {/* Título de la sección */}
      <h2 className="text-2xl font-bold text-text-primary mb-8">
        Servicios
      </h2>

      {/* Mapear los servicios */}
      {services.map((service, index) => (
        <div 
          key={index}
          className="bg-surface/50 backdrop-blur-sm border border-border-active rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/50"
        >
          {/* Header del acordeón (siempre visible) */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/5 transition-colors duration-200"
          >
            {/* Título */}
            <span className="text-lg font-semibold text-text-primary">
              {service.title}
            </span>

            {/* Ícono de flecha que rota */}
            <ChevronDown 
              className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Contenido (se muestra/oculta) */}
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 pt-0 space-y-4">
              {/* Descripción */}
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>

              {/* Lista de características */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="text-accent mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesAccordion;