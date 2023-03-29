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
                <h1 className={styles.heading}>
                    <span>Chez vous,&nbsp;</span>
                    <span>partout et ailleurs</span>
                </h1>
            )}
        </section>
    );
};

export default Hero;
