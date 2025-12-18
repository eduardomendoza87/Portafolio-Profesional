import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }} //  Empieza invisible y 75px abajo
      whileInView={{ opacity: 1, y: 0 }} //  Cuando se ve en pantalla, sube y aparece
      viewport={{ once: true, margin: "-100px" }} // Se anima una sola vez
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }} //  Duración y suavidad
    >
      {children}
    </motion.div>
  );
};