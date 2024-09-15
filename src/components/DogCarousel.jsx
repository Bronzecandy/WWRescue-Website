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
                <img src="./images/Vector1.png" alt="Next" />
            </button>
        </div>
    );
};

const DogCarousel = ({ backgroundImage,input }) => {
    // Function to determine the color based on the slide index
    const getColorByIndex = (index) => {
        const colors = ['#00723B', '#FAA627', '#3D71B8']; // Array of colors based on the pattern
        return colors[index % 3]; // Use modulo to cycle through the colors
    };

    return (
        <div className='pb-5'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                spaceBetween={0}
                slidesPerView={4}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
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
                {input.map((slide, index) => (
                    <SwiperSlide key={index} style={{ height: 'auto' }} className='flex justify-center'>
                        <DogCard
                            backgroundImage={backgroundImage}
                            image={slide.imageUrl}
                            name={slide.name}
                            gender={slide.gender}
                            description="One fang. Loves treats. Silent ninja."
                            color={getColorByIndex(index)} // Set the color based on the index
                            subnames={slide.subname}
                        />
                    </SwiperSlide>
                ))}
                <CustomNavigation />
            </Swiper>

        </div>
    );
};

export default DogCarousel;
