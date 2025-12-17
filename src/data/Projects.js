//imagenes de proyectos
//Axis
import AxisMain from "../assets/proyecto-axis/axis-main.png"
import AxisHero from "../assets/proyecto-axis/axis-hero.png"
import AxisWireframes from "../assets/proyecto-axis/wireframe-axis.png"
import AxisMockups from "../assets/proyecto-axis/mockup-axis.png"

//Plataforma educativa
import PlataformaEducativaMain from "../assets/proyecto-plataforma-educativa/plataforma-educativa-main.jpg"
import EducationHero from "../assets/proyecto-plataforma-educativa/educacion-hero.png"
import EducationMockups1 from "../assets/proyecto-plataforma-educativa/mockup-educacion-1.png"
import EducationMockups2 from "../assets/proyecto-plataforma-educativa/mockup-educacion-2.png"


//Portafolio  
import PortafolioMain from "../assets/proyecto-portafolio/portafolio-main.png"
import PortafolioHero from "../assets/proyecto-portafolio/portafolio-hero.png"
import PortafolioWireframes from "../assets/proyecto-portafolio/portafolio-wireframe.png"
import PortafolioMockups from "../assets/proyecto-portafolio/portafolio-mockup.png"

//Nexus
import NexusMain from "../assets/proyecto-nexus/nexus-main.png"
import NexusWireframes from "../assets/proyecto-nexus/wireframe-nexus.png"
import NexusMockups from "../assets/proyecto-nexus/mockup-nexus.png"
import NexusHero from "../assets/proyecto-nexus/nexus-hero.png"


export const projects = [
  {
    id: "nexus",
    title: "Nexus",
    subtitle: "Finanzas personales sin fricción y con propósito",
    description:
      "Control financiero diseñado para la velocidad. Permite registrar gastos en menos de 7 segundos y correlacionar emociones con hábitos de consumo.",
    stack: ["React", "Tailwind CSS", "Vite", "Figma", "Html"],
    image: NexusMain,
    links: {
      caseStudy: "/proyectos/nexus",
      code: "https://github.com/eduardomendoza87/Finance-flow",
      live: null,
    },
    // DATOS EXCLUSIVOS PARA EL CASO DE ESTUDIO 
    challenge:
      "Las apps de finanzas tradicionales son lentas y abrumadoras. El usuario promedio abandona el registro de gastos porque toma demasiados clics. El reto fue crear una interfaz que permitiera capturar transacciones en tiempo récord (menos de 7s) y ofrecer visualización de datos sin complejidad innecesaria.",
    stats: [
      { label: "Tiempo de carga", value: "< 1s" },
      { label: "Registro", value: "-7 seg" },
      { label: "Retención", value: "+40%" },
    ],
    processImages: {
      hero: NexusHero,
      wireframes: NexusWireframes, 
      mockups: NexusMockups, 
    },
    demo: {
      desktopVideo:"",
      mobileVideo:"",
      liveLink: "",
    },
    year: 2025,
    rol: "Full stack",
  },
  {
    id: "axis",
    title: "AXIS Architecture Studio",
    subtitle: "Minimalismo digital para portafolios de alto impacto",
    description:
      "Plataforma de portafolio para arquitectos que equilibra una estética minimalista moderna con un rendimiento técnico alto.",
    stack: ["React", "Tailwind CSS", "Vite", "Figma", "Html"],
    image: AxisMain,
    links: {
      caseStudy: "/proyectos/axis",
      code: "https://github.com/eduardomendoza87/Axis-Architecture-Studio-Web",
      live: "https://axis-arquitecture-studio.vercel.app/",
    },
    // --- DATOS EXCLUSIVOS PARA EL CASO DE ESTUDIO ---
    challenge:
      "Los arquitectos necesitan mostrar imágenes de altísima resolución sin sacrificar la velocidad del sitio. El desafío técnico fue implementar técnicas de 'Lazy Loading' y optimización de assets para mantener una puntuación de Lighthouse superior a 90 mientras se mantiene una estética visualmente rica y elegante.",
    stats: [
      { label: "Performance", value: "98/100" },
      { label: "SEO", value: "100%" },
      { label: "Diseño", value: "Minimal" },
    ],
    processImages: {
      hero: AxisHero,
      wireframes: AxisWireframes,
      mockups: AxisMockups,
    },
    demo: {
      desktopVideo:"https://res.cloudinary.com/dtqr8veoj/video/upload/v1765932111/Video_de_WhatsApp_2025-12-16_a_las_18.41.18_c28bb254_f6cqhx.mp4",
      mobileVideo:"https://res.cloudinary.com/dtqr8veoj/video/upload/v1765931747/Video_de_WhatsApp_2025-12-16_a_las_18.35.13_79d9cfa4_vifvsr.mp4",
      liveLink: "https://axis-arquitecture-studio.vercel.app/",
    },
    year: 2025,
    rol: "Full stack",
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio v1",
    subtitle: "Identidad digital construida con metodología ágil",
    description:
      "Una identidad digital construida bajo metodología Scrum, alejándose de plantillas genéricas para crear una experiencia de navegación estilo App.",
    stack: ["React", "Tailwind CSS", "Vite", "Figma", "Html"],
    image: PortafolioMain,
    links: {
      caseStudy: "/proyectos/portfolio-v1",
      code: "https://github.com/tu-usuario/portfolio-v1",
      live: null,
    },
    // --- DATOS EXCLUSIVOS PARA EL CASO DE ESTUDIO ---
    challenge:
      "La mayoría de los portafolios se sienten como documentos estáticos. Mi objetivo fue tratar mi propia marca como un producto de software real: aplicando sprints de Scrum, diseño iterativo en Figma y un desarrollo modular en React para crear una experiencia inmersiva tipo 'App-like' en la web.",
    stats: [
      { label: "Sprints", value: "4" },
      { label: "Componentes", value: "25+" },
      { label: "Accesibilidad", value: "AA" },
    ],
    processImages: {
      hero:PortafolioHero,
      wireframes: PortafolioWireframes,
      mockups: PortafolioMockups,
    },
    demo: {
      desktopVideo:"",
      mobileVideo:"",
      liveLink: "",
    },
    year: 2025,
    rol: "Full stack",
  },
  {
    id: "edu-platform",
    title: "Educational Platform",
    subtitle: "Centralización de recursos académicos complejos",
    description:
      "Transformación de material teórico estático (PDFs) en una experiencia web dinámica y centralizada para estudiantes de ingeniería.",
    stack: ["React", "Tailwind CSS", "Vite", "Figma", "Html"],
    image: PlataformaEducativaMain,
    links: {
      caseStudy: "/proyectos/edu-platform",
      code: "https://github.com/eduardomendoza87/Proyecto_Unidad_3",
      live: "https://proyecto-unidad-3.vercel.app/",
    },
    // --- DATOS EXCLUSIVOS PARA EL CASO DE ESTUDIO ---
    challenge:
      "Los estudiantes de la unidad 3 enfrentaban fragmentación de información entre múltiples PDFs y fuentes externas. El reto fue consolidar todo el temario teórico en una interfaz web navegable, responsiva y fácil de consumir, mejorando la experiencia de estudio antes de los exámenes.",
    stats: [
      { label: "Recursos", value: "100%" },
      { label: "Interactividad", value: "Alta" },
      { label: "Usuarios", value: "Estudiantes" },
    ],
    processImages: {
      hero: EducationHero,
      wireframes: EducationMockups1,
      mockups: EducationMockups2,
    },
    demo: {
      desktopVideo:"https://res.cloudinary.com/dtqr8veoj/video/upload/v1765992457/education-demo-desktop_undomg.mp4",
      mobileVideo:"https://res.cloudinary.com/dtqr8veoj/video/upload/v1765992595/education-demo-movil_czl9mi.mp4",
      liveLink: "https://proyecto-unidad-3.vercel.app/",
    },
    year: 2025,
    rol: "Full stack",
  },
];