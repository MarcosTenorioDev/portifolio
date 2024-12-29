import React from 'react';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ProjectLinksCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  href: string;
  icon: LucideIcon;
}

const ProjectLinksCard = ({ className, label, href, icon: Icon, ...props }: ProjectLinksCardProps) => {
  return (
    <Link href={href} target="_blank" className='w-full xl:min-w-[200px] 2xl:min-w-[300px]'>
      <Card
        className={cn(
          "clip-custom-card w-full h-fit flex flex-col items-center justify-center p-5 gap-2 hover:underline",
          className
        )}
        {...props}
      >
        <CardContent className="p-0 flex flex-col items-center gap-2">
          <p className="text-xs font-semibold flex items-center gap-4">{label} <Icon className="min-w-4 min-h-4 max-w-4 max-h-4 text-current" />
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectLinksCard;
