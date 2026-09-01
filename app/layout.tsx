import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Béton Rouge — Architectures soviétiques',
  description:
    'Une archive visuelle des monuments, logements, usines et infrastructures du monde soviétique.',
  icons: {
    icon: [{ url: '/motherland-favicon-v2.svg', type: 'image/svg+xml' }],
    shortcut: '/motherland-favicon-v2.svg',
  },
  openGraph: {
    title: 'Béton Rouge — Architectures soviétiques',
    description:
      'Douze structures. Une traversée verticale dans les infrastructures, monuments et rêves construits du monde soviétique.',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Béton Rouge — Architectures du monde soviétique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Béton Rouge — Architectures soviétiques',
    description:
      'Une archive visuelle de douze architectures du monde soviétique.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
