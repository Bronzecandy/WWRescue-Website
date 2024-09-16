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
            imageUrl: './images/royalcanin.png',
            description: 'Educational Event Partner'
        },
        {
            imageUrl: './images/catfee.png',
            description: 'Organic Cat Litter Sponsor'
        },
        {
            imageUrl: './images/Tito.png',
            description: 'Beverage & Rescue Partner'
        },
        {
            imageUrl: './images/Vemedin.png',
            description: 'Dog & Cat Medicine Sponsor'
        },
        {
            imageUrl: './images/Keos.png',
            description: 'Shelter Support Partner'
        },
        {
            imageUrl: './images/Insta360.png',
            description: 'Pet Action Camera Sponsor'
        },
        {
            imageUrl: './images/Kingpet.png',
            description: 'Fresh Cat Pate Sponsor'
        },
        {
            imageUrl: './images/Levoit.png',
            description: 'Pet Air Filters Sponsor'
        },
        {
            imageUrl: './images/GFBPharma.png',
            description: 'Cat & Dog Medicine Partner'
        },
        {
            imageUrl: './images/Roborock.png',
            description: 'Pet Cleaning Appliances Sponsor'
        },
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
