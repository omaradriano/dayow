// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <h1>Contenido slide</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>Contenido slide</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>Contenido slide</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>Contenido slide</h1>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider