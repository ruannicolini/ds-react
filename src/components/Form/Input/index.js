import './styles.scss';

export function Input({ name }) {
    return (
        <div className="input">
            <input type="text" placeholder={name} />
        </div>
        
    );
}