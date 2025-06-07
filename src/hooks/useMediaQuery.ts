import { useSyncExternalStore } from 'react';

/**
 * Hook customizado para detetar se uma media query CSS corresponde.
 * Esta versão utiliza o hook `useSyncExternalStore` do React 18 para uma subscrição
 * segura e síncrona, eliminando o "flash" na renderização inicial.
 * @param query - A string da media query (ex: '(max-width: 768px)').
 * @returns {boolean} - True se a query corresponder, false caso contrário.
 */

// A função `subscribe` regista um callback que será chamado quando a media query mudar.
function subscribe(query: string, callback: () => void) {
  if (typeof window === 'undefined') {
    // Retorna uma função vazia se não estiver no navegador.
    return () => {};
  }
  
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener('change', callback);
  
  // A função de limpeza remove o listener quando o componente é desmontado.
  return () => {
    mediaQueryList.removeEventListener('change', callback);
  };
}

// A função `getSnapshot` obtém o valor atual da media query.
function getSnapshot(query: string) {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia(query).matches;
}

export const useMediaQuery = (query: string): boolean => {
  // `getServerSnapshot` garante um valor consistente durante a renderização no servidor.
  const getServerSnapshot = () => false;

  // Criamos versões "bound" das funções para passar para o hook.
  const subscribeClient = (callback: () => void) => subscribe(query, callback);
  const getSnapshotClient = () => getSnapshot(query);
  
  // `useSyncExternalStore` subscreve à fonte de dados (window.matchMedia)
  // e retorna o seu valor atual de forma síncrona.
  const matches = useSyncExternalStore(
    subscribeClient,
    getSnapshotClient,
    getServerSnapshot
  );

  return matches;
};
