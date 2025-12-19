import React, { useState } from "react";
import emailjs from '@emailjs/browser'; 
import { Reveal } from "../components/ui/Reveal"; 
import { Linkedin, Github, Instagram, Copy, Check } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    reason: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [successMsg, setSuccessMsg] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg('');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; 

    const templateParams = {
        fullname: formData.fullname,
        email: formData.email,
        reason: formData.reason,
        message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSuccessMsg('¡Mensaje enviado con éxito! Te responderé pronto.');
      setFormData({ fullname: '', email: '', reason: '', message: '' }); 
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('edu.mendoza.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-transparent min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* COLUMNA 1: INFO DE CONTACTO */}
          <div>
            <Reveal>
              <h1 className="text-5xl font-display font-semibold mb-10 text-text-primary">
                Trabajemos juntos
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-xl font-body font-medium mb-4 text-text-secondary">
                Mi correo
              </p>
              
              <div className="
                group mb-10 bg-surface/45 backdrop-blur-md rounded-2xl p-6 
                border border-border-default 
                transition-all duration-300 
                overflow-hidden
                /*  Móvil*/
                shadow-lg shadow-accent/5
                /*  Escritorio */
                md:hover:border-accent/50 md:hover:shadow-2xl md:hover:shadow-accent/10
              ">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-lg font-body font-medium text-text-primary text-center sm:text-left break-all">
                    edu.mendoza.dev@gmail.com
                  </p>
                  <button
                    onClick={copyEmail}
                    className="
                      flex items-center gap-2 px-4 py-2 rounded-xl 
                      bg-accent/10 text-accent border border-accent/30 
                      transition-all duration-300
                      
                      /* Móvil */
                      active:scale-95 active:bg-accent active:text-white
                      
                      /*  Escritorio */
                      md:hover:bg-accent md:hover:text-white md:hover:scale-105
                    "
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="text-sm font-medium">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-sm font-medium">Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="text-text-secondary text-lg font-display font-semibold mb-4">
                Puedes encontrarme en:
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                {[
                  { icon: Linkedin, url: "www.linkedin.com/in/eduardo-mendoza-43aa1427a" },
                  { icon: Github, url: "https://github.com/eduardomendoza87" },
                  { icon: Instagram, url: "https://www.instagram.com/edumendoza.dev?igsh=MWlyMXppc3V1MjVtOA%3D%3D&utm_source=qr" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="
                      p-3 rounded-xl text-text-secondary 
                      border border-transparent 
                      transition-all duration-300 
                      
                      /*  Móvil */
                      active:scale-95 active:text-accent active:bg-accent/10
                      
                      /* Escritorio */
                      md:hover:text-accent md:hover:bg-accent/10 md:hover:border-accent/50 md:hover:scale-110
                    "
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </Reveal>
            
            <Reveal delay={0.6}>
              <span className="inline-flex items-center gap-2 rounded-lg border border-accent-hover px-6 py-2 text-text-secondary hover:bg-accent/20 transition-colors duration-300">
                📍 Villahermosa, Tabasco, Mexico
              </span>
            </Reveal>
          </div>

          {/* COLUMNA 2 - FORMULARIO */}
          <Reveal delay={0.4}>
            <section className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-border-active p-8 h-full shadow-lg shadow-accent/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="fullname" className="block text-text-secondary text-sm font-medium mb-2">Nombre completo</label>
                  <input 
                    type="text" id="fullname" name="fullname" 
                    value={formData.fullname} onChange={handleChange} 
                    className="w-full bg-base/50 border border-border-active rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300" 
                    placeholder="Ingresa tu nombre completo" required 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">Correo electrónico</label>
                  <input 
                    type="email" id="email" name="email" 
                    value={formData.email} onChange={handleChange} 
                    className="w-full bg-base/50 border border-border-active rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300" 
                    placeholder="tu@email.com" required 
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-text-secondary text-sm font-medium mb-2">Motivo del contacto</label>
                  <select 
                    id="reason" name="reason" 
                    value={formData.reason} onChange={handleChange} 
                    className="w-full bg-base/50 border border-border-active rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 appearance-none cursor-pointer" 
                    required
                  >
                    <option value="" className="bg-base">Selecciona un motivo</option>
                    <option value="Nuevo proyecto" className="bg-base">Nuevo proyecto</option>
                    <option value="Consultoría" className="bg-base">Consultoría</option>
                    <option value="Colaboración" className="bg-base">Colaboración</option>
                    <option value="Otro" className="bg-base">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">Mensaje</label>
                  <textarea 
                    id="message" name="message" rows="5" 
                    value={formData.message} onChange={handleChange} 
                    className="w-full bg-base/50 border border-border-active rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none" 
                    placeholder="Cuéntame sobre tu proyecto..." required
                  ></textarea>
                </div>

                {successMsg && (
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm font-medium text-center animate-pulse">
                    {successMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full bg-accent text-white font-semibold py-3 px-6 rounded-xl 
                    transition-all duration-300 shadow-lg shadow-accent/50 
                    flex items-center justify-center gap-2
                    disabled:opacity-50 disabled:cursor-not-allowed
                    
                    /* Móvil */
                    active:scale-95 active:bg-accent-hover
                    
                    /* Escritorio */
                    md:hover:bg-accent-hover md:hover:scale-105 md:hover:shadow-xl md:hover:shadow-accent/60
                  "
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>

              </form>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;