import { Feed } from "feed";
import { getAllPosts } from "@/lib/blog";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export async function GET() {
  const posts = getAllPosts();

  const feed = new Feed({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    id: SITE_URL,
    link: SITE_URL,
    language: "en",
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `Copyright ${new Date().getFullYear()} ${SITE_NAME}`,
    feedLinks: {
      rss2: `${SITE_URL}/feed.xml`,
    },
    author: {
      name: SITE_NAME,
      link: SITE_URL,
    },
  });

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `${SITE_URL}/blog/${post.slug}`,
      link: `${SITE_URL}/blog/${post.slug}`,
      description: post.description,
      author: [{ name: post.author }],
      date: new Date(post.date),
      category: [{ name: post.category }],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
