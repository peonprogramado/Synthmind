"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function MaskedHeading() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const split = SplitText.create(heading, {
      type: "lines",
      mask: "lines",
      linesClass: "line"
    });

    const lines = heading.querySelectorAll(".line");

    gsap.fromTo(
      lines,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out"
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h1
      id="inicio"
      ref={headingRef}
      data-split="heading"
      className="text-5xl md:text-6xl lg:text-8xl xl:text-[90px] font-semibold text-white font-work-sans leading-[1.2] md:leading-[1.3] lg:leading-[1.4] pb-4 mb-[50px] md:mb-[75px] lg:mb-[100px]"
    >
      Diseñando el mañana<br />con <span className="text-transparent bg-gradient-to-r from-[#BD4DCF] via-[#8C52E1] to-[#3D1177] bg-clip-text bg-[length:300%_100%] animate-gradient">creatividad</span>
    </h1>
  );
} 