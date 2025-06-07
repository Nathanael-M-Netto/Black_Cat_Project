import { useState, useEffect } from 'react';
import { Cat } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const { texts } = useLanguage();
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa o fundo sólido um pouco depois do início da rolagem
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#allure', label: texts.navAbout, id: 'allure' },
    { href: '#myths', label: texts.mythsTitle, id: 'myths' },
    { href: '#gallery', label: texts.navGallery, id: 'gallery' },
    { href: '#help', label: texts.navHelp, id: 'help' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        // ALTERAÇÃO AQUI:
        // Quando não está rolado, aplica um gradiente para legibilidade.
        // Quando está rolado, aplica o fundo sólido com desfoque.
        isScrolled
          ? 'bg-dark-background/80 backdrop-blur-lg shadow-md'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#hero" className="flex items-center space-x-2 text-xl font-bold text-dark-text">
            <Cat className="text-accent-dark" />
            <span>Black Cat Project</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-bold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'text-accent-dark'
                      : 'text-dark-text/70 hover:text-accent-dark'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-accent-dark rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
