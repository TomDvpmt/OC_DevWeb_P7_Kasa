import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Carousel from "../../components/Carousel";
import Tag from "../../components/Tag";
import DropDown from "../../components/DropDown";
import Rating from "../../components/Rating";
import Loader from "../../components/Loader";

import styles from "./Accomodation.module.css";

const Accomodation = () => {
    const navigate = useNavigate();
    const id = useParams().id;
    const [accomodation, setAccomodation] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("../logements.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (
                    data.reduce(
                        (acc, element) => acc || element.id === id,
                        false
                    )
                ) {
                    setAccomodation(
                        data.filter((element) => element.id === id)[0]
                    );
                    setIsLoading(false);
                } else {
                    navigate("/error404");
                }
            })

            .catch((error) => console.log(error));
    }, [id, navigate]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <main className={styles.accomodation}>
                    <Carousel
                        images={accomodation.pictures}
                        title={accomodation.title}
                    />
                    <section>
                        <h1 className={styles.heading}>{accomodation.title}</h1>
                        <p className={styles.location}>
                            {accomodation.location}
                        </p>
                        <div className={styles.tags}>
                            {accomodation.tags &&
                                accomodation.tags.map((tag) => (
                                    <Tag key={tag} name={tag} />
                                ))}
                        </div>
                        {accomodation.host && (
                            <div className={styles.rating_and_host}>
                                <Rating
                                    rating={parseInt(accomodation.rating)}
                                />
                                <div className={styles.host}>
                                    <span>{accomodation.host.name}</span>
                                    <img
                                        src={accomodation.host.picture}
                                        alt="Portrait de l'hôte"
                                    />
                                </div>
                            </div>
                        )}
                        <div className={styles.dropdowns}>
                            <DropDown
                                key="description"
                                page="accomodation"
                                name="Description"
                                contentType="string"
                                content={accomodation.description}
                            />
                            <DropDown
                                key="equipments"
                                page="accomodation"
                                name="Equipements"
                                contentType="array"
                                content={accomodation.equipments}
                            />
                        </div>
                    </section>
                </main>
            )}
        </>
    );
};

export default Accomodation;
