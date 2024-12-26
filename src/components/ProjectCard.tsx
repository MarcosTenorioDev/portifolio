import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  imageSrc: StaticImageData;
  title: string;
  subtitle: string;
}

const ProjectCard = ({ imageSrc, subtitle, title }: ProjectCardProps) => {
    const t = useTranslations("HomePage");
  
  return (
    <div className="cursor-pointer overflow-hidden !border-0 group">
      <div className="clip-custom-card bg-primary text-white aspect-square relative overflow-hidden !border-0">
        <div className="overlay group relative">
          {/* Filtro de escurecimento */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80 z-10"></div>

          <div className="w-full flex justify-end absolute inset-0">
            {/* Botão animado */}
            <div className="bg-black/40 p-2 sm:px-4 lg:p-4 relative top-6 right-6 lg:w-[300px] flex items-center justify-center z-20 gap-4 h-min clip-custom-button !border-0 transition-all duration-500 md:group-hover:right-6 md:right-[-120%]">
              <p className="text-white text-xs lg:text-base">
                {t("Projects.cardDetails")}
              </p>
              <ArrowUpRight className="text-white" />
            </div>
          </div>

          <Image
            src={imageSrc}
            alt="Imagem do Card"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Contêiner dinâmico para título e subtítulo */}
          <div className="absolute bottom-7 left-10 z-20 flex flex-col gap-1 sm:gap-2">
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              {title}
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-sm lg:text-lg">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
