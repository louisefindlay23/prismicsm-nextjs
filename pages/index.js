import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import Layout from "./../components/layout";

export default function Home({ page, navigation, settings }) {
    return (
        <Layout page={page}>
            <SliceZone slices={page.data.slices} components={components} />;
        </Layout>
    );
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    // Render Home page from Prismic
    const [navigation, page] = await Promise.all([
        client.getSingle("home"),
        client.getSingle("navigation"),
    ]);

    return {
        props: {
            navigation,
            page,
        },
    };
}
