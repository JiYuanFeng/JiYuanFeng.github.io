type PublicationThumbnailProps = {
  title: string;
  badges: readonly string[];
  links: readonly { label: string; url: string }[];
  thumbnailUrl?: string;
};

function getArxivThumbnailUrl(paperUrl?: string) {
  const arxivId = paperUrl?.match(/arxiv\.org\/abs\/([0-9.]+)/)?.[1];

  return arxivId
    ? `/publications/arxiv-${arxivId.replaceAll(".", "-")}.jpg`
    : undefined;
}

export function PublicationThumbnail({
  title,
  badges,
  links,
  thumbnailUrl,
}: PublicationThumbnailProps) {
  const paperUrl = links.find((link) => link.label === "paper")?.url;
  const imageUrl = thumbnailUrl ?? getArxivThumbnailUrl(paperUrl);

  return (
    <div className="mr-4 hidden w-24 flex-shrink-0 items-center justify-center md:flex">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`First page of ${title}`}
          className="h-24 w-[74px] border border-border bg-white object-contain shadow-sm"
          loading="lazy"
        />
      ) : (
        <div
          className="flex h-24 w-[74px] flex-col items-center justify-center border border-border bg-white px-1.5 text-center shadow-sm"
          role="img"
          aria-label={`Paper placeholder for ${title}`}
        >
          <span className="line-clamp-3 text-[8px] font-semibold leading-tight text-zinc-700">
            {badges[0] ?? "Paper"}
          </span>
        </div>
      )}
    </div>
  );
}
