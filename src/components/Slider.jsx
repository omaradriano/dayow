// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Minicard from './Minicard.jsx';

const Slider = ({ data, isLoading }) => {
    let minicards = [] //📝Arreglo donde se guarda la minicard con sus respectivos datos de renderizado

    if(!isLoading){
        //📝 La cantidad de sliders depende de los datos que se hayan traido del fetch (En este caso 3)
        minicards = data.splice(1,).map(elem => {
            return (
                <SwiperSlide key={elem.date}>
                    <Minicard key={elem.date} data={elem}/>
                </SwiperSlide>
            )
        })
        // console.log(minicards)
    }
    return (
        <Swiper
            modules={ [Navigation] }
            spaceBetween={10}
            slidesPerView={1}
            navigation
            // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {minicards}
        </Swiper>
    )
}

export default Slider