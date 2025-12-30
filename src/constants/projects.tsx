import { CloudOff, LinkIcon, type LucideIcon } from "lucide-react";
import techIcons from "./techs";


interface Project {
  name: string;
  detail: Record<string, string>; // Internacionalizado
  description: Record<string, string>; // Internacionalizado
  url: string;
  links: Link[];
  techGroups: TechGroup[];
  images: ProjectImage[];
  isDown: boolean;
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

const allProjects: Project[] = [
  {
    name: "Obon",
    isDown:true,
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
          pt: "Deploy indisponível",
          en: "Deploy unavailable",
        },
        icon: CloudOff,
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
  {
    name: "Mestres Online",
    isDown:true,
    detail: {
      pt: "Plataforma de Criação de Blogs",
      en: "Blog Creation Platform",
    },
    description: {
      pt: "Mestres_Online é uma plataforma no formato de SAAS para criar blogs personalizados, com suporte a posts multimídia, autores, tópicos, integração de API pública e planos gerenciados via gateway de pagamento.",
      en: "Mestres_Online is a SAAS platform for creating personalized blogs, supporting multimedia posts, authors, topics, public API integration, and managed plans through a payment gateway.",
    },
    url: "mestresonline",
    links: [
      {
        label: {
          pt: "Repositório Front-End",
          en: "Front-End Repository",
        },
        icon: LinkIcon,
        url: "https://github.com/MarcosTenorioDev/mestresonline",
      },
      {
        label: {
          pt: "Repositório Back-End",
          en: "Back-End Repository",
        },
        icon: LinkIcon,
        url: "https://github.com/MarcosTenorioDev/mestres-online-backend",
      },
      {
        label: {
          pt: "Deploy indisponível",
          en: "Deploy unavailable",
        },
        icon: CloudOff,
        url: "https://mestresonline.vercel.app/",
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
          { label: "Stripe", image: techIcons.Stripe },
          {
            label: "Clerk",
            image: techIcons.ClerkIcon,
          },
        ],
      },
      {
        label: {
          pt: "Backend e Banco de Dados",
          en: "Backend and Database",
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
            label: "PostgreSQL",
            image: techIcons.PostgreSQLLight,
          },
          {
            label: "Prisma",
            image: techIcons.Prisma,
          },
          {
            label: "AWS S3",
            image: techIcons.S3,
          },
          { label: "Stripe", image: techIcons.Stripe },

          {
            label: "Clerk",
            image: techIcons.ClerkIcon,
          },
        ],
      },
    ],
    images: [
      {
        src: "/images/projects/mestresonline/mestresonline-home.webp",
        alt: "Página inicial do site Mestres online",
        label: {
          pt: "Página inicial",
          en: "Homepage",
        },
      },
      {
        src: "/images/projects/mestresonline/mestresonline-profiles.webp",
        alt: "Página de perfis do site Mestres online",
        label: {
          pt: "Crie diversos perfis",
          en: "Create multiple profiles",
        },
      },
      {
        src: "/images/projects/mestresonline/mestresonline-myprofile.webp",
        alt: "Página do perfil do site Mestres online",
        label: {
          pt: "Gerencie seu perfil",
          en: "Manage your profile",
        },
      },
      {
        src: "/images/projects/mestresonline/mestresonline-publication.webp",
        alt: "Página de publicação do site Mestres online",
        label: {
          pt: "Publique seu trabalho",
          en: "Publish your work",
        },
      },
      {
        src: "/images/projects/mestresonline/mestresonline-authors.webp",
        alt: "Página de criação de autores do site Mestres online",
        label: {
          pt: "Crie diversos autores",
          en: "Create multiple authors",
        },
      },
      {
        src: "/images/projects/mestresonline/mestresonline-topics.webp",
        alt: "Página de criação de tópicos do site Mestres online",
        label: {
          pt: "Crie diversos tópicos",
          en: "Create multiple topics",
        },
      },
      {
        src: "/images/projects/mestresonline/mestresonline-managesubscription.webp",
        alt: "Página do stripe para gerenciamento de planos",
        label: {
          pt: "Gerencie seus planos",
          en: "Manage your plans",
        },
      },
      {
        src: "/images/projects/mestresonline/mestresonline-gateway.webp",
        alt: "Página do stripe para compra de um plano",
        label: {
          pt: "Gateway de pagamento Stripe",
          en: "Stripe payment gateway",
        },
      },
    ],
  },
  {
    name: "Content.AI",
    isDown:true,
    detail: {
      pt: "Ferramenta inteligente para transcrição de vídeos e chat AI",
      en: "Smart tool for video transcription and AI assistant",
    },
    description: {
      pt: "Content.AI transcreve vídeos para texto, gera resumos, cria títulos/descrições e permite a interação com o vídeo por meio de perguntas utilizando IA, tudo baseado em tecnologias web modernas. Desenvolvi esta ferramenta para auxiliar na criação eficiente de conteúdo, resumos e transcrições de vídeos.",
      en: "Content.AI transcribes videos to text, generates summaries, creates titles/descriptions, and enables interactive querying of the video using AI, all powered by modern web technologies. I developed this tool to assist in the efficient creation of content, summaries, and transcriptions from videos.",
    },
    url: "contentai",
    links: [
      {
        label: {
          pt: "Repositório Front-End",
          en: "Front-End Repository",
        },
        icon: LinkIcon,
        url: "https://github.com/MarcosTenorioDev/Content.AI",
      },
      {
        label: {
          pt: "Repositório Back-End",
          en: "Back-End Repository",
        },
        icon: LinkIcon,
        url: "https://github.com/MarcosTenorioDev/Content.AI-Backend",
      },
      {
        label: {
          pt: "Deploy indisponível",
          en: "Deploy unavailable",
        },
        icon: CloudOff,
        url: "https://content-io.vercel.app/",
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
            label: "ffmpeg",
            image: techIcons.FFMPEG,
          },
          {
            label: "Typescript",
            image: techIcons.TypeScriptIcon,
          },
          {
            label: "Tailwind CSS",
            image: techIcons.TailwindCSSIcon,
          },
        ],
      },
      {
        label: {
          pt: "Backend e Banco de Dados",
          en: "Backend and Database",
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
            label: "OpenAI API",
            image: techIcons.OpenAi,
          },
          {
            label: "PostgreSQL",
            image: techIcons.PostgreSQLLight,
          },
          {
            label: "Prisma",
            image: techIcons.Prisma,
          },
        ],
      },
    ],
    images: [
      {
        src: "/images/projects/contentai/contentai-home.webp",
        alt: "Página inicial do site Content AI",
        label: {
          pt: "Página inicial",
          en: "Homepage",
        },
      },
    ],
  },
  {
    name: "Nutri-io",
    isDown:true,
    detail: {
      pt: "Gerador de Dietas com IA",
      en: "AI Diet Generator",
    },
    description: {
      pt: "Nutri.io é uma aplicação web que gera dietas personalizadas com base em preferências alimentares, restrições e objetivos de saúde. A aplicação utiliza uma IA para sugerir alimentos e quantidades ideais para cada refeição, além de permitir exportar a dieta como PDF ou CSV.",
      en: "Nutri.io is a web application that generates personalized diets based on dietary preferences, restrictions, and health goals. The application uses AI to suggest ideal foods and quantities for each meal, as well as allowing the diet to be exported as a PDF or CSV.",
    },
    url: "nutri",
    links: [
      {
        label: {
          pt: "Repositório Front-End",
          en: "Front-End Repository",
        },
        icon: LinkIcon,
        url: "https://github.com/MarcosTenorioDev/nutri",
      },
      {
        label: {
          pt: "Repositório Back-End",
          en: "Back-End Repository",
        },
        icon: LinkIcon,
        url: "https://github.com/MarcosTenorioDev/nutri-backend",
      },
      {
        label: {
          pt: "Deploy indisponível",
          en: "Deploy unavailable",
        },
        icon: CloudOff,
        url: "https://nutri-io.com/",
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
          pt: "Backend e Banco de Dados",
          en: "Backend and Database",
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
            label: "Stripe",
            image: techIcons.Stripe,
          },
          {
            label: "OpenAI API",
            image: techIcons.OpenAi,
          },
          {
            label: "PostgreSQL",
            image: techIcons.PostgreSQLLight,
          },
          {
            label: "Prisma",
            image: techIcons.Prisma,
          },
        ],
      },
    ],
    images: [
      {
        src: "/images/projects/nutri/nutri-homepage.webp",
        alt: "Página inicial do site Nutri.io",
        label: {
          pt: "Página inicial",
          en: "Homepage",
        },
      },
      {
        src: "/images/projects/nutri/nutri-alldiets.webp",
        alt: "Página de dietas do site Nutri.io",
        label: {
          pt: "Visualize suas dietas",
          en: "View your diets",
        },
      },
      {
        src: "/images/projects/nutri/nutri-form.webp",
        alt: "Formulário de criação de dieta",
        label: {
          pt: "Crie sua dieta com IA",
          en: "Create your diet with AI",
        },
      },
      {
        src: "/images/projects/nutri/nutri-diet.webp",
        alt: "Página da sua dieta do site Nutri.io",
        label: {
          pt: "Exporte como pdf ou csv",
          en: "Export as pdf or csv",
        },
      },
      {
        src: "/images/projects/nutri/nutri-userconfig.webp",
        alt: "Configurações do usuário do site Nutri.io",
        label: {
          pt: "Gerencie seu usuário",
          en: "Manage your user",
        },
      },
      {
        src: "/images/projects/nutri/nutri-security.webp",
        alt: "Página de segurança do usuário do site Nutri.io",
        label: {
          pt: "Segurança",
          en: "Security",
        },
      },
      {
        src: "/images/projects/nutri/nutri-plans.webp",
        alt: "Sessão de planos do site Nutri.io",
        label: {
          pt: "Escolha seu plano",
          en: "Choose your plan",
        },
      },
      {
        src: "/images/projects/nutri/nutri-gateway.webp",
        alt: "Gateway de pagamento do site Nutri.io",
        label: {
          pt: "Gateway de pagamento Stripe",
          en: "Stripe payment gateway",
        },
      },

    ],
  }
];

export const projects = {
  dev: allProjects,
  qa: []
};

export const projectPreview = {
  dev: [
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
      previewImage: "/images/projects/mestresonline/mestresonline-home-preview.webp",
      description: {
        pt: "/// Plataforma de Criação de Blogs",
        en: "/// Blog Creation Platform",
      },
      url: "MestresOnline",
    },
    {
      name: "Content.AI",
      previewImage: "/images/projects/contentai/contentai-home-preview.webp",
      description: {
        pt: "/// Ferramenta de transcrição de vídeos",
        en: "/// Video transcription tool",
      },
      url: "contentai",
    },
    {
      name: "Nutri.io",
      previewImage: "/images/projects/nutri/nutri-home-preview.webp",
      description: {
        pt: "/// Gerador de Dietas com IA",
        en: "/// AI Diet Generator",
      },
      url: "nutri",
    },
  ],
  qa: []
};

export const urls = {
  dev: ["obon", "mestresonline", "contentai", "nutri"],
  qa: []
};
