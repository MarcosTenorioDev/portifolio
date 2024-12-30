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
    name: "Obon",
    detail: {
      pt: "Plataforma de Eventos",
      en: "Events Platform",
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
        url: "https://github.com/MarcosTenorioDev/Site-de-eventos-frontend",
      },
      {
        label: {
          pt: "Repositório Back-End",
          en: "Back-End Repository",
        },
        icon: LinkIcon,
        url: "https://github.com/MarcosTenorioDev/obon-backend",
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
            label: "Vite",
            image: techIcons.Vite,
          },
          {
            label: "React",
            image: techIcons.ReactFramework,
          },
          {
            label: "Typescript",
            image: techIcons.TypeScriptIcon,
          },
          {
            label: "Tailwind CSS",
            image: techIcons.TailwindCSSIcon,
          },
          {
            label: "Clerk",
            image: techIcons.ClerkIcon,
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
            label: "Fastify",
            image: techIcons.FastifyLogo,
          },
          {
            label: "Typescript",
            image: techIcons.TypeScriptIcon,
          },
          {
            label: "Prisma",
            image: techIcons.Prisma,
          },
          {
            label: "Clerk",
            image: techIcons.ClerkIcon,
          },
        ],
      },
      {
        label: {
          pt: "Banco de dados e armazenamento",
          en: "Database and Storage",
        },
        techs: [
          {
            label: "PostgreSQL",
            image: techIcons.PostgreSQLLight,
          },
          {
            label: "Redis",
            image: techIcons.Redis,
          },
          {
            label: "AWS S3",
            image: techIcons.S3,
          },
        ],
      },
      {
        label: {
          pt: "Segurança, CI/CD, Testes e Documentação",
          en: "Security, CI/CD, Tests and Documentation",
        },
        techs: [
          {
            label: "Clerk",
            image: techIcons.ClerkIcon,
          },
          {
            label: "SonarQube",
            image: techIcons.SonarQubeLogo,
          },
          {
            label: "ApiDog",
            image: techIcons.Apidog,
          }
        ],
      },
    ],
    images: [
      {
        src: "/images/projects/obon/obon-architecture.webp",
        alt: "Arquitetura do sistema do site Obon",
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
      {
        src: "/images/projects/obon/obon-ticket-reservation.webp",
        alt: "Página de reserva de ticket do site Obon",
        label: {
          pt: "Reserva de ingresso",
          en: "Ticket reservation",
        },
      },
      {
        src: "/images/projects/obon/obon-tickets.webp",
        alt: "Página de visualização de ticket do site Obon",
        label: {
          pt: "Visualize seus ingressos",
          en: "View your tickets",
        },
      },
      {
        src: "/images/projects/obon/obon-create-event.webp",
        alt: "Página de criação de evento do site Obon",
        label: {
          pt: "Crie seu evento",
          en: "Create your event",
        },
      },
      {
        src: "/images/projects/obon/obon-edit-event.webp",
        alt: "Página de edição de evento do site Obon",
        label: {
          pt: "Gerencie seu evento",
          en: "Manage your event",
        },
      },
      {
        src: "/images/projects/obon/obon-user-managment.webp",
        alt: "Página de gerenciamento do usuário do site Obon",
        label: {
          pt: "Gerencie seu usuário",
          en: "Manage your user",
        },
      },
      {
        src: "/images/projects/obon/obon-security.webp",
        alt: "Página de segurança do site Obon",
        label: {
          pt: "Segurança",
          en: "Security",
        },
      }
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
