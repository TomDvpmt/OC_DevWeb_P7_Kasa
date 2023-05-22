import { useState, useEffect } from "react";

import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";

import styles from "./Home.module.css";

const Home = () => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setErrorMessage("");
        setIsLoading(true);
        fetch("logements.json")
            .then((response) => response.json())
            .then((data) => {
                setCards(
                    data.map((result) => (
                        <Card
                            key={result.id}
                            id={result.id}
                            cover={result.cover}
                            title={result.title}
                        />
                    ))
                );
            })

            .catch((error) => {
                console.error(error);
                setErrorMessage("Impossible d'afficher les données.");
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <main className="main">
            <Hero page="home" />
            {isLoading ? (
                <Loader />
            ) : errorMessage ? (
                <ErrorBoundary page="home" errorMessage={errorMessage} />
            ) : (
                <section className={styles.cards}>{cards}</section>
            )}
        </main>
    );
};

export default Home;
