import './styles.scss';

export function ProductCard({item, backgroundColorStyle}) {

    const { name, additionalInfo } = item; 
    
    return (
        <div className="product-card" style={ { backgroundColor: backgroundColorStyle } }>
            <span className="product-card__name">{name}</span>
            <span className="product-card__info">{additionalInfo}</span>
            <div className="product-card-qty">
                <button>-</button>
                <input type="number" style={ { backgroundColor: backgroundColorStyle } } /> <span>UN</span>
                <button>+</button>
            </div>
        </div>
    );
}