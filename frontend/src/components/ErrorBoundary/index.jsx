import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import styles from "./ErrorBoundary.module.css";

const ErrorBoundary = ({ page, errorMessage }) => {
    ErrorBoundary.propTypes = {
        page: PropTypes.string.isRequired,
        errorMessage: PropTypes.string.isRequired,
    };

    return (
        <div className={styles.container}>
            <p className={styles.message}>{errorMessage}</p>
            <div className={styles.links}>
                <Link
                    className={styles.link}
                    onClick={() => window.location.reload()}>
                    Essayer de rafraîchir la page
                </Link>
                {page !== "home" && (
                    <Link className={styles.link} to="/">
                        Retourner à l'accueil
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ErrorBoundary;
