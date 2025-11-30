import { metadata } from '../lib/seo-metadata';
import './globals.css';

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <link rel="icon" type="image/ico" href="/img/favicon.ico" />
      <body>
        {children}
      </body>
    </html>
  );
}
