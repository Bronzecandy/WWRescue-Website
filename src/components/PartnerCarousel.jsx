import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import PartnerCard from './PartnerCard';
const CustomNavigation = ({color}) => {
    const swiper = useSwiper();

    return (
        <div className="absolute top-1/2 w-full flex z-10">
            <button onClick={() => swiper.slidePrev()} className="absolute h-6 w-6 md:h-10 md:w-10 left-2 transform -translate-y-1/2 border-0">
                <svg className='w-full h-full' viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1484 39.9992C20.3135 39.9992 20.4822 39.9662 20.6436 39.9001C21.1205 39.7021 21.4323 39.2326 21.4323 38.7154V28.0487H18.8646V35.6342L3.10305 20.0047L18.861 4.36415V18.6182C17.9476 18.5815 15.9522 18.5998 14.5583 19.99C13.7074 20.83 12.8967 22.3889 13.4102 23.9992C13.8724 25.4481 15.2626 26.5118 16.7922 26.5888C18.4208 26.6769 19.8843 25.5984 20.8894 23.5737C21.2855 22.7704 21.4543 21.9818 21.4983 21.2812C25.6322 21.3692 32.4364 21.3619 40.0732 21.3582V18.7906C32.352 18.7979 25.4891 18.8052 21.4323 18.7135V1.283C21.4323 0.765806 21.1168 0.296296 20.64 0.098222C20.1594 -0.0998522 19.6092 0.00652097 19.2424 0.373325L0.377689 19.095C0.135597 19.3371 -0.000118256 19.6636 -0.000118256 20.0084C-0.000118256 20.3531 0.135601 20.6796 0.381359 20.918L19.2534 39.6287C19.4992 39.8708 19.8256 39.9992 20.1558 39.9992H20.1484ZM18.9233 21.1931C18.8903 21.5819 18.7949 22.0074 18.5859 22.4329C18.0797 23.4563 17.4634 24.0432 16.9206 24.0249C16.5171 24.0065 16.0109 23.6984 15.8568 23.2179C15.6477 22.5613 16.3593 21.824 16.3667 21.8167C17.0856 21.1014 18.4171 21.1675 18.927 21.1968L18.9233 21.1931Z" fill={color} />
                </svg>
            </button>
            <button onClick={() => swiper.slideNext()} className="absolute h-6 w-6 md:h-10 md:w-10 right-2 transform -translate-y-1/2 border-0">
                <svg className='w-full h-full' viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9248 39.9992C19.7597 39.9992 19.591 39.9662 19.4296 39.9001C18.9528 39.7021 18.641 39.2326 18.641 38.7154V28.0487H21.2086V35.6342L36.9702 20.0047L21.2123 4.36415V18.6182C22.1256 18.5815 24.121 18.5998 25.5149 19.99C26.3659 20.83 27.1765 22.3889 26.663 23.9992C26.2008 25.4481 24.8106 26.5118 23.2811 26.5888C21.6525 26.6769 20.1889 25.5984 19.1839 23.5737C18.7877 22.7704 18.619 21.9818 18.575 21.2812C14.4411 21.3692 7.63686 21.3619 0 21.3582V18.7906C7.72123 18.7979 14.5841 18.8052 18.641 18.7135V1.283C18.641 0.765806 18.9564 0.296296 19.4333 0.098222C19.9138 -0.0998522 20.464 0.00652097 20.8308 0.373325L39.6956 19.095C39.9376 19.3371 40.0734 19.6636 40.0734 20.0084C40.0734 20.3531 39.9376 20.6796 39.6919 20.918L20.8198 39.6287C20.574 39.8708 20.2476 39.9992 19.9175 39.9992H19.9248ZM21.1499 21.1931C21.1829 21.5819 21.2783 22.0074 21.4874 22.4329C21.9936 23.4563 22.6098 24.0432 23.1527 24.0249C23.5562 24.0065 24.0624 23.6984 24.2164 23.2179C24.4255 22.5613 23.7139 21.824 23.7066 21.8167C22.9876 21.1014 21.6561 21.1675 21.1463 21.1968L21.1499 21.1931Z" fill={color} />
                </svg>
            </button>
        </div>
    );
};

const PartnerCarousel = ({color, partners}) => {
    return (
        <div className='pb-10'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                spaceBetween={0}
                slidesPerView={4}
                autoplay={{ delay: 2000, }}
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
                    3840: {
                        slidesPerView: 7,
                        spaceBetween: 0,
                    },
                }}
            >
                {partners.map((slide, index) => (
                    <SwiperSlide key={index} style={{ height: 'auto' }} className='flex justify-center'>
                        <PartnerCard
                            imageUrl={slide.imageUrl}
                            description={slide.description}
                            color={color}
                        ></PartnerCard>
                    </SwiperSlide>
                ))}
                <CustomNavigation color={color} />
            </Swiper>

        </div>
    );
};

export default PartnerCarousel;
