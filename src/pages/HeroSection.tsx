import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import BottomArc from '../components/common/BottomArc';
import { useMediaQuery } from '../hooks/useMediaQuery';

// Define as duas imagens
const desktopImageUrl = 'https://wallpapercave.com/wp/wp1905861.jpg';
const mobileImageUrl = 'https://i.pinimg.com/736x/4f/92/9f/4f929f9f4e20f2db849d2f5ce996299e.jpg';

const HeroSection = () => {
  const { texts } = useLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  
  const transitionProps = {
    duration: 1.2,
    ease: 'easeInOut'
  };

  return (
    <section id="hero" className="relative flex items-center justify-center h-screen min-h-[700px]">
      {/* Container para as imagens */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Imagem de Desktop */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${desktopImageUrl})` }}
          animate={{ opacity: isMobile ? 0 : 1 }}
          transition={transitionProps}
        />
        {/* Imagem de Mobile */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileImageUrl})` }}
          animate={{ opacity: isMobile ? 1 : 0 }}
          transition={transitionProps}
        />
      </div>

      <div className="relative z-20 text-center text-white px-4">
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]"
          variants={textItemVariants}
          initial="hidden"
          animate="visible"
        >
          {texts.heroTitle}
        </motion.h1>
        <motion.p
          className="mt-6 text-lg max-w-2xl mx-auto sm:text-xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]"
          variants={textItemVariants}
          initial="hidden"
          animate="visible"
        >
          {texts.heroSubtitle}
        </motion.p>
      </div>

      <BottomArc className="text-arc_light dark:text-arc_dark" />
    </section>
  );
};

export default HeroSection;
