import React from "react";
import Head from "next/head";
import Link from "next/link";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/react";
import Header from "./Header";
import Footer from "./Footer";

{
    /* TODO: Move footer same as Header */
}

export default function Layout({ children, page, navigation }) {
    return (
        <>
            <Head>
                <title>
                    <PrismicText field={page.data.site_title} />
                </title>
            </Head>
            <Header page={page} navigation={navigation}></Header>
            <main>{children}</main>
            <Footer page={page}></Footer>
        </>
    );
}
