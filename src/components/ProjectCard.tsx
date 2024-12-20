import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  imageSrc: StaticImageData;
  title: string;
  subtitle: string;
  
}

const ProjectCard = ({ imageSrc, subtitle, title }: ProjectCardProps) => {
  return (
    <div className="cursor-pointer overflow-hidden !border-0 group">
      <div className="clip-custom-card bg-primary text-white aspect-square relative overflow-hidden !border-0">
        <div className="overlay group relative">
          {/* Filtro de escurecimento */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80 z-10"></div>
          <div className="w-full flex justify-end absolute inset-0">
            {/* Botão animado */}
            <div className="bg-black/40 p-2 sm:px-4 lg:p-4 relative top-6 right-6 lg:w-[300px] flex items-center justify-center z-20 gap-4 h-min clip-custom-button !border-0 transition-all duration-500 md:group-hover:right-6 md:right-[-120%]">
              <p className="text-white text-xs lg:text-base">See project Details</p>
              <ArrowUpRight className="text-white" />
            </div>
          </div>

          <Image
            src={imageSrc}
            alt="Imagem do Card"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Título responsivo */}
          <p className="text-white font-bold absolute bottom-12 md:bottom-14 left-10 z-20 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {title}
          </p>
          {/* Subtítulo responsivo */}
          <p className="text-gray-400 absolute bottom-7 left-10 z-20 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
