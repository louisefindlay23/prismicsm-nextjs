import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./featureGrid.module.css";

/**
 * @typedef {import("@prismicio/client").Content.FeatureGridSlice} FeatureGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureGridSlice>} FeatureGridProps
 * @param { FeatureGridProps }
 */
const FeatureGrid = ({ slice }) => (
    <section className={styles.grid}>
        <div className={styles.card}>
            <h3>Feature Title</h3>
            <h4>$30/mth</h4>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            <button>Buy Now</button>
        </div>
    </section>
);

export default FeatureGrid;
