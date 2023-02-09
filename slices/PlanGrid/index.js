import React from "react";
import styles from "./planGrid.module.css";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.FeatureGridSlice} FeatureGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureGridSlice>} FeatureGridProps
 * @param { FeatureGridProps }
 */
const FeatureGrid = ({ slice }) => (
    <section className={styles.grid}>
        {/* Single Card */}
        <div className={styles.card}>
            <PrismicRichText field={slice.primary.plan_title} />
            <PrismicRichText field={slice.primary.plan_price} />
            <PrismicRichText field={slice.primary.plan_features} />
            <button>Buy Now</button>
        </div>
        {/* Other Cards */}
        <div className={styles.card}>
            <PrismicRichText field={slice.primary.plan_two_title} />
            <PrismicRichText field={slice.primary.plan_two_price} />
            <PrismicRichText field={slice.primary.plan_features} />
            <button>Buy Now</button>
        </div>
        <div className={styles.card}>
            <PrismicRichText field={slice.primary.plan_three_title} />
            <PrismicRichText field={slice.primary.three_price} />
            <PrismicRichText field={slice.primary.plan_three_features} />
            <button>Buy Now</button>
        </div>
    </section>
);

export default FeatureGrid;
