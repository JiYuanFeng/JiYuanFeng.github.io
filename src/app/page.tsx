import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, BookIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { formatPublicationAuthors } from "@/lib/format-publication-authors";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link"; // Import Link

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <ModeToggle />
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-4">
        <AnimatedSection delay={0.05}>
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-base font-bold">{RESUME_DATA.name}</h1>
              <p className="max-w-md text-pretty text-[13px] text-foreground print:text-[12px]">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md text-[11px] font-medium text-muted-foreground print:hidden">
                {RESUME_DATA.researchFocus.join(" / ")}
              </p>
              <p className="max-w-md items-center text-pretty text-[11px] text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 text-[13px] text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <Link href="/blog">
                    <BookIcon className="size-4" />
                  </Link>
                </Button>
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <p className="pt-1 text-[11px] text-muted-foreground print:hidden">
                Open to collaborations —{" "}
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="content-link"
                >
                  email me
                </a>
                .
              </p>
              <div className="hidden flex-col gap-x-1 text-[13px] text-muted-foreground print:flex print:text-[12px]">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">{RESUME_DATA.contact.email}</span>
                  </a>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="size-28">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Section>
            <h2 id="about" className="text-[13px] font-bold scroll-mt-16">About</h2>
            <p
              className="rich-links text-pretty text-xs text-foreground print:text-[12px]"
              dangerouslySetInnerHTML={{ __html: RESUME_DATA.summary }}
            />
            <Link
              href="/research"
              className="content-link mt-2 inline-block text-[11px] print:hidden"
            >
              See research scope →
            </Link>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 id="news" className="text-[13px] font-bold scroll-mt-16">News</h2>
            <div className="relative w-full">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {(() => {
                  const renderItem = (newsItem: typeof RESUME_DATA.news[number], index: number) => (
                    <div key={index} className="relative mb-4 ml-6">
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        {new Date(newsItem.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })}
                      </span>
                      <h3 className="mt-1 text-xs font-semibold">
                        {newsItem.link ? (
                          <a
                            href={newsItem.link}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {newsItem.title}
                          </a>
                        ) : (
                          newsItem.title
                        )}
                      </h3>
                      <p className="mt-1 text-[11px] text-gray-700 dark:text-gray-300">
                        {newsItem.description.split("\n").map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  );
                  const items = RESUME_DATA.news;
                  return (
                    <>
                      {items.slice(0, 3).map((item, i) => renderItem(item, i))}
                      {items.length > 3 && (
                        <details className="group">
                          <summary className="mb-4 ml-6 cursor-pointer list-none text-[11px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">+ Show {items.length - 3} more</span>
                            <span className="hidden group-open:inline">− Show fewer</span>
                          </summary>
                          {items.slice(3).map((item, i) => renderItem(item, i + 3))}
                        </details>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Section className="print-force-new-page scroll-mb-16">
            <div className="flex items-center justify-between">
              <h2 id="publications" className="text-[13px] font-bold scroll-mt-16">Selected Publications</h2>
              <Link
                href="/publications"
                className="content-link text-[11px]"
              >
                Full publication list →
              </Link>
            </div>
            <div className="-mx-3 grid grid-cols-1 gap-1 print:grid-cols-1 print:gap-1 md:grid-cols-1 lg:grid-cols-1">
              {(() => {
                const isLeadAuthor = (authors: string) =>
                  /^Yuanfeng Ji[\s,]/.test(authors) || /Yuanfeng Ji[\*#]/.test(authors);

                const sorted = [...RESUME_DATA.publications]
                  .filter((p) => isLeadAuthor(p.authors))
                  .sort((a, b) => Number(b.year) - Number(a.year));

                let lastLabel: string | undefined;
                const renderItem = (publication: typeof sorted[number]) => {
                  const label = Number(publication.year) <= 2024 ? "Previous" : publication.year;
                  const showLabel = label !== lastLabel;
                  lastLabel = label;
                  return (
                    <div key={publication.title}>
                      {showLabel && (
                        <h3 className="mb-2 mt-4 first:mt-0 px-3 text-xs font-semibold text-muted-foreground">
                          {label}
                        </h3>
                      )}

                <Card
                  key={publication.title}
                  className="flex flex-row rounded-none bg-transparent px-3 py-2 shadow-none dark:bg-transparent"
                >
                  <div className="mr-4 hidden flex-shrink-0 items-center justify-center md:flex">
                    <Avatar className="size-24 rounded-lg border bg-muted">
                      <AvatarFallback className="text-base font-bold text-muted-foreground uppercase">
                        {publication.title[0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
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
                    <CardContent className="mt-2 p-0 text-[11px] print:text-[9px]">
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
                            {link.label === "NotebookLLM" && <Sparkles className="size-3" />}
                            {link.label === "NotebookLLM" ? "AI Overview" : link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
                    </div>
                  );
                };

                return (
                  <>
                    {sorted.slice(0, 3).map(renderItem)}
                    {sorted.length > 3 && (
                      <details className="group">
                        <summary className="mt-2 px-3 cursor-pointer list-none text-[11px] text-muted-foreground hover:text-foreground">
                          <span className="group-open:hidden">+ Show {sorted.length - 3} more</span>
                          <span className="hidden group-open:inline">− Show fewer</span>
                        </summary>
                        {sorted.slice(3).map(renderItem)}
                      </details>
                    )}
                  </>
                );
              })()}
            </div>
          </Section>
        </AnimatedSection>
        <AnimatedSection delay={0.25}>
          <Section>
            <h2 id="education" className="text-[13px] font-bold scroll-mt-16">Education</h2>
            <div className="relative w-full">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {(() => {
                  const renderItem = (education: typeof RESUME_DATA.education[number]) => (
                    <div
                      key={`${education.school}-${education.start}`}
                      className="relative mb-4 ml-6"
                    >
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        {education.start} - {education.end}
                      </span>
                      <h3 className="mt-1 text-xs font-semibold">
                        {education.school}
                      </h3>
                      <p className="mt-1 text-[11px] text-gray-700 dark:text-gray-300">
                        {education.degree}
                      </p>
                    </div>
                  );
                  const items = RESUME_DATA.education.slice().reverse();
                  return (
                    <>
                      {items.slice(0, 3).map(renderItem)}
                      {items.length > 3 && (
                        <details className="group">
                          <summary className="mb-4 ml-6 cursor-pointer list-none text-[11px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">+ Show {items.length - 3} more</span>
                            <span className="hidden group-open:inline">− Show fewer</span>
                          </summary>
                          {items.slice(3).map(renderItem)}
                        </details>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Section>
            <h2 id="experience" className="text-[13px] font-bold scroll-mt-16">Work Experience</h2>
            <div className="relative w-full">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {(() => {
                  const renderItem = (work: typeof RESUME_DATA.work[number], index: number) => (
                    <div key={index} className="relative mb-4 ml-6">
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        {work.start} - {work.end ?? "Present"}
                      </span>
                      <h3 className="mt-1 text-xs font-semibold">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                      </h3>
                      <p className="mt-1 text-[11px] text-gray-700 dark:text-gray-300">{work.title}</p>
                      <p className="mt-1 text-[11px] text-gray-700 dark:text-gray-300">
                        {work.description}
                      </p>
                      <div className="mt-1 flex gap-x-1">
                        {work.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-[11px] dark:bg-zinc-800 dark:text-zinc-100"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                  const items = RESUME_DATA.work;
                  return (
                    <>
                      {items.slice(0, 3).map((item, i) => renderItem(item, i))}
                      {items.length > 3 && (
                        <details className="group">
                          <summary className="mb-4 ml-6 cursor-pointer list-none text-[11px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">+ Show {items.length - 3} more</span>
                            <span className="hidden group-open:inline">− Show fewer</span>
                          </summary>
                          {items.slice(3).map((item, i) => renderItem(item, i + 3))}
                        </details>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 id="awards" className="text-[13px] font-bold scroll-mt-16">Awards & Achievements</h2>
            <div className="relative w-full">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {(() => {
                  const renderItem = (challenge: typeof RESUME_DATA.challenges[number], index: number) => (
                    <div key={index} className="relative mb-4 ml-6">
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        {challenge.year}
                      </span>
                      <h3 className="mt-1 text-xs font-semibold">
                        <a
                          href={challenge.link}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {challenge.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-[11px] text-gray-700 dark:text-gray-300">
                        {challenge.rank}
                      </p>
                    </div>
                  );
                  const items = RESUME_DATA.challenges;
                  return (
                    <>
                      {items.slice(0, 3).map((item, i) => renderItem(item, i))}
                      {items.length > 3 && (
                        <details className="group">
                          <summary className="mb-4 ml-6 cursor-pointer list-none text-[11px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">+ Show {items.length - 3} more</span>
                            <span className="hidden group-open:inline">− Show fewer</span>
                          </summary>
                          {items.slice(3).map((item, i) => renderItem(item, i + 3))}
                        </details>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 id="activities" className="text-[13px] font-bold scroll-mt-16">Activities</h2>
            <div className="relative">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {RESUME_DATA.activities.map((activity, index) => (
                  <div key={index} className="relative mb-4 ml-6">
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">
                      {activity.year}
                    </span>
                    <h3 className="mt-1 text-xs font-semibold">
                      <a
                        href={activity.link}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activity.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-[11px] text-gray-700 dark:text-gray-300">
                      {activity.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </AnimatedSection>

              </section>

      <CommandMenu
        sections={[
          { hash: "#about", title: "About" },
          { hash: "#news", title: "News" },
          { hash: "#education", title: "Education" },
          { hash: "#publications", title: "Selected Publications" },
          { hash: "#experience", title: "Work Experience" },
          { hash: "#awards", title: "Awards & Achievements" },
          { hash: "#activities", title: "Activities" },
        ]}
        links={[
          { url: "/research", title: "Research" },
          { url: "/publications", title: "Full Publication List" },
          { url: "/blog", title: "Blog" },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />

      <footer className="mt-8 text-center text-[11px] text-muted-foreground print:hidden">
        <p className="flex items-center justify-center gap-1">
          Press
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[9px] text-foreground">
            ⌘
          </kbd>
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[9px] text-foreground">
            J
          </kbd>
          to navigate
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Yuanfeng Ji. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
