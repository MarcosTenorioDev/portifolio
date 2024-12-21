import Image, { StaticImageData } from "next/image";
import React from "react";

interface PostCardProps{
    src: string | StaticImageData;
    alt: string;
    title: string;
    description: string;
}

const PostsCard = ({alt, description, src, title}: PostCardProps) => {
  return (
    <div className="sm:max-w-[350px] w-auto mx-auto">
      <div className="card-wrap">
        <div className="clip-custom-card aspect-video dark:!border-0 relative overflow-hidden">
          <Image
            src={src}
            alt={alt}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
      <h3 className="text-base md:text-lg lg:text-xl pr-4 line-clamp-2 mt-2">
        {title}
      </h3>
      <p className="text-sm lg:text-base font-light text-muted-foreground line-clamp-3 mt-3">
        {description}
      </p>
    </div>
  );
};

export default PostsCard;
