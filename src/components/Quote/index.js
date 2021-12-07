import { QuoteForm } from "../QuoteForm";
import { QuoteProducts } from "../QuoteProducts";

export function Quote({textContentProducts, textContentForm}) {
    return (
        <>
            <QuoteProducts textContent={textContentProducts}/>
            <QuoteForm textContent={textContentForm}/>
        </>
    );
}