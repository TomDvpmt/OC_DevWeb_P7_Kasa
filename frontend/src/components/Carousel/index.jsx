import styles from "./Carousel.module.css";
import chevronLeft from "../../assets/chevron/chevron_left.png";
import chevronRight from "../../assets/chevron/chevron_right.png";

const Carousel = () => {
    const handleCarouselNavigation = (e) => {
        console.log(e.target.id === "left" ? "left" : "right");
    };

    return (
        <section className={styles.carousel}>
            <img
                id="left"
                className={`${styles.chevron} ${styles.left}`}
                src={chevronLeft}
                alt="Carousel navigation left"
                onClick={handleCarouselNavigation}
            />
            <img
                id="right"
                className={`${styles.chevron} ${styles.right}`}
                src={chevronRight}
                alt="Carousel navigation right"
                onClick={handleCarouselNavigation}
            />
            <div className={styles.images}>
                <img
                    src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
                    alt="mock data"
                />
            </div>
        </section>
    );
};

export default Carousel;
