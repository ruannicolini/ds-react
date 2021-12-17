import { useEffect, useState } from "react";

import salgadoImage from '../../assets/salgado.png';
import { WhatsappButton } from '../../components/Form/WhatsappButton';
import { useQuotes } from '../../hooks/useQuote';

import './styles.scss';

export function QuoteForm({textContent, ...props}) {

    const [clientName, setclientName] = useState();

    const [date, setDate] = useState();

    const [hour, setHour] = useState();

    const [location, setLocation] = useState();

    const [deliverNow, setDeliverNow] = useState();

    const [whatsappText, setWhatsappText] = useState();

    const { quoteRequestText, total } = useQuotes();
    
    const { heading, inputs, buttonText, whatsappNumber } = textContent;

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

            message += "*Nome: Lorem Lorem Lorem* \n";
            message += "*Data: 16/12/2021* \n";
            message += "*Hora: 22:00* \n";
            message += "*Local: Lorem Lorem Lorem,93.* \n";
        }

        let whatsappMessage = window.encodeURIComponent(message);

        setWhatsappText(whatsappMessage);

    },[clientName, date, hour, location, deliverNow, quoteRequestText]);

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
                            inp
                        ))};

                        <WhatsappButton label={buttonText} whatsappNumber={whatsappNumber} text={whatsappText} formValidate={true} />

                    </div>
                </div>
            </div>

            <div className="quote-form__footer-line"/>
            <div className="quote-form__second-footer-line"/>
        </div>
    );
}