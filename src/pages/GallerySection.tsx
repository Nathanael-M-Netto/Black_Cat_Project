import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.pexels.com/photos/302280/pexels-photo-302280.jpeg?cs=srgb&dl=pexels-pixabay-302280.jpg&fm=jpg',
  'https://images.pexels.com/photos/1931369/pexels-photo-1931369.jpeg?cs=srgb&dl=pexels-helenalopes-1931369.jpg&fm=jpg',
  'https://images.pexels.com/photos/13732811/pexels-photo-13732811.jpeg?cs=srgb&dl=pexels-eminbirfotografci-13732811.jpg&fm=jpg',
  'https://images.pexels.com/photos/881142/pexels-photo-881142.jpeg?cs=srgb&dl=pexels-craigmdennis-881142.jpg&fm=jpg',
  'https://images.pexels.com/photos/18688872/pexels-photo-18688872.jpeg?cs=srgb&dl=pexels-pinamon-18688872.jpg&fm=jpg',
  'https://images.pexels.com/photos/31734556/pexels-photo-31734556.jpeg?cs=srgb&dl=pexels-mahmoud-yahyaoui-31734556.jpg&fm=jpg'
];

const GallerySection = () => {
  const { texts } = useLanguage();
  // Configura o Embla Carousel. 'loop' faz com que ele seja infinito.
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);


  return (
    <motion.section
      id="gallery"
      className="py-16 sm:py-24 bg-light-background dark:bg-dark-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-4xl">
            {texts.galleryTitle}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {texts.gallerySubtitle}
          </p>
        </div>

        {/* --- Carrossel --- */}
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {images.map((src, index) => (
                <div className="embla__slide" key={index}>
                  <div className="group relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={src}
                      alt={`Gato preto ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Botões de Navegação */}
          <button className="embla__button embla__button--prev" onClick={scrollPrev} disabled={prevBtnDisabled}>
            <ChevronLeft size={24} />
          </button>
          <button className="embla__button embla__button--next" onClick={scrollNext} disabled={nextBtnDisabled}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default GallerySection;