import Image from "next/image";

import type { ProductMedia } from "@/content/media";

export function ProductScreenshot({
  media,
  priority = false,
  className = "",
}: {
  media: ProductMedia;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      aria-label={`PhotoCraft product screenshot: ${media.caption}`}
      className={`product-shot ${className}`.trim()}
    >
      <div className="product-shot__frame">
        <Image
          alt={media.alt}
          height={media.height}
          priority={priority}
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 92vw, 1100px"
          src={media.src}
          width={media.width}
        />
      </div>
      <figcaption className="product-shot__caption">
        <span>{media.caption}</span>
        <a href={media.sourceUrl} rel="noreferrer" target="_blank">
          Product screenshot © ArtCraft · Source: ArtCraft
        </a>
      </figcaption>
    </figure>
  );
}
