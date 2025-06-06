import React from 'react'
import TechIcon from './TechIcon'
import { Card, CardHeader, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'
import { cn } from '@/lib/utils'
import { Locale } from '@/i18n/routing'
import { TechGroup } from '@/constants/projects'
import { useTranslations } from 'next-intl'

interface ProjectTechStackCardProps extends React.HTMLAttributes<HTMLDivElement> {
    techGroups: TechGroup[]
    locale: Locale
}

const ProjectTechStackCard = ({ className, techGroups, locale, ...props }: ProjectTechStackCardProps) => {
      const t = useTranslations('ProjectPage');
    
    return (
        <Card className={cn("clip-custom-card w-full mt-6 lg:my-6 h-[89%] bg-primary !border-black !border-0 dark:!border-border dark:!border-2", className)} {...props}>
            <CardHeader className="pb-0 w-full mx-auto text-white">
                <h2 className="text-2xl font-bold text-center xl:text-start">
                    {t('techCardTitle')}
                </h2>
            </CardHeader>
            <CardContent className="w-full mx-auto">
                <p className="text-sm font-light text-gray-400 text-center xl:text-start">
                {t('techCardDescription')}
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-start mt-4 mb-6">
                    {techGroups.map((group, index) => (
                        <div className="w-full" key={index}>
                            <h2 className="text-lg font-bold italic w-full text-white">
                                {group.label[locale]}
                            </h2>
                            <Carousel className="w-full px-6 lg:px-8">
                                <CarouselContent className="w-full flex justify-evenly">
                                    {group.techs.map((image, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="w-fit basis-auto text-white"
                                        >
                                            <TechIcon
                                                image={image.image}
                                                alt={image.label}
                                                label={image.label}
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="-left-2 xl:left-2 disabled:hidden" />
                                <CarouselNext className="-right-2 xl:right-2 disabled:hidden" />
                            </Carousel>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default ProjectTechStackCard