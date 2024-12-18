import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SocialMediaButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SocialMediaButton = ({ icon: Icon, label, href }: SocialMediaButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="bg-transparent border-none shadow-none rounded-xl" size="icon">
              <Icon  />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="rounded-[4px] dark:border-border dark:border" >
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SocialMediaButton;
