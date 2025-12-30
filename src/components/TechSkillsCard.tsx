import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import TechIcon from "./TechIcon";
import { useTranslations } from "next-intl";

interface TechItem {
  label: string;
  image: string | any; // StaticImageData do Next.js ou string
  alt: string;
}

interface TechSkillsCardProps {
  techsList: TechItem[];
}

const TechSkillsCard = ({ techsList }: TechSkillsCardProps) => {
  const t = useTranslations("HomePage");
  return (
    <Card className="clip-custom-card bg-primary text-white !border-black !border-0 dark:!border-border dark:!border-2">
      <CardHeader className="pb-0 w-[97%] mx-auto">
        <h2 className="text-2xl font-bold text-center xl:text-start">
          {t("TechsCard.Title")}
        </h2>
      </CardHeader>
      <CardContent className="w-[97%] mx-auto">
        <p className="text-sm text-gray-400 text-center xl:text-start">
          {t("TechsCard.Description")}
        </p>

        <div className="flex gap-6 flex-wrap justify-center mt-4">
          {techsList.map((tech, index) => {
            return <TechIcon key={index} {...tech} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechSkillsCard;
