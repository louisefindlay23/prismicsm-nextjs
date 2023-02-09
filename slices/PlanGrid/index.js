import React from "react";
import styles from "./planGrid.module.css";
import { PrismicRichText } from "@prismicio/react";
import { Currency } from "react-intl-number-format";

/**
 * @typedef {import("@prismicio/client").Content.FeatureGridSlice} FeatureGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureGridSlice>} FeatureGridProps
 * @param { FeatureGridProps }
 */
const FeatureGrid = ({ slice }) => (
    <section className={styles.grid}>
        {/* Card */}
        {slice?.items?.map((item, i) => (
            <div className={styles.card}>
                <PrismicRichText field={item.plan_title_r} />
                <Currency locale="en-US" currency="USD">
                    {item.plan_price_r}
                </Currency>
                <ul>
                    <PrismicRichText
                        key={JSON.stringify(item)}
                        field={item.plan_features_r}
                    />
                </ul>
                <button>Buy Now</button>
            </div>
        ))}
    </section>
);

export default FeatureGrid;
