import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Currency } from "react-intl-number-format";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/react";
import Header from "./Header";

{
    /* TODO: Move footer same as Header */
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
            <Header page={page}></Header>

            <main>{children}</main>
        </>
    );
}
