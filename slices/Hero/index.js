import React from "react";
import styles from "./hero.module.css";
import { PrismicRichText } from "@prismicio/react";

const Hero = ({ slice }) => (
    <section
        className={`${styles.heroBackground} ${styles.flexVerticalCenter}`}
    >
        {/* No support for ::before pseudo attributes */}
        <div
            className={[styles.heroContent, styles.flexVerticalCenter].join(
                " "
            )}
        >
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

<div class="grid">
    <img />
    <div class="text"></div>
</div>;
