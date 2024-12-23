import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface MobileMenuLinkProps {
  href: string;
  label: string;
  title: string;
  ariaLabel?: string;
  index: number;
}

const MobileMenuLink = ({
  href,
  label,
  title,
  ariaLabel,
  index,
}: MobileMenuLinkProps) => {
  return (
    <li className="border-b border-dashed border-muted-foreground flex">
      <Link
        aria-label={ariaLabel}
        href={href}
        title={title}
        className="w-full h-full text-4xl sm:text-6xl pb-4 pt-2 font-bold font-spaceGrotesk flex justify-center gap-1 sm:gap-2 group relative"
      >
        <PlusIcon className="mt-1 w-3 sm:w-4 h-3 sm:h-4" />
        <div className="relative overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-[105%]">
            {label}
          </span>
          <span className="absolute -bottom-[105%] left-0 transition-all duration-300 ease-out group-hover:bottom-0">
            {label}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-bold mt-2 font-roboto">
          /0{index}
        </span>
      </Link>
    </li>
  );
};

export default MobileMenuLink;
