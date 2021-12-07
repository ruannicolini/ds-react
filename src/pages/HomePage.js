import { FeatureRow } from "../components/FeatureRow";

import FeatureRowImage from '../assets/mascot.png';

export function HomePage(props) {
    return (
        <FeatureRow 
        heading="Entre em contato conosco"
        subHeading="(33)99999-8888"
        image={FeatureRowImage}
        />
    );
}