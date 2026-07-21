import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { meta } = getPostBySlug(params.slug);
  return {
    title: `${meta.title} | Yuanfeng Ji`,
    description: meta.description,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { content, meta } = getPostBySlug(params.slug);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <div className="fixed right-4 top-4 z-50 flex gap-2 print:hidden">
        <ModeToggle />
      </div>

      <article className="mx-auto w-full max-w-2xl space-y-8 bg-white dark:bg-zinc-900 print:space-y-4">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/blog">
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{meta.title}</h1>
            <p className="text-sm text-muted-foreground">{meta.date}</p>
          </div>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </div>
      </article>
    </main>
  );
}
