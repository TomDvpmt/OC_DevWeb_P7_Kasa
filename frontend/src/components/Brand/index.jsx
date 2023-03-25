import React from "react";
import PropTypes from "prop-types";
import logoPrimary from "../../assets/logo/kasa-house-logo.png";
import logoWhite from "../../assets/logo/kasa-house-logo-white.png";
import "./brand.css";

const Brand = ({ position }) => {
    Brand.propTypes = {
        position: PropTypes.string,
    };

    return (
        <div className="brand">
            <span className="brand__letters">K</span>
            <img
                className="brand__logo"
                src={position === "footer" ? logoWhite : logoPrimary}
                alt="Kasa house logo"
                width="32"
            />
            <span className="brand__letters">sa</span>
        </div>
    );
};

export default Brand;
