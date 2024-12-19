import { ModeToggle } from "@/components/ModeToggle";
import BigNavbar from "@/components/Navbars/BigNavbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Download, FileDown, Mail } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import TechSkillsCard from "@/components/TechSkillsCard";
import DetailsProfileCard from "@/components/DetailsProfileCard";
import DescriptionProfileCard from "@/components/DescriptionProfileCard";
import ExperienceCard from "@/components/ExperienceCardProps";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="grid pb-10 font-roboto max-w-[1680px] mx-auto items-start justify-items-center gap-20 px-10 md:px-20 pt-6">
      <BigNavbar />
      <div className="w-full mt-6 h-full flex flex-col xl:flex-row gap-10">
        <div className="w-full">
          <ProfileCard />
        </div>
        <div className="flex flex-col h-full gap-12">
          <div className="h-fit flex flex-col sm:flex-row gap-10">
            <DescriptionProfileCard />
            <DetailsProfileCard />
          </div>
          <div className="card-wrap w-full flex-grow">
            <TechSkillsCard />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-center lg:text-end w-full text-[72px] italic font-bold mb-6">2 YEARS OF <br/>EXPERIENCE</h2>
        <ExperienceCard
        title="Direction Systems"
        subtitle="Desenvolvedor Fullstack"
        description="Atuei como desenvolvedor fullstack, com experiência em Front-end utilizando Angular, React e Bootstrap, e no Back-end com .NET C#. Durante minha trajetoria, desenvolvi integrações de APIs, implementei gateways de pagamento e contribui ativamente no gerenciamento de projetos. Além disso, trabalhei com metodologias ageis, promovendo uma colaboração eficiente em equipe."
        dateRange="Nov-2023 / Jul-2024"
      />
      </div>
    </div>
  );
}
