import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";

const Hero = ({ page }) => {
    Hero.propTypes = {
        page: PropTypes.string,
    };

    return (
        <section className={`${styles.hero} ${styles[page]}`}>
            <div className={styles.opacity}></div>
            {page === "home" && (
                <h1>
                    Chez vous,
                    <br />
                    partout et ailleurs
                </h1>
            )}
        </section>
    );
};

export default Hero;
