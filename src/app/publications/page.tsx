import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, Sparkles } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { formatPublicationAuthors } from "@/lib/format-publication-authors";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: `Publications | ${RESUME_DATA.name}`,
  description: `Full publication list of ${RESUME_DATA.name}.`,
};

export default function PublicationsPage() {
  const sorted = [...RESUME_DATA.publications].sort(
    (a, b) => Number(b.year) - Number(a.year),
  );

  let lastLabel: string | undefined;

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
          <p className="text-[11px] text-muted-foreground">
            Complete list including collaborative works. Bold name marks{" "}
            <span className="font-bold text-foreground">Yuanfeng Ji</span>.
          </p>
        </Section>

        <div className="-mx-3 grid grid-cols-1 gap-1">
          {sorted.map((publication) => {
            const label =
              Number(publication.year) <= 2024 ? "Previous" : publication.year;
            const showLabel = label !== lastLabel;
            lastLabel = label;
            return (
              <div key={publication.title}>
                {showLabel && (
                  <h3 className="mb-2 mt-4 first:mt-0 px-3 text-xs font-semibold text-muted-foreground">
                    {label}
                  </h3>
                )}
                <Card className="flex flex-row rounded-none bg-transparent px-3 py-2 shadow-none dark:bg-transparent">
                  <div className="mr-4 hidden flex-shrink-0 items-center justify-center md:flex">
                    <Avatar className="size-24 rounded-lg border bg-muted">
                      <AvatarFallback className="text-base font-bold uppercase text-muted-foreground">
                        {publication.title[0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
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
                    <CardContent className="mt-2 p-0 text-[11px]">
                      <p
                        className="mb-2 text-pretty leading-relaxed text-gray-600 dark:text-gray-400"
                        dangerouslySetInnerHTML={{
                          __html: formatPublicationAuthors(publication.authors).replace(
                            /yuanfeng ji(\*|#)*/gi,
                            '<span class="font-bold text-black dark:text-white">$&</span>',
                          ),
                        }}
                      />
                      <div className="flex flex-wrap items-center gap-2">
                        {publication.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2 py-1 text-[9px] font-medium text-secondary-foreground dark:bg-zinc-700 dark:text-zinc-100"
                          >
                            {badge}
                          </span>
                        ))}
                        {publication.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            className={`inline-flex items-center gap-1 rounded border px-2 py-1 text-[9px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                              link.label === "NotebookLLM"
                                ? "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
                                : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-gray-100"
                            }`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label === "NotebookLLM" && (
                              <Sparkles className="size-3" />
                            )}
                            {link.label === "NotebookLLM"
                              ? "AI Overview"
                              : link.label.charAt(0).toUpperCase() +
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
