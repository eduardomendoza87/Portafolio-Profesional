import React, { useState } from "react";
import emailjs from '@emailjs/browser'; 
import { Linkedin, Github, Instagram, AlertCircle, Copy, Check } from "lucide-react";

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
  const [successMsg, setSuccessMsg] = useState(''); // Estado para mensaje de éxito visual

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

    //CONFIGURACIÓN DE EMAILJS 
   const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; 

    // Objeto que coincide con las variables {{variables}} de template en EmailJS
    const templateParams = {
        fullname: formData.fullname,
        email: formData.email,
        reason: formData.reason,
        message: formData.message,
    };

    try {
      // Enviamos el correo
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      // Éxito
      setSuccessMsg('¡Mensaje enviado con éxito! Te responderé pronto.');
      setFormData({ fullname: '', email: '', reason: '', message: '' }); // Limpiar form
      
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para copiar email
  const copyEmail = () => {
    navigator.clipboard.writeText('edumendoza.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-transparent min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* COLUMNA 1: INFO DE CONTACTO */}
          <div>
            <h1 className="text-5xl font-display font-semibold mb-10 text-text-primary">
              Trabajemos juntos
            </h1>
            
            <p className="text-xl font-body font-medium mb-4 text-text-secondary">
              Mi correo
            </p>
            
            <div className="group mb-10 bg-surface/45 backdrop-blur-md rounded-2xl p-6 border border-border-default hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden">
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-body font-medium text-text-primary">
                  edumendoza.dev@gmail.com
                </p>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
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
            
            <p className="text-text-secondary text-lg font-display font-semibold mb-4">
              Puedes encontrarme en:
            </p>
            
            <div className="flex items-center gap-4 mb-6">
               {/* Redes sociales (Mantener tu código igual aquí) */}
               <a href="https://www.linkedin.com/in/eduardo-mendoza-701450289/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl text-text-secondary hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/50 transition-all duration-300 hover:scale-110">
                 <Linkedin className="w-6 h-6" />
               </a>
               <a href="https://github.com/EduardoMendoza289" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl text-text-secondary hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/50 transition-all duration-300 hover:scale-110">
                 <Github className="w-6 h-6" />
               </a>
               <a href="https://www.instagram.com/eduardo_mendoza289/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl text-text-secondary hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/50 transition-all duration-300 hover:scale-110">
                 <Instagram className="w-6 h-6" />
               </a>
            </div>
            
            <span className="inline-flex items-center gap-2 rounded-lg border border-accent-hover px-6 py-2 text-text-secondary hover:bg-accent/20 transition-colors duration-300">
              📍 Villahermosa, Tabasco, Mexico
            </span>
          </div>

          {/* COLUMNA 2 - FORMULARIO */}
          <section className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-border-active p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* INPUTS DEL FORMULARIO  */}
              
              <div>
                <label htmlFor="fullname" className="block text-text-secondary text-sm font-medium mb-2">Nombre completo</label>
                <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} className="w-full bg-base/50 border border-border-active rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300" placeholder="Ingresa tu nombre completo" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">Correo electrónico</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-base/50 border border-border-active rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300" placeholder="tu@email.com" required />
              </div>

              <div>
                <label htmlFor="reason" className="block text-text-secondary text-sm font-medium mb-2">Motivo del contacto</label>
                <select id="reason" name="reason" value={formData.reason} onChange={handleChange} className="w-full bg-base/50 border border-border-active rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 appearance-none cursor-pointer" required>
                  <option value="" className="bg-base">Selecciona un motivo</option>
                  <option value="Nuevo proyecto" className="bg-base">Nuevo proyecto</option>
                  <option value="Consultoría" className="bg-base">Consultoría</option>
                  <option value="Colaboración" className="bg-base">Colaboración</option>
                  <option value="Otro" className="bg-base">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">Mensaje</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full bg-base/50 border border-border-active rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
              </div>

              {/* Mensaje de éxito visual */}
              {successMsg && (
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm font-medium text-center animate-pulse">
                  {successMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-xl hover:bg-accent-hover hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/60 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
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
        </div>
      </div>
    </div>
  );
};

export default Contact;