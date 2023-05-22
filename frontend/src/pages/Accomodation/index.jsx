import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Carousel from "../../components/Carousel";
import Tag from "../../components/Tag";
import DropDown from "../../components/DropDown";
import Rating from "../../components/Rating";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";

import styles from "./Accomodation.module.css";

const Accomodation = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [accomodation, setAccomodation] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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
                    setAccomodation(data.find((element) => element.id === id));
                } else {
                    navigate("/error404");
                }
            })

            .catch((error) => {
                console.error(error);
                setErrorMessage("Impossible d'afficher les données.");
            })
            .finally(() => setIsLoading(false));
    }, [id, navigate]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : errorMessage ? (
                <main className={`main ${styles.accomodation}`}>
                    <ErrorBoundary errorMessage={errorMessage} />
                </main>
            ) : (
                <main className={`main ${styles.accomodation}`}>
                    {accomodation.pictures && accomodation.title && (
                        <Carousel
                            images={accomodation.pictures}
                            title={accomodation.title}
                        />
                    )}
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
                            {accomodation.description && (
                                <DropDown
                                    key="description"
                                    page="accomodation"
                                    name="Description"
                                    contentType="string"
                                    content={accomodation.description}
                                />
                            )}
                            {accomodation.equipments && (
                                <DropDown
                                    key="equipments"
                                    page="accomodation"
                                    name="Equipements"
                                    contentType="array"
                                    content={accomodation.equipments}
                                />
                            )}
                        </div>
                    </section>
                </main>
            )}
        </>
    );
};

export default Accomodation;
