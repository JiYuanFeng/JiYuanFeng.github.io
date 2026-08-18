import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, BookIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { formatPublicationAuthors } from "@/lib/format-publication-authors";
import { PublicationThumbnail } from "@/components/publication-thumbnail";
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
          <div className="flex items-start justify-between">
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

            <Avatar className="h-32 w-24 rounded-md">
              <AvatarImage
                alt={RESUME_DATA.name}
                src={RESUME_DATA.avatarUrl}
                className="object-cover object-center"
              />
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
            <div className="w-full">
              <div>
                {(() => {
                  const renderItem = (newsItem: typeof RESUME_DATA.news[number], index: number) => (
                    <div
                      key={index}
                      className={`mb-1 px-2 py-2.5 ${
                        index % 2 === 1
                          ? "bg-blue-50/70 dark:bg-blue-950/25"
                          : "bg-transparent"
                      }`}
                    >
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
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[11px] text-muted-foreground hover:text-foreground">
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
                const currentPublications = sorted.filter(
                  (publication) => Number(publication.year) >= 2026,
                );
                const earlierPublications = sorted.filter(
                  (publication) => Number(publication.year) <= 2025,
                );

                const renderItem = (
                  publication: typeof sorted[number],
                  index: number,
                ) => {
                  return (
                    <div key={publication.title}>
                <Card
                  key={publication.title}
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
                    <CardContent className="mt-1 p-0 print:text-[9px]">
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
                            {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
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
                    {currentPublications.map((publication, index) =>
                      renderItem(publication, index),
                    )}
                    {earlierPublications.length > 0 && (
                      <details className="group">
                        <summary className="mt-2 px-3 cursor-pointer list-none text-[11px] text-muted-foreground hover:text-foreground">
                          <span className="group-open:hidden">+ Show {earlierPublications.length} more</span>
                          <span className="hidden group-open:inline">− Show fewer</span>
                        </summary>
                        {earlierPublications.map((publication, index) =>
                          renderItem(publication, index + currentPublications.length),
                        )}
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
            <div className="w-full">
              <div>
                {(() => {
                  const renderItem = (education: typeof RESUME_DATA.education[number], index: number) => (
                    <div
                      key={`${education.school}-${education.start}`}
                      className={`mb-1 px-2 py-2.5 ${
                        index % 2 === 1
                          ? "bg-blue-50/70 dark:bg-blue-950/25"
                          : "bg-transparent"
                      }`}
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
                      {items.slice(0, 2).map((item, i) => renderItem(item, i))}
                      {items.length > 2 && (
                        <details className="group">
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[11px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">+ Show {items.length - 2} more</span>
                            <span className="hidden group-open:inline">− Show fewer</span>
                          </summary>
                          {items.slice(2).map((item, i) => renderItem(item, i + 2))}
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
            <div className="w-full">
              <div>
                {(() => {
                  const renderItem = (work: typeof RESUME_DATA.work[number], index: number) => (
                    <div
                      key={index}
                      className={`mb-1 px-2 py-2.5 ${
                        index % 2 === 1
                          ? "bg-blue-50/70 dark:bg-blue-950/25"
                          : "bg-transparent"
                      }`}
                    >
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
                      {items.slice(0, 2).map((item, i) => renderItem(item, i))}
                      {items.length > 2 && (
                        <details className="group">
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[11px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">+ Show {items.length - 2} more</span>
                            <span className="hidden group-open:inline">− Show fewer</span>
                          </summary>
                          {items.slice(2).map((item, i) => renderItem(item, i + 2))}
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
            <div className="w-full">
              <div>
                {(() => {
                  const renderItem = (challenge: typeof RESUME_DATA.challenges[number], index: number) => (
                    <div
                      key={index}
                      className={`mb-1 px-2 py-2.5 ${
                        index % 2 === 1
                          ? "bg-blue-50/70 dark:bg-blue-950/25"
                          : "bg-transparent"
                      }`}
                    >
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
                      {items.slice(0, 2).map((item, i) => renderItem(item, i))}
                      {items.length > 2 && (
                        <details className="group">
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[11px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">+ Show {items.length - 2} more</span>
                            <span className="hidden group-open:inline">− Show fewer</span>
                          </summary>
                          {items.slice(2).map((item, i) => renderItem(item, i + 2))}
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
            <div>
              <div>
                {(() => {
                  const renderItem = (
                    activity: typeof RESUME_DATA.activities[number],
                    index: number,
                  ) => (
                    <div
                      key={index}
                      className={`mb-1 px-2 py-2.5 ${
                        index % 2 === 1
                          ? "bg-blue-50/70 dark:bg-blue-950/25"
                          : "bg-transparent"
                      }`}
                    >
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
                  );
                  const items = RESUME_DATA.activities;
                  return (
                    <>
                      {items.slice(0, 2).map((item, i) => renderItem(item, i))}
                      {items.length > 2 && (
                        <details className="group">
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[11px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">+ Show {items.length - 2} more</span>
                            <span className="hidden group-open:inline">− Show fewer</span>
                          </summary>
                          {items.slice(2).map((item, i) => renderItem(item, i + 2))}
                        </details>
                      )}
                    </>
                  );
                })()}
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
