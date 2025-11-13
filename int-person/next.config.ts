import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "img-src 'self' data: blob:",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "connect-src 'self'",
].join("; ");

const nextConfig: NextConfig = {
  // ✔ Compilador do Next (styled-components)
  compiler: {
    styledComponents: true,
  },

  // ✔ Imagens externas permitidas
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
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
            value: "DENY",
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
