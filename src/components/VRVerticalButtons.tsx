// Botones verticales personalizados para la sección de Realidad Virtual
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const BUTTONS = [
    {
        text: "Realidad Virtual",
        img: "/images/pexels-artempodrez-7773980.jpg",
    },
    {
        text: "Apoyo con IA",
        img: "/images/pexels-michelangelo-buonarroti-8728382.jpg",
    },
    {
        text: "Renderizado 3D",
        img: "/images/pexels-olenkabohovyk-1772123.jpg",
    },
    {
        text: "Simulación inmersiva",
        img: "/images/pexels-myleskuo-2399840.jpg",
    },
];




interface VRVerticalButtonsProps {
    selectedIdx: number;
    setSelectedIdx: (idx: number) => void;
}

export default function VRVerticalButtons({ selectedIdx, setSelectedIdx }: VRVerticalButtonsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const maskRef = useRef<HTMLDivElement | null>(null);
    // const imgRef = useRef<HTMLImageElement | null>(null);


    // Animación masked reveal horizontal al hacer scroll O cambio de imagen
    useEffect(() => {
        if (!maskRef.current) return;
        gsap.set(maskRef.current, { width: 0 });
        const tl = gsap.timeline();
        tl.to(maskRef.current, { width: '563px', duration: 1.2, ease: 'power2.out' });
        return () => {
            tl.kill();
        };
    }, [selectedIdx]);

    useEffect(() => {
        const btns = btnRefs.current;
        gsap.set(btns, { y: 36 });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 82%',
                end: 'bottom 10%',
                toggleActions: 'play reverse play reverse',
                // markers: true, // para debug visual
            }
        });
        tl.to(btns, {
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
        });
        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);


    return (
        <div ref={containerRef} className="flex flex-col gap-2 mt-[10px] relative" style={{ minHeight: BUTTONS.length * 60 + (BUTTONS.length - 1) * 8 }}>

            {BUTTONS.map((btn, idx) => (
                <button
                    key={btn.text}
                    ref={el => { btnRefs.current[idx] = el; }}
                    className="group relative flex items-center h-[60px] w-full rounded-[14px] border border-white"
                    style={{
                        opacity: selectedIdx === idx ? 1 : 0.3,
                        transition: 'opacity 0.3s',
                        background: 'transparent',
                        overflow: 'hidden',
                    }}
                    onClick={() => setSelectedIdx(idx)}
                >
                    {/* Gradiente animado al hacer hover */}
                    <div
                        className="absolute inset-0 pointer-events-none rounded-[14px]"
                        style={{
                            opacity: 0,
                            transition: 'opacity 0.4s',
                        }}
                    />
                    {/* Imagen a la izquierda */}
                    <img
                        src={btn.img}
                        alt=""
                        className="ml-2"
                        style={{ width: 70, height: 50, objectFit: 'cover', borderRadius: 8, marginRight: 10 }}
                    />
                    {/* Texto a la derecha de la imagen */}
                    <span className="text-white font-work-sans text-base font-medium" style={{ marginLeft: 10 }}>
                        {btn.text}
                    </span>
                    <style>{`
            button.group:hover {
              opacity: 1 !important;
            }
            button.group:hover > div {
              opacity: 0.3 !important;
              animation: gradientMove 3s linear infinite;
            }
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
            button.group > div {
              background: linear-gradient(90deg, #3D1177 0%, #8C52E1 25%, #4F8DFF 50%, #8C52E1 75%, #3D1177 100%);
              background-size: 400% 100%;
              background-position: 0% 50%;
              transition: opacity 0.4s;
            }
          `}</style>
                </button>
            ))}
            {/* Imagen decorativa vertical a la derecha con animación masked (reveal horizontal) */}
            <div
                ref={maskRef}
                style={{
                    position: 'absolute',
                    top: '-450px',
                    left: 'calc(100% + 150px)',
                    width: 0,
                    height: '783px',
                    overflow: 'hidden',
                    borderRadius: 30,
                    zIndex: 10,
                    pointerEvents: 'none',
                }}
            >
                <img
                    src={BUTTONS[selectedIdx].img}
                    alt="Decoración VR"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
            </div>



        </div>
    );
}
