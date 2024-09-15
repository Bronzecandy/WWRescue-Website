import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import PartnerCard from './PartnerCard';
const CustomNavigation = () => {
    const swiper = useSwiper();

    return (
        <div className="absolute top-1/2 w-full flex z-10">
            <button onClick={() => swiper.slidePrev()} className="absolute h-4 w-4 md:h-10 md:w-10 left-2 transform -translate-y-1/2 border-0">
                <img src="./images/Vector.png" alt="Previous" />
            </button>
            <button onClick={() => swiper.slideNext()} className="absolute h-4 w-4 md:h-10 md:w-10 right-2 transform -translate-y-1/2 border-0">
                <img src="./images/Vector1.png" alt="Next" />
            </button>
        </div>
    );
};

const PartnerCarousel = () => {
    const slides = [
        {
            imageUrl: './images/whiskas.png',
            description: 'Support WagWel Feline food'
        },
        {
            imageUrl: './images/felix.png',
            description: 'Support WagWel Feline food'
        },
        {
            imageUrl: './images/royalcanin.png',
            description: 'Support WagWel Canine food'
        },
        {
            imageUrl: './images/catfee.png',
            description: 'Support WagWel Feline litter'
        }
    ];


    return (
        <div className='pb-10'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                spaceBetween={0}
                slidesPerView={4}
                autoplay={ {delay: 2000,}}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1260: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    2560: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={{ height: 'auto' }} className='flex justify-center'>
                        <PartnerCard 
                        imageUrl={slide.imageUrl}
                        description={slide.description}
                        ></PartnerCard>
                    </SwiperSlide>
                ))}
                <CustomNavigation />
            </Swiper>

        </div>
    );
};

export default PartnerCarousel;
