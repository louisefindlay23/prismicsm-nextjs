import React from "react";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
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
        {/* TODO: Get PrismicImage or PrismicNextImage working */}
        <Image
            src={slice.primary.hero_image.url}
            alt={""}
            width={1920}
            height={100}
        />
    </section>
);

export default Hero;
