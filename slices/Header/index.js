import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */
const Header = ({ slice }) => (
    <section>
        {/* Header */}
        <header className={styles.header}>
            <div className={styles.wrapper}>
                {/* Logo Link */}
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src={slice.primary.logo.url}
                            alt={slice.primary.logo.alt}
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
                {/* Title Link */}
                <Link className={styles.title} href="#">
                    <PrismicRichText field={slice.primary.title} />
                </Link>
                {/* Nav */}
                <nav className={styles.nav}>
                    <ul>
                        {slice?.items?.map((item, i) => (
                            <li>
                                <PrismicLink field={item.navigation_links}>
                                    {/* TODO: How to Nest Prismic Rich Text for
                                    link text*/}
                                </PrismicLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    </section>
);

export default Header;
