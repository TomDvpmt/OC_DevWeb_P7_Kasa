import { Link } from "react-router-dom";
import Brand from "../Brand";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Brand position="header" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </header>
    );
};

export default Header;
