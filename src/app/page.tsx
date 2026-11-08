import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { formatPublicationAuthors } from "@/lib/format-publication-authors";
import { PublicationThumbnail } from "@/components/publication-thumbnail";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ModeToggle } from "@/components/mode-toggle";
import { WeChatCopyButton } from "@/components/wechat-copy-button";
import Link from "next/link"; // Import Link

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <ModeToggle />
      <section className="mx-auto w-full max-w-[720px] space-y-8 print:space-y-4">
        <AnimatedSection delay={0.05}>
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-lg font-bold">{RESUME_DATA.name}</h1>
              <p className="max-w-md text-pretty text-[14px] text-foreground print:text-[12px]">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md text-[12px] font-medium text-muted-foreground print:hidden">
                {RESUME_DATA.researchFocus.join(" / ")}
              </p>
              <p className="max-w-md items-center text-pretty text-[12px] text-muted-foreground">
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
                <WeChatCopyButton />
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
                {RESUME_DATA.contact.social
                  .filter((social) => social.name !== "GitHub")
                  .map((social) => (
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
              <div className="hidden flex-col gap-x-1 text-[13px] text-muted-foreground print:flex print:text-[12px]">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
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
          <Section className="[&_a]:no-underline [&_a:hover]:no-underline">
            <h2 id="about" className="scroll-mt-16 text-[14px] font-bold">
              About
            </h2>
            <p className="rich-links text-pretty text-[13px] leading-[1.5] text-foreground print:text-[12px]">
              <span
                dangerouslySetInnerHTML={{ __html: RESUME_DATA.summary }}
              />{" "}
              <Link
                href="/research"
                className="content-link whitespace-nowrap print:hidden"
              >
                See research scope →
              </Link>
            </p>
            <p className="text-[12px] text-foreground print:hidden">
              “We have several full-time and internship openings at Ant
              Healthcare —{" "}
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="content-link"
              >
                email me
              </a>
              .”
            </p>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 id="news" className="scroll-mt-16 text-[14px] font-bold">
              News
            </h2>
            <div className="w-full">
              <div>
                {(() => {
                  const renderItem = (
                    newsItem: (typeof RESUME_DATA.news)[number],
                    isLast: boolean,
                  ) => (
                    <div
                      key={`${newsItem.date}-${newsItem.title}`}
                      className={`mb-1 bg-transparent px-2 py-2.5 ${
                        isLast
                          ? "border-b-0"
                          : "border-b border-black/[0.07] dark:border-white/[0.08]"
                      }`}
                    >
                      <span className="text-[12px] text-gray-500 dark:text-gray-400">
                        {new Date(newsItem.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC",
                        })}
                      </span>
                      <h3 className="mt-1 text-[13px] font-semibold">
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
                      <p className="mt-1 text-[12px] text-gray-700 dark:text-gray-300">
                        {newsItem.description.split("\n").map((line) => (
                          <span key={line} className="block">
                            {line.split(/(RadWorld|MedVTok)/g).map((part, index) => {
                              const projectLink =
                                "projectLinks" in newsItem
                                  ? newsItem.projectLinks?.find(
                                      (link) => link.label === part,
                                    )
                                  : undefined;

                              return projectLink ? (
                                <a
                                  key={`${part}-${index}`}
                                  href={projectLink.url}
                                  className="content-link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {part}
                                </a>
                              ) : (
                                <span key={`${part}-${index}`}>{part}</span>
                              );
                            })}
                          </span>
                        ))}
                      </p>
                    </div>
                  );
                  const items = RESUME_DATA.news;
                  return (
                    <>
                      {items
                        .slice(0, 3)
                        .map((item, index, visibleItems) =>
                          renderItem(item, index === visibleItems.length - 1),
                        )}
                      {items.length > 3 && (
                        <details className="group">
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[12px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">
                              + Show {items.length - 3} more
                            </span>
                            <span className="hidden group-open:inline">
                              − Show fewer
                            </span>
                          </summary>
                          {items
                            .slice(3)
                            .map((item, index, hiddenItems) =>
                              renderItem(
                                item,
                                index === hiddenItems.length - 1,
                              ),
                            )}
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
              <h2
                id="publications"
                className="scroll-mt-16 text-[14px] font-bold"
              >
                Selected Publications
              </h2>
              <Link href="/publications" className="content-link text-[12px]">
                Full publication list →
              </Link>
            </div>
            <div className="-mx-3 grid grid-cols-1 gap-1 print:grid-cols-1 print:gap-1 md:grid-cols-1 lg:grid-cols-1">
              {(() => {
                const isLeadAuthor = (authors: string) =>
                  /^Yuanfeng Ji[\s,]/.test(authors) ||
                  /Yuanfeng Ji[\*#]/.test(authors);

                const sorted = [...RESUME_DATA.publications]
                  .filter(
                    (publication) =>
                      !publication.badges.some(
                        (badge) => badge.trim().toLowerCase() === "arxiv",
                      ),
                  )
                  .filter((p) => isLeadAuthor(p.authors))
                  .sort((a, b) => Number(b.year) - Number(a.year));
                const currentPublications = sorted.filter(
                  (publication) => Number(publication.year) >= 2026,
                );
                const earlierPublications = sorted.filter(
                  (publication) => Number(publication.year) <= 2025,
                );

                const renderItem = (
                  publication: (typeof sorted)[number],
                  isLast: boolean,
                ) => {
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
                        key={publication.title}
                        className={`flex flex-row items-center rounded-none bg-transparent px-3 py-2 shadow-none dark:bg-transparent ${
                          isLast
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
                          <CardContent className="mt-1 p-0 print:text-[9px]">
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
                };

                return (
                  <>
                    {currentPublications.map((publication, index) =>
                      renderItem(
                        publication,
                        index === currentPublications.length - 1,
                      ),
                    )}
                    {earlierPublications.length > 0 && (
                      <details className="group">
                        <summary className="mt-2 cursor-pointer list-none px-3 text-[12px] text-muted-foreground hover:text-foreground">
                          <span className="group-open:hidden">
                            + Show {earlierPublications.length} more
                          </span>
                          <span className="hidden group-open:inline">
                            − Show fewer
                          </span>
                        </summary>
                        {earlierPublications.map((publication, index) =>
                          renderItem(
                            publication,
                            index === earlierPublications.length - 1,
                          ),
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
            <h2 id="education" className="scroll-mt-16 text-[14px] font-bold">
              Education
            </h2>
            <div className="w-full">
              <div>
                {(() => {
                  const renderItem = (
                    education: (typeof RESUME_DATA.education)[number],
                    isLast: boolean,
                  ) => (
                    <div
                      key={`${education.school}-${education.start}`}
                      className={`mb-1 bg-transparent px-2 py-2.5 ${
                        isLast
                          ? "border-b-0"
                          : "border-b border-black/[0.07] dark:border-white/[0.08]"
                      }`}
                    >
                      <span className="text-[12px] text-gray-500 dark:text-gray-400">
                        {education.start} - {education.end}
                      </span>
                      <h3 className="mt-1 text-[13px] font-semibold">
                        {education.school}
                      </h3>
                      <p className="mt-1 text-[12px] text-gray-700 dark:text-gray-300">
                        {education.degree}
                      </p>
                    </div>
                  );
                  const items = RESUME_DATA.education.slice().reverse();
                  return (
                    <>
                      {items
                        .slice(0, 2)
                        .map((item, index, visibleItems) =>
                          renderItem(item, index === visibleItems.length - 1),
                        )}
                      {items.length > 2 && (
                        <details className="group">
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[12px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">
                              + Show {items.length - 2} more
                            </span>
                            <span className="hidden group-open:inline">
                              − Show fewer
                            </span>
                          </summary>
                          {items
                            .slice(2)
                            .map((item, index, hiddenItems) =>
                              renderItem(
                                item,
                                index === hiddenItems.length - 1,
                              ),
                            )}
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
            <h2 id="experience" className="scroll-mt-16 text-[14px] font-bold">
              Work Experience
            </h2>
            <div className="w-full">
              <div>
                {(() => {
                  const renderItem = (
                    work: (typeof RESUME_DATA.work)[number],
                    isLast: boolean,
                  ) => (
                    <div
                      key={`${work.company}-${work.start}`}
                      className={`mb-1 bg-transparent px-2 py-2.5 ${
                        isLast
                          ? "border-b-0"
                          : "border-b border-black/[0.07] dark:border-white/[0.08]"
                      }`}
                    >
                      <span className="text-[12px] text-gray-500 dark:text-gray-400">
                        {work.start} - {work.end ?? "Present"}
                      </span>
                      <h3 className="mt-1 text-[13px] font-semibold">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                      </h3>
                      <p className="mt-1 text-[12px] text-gray-700 dark:text-gray-300">
                        {work.title}
                      </p>
                      <p className="mt-1 text-[12px] text-gray-700 dark:text-gray-300">
                        {work.description}
                      </p>
                      <div className="mt-1 flex gap-x-1">
                        {work.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-[12px] dark:bg-zinc-800 dark:text-zinc-100"
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
                      {items
                        .slice(0, 2)
                        .map((item, index, visibleItems) =>
                          renderItem(item, index === visibleItems.length - 1),
                        )}
                      {items.length > 2 && (
                        <details className="group">
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[12px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">
                              + Show {items.length - 2} more
                            </span>
                            <span className="hidden group-open:inline">
                              − Show fewer
                            </span>
                          </summary>
                          {items
                            .slice(2)
                            .map((item, index, hiddenItems) =>
                              renderItem(
                                item,
                                index === hiddenItems.length - 1,
                              ),
                            )}
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
            <h2 id="awards" className="scroll-mt-16 text-[14px] font-bold">
              Awards & Achievements
            </h2>
            <div className="w-full">
              <div>
                {(() => {
                  const renderItem = (
                    challenge: (typeof RESUME_DATA.challenges)[number],
                    isLast: boolean,
                  ) => (
                    <div
                      key={`${challenge.year}-${challenge.title}`}
                      className={`mb-1 bg-transparent px-2 py-2.5 ${
                        isLast
                          ? "border-b-0"
                          : "border-b border-black/[0.07] dark:border-white/[0.08]"
                      }`}
                    >
                      <span className="text-[12px] text-gray-500 dark:text-gray-400">
                        {challenge.year}
                      </span>
                      <h3 className="mt-1 text-[13px] font-semibold">
                        <a
                          href={challenge.link}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {challenge.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-[12px] text-gray-700 dark:text-gray-300">
                        {challenge.rank}
                      </p>
                    </div>
                  );
                  const items = RESUME_DATA.challenges;
                  return (
                    <>
                      {items
                        .slice(0, 2)
                        .map((item, index, visibleItems) =>
                          renderItem(item, index === visibleItems.length - 1),
                        )}
                      {items.length > 2 && (
                        <details className="group">
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[12px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">
                              + Show {items.length - 2} more
                            </span>
                            <span className="hidden group-open:inline">
                              − Show fewer
                            </span>
                          </summary>
                          {items
                            .slice(2)
                            .map((item, index, hiddenItems) =>
                              renderItem(
                                item,
                                index === hiddenItems.length - 1,
                              ),
                            )}
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
            <h2 id="activities" className="scroll-mt-16 text-[14px] font-bold">
              Activities
            </h2>
            <div>
              <div>
                {(() => {
                  const renderItem = (
                    activity: (typeof RESUME_DATA.activities)[number],
                    isLast: boolean,
                  ) => (
                    <div
                      key={`${activity.year}-${activity.title}`}
                      className={`mb-1 bg-transparent px-2 py-2.5 ${
                        isLast
                          ? "border-b-0"
                          : "border-b border-black/[0.07] dark:border-white/[0.08]"
                      }`}
                    >
                      <span className="text-[12px] text-gray-500 dark:text-gray-400">
                        {activity.year}
                      </span>
                      <h3 className="mt-1 text-[13px] font-semibold">
                        <a
                          href={activity.link}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {activity.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-[12px] text-gray-700 dark:text-gray-300">
                        {activity.role}
                      </p>
                    </div>
                  );
                  const items = RESUME_DATA.activities;
                  return (
                    <>
                      {items
                        .slice(0, 2)
                        .map((item, index, visibleItems) =>
                          renderItem(item, index === visibleItems.length - 1),
                        )}
                      {items.length > 2 && (
                        <details className="group">
                          <summary className="mb-4 cursor-pointer list-none px-2 text-[12px] text-muted-foreground hover:text-foreground">
                            <span className="group-open:hidden">
                              + Show {items.length - 2} more
                            </span>
                            <span className="hidden group-open:inline">
                              − Show fewer
                            </span>
                          </summary>
                          {items
                            .slice(2)
                            .map((item, index, hiddenItems) =>
                              renderItem(
                                item,
                                index === hiddenItems.length - 1,
                              ),
                            )}
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
          ...RESUME_DATA.contact.social
            .map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            }))
            .filter((socialMediaLink) => socialMediaLink.title !== "GitHub"),
        ]}
      />

      <footer className="mt-8 text-center text-[12px] text-muted-foreground print:hidden">
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
        <p className="mt-1">
          © {new Date().getFullYear()} Yuanfeng Ji. Built with Next.js &
          Tailwind.
        </p>
      </footer>
    </main>
  );
}
