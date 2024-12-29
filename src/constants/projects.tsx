import { LinkIcon, LucideIcon } from "lucide-react";
import techIcons from "./techs";


interface Project {
  name: string;
  detail: string;
  description: string;
  url: string;
  links: Link[];
  techGroups: TechGroup[];
  images: ProjectImage[];
}

interface Link {
  label: string;
  icon: LucideIcon;
  url: string;
}

interface TechGroup {
  label: string;
  techs: Tech[];
}

interface Tech {
  label: string;
  image: string; // URL ou path para o ícone da tecnologia
}

interface ProjectImage {
  src: string; // URL ou path da imagem
  alt: string; // Descrição alternativa para acessibilidade
  label: string; // Label da imagem
}

export default Project;

export const projects: Project[] = [
  {
    name: "obon",
    detail: "I developed",
    description:
      "I developed a SaaS platform for event organizers with features like event creation, attendee management, ticket sales, and a customizable interface for users to register, view tickets, and track event details.",
    url: "obon",
    links: [
      {
        label: "Repositório Front-End",
        icon: LinkIcon,
        url: "https://obon.vercel.app",
      },
      {
        label: "Repositório Back-End",
        icon: LinkIcon,
        url: "https://obon.vercel.app",
      },
      {
        label: "Link da aplicação",
        icon: LinkIcon,
        url: "https://obon.vercel.app",
      },
    ],
    techGroups: [
      {
        label: "Frontend",
        techs: [
          {
            label: "React",
            image: techIcons.ReactFramework,
          },
          {
            label: "Angular",
            image: techIcons.Angular,
          },
          {
            label: "React",
            image: techIcons.AWSLogo,
          },
          {
            label: "React",
            image: techIcons.Bootstrap,
          },
          {
            label: "React",
            image: techIcons.MySQL,
          },
          {
            label: "React",
            image: techIcons.PostgreSQLLight,
          },
          {
            label: "React",
            image: techIcons.TailwindCSSIcon,
          },
          {
            label: "React",
            image: techIcons.NodeJsIcon,
          },
        ],
      },
      {
        label: "Backend",
        techs: [
          {
            label: "React",
            image: techIcons.ReactFramework,
          },
          {
            label: "Angular",
            image: techIcons.Angular,
          },
          {
            label: "React",
            image: techIcons.AWSLogo,
          },
          {
            label: "React",
            image: techIcons.Bootstrap,
          },
          {
            label: "React",
            image: techIcons.MySQL,
          },
          {
            label: "React",
            image: techIcons.PostgreSQLLight,
          },
          {
            label: "React",
            image: techIcons.TailwindCSSIcon,
          },
          {
            label: "React",
            image: techIcons.NodeJsIcon,
          },
        ],
      },
      {
        label: "Backend",
        techs: [
          {
            label: "React",
            image: techIcons.ReactFramework,
          },
          {
            label: "Angular",
            image: techIcons.Angular,
          },
          {
            label: "React",
            image: techIcons.AWSLogo,
          },
          {
            label: "React",
            image: techIcons.Bootstrap,
          },
          {
            label: "React",
            image: techIcons.MySQL,
          },
          {
            label: "React",
            image: techIcons.PostgreSQLLight,
          },
          {
            label: "React",
            image: techIcons.TailwindCSSIcon,
          },
          {
            label: "React",
            image: techIcons.NodeJsIcon,
          },
        ],
      },
    ],
    images: [
      {
        src: "/images/projects/obon/obon-architecture.webp",
        alt: "homepage do  site obon",
        label: "Arquitetura do sistema",
      },
      {
        src: "/images/projects/mestresonline/mestresonline-home.webp",
        alt: "homepage do  site obon",
        label: "homepage do  site obon",
      },
      {
        src: "/images/projects/nutri/nutri-home.webp",
        alt: "homepage do  site obon",
        label: "homepage",
      },
      {
        src: "/images/projects/contentai/contentai-home.webp",
        alt: "homepage do  site obon",
        label: "homepage",
      },
      {
        src: "/images/projects/obon/obon-home.webp",
        alt: "homepage do  site obon",
        label: "homepage",
      },
      {
        src: "/images/projects/obon/obon-home.webp",
        alt: "homepage do  site obon",
        label: "homepage",
      },
      {
        src: "/images/projects/obon/obon-home.webp",
        alt: "homepage do  site obon",
        label: "homepage",
      },
    ],
  }
];

export const projectPreview = [
  {
    name: "Obon",
    previewImage: "/images/projects/obon/obon-home.webp",
    description: {
      pt: "/// Plataforma de eventos",
      en: "/// Events platform",
    },
    url: "obon",
  },
  {
    name: "Mestres Online",
    previewImage: "/images/projects/mestresonline/mestresonline-home.webp",
    description: {
      pt: "/// Plataforma de Criação de Blogs",
      en: "/// Blog Creation Platform",
    },
    url: "MestresOnline",
  },
  {
    name: "Content.AI",
    previewImage: "/images/projects/contentai/contentai-home.webp",
    description: {
      pt: "/// Ferramenta de transcrição de vídeos",
      en: "/// Video transcription tool",
    },
    url: "contentai",
  },
  {
    name: "Nutri.io",
    previewImage: "/images/projects/nutri/nutri-home.webp",
    description: {
      pt: "/// Gerador de Dietas com IA",
      en: "/// AI Diet Generator",
    },
    url: "nutri",
  },
];

export const urls = ["obon", "mestresonline", "contentai", "nutri"];
