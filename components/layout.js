import React from "react";
import { PrismicText } from "@prismicio/react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

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
