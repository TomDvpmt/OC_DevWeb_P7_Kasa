import { useState } from "react";

import chevron from "../../assets/chevron/chevron_up.png";

import styles from "./DropDown.module.css";

const DropDown = ({ name, content }) => {
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

            <p className={`${styles.content} ${showContent && styles.show}`}>
                {content}
            </p>
        </article>
    );
};

export default DropDown;
