import { useState, useEffect } from "react";

interface StackedImageSliderProps {
  images: { src: string; alt: string }[];
  interval?: number;
}

const StackedImageSlider = ({ images, interval = 4500 }: StackedImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-56 md:h-64 lg:h-80">
      {images.map((image, index) => {
        const position = (index - activeIndex + images.length) % images.length;

        // Calculate stacking position
        const isActive = position === 0;
        const offset = position * 12;
        const scale = 1 - position * 0.05;
        const zIndex = images.length - position;
        const rotate = position * 3;

        return (
          <div
            key={index}
            className="absolute inset-0 cursor-pointer transition-all duration-500 ease-out"
            style={{
              transform: `translateX(${offset}px) translateY(${offset}px) rotate(${rotate}deg) scale(${scale})`,
              zIndex,
              opacity: position < 4 ? 1 - position * 0.15 : 0,
            }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="w-full h-full overflow-hidden rounded-lg shadow-elegant border-2 border-gold/20">
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-2000 ${
                  isActive ? "brightness-100" : "brightness-75"
                }`}
              />
            </div>
          </div>
        );
      })}

      {/* Navigation dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-1000 ${
              index === activeIndex ? "bg-gold w-6" : "bg-gold/30 hover:bg-gold/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StackedImageSlider;
