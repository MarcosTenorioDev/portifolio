"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcherButtons from "../LocaleSwitcherButton";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileMenuLink from "../MobileMenuLink";
import ButtonAnimated from "../ButtonAnimated";
import { PlusIcon } from "lucide-react";
import { socialMedias } from "@/constants/socialMedias";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInBottomNavbar } from "../Animation/animations";

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
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      } transition-all duration-300 ease-out w-full flex justify-between fixed max-w-[1680px] px-4 sm:px-10 md:px-20 top-0 z-[30] left-1/2 transform -translate-x-1/2 pt-7`}
    >
    <motion.div
      variants={fadeInBottomNavbar}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full"
    >
      <div className="card-wrap w-full hidden md:block">
        <div className="clip-custom-card bg-primary p-6 pr-10 !border-0 dark:!border-2">
          <nav>
            <ul className="flex text-base">
              <li>
                <a href="#projects">
                  <Button variant={"link"} className="text-white">
                    {t("Navbar.Projects")}
                  </Button>
                </a>
              </li>
              <li>
                <a href="#experience">
                  <Button variant={"link"} className="text-white">
                    {t("Navbar.Experience")}
                  </Button>
                </a>
              </li>
              {/* <li>
                {" "}
                <Button variant={"link"} className="text-white">
                  {t("Navbar.Blog")}
                </Button>
              </li> */}
              <li>
                {" "}
                <a href="#contact">
                  <Button variant={"link"} className="text-white">
                    {t("Navbar.ContactMe")}
                  </Button>
                </a>
              </li>
              <div className="flex-1 flex gap-7 justify-end">
                <li className="text-white">
                  <LocaleSwitcherButtons />
                </li>
                <li>
                  <ModeToggle />
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>

      <div className="w-full px-6 md:hidden">
        <div className="w-full flex justify-end max-w-[1680px] mx-auto">
          <Sheet open={isMenuOpen} onOpenChange={handleMenuToggle}>
            <div className={`w-full flex justify-between`}>
              <ModeToggle />
              <SheetTrigger>
                <ButtonAnimated>MENU</ButtonAnimated>
              </SheetTrigger>
            </div>
            <SheetContent
              className="border-0 !max-w-full w-full md:w-[600px] flex flex-col overflow-auto justify-between pb-10"
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
                    href="#projects"
                    label={t("Navbar.Projects")}
                    title={t("Navbar.Projects")}
                    ariaLabel={t("Navbar.Projects")}
                    index={1}
                    onClick={() => setIsMenuOpen(false)}
                  />

                  <MobileMenuLink
                    href="#experience"
                    label={t("Navbar.Experience")}
                    title={t("Navbar.Experience")}
                    ariaLabel={t("Navbar.Experience")}
                    index={2}
                    onClick={() => setIsMenuOpen(false)}
                  />

                  {/* <MobileMenuLink
                    href="/"
                    label={t("Navbar.Blog")}
                    title={t("Navbar.Blog")}
                    ariaLabel={t("Navbar.Blog")}
                    index={2}
                  /> */}

                  <MobileMenuLink
                    href="#contact"
                    label={t("Navbar.ContactMe")}
                    title={t("Navbar.ContactMe")}
                    ariaLabel={t("Navbar.ContactMe")}
                    index={3}
                    onClick={() => setIsMenuOpen(false)}
                  />

                  <li
                    className="group border-b border-dashed border-muted-foreground flex justify-center gap-2 py-3"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document.getElementById("localeBtn")?.click();
                    }}
                  >
                    <PlusIcon className="mt-1 w-3 sm:w-4 h-3 sm:h-4" />
                    <div className="relative overflow-hidden">
                      <span className="block transition-transform duration-300 group-hover:-translate-y-[105%]">
                        <LocaleSwitcherButtons
                          className="text-black dark:text-white w-full h-full text-4xl sm:text-6xl font-bold font-spaceGrotesk flex justify-center gap-1 sm:gap-2 !no-underline"
                          id="localeBtn"
                        />
                      </span>
                      <span className="absolute -bottom-[105%] left-0 transition-all duration-300 ease-out group-hover:bottom-0">
                        <LocaleSwitcherButtons className="text-black dark:text-white w-full h-full text-4xl sm:text-6xl font-bold font-spaceGrotesk flex justify-center gap-1 sm:gap-2 !no-underline" />
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold mt-2 font-roboto">
                      /04
                    </span>
                  </li>
                </ul>
              </nav>
              <div className="flex justify-around text-base font-spaceGrotesk">
                {socialMedias.map(
                  ({ ariaLabel, href, label, title }, index) => {
                    return (
                      <div
                        className="group flex justify-center gap-2 p-2 border border-dashed border-muted-foreground w-full py-2 sm:py-3"
                        key={index}
                      >
                        <div className="relative overflow-hidden">
                          <Link
                            href={href}
                            className="flex items-center justify-center group"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={ariaLabel}
                          >
                            <Button
                              variant={"link"}
                              className="dark:text-white text-2xl sm:text-4xl px-2 relative !no-underline"
                              title={title}
                            >
                              <span className="relative z-10">{label}</span>
                              <span
                                className="absolute bottom-4 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"
                                aria-hidden="true"
                              ></span>
                            </Button>
                          </Link>{" "}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default BigNavbar;
