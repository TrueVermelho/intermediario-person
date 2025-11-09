import ThemeProviderWrapper from '../components/layout/ThemeProviderWrapper';
import { metadata } from '../lib/seo-metadata';
import { GlobalStyles } from '../style/global-styles';

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
