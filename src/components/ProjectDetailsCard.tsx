import React from "react";
import { Card, CardContent } from "./ui/card";

interface ProjectDetailsCardProps {
    name: string;
    detail: string;
    description: string;
}

const ProjectDetailsCard = ({name, detail, description}: ProjectDetailsCardProps) => {
  return (
    <div className="card-wrap">
      <Card className="clip-custom-card w-full pt-6 flex flex-col justify-between">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold italic">{name}</h1>
          <h2 className="text-muted-foreground text-sm font-light italic">
            {detail}
          </h2>
        </div>
        <CardContent>
          <p className="text-sm sm:text-justify text-center">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetailsCard;
