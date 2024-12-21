"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  label: string;
};

export default function LocaleSwitcherButtons({ label }: Props) {
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
      aria-label={label}
      className="flex gap-2 justify-center items-center"
    >
      <Button
          onClick={() => onLocaleChange(locale === "en" ? "pt" : "en")}
          className="text-white"
          aria-label={`Switch to ${locale}`}
          variant={"link"}
        >
          {locale === "en" ? "en-us" : "pt-br"}
        </Button>
    </div>
  );
}
