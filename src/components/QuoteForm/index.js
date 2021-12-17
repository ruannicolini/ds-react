import { useEffect, useState } from "react";

import salgadoImage from '../../assets/salgado.png';
import { WhatsappButton } from '../../components/Form/WhatsappButton';
import { Input } from '../../components/Form/Input';
import { useQuotes } from '../../hooks/useQuote';

import './styles.scss';

export function QuoteForm({textContent, ...props}) {

    const [formData, setFormData] = useState({});

    const [whatsappText, setWhatsappText] = useState();

    const { quoteRequestText, total } = useQuotes();
    
    const { heading, inputs, buttonText, whatsappNumber } = textContent;

    useEffect( () => {

        if(inputs) {
            let aux = {};
            inputs.map( (inp) => {
                if(inp == "Data") {
                    let today = new Date();
                    aux[inp] = today.toISOString().substr(0, 10);
                }else {
                    aux[inp] =  "";
                }
                
            });
            setFormData(aux);
        }

    }, [] );

    useEffect( () => {

        let message = "";

        let productText = quoteRequestText;

        if(productText) {
            message = 'Olá, gostaria de fazer um pedido!  \n\n';

            message += "*Itens* \n";

            message += productText;

            message += ' \n';

            message += '>> Valor Total: *' + (new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(total)) + '* <<';

            message += ' \n\n';

            message += "*Nome: " + formData["Nome"] + "* \n";
            message += "*Data: " + (new Intl.DateTimeFormat('pt-BR').format( new Date(formData["Data"]))) + "* \n";
            message += "*Hora: " + formData["Hora"] + "* \n";
            message += "*Endereço: " + formData["Endereço"] + "* \n";
            message += "*Ponto de Referência: " + formData["Ponto de Referência"] + "* \n";
        }

        let whatsappMessage = window.encodeURIComponent(message);

        setWhatsappText(whatsappMessage);

    },[formData, quoteRequestText]);

    return (
        <div className="quote-form">

            <div className="quote-form__content">
                <div className="quote-form__image-wrapper">
                    <img className='quote-form__image' src={salgadoImage} alt="Salgados" />
                </div>
                <div className="quote-form__form-wrapper">
                    <div className="quote-form__form">

                        <h2 className="quote-form__heading">{heading}</h2>

                        {inputs && inputs.map( (inp) => (
                            <Input key={inp} name={inp} value={formData[inp]} formData={formData} setFormData={setFormData} />
                        ))}

                        <WhatsappButton label={buttonText} whatsappNumber={whatsappNumber} text={whatsappText} formValidate={true} />

                    </div>
                </div>
            </div>

            <div className="quote-form__footer-line"/>
            <div className="quote-form__second-footer-line"/>
        </div>
    );
}