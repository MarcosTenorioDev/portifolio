import { LinkIcon } from "lucide-react";
import React from "@/../public/images/techs/react-framework.svg";
import obon from "@/../public/images/projects/obon/obon-home.png";

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
        images:[
            {
                src: obon,
                alt: "homepage do  site obon",
            },
        ]
      }
]
