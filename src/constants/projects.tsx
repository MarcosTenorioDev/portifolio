import { LinkIcon, LucideIcon } from "lucide-react";
import techIcons from "./techs";


interface Project {
  name: string;
  detail: Record<string, string>; // Internacionalizado
  description: Record<string, string>; // Internacionalizado
  url: string;
  links: Link[];
  techGroups: TechGroup[];
  images: ProjectImage[];
}

interface Link {
  label: Record<string, string>; // Internacionalizado
  icon: LucideIcon;
  url: string;
}

export interface TechGroup {
  label: Record<string, string>; // Internacionalizado
  techs: Tech[];
}

interface Tech {
  label: string;
  image: string; // URL ou path para o ícone da tecnologia
}

interface ProjectImage {
  src: string; // URL ou path da imagem
  alt: string; // Descrição alternativa para acessibilidade
  label: Record<string, string>; // Internacionalizado
}

export const projects: Project[] = [
  {
    name: "obon",
    detail: {
      pt: "Eu desenvolvi",
      en: "I developed",
    },
    description: {
      pt: "Eu desenvolvi uma plataforma SaaS para organizadores de eventos com recursos como criação de eventos, gestão de participantes, vendas de ingressos e interface personalizável para usuários se registrarem, visualizarem ingressos e acompanharem detalhes do evento.",
      en: "I developed a SaaS platform for event organizers with features like event creation, attendee management, ticket sales, and a customizable interface for users to register, view tickets, and track event details.",
    },
    url: "obon",
    links: [
      {
        label: {
          pt: "Repositório Front-End",
          en: "Front-End Repository",
        },
        icon: LinkIcon,
        url: "https://obon.vercel.app",
      },
      {
        label: {
          pt: "Repositório Back-End",
          en: "Back-End Repository",
        },
        icon: LinkIcon,
        url: "https://obon.vercel.app",
      },
      {
        label: {
          pt: "Link da aplicação",
          en: "Application Link",
        },
        icon: LinkIcon,
        url: "https://obon.vercel.app",
      },
    ],
    techGroups: [
      {
        label: {
          pt: "Frontend",
          en: "Frontend",
        },
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
            image: techIcons.ReactFramework,
          },
          {
            label: "Angular",
            image: techIcons.Angular,
          },
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
            image: techIcons.ReactFramework,
          },
          {
            label: "Angular",
            image: techIcons.Angular,
          },
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
            image: techIcons.ReactFramework,
          },
          {
            label: "Angular",
            image: techIcons.Angular,
          },
        ],
      },
      {
        label: {
          pt: "Backend",
          en: "Backend",
        },
        techs: [
          {
            label: "Node.js",
            image: techIcons.NodeJsIcon,
          },
          {
            label: "PostgreSQL",
            image: techIcons.PostgreSQLLight,
          },
          {
            label: "Node.js",
            image: techIcons.NodeJsIcon,
          },
          {
            label: "PostgreSQL",
            image: techIcons.PostgreSQLLight,
          },
          {
            label: "React",
            image: techIcons.ReactFramework,
          },
          {
            label: "Angular",
            image: techIcons.Angular,
          },
          {
            label: "Node.js",
            image: techIcons.NodeJsIcon,
          },
          {
            label: "PostgreSQL",
            image: techIcons.PostgreSQLLight,
          },
        ],
      },
    ],
    images: [
      {
        src: "/images/projects/obon/obon-architecture.webp",
        alt: "Homepage do site Obon",
        label: {
          pt: "Arquitetura do sistema",
          en: "System Architecture",
        },
      },
      {
        src: "/images/projects/obon/obon-home.webp",
        alt: "Homepage do site Obon",
        label: {
          pt: "Página inicial",
          en: "Homepage",
        },
      },
    ],
  },
  // Outros projetos podem ser configurados da mesma forma
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
