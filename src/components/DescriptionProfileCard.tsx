import { FileDown } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import ButtonAnimated from "./ButtonAnimated";
import { useTranslations } from "next-intl";

const DescriptionProfileCard = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="card-wrap">
      <Card className="clip-custom-card w-full pt-6 flex flex-col justify-between">
        <CardContent>
          <p className="text-xs sm:text-sm sm:text-justify text-center">
            {t("DescriptionCard.Content")}
          </p>
        </CardContent>
        <CardFooter>
          <div className="max-w-[250px] w-full mx-auto">
            <ButtonAnimated className="p-6 px-8">
              {t("DescriptionCard.ButtonLabel")} <FileDown />
            </ButtonAnimated>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DescriptionProfileCard;
