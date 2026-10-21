export type ProductMedia = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const photocraftMedia = [
  {
    id: "photocraft-layers",
    src: "/images/artcraft/photocraft-layers.webp",
    width: 1600,
    height: 1000,
    alt: "PhotoCraft editing The Great Wave with type, Vibrance, and Curves adjustment layers visible",
    caption:
      "A caption card with a drop shadow, live type, and Vibrance and Curves adjustment layers, with the Curves editor open.",
    sourceLabel: "ArtCraft official PhotoCraft page",
    sourceUrl: "https://getartcraft.com/apps/photocraft",
  },
  {
    id: "photocraft-selection",
    src: "/images/artcraft/photocraft-selection.webp",
    width: 1600,
    height: 1000,
    alt: "PhotoCraft showing an elliptical face selection and a masked Hue/Saturation layer on Girl with a Pearl Earring",
    caption:
      "An elliptical selection becomes the mask of a Hue/Saturation layer, so only the face keeps its color.",
    sourceLabel: "ArtCraft official PhotoCraft page",
    sourceUrl: "https://getartcraft.com/apps/photocraft",
  },
  {
    id: "photocraft-type",
    src: "/images/artcraft/photocraft-type.webp",
    width: 1600,
    height: 1000,
    alt: "PhotoCraft editing a Sierra Nevada headline with Character and Paragraph controls open",
    caption:
      "A headline edited in place, with a byline and a paragraph of body text.",
    sourceLabel: "ArtCraft official PhotoCraft page",
    sourceUrl: "https://getartcraft.com/apps/photocraft",
  },
] as const satisfies readonly ProductMedia[];

export const pdfcraftMedia = [
  {
    id: "pdfcraft-workbench",
    src: "/images/artcraft/pdfcraft-hero.webp",
    width: 1600,
    height: 1000,
    alt: "PdfCraft showing a showcase PDF cover with the All tools panel and threaded comments",
    caption:
      "The PDF workbench with a showcase document open, the All tools panel and threaded comments visible.",
    sourceLabel: "ArtCraft official PdfCraft page",
    sourceUrl: "https://getartcraft.com/apps/pdfcraft",
  },
] as const satisfies readonly ProductMedia[];
