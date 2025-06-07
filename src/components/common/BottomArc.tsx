import { type FC } from 'react';

type ArcProps = {
  // A classe de cor de texto será passada aqui
  className?: string;
};

const BottomArc: FC<ArcProps> = ({ className }) => {
  return (
    // A classe de cor de texto é aplicada a este wrapper
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-[120px]"
      >
        <path
          d="M0,70 C480,0 960,0 1440,70 L1440,150 L0,150 Z"
          // O caminho do SVG agora usa fill-current para herdar a cor do texto do pai
          className="fill-current"
        />
      </svg>
    </div>
  );
};

export default BottomArc;
