import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Home, BookOpen, HeartHandshake } from 'lucide-react';
import { type ReactNode } from 'react';

const HelpCard = ({ icon, title, text, buttonText }: { icon: ReactNode; title: string; text: string; buttonText: string }) => {
  return (
    <motion.div 
      className="flex flex-col p-8 bg-light-card dark:bg-dark-card rounded-2xl shadow-lg h-full"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-light-text dark:text-dark-text">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 flex-grow mb-6">{text}</p>
      <a href="#" className="mt-auto font-semibold text-accent-light dark:text-accent-dark hover:underline transition-colors">
        {buttonText}
      </a>
    </motion.div>
  );
};

const HelpSection = () => {
  const { texts } = useLanguage();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      id="help"
      className="py-16 sm:py-24 bg-light-background dark:bg-dark-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={sectionVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-4xl">
            {texts.helpTitle}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {texts.helpSubtitle}
          </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HelpCard
            icon={<Home size={32} />}
            title={texts.helpCard1Title}
            text={texts.helpCard1Text}
            buttonText={texts.findOutMore}
          />
          <HelpCard
            icon={<BookOpen size={32} />}
            title={texts.helpCard2Title}
            text={texts.helpCard2Text}
            buttonText={texts.findOutMore}
          />
          <HelpCard
            icon={<HeartHandshake size={32} />}
            title={texts.helpCard3Title}
            text={texts.helpCard3Text}
            buttonText={texts.findOutMore}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HelpSection;
