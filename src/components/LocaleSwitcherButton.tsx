"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

export default function LocaleSwitcherButtons({
  className,
  variant = "link",
  ...props	
}: ButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as Locale;

  function onLocaleChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <div
      role="group"
      aria-label="Change language"
      className="flex gap-2 justify-center items-center w-full h-full"
    >
      <Button
        onClick={() => onLocaleChange(locale === "en" ? "pt" : "en")}
        className={`${cn("text-white p-0 w-full h-full", className)}`}
        aria-label={`Switch to ${locale}`}
        variant={variant}
        {...props}
      >
        {locale === "en" ? "en-us" : "pt-br"}
      </Button>
    </div>
  );
}
