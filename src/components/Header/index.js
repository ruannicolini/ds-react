import './index.scss';

import {ReactComponent as Logo} from '../../assets/logo.svg';

export function Header() {
    return (
        <div className="header">
            <Logo />
        </div>
    );
}