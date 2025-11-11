import { metadata } from '../lib/seo-metadata';
import { GlobalStyles } from '../style/global-styles';
import './globals.css';

import Footer from '@/components/body/Footer/Footer';

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
        <GlobalStyles />
        {children}
        <Footer />
      </body>
    </html>
  );
}
