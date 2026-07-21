import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PrinterIcon } from "lucide-react";

export const metadata = {
  title: "Blog | Yuanfeng Ji",
  description: "Thoughts on AI, Medical Imaging, and Tech.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <div className="fixed right-4 top-4 z-50 flex gap-2 print:hidden">
        <ModeToggle />
      </div>

      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Blog</h1>
        </div>

        <Section>
          <div className="grid grid-cols-1 gap-4">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Card className="h-full transition-all hover:shadow-md dark:bg-zinc-800/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{post.meta.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">
                        {post.meta.date}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {post.meta.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Home",
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
