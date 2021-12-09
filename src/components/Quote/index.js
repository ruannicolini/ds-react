import { QuoteForm } from "../QuoteForm";
import { QuoteProducts } from "../QuoteProducts";
import { QuoteProvider } from "../../hooks/useQuote";

export function Quote({textContentProducts, textContentForm}) {
    return (
        <QuoteProvider>
            <QuoteProducts textContent={textContentProducts}/>
            <QuoteForm textContent={textContentForm}/>
        </QuoteProvider>
    );
}