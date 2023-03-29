import { useState } from "react";

import { ReactComponent as Chevron } from "../../assets/chevron/chevron_up.svg";

import PropTypes from "prop-types";

import styles from "./DropDown.module.css";

const DropDown = ({ page, name, contentType, content }) => {
    DropDown.propTypes = {
        page: PropTypes.string,
        name: PropTypes.string,
        contentType: PropTypes.string,
        content: PropTypes.any,
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
                <h2>{name}</h2>
                <Chevron
                    className={`${styles.chevron} ${
                        showContent && styles.pivot
                    }`}
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
