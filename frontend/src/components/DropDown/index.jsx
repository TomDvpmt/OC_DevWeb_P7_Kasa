import { useState } from "react";

import { ReactComponent as Chevron } from "../../assets/chevron/chevron_up.svg";

import PropTypes from "prop-types";

import styles from "./DropDown.module.css";

const DropDown = ({ page, label, contentType, content }) => {
    DropDown.propTypes = {
        page: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        contentType: PropTypes.string.isRequired,
        content: PropTypes.any.isRequired,
    };

    const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
        setShowContent((showContent) => !showContent);
    };

    return (
        <article
            className={`${styles.dropdown}  ${
                page === "about" && styles.about
            }`}>
            <button className={styles.heading} onClick={handleClick}>
                <h2>{label}</h2>
                <Chevron
                    className={`${styles.chevron} ${
                        showContent && styles.pivot
                    }`}
                />
            </button>

            {contentType === "list" ? (
                <ul
                    className={`${styles.content} ${
                        showContent && styles.show
                    }`}>
                    {content &&
                        content.map((listItem, index) => (
                            <li key={index}>{listItem}</li>
                        ))}
                </ul>
            ) : (
                <p
                    className={`${styles.content} ${
                        showContent && styles.show
                    }`}>
                    {content}
                </p>
            )}
        </article>
    );
};

export default DropDown;
