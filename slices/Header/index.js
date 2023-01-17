import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */
const Header = ({ slice }) => (
    <section>
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Image
                        src={slice.primary.logo.url}
                        alt={slice.primary.logo.alt}
                        width={100}
                        height={100}
                    />
                    <a className={styles.title} href="#">
                        <PrismicRichText field={slice.primary.title} />
                    </a>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            {slice?.items?.map((item, i) => (
                                <PrismicLink field={item.navlinks}>
                                    My Link
                                </PrismicLink>
                            ))}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </section>
);

export default Header;
