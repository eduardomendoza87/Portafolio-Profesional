import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';

// Importación de Páginas (Asegúrate de crearlas aunque estén vacías por ahora)
import Home from '../pages/Home';
// import Projects from '../pages/Projects'; 
// import Contact from '../pages/Contact';
// import ProjectDetail from '../pages/ProjectDetail';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout Principal que envuelve todo */}
      <Route path="/" element={<MainLayout />}>
        
        {/* Ruta: Inicio (Landing Page completa) */}
        <Route index element={<Home />} />
        
        {/* Ruta: Detalle de Proyecto (Dinámica) */}
        {/* :id servirá para cargar 'nexus-finance' o 'axis-arch' */}
        {/* <Route path="project/:id" element={<ProjectDetail />} /> */}

        {/* Ruta: Contacto (Si decides hacerla página aparte) */}
        {/* <Route path="contact" element={<Contact />} /> */}

        {/* Ruta 404: Redirigir a inicio si no existe */}
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;