
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import SwiperCore, {EffectCards} from 'swiper';

import 'swiper/swiper.scss';
import "swiper/modules/effect-cards/effect-cards.scss";

import './styles.scss';

export function QuoteProducts({textContent, ...props}) {

    const { heading, subHeading, items } = textContent;

    SwiperCore.use([EffectCards]); // 

    return (

        <div className="quote-products">

            <div className="quote-products__header">
                <h2>{heading}</h2>
                <p>{subHeading}</p>
            </div>
            
            <div className="quote-products__items">
                <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                    {items && items.map( item => {
                        return <SwiperSlide key={item.name}>{item.name}</SwiperSlide>;
                    }) }

                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}

                </Swiper>
            </div>
        </div>
    );
}