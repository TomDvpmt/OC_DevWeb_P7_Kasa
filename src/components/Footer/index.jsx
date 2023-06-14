import Brand from "../Brand";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Brand position="footer" />
            <span className={styles.copyright}>
                © 2023 Kasa. All rights reserved
            </span>
        </footer>
    );
};

export default Footer;
