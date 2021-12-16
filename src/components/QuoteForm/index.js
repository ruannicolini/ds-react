import salgadoImage from '../../assets/salgado.png';
import { WhatsappButton } from '../../components/Form/WhatsappButton';

import './styles.scss';

export function QuoteForm({textContent, ...props}) {

    const { heading, inputs, buttonText, whatsappNumber } = textContent;

    // console.log('heading',heading );
    // console.log('buttonText',buttonText );
    // console.log('inputs',inputs );

    return (
        <div className="quote-form">

            <div className="quote-form__content">
                <div className="quote-form__image-wrapper">
                    <img className='quote-form__image' src={salgadoImage} alt="Salgados" />
                </div>
                <div className="quote-form__form-wrapper">
                    <div className="quote-form__form">
                        <h2 class="quote-form__heading">{heading}</h2>

                        {inputs && inputs.map( (inp) => (
                            inp
                        ))};

                        <WhatsappButton label={buttonText} whatsappNumber={whatsappNumber} text="apenas um teste" formValidate={true} />

                    </div>
                </div>
            </div>

            <div className="quote-form__footer-line"/>
            <div className="quote-form__second-footer-line"/>
        </div>
    );
}