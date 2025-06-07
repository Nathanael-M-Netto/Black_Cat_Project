import { useState, useEffect } from 'react';

/**
 * Hook customizado para detetar se uma media query CSS corresponde.
 * @param query - A string da media query (ex: '(max-width: 768px)').
 * @returns {boolean} - True se a query corresponder, false caso contrário.
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Garante que o código só roda no cliente (navegador)
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    // Adiciona um listener para mudanças no tamanho da janela
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};
