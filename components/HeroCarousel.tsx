import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { HeroSlide } from '../types';

interface HeroCarouselProps {
  slides: HeroSlide[];
  onButtonClick: (productId: number) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides, onButtonClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const videoEndTimeoutRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  const handleVideoEnd = useCallback(() => {
    if (videoEndTimeoutRef.current) {
      clearTimeout(videoEndTimeoutRef.current);
    }
    videoEndTimeoutRef.current = window.setTimeout(() => {
      nextSlide();
    }, 3000); // 3-second delay
  }, [nextSlide]);

  useEffect(() => {
    if (videoEndTimeoutRef.current) {
      clearTimeout(videoEndTimeoutRef.current);
    }
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(nextSlide, 25000);

    const currentSlide = slides[currentIndex];
    const isSpecialVideo = currentSlide?.id === 1 || currentSlide?.id === 2;

    if (isSpecialVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(error => {
        console.warn("Video autoplay was prevented by the browser:", error);
      });
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (videoEndTimeoutRef.current) {
        clearTimeout(videoEndTimeoutRef.current);
      }
    };
  }, [currentIndex, slides, nextSlide]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="מבצעים וחידושים"
      className="relative w-full h-[500px] mx-auto overflow-hidden rounded-lg shadow-xl group"
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => {
          const isCurrentSlide = currentIndex === index;
          const isSpecialVideo = slide.id === 1 || slide.id === 2;
          const isWatchAd = slide.id === 2;


          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} מתוך ${slides.length}`}
              aria-hidden={!isCurrentSlide}
              className="w-full flex-shrink-0 h-full relative"
            >
              {slide.videoUrl ? (
                <video
                  ref={isCurrentSlide && isSpecialVideo ? videoRef : null}
                  src={slide.videoUrl}
                  autoPlay
                  loop={!isWatchAd}
                  muted
                  playsInline
                  onEnded={isWatchAd ? handleVideoEnd : undefined}
                  className="w-full h-full object-cover"
                  aria-label={slide.title}
                />
              ) : (
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="relative w-full h-full p-12 text-white flex">
                  <div className={`
                    relative flex flex-col gap-4
                    ${
                      slide.textPosition === 'top-center'
                      ? 'mt-0 mb-auto mx-auto text-center items-center'
                      : slide.textPosition === 'right'
                      ? 'my-auto ml-auto text-right items-end'
                      : slide.textPosition === 'bottom-left'
                      ? 'mt-auto mb-8 ml-8 mr-auto text-left items-start'
                      : 'my-auto mr-auto text-left items-start'
                    }
                  `}>
                     <h2 className="text-4xl md:text-5xl font-bold">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl max-w-md">
                      {slide.subtitle}
                    </p>
                    {slide.productId && (
                      <button
                        onClick={() => onButtonClick(slide.productId!)}
                        aria-hidden={!isCurrentSlide}
                        tabIndex={isCurrentSlide ? 0 : -1}
                        className="bg-accent text-primary font-bold py-3 px-8 rounded-full transition-all shadow-lg transform hover:scale-105 hover:bg-opacity-90"
                      >
                        {slide.buttonText}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`עבור לסלייד ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-accent' : 'bg-gray-300/50 hover:bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;