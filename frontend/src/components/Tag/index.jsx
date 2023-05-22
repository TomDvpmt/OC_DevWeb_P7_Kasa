import styles from "./Tag.module.css";

import PropTypes from "prop-types";

const Tag = ({ name }) => {
    Tag.propTypes = {
        name: PropTypes.string.isRequired,
    };
    return (
        <button className={styles.tag} type="button">
            {name}
        </button>
    );
};

export default Tag;
