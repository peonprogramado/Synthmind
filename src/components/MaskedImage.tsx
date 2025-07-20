"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MaskedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function MaskedImage({ src, alt, className = "" }: MaskedImageProps) {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const imageContainer = imageRef.current;
    if (!imageContainer) return;

    // Animación inicial de entrada
    gsap.fromTo(
      imageContainer,
      {
        yPercent: 50,
        opacity: 0,
        scale: 0.95
      },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.8,
        ease: "power2.out"
      }
    );

    // Animación de scroll para expandir la imagen
    gsap.to(imageContainer, {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: imageContainer,
        start: "top 80%",
        end: "top 20%",
        scrub: 1
      }
    });

    // Animación del contenido de la imagen
    gsap.to(imageContainer.querySelector("img"), {
      borderRadius: 0,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: imageContainer,
        start: "top 80%",
        end: "top 20%",
        scrub: 1
      }
    });

  }, []);

  return (
    <div
      ref={imageRef}
      className={`w-[1338px] h-[680px] bg-gray-800 rounded-[22px] overflow-hidden ${className}`}
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-[22px]"
        fill
        sizes="(max-width: 1338px) 100vw, 1338px"
        priority
      />
    </div>
  );
} 