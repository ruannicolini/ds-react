
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const QuoteContext = createContext();

const products = [
    { name: "Coxinha 18g", additionalInfo: "Recheio: frango", price: .40},
    { name: "Pastel 18g", additionalInfo: "Recheio: carne moída", price: .40},
    { name: "Bolinha de queijo 18g", additionalInfo: "Recheio: queijo com milho", price: .40},
    { name: "Bolinha de alho frito 18g", additionalInfo: "Recheio: queijo com alho", price: .40},
    { name: "Bolinha de alho-poró 18g", additionalInfo: "Recheio: queijo com alho poró", price: .40},
    { name: "Bolinha de bacalhau 18g", additionalInfo: "Contém bacalhau e batata", price: .40},
    { name: "Quibe 18g", additionalInfo: "Contém carne e especiarias", price: .40},
    { name: "Croquete 18g", additionalInfo: "Recheio: queijo e presunto", price: .40},
    { name: "Croquete de calabresa 18g", additionalInfo: "Contém calabresa", price: .40},
    { name: "Enroladinho de Salsicha 18g", additionalInfo: "Recheio: salsicha", price: .40}
]

export function QuoteProvider({children}) {

    const [quotes, setQuotes] = useState([]);

    const [total, setTotal] = useState(0);

    const [quoteRequestText, setQuoteRequestText] = useState();

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

    useEffect( () => {

        var quoteQty = {};

        products.map(item => { 
            quoteQty[item.name] = 0;
        });

        setQuotes(quoteQty);

    }, []);

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

    }, [quotes]);

    const updateQty = (productName, newQty) => {
        if(newQty < 0) newQty = 0;
        setQuotes({ ...quotes, [productName]: newQty });
    }

    return(
        <QuoteContext.Provider value={{ quotes, total, updateQty, products, quoteRequestText}}>
            {children}
        </QuoteContext.Provider>
    )

}

export function useQuotes(){
    const context = useContext(QuoteContext);
    return context;
}