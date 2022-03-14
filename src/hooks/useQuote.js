
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getProducts } from "../firebase.js";

const QuoteContext = createContext();

export function QuoteProvider({children}) {

    const [products, setProducts] = useState([]);

    const [quotes, setQuotes] = useState([]);

    const [total, setTotal] = useState(0);

    const [quoteRequestText, setQuoteRequestText] = useState();

    const [loading, setLoading] = useState(false);

    const buildProductText = () => {

        let quoteString = "";

        if(quotes){
            let productText = products.map( ({name, price}) => {
                let qty = quotes[name];
                let value = qty * price;
                let formatedValue = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(value);
                let auxText = '- ' + name + ': ' + qty + 'UN \n';
                return ( (qty > 0) ? auxText : '');
            }).join('') ;
            quoteString += productText.toString();
        }

        return quoteString;
    };

    useEffect( async () => {
        try {
            setLoading(true);
            setProducts(await getProducts());
        } catch (e) {
            console.log("Error on getProducts:", e);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect( () => {
        var quoteQty = {};

        products.map(item => { 
            quoteQty[item.name] = 0;
        });

        setQuotes(quoteQty);

    }, [products]);

    useEffect( () => {

        setQuoteRequestText( buildProductText() );

        if(quotes){
            let total = products.reduce( (acumulador, valorAtual) => {
                let {name, price} = valorAtual;
                let qty = quotes[name];
                let value = qty * price;
                return acumulador + value;
            }, 0);
            setTotal(total);
        }

    }, [products, quotes]);

    const updateQty = (productName, newQty) => {
        if(newQty < 0) newQty = 0;
        setQuotes({ ...quotes, [productName]: newQty });
    }

    return(
        <QuoteContext.Provider value={{ quotes, total, updateQty, products, loading, quoteRequestText}}>
            {children}
        </QuoteContext.Provider>
    )

}

export function useQuotes(){
    const context = useContext(QuoteContext);
    return context;
}