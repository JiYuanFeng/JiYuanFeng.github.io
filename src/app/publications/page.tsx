import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { formatPublicationAuthors } from "@/lib/format-publication-authors";
import { ModeToggle } from "@/components/mode-toggle";
import { PublicationThumbnail } from "@/components/publication-thumbnail";

export const metadata: Metadata = {
  title: `Publications | ${RESUME_DATA.name}`,
  description: `Full publication list of ${RESUME_DATA.name}.`,
};

export default function PublicationsPage() {
  const sorted = [...RESUME_DATA.publications]
    .filter(
      (publication) =>
        !publication.badges.some(
          (badge) => badge.trim().toLowerCase() === "arxiv",
        ),
    )
    .sort((a, b) => Number(b.year) - Number(a.year));
  const publicationGroups = [
    {
      label: "2026",
      publications: sorted.filter((publication) => publication.year === "2026"),
    },
    {
      label: "2025",
      publications: sorted.filter((publication) => publication.year === "2025"),
    },
    {
      label: "Previous",
      publications: sorted.filter(
        (publication) => Number(publication.year) <= 2024,
      ),
    },
  ].filter((group) => group.publications.length > 0);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <ModeToggle />
      <section className="mx-auto w-full max-w-[720px] space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="content-link inline-flex items-center gap-1 text-[12px]"
          >
            <ArrowLeftIcon className="size-3" />
            Back to homepage
          </Link>
          <a
            href="https://scholar.google.com/citations?user=7HGv1bkAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="content-link text-[12px]"
          >
            Google Scholar →
          </a>
        </div>

        <Section>
          <h1 className="text-lg font-bold">Publications</h1>
        </Section>

        <div className="space-y-6">
          {publicationGroups.map((group) => (
            <section key={group.label} className="space-y-2">
              <h2 className="text-[13px] font-semibold text-gray-500 dark:text-gray-400">
                {group.label}
              </h2>
              <div className="-mx-3 grid grid-cols-1 gap-1">
                {group.publications.map((publication, index) => {
                  const visibleActionLinks = publication.links.filter(
                    (link) =>
                      link.label !== "paper" ||
                      !(
                        "hidePaperLink" in publication &&
                        publication.hidePaperLink
                      ),
                  );

                  return (
                    <div key={publication.title}>
                      <Card
                        className={`flex flex-row items-center rounded-none bg-transparent px-3 py-2 shadow-none dark:bg-transparent ${
                          index === group.publications.length - 1
                            ? "border-b-0"
                            : "border-b border-black/[0.07] dark:border-white/[0.08]"
                        }`}
                      >
                        <PublicationThumbnail
                          title={publication.title}
                          badges={publication.badges}
                          links={publication.links}
                          thumbnailUrl={
                            "thumbnailUrl" in publication
                              ? publication.thumbnailUrl
                              : undefined
                          }
                        />
                        <div className="flex min-w-0 flex-1 flex-col">
                          <CardHeader className="p-0">
                            <div className="flex flex-col gap-1">
                              <div>
                                <a
                                  href={
                                    publication.links.find(
                                      (link) => link.label === "paper",
                                    )?.url
                                  }
                                  className="block text-[13px] font-semibold leading-[1.5] hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {publication.title}
                                </a>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="mt-1 p-0">
                            <p
                              className="mb-1 text-pretty text-[11px] leading-[1.4] text-gray-500 dark:text-gray-400"
                              dangerouslySetInnerHTML={{
                                __html: formatPublicationAuthors(
                                  publication.authors,
                                ).replace(
                                  /yuanfeng ji(\*|#)*/gi,
                                  '<span class="font-bold text-black dark:text-white">$&</span>',
                                ),
                              }}
                            />
                            <div className="flex flex-col items-start gap-1">
                              {visibleActionLinks.length > 0 && (
                                <div className="flex flex-wrap items-center gap-x-2">
                                  {visibleActionLinks.map((link) => (
                                    <a
                                      key={link.label}
                                      href={link.url}
                                      className="inline-flex items-center text-[11px] font-medium leading-[1.4] text-muted-foreground transition-colors hover:text-foreground hover:underline"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {link.label.charAt(0).toUpperCase() +
                                        link.label.slice(1)}
                                    </a>
                                  ))}
                                </div>
                              )}
                              <div className="flex flex-wrap items-center gap-x-2">
                                {publication.badges.map((badge) => (
                                  <span
                                    key={badge}
                                    className="accent-text inline-flex items-center text-[11px] font-normal italic leading-[1.4]"
                                  >
                                    {badge}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-8 text-center text-[12px] text-muted-foreground">
          © {new Date().getFullYear()} Yuanfeng Ji. Built with Next.js &
          Tailwind.
        </footer>
      </section>
    </main>
  );
}
