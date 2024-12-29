"use client";

import { LinkIcon } from "lucide-react";
import obon from "@/../public/images/projects/obon/obon-home.png";
import arquitetura from "@/../public/images/projects/obon/obon-architecture.jpeg";
import ProjectNavbar from "@/components/Navbars/ProjectNavbar";
import mestresonline from "@/../public/images/projects/mestresonline/mestresonline-home.png";
import nutri from "@/../public/images/projects/nutri/nutri-home.png";
import contentai from "@/../public/images/projects/contentai/contentai-home.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectImagesCard from "@/components/ProjectImagesCard";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import techIcons from "@/constants/techs";
import ProjectDetailsCard from "@/components/ProjectDetailsCard";
import ProjectLinksCard from "@/components/ProjectLinksCard";
import ProjectTechStackCard from "@/components/ProjectTechStackCard";

const Page = () => {
  const project = {
    name: "obon",
    previewImage: obon,
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
        src: arquitetura,
        alt: "homepage do  site obon",
        label: "Arquitetura do sistema",
      },
      {
        src: mestresonline,
        alt: "homepage do  site obon",
        label: "homepage do  site obon",
      },
      {
        src: nutri,
        alt: "homepage do  site obon",
        label: "homepage",
      },
      {
        src: contentai,
        alt: "homepage do  site obon",
        label: "homepage",
      },
      {
        src: obon,
        alt: "homepage do  site obon",
        label: "homepage",
      },
      {
        src: obon,
        alt: "homepage do  site obon",
        label: "homepage",
      },
      {
        src: obon,
        alt: "homepage do  site obon",
        label: "homepage",
      },
    ],
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto lg:h-screen bg-[#ededed] dark:bg-background flex flex-col lg:flex-row font-roboto overflow-hidden">
      <div className="w-full lg:w-1/2 lg:h-full flex flex-col items-center justify-start p-4 lg:p-7 !pb-0 lg:overflow-y-auto lg:overflow-x-hidden">
        <ProjectNavbar />
        <div className="h-fit flex flex-col lg:flex-row gap-4 lg:gap-6 mt-20 lg:mt-6">
          <ProjectDetailsCard
            description={project.description}
            detail={project.detail}
            name={project.name}
          />
          <div className="flex flex-wrap lg:flex-col justify-start gap-6 my-auto card-wrap">
            <div className="w-full flex flex-col sm:flex-row gap-6 lg:flex-col">
              {project.links.slice(0, 2).map((link, index) =>
                <ProjectLinksCard label={link.label} key={index} href={link.url} icon={link.icon} />
              )}
            </div>
            {project.links[2]?.label && project.links[2]?.url && (
              <ProjectLinksCard label={project.links[2].label} key={3} className=" bg-primary text-white dark:bg-white dark:text-black dark:!border-0" href={project.links[2].url} icon={project.links[2].icon} />
            )}
          </div>
        </div>
        <div className="w-full mt-6 flex flex-col gap-6">
          {project.links.slice(3).map((link, index) =>
            <ProjectLinksCard label={link.label} key={index} className="w-full max-w-full" href={link.url} icon={link.icon} />
          )}
        </div>

        <div className="w-full h-full card-wrap">
          <ProjectTechStackCard techGroups={project.techGroups} />
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:h-full overflow-hidden lg:overflow-y-scroll p-4 lg:p-7">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-2 sm:mb-6">
          Imagens do projeto
        </h2>
        <div className="space-y-4 hidden lg:block card-wrap">
          {project.images.map((image, index) => (
            <ProjectImagesCard key={index} {...image} />
          ))}
        </div>
        <div className="lg:hidden">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 relative">
                    <div className="card-wrap">
                      <ProjectImagesCard key={index} {...image} />
                    </div>

                    <CarouselPrevious className="left-4 focus:bg-black" />
                    <CarouselNext className="right-4 focus:bg-black" />
                    <div className="py-2 text-center text-sm text-muted-foreground">
                      Slide {current} of {project.images.length}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Page;
