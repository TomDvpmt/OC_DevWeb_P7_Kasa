import Hero from "../../components/Hero";
import DropDown from "../../components/DropDown";

import styles from "./About.module.css";

const About = () => {
    const ABOUT_DROPDOWNS = [
        {
            label: "Fiabilité",
            content:
                "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        },
        {
            label: "Respect",
            content:
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
            label: "Service",
            content:
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            label: "Sécurité",
            content:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];
    return (
        <main className="main">
            <Hero page="about" />
            <section className={styles.dropdowns}>
                {ABOUT_DROPDOWNS.map((element, index) => (
                    <DropDown
                        key={index}
                        page="about"
                        label={element.label}
                        contentType="paragraph"
                        content={element.content}
                    />
                ))}
            </section>
        </main>
    );
};

export default About;
