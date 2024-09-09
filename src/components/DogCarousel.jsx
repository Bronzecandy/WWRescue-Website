import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import DogCard from './Card';

const CustomNavigation = () => {
    const swiper = useSwiper();

    return (
        <div className="absolute top-1/2 w-full flex z-10">
            <button onClick={() => swiper.slidePrev()} className="absolute h-4 w-4 md:h-10 md:w-10 left-2 transform -translate-y-1/2 border-0">
                <img src="./images/Vector.png" alt="Previous" />
            </button>
            <button onClick={() => swiper.slideNext()} className="absolute h-4 w-4 md:h-10 md:w-10 right-2 transform -translate-y-1/2 border-0">
                <img src="./images/Vector1.png" alt="Previous" />
            </button>
        </div>
    );
};

const DogCarousel = () => {
    const slides = [
        './images/Frame 5.png',
        './images/Meo.png',
        './images/Frame 5.png',
        './images/Meo.png',
        './images/Meo.png',
        './images/Meo.png',
        './images/Meo.png',
    ];

    return (
        <div className='bg-[#F9EDD2]' >
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                spaceBetween={0}
                slidesPerView={4}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={{ height: 'auto' }}  className='flex justify-center'>
                        <DogCard
                            backgroundImage="url('./images/Rectangle 128.png')"
                            image="./images/Rectangle 126.png"
                            name="An"
                            gender="male"
                            description="One fang. Loves treats. Silent ninja."
                            color='#3D71B8'
                            subnames={['One fang', 'Loves treats','Silent ninja' ]}
                        />
                    </SwiperSlide>
                ))}
                <CustomNavigation />
            </Swiper>
        </div>
    );
};

export default DogCarousel;
