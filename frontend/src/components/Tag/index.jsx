import styles from "./Tag.module.css";

const Tag = ({ name }) => {
    return (
        <button className={styles.tag} type="button">
            {name}
        </button>
    );
};

export default Tag;
