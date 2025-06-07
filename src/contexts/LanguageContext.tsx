import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { translations, type TranslationKeys } from '../translations';

// Define os tipos para o contexto de idioma
type Language = 'en' | 'pt';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  texts: TranslationKeys;
};

// Cria o contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define as props para o provedor
type LanguageProviderProps = {
  children: ReactNode;
};

// Componente provedor que gerencia o estado do idioma
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Estado para o idioma, inicializado com o valor do localStorage ou 'en' como padrão
  const [language, setLanguage] = useState<Language>(() => {
    const storedLang = localStorage.getItem('language');
    return (storedLang as Language) || 'en';
  });

  // Efeito para salvar o idioma no localStorage quando ele muda
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Seleciona o objeto de textos correto com base no idioma atual
  const texts = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook customizado para usar o contexto de idioma
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
