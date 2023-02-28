import React from "react";
import * as prismicH from "@prismicio/helpers";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { CurrencyProvider } from "../context/currencyData";

export default function Layout({ children, page, navigation }) {
    /* Render Site Title as plain text */
    const siteTitle = prismicH.asText(page.data.site_title);
    return (
        <>
            <CurrencyProvider>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <Header page={page} navigation={navigation}></Header>
                <main>{children}</main>
                <Footer page={page}></Footer>
            </CurrencyProvider>
        </>
    );
}
