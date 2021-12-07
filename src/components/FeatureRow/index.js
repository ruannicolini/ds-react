import "./styles.scss"

export function FeatureRow(props) {
    return (
        <div className="feature-row">
            <div className="container">
                <div className="feature-row-text-wrapper">
                    <h2>{props.heading}</h2>
                    <p>{props.subHeading}</p>
                </div>
                <div className="feature-row-image-wrapper">
                    <img src={props.image} alt={props.alt} />
                </div>
            </div>
        </div>
    )
}