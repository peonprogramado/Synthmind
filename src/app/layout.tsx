import React from "react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import SoundOnClickClient from "@/components/SoundOnClickClient";


const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SynthMind",
  description: "SynthMind - AI-powered design and development",
  icons: {
    icon: "/synthmind-icon-2025.png",
    apple: "/synthmind-icon-2025.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SynthMind Favicon - Cache Busted */}
        <link rel="icon" href="/synthmind-icon-2025.png?v=20250723" type="image/png" />
        <link rel="apple-touch-icon" href="/synthmind-icon-2025.png?v=20250723" />
        <link rel="shortcut icon" href="/synthmind-icon-2025.png?v=20250723" type="image/png" />
        {/* Preconnect para YouTube - acelera la carga */}
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        {/* Animate.css para animaciones de scroll */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      <body
        className={`${workSans.variable} antialiased`}
      >
        <SoundOnClickClient />
        {children}
      </body>
    </html>
  );
}
