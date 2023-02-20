import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import Layout from "../components/Layout";

export default function Home({ page, navigation, settings }) {
    return (
        <Layout page={page} navigation={navigation}>
            <SliceZone slices={page.data.slices} components={components} />
        </Layout>
    );
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    // Render Home page and Navigation from Prismic
    const [page, navigation] = await Promise.all([
        client.getSingle("home"),
        client.getSingle("navigation"),
    ]);

    return {
        props: {
            page,
            navigation,
        },
    };
}
