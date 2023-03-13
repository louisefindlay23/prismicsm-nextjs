import React from "react";
import Head from "next/head";
import { Footer, Header } from "./components";
import { CurrencyProvider } from "context/currencyData";

export default function Layout({ children, layout, seoTitle }) {
  return (
    <CurrencyProvider>
      <Head>
        <title>{seoTitle}</title>
      </Head>
      <Header layout={layout} />
      <main>{children}</main>
      <Footer siteAuthor={layout.data.site_author} />
    </CurrencyProvider>
  );
}
