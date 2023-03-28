import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";

import styles from "./Accomodation.module.css";

const Accomodation = () => {
    const id = useParams().id;
    const [accomodation, setAccomodation] = useState({});

    useEffect(() => {
        fetch("../logements.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAccomodation(data.filter((element) => element.id === id)[0]);
            })

            .catch((error) => console.log(error));
    }, [id]);

    return (
        <main className={styles.accomodation}>
            <Carousel
                images={accomodation.pictures}
                title={accomodation.title}
            />
            <section>
                <h1>{accomodation.title}</h1>
            </section>
        </main>
    );
};

export default Accomodation;
