import type { ArticleGuide } from "./types";

export const artCraftPricingGuide: ArticleGuide = {
  path: "/artcraft/pricing/",
  title: "Is ArtCraft Free? Craft Apps, AI Studio and Credit Plans",
  description: "The Craft Apps are free and open source. The AI studio is free to download, but hosted generation uses credits. Official plan prices, checked 20 October 2026.",
  h1: "Is ArtCraft free?",
  eyebrow: "Pricing · Checked 20 October 2026",
  lede: "Mostly, yes. The Craft Apps are free to use and open source. The ArtCraft AI studio is free to download and can be used without a subscription, but hosted image and video generation spends credits. The plan prices below are limited-time, US-dollar figures from the official pricing page, checked on 20 October 2026. They can change.",
  sections: [
    {
      id: "free-parts",
      heading: "What costs nothing",
      paragraphs: [
        "The official Craft Apps page describes the thirteen apps as open source and free, and each app’s repository publishes its code under MIT OR Apache-2.0. The official pages we checked present no subscription for the desktop apps.",
        "The AI studio can be downloaded for free, and the official homepage says it needs no subscription. The footnote on the pricing page goes further: ArtCraft can be used without paying for a subscription, and you can bring your own compute and third-party subscriptions.",
      ],
    },
    {
      id: "paid-parts",
      heading: "What can cost money",
      paragraphs: [
        "Hosted generation is the paid part. The pricing page sells monthly plans with a set number of credits, plus one-time credit packs that, according to the page, never expire. Every paid plan also includes video credits.",
      ],
      table: {
        caption: "Official ArtCraft plans, checked 20 October 2026 (USD)",
        columns: ["Plan", "Monthly (limited)", "Yearly (limited)", "Credits / month"],
        rows: [
          { label: "Basic", cells: ["Basic", "$8 (list price $10)", "$96", "1,000"] },
          { label: "Pro", cells: ["Pro", "$28 (list price $35)", "$336", "3,750"] },
          { label: "Max", cells: ["Max", "$48 (list price $60)", "$576", "6,600"] },
          { label: "Enterprise", cells: ["Enterprise", "Custom", "Custom", "Custom"] },
        ],
      },
    },
    {
      id: "credits",
      heading: "What the credits buy",
      paragraphs: [
        "The pricing page gives approximate counts for each plan. Basic’s 1,000 credits are described as about 250 Nano Banana images, about 200 GPT-Image-1.5 images, or about 63 seconds of Seedance 2.0 video. The counts depend on the model and its settings, so treat them as the vendor’s estimates rather than a guarantee.",
      ],
    },
    {
      id: "watch-for",
      heading: "Costs the pricing page does not explain",
      paragraphs: [
        "Several costs are not clear from the pricing page. Check these before you commit to a plan.",
      ],
      list: [
        "Hardware. The footnote mentions bringing your own compute, but the pages we checked give no hardware requirements for local generation.",
        "Free allowance. The pricing page we checked lists no monthly free credit allowance for hosted generation.",
        "Cancellation. The page lists “cancel anytime” among its features. We did not read the account terms, so read them before you subscribe.",
        "Regional prices and tax. The page shows US-dollar prices only, and our snapshot does not include tax.",
      ],
    },
    {
      id: "commercial",
      heading: "Commercial use",
      paragraphs: [
        "The MIT OR Apache-2.0 licence on the studio and the Craft Apps governs the software’s code. It does not decide whether an image or video you generate with a hosted model can be used commercially. Each model provider sets its own terms for outputs. We did not verify those terms, so read them for the model you use.",
      ],
    },
    {
      id: "before-paying",
      heading: "Before you pay",
      paragraphs: [
        "Decide first whether you need hosted generation. If you only need the Craft Apps, the official pages say no subscription is needed. If you do need hosted generation, check the current price and discount, compare the monthly credits with the output you expect, and start with a small test. The pricing page lists “credits refunded if a generation fails” among its features; check the refund wording the app shows before you rely on it.",
      ],
    },
  ],
  faqs: [
    { question: "Do I need to pay to use PhotoCraft?", answer: "No. PhotoCraft is one of the free, open-source Craft Apps. The paid plans apply to the AI studio’s hosted generation, not to the desktop image editor." },
    { question: "Does the AI studio have a free tier?", answer: "The official pricing page describes a no-subscription path and paid monthly plans. In the snapshot we checked, it listed no monthly free credit allowance. Check the app before you rely on any free generation." },
    { question: "Will ArtCraft stay free?", answer: "The Craft Apps are published as free and open source under permissive licences, which allow forks. The pricing page says subscriptions help keep ArtCraft free and open, but it makes no promise about future prices, and we cannot predict the hosted service’s pricing." },
    { question: "Are the prices in Australian dollars?", answer: "No. The official pricing page we checked shows prices in US dollars and shows no regional prices. Confirm the price in your currency on the page before you pay." },
  ],
  sourceIds: ["artcraft-pricing-official", "artcraft-home", "artcraft-apps", "artcraft-repository", "photocraft-repository"],
};
