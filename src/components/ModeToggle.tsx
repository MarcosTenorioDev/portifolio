"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const t = useTranslations("HomePage");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="text-white">
          <div className="flex items-center gap-2 transition-all dark:hidden">
            <p>{t('Navbar.LightMode')}</p>
            <Sun />
          </div>
          <div className="items-center gap-2 transition-all hidden dark:flex">
          <p>{t('Navbar.DarkMode')}</p>
            <Moon />
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="clip-custom-select p-2 bg-card dark">
        <DropdownMenuItem onClick={() => setTheme("light")}>
        {t('Navbar.Light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
        {t('Navbar.Dark')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
        {t('Navbar.System')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
