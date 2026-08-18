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
  const sorted = [...RESUME_DATA.publications].sort(
    (a, b) => Number(b.year) - Number(a.year),
  );

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <ModeToggle />
      <section className="mx-auto w-full max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="content-link inline-flex items-center gap-1 text-[11px]"
          >
            <ArrowLeftIcon className="size-3" />
            Back to homepage
          </Link>
          <a
            href="https://scholar.google.com/citations?user=7HGv1bkAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="content-link text-[11px]"
          >
            Google Scholar →
          </a>
        </div>

        <Section>
          <h1 className="text-base font-bold">Publications</h1>
        </Section>

        <div className="-mx-3 grid grid-cols-1 gap-1">
          {sorted.map((publication, index) => {
            return (
              <div key={publication.title}>
                <Card
                  className={`flex flex-row items-center rounded-none px-3 py-2 shadow-none ${
                    index % 2 === 1
                      ? "bg-blue-50/70 dark:bg-blue-950/25"
                      : "bg-transparent dark:bg-transparent"
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
                            className="text-xs font-semibold leading-tight hover:underline"
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
                        className="mb-1.5 text-pretty text-[9px] leading-relaxed text-gray-500 dark:text-gray-400"
                        dangerouslySetInnerHTML={{
                          __html: formatPublicationAuthors(publication.authors).replace(
                            /yuanfeng ji(\*|#)*/gi,
                            '<span class="font-bold text-black dark:text-white">$&</span>',
                          ),
                        }}
                      />
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        {publication.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center text-[9px] font-normal text-blue-600 dark:text-blue-400"
                          >
                            {badge}
                          </span>
                        ))}
                        {publication.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            className="inline-flex items-center text-[9px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label.charAt(0).toUpperCase() +
                              link.label.slice(1)}
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        <footer className="mt-8 text-center text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Yuanfeng Ji. Built with Next.js & Tailwind.
        </footer>
      </section>
    </main>
  );
}
