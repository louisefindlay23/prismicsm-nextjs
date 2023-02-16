import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./hero.module.css";

const Hero = ({ slice }) => (
    <section className={`${styles.heroBackground}`}>
        {/* Hero Content */}
        <div className={`${styles.heroContent}`}>
            <PrismicRichText field={slice.primary.hero_heading} />
            <PrismicRichText field={slice.primary.hero_text} />
            <button>
                <PrismicRichText field={slice.primary.hero_button_text} />
            </button>
        </div>
        <PrismicNextImage
            field={slice.primary.hero_image}
            alt={""}
            width={1920}
            height={100}
        />
    </section>
);

export default Hero;
