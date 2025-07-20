"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NavbarMasked() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  // Detecta el fondo bajo el navbar y cambia el color del texto
  useEffect(() => {
    function handleScroll() {
      const nav = navRef.current;
      if (!nav) return;
      const navRect = nav.getBoundingClientRect();
      const y = navRect.bottom;
      // Detecta el elemento bajo el navbar
      const elem = document.elementFromPoint(window.innerWidth / 2, y + 1);
      let dark = false;
      if (elem) {
        const bg = window.getComputedStyle(elem).backgroundColor;
        // Si el fondo es "oscuro" (rgb bajo), usa texto blanco
        if (bg) {
          const rgb = bg.match(/\d+/g);
          if (rgb && rgb.length >= 3) {
            const avg = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;
            dark = avg < 128;
          }
        }
      }
      setIsDark(dark);
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const menu = menuRef.current;
    const cta = ctaRef.current;

    if (!nav) return;

    // Animate the navbar container
    gsap.fromTo(
      nav,
      { yPercent: -100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }
    );

    // Animate logo
    if (logo) {
      gsap.fromTo(
        logo,
        { yPercent: -50, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out"
        }
      );
    }

    // Animate menu items
    if (menu) {
      const menuItems = menu.querySelectorAll("a");
      gsap.fromTo(
        menuItems,
        { yPercent: -30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }

    // Animate CTA button
    if (cta) {
      gsap.fromTo(
        cta,
        { yPercent: -30, opacity: 0, scale: 0.8 },
        {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.5,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0">
            <span className={`${isDark ? 'text-white' : 'text-black'} font-work-sans font-semibold text-xl`}>
              SynthMind
            </span>
          </div>

          {/* Desktop Navigation */}
          <div ref={menuRef} className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-neutral-800'} px-3 py-2 text-[18px] font-medium transition-colors duration-200`}>
                Inicio
              </a>
              <a href="#servicios" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-neutral-800'} px-3 py-2 text-[18px] font-medium transition-colors duration-200`}>
                Servicios
              </a>
              <a href="#proyectos" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-neutral-800'} px-3 py-2 text-[18px] font-medium transition-colors duration-200`}>
                Proyectos
              </a>
              <a href="#tecnologia" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-neutral-800'} px-3 py-2 text-[18px] font-medium transition-colors duration-200`}>
                Tecnologías
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="hidden md:block">
            <button
              className="bg-gradient-to-r from-[#BD4DCF] to-[#8C52E1] hover:from-[#8C52E1] hover:to-[#3D1177] text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 font-work-sans text-[18px]"
              onClick={() => {
                const el = document.getElementById('anchors');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Empezar Proyecto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-neutral-800'} p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-md rounded-lg mt-2">
              <a href="#inicio" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-neutral-800'} block px-3 py-2 text-base font-medium transition-colors duration-200`}>
                Inicio
              </a>
              <a href="#servicios" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-neutral-800'} block px-3 py-2 text-base font-medium transition-colors duration-200`}>
                Servicios
              </a>
              <a href="#proyectos" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-neutral-800'} block px-3 py-2 text-base font-medium transition-colors duration-200`}>
                Proyectos
              </a>
              <a href="#tecnologia" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-neutral-800'} block px-3 py-2 text-base font-medium transition-colors duration-200`}>
                Tecnologías
              </a>
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-[#BD4DCF] to-[#8C52E1] hover:from-[#8C52E1] hover:to-[#3D1177] text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 font-work-sans text-[18px]">
                  Empezar Proyecto
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 