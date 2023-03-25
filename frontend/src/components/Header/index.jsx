import { Link } from "react-router-dom";
import Brand from "../Brand";

import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <Brand />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </header>
    );
};

export default Header;
