import type { Metadata } from 'next';

const photos = [
  {
    src: '/images/mere-patrie/01.webp',
    alt: 'La statue de la Mère-Patrie photographiée en contre-plongée, épée dressée dans le ciel.',
  },
  {
    src: '/images/mere-patrie/02.webp',
    alt: 'La Mère-Patrie domine le kourgane Mamaïev sous un ciel clair.',
  },
  {
    src: '/images/mere-patrie/03.webp',
    alt: 'Vue rapprochée de la statue monumentale de Volgograd.',
  },
  {
    src: '/images/mere-patrie/04.webp',
    alt: 'Vue historique du kourgane Mamaïev et de la statue de la Mère-Patrie.',
  },
  {
    src: '/images/mere-patrie/05.webp',
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
      <section className="detail-gallery" aria-label="Galerie de la Mère-Patrie">
        {photos.map((photo, index) => (
          <figure className={`detail-photo detail-photo-${index + 1}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading={index === 0 ? 'eager' : 'lazy'} />
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
