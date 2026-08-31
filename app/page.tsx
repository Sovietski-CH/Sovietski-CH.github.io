type Structure = {
  id: string;
  name: string;
  category: string;
  place: string;
  year: string;
  image: string;
  alt: string;
  description: string;
  caption: string;
  author: string;
  license: string;
  source: string;
  position?: string;
};

const structures: Structure[] = [
  {
    id: 'duga',
    name: 'Radar Duga',
    category: 'Communications',
    place: 'Tchernobyl-2, Ukraine',
    year: '1976',
    image: '/images/duga.jpg',
    alt: 'Les deux immenses antennes métalliques du radar Duga surgissent derrière les arbres.',
    description:
      'Une muraille d’acier dressée pour détecter les lancements de missiles au-delà de l’horizon. Haute d’environ 150 mètres, sa trame transforme l’infrastructure militaire en paysage presque abstrait.',
    caption: 'Vue générale des deux antennes du complexe Duga, photographiées en 2014.',
    author: 'Ingmar Runge',
    license: 'CC BY 3.0',
    source:
      'https://commons.wikimedia.org/wiki/File:DUGA_Radar_Array_near_Chernobyl,_Ukraine_2014.jpg',
  },
  {
    id: 'kaliningrad',
    name: 'Maison des Soviets',
    category: 'Administration',
    place: 'Kaliningrad, Russie',
    year: 'années 1970',
    image: '/images/house-soviets.jpg',
    alt: 'La masse brutaliste de la Maison des Soviets de Kaliningrad vue derrière la ville.',
    description:
      'Conçue comme un nouveau centre administratif, cette masse verticale est restée inachevée. Ses fenêtres régulières et ses deux tours accolées lui ont donné l’allure d’un visage de béton.',
    caption: 'La Maison des Soviets encore debout à Kaliningrad, en 2016.',
    author: 'Dave Collier',
    license: 'CC BY-SA 2.0',
    source:
      'https://commons.wikimedia.org/wiki/File:House_of_Soviets,_Kaliningrad_(26895536276).jpg',
  },
  {
    id: 'tbilissi',
    name: 'Ministère des Routes',
    category: 'Administration',
    place: 'Tbilissi, Géorgie',
    year: '1975',
    image: '/images/georgia-hq.jpg',
    alt: 'Le siège de la Banque de Géorgie formé de volumes de béton empilés et en porte-à-faux.',
    description:
      'Les volumes s’empilent comme des ponts dans une forêt. George Chakhava et Zurab Jalaghania ont libéré le sol en suspendant les bureaux au-dessus du relief, une architecture où la circulation devient la forme.',
    caption: 'L’ancien ministère de la Construction routière, devenu siège de la Banque de Géorgie.',
    author: 'TheadoreTwombly',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Bank-of-georgia-hq.jpg',
    position: 'center 45%',
  },
  {
    id: 'kiev',
    name: 'Crématorium de Kyiv',
    category: 'Architecture funéraire',
    place: 'Kyiv, Ukraine',
    year: '1968—1981',
    image: '/images/crematorium.jpg',
    alt: 'Les coques blanches courbes du crématorium de Kyiv au crépuscule.',
    description:
      'Des coques de béton se déploient au-dessus du parc de la Mémoire. L’ensemble refuse le monument frontal : il organise une procession de courbes, de terrasses et de silences.',
    caption: 'Les volumes sculpturaux du crématorium de Kyiv à la tombée du jour.',
    author: 'EugeneLoza',
    license: 'CC BY 3.0',
    source:
      'https://commons.wikimedia.org/wiki/File:%D0%9A%D1%80%D0%B5%D0%BC%D0%B0%D1%82%D0%BE%D1%80%D1%96%D0%B9_%D1%83%D0%B2%D0%B5%D1%87%D0%B5%D1%80%D1%96_-_panoramio.jpg',
  },
  {
    id: 'moscou-universite',
    name: 'Université Lomonossov',
    category: 'Éducation',
    place: 'Moscou, Russie',
    year: '1953',
    image: '/images/msu.jpg',
    alt: 'Le gratte-ciel stalinien de l’Université d’État de Moscou se détache dans le ciel.',
    description:
      'La plus haute des « Sept Sœurs » assemble campus, ville verticale et symbole d’État. La silhouette de Lev Roudnev transpose le gratte-ciel américain dans un langage monumental soviétique.',
    caption: 'Le bâtiment principal de l’Université d’État de Moscou sur la colline des Moineaux.',
    author: 'Dmitry A. Mottl',
    license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Moscow_State_University.jpg',
  },
  {
    id: 'pripiat',
    name: 'Tour résidentielle',
    category: 'Habitat collectif',
    place: 'Pripiat, Ukraine',
    year: 'années 1970',
    image: '/images/pripyat.jpg',
    alt: 'Une tour résidentielle abandonnée de seize étages à Pripiat, envahie par les arbres.',
    description:
      'Pripiat fut planifiée pour les travailleurs de la centrale de Tchernobyl. La tour de seize étages condense l’ambition quotidienne de la ville nouvelle : logement, services et nature organisés à grande échelle.',
    caption: 'Un immeuble résidentiel de seize étages à Pripiat, photographié en 2019.',
    author: 'Michal Bělka',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Pripjat_2019_33.jpg',
  },
  {
    id: 'dniprohes',
    name: 'Barrage DniproHES',
    category: 'Énergie',
    place: 'Zaporijjia, Ukraine',
    year: '1932',
    image: '/images/dniprohes.jpg',
    alt: 'Le grand barrage hydroélectrique du Dniepr dessine une courbe sur le fleuve.',
    description:
      'Pièce maîtresse de l’électrification soviétique, le barrage courbe le fleuve et organise une façade industrielle longue de près d’un kilomètre. Ici, la production d’énergie devient image de la modernité.',
    caption: 'La centrale hydroélectrique du Dniepr et sa longue courbe de béton.',
    author: 'George Chernilevsky',
    license: 'CC BY-SA 4.0',
    source:
      'https://commons.wikimedia.org/wiki/File:Dnieper_Hydroelectric_Station_2021_G2.jpg',
  },
  {
    id: 'magnitogorsk',
    name: 'Combinat de Magnitogorsk',
    category: 'Industrie lourde',
    place: 'Magnitogorsk, Russie',
    year: '1932',
    image: '/images/magnitogorsk.jpg',
    alt: 'Le vaste complexe sidérurgique de Magnitogorsk s’étend sous un ciel chargé.',
    description:
      'Cheminées, hauts-fourneaux, conduites et voies ferrées composent une ville-machine. Le combinat sidérurgique fut le noyau d’une urbanisation entière fondée sur la production d’acier.',
    caption: 'Vue panoramique du combinat sidérurgique de Magnitogorsk.',
    author: 'kishjar?',
    license: 'CC BY 4.0',
    source:
      'https://commons.wikimedia.org/wiki/File:Magnitogorsk_Iron_and_Steel_Works.jpg',
  },
  {
    id: 'mere-patrie',
    name: 'La Mère-Patrie appelle !',
    category: 'Mémorial',
    place: 'Volgograd, Russie',
    year: '1967',
    image: '/images/motherland.jpg',
    alt: 'La statue monumentale de la Mère-Patrie brandit une épée au sommet du kourgane Mamaïev.',
    description:
      'La figure d’Evgueni Voutchetitch avance, épée levée, au sommet du kourgane Mamaïev. Son mouvement dramatique transforme l’horizon de Volgograd en mémorial de la bataille de Stalingrad.',
    caption: 'La statue pendant sa restauration, au sommet du kourgane Mamaïev.',
    author: 'Duma.gov.ru',
    license: 'CC BY 4.0',
    source:
      'https://commons.wikimedia.org/wiki/File:The_Motherland_Calls,_2019.jpg',
    position: 'center 28%',
  },
  {
    id: 'espace',
    name: 'Conquérants de l’Espace',
    category: 'Monument scientifique',
    place: 'Moscou, Russie',
    year: '1964',
    image: '/images/space.jpg',
    alt: 'Le Monument aux Conquérants de l’Espace s’élève comme une traînée de fusée en titane.',
    description:
      'Une fusée devient une flèche de titane de 107 mètres. Le monument fige la trajectoire du décollage et donne à la conquête spatiale une présence urbaine, visible depuis tout le quartier de VDNKh.',
    caption: 'La parabole revêtue de titane du Monument aux Conquérants de l’Espace.',
    author: 'Benjamín Núñez González',
    license: 'CC BY-SA 4.0',
    source:
      'https://commons.wikimedia.org/wiki/File:Monument_to_the_Conquerors_of_Space,_Moscow,_Russia,_2016_10.jpg',
    position: 'center 30%',
  },
  {
    id: 'druzhba',
    name: 'Sanatorium Druzhba',
    category: 'Architecture de loisirs',
    place: 'Kourpaty, Crimée',
    year: '1985',
    image: '/images/druzhba.jpg',
    alt: 'Le sanatorium Druzhba, circulaire et posé sur de grands appuis, domine le paysage boisé.',
    description:
      'Faute d’espace au sol, Igor Vassilevski pose un anneau habitable sur trois appuis massifs. Les chambres rayonnent autour d’un cœur collectif, entre machine spatiale et belvédère maritime.',
    caption: 'Le volume circulaire du sanatorium Druzhba au-dessus de Kourpaty.',
    author: 'Natalie Vichy',
    license: 'CC BY-SA 4.0',
    source:
      'https://commons.wikimedia.org/wiki/File:%D0%9A%D1%83%D1%80%D0%BF%D0%B0%D1%82%D1%8B.jpg',
    position: 'center 38%',
  },
  {
    id: 'buzludzha',
    name: 'Monument de Bouzloudja',
    category: 'Orbites soviétiques',
    place: 'Monts Balkans, Bulgarie',
    year: '1981',
    image: '/images/buzludzha.jpg',
    alt: 'Le monument circulaire de Bouzloudja apparaît au loin sur une crête montagneuse.',
    description:
      'Hors de l’URSS mais dans son orbite politique, la maison-mémorial du Parti communiste bulgare ferme le parcours. Posée sur une crête, sa coupole semble avoir atterri dans le paysage.',
    caption: 'Le monument de Bouzloudja vu depuis le pic de Chipka.',
    author: 'Ivano Giambattista',
    license: 'CC0',
    source:
      'https://commons.wikimedia.org/wiki/File:The_Buzludzha_seen_from_Shipka_peak.jpg',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Retour au début">
          БЕТОН <span>ROUGE</span>
        </a>
        <p className="header-note">Archive visuelle · 01—12</p>
      </header>

      <nav className="progress-rail" aria-label="Parcourir les structures">
        {structures.map((structure, index) => (
          <a key={structure.id} href={`#${structure.id}`} title={structure.name}>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </a>
        ))}
      </nav>

      <section id="top" className="hero">
        <img
          className="hero-image"
          src="/images/duga.jpg"
          alt="Les antennes métalliques du radar Duga surgissent derrière les arbres."
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Architecture soviétique &amp; territoires satellites</p>
          <h1>
            Béton
            <br />
            <em>rouge</em>
          </h1>
          <p className="dek">
            Douze structures. Une traversée verticale dans les infrastructures,
            les monuments et les rêves construits du XX<sup>e</sup> siècle.
          </p>
          <a className="scroll-cue" href="#duga">
            <span>Commencer l’archive</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="hero-credit">Duga · Ingmar Runge · CC BY 3.0</p>
      </section>

      <section className="manifesto" aria-label="Introduction">
        <p>Habiter</p>
        <p>Produire</p>
        <p>Célébrer</p>
        <p>Surveiller</p>
      </section>

      {structures.map((structure, index) => {
        const number = String(index + 1).padStart(2, '0');
        const isLight = index % 3 === 1;
        const isReverse = index % 2 === 1;
        return (
          <section
            id={structure.id}
            key={structure.id}
            className={`chapter ${isLight ? 'chapter-light' : 'chapter-dark'} ${
              isReverse ? 'chapter-reverse' : ''
            }`}
          >
            <div className="chapter-grid">
              <div className="chapter-index" aria-hidden="true">
                {number}
              </div>
              <div className="chapter-copy">
                <p className="category">
                  {structure.category} / {structure.place.split(',').at(-1)?.trim()}
                </p>
                <h2>{structure.name}</h2>
                <p className="location">
                  {structure.place} · {structure.year}
                </p>
                <p className="body-copy">{structure.description}</p>
              </div>
              <figure className="chapter-figure">
                <div className="image-frame">
                  <img
                    src={structure.image}
                    alt={structure.alt}
                    style={{ objectPosition: structure.position ?? 'center' }}
                  />
                  <span className="image-number" aria-hidden="true">
                    {number}
                  </span>
                </div>
                <figcaption>
                  <span>{structure.caption}</span>
                  <a href={structure.source} target="_blank" rel="noreferrer">
                    {structure.author} · {structure.license} ↗
                  </a>
                </figcaption>
              </figure>
            </div>
          </section>
        );
      })}

      <section className="closing">
        <div className="closing-collage" aria-hidden="true">
          <img src="/images/house-soviets.jpg" alt="" />
          <img src="/images/dniprohes.jpg" alt="" />
          <img src="/images/motherland.jpg" alt="" />
          <img src="/images/druzhba.jpg" alt="" />
        </div>
        <div className="closing-copy">
          <p className="eyebrow">Fin de la traversée</p>
          <h2>Le futur est devenu archive.</h2>
          <a className="scroll-cue" href="#top">
            <span>Revenir au début</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </section>

      <footer>
        <p>
          Sélection éditoriale consacrée aux architectures de l’URSS et de sa sphère
          d’influence. Les dates désignent l’achèvement, la mise en service ou la période
          principale de construction.
        </p>
        <p>
          Photographies issues de Wikimedia Commons. Auteur et licence sont indiqués sous
          chaque image ; le lien ouvre la fiche source complète.
        </p>
        <p className="footer-mark">БЕТОН ROUGE · 2026</p>
      </footer>
    </main>
  );
}
