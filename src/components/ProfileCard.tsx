import React from "react";
import { Card } from "./ui/card";
import Me from "@/../public/images/me.jpg";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialMediaButton from "./SocialMediaButton";
import { useTranslations } from "next-intl";

const ProfileCard = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="card-wrap">
      <Card className="2xl:max-w-[450px] h-full max-h-[500px] 2xl:max-h-[700px] overflow-hidden relative group clip-custom-card">
      <div className="p-8 space-y-4 h-full flex flex-col justify-center items-center">
        {/* Profile Image */}
        <div className="relative 2xl:w-[93%] 2xl:max-w-[450px] mx-auto aspect-square overflow-hidden rounded-lg clip-custom-card">
          <Image
            src={Me}
            alt="Profile"
            className="object-cover w-full h-full"
            quality={100}
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold tracking-wider text-center">
          Marcos Tenório
        </h2>

        {/* Description */}
        <p className="text-lg font-medium text-center leading-relaxed">
          {t("ProfileCard.Description")}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
         <SocialMediaButton icon={Github} label="Github" href="https://github.com/MarcosTenorioDev" />
         <SocialMediaButton icon={Linkedin} label="Linkedin" href="https://www.linkedin.com/in/marcostenoriodev/" />
         <SocialMediaButton icon={Mail} label="Email" href="mailto:marcostenorio2003@gmail.com" />
        </div>
      </div>
    </Card>
    </div>
    
  );
};

export default ProfileCard;
