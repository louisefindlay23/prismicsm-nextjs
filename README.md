# Simple Prismic Slice Machine Next.js Site

## Purpose

Develop a simple homepage with mock content to learn how to use Prismic's Slice Machine with Next.js.

## Visit the Website

[![prismicsm-nextjs.vercel.app](https://user-images.githubusercontent.com/26024131/219398683-8cfac003-9cf3-4749-9f75-d24e63a28a11.png)](https://prismicsm-nextjs.vercel.app)

## Technologies

The page has four sections: Header, Hero, Plan Grid, and Footer. A layout is used for the head of the website and wraps the Header and Footer components around the page content as well as passing the currency context provider.

The Header component contains the Navigation slice so links can be added and edited using Prismic.

The Hero slice uses CSS Grid so the background image can be updated using Prismic.

The currency select uses a context provider to pass the value from the Header component to the Plan Grid slice to update the currency of the plan prices.

The site is deployed to Vercel using SSG.

<div>
  <img src="https://api.iconify.design/devicon:nextjs.svg" width="64px" />
  <img src="https://api.iconify.design/devicon:css3.svg" width="64px" />
  <img src="https://api.iconify.design/logos:prismic-icon.svg" width="64px" />
  <img src="https://api.iconify.design/skill-icons:vercel-dark.svg" width="64px" />
</div>

## Resources Used

### Tutorials

- **[Getting Started - Next.js Docs](https://nextjs.org/docs/getting-started)** - to create a basic Next.js app using `create-next-app`
- **[Set Up Prismic (Next.js) - Prismic Docs](https://prismic.io/docs/setup-nextjs)** - to use as a getting started guide for Slice Machine with `create-next-app`
- **[Navigation Menus (Next.js) - Prismic Docs](https://prismic.io/docs/navigation-menus-nextjs)** - to use to help model navigation
- **[State Management In Next.js - Smashing Magazine](https://www.smashingmagazine.com/2021/08/state-management-nextjs)** - to understand state management in React to pass currency between select in `Header` and the prices in `FeatureGrid`.

### CSS

- **[Backdrop Filter - CSS Tricks](https://css-tricks.com/the-backdrop-filter-css-property)** - to use the backdrop-filter property for the Hero slice
- **[Positioning Overlay Content with CSS Grid - CSS Tricks](https://css-tricks.com/positioning-overlay-content-with-css-grid)** - to use CSS Grid for the background image so the image can be set in Prismic.
- **[Beautiful CSS `box-shadow` Examples - CSS Scan](https://getcssscan.com/css-box-shadow-examples)** - to obtain CSS for a `box-shadow` for the pricing cards

### Design

- **[Pricing Table Module - PowerPack for Beaver Builder](https://wpbeaveraddons.com/demo/pricing-table-module)** - used as design inspiration for the pricing cards
