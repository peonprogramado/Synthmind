"use client";
import React from "react";

export default function SoundOnClickClient() {
  React.useEffect(() => {
    const audio = new Audio("/sound/digital-button-click-pop-davies-aguirre-1-1-00-00.mp3");
    const handleClick = (event: MouseEvent) => {
      let el = event.target as HTMLElement | null;
      while (el) {
        if (el.tagName === "A" || el.tagName === "BUTTON") {
          audio.currentTime = 0;
          audio.play();
          break;
        }
        el = el.parentElement;
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return null;
}
