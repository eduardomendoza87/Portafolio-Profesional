import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';

// Importación de Páginas
import Home from '../pages/Home';
import About from '../pages/About';
import StackTech from '../pages/StackTech';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/CasoStudy';
const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout Principal que envuelve todo */}
      <Route path="/" element={<MainLayout />}>
        
        {/* Ruta: Inicio (Landing Page completa) */}
        <Route index element={<Home />} />
        {/*Ruta: Sobre mí */}
        <Route path="sobre-mi" element={<About />} />
        {/*Ruta: Stack */}
        <Route path="stack" element={<StackTech />} />
        {/*Ruta:Proyectos*/}
        <Route path="proyectos" element={<Projects/>}/>
        {/*Ruta: Detalle de proyecto*/}
        <Route path="proyectos/:id" element={<ProjectDetails />} />
  
        {/* Ruta 404: Redirigir a inicio si no existe */}
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;