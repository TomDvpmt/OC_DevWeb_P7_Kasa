import styles from "./Tag.module.css";

const Tag = ({ label }) => {
    return (
        <button className={styles.tag} type="button">
            {label}
        </button>
    );
};

export default Tag;
