import { useQuotes } from '../../hooks/useQuote';

import './styles.scss';

export function ProductCard({item, backgroundColorStyle}) {

    const { name, additionalInfo } = item;

    const { quotes, updateQty } = useQuotes();

    const handleChangeQty = (event, name, typeOp) => {
        event.preventDefault();
        let currentValue = quotes[name];
        let newValue = (typeOp == 'minus') ? currentValue - 5 : currentValue + 5;
        updateQty(name, newValue);
    }
    
    return (
        <div className="product-card" style={ { backgroundColor: backgroundColorStyle } }>
            <span className="product-card__name">{name}</span>
            <span className="product-card__info">{additionalInfo}</span>
            <div className="product-card-qty">
                <button onClick={ (e) => handleChangeQty(e, name, 'minus') } >-</button>
                <input type="number"
                    style={{backgroundColor: backgroundColorStyle}}
                    onChange={(e) => updateQty(name, e.target.value) }
                    value={quotes[name]}
                />
                <span>UN</span>
                <button onClick={ (e) => handleChangeQty(e, name, 'plus') } >+</button>
            </div>
        </div>
    );
}