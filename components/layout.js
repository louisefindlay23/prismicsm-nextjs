import React, { useState } from "react";
import styles from "../styles/header.module.css";
import Head from "next/head";
import Link from "next/link";
import { Currency } from "react-intl-number-format";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";
import { PrismicImage } from "@prismicio/react";
import Image from "next/image";

{
    /* TODO: Create Navigation Slice - use same repeatable zone fields as Header. Create Navigation component using code snippet from Prismic docs */
}

export default function Layout({ children, page }) {
    const [value, setValue] = useState("USD");
    return (
        <>
            <Head>
                <title>
                    <PrismicText field={page.data.site_title} />
                </title>
            </Head>

            <section>
                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.wrapper}>
                        {/* Logo Link */}
                        <div className={styles.logo}>
                            <Link href="/">
                                <Image
                                    src={page.data.site_logo.url}
                                    alt={page.data.site_logo.alt}
                                    width={125}
                                    height={100}
                                />
                            </Link>
                        </div>
                        {/* Title Link */}
                        <Link className={styles.title} href="#">
                            <PrismicRichText field={page.data.site_title} />
                        </Link>
                        {/* Nav */}
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

            <main>{children}</main>
        </>
    );
}
