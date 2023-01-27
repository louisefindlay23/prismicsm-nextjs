import React from "react";
import styles from "./footer.module.css";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */
const Footer = ({ slice }) => (
    <section>
        <footer className={styles.footer}>
            <p>{slice.primary.copyright}</p>
        </footer>
    </section>
);

export default Footer;
