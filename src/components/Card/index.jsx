import { Link } from "react-router-dom";

import styles from "./Card.module.css";

const Card = ({ id, cover, title }) => {
    return (
        <Link to={`/accomodation/${id}`}>
            <article
                className={styles.card}
                style={{ backgroundImage: `url(${cover})` }}>
                <div className={styles.opacity}></div>
                <h2 className={styles.heading}>{title}</h2>
            </article>
        </Link>
    );
};

export default Card;
