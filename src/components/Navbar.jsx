import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const tabs = [
    { id: 'inicio', label: 'Inicio', path: '/' },
    { id: 'sobre mi', label: 'Sobre mí', path: '/sobre-mi' },
    { id: 'stack', label: 'Stack', path: '/stack' },
    { id: 'proyectos', label: 'Proyectos', path: '/proyectos' },
    { id: 'contacto', label: 'Contacto', path: '/contacto' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.includes(path);
  };

  return (
    <nav className="w-full bg-transparent sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* LOGO  */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-text-muted">
              EduMendoza <span className="font-display text-accent">.dev</span>
            </h1>
          </Link>

          {/* TABS NAVIGATION */}
          <div className="flex w-full md:w-auto justify-center gap-1 bg-surface/50 p-1 rounded-2xl border border-border-default shadow-sm ">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`
                  flex-1 md:flex-none text-center
                  px-3 py-2 md:px-6 md:py-2 
                  text-xs md:text-sm font-medium 
                  rounded-xl transition-all duration-300
                  whitespace-nowrap
                  ${
                    isActive(tab.path)
                      ? "bg-accent text-white shadow-sm"
                      : "text-text-secondary hover:text-accent hover:bg-accent/10"
                  }
                `}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block w-20"></div>
        </div>
      </div>
    </nav>
  );
}