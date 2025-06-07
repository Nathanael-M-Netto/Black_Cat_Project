import { useLanguage } from '../../contexts/LanguageContext';
import { Cat, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const { texts } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer

      className="bg-dark-card text-dark-text py-8 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            {/* Ícones e textos agora usam as cores do tema escuro permanentemente */}
            <Cat className="text-accent-dark mr-3" size={32} />
            <span className="text-2xl font-bold">Black Cat Project</span>
          </div>
          <p className="mb-8 text-dark-subtle">
            {texts.footerText} Nathanael M. Netto
          </p>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <p className="text-sm order-2 sm:order-1 text-dark-subtle">
            &copy; {currentYear} Black Cat Project. {texts.footerRights}
          </p>

          <div className="flex items-center space-x-6 order-1 sm:order-2">
            <a href="https://github.com/seu_usuario_github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-dark-subtle hover:text-accent-dark transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/seu_usuario_linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-dark-subtle hover:text-accent-dark transition-colors">
              <Linkedin size={22} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
