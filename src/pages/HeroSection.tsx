import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import BottomArc from '../components/common/BottomArc';

const heroImageUrl = 'https://wallpapercave.com/wp/wp1905861.jpg';

const HeroSection = () => {
  const { texts } = useLanguage();

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen min-h-[700px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      {/*
        O OVERLAY FOI REMOVIDO DESTA SEÇÃO.
        Este era o elemento que estava escurecendo a cor do seu arco.
      */}

      <motion.div
        className="relative z-20 text-center text-white px-4"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          // Adicionada uma sombra ao texto para garantir a legibilidade sobre a imagem.
          className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]"
          variants={textItemVariants}
        >
          {texts.heroTitle}
        </motion.h1>
        <motion.p
          // Adicionada uma sombra ao texto para garantir a legibilidade sobre a imagem.
          className="mt-6 text-lg max-w-2xl mx-auto sm:text-xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]"
          variants={textItemVariants}
        >
          {texts.heroSubtitle}
        </motion.p>
      </motion.div>

      {/*
        Esta chamada está correta e agora funcionará, pois não há mais um overlay para interferir na cor.
      */}
      <BottomArc className="text-arc_light dark:text-arc_dark" />

    </section>
  );
};

export default HeroSection;
