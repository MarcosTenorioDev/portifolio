import { Card, CardContent } from "./ui/card";

function DetailsProfileCard(){
    return (
      <div className="flex flex-col justify-between gap-6 sm:gap-4 card-wrap">
        <Card className="clip-custom-card sm:w-[200px] md:w-[300px] xl:w-[300px] flex justify-center p-5">
          <CardContent className="p-0">
            <p className="my-auto"> Lorem Ipsum is simply </p>
          </CardContent>
        </Card>
        <Card className="clip-custom-card sm:w-[200px] md:w-[300px] xl:w-[300px] flex justify-center p-5">
          <CardContent className="p-0">
            <p className="my-auto"> Lorem Ipsum is simply </p>
          </CardContent>
        </Card>
        <Card className="clip-custom-card sm:w-[200px] !border-0 md:w-[300px] xl:w-[300px] flex justify-center p-5 bg-primary text-white dark:bg-white dark:text-black dark:!border-0">
          <CardContent className="p-0">
            <p className="my-auto"> Lorem Ipsum is simply </p>
          </CardContent>
        </Card>
      </div>
    );
  };


  export default DetailsProfileCard;