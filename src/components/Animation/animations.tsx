import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Definições das animações
const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, // Começa invisível e abaixo
  show: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fica visível e no lugar
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 }, // Começa invisível e na direita
  show: { opacity: 1, x: 0, transition: { duration: 1 } }, // Fica visível e no lugar
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 }, // Começa invisível e na esquerda
  show: { opacity: 1, x: 0, transition: { duration: 1 } }, // Fica visível e no lugar
};

const fadeInBottom = {
  hidden: { opacity: 0, y: -50 }, // Começa invisível e acima
  show: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fica visível e no lugar
};

const fadeInCenter = {
  hidden: { opacity: 0, scale: 0.5 }, // Começa invisível e menor
  show: { opacity: 1, scale: 1, transition: { duration: 1 } }, // Fica visível e no tamanho original
};

const fadeInBottomNavbar = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Componente de animação com lógica de scroll
interface AnimationWrapperProps {
  animation:
    | "fadeInUp"
    | "fadeInRight"
    | "fadeInLeft"
    | "fadeInBottom"
    | "fadeInCenter";
  children: React.ReactNode;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  animation,
  children,
}) => {
  const [isInView, setIsInView] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const animationVariants = {
    fadeInUp,
    fadeInRight,
    fadeInLeft,
    fadeInBottom,
    fadeInCenter,
  };

  // Verifica se o componente já está visível no carregamento inicial
  const checkIfVisible = () => {
    const rect = elementRef.current?.getBoundingClientRect();
    if (!rect) return false;
    const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;
    return isVisible;
  };

  // Hook para ativar o Intersection Observer e detectar rolagem
  useEffect(() => {
    const currentElement = elementRef.current; // Captura o valor atual de elementRef

    // Função para detectar se o scroll está indo para baixo
    const isScrollingDown = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      setLastScrollY(currentScrollY); // Atualiza o último valor de scroll
      return scrollingDown;
    };

    // Verificação inicial
    if (checkIfVisible()) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Apenas anima se o elemento estiver visível E o scroll for para baixo
        if (entry.isIntersecting && isScrollingDown()) {
          setIsInView(true);
        }
      },
      {
        rootMargin: "0px 0px -50px 0px", // Define margem para antecipar ou retardar o evento
        threshold: 0.1, // Menor limiar para telas grandes
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [lastScrollY]);

  return (
    <motion.div
      ref={elementRef}
      variants={animationVariants[animation]}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export {
  fadeInUp,
  fadeInRight,
  fadeInLeft,
  fadeInBottom,
  fadeInCenter,
  fadeInBottomNavbar,
  AnimationWrapper,
};
