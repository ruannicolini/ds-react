import { FeatureRow } from "../components/FeatureRow";
import { SobreNos } from "../components/SobreNos";
import { Quote } from "../components/Quote";

import FeatureRowImage from '../assets/mascot.png';

export function HomePage(props) {

    const textContent = {
        featureRow: {
            heading: "Entre em contato conosco",
            subHeading: "(33)99937-8423"
        },
        quote: {
            products: {
                heading: "Monte seu combo",
                subHeading: "... e faça seu pedido!"
            },
            form: {
                heading: "Envie seu pedido pelo whatsapp!",
                inputs: ["Nome", "Data de Entrega", "Hora", "Endereço de Entrega", "Ponto de Referência", "Forma de Pagamento"],
                whatsappNumber: "5527997506865",
                defaultPaymentMethod: "Dinheiro",
                taxaEntrega: "2",
                buttonText: "Enviar" 
            }
        },
        sobreNos: {
            heading: "Sobre Nós",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
    }

    return (
        <>
            <FeatureRow 
                heading={textContent.featureRow.heading}
                subHeading={textContent.featureRow.subHeading}
                image={FeatureRowImage}/>

            <Quote textContentForm={textContent.quote.form} textContentProducts={textContent.quote.products}/>

            <SobreNos heading={textContent.sobreNos.heading} content={textContent.sobreNos.content}/>
        </>
    );
}