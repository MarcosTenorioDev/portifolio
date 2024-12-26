import React from "react";
import { Card } from "./ui/card";
import Me from "@/../public/images/me.jpg";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialMediaButton from "./SocialMediaButton";
import { useTranslations } from "next-intl";

const ProfileCard = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="card-wrap">
      <Card className="h-full lg:min-w-[400px] lg:max-h-[700px] overflow-hidden relative group clip-custom-card">
        <div className="p-8 space-y-4 h-full flex flex-col justify-center items-center">
          {/* Profile Image */}
          <div className="relative w-[150px] sm:w-[250px] sm:h-[300px] lg:h-[300px] mx-auto aspect-square overflow-hidden rounded-lg clip-custom-card">
            <Image
              src={Me}
              alt="Marcos Tenório, desenvolvedor de software"
              className="object-cover w-full h-full object-right"
              quality={100}
            />
          </div>

          {/* Name */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider text-center">
            Marcos Tenório
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg font-medium text-center leading-relaxed">
            {t("ProfileCard.Description")}
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <SocialMediaButton
              icon={Github}
              label="Github"
              href="https://github.com/MarcosTenorioDev"
            />
            <SocialMediaButton
              icon={Linkedin}
              label="Linkedin"
              href="https://www.linkedin.com/in/marcostenoriodev/"
            />
            <SocialMediaButton
              icon={Mail}
              label="Email"
              href="mailto:marcostenorio2003@gmail.com"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
