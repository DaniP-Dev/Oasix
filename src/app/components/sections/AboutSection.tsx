"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
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
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center md:text-left">
              Acerca De Mí
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              ¡Hola! Soy <span className="font-bold text-pink-600">Leidy Vega</span>, una desarrolladora apasionada por crear 
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
              className="w-80 h-80 mx-auto rounded-full overflow-hidden flex items-center justify-center mb-6"
            >
              {/* Imagen del about: public/imgs/fotoAbout.jpeg */}
              <img
                src="/imgs/fotoAbout.jpeg"
                alt="Leidy Vega"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
  );
}