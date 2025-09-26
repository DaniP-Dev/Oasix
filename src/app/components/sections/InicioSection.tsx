"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DarkButton from "../DarkButton";

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
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* ===== MOBILE VIEW ===== */}
      <div className="lg:hidden min-h-screen relative flex items-center justify-center p-8 sm:p-12">
        {/* mobile background using Tailwind arbitrary value */}
        <div className="absolute inset-0 bg-[url('/imgs/imagen.png')] bg-cover bg-center bg-no-repeat" />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-20 w-full max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold text-yellow-400 mb-4"
          >
            Leidy Vega
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-white mb-8 leading-tight"
          >
            Desarrolladora freelancer creando<br />
            soluciones digitales adaptables
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <DarkButton label="OFF" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-4 mb-12"
          >
            {/* Bubble 1 */}
            <div className="relative inline-block -rotate-3">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-2xl inline-block text-lg font-bold shadow-lg">
                DESARROLLO
              </div>
              <svg className="absolute -right-3 bottom-0 w-6 h-6 text-blue-600 fill-current" viewBox="0 0 6 6" aria-hidden>
                <path d="M0 0 L6 3 L0 6 z" />
              </svg>
            </div>

            {/* Bubble 2 */}
            <div className="relative inline-block ml-8 rotate-3">
              <div className="bg-purple-600 text-white px-6 py-3 rounded-2xl inline-block text-lg font-bold shadow-lg">
                APPS
              </div>
              <svg className="absolute -left-3 bottom-0 w-6 h-6 text-purple-600 fill-current transform rotate-180" viewBox="0 0 6 6" aria-hidden>
                <path d="M0 0 L6 3 L0 6 z" />
              </svg>
            </div>

            {/* Bubble 3 */}
            <div className="relative inline-block ml-16 -rotate-2">
              <div className="bg-gray-500 text-white px-6 py-3 rounded-2xl inline-block text-lg font-bold shadow-lg">
                WEBS
              </div>
              <svg className="absolute -right-3 bottom-0 w-6 h-6 text-gray-500 fill-current" viewBox="0 0 6 6" aria-hidden>
                <path d="M0 0 L6 3 L0 6 z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-4 items-center flex-col sm:flex-row justify-center"
          >
            <button
              onClick={() => onSectionClick("portfolio")}
              className="rounded-full transition-colors flex items-center justify-center bg-pink-600 text-white gap-2 hover:bg-pink-700 shadow-lg font-medium text-sm sm:text-base h-12 px-6 sm:px-8"
            >
              Ver mis soluciones
            </button>
            <button
              onClick={() => onSectionClick("acerca-de")}
              className="rounded-full border border-white/30 transition-colors flex items-center justify-center bg-white bg-opacity-20 text-white backdrop-blur-sm hover:bg-opacity-30 shadow-lg font-medium text-sm sm:text-base h-12 px-6 sm:px-8"
            >
              Conocer más
            </button>
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP VIEW ===== */}
      <div className="hidden lg:flex min-h-screen relative items-center">
        {/* Left: content */}
        <div className="relative z-30 max-w-2xl lg:pl-16 p-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-bold text-yellow-400 mb-4"
          >
            Leidy Vega
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl font-semibold text-white mb-8 leading-tight"
          >
            Desarrolladora freelancer creando<br />
            soluciones digitales adaptables
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <DarkButton label="OFF" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-4 mb-12"
          >
            {/* Bubble 1 */}
            <div className="relative inline-block -rotate-3">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-2xl inline-block text-lg font-bold shadow-lg">
                DESARROLLO
              </div>
              <svg className="absolute -right-3 bottom-0 w-6 h-6 text-blue-600 fill-current" viewBox="0 0 6 6" aria-hidden>
                <path d="M0 0 L6 3 L0 6 z" />
              </svg>
            </div>

            {/* Bubble 2 */}
            <div className="relative inline-block ml-8 rotate-3">
              <div className="bg-purple-600 text-white px-6 py-3 rounded-2xl inline-block text-lg font-bold shadow-lg">
                APPS
              </div>
              <svg className="absolute -left-3 bottom-0 w-6 h-6 text-purple-600 fill-current transform rotate-180" viewBox="0 0 6 6" aria-hidden>
                <path d="M0 0 L6 3 L0 6 z" />
              </svg>
            </div>

            {/* Bubble 3 */}
            <div className="relative inline-block ml-16 -rotate-2">
              <div className="bg-gray-500 text-white px-6 py-3 rounded-2xl inline-block text-lg font-bold shadow-lg">
                WEBS
              </div>
              <svg className="absolute -right-3 bottom-0 w-6 h-6 text-gray-500 fill-current" viewBox="0 0 6 6" aria-hidden>
                <path d="M0 0 L6 3 L0 6 z" />
              </svg>
            </div>
          </motion.div>

          
        </div>

        {/* Right: desktop image - absolute to touch top/bottom (preserve natural aspect ratio) */}
        <div className="absolute right-0 top-0 bottom-0 overflow-visible">
          <img
            src="/imgs/imagenDesktop.png"
            alt="Leidy Vega"
            className="h-screen w-auto object-contain"
            style={{ display: 'block' }}
          />
        </div>
      </div>
    </motion.section>
  );
}