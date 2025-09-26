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
      <div className="lg:hidden min-h-screen relative flex flex-col justify-between p-6 sm:p-8">
        {/* mobile background using Tailwind arbitrary value */}
        <div className="absolute inset-0 bg-[url('/imgs/imagen.png')] bg-cover bg-center bg-no-repeat" />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Top header area: avoid covering face by keeping these near the top */}
        <div className="relative z-20 w-full max-w-2xl text-center pt-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-yellow-400 mb-2"
          >
            Leidy Vega
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-base sm:text-2xl font-semibold text-white mb-4 leading-tight px-4"
          >
            Desarrolladora freelancer creando
            <br />
            soluciones digitales adaptables
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mb-2"
          >
            <DarkButton label="OFF" />
          </motion.div>
        </div>

        {/* Bottom area: badges + CTAs — pushed to bottom so they don't block the face */}
        <div className="relative z-20 w-full max-w-2xl text-center pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col items-center gap-4 mb-6"
          >
            {/* Row: DESARROLLO + APPS side-by-side */}
            <div className="w-full flex justify-center gap-4">
              <div className="relative inline-block -rotate-3">
                <Image
                  src="/imgs/m1.png"
                  alt="DESARROLLO"
                  width={160}
                  height={56}
                  className="rounded-2xl shadow-lg object-contain inline-block"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-base font-bold">DESARROLLO</span>
                </div>
              </div>

              <div className="relative inline-block rotate-3">
                <Image
                  src="/imgs/m2.png"
                  alt="APPS"
                  width={140}
                  height={56}
                  className="rounded-2xl shadow-lg object-contain inline-block"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-base font-bold">APPS</span>
                </div>
              </div>
            </div>

            {/* Row: WEBS centered */}
            <div className="w-full flex justify-center">
              <div className="relative inline-block -rotate-2">
                <Image
                  src="/imgs/m3.png"
                  alt="WEBS"
                  width={170}
                  height={56}
                  className="rounded-2xl shadow-lg object-contain inline-block"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-base font-bold">WEBS</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.45 }}
            className="flex gap-4 items-center justify-center"
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
            {/* Image 1 */}
            <div className="relative inline-block -rotate-3">
              <Image
                src="/imgs/m1.png"
                alt="DESARROLLO"
                width={260}
                height={80}
                className="rounded-2xl shadow-lg object-contain inline-block"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white text-lg font-bold">DESARROLLO</span>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative inline-block ml-8 rotate-3">
              <Image
                src="/imgs/m2.png"
                alt="APPS"
                width={220}
                height={80}
                className="rounded-2xl shadow-lg object-contain inline-block"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white text-lg font-bold">APPS</span>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative inline-block ml-16 -rotate-2">
              <Image
                src="/imgs/m3.png"
                alt="WEBS"
                width={240}
                height={80}
                className="rounded-2xl shadow-lg object-contain inline-block"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white text-lg font-bold">WEBS</span>
              </div>
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