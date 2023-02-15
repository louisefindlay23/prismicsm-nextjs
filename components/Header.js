import React, { useState } from "react";
import styles from "../styles/header.module.css";
import Link from "next/link";
import {
    PrismicLink,
    PrismicNextImage,
    PrismicRichText,
} from "@prismicio/react";
import { Currency } from "react-intl-number-format";
import Navigation from "./Navigation";

export default function Header({ page, navigation }) {
    const [value, setValue] = useState("USD");
    return (
        <section>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    {/* Logo Link */}
                    <div className={styles.logo}>
                        <Link href="/"></Link>
                    </div>
                    {/* Title Link */}
                    <Link className={styles.title} href="#">
                        <PrismicRichText field={page.data.site_title} />
                    </Link>
                    {/* Nav */}
                    <Navigation navigation={navigation}></Navigation>
                    {/* Currency */}
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
