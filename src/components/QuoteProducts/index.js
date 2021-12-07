import './styles.scss';

export function QuoteProducts({textContent, ...props}) {

    const { heading, subHeading, items } = textContent;

    // console.log('heading',heading );
    // console.log('subHeading',subHeading );
    // console.log('items',items );

    return (
        <div className="quote-products">
            <div className="quote-products__header">
                <h2>{heading}</h2>
                <p>{subHeading}</p>
            </div>
            <div className="quote-products__items">
                
            </div>
        </div>
    );
}