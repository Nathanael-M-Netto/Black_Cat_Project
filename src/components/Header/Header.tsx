import { useState, useEffect } from 'react';
import { Cat, Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { texts } = useLanguage();
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efeito para o fundo do header ao rolar
  useEffect(() => {
    const handleScroll = () => {
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

  // Efeito para "Scroll Spy"
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((sec) => observer.observe(sec));
    return () => document.querySelectorAll('section[id]').forEach((sec) => observer.unobserve(sec));
  }, []);

  // Animação para o menu móvel
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.3 } },
    exit: { opacity: 0, x: '100%', transition: { type: 'tween', duration: 0.3 } },
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
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

            {/* Navegação para Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-bold tracking-wider uppercase transition-colors ${
                    activeSection === item.id ? 'text-accent-dark' : 'text-dark-text/70 hover:text-accent-dark'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-accent-dark rounded-full"></span>
                  )}
                </a>
              ))}
            </nav>
            
            {/* Controlos fixos */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>

            {/* Ícone do Menu Hambúrguer para Mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} aria-label="Abrir menu">
                <Menu className="text-dark-text" size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay do Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            // ALTERAÇÃO 1: Fundo do menu agora usa a cor de fundo da página.
            className="fixed inset-0 z-50 bg-light-background/95 dark:bg-dark-card/95 backdrop-blur-sm"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-end p-8">
              <button onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
                <X className="text-light-text dark:text-dark-text" size={32} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-20 space-y-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    // ALTERAÇÃO 2: Links agora mostram a cor de destaque quando ativos.
                    className={`text-3xl font-bold transition-colors ${
                      isActive 
                        ? 'text-accent-light dark:text-accent-dark' 
                        : 'text-light-text dark:text-dark-text'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="flex items-center space-x-6 pt-8">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
