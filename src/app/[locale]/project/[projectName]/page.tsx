"use client";

import { FileDown, LinkIcon } from "lucide-react";
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
import DescriptionProfileCard from "@/components/DescriptionProfileCard";
import DetailsProfileCard from "@/components/DetailsProfileCard";
import ButtonAnimated from "@/components/ButtonAnimated";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import TechIcon from "@/components/TechIcon";
import techIcons from "@/constants/techs";
import { group } from "console";

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
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-center justify-start p-4 lg:p-7 !pb-0 overflow-y-auto overflow-x-hidden">
        <ProjectNavbar />
        <div className="h-fit flex flex-col lg:flex-row gap-4 lg:gap-6 mt-6">
          <div className="card-wrap">
            <Card className="clip-custom-card w-full pt-6 flex flex-col justify-between">
              <div className="text-center mb-4">
                <h1 className="text-3xl font-bold italic">{project.name}</h1>
                <h2 className="text-muted-foreground text-sm font-light italic">
                  {project.detail}
                </h2>
              </div>
              <CardContent>
                <p className="text-sm sm:text-justify text-center">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-wrap lg:flex-col justify-start gap-6 my-auto">
            <div className="w-full flex flex-col sm:flex-row gap-6 lg:flex-col">
              <Card className="clip-custom-card w-full xl:min-w-[200px] 2xl:min-w-[300px] h-fit flex justify-center p-5">
                <CardContent className="p-0">
                  <p className="text-xs font-semibold">Repositório Front-End</p>
                </CardContent>
              </Card>
              <Card className="clip-custom-card w-full xl:min-w-[200px] 2xl:min-w-[300px] h-fit flex justify-center p-5">
                <CardContent className="p-0">
                  <p className="text-xs font-semibold">Repositório Back-End</p>
                </CardContent>
              </Card>
            </div>
            <Card className="clip-custom-card w-full xl:min-w-[200px] 2xl:min-w-[300px] h-fit flex justify-center p-5 bg-primary text-white dark:bg-white dark:text-black dark:!border-0">
              <CardContent className="p-0">
                <p className="text-xs font-semibold">Link da aplicação</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="w-full h-full ">
          <Card className="clip-custom-card w-full my-6 h-[89%] bg-primary !border-black !border-0 dark:!border-border dark:!border-2">
            <CardHeader className="pb-0 w-full mx-auto text-white">
              <h2 className="text-2xl font-bold text-center xl:text-start">
                Tech Stack
              </h2>
            </CardHeader>
            <CardContent className="w-full mx-auto">
              <p className="text-sm font-light text-gray-400 text-center xl:text-start">
                Techs used in this project development
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-start mt-4">
                {project.techGroups.map((group, index) => (
                  <div className="w-full" key={index}>
                    <h2 className="text-lg font-bold italic w-full text-white">
                      {group.label}
                    </h2>
                    <Carousel className="w-full px-6 lg:px-8">
                      <CarouselContent className="w-full flex justify-between">
                        {group.techs.map((image, index) => (
                          <CarouselItem
                            key={index}
                            className="w-fit basis-auto text-white"
                          >
                            <TechIcon
                              image={image.image}
                              alt={image.label}
                              label={image.label}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="-left-2 xl:left-2 disabled:hidden" />
                      <CarouselNext className="-right-2 xl:right-2 disabled:hidden" />
                    </Carousel>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:h-full overflow-hidden lg:overflow-y-scroll">
        <div className="space-y-4 p-4 lg:p-7 hidden lg:block">
          {project.images.map((image, index) => (
            <ProjectImagesCard key={index} {...image} />
          ))}
        </div>
        <div className="lg:hidden">
          <h2 className="text-2xl font-bold text-center xl:text-start my-4 px-4 lg:px-7">
            Imagens do projeto
          </h2>
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 relative">
                    <ProjectImagesCard key={index} {...image} />
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
