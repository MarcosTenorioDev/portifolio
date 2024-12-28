import Image from "next/image";
import React from "react";
import notFoundImage from "@/../public/images/404.svg";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="bg-black font-roboto">
      <Image
        src={notFoundImage}
        alt="404 - Page Not Found"
        fill={true}
        quality={100}
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-between border-[15px] md:border-[25px] border-black overflow-hidden">
        <Link
          href="/"
          passHref
          aria-label="Voltar para a página inicial"
          title="Página inicial"
          className={cn(
            buttonVariants({ variant: "link", size: "lg" }),
            "bg-black text-white clip-custom-button py-6 w-min !border-0"
          )}
        >
          <ArrowLeft /> Back to homepage
        </Link>
        <div
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "bg-black text-white clip-custom-button self-end py-6 w-min !border-0"
          )}
        >
          404 - Page Not Found
        </div>
      </div>
    </div>
  );
};

export default NotFound;
