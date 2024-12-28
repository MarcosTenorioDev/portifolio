import Image, { StaticImageData } from "next/image";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface ProjectImagesCardProps {
  src: StaticImageData;
  alt: string;
  label: string;
}

const ProjectImagesCard = ({ alt, label, src }: ProjectImagesCardProps) => {
  return (
    <div className="clip-custom-card w-full flex flex-col">
      <div className="relative max-h-full">
        <Image src={src} alt={alt} className="w-full"/>
        <div className="card-wrap self-end absolute bottom-0 right-0 z-50">
          <div
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "bg-black text-white clip-custom-button sm:py-6 px-4 sm:px-8 dark:after:!border-[3.8px] dark:before:!border-[3.8px]"
            )}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImagesCard;
