import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
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
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
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
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <div>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold">News</h2>
            <div className="relative max-w-3xl mx-auto"> {/* 限制宽度并居中 */}
              <div className="border-l-2 border-gray-300 ml-4">
                {RESUME_DATA.news.map((newsItem, index) => (
                  <div key={index} className="relative mb-8 ml-8">
                    <span className="text-xs text-gray-500">{newsItem.date}</span>
                    <h3 className="text-base font-semibold mt-1">
                      <a
                        href={newsItem.link}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {newsItem.title}
                      </a>
                    </h3>
                    <p className="text-xs mt-1 text-gray-700">{newsItem.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          <div className="relative">
            <div className="border-l-2 border-gray-300 ml-4">
              {RESUME_DATA.work.map((work, index) => (
                <div key={index} className="relative mb-8 ml-8">
                  <span className="text-xs text-gray-500">
                    {work.start} - {work.end ?? "Present"}
                  </span>
                  <h3 className="text-base font-semibold mt-1">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>
                  </h3>
                  <p className="text-xs mt-1 text-gray-700">{work.title}</p>
                  <p className="text-xs mt-1 text-gray-700">{work.description}</p>
                  <div className="flex gap-x-1 mt-1">
                    {work.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center justify-center rounded bg-gray-200 text-xs px-2 py-0.5"
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
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          <div className="relative">
            <div className="border-l-2 border-gray-300 ml-4">
              {RESUME_DATA.education.map((education, index) => (
                <div key={index} className="relative mb-8 ml-8">
                  <span className="text-xs text-gray-500">
                    {education.start} - {education.end}
                  </span>
                  <h3 className="text-base font-semibold mt-1">
                    {education.school}
                  </h3>
                  <p className="text-xs mt-1 text-gray-700">{education.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
        {/* <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section> */}
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
        <h2 className="text-xl font-bold">Publications</h2>
        <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2 md:grid-cols-1 lg:grid-cols-1">
          {RESUME_DATA.publications.map((publication) => (
            <Card key={publication.title} className="border border-gray-100 rounded-lg p-4">
              <CardHeader>
                <h3 className="font-semibold leading-normal inline-flex items-center gap-x-1">
                  <a
                    href={publication.links.find(link => link.label === 'paper')?.url}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.title}
                  </a>
                  <span className="inline-flex gap-x-1">
                    {publication.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                </h3>
              </CardHeader>
              <CardContent className="mt-2 text-xs print:text-[10px]">
                <p className="text-pretty mb-2">{publication.authors}</p>
                <div className="text-pretty">
                  {publication.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="text-blue-600 hover:underline text-xs mr-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [{link.label.toLowerCase()}]
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="print-force-new-page scroll-mb-16">
        <h2 className="text-xl font-bold">Awards & Achievements</h2>
        <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2 lg:grid-cols-2">
          {RESUME_DATA.challenges.map((challenge, index) => (
            <Card key={index} className="border border-gray-100 rounded-lg p-3"> {/* 将 p-4 改为 p-3 */}
              <CardHeader className="relative">
                <h3 className="text-base font-semibold leading-normal"> {/* 确保与 Publications 一致 */}
                  <a
                    href={challenge.link}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {challenge.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent className="mt-1 text-xs print:text-[10px]"> {/* mt-1 缩小间距 */}
                <p className="text-pretty">{challenge.rank}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
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
    </main>
  );
}
