import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    './images/Frame 5.png',
    './images/Frame 5.png',
    './images/Frame 5.png',
  ];

  const updateCarousel = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    updateCarousel(index);
  };

  const nextSlide = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    updateCarousel(index);
  };

  const goToSlide = (index) => {
    updateCarousel(index);
  };

  useEffect(() => {
    const handleResize = () => {
      updateCarousel(currentSlide);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 5000ms = 5s

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen mx-auto">
      <div className="overflow-hidden relative h-full">
        <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full">
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 left-5 transform -translate-y-1/2 border-0" onClick={prevSlide}>
        <img src="./images/Vector.png" alt="Previous" />
      </button>
      <button className="absolute top-1/2 right-5 transform -translate-y-1/2 border-0" onClick={nextSlide}>
        <img src="./images/Vector (1).png" alt="Next" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
        {slides.map((_, index) => (
          <button key={index} className={` transition-all duration-300 h-3 border-[#EF3927] rounded-full ${currentSlide === index ? 'bg-[#EF3927] w-3' : 'bg-transparent w-6'}`} onClick={() => goToSlide(index)}></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
