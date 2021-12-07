import './styles.scss';

export function SobreNos({heading, content}) {
    return (
        <div className="sobre-nos">
            <div className="sobre-nos__wrapper">
                <h2>{heading}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}