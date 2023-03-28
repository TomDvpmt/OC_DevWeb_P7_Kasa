import { useState } from "react";

import chevron from "../../assets/chevron/chevron_up.png";

import PropTypes from "prop-types";

import styles from "./DropDown.module.css";

const DropDown = ({ name, contentType, content }) => {
    DropDown.propTypes = {
        name: PropTypes.string,
        contentType: PropTypes.string,
        content: PropTypes.any,
    };

    const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
        setShowContent((showContent) => !showContent);
    };

    return (
        <article className={styles.dropdown}>
            <button className={styles.button} onClick={handleClick}>
                <h2>{name}</h2>
                <img
                    className={`${styles.chevron} ${
                        showContent && styles.pivot
                    }`}
                    src={chevron}
                    alt="dropdown menu chevron"
                />
            </button>

            <>
                {contentType === "string" ? (
                    <p
                        className={`${styles.content} ${
                            showContent && styles.show
                        }`}>
                        {content}
                    </p>
                ) : (
                    <ul
                        className={`${styles.content} ${
                            showContent && styles.show
                        }`}>
                        {content &&
                            content.map((listItem, index) => (
                                <li key={index}>{listItem}</li>
                            ))}
                    </ul>
                )}
            </>
        </article>
    );
};

export default DropDown;
