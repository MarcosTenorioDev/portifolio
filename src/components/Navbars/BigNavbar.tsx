import { useTranslations } from "next-intl";
import LocaleSwitcherButtons from "../LocaleSwitcherButton";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";

const BigNavbar = () => {
  const t = useTranslations('HomePage');
  return (
    <div className="clip-custom-card bg-primary p-6 w-full">
      <nav>
        <ul className="flex text-base">
          <li>
            <Button variant={"link"} className="text-white">
              {t('Navbar.Projects')}
            </Button>
          </li>
          <li>
            {" "}
            <Button variant={"link"} className="text-white">
            {t('Navbar.Blog')}
            </Button>
          </li>
          <li>
            {" "}
            <Button variant={"link"} className="text-white">
            {t('Navbar.ContactMe')}
            </Button>
          </li>
          <div className="flex-1 flex justify-end">
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
  );
};

export default BigNavbar;
