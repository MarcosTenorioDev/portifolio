import { LinkIcon } from "lucide-react";
import React from "@/../public/images/techs/react-framework.svg";
import obon from "@/../public/images/projects/obon/obon-home.png";
import mestresonline from "@/../public/images/projects/mestresonline/mestresonline-home.png";
import nutri from "@/../public/images/projects/nutri/nutri-home.png";
import contentai from "@/../public/images/projects/contentai/contentai-home.png";

export const projects = [
  {
    name: "obon",
    previewImage: obon,
    detail: "I developed",
    description:
      "I developed a SaaS platform for event organizers with features like event creation, attendee management, ticket sales, and a customizable interface for users to register, view tickets, and track event details.",
    url: "obon",
    links: [
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
            image: React,
          },
        ],
      },
    ],
    images: [
      {
        src: obon,
        alt: "homepage do  site obon",
      },
    ],
  },
];

export const projectPreview = [
  {
    name: "Obon",
    previewImage: obon,
    description: {
      pt: "/// Plataforma de eventos",
      en: "/// Events platform",
    },
    url: "obon",
  },
  {
    name: "Mestres Online",
    previewImage: mestresonline,
    description: {
      pt: "/// Plataforma de Criação de Blogs",
      en: "/// Blog Creation Platform",
    },
    url: "MestresOnline",
  },
  {
    name: "Content.AI",
    previewImage: contentai,
    description: {
      pt: "/// Ferramenta de transcrição de vídeos",
      en: "/// Video transcription tool",
    },
    url: "contentai",
  },
  {
    name: "Nutri.io",
    previewImage: nutri,
    description: {
      pt: "/// Gerador de Dietas com IA",
      en: "/// AI Diet Generator",
    },
    url: "nutri",
  },
];
