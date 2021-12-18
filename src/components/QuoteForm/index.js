import { useEffect, useState } from "react";

import salgadoImage from '../../assets/salgado.png';
import { WhatsappButton } from '../../components/Form/WhatsappButton';
import { Input } from '../../components/Form/Input';
import { PaymentSelect } from '../Form/PaymentSelect';
import { useQuotes } from '../../hooks/useQuote';

import './styles.scss';

export function QuoteForm({textContent, ...props}) {

    const [formData, setFormData] = useState({});

    const [formValidate, setFormValidate] = useState(false);

    const [whatsappText, setWhatsappText] = useState();

    const { quoteRequestText, total } = useQuotes();
    
    const { heading, inputs, buttonText, whatsappNumber, defaultPaymentMethod } = textContent;

    useEffect( () => {
        if(inputs) {
            let aux = {};
            inputs.map( (inp) => {
                if(inp == "Data de Entrega") {
                    let today = new Date();
                    aux[inp] = today.toISOString().substr(0, 10);
                }else if (inp == "Forma de Pagamento") {
                    aux[inp] =  defaultPaymentMethod;
                } else {
                    aux[inp] =  "";
                }
            });
            setFormData(aux);
        }
    }, [] );

    useEffect( () => {
        setWhatsappText( biuldWhatsappText() );
        setFormValidate( getFormValidation() );
    },[formData, quoteRequestText]);

    const getFormValidation = () => {
        return ((formData["Nome"] !== "")&&(formData["Endereço"] !== "")&&(formData["Data de Entrega"] !== "")&&(formData["Hora"] !== "")&&(formData["Forma de Pagamento"] !== "")&&(quoteRequestText !== ""));
    }

    const biuldWhatsappText = () => {

        let message = "";

        let productText = quoteRequestText;

        if(productText) {
            message = 'Olá, gostaria de fazer um pedido!  \n\n';

            message += "*Itens* \n";

            message += productText;

            message += ' \n';

            message += '>> Valor Total: *' + (new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(total)) + '* <<';

            message += ' \n\n';

            message += "*Informações* \n";

            message += "Nome: " + formData["Nome"] + "\n";
            message += "Data: " + (new Intl.DateTimeFormat('pt-BR').format( new Date(formData["Data de Entrega"]))) + "\n";
            message += "Hora: " + formData["Hora"] + "\n";
            message += "Endereço: " + formData["Endereço"] + "\n";
            message += (formData["Ponto de Referência"]) ? ("Ponto de Referência: " + formData["Ponto de Referência"] + "\n") : '';
            message += "Forma de Pagamento: " + formData["Forma de Pagamento"] + "\n";
        }

        let whatsappMessage = window.encodeURIComponent(message);

        return whatsappMessage;

    }

    return (
        <div className="quote-form">

            <div className="quote-form__content">
                <div className="quote-form__image-wrapper">
                    <img className='quote-form__image' src={salgadoImage} alt="Salgados" />
                </div>
                <div className="quote-form__form-wrapper">
                    <div className="quote-form__form">

                        <h2 className="quote-form__heading">{heading}</h2>

                        {inputs && inputs.map( (inp) => {

                            if (inp=="Forma de Pagamento"){
                                return <PaymentSelect key={inp} name={inp} value={formData[inp]} formData={formData} setFormData={setFormData} />
                            }else{
                                return <Input key={inp} name={inp} value={formData[inp]} formData={formData} setFormData={setFormData} />
                            }
                            
                        })}

                        { !quoteRequestText && <p>Parece que você ainda não escolheu produtos, <a href="#combo" className="quote-form__voltarAoCombo" >Click aqui!</a></p> }

                        { (quoteRequestText && !formValidate) && <p className="quote-form__info-error" >Informe todos os dados acima para prosseguir</p> }

                        <WhatsappButton label={buttonText} whatsappNumber={whatsappNumber} text={whatsappText} formValidate={formValidate} />

                    </div>
                </div>
            </div>

            <div className="quote-form__footer-line"/>
            <div className="quote-form__second-footer-line"/>
        </div>
    );
}