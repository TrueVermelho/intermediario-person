# Configurando o Metadata e ThemeProviderWrapper
## 1. Metadata

 - Separar os dados do SEO na função metadata, para deixar limpo _layout.tsx_
### Arquivo em: src/lib/seo-metadata.ts

```tsx
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
```
## 2. ThemeProviderWrapper

 - Separar ThemeProvider que dá erro se estiver no mesmo espaço global de Metadata.
 - ThemeProvider serve para poder importar theme no html.
### Arquivo em: src/components/layout/ThemeProviderWrapper.tsx

```tsx
// src/components/layout/ThemeProviderWrapper.tsx
'use client';
  
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/theme';
import { GlobalStyles } from '../../style/global-styles';

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
```
## 3. layout.tsx geral final

```tsx
import ThemeProviderWrapper from '../components/ThemeProviderWrapper';
import { GlobalStyles } from '../style/global-styles';
import { metadata } from '../lib/seo-metadata';

export { metadata };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <link rel="icon" type="image/png" href="/favicon.png" />
      <body>
        <ThemeProviderWrapper>
          <GlobalStyles />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
```
