
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const QuoteContext = createContext();

const products = [
    { name: "Coxinha", additionalInfo: "Recheio de frango", price: .40},
    { name: "Pastel", additionalInfo: "Recheio de carne", price: .40},
    { name: "Bolinha de queijo", additionalInfo: "Recheio de Queijo", price: .40},
    { name: "Bolinha de bacalhau", additionalInfo: "Recheio de bacalhau", price: .50},
    { name: "Quibe", additionalInfo: "Recheio de carne", price: .50},
    { name: "Croquete", additionalInfo: "Recheio de queijo e presunto", price: .40},
    { name: "Croquete de calabresa", additionalInfo: "Recheio de calabresa", price: .40} 
]

export function QuoteProvider({children}) {

    const [quotes, setQuotes] = useState([]);

    const [quoteRequestText, setQuoteRequestText] = useState([]);

    const buildProductText = () => {

        let quoteString = "";

        if(quotes){

            quoteString = "*Pedido/Orçamento* \n";

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

        let whatsappProductMessage = window.encodeURIComponent(quoteString);

        return whatsappProductMessage;
    };

    useEffect( () => {

        var quoteQty = {};
        products.map(item => { 
            quoteQty[item.name] = 0;
        });

        setQuotes(quoteQty);

    }, []);

    useEffect( () => {
        setQuoteRequestText( buildProductText() );
    }, [quotes]);

    const updateQty = (productName, newQty) => {
        setQuotes({ ...quotes, [productName]: newQty });
    }

    return(
        <QuoteContext.Provider value={{ quotes, updateQty, products, quoteRequestText}}>
            {children}
        </QuoteContext.Provider>
    )

}

export function useQuotes(){
    const context = useContext(QuoteContext);
    return context;
}