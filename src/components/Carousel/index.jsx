import { useState } from "react";

import chevronLeft from "../../assets/chevron/chevron_left.png";
import chevronRight from "../../assets/chevron/chevron_right.png";

import styles from "./Carousel.module.css";

const Carousel = ({ images }) => {
    const [carouselPosition, setCarouselPosition] = useState(0);

    const handleCarouselNavigation = (e) => {
        if (e.target.id === "right") {
            setCarouselPosition((carouselPosition) =>
                carouselPosition === images.length - 1
                    ? 0
                    : carouselPosition + 1
            );
        } else {
            setCarouselPosition((carouselPosition) =>
                carouselPosition === 0
                    ? images.length - 1
                    : carouselPosition - 1
            );
        }
    };

    return (
        <>
            {images && (
                <section className={styles.carousel}>
                    {images.length > 1 && (
                        <>
                            <span className={styles.images_count}>{`${
                                carouselPosition + 1
                            }/${images.length}`}</span>

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
                        </>
                    )}
                    <div className={styles.images}>
                        {images?.map((image, index) => (
                            <div
                                key={index}
                                className={styles.carousel_image}
                                style={{
                                    backgroundImage: `url(${image})`,
                                    transform: `translateX(calc(-100% * ${carouselPosition})`,
                                }}></div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Carousel;
