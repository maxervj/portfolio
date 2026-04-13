import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Merveille",
  lastName: "Makosi",
  name: `Merveille Makosi`,
  role: "Étudiants BTS SIO Option SLAM",
  avatar: "/images/merveille.jpg",
  email: "mpotomerveille@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Fançais", "Anglais"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>S'abonner à la newsletter de {person.firstName}</>,
  description: <>Ma newsletter hebdomadaire sur la créativité et l'ingénierie</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/maxervj",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nathan-makosi-mpoto-a476b3268/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Site portfolio présentant mon travail en tant que ${person.role}`,
  headline: <>Construire des ponts entre le design et le code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    Je suis Merveille Makosi, étudiant en BTS SIO Option SLAM, passionné par le développement <br /> de solutions logicielles et d'applications innovantes.
</>
  ),
};

const about: About = {
  path: "/",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Découvrez ${person.name}, ${person.role} basé à ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Bonjour, je suis Merveille Makosi, étudiant passionné spécialisé dans les solutions
        logicielles et les applications. Je me nourris de la transformation de problèmes complexes
        en designs élégants et intuitifs. Avec un souci du détail et un engagement envers
        l'excellence, je vise à créer des expériences numériques impactantes qui résonnent avec
        les utilisateurs et stimulent l'innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expériences Professionnelles",
    experiences: [
      {
        company: "Royaume des Plaques & Clés",
        timeframe: " June 2025 - July 2025",
        role: "Stage Développeur Web",
        achievements: [
          <>
           Création d'un site web dynamique pour un client local, augmentant la visibilité en ligne.
          </>,
          <>
            Travail en solo pour développer des fonctionnalités interactives, améliorant l'expérience utilisateur.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "LNJ École de de conduite",
        timeframe: "Janvier 2026-Mars 2026",
        role: "Développeur Web Stagiaire",
        achievements: [
          <>
            Création d'une site web interactif pour une auto-école locale, augmentant les inscriptions en ligne  et  hébergeant le site web.
          </>,
          <>
           Réalisé en solo, intégrant des fonctionnalités de réservation en ligne et de gestion des cours.
          </>,
        ],
        images: [
            {
                src: "/images/projects/project-01/lnj-Logo.webp",
                alt: "Once UI Project",
                width: 16,
                height: 9,
            },
        ],
      },
      {
        company: "Auto-école des 3 frontières",
        timeframe: "Avril 2026-Juin 2026",
        role: "Développeur Web Stagiaire",
        achievements: [
          <>
            Développement d'un site web pour une auto-école locale, améliorant la gestion des réservations et la communication avec les clients.
          </>,
          <>
            Projet réalisé en solo, intégrant des fonctionnalités de réservation en ligne et de gestion des cours.
          </>,
        ],
        images: [],
      },
      {
        company: "Conventio",
        timeframe: "2026",
        role: "Développeur Web Stagiaire",
        achievements: [
          <>
            Développement d'une application web de gestion de conventions intégrant l'API Yousign pour la signature électronique des documents.
          </>,
          <>
            Mise en place du flux de signature : génération des documents, envoi aux signataires et suivi du statut en temps réel via les webhooks Yousign.
          </>,
          <>
            Intégration de Gotenberg pour la conversion et la génération de documents PDF à partir de templates HTML, alimentant directement le flux de signature.
          </>,
          <>
            Projet réalisé en solo, de la conception de l'architecture à la mise en production.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Études",
    institutions: [
      {
        name: "Lycée Gabriel Fauré",
        description: <>BTS SIO Option Slam</>,
      },
      {
        name: "Lycée Charles Poncet ",
        description: <>BTS Ciel option B</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences techniques",
    skills: [
      {
        title: "Symfony",
        description: (
          <>Réalisations d'applications avec le framework Symfony</>
        ),
        tags: [
          {
            name: "Symfony",
            icon: "Symfony",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/gallery/Symfony-Image.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/vignette-symfony-1-1024x614.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Node.js",
        description: (
          <>Création de serveurs et d'API Rest avec Node.js, Express.js et typeScript</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express.js",
            icon: "express",
          },
            { name: "TypeScript",
            icon: "TypeScript",}
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
            {
                src: "/images/gallery/node.jpg",
                alt: "Project image",
                width: 16,
                height: 9,
            },
            {
                src: "/images/gallery/expressjs.png",
                alt: "Project image",
                width: 16,
                height: 9,
            },
            {
                src: "/images/gallery/typescript.png",
                alt: "Project image",
                width: 16,
                height: 9,
            }
        ],
      },
      {
        title: "C#",
        description: (
          <>Création d'applications avec le framework .NET</>
        ),
        tags: [
          {
            name: ".NET",
            icon: "dotnet",
          },

        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/dotnet.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const certifications: Array<{
  title: string;
  issuer: string;
  status: "en-cours" | "obtenu";
  expectedDate?: string;
  obtainedDate?: string;
  description: string;
  icon: string;
  color: string;
}> = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    status: "en-cours",
    expectedDate: "2026",
    description: "Fondamentaux de la cybersécurité : menaces, vulnérabilités et protection des réseaux.",
    icon: "rocket",
    color: "brand",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    status: "en-cours",
    expectedDate: "2026",
    description: "Bases de la programmation Python : syntaxe, structures de données et algorithmes.",
    icon: "document",
    color: "accent",
  },
];

const blog: Blog = {
  path: "/certif",
  label: "Certifications",
  title: "Certifications et formations",
  description: `Les certifications et formations de ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /certif route
};

const work: Work = {
  path: "/work",
  label: "Projets Pro",
  title: `Projets Professionnels – ${person.name}`,
  description: `Projets professionnels réalisés par ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie photos – ${person.name}`,
  description: `Collection de photos par ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, certifications };
