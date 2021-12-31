import './styles.scss';

export function Checkbox({ name, value, formData, setFormData, taxaEntrega }) {

    return (
        <label className="checkbox" htmlFor={name}>
        <input
            id={name}
            name={name}
            type="checkbox"
            checked={value}
            onChange={ (event) => { 
                setFormData({ ...formData, [name]: !value }) 
            } } />
            Retirar no local (<span>Economize {(new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(Number(taxaEntrega)))}</span> )
        </label>
    );
}