"use client"

import React, { useEffect, useState } from "react";
import LocaleSwitcherButtons from "../LocaleSwitcherButton";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const ProjectNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations('ProjectPage');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const params = useParams()
  const locale = params.locale as Locale
  return (
    <div className={`${isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-10 pointer-events-none"} card-wrap w-full fixed z-50 lg:static px-4 lg:px-0 transition-all duration-300 ease-out`}>
      <div className="clip-custom-button bg-primary p-3 pr-10 !border-0 dark:!border-2 after:dark:!border-[3px] before:dark:!border-[3px]">
        <nav>
          <ul className="flex text-base">
            <li>
              <a href={`/${locale}`}>
                <Button variant={"link"} className="text-white">
                  {t("homeBtn")}
                </Button>
              </a>
            </li>
            <div className="flex-1 flex gap-7 justify-end">
              <li className="text-white">
                <LocaleSwitcherButtons />
              </li>
              <li>
                <ModeToggle className="text-white" />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProjectNavbar;
