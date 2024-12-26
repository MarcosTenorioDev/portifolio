import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full border-t py-2 sm:py-4 sm:mt-6">
      <div className="max-w-[1680px] mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <div className="w-fit">
          <span className="flex items-center justify-center font-roboto">
            {" "}
            <p className="font-normal font-roboto text-sm md:text-md">&copy; By </p>
            <Link
              href={"https://github.com/MarcosTenorioDev"}
              className=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acesse meu perfil no GitHub"
            >
              <Button
                variant={"link"}
                className="dark:text-white text-sm md:text-md px-2 font-normal font-roboto underline"
                title="Visite meu GitHub"
              >
                Marcos Tenório
              </Button>
            </Link>
          </span>
        </div>

        <Link href={"#"} className="" aria-label="Go to top">
          <Button
            variant={"link"}
            className="dark:text-white text-sm md:text-md px-2 font-normal font-roboto"
            title="Go to top"
          >
            Go back to top
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
