import React from 'react';

const ProjectDemo = ({ desktopVideo, mobileVideo, liveLink }) => {
  
  // Si no hay videos, no renderizamos la sección para evitar huecos vacíos
  if (!desktopVideo && !mobileVideo) return null;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fondo decorativo sutil detrás de todo el grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-accent/5 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/*  ENCABEZADO DE LA SECCIÓN  */}
        <div className="mb-10 text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-2">
            Experiencia en accion
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto font-body">
            Diseño adaptativo que mantiene la funcionalidad intacta, desde pantallas 4K hasta dispositivos móviles.
          </p>
        </div>

        {/*  EL GRID BENTO (Laptop + Móvil)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* VISTA DE ESCRITORIO (Ocupa 8 columnas) */}
          <div className="lg:col-span-8 relative group perspective-1000">
            {/* Marco de Laptop Minimalista */}
            <div className="bg-surface border border-white/10 rounded-xl p-2 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
              
              {/* Pantalla */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden relative shadow-inner">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline // Vital para que reproduzca en iOS sin abrir pantalla completa
                  poster={desktopVideo?.replace(/\.(mp4|webm)$/, '.jpg')}
                >
                  {/* Sin 'type' para que el navegador negocie formato con Cloudinary */}
                  <source src={desktopVideo} />
                </video>
                
                {/* Reflejo de pantalla (Overlay sutil) */}
                <div className="absolute inset-0 bg-linear-to-r from-white/5 to-transparent pointer-events-none" />
              </div>

            </div>

            {/* Base de la Laptop (Decorativa) */}
            <div className="absolute -bottom-3 left-4 right-4 h-3 bg-slate-800 rounded-b-xl border-t border-black/50 mx-4" />
            
            {/* Glow trasero */}
            <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
          </div>


          {/*  VISTA MÓVIL (Ocupa 4 columnas) */}
          <div className="lg:col-span-4 flex justify-center relative mt-8 lg:mt-0">
            {/* Marco de Teléfono */}
            <div className="w-260px xs:w-[280px] bg-slate-900 rounded-[3rem] p-3 border-[6px] border-slate-800 shadow-2xl relative z-10 hover:-translate-y-2 transition-transform duration-500">
              
              {/* Notch / Isla Dinámica */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-slate-800 rounded-b-xl z-20 shadow-sm"></div>
              
              {/* Botones laterales (Decoración) */}
              <div className="absolute top-24 -left-2 w-1 h-10 bg-slate-700 rounded-l-md" />
              <div className="absolute top-24 -right-2 w-1 h-16 bg-slate-700 rounded-r-md" />

              {/* Pantalla Móvil */}
              <div className="aspect-9/19 bg-black rounded-[2.2rem] overflow-hidden relative border border-white/5">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster={mobileVideo?.replace(/\.(mp4|webm)$/, '.jpg')}
                >
                  <source src={mobileVideo} />
                </video>
              </div>
            </div>

             {/* Glow trasero exclusivo del móvil */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 blur-2xl -z-10" />
          </div>

        </div>

        {/*  CTA FINAL (Botón)  */}
        {liveLink && (
          <div className="mt-20 text-center">
            <a 
              href={liveLink} 
              target="_blank"
              rel="noreferrer" 
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              {/* Efecto de brillo al pasar el mouse */}
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              
              <span className="relative">Prueba la Demo en Vivo</span>
              
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectDemo;