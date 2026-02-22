import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { BlogCard } from "@/components/blog/blog-card";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on enterprise networking, cloud & DevOps, monitoring, security, and infrastructure automation.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="glow-orb glow-orb-cyan animate-pulse-slower absolute -top-20 left-1/4 h-[350px] w-[350px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-light">
              Insights
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              The <span className="text-gradient-bright">Blog</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Deep dives into the infrastructure topics we care about—from
              EVPN-VXLAN design to Terraform modules to observability stacks.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 separator-glow" />
      </section>

      {/* Posts */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
        <Container className="relative z-10">
          {posts.length === 0 ? (
            <p className="text-center text-text-muted">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
