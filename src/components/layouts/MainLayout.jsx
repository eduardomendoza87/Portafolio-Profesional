import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname === '/') return 'inicio';
    if (location.pathname.includes('sobre-mi')) return 'sobre mi';
    if (location.pathname.includes('stack')) return 'stack';
    if (location.pathname.includes('proyectos')) return 'proyectos';
    if (location.pathname.includes('contacto')) return 'contacto';
    return 'inicio';
  };

  const handleNavigation = (tab) => {
    const paths = {
      inicio: '/',
      'sobre mi': '/sobre-mi',
      stack: '/stack',
      proyectos: '/proyectos',
      contacto: '/contacto'
    };
    navigate(paths[tab]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <Navbar activeTab={getActiveTab()} onNavigate={handleNavigation} />
      </header>
      <main className="flex-grow">
        <Outlet /> 
      </main>
      {/*Aqui podria ir un footer si es necesario */}
    </div>
  )
}