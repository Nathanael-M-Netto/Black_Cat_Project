import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const MythsRealitySection = () => {
  const { texts } = useLanguage();

  const imageUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir01DmsF_EB2zSt4_Vu9CQbH2R3NZsDFpCmSXiZ14uRTZJkmmJpk5868Fji75bO-G1wROqaLNLtcLmb-6dGBNco--dCxc6ykJFYI6O-XIp3HhKmZg1rWyoY5IrdCkj3u5oqHDDTv_llp9dKJraehGZI5bblpFmpQ2QxoFogfKJEJ-G79ZRO4vw5Ok3vg/s16000-rw/cat-3040345-1280.jpg";

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };


  return (
    <motion.section
      id="myths"
      // ALTERAÇÃO AQUI: Trocado 'bg-light-card' por 'bg-light-background'
      className="py-16 sm:py-24 bg-light-background dark:bg-dark-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-4xl">
            {texts.mythsTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={imageVariants} className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={imageUrl}
              alt="Gato preto a olhar intensamente"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={sectionVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="flex items-center text-xl font-bold text-red-500 dark:text-red-400 mb-2">
                <XCircle className="mr-3" size={24} />
                {texts.myth1}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-9">{texts.myth1Text}</p>
              <h3 className="flex items-center text-xl font-bold text-green-600 dark:text-green-400 mt-4 mb-2">
                <CheckCircle2 className="mr-3" size={24} />
                {texts.reality1}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ml-9">{texts.reality1Text}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="border-t border-gray-200 dark:border-gray-700"></motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="flex items-center text-xl font-bold text-red-500 dark:text-red-400 mb-2">
                <XCircle className="mr-3" size={24} />
                {texts.myth2}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-9">{texts.myth2Text}</p>
              <h3 className="flex items-center text-xl font-bold text-green-600 dark:text-green-400 mt-4 mb-2">
                <CheckCircle2 className="mr-3" size={24} />
                {texts.reality2}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ml-9">{texts.reality2Text}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MythsRealitySection;
