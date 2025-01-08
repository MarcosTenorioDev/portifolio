"use client";

import ProjectNavbar from "@/components/Navbars/ProjectNavbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectImagesCard from "@/components/ProjectImagesCard";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import ProjectDetailsCard from "@/components/ProjectDetailsCard";
import ProjectLinksCard from "@/components/ProjectLinksCard";
import ProjectTechStackCard from "@/components/ProjectTechStackCard";
import { projects, urls } from "@/constants/projects";
import { notFound, useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Page = () => {
  const params = useParams();
  const { projectName } = params;
  const t = useTranslations('ProjectPage');

  const locale = params.locale as Locale;

  const projectIndex = urls.findIndex((url) => url.toLowerCase() === (Array.isArray(projectName) ? projectName[0].toLowerCase() : projectName?.toLowerCase()))
  const project = projects[projectIndex];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


  if (!project) {
    return notFound()
  }

  return (
    <div className="mx-auto lg:h-screen bg-[#ededed] dark:bg-background flex flex-col lg:flex-row font-roboto overflow-hidden">
      <div className="w-full lg:w-1/2 lg:h-full flex flex-col items-center justify-start p-4 lg:p-7 !pb-0 lg:overflow-y-auto lg:overflow-x-hidden">
        <ProjectNavbar />
        <div className="h-fit flex flex-col lg:flex-row gap-4 lg:gap-6 mt-20 lg:mt-6">
          <ProjectDetailsCard
            description={project.description[locale]}
            detail={project.detail[locale]}
            name={project.name}
          />
          <div className="flex flex-wrap lg:flex-col justify-start gap-6 my-auto card-wrap">
            <div className="w-full flex flex-col sm:flex-row gap-6 lg:flex-col">
              {project.links.slice(0, 2).map((link, index) =>
                <ProjectLinksCard label={link.label[locale]} key={index} href={link.url} icon={link.icon} />
              )}
            </div>
            {project.links[2]?.label && project.links[2]?.url && (
              <ProjectLinksCard label={project.links[2].label[locale]} key={3} disabled={project.isDown} className=" bg-primary text-white dark:bg-white dark:text-black dark:!border-0" href={project.links[2].url} icon={project.links[2].icon} />
            )}
          </div>
        </div>
        <div className="w-full mt-6 flex flex-col gap-6">
          {project.links.slice(3).map((link, index) =>
            <ProjectLinksCard label={link.label[locale]} key={index} className="w-full max-w-full" href={link.url} icon={link.icon} />
          )}
        </div>

        <div className="w-full h-full card-wrap">
          <ProjectTechStackCard techGroups={project.techGroups} locale={locale} />
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:h-full overflow-hidden lg:overflow-y-scroll p-4 lg:p-7">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-2 sm:mb-6">
          {t("projectImages")}
        </h2>
        <div className="space-y-4 hidden lg:block card-wrap">
          {project.images.map((image, index) => (
            <ProjectImagesCard key={index} alt={image.alt} label={image.label[locale]} src={image.src} />
          ))}
        </div>
        <div className="lg:hidden">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 relative">
                    <div className="card-wrap">
                    <ProjectImagesCard key={index} alt={image.alt} label={image.label[locale]} src={image.src} />
                    </div>

                    <CarouselPrevious className="left-4 focus:bg-black" />
                    <CarouselNext className="right-4 focus:bg-black" />
                    <div className="py-2 text-center text-sm text-muted-foreground">
                      Slide {current} of {project.images.length}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Page;
