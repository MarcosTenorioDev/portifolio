import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import TechIcon from "./TechIcon";
import { techs } from "@/constants/techs";

const TechSkillsCard = () => {
  return (
    <Card className="clip-custom-card bg-primary text-white !border-black !border-0 dark:!border-border dark:!border-2">
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
            return <TechIcon key={index} {...tech} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechSkillsCard;
