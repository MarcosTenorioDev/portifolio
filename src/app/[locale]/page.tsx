import BigNavbar from "@/components/Navbars/BigNavbar";
import ProfileCard from "@/components/ProfileCard";
import TechSkillsCard from "@/components/TechSkillsCard";
import DetailsProfileCard from "@/components/DetailsProfileCard";
import DescriptionProfileCard from "@/components/DescriptionProfileCard";
import ExperienceCard from "@/components/ExperienceCardProps";
import EducationCard from "@/components/EducationCard";
import obon from "@/../public/images/projects/obon/obon-home.png";
import ProjectCard from "@/components/ProjectCard";
import { education } from "@/constants/education";
import cyberpunkBoy from "@/../public/images/cyberpunkBoy.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import ExternalLink from "@/components/ExternalLink";
import ButtonAnimated from "@/components/ButtonAnimated";

export default function HomePage() {
  /* const t = useTranslations("HomePage"); */

  return (
    <>
      <div className="grid pb-10 font-roboto max-w-[1680px] mx-auto items-start gap-12 px-4 sm:px-10 md:px-20 mt-[52px] md:mt-[145px]">
        <BigNavbar />
        <div className="w-full h-full flex flex-col xl:flex-row gap-10 mt-8 md:mt-0">
          <div className="w-full">
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
        <div className="w-full">
          <h2 className="text-center lg:text-end w-full text-[42px] sm:text-[72px] italic font-bold mb-6">
            2 YEARS OF <br />
            EXPERIENCE
          </h2>
          <ExperienceCard
            title="Direction Systems"
            subtitle="Desenvolvedor Fullstack"
            description="Atuei como desenvolvedor fullstack, com experiência em Front-end utilizando Angular, React e Bootstrap, e no Back-end com .NET C#. Durante minha trajetoria, desenvolvi integrações de APIs, implementei gateways de pagamento e contribui ativamente no gerenciamento de projetos. Além disso, trabalhei com metodologias ageis, promovendo uma colaboração eficiente em equipe."
            dateRange="Nov-2023 / Jul-2024"
          />
        </div>
        <div className="w-full">
          <h2 className="text-center lg:text-start w-full text-[42px] sm:text-[72px] italic font-bold mb-6">
            Academic summary <br /> and courses
          </h2>

          {education.map((edu, index) => {
            return (
              <div key={index}>
                <EducationCard {...edu} />
                {index < education.length - 1 && (
                  <hr className="my-4 border-t border-muted border-1" />
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <h2 className="text-center lg:text-end w-full text-[42px] sm:text-[72px] italic font-bold">
            Featured Cases
          </h2>
          <h3 className="text-center lg:text-start w-full text-sm md:text-base lg:text-lg text-muted-foreground mx-auto lg:mx-0 italic font-light mb-6 max-w-[600px]">
            My creative spirit comes alive in the digital realm. With nimble
            fingers flying across the keyboard, I craft clear experiences out of
            nothing but ones and zeroes.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
            <ProjectCard
              imageSrc={obon}
              subtitle="///Events platform"
              title="Obon"
            />
            <ProjectCard
              imageSrc={obon}
              subtitle="///Events platform"
              title="Obon"
            />
            <ProjectCard
              imageSrc={obon}
              subtitle="///Events platform"
              title="Obon"
            />
            <ProjectCard
              imageSrc={obon}
              subtitle="///Events platform"
              title="Obon"
            />
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

        <div className="w-full md:mt-16 flex flex-col justify-center items-center gap-4">
          <h2 className="text-center w-full text-[42px] sm:text-[72px] italic font-bold">
            LET&apos;S WORK <br /> TOGETHER
          </h2>

          <div>
            <ButtonAnimated className="p-6 px-8">Contact now*</ButtonAnimated>
          </div>
          <div className="w-full flex justify-around items-center">
            <p className="w-[200px] lg:w-[270px] text-center font-light italic hidden sm:flex">
              software is an <br /> outlet for your vision.
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
              With a keyboard as my brush, I paint vivid experiences using
              nothing but the language of ones and zeroes.
            </p>
          </div>

          <p className="text-base font-bold italic text-center max-w-[730px] mt-10 uppercase">
            Based in <span className="normal-case">Recife, Brazil,</span> I am
            an innovative fullstack developer and digital creator. My passion
            for clean, minimalist design, scalable architecture, and intuitive
            user experiences is evident in every project I build.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 w-full mt-5">
            <ExternalLink
              ariaLabel="Acesse meu perfil no GitHub"
              href={"https://github.com/MarcosTenorioDev"}
              label="Github"
              title="Acesse meu perfil no GitHub"
            />
            <ExternalLink
              ariaLabel="Acesse meu perfil no GitHub"
              href={"https://github.com/MarcosTenorioDev"}
              label="Github"
              title="Acesse meu perfil no GitHub"
            />
            <ExternalLink
              ariaLabel="Acesse meu perfil no GitHub"
              href={"https://github.com/MarcosTenorioDev"}
              label="Github"
              title="Acesse meu perfil no GitHub"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
