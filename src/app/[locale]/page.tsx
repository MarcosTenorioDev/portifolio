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

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="grid font-roboto grid-rows-[20px_1fr_20px] max-w-[1680px] mx-auto items-start justify-items-center min-h-screen gap-20 px-10 md:px-20 pt-6">
      <BigNavbar />
      <div className="w-full mt-6 h-full flex flex-col xl:flex-row gap-10">
        <div className="w-full">
          <ProfileCard />
        </div>
        <div className="flex flex-col h-full gap-12 max-h-[700px]">
          <div className="h-fit flex flex-col sm:flex-row gap-10">
            <DescriptionProfileCard />
            <DetailsProfileCard />
          </div>
          <div className="card-wrap w-full flex-grow">
            <TechSkillsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
