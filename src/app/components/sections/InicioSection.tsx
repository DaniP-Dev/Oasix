"use client";

import { motion } from "framer-motion";

interface InicioSectionProps {
  onSectionClick: (sectionId: string) => void;
}

export default function InicioSection({ onSectionClick }: InicioSectionProps) {
  return (
    <motion.section
      key="inicio"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center p-8 sm:p-20 relative overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 inicio-background" />
      
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 inicio-overlay z-10"></div>
      
      <div className="text-center space-y-8 relative z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl sm:text-7xl font-bold text-white"
        >
          ¡Hola! 👋
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl sm:text-2xl text-gray-100 max-w-3xl"
        >
          Soy <span className="font-bold text-pink-400">Leydi Vega</span>, desarrolladora especializada en crear 
          <span className="font-semibold"> soluciones informáticas adaptables</span> - desde apps móviles hasta aplicaciones web complejas
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-gray-200 max-w-2xl"
        >
          Con metodologías ágiles y frameworks modernos, transformo ideas en realidad digital
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-4 items-center flex-col sm:flex-row justify-center"
        >
          <button
            onClick={() => onSectionClick("portfolio")}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-pink-600 text-white gap-2 hover:bg-pink-700 shadow-lg font-medium text-sm sm:text-base h-12 px-6 sm:px-8"
          >
            Ver mis soluciones
          </button>
          <button
            onClick={() => onSectionClick("acerca-de")}
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center bg-white bg-opacity-20 text-white backdrop-blur-sm hover:bg-opacity-30 shadow-lg font-medium text-sm sm:text-base h-12 px-6 sm:px-8"
          >
            Conocer más
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}