import CardProduct from "../product/CardProduct"
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
function Slider({ name, data }) {
    const [swiperRef, setSwiperRef] = useState(null);






    return (
        <div className="container ">
            <div className="heading">
                <h3 className="text-primary">{name}</h3>
                <p className="text-black-50">add best selling products to weekly line up</p>
            </div>
            <div className="parent">
                <div className="child"></div>
            </div>
            <Swiper
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Virtual, Navigation, Pagination, Autoplay]}
                onSwiper={setSwiperRef}
                slidesPerView={5}
                centeredSlides={false}
                spaceBetween={10}
                navigation={true}
                virtual
                breakpoints={{
                    250: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >

                {data.map((item, i) => {
                    return <SwiperSlide key={i}>
                        <CardProduct item={item} />
                    </SwiperSlide>
                })}



            </Swiper>
        </div>
    )
}

export default Slider
