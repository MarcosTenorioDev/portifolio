import { FileDown } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import ButtonAnimated from "./ButtonAnimated";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";

interface DescriptionProfileCardProps {
  deploy: 'dev' | 'qa';
}

const DescriptionProfileCard = ({ deploy }: DescriptionProfileCardProps) => {
  const t = useTranslations("HomePage");
  const params = useParams()
  const locale = params.locale as Locale
  const filePath = `/cv-${locale}-${deploy}.pdf`;

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
            <ButtonAnimated className="p-6 px-8"  onClick={() => window.open(filePath)} locale={locale}>
              {t("DescriptionCard.ButtonLabel")} <FileDown />
            </ButtonAnimated>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DescriptionProfileCard;
