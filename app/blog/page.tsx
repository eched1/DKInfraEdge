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

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Deep dives into the infrastructure topics we care about—from
              EVPN-VXLAN design to Terraform modules to observability stacks.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="mt-16 text-center text-text-muted">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
