// page.tsx
import Aurora from "../components/Aurora";
import Image from "next/image";
import NavbarMasked from "../components/NavbarMasked";
import MaskedHeading from "../components/MaskedHeading";
import MaskedImage from "../components/MaskedImage";
import MaskedTexts from "../components/MaskedTexts";


export default function Page() {
  return (
    <>
      {/* Contenedor principal con ancho máximo fijo */}
      <div className="w-full flex justify-center bg-black">
        <div className="w-full max-w-[1160px] min-h-[2000px] bg-black text-white relative mx-auto">
          <NavbarMasked />
        {/* Aurora Background Animation */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#BD4DCF", "#8C52E1", "#3D1177"]}
            amplitude={1.2}
            blend={0.6}
            speed={1.0}
          />
        </div>
        {/* Content */}
        <div className="relative z-10 min-h-screen">
          <div className="absolute top-[109px] left-0 right-0 px-6 md:px-8 lg:px-12 xl:pl-[60px] xl:pr-[334px] h-auto">
            <MaskedHeading />
          </div>
          {/* Image Container */}
          <div className="absolute top-[400px] md:top-[450px] lg:top-[500px] left-0 right-0 px-[50px]">
            <MaskedImage
              src="/images/aerps-com-pp8rmBQC7Yc-unsplash.jpg"
              alt="Imagen principal"
            />
          </div>
          {/* White background section */}
          <div id="proyecto" className="absolute top-[1000px] md:top-[1050px] lg:top-[1100px] left-0 right-0 h-[900px] bg-white relative z-0">
            <div className="px-[50px] h-full flex flex-col justify-start pt-[90px]">
              <MaskedTexts />
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* Sección de presentación */}
      <section className="w-full py-32 flex justify-center bg-gradient-to-b from-white to-gray-100">
        <div className="w-full max-w-[1160px] flex flex-col items-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Bienvenido a SynthMind Design</h2>
          <p className="max-w-2xl text-lg text-gray-700 text-center">Somos especialistas en experiencias digitales, realidad virtual, motion graphics y soluciones creativas para empresas innovadoras. Descubre nuestro trabajo y cómo podemos ayudarte a destacar en el mundo digital.</p>
        </div>
      </section>
      {/* Galería de imágenes */}
      <section className="w-full py-24 flex justify-center bg-white">
        <div className="w-full max-w-[1160px] px-4 flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-8 text-gray-900">Galería de proyectos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <Image src="/images/aerps-com-pp8rmBQC7Yc-unsplash.jpg" alt="Proyecto 1" className="rounded-xl shadow-md object-cover w-full h-64" width={600} height={256} />
          <Image src="/images/aerps-com-pp8rmBQC7Yc-unsplash.jpg" alt="Proyecto 2" className="rounded-xl shadow-md object-cover w-full h-64" width={600} height={256} />
          <Image src="/images/aerps-com-pp8rmBQC7Yc-unsplash.jpg" alt="Proyecto 3" className="rounded-xl shadow-md object-cover w-full h-64" width={600} height={256} />
        </div>
        </div>
      </section>
      <div className="h-[2000px]"></div>
      {/* Anchors del nav como texto sobre el div blanco */}
      <div id="anchors" className="w-full flex flex-col items-center mt-12 relative z-20">
        <div className="flex justify-center items-center w-full mb-15 group cursor-pointer">
          <a href="mailto:albaantondesign@gmail.com" className="flex items-center group" style={{ textDecoration: 'none' }}>
            <span className="text-[90px] font-semibold text-black text-center block cursor-pointer transition-colors duration-200 group-hover:text-[#8C52E1]">Contáctanos</span>
            <svg className="ml-6" width="80" height="80" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 24 L24 8" stroke="#111" strokeWidth="3.5" strokeLinecap="round" className="transition-colors duration-200 group-hover:stroke-[#8C52E1]" />
              <path d="M18 8 L24 8 L24 14" stroke="#111" strokeWidth="3.5" strokeLinecap="round" className="transition-colors duration-200 group-hover:stroke-[#8C52E1]" />
            </svg>
          </a>
        </div>
        <nav className="flex gap-8 bg-transparent">
          <a href="#inicio" className="text-gray-900 hover:opacity-70 font-semibold text-xl transition-colors">Inicio</a>
          <a href="#servicios" className="text-gray-900 hover:opacity-70 font-semibold text-xl transition-colors">Servicios</a>
          <a href="#proyectos" className="text-gray-900 hover:opacity-70 font-semibold text-xl transition-colors">Proyectos</a>
          <a href="#tecnologia" className="text-gray-900 hover:opacity-70 font-semibold text-xl transition-colors">Tecnologías</a>
        </nav>
        <div className="flex gap-6 mt-[40px] mb-2">
          {/* X (Twitter) */}
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:opacity-70">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.26 3H21.27L14.06 10.98L22.5 21H16.16L11.05 14.68L5.29 21H2.27L9.92 12.52L2 3H8.5L13.14 8.72L18.26 3ZM17.13 19.13H18.98L7.01 4.77H5.05L17.13 19.13Z" fill="#111" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="#111" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" fill="none" stroke="#111" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="#111" />
            </svg>
          </a>
          {/* Github */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:opacity-70">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.07 20.17 9.26 21.5C9.86 21.6 10.08 21.27 10.08 20.98C10.08 20.72 10.07 20.09 10.07 19.22C7 19.91 6.34 17.98 6.34 17.98C5.82 16.65 5.03 16.32 5.03 16.32C3.91 15.58 5.12 15.6 5.12 15.6C6.36 15.69 7 16.87 7 16.87C8.09 18.68 9.91 18.15 10.54 17.87C10.64 17.08 10.93 16.57 11.25 16.29C8.98 16.02 6.62 15.13 6.62 11.42C6.62 10.37 7 9.5 7.66 8.8C7.56 8.53 7.21 7.5 7.75 6.13C7.75 6.13 8.62 5.84 10.07 6.78C10.89 6.55 11.77 6.43 12.65 6.43C13.53 6.43 14.41 6.55 15.23 6.78C16.68 5.84 17.55 6.13 17.55 6.13C18.09 7.5 17.74 8.53 17.64 8.8C18.3 9.5 18.68 10.37 18.68 11.42C18.68 15.14 16.31 16.01 14.03 16.28C14.43 16.62 14.79 17.29 14.79 18.31C14.79 19.76 14.77 20.68 14.77 20.98C14.77 21.27 14.99 21.61 15.6 21.5C19.79 20.17 22.86 16.42 22.86 12C22.86 6.48 18.52 2 12 2Z" fill="#111" />
            </svg>
          </a>
          {/* Youtube */}
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="hover:opacity-70">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="#111" strokeWidth="2" />
              <polygon points="10,9 16,12 10,15" fill="#111" />
            </svg>
          </a>
        </div>
        <span className="mt-12 text-gray-500 text-base text-center"> 2025 SynthMindDesign. Todos los derechos reservados.</span>
      </div>
    </>
  );
}
