import React from "react";
import styles from "./hero.module.css";
import { PrismicRichText } from "@prismicio/react";

const Hero = ({ slice }) => (
    <section className={`${styles.heroBck} ${styles.flexVertCenter}`}>
        <div className={[styles.heroContent, styles.flexVertCenter].join(" ")}>
            {/* Hero Content */}
            <h2>{slice.primary.heroheading}</h2>
            <PrismicRichText field={slice.primary.herorichtext} />
            <button>{slice.primary.herobuttontext}</button>
        </div>
    </section>
);

export default Hero;
