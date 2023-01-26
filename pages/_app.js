import "../public/globals.css";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
    return (
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
            <PrismicPreview repositoryName={repositoryName}>
                <>
                    <style jsx global>{`
                        html {
                            font-family: ${inter.style.fontFamily};
                        }
                    `}</style>
                </>
                <Component {...pageProps} />
            </PrismicPreview>
        </PrismicProvider>
    );
}
