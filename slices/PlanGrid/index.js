import React from "react";
import styles from "./featureGrid.module.css";

/**
 * @typedef {import("@prismicio/client").Content.FeatureGridSlice} FeatureGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureGridSlice>} FeatureGridProps
 * @param { FeatureGridProps }
 */
const FeatureGrid = ({ slice }) => (
    <section className={styles.grid}>
        {/* Single Card */}
        <div className={styles.card}>
            <h3>{slice.primary.plan_title}</h3>
            <h4>{slice.primary.plan_price}/mth</h4>
            {/* Features List */}
            <ul>
                {slice?.items?.map((item, i) => (
                    <li>{item.plan_items}</li>
                ))}
            </ul>
            <button>Buy Now</button>
        </div>
        {/* Other Cards */}
        <div className={styles.card}>
            <h3>{slice.primary.plan_two_title}</h3>
            <h4>{slice.primary.plan_two_price}/mth</h4>
            <ul>
                {slice?.items?.map((item, i) => (
                    <li>{item.plan_two_items}</li>
                ))}
            </ul>
            <button>Buy Now</button>
        </div>
        <div className={styles.card}>
            <h3>{slice.primary.plan_three_title}</h3>
            <h4>{slice.primary.plan_three_price}/mth</h4>
            <ul>
                {slice?.items?.map((item, i) => (
                    <li>{item.plan_three_items}</li>
                ))}
            </ul>
            <button>Buy Now</button>
        </div>
    </section>
);

export default FeatureGrid;
