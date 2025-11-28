import { metadata } from '../lib/seo-metadata';

import './globals.css';

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
