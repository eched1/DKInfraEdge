import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "@/components/ui/icons";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { blogPostJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: SITE_NAME,
      ...(post.image && { images: [{ url: `${SITE_URL}${post.image}` }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostJsonLd(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${slug}` },
            ])
          ),
        }}
      />

      <article className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text-muted">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-cyan">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-cyan">Blog</Link>
                </li>
                <li>/</li>
                <li className="truncate text-text-secondary">{post.title}</li>
              </ol>
            </nav>

            {/* Header */}
            <header>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="teal">{post.category}</Badge>
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
                <span>{post.author}</span>
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  {formattedDate}
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg mt-10 max-w-none">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug, rehypeHighlight],
                  },
                }}
              />
            </div>

            {/* Back link */}
            <div className="mt-12 border-t border-border pt-8">
              <Link
                href="/blog"
                className="text-sm font-medium text-cyan hover:text-cyan-light"
              >
                &larr; Back to all posts
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
