import './styles.scss';

export function Input({ name, value, formData, setFormData }) {

    const getInputType = (name) => {
        let type = "text";
        if(name == "Data de Entrega") type = "date";
        if(name == "Hora") type = "time";
        return type;
    };

    return (
        <div className="input">
            <label htmlFor={name}>{name}</label>
            <input id={name} type={getInputType(name)} placeholder={name} value={value} onChange={ (event) => { 
                setFormData({ ...formData, [name]: event.target.value }) 
            } }/>
        </div>
        
    );
}