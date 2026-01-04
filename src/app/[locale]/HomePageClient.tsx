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
import { AnimationWrapper } from "@/components/Animation/animations";
import { useState, useEffect } from "react";
import ZodContactForm from "@/components/ContactForm";
import contactImage from "@/../public/images/contact.svg";
import { motion } from "framer-motion";
import PostsCard from "@/components/PostsCard";
import { PostResponse } from "@/constants/posts";
import ColabCard from "@/components/ColabCard";
import { colabs } from "@/constants/colab";
import { techs } from "@/constants/techs";

interface HomePageClientProps {
  deploy: 'dev' | 'qa';
}

export default function HomePageClient({ deploy }: HomePageClientProps) {
  const t = useTranslations("HomePage");
  const params = useParams();
  const locale = params.locale as Locale;

  const [showForm, setShowForm] = useState(false);
  const [latestPosts, setLatestPosts] = useState<PostResponse[]>([]);

  // Chaveamento baseado no deploy
  const experiencesList = experiences[deploy] || [];
  const educationList = education[deploy] || [];
  const projectPreviewList = projectPreview[deploy] || [];
  const socialMediasList = socialMedias[deploy] || [];
  const colabsList = colabs[deploy] || [];
  const techsList = techs[deploy] || [];

  const handleButtonClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    fetch("https://blog.marcostenorio.me/api/posts/latest")
      .then((res) => res.json())
      .then((data: PostResponse[]) => setLatestPosts(data))
      .catch(() => setLatestPosts([]));
  }, []);

  return (
    <div className="overflow-hidden">
      {" "}
      <BigNavbar />
      <div
        id="home"
        className="grid pb-10 font-roboto max-w-[1680px] mx-auto items-start gap-12 px-4 sm:px-10 md:px-20 pt-[52px] md:pt-[145px]"
      >
        <div className="w-full h-full flex flex-col xl:flex-row gap-10 mt-8 md:mt-0">
          <div className="xl:max-w-[400px]">
            <ProfileCard />
          </div>
          <div className="flex flex-col h-full gap-12">
            <div className="h-fit flex flex-col md:flex-row gap-10">
              <DescriptionProfileCard deploy={deploy} />
              <DetailsProfileCard />
            </div>
            <div className="card-wrap w-full flex-grow">
              <TechSkillsCard techsList={techsList} />
            </div>
          </div>
        </div>

        <div id="experience">
          <AnimationWrapper animation="fadeInRight">
            <div className="w-full">
              <h2 className="text-center lg:text-end w-full text-[42px] sm:text-[72px] italic font-bold mb-6">
                {t("Experience.first")} <br />
                {t("Experience.second")}
              </h2>

              {experiencesList.map((experience, index) => {
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
          </AnimationWrapper>

          <AnimationWrapper animation="fadeInLeft">
            <div className="w-full">
              <h2 className="text-center lg:text-start w-full text-[42px] sm:text-[72px] italic font-bold mb-6">
                {t("Academic.first")} <br />
                {t("Academic.second")}
              </h2>

              {educationList.map((edu, index) => {
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
                    {index < educationList.length - 1 && (
                      <hr className="my-4 border-t border-muted border-1" />
                    )}
                  </div>
                );
              })}
            </div>
          </AnimationWrapper>
        </div>

        <div id="projects">
          <AnimationWrapper animation="fadeInBottom" className="flex flex-col gap-16">
            <div className="w-full">
              <h2 className="text-center lg:text-end w-full text-[42px] sm:text-[72px] italic font-bold">
                {t("Projects.title")}
              </h2>
              <h3 className="text-center lg:text-start w-full text-sm md:text-base lg:text-lg text-muted-foreground mx-auto lg:mx-0 italic font-light mb-6 max-w-[600px]">
                {t("Projects.description")}
              </h3>

              <div className={`${projectPreviewList.length === 1 ? "" : "grid grid-cols-1 md:grid-cols-2 w-full gap-10"} `}>
                {projectPreviewList.map((project, index) => {
                  return (
                    <ProjectCard
                      imageSrc={project.previewImage}
                      subtitle={project.description[locale]}
                      title={project.name}
                      url={project.url}
                      isFullWidth={projectPreviewList.length === 1}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
            {colabsList.map((colab, i) => {
              return (
                <ColabCard
                  title={colab[locale].title}
                  subtitle={colab[locale].subtitle}
                  description={colab[locale].description}
                  link={colab[locale].link}
                  key={i}
                />
              );
            })}
          </AnimationWrapper>
        </div>

        {/* Latest Posts Section */}
        {latestPosts.length > 0 && (
          <div className="w-full mt-20">
            <h2 className="text-center w-full text-[34px] sm:text-[64px] italic font-bold mb-2">
              {t("Posts.title")}
            </h2>
            <h3 className="text-center w-full text-sm md:text-base lg:text-lg text-muted-foreground mx-auto italic font-light mb-12 max-w-[800px]">
              {t("Posts.description")}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {latestPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={
                    latestPosts.length % 2 !== 0 && index === latestPosts.length - 1
                      ? "sm:col-span-2 flex justify-center"
                      : ""
                  }
                >
                  <PostsCard
                    id={post.id}
                    title={post.frontMatter.title}
                    description={post.frontMatter.summary}
                    tags={post.frontMatter.tags}
                    time={post.frontMatter.time}
                    locale={locale}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div id="contact">
          <AnimationWrapper animation="fadeInUp">
            <div className="w-full md:mt-16 flex flex-col justify-center items-center gap-4">
              <h2 className="text-center w-full text-[42px] sm:text-[72px] italic font-bold">
                {t("Contact.title.first")} <br /> {t("Contact.title.second")}
              </h2>

              <div>
                <ButtonAnimated className={`${showForm ? "hidden" : ""} p-6 px-8`} onClick={() => handleButtonClick()}>
                  {t("Contact.button")}
                </ButtonAnimated>
              </div>
              <div className={`${showForm ? "hidden" : "w-full flex justify-around items-center"}`}>
                <p className="w-[200px] lg:w-[270px] text-center font-light italic hidden sm:flex">
                  {t("Contact.leftMessage.first")} <br />{" "}
                  {t("Contact.leftMessage.second")}{" "}
                </p>
                <div className="clip-custom-card aspect-auto p-10 px-[20%] sm:px-10 max-w-[370px] sm:max-w-[200px] lg:max-w-[400px] xl:max-w-[500px] mx-10 absolute lg:px-28 xl:px-40 bg-black dark:bg-white mt-10 !border-0">
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

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={showForm ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`${showForm ? "w-full mt-10" : "hidden"}`}
              >
                <h2 className="font-spaceGrotesk font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-start">
                  {t("ContactForm.title")}
                </h2>
                <h3 className="text-center lg:text-start w-full text-sm md:text-base lg:text-lg text-muted-foreground mx-auto lg:mx-0 italic font-light mb-6 max-w-[600px]">
                  {t("ContactForm.description")}
                </h3>
                <div className="flex justify-between w-full">
                  <div className="p-10 px-[20%] sm:px-4 w-2/4 lg:px-24 xl:px-36 hidden md:block">
                    <Image
                      src={contactImage}
                      alt="A cyberpunk boy with robotic parts"
                      quality={100}
                    />
                  </div>
                  <div className="w-full md:w-2/4">
                    <ZodContactForm />
                  </div>
                </div>
              </motion.div>

              <p className="text-base font-bold italic text-center max-w-[730px] mt-10 uppercase">
                {t.rich("Contact.about", {
                  span: (children) => (
                    <span className="normal-case">{children}</span>
                  ),
                })}
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4 w-full mt-5">
                {socialMediasList.map((socialMedia, index) => {
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
          </AnimationWrapper>
        </div>
      </div >
      <Footer />
    </div >
  );
}

