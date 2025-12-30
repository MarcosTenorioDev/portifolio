import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ButtonProps } from "@/components/ui/button";  // Importando Button e ButtonProps

interface ButtonAnimatedProps extends ButtonProps {
  className?: string; // Permite personalizar a classe externa
  locale?: string;
}

const ButtonAnimated = ({ children, className,locale, ...props }: ButtonAnimatedProps) => {
  return (
    <div className="w-full h-full">
      <span
        className={cn(
          buttonVariants({ variant: "default" }),
          "clip-custom-button font-bold font-roboto bg-black text-white dark:bg-white dark:text-black cursor-pointer relative overflow-hidden group w-full px-[16.9px] dark:px-[15px]",
          "transition-colors duration-300 ease-out",
          className // Aplicando a classe externa recebida via props
        )}
        {...props} // Passando as outras props para o componente (ex: onClick)
      >
        {children}
        <span
          typeof="button"
          className={cn(
            buttonVariants({ variant: "default" }),
            "pb-3 w-full h-full font-bold font-roboto BtnAnimated bg-white text-black dark:!border-0 dark:bg-black dark:text-white absolute top-0 pt-3 -left-[105%] transition-all duration-300 ease-out group-hover:left-0 group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white z-10"
          )}
        >
           {children}
           {locale === "en" ? "(en-US)" : "(pt-BR)"}
        </span>
      </span>
    </div>
  );
};

export default ButtonAnimated;
