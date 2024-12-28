"use client"

import React from "react";
import LocaleSwitcherButtons from "../LocaleSwitcherButton";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";

const ProjectNavbar = () => {
  const params = useParams()
  const locale = params.locale as Locale
  return (
    <div className="card-wrap w-full">
      <div className="clip-custom-button bg-primary p-3 pr-10 !border-0 dark:!border-2 after:dark:!border-[3px] before:dark:!border-[3px]">
        <nav>
          <ul className="flex text-base">
            <li>
              <a href={`/${locale}`}>
                <Button variant={"link"} className="text-white">
                  Home
                </Button>
              </a>
            </li>
            <div className="flex-1 flex gap-7 justify-end">
              <li className="text-white">
                <LocaleSwitcherButtons />
              </li>
              <li>
                <ModeToggle className="text-white"/>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProjectNavbar;
