"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Player } from "@lottiefiles/react-lottie-player";
import Lottie from "lottie-react";
import GradientText from "./GradientText";
import VRVerticalButtons, { BUTTONS } from "./VRVerticalButtons";

import { AnimatePresence, motion, useScroll, useTransform, useSpring } from 'framer-motion';


gsap.registerPlugin(SplitText, ScrollTrigger);

export default function MaskedTexts() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const maskedTechRef = useRef<HTMLSpanElement | null>(null);
  const techAnimated = useRef(false);
  const vrTitleRef = useRef<HTMLHeadingElement | null>(null);

  const vrTitleAnimated = useRef(false);
  const vrDescRef = useRef<HTMLParagraphElement | null>(null);
  const vrDescAnimated = useRef(false);

  useEffect(() => {
    if (!vrTitleRef.current || vrTitleAnimated.current) return;
    const el = vrTitleRef.current;
    const split = SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'line-vr-title'
    });
    const lines = el.querySelectorAll('.line-vr-title');
    gsap.set(lines, { yPercent: 110, opacity: 0 });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 82%',
      onEnter: () => {
        gsap.to(lines, {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power2.out',
          onComplete: () => {
            vrTitleAnimated.current = true;
          }
        });
      },
      onLeaveBack: () => {
        gsap.to(lines, {
          yPercent: 110,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.in',
          onComplete: () => {
            vrTitleAnimated.current = false;
          }
        });
      }
    });
    return () => {
      split.revert();
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    if (!maskedTechRef.current || techAnimated.current) return;
    const el = maskedTechRef.current;
    // Split text en líneas
    const split = SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'line'
    });
    const lines = el.querySelectorAll('.line');
    gsap.set(lines, { yPercent: 110, opacity: 0 });
    // Animación on scroll
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(lines, {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          onComplete: () => {
            techAnimated.current = true;
          }
        });
      },
      onLeaveBack: () => {
        gsap.to(lines, {
          yPercent: 110,
          opacity: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.in',
          onComplete: () => {
            techAnimated.current = false;
          }
        });
      }
    });
    return () => {
      split.revert();
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    if (!vrDescRef.current || vrDescAnimated.current) return;
    const el = vrDescRef.current;
    // Split text en líneas
    const split = SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'line-vr'
    });
    const lines = el.querySelectorAll('.line-vr');
    gsap.set(lines, { yPercent: 110, opacity: 0 });
    // Animación on scroll
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(lines, {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power2.out',
          onComplete: () => {
            vrDescAnimated.current = true;
          }
        });
      },
      onLeaveBack: () => {
        gsap.to(lines, {
          yPercent: 110,
          opacity: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: 'power2.in',
          onComplete: () => {
            vrDescAnimated.current = false;
          }
        });
      }
    });
    return () => {
      split.revert();
      trigger.kill();
    };
  }, []);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [lottieData, setLottieData] = useState<object | null>(null);
  const [lottieError, setLottieError] = useState(false);
  const [lottieData1, setLottieData1] = useState<object | null>(null);
  const [lottieError1, setLottieError1] = useState(false);
  const [lottieData2, setLottieData2] = useState<object | null>(null);
  const [lottieError2, setLottieError2] = useState(false);
  const cardRefs = [useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null)];
  const cardTitleRefs = [useRef<HTMLHeadingElement | null>(null), useRef<HTMLHeadingElement | null>(null), useRef<HTMLHeadingElement | null>(null)];
  const cardTextRefs = [useRef<HTMLParagraphElement | null>(null), useRef<HTMLParagraphElement | null>(null), useRef<HTMLParagraphElement | null>(null)];

  useEffect(() => {
    const title = titleRef.current;
    const paragraph = paragraphRef.current;
    if (!title || !paragraph) return;

    // Split text for title
    const titleSplit = SplitText.create(title, {
      type: "lines",
      mask: "lines",
      linesClass: "line"
    });

    // Split text for paragraph
    const paragraphSplit = SplitText.create(paragraph, {
      type: "lines",
      mask: "lines",
      linesClass: "line"
    });

    const titleLines = title.querySelectorAll(".line");
    const paragraphLines = paragraph.querySelectorAll(".line");

    // Set initial state
    gsap.set([titleLines, paragraphLines], { yPercent: 110, opacity: 0 });
    gsap.set(buttonRef.current, { scale: 0, opacity: 0 });

    // Create timeline for better control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        end: "top 20%",
        scrub: 1
      }
    });

    // Add animations to timeline
    tl.to(titleLines, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out"
    })
      .to(paragraphLines, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out"
      }, "-=0.4")
      .to(buttonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.2");

    return () => {
      titleSplit.revert();
      paragraphSplit.revert();
    };
  }, []);

  useEffect(() => {
    fetch("/lotties/Portal%20time.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el JSON de Lottie");
        return res.json();
      })
      .then((data) => setLottieData(data))
      .catch(() => setLottieError(true));
  }, []);

  useEffect(() => {
    fetch("/lotties/Animation%20-%201751915541936.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el JSON de Lottie 1");
        return res.json();
      })
      .then((data) => setLottieData1(data))
      .catch(() => setLottieError1(true));
  }, []);

  useEffect(() => {
    fetch("/lotties/Animation%20-%201751921405279.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el JSON de Lottie 2");
        return res.json();
      })
      .then((data) => setLottieData2(data))
      .catch(() => setLottieError2(true));
  }, []);

  useEffect(() => {
    cardRefs.forEach((ref, i) => {
      const card = ref.current;
      if (!card) return;
      const title = cardTitleRefs[i].current;
      const text = cardTextRefs[i].current;
      const lottie = card.querySelector('.lottie-fade');

      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
          onEnter: () => animateContent(),
          onEnterBack: () => animateContent(),
        }
      });

      // ANIMACIÓN DE CONTENIDO (masked para título/texto, fade para Lottie)
      function animateContent() {
        if (!title || !text) return;
        // TÍTULO
        const titleSplit = SplitText.create(title, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'line'
        });
        const titleLines = title.querySelectorAll('.line');
        gsap.set(titleLines, { yPercent: 110, opacity: 0 });
        gsap.to(titleLines, {
          yPercent: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: 'power2.out'
        });
        // TEXTO
        const textSplit = SplitText.create(text, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'line'
        });
        const textLines = text.querySelectorAll('.line');
        gsap.set(textLines, { yPercent: 110, opacity: 0 });
        gsap.to(textLines, {
          yPercent: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.04,
          delay: 0.08,
          ease: 'power2.out'
        });
        // LOTTIE
        if (lottie) {
          gsap.set(lottie, { opacity: 0 });
          gsap.to(lottie, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
            delay: 0.15
          });
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Animación masked para el titular del div gris
    const greyTitle = document.getElementById('grey-section-title');
    if (greyTitle) {
      const split = SplitText.create(greyTitle, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'line'
      });
      const lines = greyTitle.querySelectorAll('.line');
      gsap.set(lines, { yPercent: 110, opacity: 0 });
      gsap.to(lines, {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: greyTitle,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      });
    }
    // Animación masked para el texto debajo del titular
    const greyText = document.getElementById('grey-section-text');
    if (greyText) {
      const split = SplitText.create(greyText, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'line'
      });
      const lines = greyText.querySelectorAll('.line');
      gsap.set(lines, { yPercent: 110, opacity: 0 });
      gsap.to(lines, {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: greyText,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      });
    }
    // Animación de expansión del video al hacer scroll 100px debajo del texto
    const videoDiv = document.getElementById('expanding-video');
    if (greyText && videoDiv) {
      gsap.set(videoDiv, { width: '659px', left: '', right: 0, borderRadius: '18px', paddingRight: '50px' });
      gsap.to(videoDiv, {
        width: '100vw',
        left: 0,
        right: 0,
        borderRadius: 0,
        paddingRight: 0,
        duration: 0.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: greyText,
          start: 'bottom+=-60px center',
          end: '+=200',
          toggleActions: 'play none none reverse',
        }
      });
    }
    const expandVideoContainer = document.getElementById('expand-video-container');
    if (!expandVideoContainer) return;
    const videoEl = expandVideoContainer.querySelector('video');
    if (!videoEl) return;

    // Estado original
    gsap.set(expandVideoContainer, {
      position: 'relative',
      margin: '0 auto',
      maxWidth: '1200px',
      width: '100%',
      borderRadius: 20,
      paddingLeft: 50,
      paddingRight: 50,
      // Restaurar padding lateral
    });

    // Eliminar animación dependiente del scroll para expandVideoContainer

    // Animación del texto después de la expansión del video
    const videoText = document.getElementById('video-text');
    if (videoText) {
      gsap.set(videoText, { opacity: 0 });
      gsap.to(videoText, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: videoText,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, []);

  return (
    <div className="text-black">
      <div className="flex justify-between items-start gap-8 mb-[140px]">
        <h2
          id="servicios"
          ref={titleRef}
          data-split="title"
          className="text-4xl font-semibold flex-1 max-w-[45%]"
        >
          Explorando las aplicaciones de la tecnología y colaborando en la creación de un futuro mejor
        </h2>
        <div className="flex-1 max-w-[45%]">
          <p
            ref={paragraphRef}
            data-split="paragraph"
            className="text-lg opacity-80 text-right mb-[21px]"
          >
            SynthMind Design es un laboratorio creativo donde la tecnología y el diseño se encuentran para dar vida a experiencias futuristas y soluciones interactivas que desafían los límites de la imaginación.
          </p>
          <div className="flex justify-end">
            <a
              href="mailto:albaantondesign@gmail.com"
              ref={buttonRef}
              className="w-[140px] h-[36px] bg-black text-white text-[18px] font-semibold rounded-[20px] hover:bg-gray-800 transition-colors flex items-center justify-center"
              style={{ textDecoration: 'none' }}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>

      {/* Tarjetas negras */}
      <div className="flex justify-between w-full">
        <div ref={cardRefs[0]} className="w-[368px] h-[423px] bg-black rounded-[20px] relative">
          <div className="card-inner w-full h-full">
            <div className="absolute left-[30px] top-[60px] w-[120px] h-[120px] bg-transparent flex items-center justify-center lottie-fade">
              {lottieError2 && (
                <span className="text-white text-xs">No se pudo cargar la animación</span>
              )}
              {lottieData2 && <Lottie animationData={lottieData2} loop={true} style={{ width: 120, height: 120, background: "transparent" }} />}
            </div>
            <h3 ref={cardTitleRefs[0]} className="absolute top-[203px] left-[30px] text-white text-2xl font-semibold">Diseño UI/UX</h3>
            <p ref={cardTextRefs[0]} className="absolute top-[250px] left-[30px] text-white text-base font-normal max-w-[308px] leading-relaxed">
              Ofrecemos diseño de interfaces y experiencias de usuario enfocadas en la usabilidad, la estructura visual y la interacción efectiva.
            </p>
          </div>
        </div>
        <div ref={cardRefs[1]} className="w-[368px] h-[423px] bg-black rounded-[20px] relative">
          <div className="card-inner w-full h-full">
            <div className="absolute left-[30px] top-[60px] w-[120px] h-[120px] bg-transparent flex items-center justify-center lottie-fade">
              {lottieError && (
                <span className="text-white text-xs">No se pudo cargar la animación</span>
              )}
              {lottieData && <Lottie animationData={lottieData} loop={true} style={{ width: 120, height: 120, background: "transparent" }} />}
            </div>
            <h3 ref={cardTitleRefs[1]} className="absolute top-[203px] left-[30px] text-white text-2xl font-semibold">Diseño de entorno de Realidad Virtual</h3>
            <p ref={cardTextRefs[1]} className="absolute top-[290px] left-[30px] text-white text-base font-normal max-w-[308px] leading-relaxed">
              Diseñamos entornos de realidad virtual centrados en la navegación intuitiva, la inmersión visual y la interacción fluida.
            </p>
          </div>
        </div>
        <div ref={cardRefs[2]} className="w-[368px] h-[423px] bg-black rounded-[20px] relative">
          <div className="card-inner w-full h-full">
            <div className="absolute left-[30px] top-[60px] w-[120px] h-[120px] bg-transparent flex items-center justify-center lottie-fade">
              {lottieError1 && (
                <span className="text-white text-xs">No se pudo cargar la animación</span>
              )}
              {lottieData1 && <Lottie animationData={lottieData1} loop={true} style={{ width: 120, height: 120, background: "transparent" }} />}
            </div>
            <h3 ref={cardTitleRefs[2]} className="absolute top-[203px] left-[30px] text-white text-2xl font-semibold">Storytelling interactivo</h3>
            <p ref={cardTextRefs[2]} className="absolute top-[250px] left-[30px] text-white text-base font-normal max-w-[308px] leading-relaxed">
              Creamos sitios web interactivos y aplicaciones a medida, combinando tecnología de vanguardia y diseño atractivo.
            </p>
          </div>
        </div>
      </div>
      {/* Sección gris claro debajo del div blanco */}
      <div className="w-screen mt-[60px] relative left-1/2 -translate-x-1/2 box-border">
        {/* Div gris con titular */}
        <div
          style={{
            background: '#F7F7F7',
            width: '100%',
            height: '1800px',
            boxSizing: 'border-box',
            paddingTop: '180px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <div
            id="grey-section-title"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              fontSize: '48px',
              fontWeight: 600,
              color: '#111',
              lineHeight: 1.15,
              paddingLeft: '50px',
              paddingRight: '730px',
              textAlign: 'left'
            }}
          >
            <span id="proyectos">Proyectos que combinan diseño, interacción y<br />nuevos medios para crear</span>
            <span><GradientText>experiencias únicas</GradientText></span>
          </div>
          <p
            id="grey-section-text"
            style={{
              marginTop: '80px',
              fontSize: '24px',
              fontWeight: 400,
              textAlign: 'left',
              color: '#222',
              paddingLeft: '50px',
              maxWidth: '1200px',
              lineHeight: 1.4,
              paddingRight: '730px',
            }}
          >
            Desarrollamos proyectos que combinan diseño, interacción y tecnología para crear experiencias innovadoras. Desde interfaces digitales hasta realidad virtual y storytelling interactivo, exploramos nuevas formas de comunicar y conectar.
          </p>
          {/* Video sticky y animado con Framer Motion */}
          <div className="w-full h-[1200px] relative mt-[280px] flex items-center justify-center">
            <StickyAnimatedVideo />
          </div>
        </div>
        {/* Video superpuesto a la derecha */}
        <div id="expanding-video" style={{ position: 'absolute', top: '120px', right: 0, width: '659px', height: '760px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', pointerEvents: 'none', paddingRight: '50px', transition: 'width 1s, left 1s, border-radius 1s' }}>
          <video
            width="659"
            height="760"
            style={{ width: '100%', height: '100%', borderRadius: '18px', objectFit: 'cover' }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            onError={(e) => {
              console.error('Error loading video:', e);
              // Fallback: try to reload the video
              const video = e.target as HTMLVideoElement;
              setTimeout(() => {
                video.load();
              }, 1000);
            }}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onLoadedData={() => console.log('Video data loaded')}
          >
            <source src="/videos/8762941-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            {/* Fallback message */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '100%', 
              height: '100%', 
              backgroundColor: '#f0f0f0',
              borderRadius: '18px',
              color: '#666',
              fontSize: '14px'
            }}>
              Video no disponible
            </div>
          </video>
        </div>
      </div>
      {/* Espaciador de 100px entre el video sticky y el div negro (fondo blanco a todo lo ancho y centrado) */}
      <div className="relative w-full h-[100px] flex items-center justify-center">
        <div className="absolute left-1/2 top-0 w-screen h-full bg-white -translate-x-1/2 -z-10"></div>
      </div>
      {/* Div negro independiente debajo del video sticky (fondo negro a todo lo ancho y centrado, altura aumentada) */}
      <div className="relative w-full h-[1000px] flex items-center justify-center">
        <div className="absolute left-1/2 top-0 w-screen h-full bg-black -translate-x-1/2 -z-10"></div>
        <span
          ref={maskedTechRef}
          className="text-white z-10 block font-work-sans"
          style={{ position: 'absolute', top: '150px', left: 0, paddingLeft: '50px', textAlign: 'left', fontSize: '24px', overflow: 'hidden' }}
        >
          Nuestras tecnologías
        </span>
        {/* Titular Realidad Virtual */}
        <h2
          ref={vrTitleRef}
          className="text-white font-work-sans font-semibold block"
          style={{ position: 'absolute', top: '224px', left: 0, paddingLeft: '50px', textAlign: 'left', fontSize: '64px', margin: 0, overflow: 'hidden' }}
        >
          {BUTTONS[selectedIdx].text}
        </h2>

        {/* Texto descriptivo de Realidad Virtual */}
        <div
          style={{
            position: 'absolute',
            top: '348px',
            left: 0,
            paddingLeft: '50px',
            textAlign: 'left',
            width: '650px',
            zIndex: 10,
          }}
        >
          <p
            ref={vrDescRef}
            className="text-white font-work-sans block"
            style={{
              fontSize: '20px',
              margin: 0,
              fontWeight: 400,
              opacity: 0.7,
              maxWidth: '650px',
              overflow: 'hidden'
            }}
          >
            {selectedIdx === 1
              ? 'El uso de inteligencia artificial como apoyo en proyectos de diseño permite optimizar procesos creativos, agilizar la generación de ideas y facilitar la toma de decisiones mediante análisis precisos y sugerencias automatizadas, potenciando así la eficiencia sin reemplazar la visión humana del diseñador.'
              : selectedIdx === 2
                ? 'En diseño gráfico, el renderizado 3D permite crear imágenes realistas y detalladas que aportan profundidad y dinamismo a piezas visuales como carteles, empaques o contenido digital. Esta herramienta amplía las posibilidades creativas, ahorra tiempo y mejora la calidad visual sin depender de recursos físicos.'
                : selectedIdx === 3
                  ? 'La simulación inmersiva en diseño gráfico permite visualizar e interactuar con proyectos en entornos virtuales, mejorando la comprensión, la creatividad y la toma de decisiones antes de su ejecución final.'
                  : 'La realidad virtual (VR) revoluciona el diseño al proporcionar una experiencia inmersiva que permite a los diseñadores explorar, modificar y ajustar sus creaciones en tiempo real. Esta tecnología facilita la visualización precisa de productos y espacios a escala real, eliminando la necesidad de prototipos físicos y acelerando el proceso creativo.'}
          </p>
          <div id="tecnologia" style={{ marginTop: '30px', scrollMarginTop: '360px' }}>
            <VRVerticalButtons selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
          </div>
        </div>





      </div>
      {/* Fondo blanco debajo del div negro */}
      <div className="w-full h-[300px] bg-white"></div>
    </div>
  );
}

function StickyAnimatedVideo() {
  const ref = useRef(null);
  // const blackDivRef = useRef(null);
  // const isBlackDivInView = useInView(blackDivRef, { margin: '-100px 0px -100px 0px', amount: 0.1 });
  // Offset de scroll suave para evitar glitches
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end 80%"] });

  // SSR-safe max width
  const [maxExpandWidth, setMaxExpandWidth] = useState(1200);
  useEffect(() => {
    setMaxExpandWidth(Math.min(1800, window.innerWidth * 1.5));
  }, []);

  // Detectar si el video está expandido
  // const [isExpanded, setIsExpanded] = useState(false);
  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.onChange((v) => {
  //     setIsExpanded(v > 0.98);
  //   });
  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  // El tamaño del video siempre depende de scrollYProgress
  const animatedMaxWidth = useSpring(
    useTransform(scrollYProgress, [0, 1], [1200, maxExpandWidth]),
    { stiffness: 120, damping: 20 }
  );
  const maxWidth = animatedMaxWidth;

  // Estado para el video actual
  const [videoIdx, setVideoIdx] = useState(0);
  const videos: VideoItem[] = [
    { type: 'youtube' as const, id: 'bzyZXVZq5qE' },
    { type: 'youtube' as const, id: '058HDzBkycc' },
    { type: 'youtube' as const, id: 'zys1iv6BKcA' }
  ];
  const videoTitles = [
    "Diseño de entorno de Realidad Virtual para videojuego de Nintendo",
    "Motion Graphics para empresa tecnológica",
    "Motion Graphics para empresa de biotecnología"
  ];

  // Ciclo infinito de videos
  useEffect(() => {
    const timeout = setTimeout(() => setVideoIdx((prev) => (prev + 1) % videos.length), 9000);
    return () => clearTimeout(timeout);
  }, [videoIdx, videos.length]);

  // El video es sticky mientras no está expandido
  const videoContainerClass = "sticky top-32 flex justify-center items-center h-[700px] w-full z-10";

  return (
    <div className="relative w-full">
      <div
        ref={ref}
        className={videoContainerClass}
        style={{}}
      >
        <motion.div
          style={{ maxWidth, width: '100%', margin: '0 auto' }}
          className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-black relative"
        >
          <VideoContent videoIdx={videoIdx} videos={videos} videoTitles={videoTitles} />
        </motion.div>
      </div>


    </div>
  );
}

// VideoContent ahora es un componente puro, sin hooks
type VideoItem = 
  | { type: 'local'; src: string }
  | { type: 'youtube'; id: string };

interface VideoContentProps {
  videoIdx: number;
  videos: VideoItem[];
  videoTitles: string[];
}
function VideoContent({ videoIdx, videos, videoTitles }: VideoContentProps) {
  const currentVideo = videos[videoIdx];
  
  return (
    <>
      <AnimatePresence mode="wait">
        {currentVideo.type === 'local' ? (
          <motion.video
            key={videoIdx}
            src={currentVideo.src}
            className="w-full h-full object-cover block aspect-[16/9]"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ) : (
          <motion.div
            key={videoIdx}
            className="w-full h-full block aspect-[16/9] relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.id}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1&enablejsapi=1`}
              className="w-full h-full block aspect-[16/9]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onError={() => console.log(`Error loading video: ${currentVideo.id}`)}
            />
            {/* Fallback overlay for unavailable videos */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center p-4">
                <div className="text-sm opacity-75">Si el video no se muestra:</div>
                <a 
                  href={`https://www.youtube.com/watch?v=${currentVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm mt-2 block"
                >
                  Ver en YouTube ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={videoIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-0 bottom-[30px] p-6 text-white text-2xl font-semibold drop-shadow-lg select-none pointer-events-none"
        >
          {videoTitles[videoIdx]}
        </motion.div>
      </AnimatePresence>
    </>
  );
} 