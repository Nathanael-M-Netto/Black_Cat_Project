import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  // Obtém o tema atual e a função para alterná-lo do nosso contexto
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      // Estilização do botão com Tailwind CSS
      className="p-2 rounded-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      // Aria-label para acessibilidade
      aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeSwitcher;