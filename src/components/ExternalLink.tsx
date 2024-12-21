import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ExternalLinkIcon } from "lucide-react";

interface ExternalLinkProps {
  href: string;
  title: string;
  label: string;
  ariaLabel: string;
}

const ExternalLink = ({ ariaLabel, href, label, title }: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <Button
        variant={"link"}
        className="dark:text-white text-sm sm:text-lg px-2 relative !no-underline"
        title={title}
      >
        <span className="relative z-10">{label}</span>
        <span
          className="absolute bottom-4 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"
          aria-hidden="true"
        ></span>
      </Button>
      <ExternalLinkIcon className="w-4 h-4 sm:w-6 sm:h-6 ml-2" />
    </Link>
  );
};

export default ExternalLink;
