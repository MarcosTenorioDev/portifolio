import { ModeToggle } from "@/components/ModeToggle";
import BigNavbar from "@/components/Navbars/BigNavbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="grid border-4 border-red-500 font-roboto grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <BigNavbar />
      {/* <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ModeToggle />
        <p>teste</p>
        <Button className="clip-custom-button border-red-500"> Olá</Button>
        <Button className="clip-custom-button"> Contact-me</Button>
        <p className="font-bold border-red-500 border-4">teste roboto</p>

        <Card className="clip-custom-card w-full">
          <CardHeader>Header</CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>footer</CardFooter>
        </Card>

        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
          <div className="clip-custom-card  bg-white shadow-lg p-8 max-w-sm border-4 border-red-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Custom Card
            </h2>
            <p className="text-gray-600">
              This card uses a custom clip-path to create a unique polygon
              shape.
            </p>
          </div>
        </div>
      </main> */}
    </div>
  );
}
