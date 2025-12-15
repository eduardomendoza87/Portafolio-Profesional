import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

export default function MainLayout() {

  return (
    <div className="relative min-h-screen">
      {/* FONDO GRADIENTE */}
      <div className="fixed inset-0 -z-10 bg-linear-to-br from-base via-accent/40 to-surface" />
      
      {/* CONTENIDO */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="p-4">
          <Navbar />
        </header>
        <main className="flex-grow">
          <Outlet /> 
        </main>
      </div>
    </div>
  )
}