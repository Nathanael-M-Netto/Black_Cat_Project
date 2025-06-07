import { type FC } from 'react';

// O componente não precisa mais receber a prop 'className' para cor.
const TopArc: FC = () => {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-[120px]"
      >
        <path
          // Usando o novo formato de curva para uma aparência côncava.
          d="M0,0 C480,70 960,70 1440,0 L1440,150 L0,150 Z"
          // A cor agora é fixada para 'footer-arc-light', que
          // corresponde à cor do rodapé estático (#121212).
          className="fill-footer-arc-light"
        />
      </svg>
    </div>
  );
};

export default TopArc;
