import { FreeMode, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import { SwiperSlide } from 'swiper/react';
import { THotel } from '../../../types/types';
import HotelCard from '../../Hotels/HotelCard';
import NotFound from '../NotFound';
import { StyledSwiper } from './styles';

type Props = {
    hotels: THotel[] | null,
}

const Slider = ({ hotels }: Props) => {
    return (
        hotels?.length ?
            <StyledSwiper
                slidesPerView={'auto'}
                slidesPerGroup={2}
                slidesPerGroupAuto={true}
                watchSlidesProgress={true}
                spaceBetween={16}
                centerInsufficientSlides={true}
                navigation={true}
                modules={[FreeMode, Navigation]}
                >
               {hotels.map((hotel: THotel) => 
                        <SwiperSlide key={hotel.id}>
                            <HotelCard key={hotel.id} hotel={hotel}/>
                        </SwiperSlide>
                    ) 
                }
            </StyledSwiper>
        : <NotFound title='No hotels found...'/>
    );
};

export default Slider;