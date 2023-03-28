import { NavLink } from "react-router-dom";
import Brand from "../Brand";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Brand position="header" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;
