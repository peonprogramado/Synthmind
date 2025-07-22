import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        // Política CSP optimizada para YouTube embeds en Vercel
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "frame-src https://www.youtube-nocookie.com https://www.youtube.com https://youtube.com",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' https://i.ytimg.com https://img.youtube.com data: blob:",
              "connect-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com",
              "media-src 'self' data: blob: * https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://osrsbb69ubtntroe.public.blob.vercel-storage.com",
              "font-src 'self' data:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'"
            ].join("; ")
          },
        ],
      },
      {
        // Headers específicos para archivos de video
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          },
          {
            key: "Content-Type",
            value: "video/mp4"
          }
        ],
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
