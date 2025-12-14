const Home = () => {
  return (
    <div className="bg-base min-h-screen p-10">
  {/* Título usando la fuente Display y color primario */}
  <h1 className="text-5xl font-display font-bold text-text-primary">
    Hola Mundo
  </h1>

  {/* Párrafo con fuente Body y color secundario */}
  <p className="font-body text-text-secondary mt-4">
    Este es un texto de prueba con Inter.
  </p>

  {/* Botón con color acento */}
  <button className="mt-6 px-6 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors cursor-pointer">
    Contáctame
  </button>
  
  {/* Tarjeta con borde y superficie */}
  <div className="mt-10 p-6 bg-surface border border-border-default rounded-xl">
    <span className="font-mono text-accent text-sm">console.log('Ready')</span>
  </div>

  <div className="grid grid-cols-2 gap-4 mt-10 mb-6">
    <div className="p-4 bg-accent/50 border border-border-default rounded-lg">
      <h2 className="font-display font-bold text-lg text-text-primary mb-2">Proyecto 1</h2>
      <p className="font-body text-text-secondary">Descripción del proyecto 1.</p>
    </div>
    <div className="p-4 bg-surface border border-border-default rounded-lg">
      <h2 className="font-display font-bold text-lg text-text-primary mb-2">Proyecto 2</h2>
      <p className="font-body text-text-secondary">Descripción del proyecto 2.</p>
    </div>
    <div className="p-4 bg-surface border border-border-default rounded-lg">
      <h2 className="font-display font-bold text-lg text-text-primary mb-2">Proyecto 2</h2>
      <p className="font-body text-text-secondary">Descripción del proyecto 2.</p>
    </div>
  
</div>
</div>


  );
};
export default Home;