import { Link } from "react-router-dom";

import styles from "./ErrorBoundary.module.css";

import PropTypes from "prop-types";

const ErrorBoundary = ({ errorMessage }) => {
    ErrorBoundary.propTypes = {
        errorMessage: PropTypes.string.isRequired,
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className={styles.container}>
            <p className={styles.message}>{errorMessage}</p>
            <Link className={styles.link} onClick={handleRefresh}>
                Essayer de rafraîchir la page
            </Link>
        </div>
    );
};

export default ErrorBoundary;
