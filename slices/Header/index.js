import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { PrismicText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

import { Currency } from "react-intl-number-format";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */

export default function Header({ slice }) {
    const [value, setValue] = useState("USD");
    return (
        <section>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    {/* Logo Link */}
                    <div className={styles.logo}>
                        <Link href="/">
                            {/* <Image
                            src={data.site_logo.url}
                            alt={data.site_logo.alt}
                            width={100}
                            height={100}
/> */}
                        </Link>
                    </div>
                    {/* Title Link */}
                    <Link className={styles.title} href="#">
                        {/* <PrismicRichText field={data.site_title} /> */}
                    </Link>
                    {/* Nav */}
                    <nav className={styles.nav}>
                        <ul>
                            {slice?.items?.map((item, i) => {
                                return (
                                    <li key={JSON.stringify(item)}>
                                        <PrismicLink
                                            field={item.navigation_links}
                                        >
                                            <PrismicText
                                                field={item.navigation_text}
                                            ></PrismicText>
                                        </PrismicLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <select
                        className={styles.currencyDropdown}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            console.log(value);
                        }}
                    >
                        <option value="USD">US Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">British Pound</option>
                    </select>
                    <p>
                        <Currency currency={value}>20</Currency>
                    </p>
                </div>
            </header>
        </section>
    );
}
