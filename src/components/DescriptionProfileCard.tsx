import { FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const DescriptionProfileCard = () => {
    return (
      <div className="card-wrap">
        <Card className="clip-custom-card w-full pt-6 flex flex-col justify-between">
          <CardContent>
            <p className="sm:text-justify text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="default"
              className="clip-custom-button mx-auto p-6 w-full max-w-[250px] font-bold dark:bg-white dark:text-black"
            >
              Download CV <FileDown />
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };


export default DescriptionProfileCard;