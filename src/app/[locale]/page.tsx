import BigNavbar from "@/components/Navbars/BigNavbar";
import { useTranslations } from "next-intl";
import ProfileCard from "@/components/ProfileCard";
import TechSkillsCard from "@/components/TechSkillsCard";
import DetailsProfileCard from "@/components/DetailsProfileCard";
import DescriptionProfileCard from "@/components/DescriptionProfileCard";
import ExperienceCard from "@/components/ExperienceCardProps";
import EducationCard from "@/components/EducationCard";
import obon from "@/../public/images/projects/obon/obon-home.png";
import ProjectCard from "@/components/ProjectCard";
import { education } from "@/constants/education";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="grid pb-10 font-roboto max-w-[1680px] mx-auto items-start justify-items-center gap-12 px-4 sm:px-10 md:px-20 pt-6">
      <BigNavbar />
      <div className="w-full h-full flex flex-col xl:flex-row gap-10">
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
        <h3 className="text-center lg:text-start w-full text-sm md:text-base lg:text-lg text-muted-foreground mx-auto lg:mx-0 italic font-bold mb-6 max-w-[600px]">
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
    </div>
  );
}
