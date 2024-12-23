"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcherButtons from "../LocaleSwitcherButton";
import { ModeToggle } from "../ModeToggle";
import { Button, buttonVariants } from "../ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileMenuLink from "../MobileMenuLink";
import ButtonAnimated from "../ButtonAnimated";

const BigNavbar = () => {
  const t = useTranslations("HomePage");
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  // Restaura o estado do menu ao carregar o componente
  useEffect(() => {
    const savedMenuState = localStorage.getItem("menuOpen");
    if (savedMenuState === "true") {
      setIsMenuOpen(true);
    }
  }, []);

  // Salva o estado do menu ao abrir/fechar
  const handleMenuToggle = (open: boolean) => {
    setIsMenuOpen(open);
    localStorage.setItem("menuOpen", open.toString());
  };

  return (
    <div
      className={`${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      } transition-all duration-300 ease-out w-full flex justify-between fixed max-w-[1680px] px-4 sm:px-10 md:px-20 top-0 z-[30] left-1/2 transform -translate-x-1/2 pt-7`}
    >
      <div className="card-wrap w-full hidden md:block">
        <div className="clip-custom-card bg-primary p-6">
          <nav>
            <ul className="flex text-base">
              <li>
                <Button variant={"link"} className="text-white">
                  {t("Navbar.Projects")}
                </Button>
              </li>
              <li>
                {" "}
                <Button variant={"link"} className="text-white">
                  {t("Navbar.Blog")}
                </Button>
              </li>
              <li>
                {" "}
                <Button variant={"link"} className="text-white">
                  {t("Navbar.ContactMe")}
                </Button>
              </li>
              <div className="flex-1 flex gap-7 justify-end">
                <li className="text-white">
                  <LocaleSwitcherButtons label="Change language" />
                </li>
                <li>
                  <ModeToggle />
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>

      <div className="w-full fixed top-0 right-0 z-50 px-6 md:hidden">
        <div className="w-full flex justify-end max-w-[1680px] mx-auto p-6 px-4 sm:px-10 md:px-20">
          <Sheet open={isMenuOpen} onOpenChange={handleMenuToggle}>
            <div
              className={`w-full flex justify-between`}
            >
              <ModeToggle />
              <SheetTrigger>
                <ButtonAnimated>MENU</ButtonAnimated>
              </SheetTrigger>
            </div>
            <SheetContent
              className="border-0 !max-w-full w-full md:w-[600px] flex flex-col overflow-auto justify-between"
              hiddenCloseBtn={true}
            >
              <SheetClose className="w-fit self-end clip-custom-button !border-0">
              <ButtonAnimated>MENU</ButtonAnimated>
              </SheetClose>
              <div className="menuBg"></div>
              <SheetTitle className="hidden">Menu</SheetTitle>
              <nav className=" py-10">
                <ul className="flex text-base font-spaceGrotesk flex-col text-center border-x border-t border-dashed border-muted-foreground">
                  <MobileMenuLink
                    href="/"
                    label={t("Navbar.Projects")}
                    title={t("Navbar.Projects")}
                    ariaLabel={t("Navbar.Projects")}
                    index={1}
                  />

                  <MobileMenuLink
                    href="/"
                    label={t("Navbar.Blog")}
                    title={t("Navbar.Blog")}
                    ariaLabel={t("Navbar.Blog")}
                    index={2}
                  />

                  <MobileMenuLink
                    href="/"
                    label={t("Navbar.ContactMe")}
                    title={t("Navbar.ContactMe")}
                    ariaLabel={t("Navbar.ContactMe")}
                    index={3}
                  />

                  <li>
                    <LocaleSwitcherButtons label="Change language" />
                  </li>
                </ul>
              </nav>
              <h1>teste</h1>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default BigNavbar;
