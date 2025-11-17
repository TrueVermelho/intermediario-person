# next.config.ts

 - images: Configuração para permitir imagens de domínios externos

```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  // Configuração para permitir imagens de domínios externos
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

export default nextConfig;

```
