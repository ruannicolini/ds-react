import './styles.scss';

export function WhatsappButton({ label, whatsappNumber, text, formValidate }) {

    const URL = (whatsappNumber) ? 'https://api.whatsapp.com/send?phone='+whatsappNumber+'&text=' + text : '';

    return (
        <a href={URL} className={ "whatsapp-button " + (!formValidate ? "disabled" : "") } disabled={!formValidate} ><span>{label}</span></a>
    );
}