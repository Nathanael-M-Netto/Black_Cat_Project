import { useLanguage } from "../../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <button
      onClick={handleToggleLanguage}
      // As classes de cor agora são dinâmicas.
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 
                 bg-slate-200/80 text-slate-800 hover:bg-slate-300
                 dark:bg-white/10 dark:text-dark-text dark:hover:bg-white/20"
      aria-label={`Mudar idioma para ${language === 'en' ? 'Português' : 'Inglês'}`}
    >
      {language === 'en' ? 'EN' : 'PT'}
    </button>
  );
};

export default LanguageSwitcher;
