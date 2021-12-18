import './styles.scss';

export function PaymentSelect({ name, value, formData, setFormData }) {
    return (
        <div className="select">
            <label htmlFor={name}>{name}</label>
            <select value={value} onChange={ (event) => { 
                setFormData({ ...formData, [name]: event.target.value }) 
            } }>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Pix">Pix</option>
                <option value="Picpay">Picpay</option>
            </select>
        </div>
        
    );
}