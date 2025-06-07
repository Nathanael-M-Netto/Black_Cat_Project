import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Heart } from 'lucide-react';
import { type ReactNode } from 'react';

// Componente reutilizável para os cartões de características
const FeatureCard = ({ icon, title, text }: { icon: ReactNode; title: string; text: string }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-lg transition-transform hover:-translate-y-2">
      {/* ALTERAÇÃO AQUI: Cores do ícone atualizadas para a paleta 'accent' */}
      <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-light-text dark:text-dark-text">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );
};

const AllureSection = () => {
  const { texts } = useLanguage();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Anima cada cartão com um pequeno atraso
      },
    },
  };

  return (
    <motion.section
      id="allure"
      className="py-16 sm:py-24 bg-light-background dark:bg-dark-background"
      initial="hidden"
      whileInView="visible" // Ativa a animação quando a secção entra na viewport
      viewport={{ once: true, amount: 0.3 }} // Configurações do trigger da animação
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={sectionVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-4xl">
            {texts.allureTitle}
          </h2>
        </motion.div>

        <motion.div variants={sectionVariants} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div variants={sectionVariants}>
            <FeatureCard
              icon={<Gem size={32} />}
              title={texts.allureCard1Title}
              text={texts.allureCard1Text}
            />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <FeatureCard
              icon={<ShieldCheck size={32} />}
              title={texts.allureCard2Title}
              text={texts.allureCard2Text}
            />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <FeatureCard
              icon={<Heart size={32} />}
              title={texts.allureCard3Title}
              text={texts.allureCard3Text}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AllureSection;