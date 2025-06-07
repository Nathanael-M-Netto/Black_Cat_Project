import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import BottomArc from '../components/common/BottomArc';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useState, useEffect } from 'react';

// Define as duas imagens
const desktopImageUrl = 'https://wallpapercave.com/wp/wp1905861.jpg';
const mobileImageUrl = 'https://i.pinimg.com/736x/d9/b6/0c/d9b60cf0d1b461f04ea62ba5981f462b.jpg';

const HeroSection = () => {
  const { texts } = useLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Define a transição de opacidade para as imagens
  const imageTransition = {
    duration: 0.8,
    ease: 'easeInOut'
  };

  return (
    // Adicionado um fundo preto como fallback para evitar qualquer "flash" branco
    <section id="hero" className="relative flex items-center justify-center h-screen min-h-[700px] bg-black">
      {/* Container para as imagens */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Imagem de Desktop */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${desktopImageUrl})` }}
          initial={{ opacity: 0 }} // Começa sempre invisível
          // Só anima para opacidade 1 se o componente estiver montado e não for móvel
          animate={{ opacity: isMounted && !isMobile ? 1 : 0 }}
          transition={imageTransition}
        />
        {/* Imagem de Mobile */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileImageUrl})` }}
          initial={{ opacity: 0 }} // Começa sempre invisível
          // Só anima para opacidade 1 se o componente estiver montado e for móvel
          animate={{ opacity: isMounted && isMobile ? 1 : 0 }}
          transition={imageTransition}
        />
      </div>

      <div className="relative z-20 text-center text-white px-4 -translate-y-10">
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]"
          variants={textItemVariants}
          initial="hidden"
          // A animação do texto também só começa após a montagem
          animate={isMounted ? "visible" : "hidden"}
        >
          {texts.heroTitle}
        </motion.h1>
        <motion.p
          className="mt-6 text-lg max-w-2xl mx-auto sm:text-xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]"
          variants={textItemVariants}
          initial="hidden"
          // A animação do texto também só começa após a montagem
          animate={isMounted ? "visible" : "hidden"}
        >
          {texts.heroSubtitle}
        </motion.p>
      </div>

      <BottomArc className="text-arc_light dark:text-arc_dark" />
    </section>
  );
};

export default HeroSection;
