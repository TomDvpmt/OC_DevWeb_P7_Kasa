import { useState, useEffect } from "react";

import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Loader from "../../components/Loader";

import styles from "./Home.module.css";

const Home = () => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
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
                setIsLoading(false);
            })

            .catch((error) => console.log(error));
    }, []);

    return (
        <main>
            <Hero page="home" />
            {isLoading ? (
                <Loader />
            ) : (
                <section className={styles.cards}>{cards}</section>
            )}
        </main>
    );
};

export default Home;
