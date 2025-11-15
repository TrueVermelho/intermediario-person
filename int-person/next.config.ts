import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "img-src 'self' data: blob: https://www.google.com https://maps.googleapis.com https://fonts.gstatic.com https://i.ytimg.com https://www.youtube.com",
  "script-src 'self' https://www.google.com https://www.gstatic.com https://www.youtube.com",
  "style-src 'self' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://maps.google.com",
  "connect-src 'self' https://maps.googleapis.com https://www.google.com https://www.youtube.com",
].join("; ");


const nextConfig: NextConfig = {
  /* ✔ Compilador do Next (styled-components)
  compiler: {
    styledComponents: true,
  },*/

  // ✔ Imagens externas permitidas
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "fonts.gstatic.com", // correto para fontes/imagens
      },
      {
        protocol: "https",
        hostname: "fonts.googleapis.com",
      },
    ],
  },

  // ✔ Headers de segurança
  async headers() {
    return [
      {
        source: "/(.*)", // Aplica em todas as rotas
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp,
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
