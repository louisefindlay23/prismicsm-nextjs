import React from "react";
import styles from "./hero.module.css";
import { PrismicRichText } from "@prismicio/react";

const Hero = ({ slice }) => (
    <section className={`${styles.heroBck} ${styles.flexVertCenter}`}>
        <div className={[styles.heroContent, styles.flexVertCenter].join(" ")}>
            {/* Hero Content */}
            <h2>{slice.primary.hero_heading}</h2>
            <PrismicRichText field={slice.primary.hero_text} />
            <button>{slice.primary.hero_button_text}</button>
        </div>
    </section>
);

export default Hero;
