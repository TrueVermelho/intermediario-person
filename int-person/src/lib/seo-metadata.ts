import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Store-app',
    template: '%s | Store-app'
  },

  description: 'Store-app - The only storage solution you need.',

  keywords: [
    'store',
    'storage app',
    'store-app',
    'file manager',
    'upload app'
  ],

  authors: [
    {
      name: 'Truefenix',
      url: 'https://github.com/Truefenix'
    }
  ],

  creator: 'Store Truefenix',

  metadataBase: new URL('https://store-app.com'),

  openGraph: {
    title: 'Store-app',
    description: 'The only storage solution you need.',
    url: 'https://store-app.com',
    siteName: 'Store-app',
    images: [
      {
        url: '/og-image.png',   // ✔ Correto. Nunca use /public/nomedoarquivo
        width: 1200,
        height: 630,
        alt: 'Store-app'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Store-app',
    description: 'The only storage solution you need.',
    images: ['/og-image.png']
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  }
};
