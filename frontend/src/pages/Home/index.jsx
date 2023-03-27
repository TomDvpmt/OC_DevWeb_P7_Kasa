import { useState, useEffect } from "react";

import Hero from "../../components/Hero";
import Card from "../../components/Card";

import styles from "./Home.module.css";

const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
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

            .catch((error) => console.log(error));
    }, []);

    return (
        <main>
            <Hero page="home" />
            <section className={styles.cards}>{cards}</section>
        </main>
    );
};

export default Home;
