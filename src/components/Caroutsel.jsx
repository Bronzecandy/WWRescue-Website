import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const CustomNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute top-1/2 w-full flex z-10">
        <button onClick={() => swiper.slidePrev()} className="absolute h-4 w-4 md:h-10 md:w-10 left-5 transform -translate-y-1/2 border-0">
          <img src="./images/Vector.png" alt="Previous" />
        </button>
        <button onClick={() => swiper.slideNext()} className="absolute h-4 w-4 md:h-10 md:w-10 right-5 transform -translate-y-1/2 border-0">
        <img src="./images/Vector1.png" alt="Previous" />
        </button>
    </div>
  );
};

const Carousel = () => {
  const slides = [
    './images/Banner.png',
    './images/Banner.png',
    './images/Banner.png',
  ];

  return (
    <div >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        loop={true}
        autoplay={ {delay: 5000,}}
        spaceBetween={0}
        slidesPerView={1}
        className='xl:h-screen h-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ height: 'auto' }}>
            <img src={slide} alt={`Slide ${index + 1}`}   className='h-full w-full object-cover'/>
          </SwiperSlide>
        ))}
        <CustomNavigation />
      </Swiper>
    </div>
  );
};

export default Carousel;
