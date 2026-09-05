import type { Metadata } from 'next';

const photos = [
  {
    src: '/images/mere-patrie/01.webp',
    width: 1343,
    height: 2048,
    alt: 'La statue de la Mère-Patrie photographiée en contre-plongée, épée dressée dans le ciel.',
  },
  {
    src: '/images/mere-patrie/02.webp',
    width: 1800,
    height: 1200,
    alt: 'La Mère-Patrie domine le kourgane Mamaïev sous un ciel clair.',
  },
  {
    src: '/images/mere-patrie/03.webp',
    width: 799,
    height: 534,
    alt: 'Vue rapprochée de la statue monumentale de Volgograd.',
  },
  {
    src: '/images/mere-patrie/04.webp',
    width: 960,
    height: 920,
    alt: 'Vue historique du kourgane Mamaïev et de la statue de la Mère-Patrie.',
  },
  {
    src: '/images/mere-patrie/05.webp',
    width: 1599,
    height: 1041,
    alt: 'Vue panoramique de la Mère-Patrie et de l’église de Tous-les-Saints.',
  },
];

export const metadata: Metadata = {
  title: 'La Mère-Patrie appelle ! — Béton Rouge',
  description: 'Galerie photographique consacrée à La Mère-Patrie appelle ! à Volgograd.',
  openGraph: {
    title: 'La Mère-Patrie appelle ! — Béton Rouge',
    description: 'Galerie photographique consacrée à La Mère-Patrie appelle ! à Volgograd.',
    images: ['/images/mere-patrie/01.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Mère-Patrie appelle ! — Béton Rouge',
    description: 'Galerie photographique consacrée à La Mère-Patrie appelle ! à Volgograd.',
    images: ['/images/mere-patrie/01.webp'],
  },
};

export default function MotherlandGallery() {
  return (
    <main className="detail-page">
      <header className="detail-header">
        <a href="/#mere-patrie">← Retour à l’archive</a>
        <div>
          <p className="eyebrow">Galerie · Volgograd</p>
          <h1>La Mère-Patrie appelle&nbsp;!</h1>
        </div>
      </header>
      <section className="detail-gallery" aria-label="Galerie de la Mère-Patrie">
        {photos.map((photo, index) => (
          <figure className={`detail-photo detail-photo-${index + 1}`} key={photo.src}>
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
          </figure>
        ))}
      </section>
      <a className="detail-return" href="/#mere-patrie">
        <span>Retour à l’archive</span>
        <span aria-hidden="true">←</span>
      </a>
    </main>
  );
}
