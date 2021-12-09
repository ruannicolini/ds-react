
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const QuoteContext = createContext();

const products = [
    { name: "Coxinha", additionalInfo: "Recheio de frango", price: .23},
    { name: "Pastel", additionalInfo: "Recheio de carne", price: .23},
    { name: "Bolinha de queijo", additionalInfo: "Recheio de Queijo", price: .43},
    { name: "Bolinha de bacalhau", additionalInfo: "Recheio de bacalhau", price: .43},
    { name: "Quibe", additionalInfo: "Recheio de carne", price: .53},
    { name: "Croquete", additionalInfo: "Recheio de queijo e presunto", price: .60},
    { name: "Croquete de calabresa", additionalInfo: "Recheio de calabresa", price: .60} 
]

export function QuoteProvider({children}) {

    const [quotes, setQuotes] = useState([]);

    useEffect( () => {

        var quoteQty = {};

        products.map(item => { 
            quoteQty[item.name] = 0;
        });

        setQuotes(quoteQty);

    }, []);

    const updateQty = (productName, newQty) => {

        setQuotes({ ...quotes, [productName]: newQty });

    }

    return(
        <QuoteContext.Provider value={{ quotes, updateQty, products}}>
            {children}
        </QuoteContext.Provider>
    )

}

export function useQuotes(){
    const context = useContext(QuoteContext);
    return context;
}