import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";

interface EducationCardProps {
  logo: string;
  hoverImage: string;
  title: string;
  institution: string;
  dateRange: string;
  description: string;
  alt?: string;
}

export default function EducationCard({
  logo,
  hoverImage,
  title,
  institution,
  dateRange,
  description,
  alt = "Institution logo",
}: EducationCardProps) {
  return (
    <Card className="relative hover:clip-custom-card group flex items-start gap-6 bg-transparent py-4 border-0 shadow-none md:min-h-[170px] md:h-[170px] overflow-hidden">
      {/* Static Content */}
      <div className="relative w-full flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-start gap-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10">
        <div className="relative flex-shrink-0">
          <Image
            src={logo}
            alt={alt}
            width={140}
            height={140}
            className="object-contain border border-black aspect-square rounded-xl"
          />
        </div>

        <div className="space-y-1 flex flex-col h-[140px] pt-2">
          <h2 className="text-2xl leading-tight font-semibold w-full text-center sm:text-start">{title}</h2>
          <p className="text-sm uppercase text-muted-foreground italic">
            {institution}
          </p>
          <div className="h-full flex items-end">
            <p className="text-base font-bold pb-2 mx-auto sm:mx-0">{dateRange}</p>
          </div>
        </div>
      </div>

      {/* Hover Background */}
      <div
        className="absolute inset-0 opacity-0 hover:clip-custom-card group-hover:opacity-100 transition-opacity duration-300 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${
            hoverImage
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div> {/* Overlay */}
      </div>

      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-white">
        <h3 className="text-xl font-bold text-center">{title}</h3>
        <p className="text-sm text-center px-4">{description}</p>
      </div>
    </Card>
  );
}
