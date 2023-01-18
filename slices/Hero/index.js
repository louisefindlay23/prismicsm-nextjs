import React from "react";
import styles from "./hero.module.css";
import { PrismicRichText } from "@prismicio/react";

const Hero = ({ slice }) => (
    <section className={styles.heroBck}>
        <div className={styles.heroContent}>
            <h2>{slice.primary.heroheading}</h2>
            <PrismicRichText field={slice.primary.herorichtext} />
        </div>
    </section>
);

export default Hero;
