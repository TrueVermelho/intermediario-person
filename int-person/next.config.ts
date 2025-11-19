import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "img-src 'self' data: blob: https://*.google.com https://*.gstatic.com https://i.ytimg.com https://*.youtube.com",
  "script-src 'self' 'unsafe-inline' https://*.google.com https://*.gstatic.com https://*.youtube.com",
  "style-src 'self' 'unsafe-inline' https://*.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://*.google.com https://maps.google.com",
  "connect-src 'self' https://*.googleapis.com https://*.google.com https://*.youtube.com https://securetoken.googleapis.com https://identitytoolkit.googleapis.com",
].join("; ");

const nextConfig: NextConfig = {
  // compiler: {styledComponents: true,},
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "fonts.gstatic.com" },
      { protocol: "https", hostname: "fonts.googleapis.com" },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
