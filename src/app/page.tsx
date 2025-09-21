"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import InicioSection from "./components/sections/InicioSection";
import AboutSection from "./components/sections/AboutSection";
import Aside from "./components/Aside";
import PortfolioSection from "./components/sections/PortfolioSection";

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
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      // Restaurar scroll normal
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
      document.body.style.position = "unset";
      document.body.style.top = "unset";
      document.body.style.left = "unset";
      document.body.style.right = "unset";
      document.body.style.width = "unset";
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
      document.body.style.position = "unset";
      document.body.style.top = "unset";
      document.body.style.left = "unset";
      document.body.style.right = "unset";
      document.body.style.width = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="font-sans min-h-screen scroll-smooth overflow-x-hidden">
      {/* Botón hamburguesa para móviles */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 lg:hidden bg-slate-900 text-white p-3 rounded-lg shadow-lg hover:bg-slate-800 transition-colors"
        aria-label="Abrir menú"
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

      {/* Componente Aside con overlay y sidebar */}
      <Aside
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
      />

      {/* Contenido principal - responsive para móviles y desktop */}
      <div
        className={`lg:ml-[25%] flex flex-col overflow-x-hidden ${
          isMobileMenuOpen
            ? "overflow-hidden h-screen lg:overflow-auto lg:h-auto"
            : ""
        }`}
      >
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {activeSection === "inicio" && (
              <InicioSection onSectionClick={handleSectionClick} />
            )}

            {activeSection === "acerca-de" && <AboutSection />}

            {activeSection === "portfolio" && (
              <PortfolioSection handleSectionClick={handleSectionClick} />
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
