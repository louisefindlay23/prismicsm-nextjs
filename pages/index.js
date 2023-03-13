import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { components } from "slices";
import { Layout } from "components";
import { createClient } from "prismicio";

export default function Home({ page, layout }) {
  const seoTitle = prismicH.asText(layout.data.site_title);

  return (
    <Layout layout={layout} seoTitle={seoTitle}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  // Query Home page and Layout from Prismic
  const [page, layout] = await Promise.all([
    client.getSingle("home"),
    client.getSingle("layout"),
  ]);

  return {
    props: {
      page,
      layout,
    },
  };
}
