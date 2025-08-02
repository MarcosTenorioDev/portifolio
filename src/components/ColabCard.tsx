'use client'

import { Card } from '@/components/ui/card'
import techIcons from '@/constants/techs'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Button } from './ui/button'

interface ColabCardProps {
  title: string
  subtitle: string
  description: string
  link: string
}

export default function ColabCard({
  title,
  subtitle,
  description,
  link,
}: ColabCardProps) {
  const t = useTranslations("HomePage");

  return (
    <Card
      className="relative w-full overflow-hidden transition-all duration-300 border-none font-roboto bg-transparent text-justify shadow-none rounded-[4px]"
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 md:space-x-4 lg:space-x-8">
          <a className="flex-shrink-0 m-auto" target='_blank' rel='noreferrer' href={link} >
            <Button variant={'link'} className="text-xs underline md:no-underline mx-auto w-fit text-white mt-0 pt-0 flex-col h-auto">
              <Image
                src={techIcons.Colab}
                alt="Colab Logo"
                quality={100}
                width={200}
                height={200}
                draggable="false"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain mx-auto"
              />
              {t("Colab.seeDetails")}
            </Button>
          </a>

          <div className="flex-1 space-y-2 sm:space-y-4 text-center lg:text-left">
            <div>
              <h2 className="text-md sm:text-lg lg:text-2xl italic font-bold">{title}</h2>
              <p className="text-sm sm:text-md lg:text-base text-opacity-70 italic font-light">{subtitle}</p>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

