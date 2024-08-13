import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elo7 Developer Challenge',
  description: 'Elo7 Developer Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
