"use client";


import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface CarouselSlide {
  id: string;
  image: string;
  title?: string;
  description?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showDots?: boolean;
}

export const Carousel = ({
  slides, // Use example data if slides are not passed
  autoplay = true,
  autoplayInterval = 5000,
  showDots = true,
}: CarouselProps): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, slides.length]);



  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-200">
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            
            {/* Content Overlay - Styled to match the uploaded image */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center items-start">
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Headline Area */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight sm:leading-tight md:leading-tight lg:leading-none mb-2 sm:mb-3 md:mb-4">
                  <span className="text-black font-normal tracking-tight">Shop </span>
                  <span className="text-[#0aaeb8] tracking-tight">Computer</span>
                  <br className="hidden sm:block" />
                 
                  <span className="text-[#0aaeb8] tracking-tight"> &amp; experience</span>
                </h2>

                {/* Description/Quote Area */}
                <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 space-y-1 sm:space-y-1.5 md:space-y-2 text-xs sm:text-sm md:text-base font-medium text-black/90">
                  {slide.description && slide.description.split('\n').map((line, i) => (
                    <p key={i} className="text-xs sm:text-sm md:text-base">
                      {line}
                    </p>
                  ))}
                </div>

                {/* View More Button */}
                <Button
                  size={"lg"}
                  onClick={() => console.log("View More Clicked")} 
                  className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base text-white bg-[#0aaeb8] font-semibold rounded-lg transition duration-200 shadow-md hover:bg-blue-600"
                 
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* Dots Indicator */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-black w-6 md:w-8"
                  : "bg-black/50 hover:bg-black/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};