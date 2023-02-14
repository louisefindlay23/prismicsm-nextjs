import React from "react";
import styles from "./navigation.module.css";
import { PrismicText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */

const Navigation = ({ slice }) => (
    <nav className={styles.nav}>
        <ul>
            {slice?.items?.map((item, i) => {
                return (
                    <li key={JSON.stringify(item)}>
                        <PrismicLink field={item.navigation_links}>
                            <PrismicText
                                field={item.navigation_text}
                            ></PrismicText>
                        </PrismicLink>
                    </li>
                );
            })}
        </ul>
    </nav>
);

export default Navigation;
