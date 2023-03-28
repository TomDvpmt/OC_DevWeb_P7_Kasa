import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as EmptyStar } from "../../assets/stars/star_empty.svg";
import { ReactComponent as FullStar } from "../../assets/stars/star_full.svg";

import styles from "./Rating.module.css";

const Rating = ({ rating }) => {
    Rating.propTypes = {
        rating: PropTypes.number,
    };

    const [stars, setStars] = useState([]);

    useEffect(() => {
        setStars(() => {
            let stars = [];
            for (let i = 1; i <= 5; i++) {
                stars.push(
                    i <= rating ? <FullStar /> : <EmptyStar />
                    // <img
                    //     key={i}
                    //     src={i <= rating ? fullStar : emptyStar}
                    //     alt={i <= rating ? "étoile pleine" : "étoile vide"}
                    // />
                );
            }
            return stars;
        });
    }, []);

    return <div className={styles.rating}>{stars}</div>;
};

export default Rating;
