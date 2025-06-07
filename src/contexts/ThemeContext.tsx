import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';

// Define o tipo para o valor do contexto
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// Cria o contexto com um valor padrão inicial
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define as props para o provedor do tema
type ThemeProviderProps = {
  children: ReactNode;
};

// Componente provedor que gerencia o estado do tema
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Estado para o tema, inicializado com o valor do localStorage ou 'light' como padrão
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme');
    return (storedTheme as 'light' | 'dark') || 'light';
  });

  // Efeito para atualizar o localStorage e a classe no HTML quando o tema muda
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook customizado para usar o contexto do tema facilmente
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
