import React from "react";
import PropTypes from "prop-types";
import homeHero from "../../assets/img/kasa_hero-home.jpg";
import aboutHero from "../../assets/img/kasa_hero-about.jpg";
import "./hero.css";

const Hero = ({ page }) => {
    Hero.propTypes = {
        page: PropTypes.string,
    };

    return (
        <section
            className={`hero ${
                page === "home" ? "hero--home" : "hero--about"
            }`}>
            <div className="hero__opacity"></div>
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
