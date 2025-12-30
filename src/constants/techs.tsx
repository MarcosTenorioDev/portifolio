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
import ClerkIcon from "@/../public/images/techs/clerk.svg";
import Prisma from "@/../public/images/techs/prisma.svg";
import S3 from "@/../public/images/techs/s3.svg";
import Vite from "@/../public/images/techs/vite.svg";
import Apidog from "@/../public/images/techs/apidog.png";
import Stripe from "@/../public/images/techs/stripe.svg";
import FFMPEG from "@/../public/images/techs/ffmpeg.svg";
import OpenAi from "@/../public/images/techs/openai.svg";
import Colab from "@/../public/images/techs/colab.svg";
import Playwright from "@/../public/images/techs/playwright.svg";
import UIAutomator from "@/../public/images/techs/android.svg";
import Selenium from "@/../public/images/techs/selenium.svg";
import JMeter from "@/../public/images/techs/jmeter.svg";
import Postman from "@/../public/images/techs/postman.svg";
import ReactTestingLibrary from "@/../public/images/techs/react-testing-lib.svg";
import Docker from "@/../public/images/techs/docker.svg";
import CICD from "@/../public/images/techs/ci-cd.svg";
import SQL from "@/../public/images/techs/sql.svg";
import Python from "@/../public/images/techs/python.svg";


const allTechs = [
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
    label: "Prisma",
    image: Prisma,
    alt: "Prisma Logo",
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

const qaTechs = [
  {
    label: "Cypress",
    image: Cypress,
    alt: "Cypress Testing Framework Logo",
  },
  {
    label: "Playwright",
    image: Playwright,
    alt: "Playwright Testing Framework Logo",
  },
  {
    label: "UI Automator",
    image: UIAutomator,
    alt: "Android UI Automator Logo",
  },
  {
    label: "Selenium",
    image: Selenium,
    alt: "Selenium Automation Logo",
  },
  {
    label: "JMeter",
    image: JMeter,
    alt: "Apache JMeter Logo",
  },
  {
    label: "Postman",
    image: Postman,
    alt: "Postman API Testing Logo",
  },
  {
    label: "React Testing Library",
    image: ReactTestingLibrary,
    alt: "React Testing Library Logo",
  },
  {
    label: "SonarQube",
    image: SonarQubeLogo,
    alt: "SonarQube Code Quality Logo",
  },
  {
    label: "Docker",
    image: Docker,
    alt: "Docker Logo",
  },
  {
    label: "CI/CD",
    image: CICD,
    alt: "CI/CD Pipelines Icon",
  },
  {
    label: "SQL",
    image: SQL,
    alt: "SQL Database Logo",
  },
  {
    label: "TypeScript",
    image: TypeScriptIcon,
    alt: "TypeScript Logo",
  },
  {
    label: "Python",
    image: Python,
    alt: "Python Programming Language Logo",
  }
];


export const techs = {
  dev: allTechs,
  qa: qaTechs
};

const techIcons = {
  ClerkIcon,
  Apidog,
  Stripe,
  FFMPEG,
  OpenAi,
  Prisma,
  Vite,
  S3,
  Angular,
  AWSLogo,
  Bootstrap,
  Cypress,
  ExpressLogo,
  FastifyLogo,
  MongoDB,
  MySQL,
  NextJsFramework,
  NodeJsIcon,
  PostgreSQLLight,
  ReactFramework,
  Redis,
  SonarQubeLogo,
  StyledComponents,
  TailwindCSSIcon,
  TypeScriptIcon,
  Colab,
};

export default techIcons;
