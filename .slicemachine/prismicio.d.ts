// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * Slice Zone field in *Home*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = HeaderSlice | TestSlice | FeatureGridSlice | FooterSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = HomeDocument;
/**
 * Primary content in Footer → Primary
 *
 */
interface FooterSliceDefaultPrimary {
    /**
     * Copyright Statement field in *Footer → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.primary.copyright_statement
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    copyright_statement: prismicT.KeyTextField;
}
/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FooterSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Footer*
 *
 */
type FooterSliceVariation = FooterSliceDefault;
/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSlice = prismicT.SharedSlice<"footer", FooterSliceVariation>;
/**
 * Primary content in Header → Primary
 *
 */
interface HeaderSliceDefaultPrimary {
    /**
     * Title field in *Header → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: header.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Logo field in *Header → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
}
/**
 * Item in Header → Items
 *
 */
export interface HeaderSliceDefaultItem {
    /**
     * Navigation Links field in *Header → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: header.items[].navigation_links
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    navigation_links: prismicT.LinkField;
    /**
     * Navigation Text field in *Header → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header.items[].navigation_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    navigation_text: prismicT.KeyTextField;
}
/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeaderSliceDefaultPrimary>, Simplify<HeaderSliceDefaultItem>>;
/**
 * Slice variation for *Header*
 *
 */
type HeaderSliceVariation = HeaderSliceDefault;
/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSlice = prismicT.SharedSlice<"header", HeaderSliceVariation>;
/**
 * Primary content in Hero → Primary
 *
 */
interface TestSliceDefaultPrimary {
    /**
     * Hero Image field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: test.primary.hero_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    hero_image: prismicT.ImageField<never>;
    /**
     * Hero Heading field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: test.primary.hero_heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    hero_heading: prismicT.KeyTextField;
    /**
     * Hero Text field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: test.primary.hero_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    hero_text: prismicT.RichTextField;
    /**
     * Hero Button Text field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: test.primary.hero_button_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    hero_button_text: prismicT.KeyTextField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Test`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TestSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Hero*
 *
 */
type TestSliceVariation = TestSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `test`
 * - **Description**: `Test`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestSlice = prismicT.SharedSlice<"test", TestSliceVariation>;
/**
 * Primary content in PlanGrid → Primary
 *
 */
interface FeatureGridSliceDefaultPrimary {
    /**
     * Plan Title field in *PlanGrid → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: feature_grid.primary.plan_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan_title: prismicT.KeyTextField;
    /**
     * Plan Price field in *PlanGrid → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: feature_grid.primary.plan_price
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan_price: prismicT.KeyTextField;
    /**
     * Plan Two Title field in *PlanGrid → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: feature_grid.primary.plan_two_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan_two_title: prismicT.KeyTextField;
    /**
     * Plan Two Price field in *PlanGrid → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: feature_grid.primary.plan_two_price
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan_two_price: prismicT.KeyTextField;
    /**
     * Plan Three Title field in *PlanGrid → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: feature_grid.primary.plan_three_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan_three_title: prismicT.KeyTextField;
    /**
     * Plan Three Price field in *PlanGrid → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: feature_grid.primary.plan_three_price
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan_three_price: prismicT.KeyTextField;
}
/**
 * Item in PlanGrid → Items
 *
 */
export interface FeatureGridSliceDefaultItem {
    /**
     * Plan Items field in *PlanGrid → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: feature_grid.items[].plan_items
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan_items: prismicT.KeyTextField;
    /**
     * Plan Two Items field in *PlanGrid → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: feature_grid.items[].plan_two_items
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan_two_items: prismicT.KeyTextField;
    /**
     * Plan Three Items field in *PlanGrid → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: feature_grid.items[].plan_three_items
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan_three_items: prismicT.KeyTextField;
}
/**
 * Default variation for PlanGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: `FeatureGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeatureGridSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FeatureGridSliceDefaultPrimary>, Simplify<FeatureGridSliceDefaultItem>>;
/**
 * Slice variation for *PlanGrid*
 *
 */
type FeatureGridSliceVariation = FeatureGridSliceDefault;
/**
 * PlanGrid Shared Slice
 *
 * - **API ID**: `feature_grid`
 * - **Description**: `FeatureGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeatureGridSlice = prismicT.SharedSlice<"feature_grid", FeatureGridSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, AllDocumentTypes, FooterSliceDefaultPrimary, FooterSliceDefault, FooterSliceVariation, FooterSlice, HeaderSliceDefaultPrimary, HeaderSliceDefaultItem, HeaderSliceDefault, HeaderSliceVariation, HeaderSlice, TestSliceDefaultPrimary, TestSliceDefault, TestSliceVariation, TestSlice, FeatureGridSliceDefaultPrimary, FeatureGridSliceDefaultItem, FeatureGridSliceDefault, FeatureGridSliceVariation, FeatureGridSlice };
    }
}
