import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, PrinterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <ModeToggle />
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-4">
        <AnimatedSection delay={0.1}>
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
              <p className="max-w-md text-pretty text-sm text-muted-foreground print:text-[12px]">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
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
              <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex print:text-[12px]">
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

        <AnimatedSection delay={0.2}>
          <Section>
            <h2 className="text-lg font-bold">About</h2>
            <p className="text-pretty text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.summary}
            </p>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-lg font-bold">News</h2>
            <div className="no-scrollbar relative mx-auto h-80 max-w-3xl overflow-y-auto">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {RESUME_DATA.news.map((newsItem, index) => {
                  const isNew =
                    new Date(newsItem.date) >
                    new Date(Date.now() - 1000 * 60 * 60 * 24 * 90); // 90 days

                  return (
                    <div key={index} className="relative mb-[28px] ml-8">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {newsItem.date}
                      </span>
                      <h3 className="mt-1 flex items-center gap-2 text-sm font-semibold">
                        <a
                          href={newsItem.link}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {newsItem.title}
                        </a>
                        {isNew && (
                          <span className="inline-flex animate-pulse items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                            🔥 New
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                        {newsItem.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Section>
            <h2 className="text-lg font-bold">Work Experience</h2>
            <div className="no-scrollbar relative h-64 w-full overflow-y-auto">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {RESUME_DATA.work.map((work, index) => (
                  <div key={index} className="relative mb-[28px] ml-8">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {work.start} - {work.end ?? "Present"}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>
                    </h3>
                    <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">{work.title}</p>
                    <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                      {work.description}
                    </p>
                    <div className="mt-1 flex gap-x-1">
                      {work.badges.map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs dark:bg-zinc-800 dark:text-zinc-100"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <Section>
            <h2 className="text-lg font-bold">Education</h2>
            <div className="no-scrollbar relative h-64 w-full overflow-y-auto">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {RESUME_DATA.education
                  .slice()
                  .reverse()
                  .map((education) => (
                    <div
                      key={`${education.school}-${education.start}`}
                      className="relative mb-[28px] ml-8"
                    >
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {education.start} - {education.end}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold">
                        {education.school}
                      </h3>
                      <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                        {education.degree}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-lg font-bold">Awards & Achievements</h2>
            <div className="no-scrollbar relative h-64 w-full overflow-y-auto">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {RESUME_DATA.challenges.map((challenge, index) => (
                  <div key={index} className="relative mb-[28px] ml-8">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {challenge.year}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold">
                      <a
                        href={challenge.link}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {challenge.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                      {challenge.rank}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-lg font-bold">Activities</h2>
            <div className="relative">
              <div className="ml-4 border-l-2 border-gray-300 dark:border-zinc-700">
                {RESUME_DATA.activities.map((activity, index) => (
                  <div key={index} className="relative mb-[28px] ml-8">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.year}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold">
                      <a
                        href={activity.link}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activity.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                      <a
                        href={activity.link}
                        className="text-blue-600 hover:underline dark:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activity.link}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-lg font-bold">Publications</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2 md:grid-cols-1 lg:grid-cols-1">
              {RESUME_DATA.publications.map((publication) => (
                <Card
                  key={publication.title}
                  className="flex flex-row border border-gray-100 p-4 transition-all hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <div className="mr-4 hidden flex-shrink-0 items-center justify-center md:flex">
                    <Avatar className="size-24 rounded-lg border bg-muted">
                      <AvatarFallback className="text-xl font-bold text-muted-foreground uppercase">
                        {publication.title[0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <CardHeader className="p-0">
                      <div className="flex flex-col gap-1">
                        <div>
                          <a
                            href={
                              publication.links.find(
                                (link) => link.label === "paper",
                              )?.url
                            }
                            className="text-sm font-semibold leading-tight hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {publication.title}
                          </a>
                          {publication.badges.map((badge) => (
                            <span
                              key={badge}
                              className="ml-2 inline-flex items-center rounded-md border border-transparent bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground align-middle dark:bg-zinc-700 dark:text-zinc-100"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-2 p-0 text-xs print:text-[10px]">
                      <p
                        className="mb-2 text-pretty leading-relaxed text-gray-600 dark:text-gray-400"
                        dangerouslySetInnerHTML={{
                          __html: publication.authors.replace(
                            /yuanfeng ji(\*|#)*/gi,
                            '<span class="font-bold text-black dark:text-white">$&</span>',
                          ),
                        }}
                      />
                      <div className="flex flex-wrap items-center gap-2">
                        {publication.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            className="inline-flex items-center gap-1 rounded border border-gray-200 bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-gray-100"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </Section>
        </AnimatedSection>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />

      <footer className="mt-8 text-center text-xs text-muted-foreground print:hidden">
        © {new Date().getFullYear()} Yuanfeng Ji. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
