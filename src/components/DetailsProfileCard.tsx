import { useTranslations } from "next-intl";
import { Card, CardContent } from "./ui/card";

function DetailsProfileCard(){
  const t = useTranslations("HomePage")
    return (
      <div className="flex flex-col justify-between gap-6 md:gap-4 card-wrap">
        <Card className="clip-custom-card md:w-[200px] lg:w-[300px] flex justify-center p-5">
          <CardContent className="p-0">
            <p className="my-auto text-xs text-center"> {t("DetailsCard.Card1")} </p>
          </CardContent>
        </Card>
        <Card className="clip-custom-card md:w-[200px] lg:w-[300px] flex justify-center p-5">
          <CardContent className="p-0">
            <p className="my-auto text-xs text-center"> {t("DetailsCard.Card2")} </p>
          </CardContent>
        </Card>
        <Card className="clip-custom-card md:w-[200px] !border-0 lg:w-[300px] flex justify-center p-5 bg-primary text-white dark:bg-white dark:text-black dark:!border-0">
          <CardContent className="p-0">
            <p className="my-auto text-xs text-center"> {t("DetailsCard.Card3")} </p>
          </CardContent>
        </Card>
      </div>
    );
  };


  export default DetailsProfileCard;