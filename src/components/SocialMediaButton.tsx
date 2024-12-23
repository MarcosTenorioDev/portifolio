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

const SocialMediaButton = ({
  icon: Icon,
  label,
  href,
}: SocialMediaButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "bg-transparent border-none rounded-xl shadow-none dark:text-white border border-input hover:bg-accent hover:text-accent-foreground p-3"
            }
          >
            <Icon className="w-6 h-6" />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="rounded-[4px] dark:border-border dark:border">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SocialMediaButton;
