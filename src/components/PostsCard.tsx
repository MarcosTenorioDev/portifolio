import React from "react";
import { ArrowUpRight } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  time: string;
  locale: string;
}

const PostsCard = ({ id, title, description, time, locale }: PostCardProps) => {
  const formattedDate = new Date(time).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const handleClick = () => {
    window.open(`https://blog.marcostenorio.me/blog/${id}`, "_blank");
  };

  return (
    <div
    className="sm:max-w-[400px] w-full mx-auto rounded-lg flex flex-col items-center justify-center px-6 text-center min-h-[150px] sm:min-h-[180px] bg-transparent relative transition-transform duration-200 hover:scale-105 cursor-pointer border border-black/20 dark:border-muted"
    onClick={handleClick}
    role="button"
    tabIndex={0}
    onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
  >
    {/* Seta diagonal no canto superior direito */}
    <span className="absolute top-3 right-3 text-muted-foreground">
      <ArrowUpRight size={22} strokeWidth={1} />
    </span>
    <div className="min-h-[56px] flex items-center w-full sm:mb-2">
      <h3
        className="text-lg sm:text-2xl font-bold line-clamp-2 w-full text-center"
      >
        {title}
      </h3>
    </div>
    <span className="text-[10px] text-muted-foreground mb-2">{formattedDate}</span>

    <p className="text-xs font-light text-muted-foreground line-clamp-3 max-w-full">
      {description}
    </p>
  </div>
  );
};

export default PostsCard;
