
import { useOnScreen } from '../../hooks/useOnScreen';

import "./styles.scss"

export function StickyTextBar({ text, componentRef, margin }) {

    const headerOnScreen = useOnScreen(componentRef, margin);

    return (
        <div className={`sticky-text-bar ${headerOnScreen ? "animeTop" : ''} `}>
            <span>{ text }</span>
        </div>
    )
}