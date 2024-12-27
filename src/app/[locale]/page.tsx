"use client";

import BigNavbar from "@/components/Navbars/BigNavbar";
import ProfileCard from "@/components/ProfileCard";
import TechSkillsCard from "@/components/TechSkillsCard";
import DetailsProfileCard from "@/components/DetailsProfileCard";
import DescriptionProfileCard from "@/components/DescriptionProfileCard";
import ExperienceCard from "@/components/ExperienceCardProps";
import EducationCard from "@/components/EducationCard";
import ProjectCard from "@/components/ProjectCard";
import { education } from "@/constants/education";
import cyberpunkBoy from "@/../public/images/cyberpunkBoy.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import ExternalLink from "@/components/ExternalLink";
import ButtonAnimated from "@/components/ButtonAnimated";
import { socialMedias } from "@/constants/socialMedias";
import { useTranslations } from "next-intl";
import { Locale } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { experiences } from "@/constants/experience";
import { projectPreview } from "@/constants/projects";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const params = useParams();
  const locale = params.locale as Locale;

  return (
    <>
      <div id="home" className="grid pb-10 font-roboto max-w-[1680px] mx-auto items-start gap-12 px-4 sm:px-10 md:px-20 pt-[52px] md:pt-[145px]">
        <BigNavbar />
        <div className="w-full h-full flex flex-col xl:flex-row gap-10 mt-8 md:mt-0">
          <div className="xl:max-w-[400px]">
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
        <div className="w-full" id="experience">
          <h2 className="text-center lg:text-end w-full text-[42px] sm:text-[72px] italic font-bold mb-6">
            {t("Experience.first")} <br />
            {t("Experience.second")}
          </h2>

          {experiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={index}
                title={experience[locale].title}
                subtitle={experience[locale].subtitle}
                description={experience[locale].description}
                dateRange={experience[locale].dateRange}
              />
            );
          })}
        </div>
        <div className="w-full">
          <h2 className="text-center lg:text-start w-full text-[42px] sm:text-[72px] italic font-bold mb-6">
            {t("Academic.first")} <br />
            {t("Academic.second")}
          </h2>

          {education.map((edu, index) => {
            return (
              <div key={index}>
                <EducationCard
                  dateRange={edu[locale]?.dateRange}
                  description={edu[locale]?.description}
                  hoverImage={edu[locale]?.hoverImage}
                  institution={edu[locale]?.institution}
                  logo={edu[locale]?.logo}
                  title={edu[locale]?.title}
                  alt={edu[locale]?.alt}
                  key={index}
                />
                {index < education.length - 1 && (
                  <hr className="my-4 border-t border-muted border-1" />
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full" id="projects">
          <h2 className="text-center lg:text-end w-full text-[42px] sm:text-[72px] italic font-bold">
            {t("Projects.title")}
          </h2>
          <h3 className="text-center lg:text-start w-full text-sm md:text-base lg:text-lg text-muted-foreground mx-auto lg:mx-0 italic font-light mb-6 max-w-[600px]">
            {t("Projects.description")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
            {projectPreview.map((project, index) => {
              return (
                <ProjectCard
                  imageSrc={project.previewImage}
                  subtitle={project.description[locale]}
                  title={project.name}
                  key={index}
                />
              );
            })}
          </div>
        </div>

        {/* Blog - Coming soon */}
        {/* <div className="w-full">
          <h2 className="text-center w-full text-[34px] sm:text-[64px] italic font-bold">
            Latest Posts
          </h2>
          <h3 className="text-center w-full text-sm md:text-base lg:text-lg text-muted-foreground mx-auto italic font-light mb-16 max-w-[800px]">
            Explore insights on tech, health, and psychology.Dive into my blog,
            where I share bite-sized reflections and practical ideas. If
            something sparks your curiosity, feel free to reach out—I&apos;d
            love to chat and hear your thoughts!
          </h3>

          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-y-16 sm:gap-x-8 sm:mx-auto ">
            <PostsCard
              alt="Imagem de um computador"
              description="JavaScript can be a little tricky sometimes, even when you re dealing with simple-lookingJavaScript can be a little tricky sometimes, even when you re dealing with simple-looking"
              src={obon}
              title="If You Can Answer These 7 Questions If You Can Answer These 7 Questions"
            />
            <PostsCard
              alt="Imagem de um computador"
              description="JavaScript can be a little tricky sometimes, even when you re dealing with simple-lookingJavaScript can be a little tricky sometimes, even when you re dealing with simple-looking"
              src={obon}
              title="If You Can Answer These 7 Questions If You Can Answer These 7 Questions"
            />
            <PostsCard
              alt="Imagem de um computador"
              description="JavaScript can be a little tricky sometimes, even when you re dealing with simple-lookingJavaScript can be a little tricky sometimes, even when you re dealing with simple-looking"
              src={obon}
              title="If You Can Answer These 7 Questions If You Can Answer These 7 Questions"
            />
            <PostsCard
              alt="Imagem de um computador"
              description="JavaScript can be a little tricky sometimes, even when you re dealing with simple-lookingJavaScript can be a little tricky sometimes, even when you re dealing with simple-looking"
              src={obon}
              title="If You Can Answer These 7 Questions If You Can Answer These 7 Questions"
            />
          </div>
        </div> */}

        <div className="w-full md:mt-16 flex flex-col justify-center items-center gap-4" id="contact">
          <h2 className="text-center w-full text-[42px] sm:text-[72px] italic font-bold">
            {t("Contact.title.first")} <br /> {t("Contact.title.second")}
          </h2>

          <div>
            <ButtonAnimated className="p-6 px-8">
              {t("Contact.button")}
            </ButtonAnimated>
          </div>
          <div className="w-full flex justify-around items-center">
            <p className="w-[200px] lg:w-[270px] text-center font-light italic hidden sm:flex">
              {t("Contact.leftMessage.first")} <br />{" "}
              {t("Contact.leftMessage.second")}{" "}
            </p>
            <div className="clip-custom-card aspect-auto p-10 px-[20%] sm:px-10 max-w-[370px] sm:max-w-[200px] lg:max-w-[400px] xl:max-w-[500px] mx-10 absolute lg:px-28 xl:px-40 bg-black dark:bg-white mt-10">
              <Image
                src={cyberpunkBoy}
                alt="A cyberpunk boy with robotic parts"
                quality={100}
                className="relative"
              />
            </div>
            <p className="w-[200px] lg:w-[270px] text-center font-light italic hidden sm:flex">
              {t("Contact.rightMessage")}
            </p>
          </div>

          <p className="text-base font-bold italic text-center max-w-[730px] mt-10 uppercase">
            {t.rich("Contact.about", {
              span: (children) => (
                <span className="normal-case">{children}</span>
              ),
            })}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 w-full mt-5">
            {socialMedias.map((socialMedia, index) => {
              return (
                <ExternalLink
                  key={index}
                  ariaLabel={socialMedia.ariaLabel}
                  href={socialMedia.href}
                  label={socialMedia.label}
                  title={socialMedia.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
