import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./hero.module.css";

const Hero = ({ slice }) => (
    <section
        className={`${styles.heroBackground} ${styles.flexVerticalCenter}`}
    >
        <div className={`${styles.heroContent} ${styles.flexVerticalCenter}`}>
            {/* Hero Content */}
            <PrismicRichText field={slice.primary.hero_heading} />
            <PrismicRichText field={slice.primary.hero_text} />
            <button>
                <PrismicRichText field={slice.primary.hero_button_text} />
            </button>
        </div>
    </section>
);

export default Hero;

{
    /* TODO: Refactor background image to CSS Grid to set URL as fallback and background image as Prismic Image field */
}

<div class="grid">
    <img />
    <div class="text"></div>
</div>;
