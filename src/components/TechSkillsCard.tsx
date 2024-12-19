import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Laptop, Laptop2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Angular from "@/../public/images/techs/angular.svg";
import AWSLogo from "@/../public/images/techs/aws-logo.svg";
import Bootstrap from "@/../public/images/techs/bootstrap.svg";
import Cypress from "@/../public/images/techs/Cypress.svg";
import ExpressLogo from "@/../public/images/techs/express-logo.svg";
import FastifyLogo from "@/../public/images/techs/fastify-logo.svg";
import MongoDB from "@/../public/images/techs/mongodb.svg";
import MySQL from "@/../public/images/techs/mysql.svg";
import NextJsFramework from "@/../public/images/techs/nextjs-logo.svg";
import NodeJsIcon from "@/../public/images/techs/nodejs-icon.svg";
import PostgreSQLLight from "@/../public/images/techs/postgresql-light.svg";
import ReactFramework from "@/../public/images/techs/react-framework.svg";
import Redis from "@/../public/images/techs/redis.svg";
import SonarQubeLogo from "@/../public/images/techs/sonarqube-logo.svg";
import StyledComponents from "@/../public/images/techs/styledcomponents.svg";
import TailwindCSSIcon from "@/../public/images/techs/tailwindcss-icon.svg";
import TypeScriptIcon from "@/../public/images/techs/typescript-icon.svg";

const TechSkillsCard = () => {
  const techs = [
    {
      label: "React",
      image: ReactFramework,
      alt: "React Framework Logo",
    },
    {
      label: "Next.js",
      image: NextJsFramework,
      alt: "Next.js Framework Logo",
    },
    {
      label: "Angular",
      image: Angular,
      alt: "Angular Framework Logo",
    },
    {
      label: "TypeScript",
      image: TypeScriptIcon,
      alt: "TypeScript Logo",
    },
    {
      label: "TailwindCSS",
      image: TailwindCSSIcon,
      alt: "TailwindCSS Logo",
    },
    {
      label: "Styled Components",
      image: StyledComponents,
      alt: "Styled Components Logo",
    },
    {
      label: "Bootstrap",
      image: Bootstrap,
      alt: "Bootstrap Logo",
    },
    {
      label: "Node.js",
      image: NodeJsIcon,
      alt: "Node.js Logo",
    },
    {
      label: "Express",
      image: ExpressLogo,
      alt: "Express Logo",
    },
    {
      label: "Fastify",
      image: FastifyLogo,
      alt: "Fastify Logo",
    },
    {
      label: "PostgreSQL",
      image: PostgreSQLLight,
      alt: "PostgreSQL Logo",
    },
    {
      label: "MySQL",
      image: MySQL,
      alt: "MySQL Logo",
    },
    {
      label: "Redis",
      image: Redis,
      alt: "Redis Logo",
    },
    {
      label: "MongoDB",
      image: MongoDB,
      alt: "MongoDB Logo",
    },
    {
      label: "Cypress",
      image: Cypress,
      alt: "Cypress Logo",
    },
    {
      label: "SonarQube",
      image: SonarQubeLogo,
      alt: "SonarQube Logo",
    },
    {
      label: "AWS Cloud",
      image: AWSLogo,
      alt: "AWS Cloud Logo",
    },
  ];

  return (
    <Card className="clip-custom-card bg-primary text-white">
      <CardHeader className="pb-0 w-[97%] mx-auto">
        <h2 className="text-2xl font-bold text-center xl:text-start">
          Lorem Ipsum is simply
        </h2>
      </CardHeader>
      <CardContent className="w-[97%] mx-auto">
        <p className="text-sm text-gray-400 text-center xl:text-start">
          These are the technologies I have mastered and use to bring ideas to
          life.
        </p>

        <div className="flex gap-6 flex-wrap justify-center mt-4">
          {techs.map((tech, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center xl:h-20 justify-center"
              >
                <Image
                  src={tech.image}
                  alt={tech.alt}
                  quality={75}
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-grow"
                />
                <p className="text-xs max-w-[100px] md:text-sm text-center lg:text-md">
                  {tech.label}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechSkillsCard;
