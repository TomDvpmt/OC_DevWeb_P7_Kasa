import { Link } from "react-router-dom";

import styles from "../Error404/Error404.module.css";

const Error404 = () => {
    return (
        <main className={`main ${styles.error404}`}>
            <h1 className={styles.heading}>404</h1>
            <p className={styles.description}>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to={"/"} className={styles.back_to_home}>
                Retourner sur la page d’accueil
            </Link>
        </main>
    );
};

export default Error404;
