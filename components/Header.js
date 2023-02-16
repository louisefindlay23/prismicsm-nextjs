import React, { useState } from "react";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Currency } from "react-intl-number-format";
import Navigation from "./Navigation";
import styles from "../styles/header.module.css";

export default function Header({ page, navigation }) {
    const [value, setValue] = useState("USD");
    return (
        <section>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    {/* Logo Link */}
                    <div className={styles.logo}>
                        <Link href="/">
                            <PrismicNextImage
                                field={page.data.site_logo}
                                alt={""}
                                width={100}
                                height={100}
                            />
                        </Link>
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
                    {/* TODO: Use global state to affect Plan Grid currency and remove this */}
                    <Currency currency={value}>20</Currency>
                </div>
            </header>
        </section>
    );
}
