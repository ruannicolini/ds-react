
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {EffectCards} from 'swiper';
import { cssVar, tint } from 'polished';

import 'swiper/swiper.scss';
import "swiper/modules/effect-cards/effect-cards.scss";

import './styles.scss';

export function QuoteProducts({textContent, ...props}) {

    const { heading, subHeading, items } = textContent;

    SwiperCore.use([EffectCards]);

    return (

        <div className="quote-products">

            <div className="quote-products__header">
                <h2>{heading}</h2>
                <p>{subHeading}</p>
            </div>
            
            <div className="quote-products__items">
                <Swiper 
                    effect={'cards'} 
                    grabCursor={true} 
                    className="mySwiper"
                    onSlideChange={(slider) => console.log('slide change',slider)}
                    >

                    {items && items.map( (item, index) => {
                        return (
                            <SwiperSlide key={item.name} style={ { background: tint( (index/10), cssVar('--first-color') ) } }>
                                {item.name}
                            </SwiperSlide>
                        );
                    }) }
                </Swiper>
            </div>
        </div>
    );
}