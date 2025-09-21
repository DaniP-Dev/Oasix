"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Prevenir scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Bloquear scroll del body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      // Restaurar scroll normal
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.top = 'unset';
      document.body.style.left = 'unset';
      document.body.style.right = 'unset';
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.top = 'unset';
      document.body.style.left = 'unset';
      document.body.style.right = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="font-sans min-h-screen scroll-smooth">
      {/* Botón hamburguesa para móviles */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 lg:hidden bg-slate-900 text-white p-3 rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay para cerrar el menú en móviles */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Cerrar menú"
        ></div>
      )}

      {/* Sidebar fijo - Perfil Personal */}
      <aside className={`fixed left-0 top-0 w-80 lg:w-1/4 bg-slate-900 dark:bg-gray-900 p-8 text-white min-h-screen z-40 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Botón de cerrar para móviles */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 lg:hidden text-white hover:text-gray-300 transition-colors"
          aria-label="Cerrar menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-8 mt-8 lg:mt-0">
          {/* Foto de perfil */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-700">
              <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
                LV
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-white">Leydi Vega</h1>
            <p className="text-slate-300 text-lg mb-6">Desarrolladora de Soluciones Informáticas</p>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-4 mb-8">
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.764-1.378l-.752 2.873c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
              </svg>
            </a>
          </div>

          {/* Navegación */}
          <nav className="space-y-3">
            <div className="space-y-2">
              <button 
                onClick={() => handleSectionClick("inicio")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "inicio" 
                    ? "bg-pink-600 text-white" 
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-medium">Inicio</span>
              </button>
              
              <button 
                onClick={() => handleSectionClick("acerca-de")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "acerca-de" 
                    ? "bg-pink-600 text-white" 
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">Acerca De</span>
              </button>
              
              <button 
                onClick={() => handleSectionClick("portfolio")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "portfolio" 
                    ? "bg-pink-600 text-white" 
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="font-medium">Portfolio</span>
              </button>
            </div>
          </nav>

          {/* Copyright */}
          <div className="mt-auto pt-8">
            <p className="text-slate-400 text-sm text-center">
              © Copyright <span className="font-semibold text-white">Leydi Vega</span> 2025
            </p>
          </div>
        </div>
      </aside>

      {/* Contenido principal - responsive para móviles y desktop */}
      <div className={`lg:ml-[25%] flex flex-col ${isMobileMenuOpen ? 'overflow-hidden h-screen lg:overflow-auto lg:h-auto' : ''}`}>
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {activeSection === "inicio" && (
              <motion.section
                key="inicio"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="min-h-screen flex items-center justify-center p-8 sm:p-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800"
              >
                <div className="text-center space-y-8">
                  <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl sm:text-7xl font-bold text-gray-800 dark:text-white"
                  >
                    ¡Hola! 👋
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl"
                  >
                    Soy <span className="font-bold text-pink-600">Leydi Vega</span>, desarrolladora especializada en crear 
                    <span className="font-semibold"> soluciones informáticas adaptables</span> - desde apps móviles hasta aplicaciones web complejas
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl"
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
                      onClick={() => handleSectionClick("portfolio")}
                      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-pink-600 text-white gap-2 hover:bg-pink-700 font-medium text-sm sm:text-base h-12 px-6 sm:px-8"
                    >
                      Ver mis soluciones
                    </button>
                    <button
                      onClick={() => handleSectionClick("acerca-de")}
                      className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-12 px-6 sm:px-8"
                    >
                      Conocer más
                    </button>
                  </motion.div>
                </div>
              </motion.section>
            )}

            {activeSection === "acerca-de" && (
              <motion.section
                key="acerca-de"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="min-h-screen flex items-center p-8 sm:p-20 bg-white dark:bg-gray-900"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                        Acerca De Mí
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        ¡Hola! Soy <span className="font-bold text-pink-600">Leydi Vega</span>, una desarrolladora apasionada por crear 
                        <span className="font-semibold"> soluciones informáticas innovadoras</span> que resuelvan problemas reales.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Mi enfoque se centra en desarrollar <strong>aplicaciones web y móviles</strong> utilizando metodologías 
                        ágiles y frameworks modernos adaptables a las necesidades específicas de cada proyecto.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-8">
                        Con cada proyecto, busco no solo cumplir con los requisitos técnicos, sino crear experiencias 
                        digitales que marquen la diferencia para usuarios y empresas.
                      </p>
                      
                      {/* Metodologías y Frameworks */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Especialidades Técnicas</h3>
                        <div className="space-y-3">
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                          >
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700 dark:text-gray-300">React/Next.js & Vue.js</span>
                              <span className="text-gray-500">95%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '95%' }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="bg-pink-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          >
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700 dark:text-gray-300">Node.js & Python</span>
                              <span className="text-gray-500">90%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '90%' }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="bg-green-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                          >
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700 dark:text-gray-300">Apps Móviles (React Native/Flutter)</span>
                              <span className="text-gray-500">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '85%' }}
                                transition={{ delay: 1, duration: 1 }}
                                className="bg-purple-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-center"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                        className="w-80 h-80 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white mb-6"
                      >
                        LV
                      </motion.div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7, duration: 0.5 }}
                          className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                        >
                          <h4 className="text-2xl font-bold text-pink-600">50+</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Soluciones Creadas</p>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                          className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                        >
                          <h4 className="text-2xl font-bold text-green-600">100%</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Adaptabilidad</p>
                        </motion.div>
                      </div>
                      
                      {/* Metodologías */}
                      <div className="mt-6 grid grid-cols-1 gap-3">
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9, duration: 0.5 }}
                          className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 p-3 rounded-lg"
                        >
                          <h5 className="font-semibold text-gray-800 dark:text-white text-sm">Metodologías Ágiles</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Scrum, Kanban, DevOps</p>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1, duration: 0.5 }}
                          className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 p-3 rounded-lg"
                        >
                          <h5 className="font-semibold text-gray-800 dark:text-white text-sm">Frameworks Modernos</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Adaptables a cualquier proyecto</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>
            )}

            {activeSection === "portfolio" && (
              <motion.section
                key="portfolio"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="min-h-screen p-8 sm:p-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
              >
                <div className="max-w-6xl mx-auto">
                  <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center"
                  >
                    Mi Portfolio de Soluciones
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto"
                  >
                    Cada proyecto representa una solución informática única, desarrollada con metodologías ágiles 
                    y frameworks adaptables para crear experiencias digitales excepcionales.
                  </motion.p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Proyecto 1 - App Móvil de Gestión */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    >
                      <div className="h-48 bg-gradient-to-br from-pink-500 to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-3xl">📱</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          TaskFlow Mobile
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          App móvil de gestión de tareas con React Native, implementando metodologías ágiles 
                          para equipos distribuidos.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 text-xs rounded-full">React Native</span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Node.js</span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">MongoDB</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Metodología: Scrum</span>
                          <button className="text-pink-600 hover:text-pink-700 font-medium text-sm">Ver más →</button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Proyecto 2 - Plataforma Web */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-3xl">🌐</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          EduConnect Platform
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          Plataforma educativa web con Next.js, diseñada con frameworks adaptables 
                          para instituciones de cualquier tamaño.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">Next.js</span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">PostgreSQL</span>
                          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 text-xs rounded-full">TypeScript</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Metodología: Kanban</span>
                          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Ver más →</button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Proyecto 3 - Dashboard Analytics */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    >
                      <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-3xl">📊</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          Analytics Pro Dashboard
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          Dashboard de analíticas en tiempo real con Vue.js, implementando DevOps 
                          para una solución escalable y adaptable.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">Vue.js</span>
                          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-xs rounded-full">Python</span>
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 text-xs rounded-full">Redis</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Metodología: DevOps</span>
                          <button className="text-green-600 hover:text-green-700 font-medium text-sm">Ver más →</button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Proyecto 4 - E-commerce */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    >
                      <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-3xl">🛒</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          ShopSmart E-commerce
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          Plataforma de e-commerce completa con Flutter y microservicios, 
                          diseñada para adaptarse a cualquier modelo de negocio.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-xs rounded-full">Flutter</span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Microservicios</span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">AWS</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Metodología: Scrum</span>
                          <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">Ver más →</button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Proyecto 5 - IoT Dashboard */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    >
                      <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-3xl">🔗</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          SmartHome IoT Control
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          Sistema de control IoT con React y Python, implementando soluciones 
                          adaptables para hogar inteligente.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs rounded-full">React</span>
                          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 text-xs rounded-full">Python</span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">MQTT</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Metodología: Ágil</span>
                          <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">Ver más →</button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Proyecto 6 - AI Chat Bot */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    >
                      <div className="h-48 bg-gradient-to-br from-violet-500 to-pink-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-3xl">🤖</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          AI Assistant Bot
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          Chatbot inteligente con procesamiento de lenguaje natural, 
                          desarrollado con frameworks adaptables y metodologías ágiles.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 text-xs rounded-full">Python</span>
                          <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 text-xs rounded-full">TensorFlow</span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">FastAPI</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Metodología: DevOps</span>
                          <button className="text-violet-600 hover:text-violet-700 font-medium text-sm">Ver más →</button>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Call to Action */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-center mt-16"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      ¿Tienes un proyecto en mente?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                      Trabajemos juntos para crear soluciones informáticas adaptables que transformen tu idea 
                      en una realidad digital exitosa.
                    </p>
                    <button
                      onClick={() => handleSectionClick("inicio")}
                      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-pink-600 text-white gap-2 hover:bg-pink-700 font-medium text-base h-12 px-8 mx-auto"
                    >
                      Iniciar conversación
                    </button>
                  </motion.div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              © 2024 <span className="font-bold text-pink-600">Leydi Vega</span> - Desarrolladora de Soluciones Informáticas Adaptables
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Creando experiencias digitales únicas con metodologías ágiles y frameworks modernos
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
