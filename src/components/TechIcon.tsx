import Image from "next/image";

interface TechIconProps {
  label: string;
  image: string;
  alt: string;
}

const TechIcon = ({ label, image, alt }: TechIconProps) => {
  return (
    <div className="flex flex-col items-center xl:h-20 justify-center">
      <Image
        src={image}
        alt={alt}
        quality={75}
        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain flex-grow"
      />
      <p className="text-xs max-w-[100px] md:text-sm text-center lg:text-md">
        {label}
      </p>
    </div>
  );
};

export default TechIcon;
