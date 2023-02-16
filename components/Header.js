import React, { useEffect } from "react";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { useCurrency } from "../context/currencyData";
import Navigation from "./Navigation";
import styles from "../styles/header.module.css";

export default function Header({ page, navigation }) {
    {
        /* Use Context Provider to update currency */
    }
    const { currency } = useCurrency();
    const { setCurrency } = useCurrency();
    useEffect(() => {
        setCurrency(currency);
        console.log(currency);
    }, [currency]);
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
                    {/* Currency Select */}
                    <select
                        className={styles.currencyDropdown}
                        currency={currency}
                        onChange={(e) => {
                            setCurrency(e.target.value);
                        }}
                    >
                        <option value="USD">US Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">British Pound</option>
                    </select>
                </div>
            </header>
        </section>
    );
}
