
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {EffectCards, Keyboard } from 'swiper';
import { cssVar, tint } from 'polished';

import { ProductCard } from '../ProductCard';
import { useQuotes } from '../../hooks/useQuote';
import { StickyTextBar } from '../StickyTextBar'

import 'swiper/swiper.scss';
import "swiper/modules/effect-cards/effect-cards.scss";
import './styles.scss';

export function QuoteProducts({textContent}) {

    const refCardItems = useRef();

    const { heading, subHeading } = textContent;

    const { products, total } = useQuotes();

    SwiperCore.use([EffectCards]);

    SwiperCore.use([Keyboard]);

    return (
        <div id="combo" className="quote-products">
            <StickyTextBar 
                text="< Arraste o card para mais opções >"
                margin="-50% 0%"
                componentRef={refCardItems}
            />

            <div className="quote-products__header">
                <h2>{heading}</h2>
                <p>{subHeading}</p>
            </div>
            
            <div className="quote-products__items" ref={refCardItems}>
                <Swiper 
                    effect={'cards'} 
                    grabCursor={true} 
                    className="mySwiper"
                    keyboard= { {enabled: true} }
                    // shortSwipes={false}
                    threshold={18} // Change swiper slide after 18px
                    // onSlideChange={(slider) => console.log('slide change',slider)}
                    >

                    {products && products.map( (item, index) => {
                        return (
                            <SwiperSlide key={item.name}>
                                <ProductCard item={item} backgroundColorStyle={ tint( (index/18), cssVar('--first-color') ) }/>
                            </SwiperSlide>
                        );
                    }) }
                </Swiper>

                <div className="quote-products__total">{(total && (total > 0)) ? 'Total: ' + (new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(total)) : ' ' }</div>

            </div>
        </div>
    );
}