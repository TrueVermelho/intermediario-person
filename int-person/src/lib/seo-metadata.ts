import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Store-app',
  description: 'Store-app - The only storage solution you need.',
  keywords: ['store', 'storage app', 'store-app', 'file manager', 'upload app'],
  authors: [
    {
      name: 'Truefenix',
      url: 'https://github.com/Truefenix', // Link do GitHub
    },
  ],
  creator: 'Store Truefenix',
  openGraph: {
    title: 'Store-app',
    description: 'The only storage solution you need.',
    url: 'https://store-app.com', // substitua com a URL real do seu projeto
    siteName: 'Store-app',
    images: [
      {
        url: '/public/og-image.png', // imagem para quando for compartilhado
        width: 1200,
        height: 630,
        alt: 'Store-app',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  metadataBase: new URL('https://store-app.com'), // substitua com a base real
};
