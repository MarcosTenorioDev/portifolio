'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'

interface ExperienceCardProps {
  title: string
  subtitle: string
  description: string
  dateRange: string
  textColor?: string
}

export default function ExperienceCard({
  title,
  subtitle,
  description,
  dateRange,
}: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative w-full overflow-hidden transition-all duration-300 border-none font-roboto bg-transparent text-justify shadow-none hover:bg-muted rounded-[4px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl italic font-bold">{title}</h2>
            <p className="text-opacity-70 italic font-light">{subtitle}</p>
          </div>
          
          <p className="text-sm leading-relaxed font-no">{description}</p>

          <div className="text-sm font-bold">
            {dateRange}
          </div>
        </div>
      </div>
    </Card>
  )
}

