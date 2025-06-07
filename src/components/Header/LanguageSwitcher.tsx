import { useLanguage } from "../../contexts/LanguageContext";

const LanguageSwitcher = () => {
  // Obtém o idioma atual e a função para alterá-lo
  const { language, setLanguage } = useLanguage();
  // O hook useTheme foi removido, pois o estilo agora é fixo.

  // Função para alternar o idioma
  const handleToggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <button
      onClick={handleToggleLanguage}
      // Estilo do botão atualizado:
      // A cor do texto (EN/PT) foi fixada para 'text-dark-text', que é a cor de texto do tema escuro.
      // O 'dark:' foi removido para que a cor seja aplicada independentemente do tema.
      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-sm font-bold transition-colors duration-300 hover:bg-white/20 text-dark-text"
      aria-label={`Mudar idioma para ${language === 'en' ? 'Português' : 'Inglês'}`}
    >
      {language === 'en' ? 'EN' : 'PT'}
    </button>
  );
};

export default LanguageSwitcher;