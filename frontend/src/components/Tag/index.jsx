import PropTypes from "prop-types";

import styles from "./Tag.module.css";

const Tag = ({ label }) => {
    Tag.propTypes = {
        label: PropTypes.string.isRequired,
    };
    return (
        <button className={styles.tag} type="button">
            {label}
        </button>
    );
};

export default Tag;
