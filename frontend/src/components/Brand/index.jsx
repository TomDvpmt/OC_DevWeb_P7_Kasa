import React from "react";
import PropTypes from "prop-types";
import logoPrimary from "../../assets/brand/kasa-house-logo.png";
import logoWhite from "../../assets/brand/kasa-house-logo-white.png";
import styles from "./Brand.module.css";

const Brand = ({ position }) => {
    Brand.propTypes = {
        position: PropTypes.string.isRequired,
    };

    return (
        <div className={styles[position]}>
            <span className={styles.letters}>K</span>
            <img
                className={styles.logo}
                src={position === "footer" ? logoWhite : logoPrimary}
                alt="Kasa house logo"
                width="32"
            />
            <span className={styles.letters}>sa</span>
        </div>
    );
};

export default Brand;
