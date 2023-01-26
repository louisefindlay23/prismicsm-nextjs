import React from "react";
import styles from "./featureGrid.module.css";

/**
 * @typedef {import("@prismicio/client").Content.FeatureGridSlice} FeatureGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureGridSlice>} FeatureGridProps
 * @param { FeatureGridProps }
 */
const FeatureGrid = ({ slice }) => (
    <section className={styles.grid}>
        <div className={styles.card}>
            <h3>{slice.primary.featuretitle}</h3>
            <h4>{slice.primary.featureprice}</h4>
            <ul>
                {slice?.items?.map((item, i) => (
                    <li>{item.featureitem}</li>
                ))}
            </ul>
            <button>Buy Now</button>
        </div>
        <div className={styles.card}>
            <h3>{slice.primary.featuretwotitle}</h3>
            <h4>{slice.primary.featuretwoprice}</h4>
            <ul>
                {slice?.items?.map((item, i) => (
                    <li>{item.featuretwoitem}</li>
                ))}
            </ul>
            <button>Buy Now</button>
        </div>
        <div className={styles.card}>
            <h3>{slice.primary.featurethreetitle}</h3>
            <h4>{slice.primary.featurethreeprice}</h4>
            <ul>
                {slice?.items?.map((item, i) => (
                    <li>{item.featurethreeitem}</li>
                ))}
            </ul>
            <button>Buy Now</button>
        </div>
    </section>
);

export default FeatureGrid;
