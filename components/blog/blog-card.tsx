import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ArrowRightIcon } from "@/components/ui/icons";
import type { BlogPostMeta } from "@/lib/types";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card glow hover className="group flex h-full flex-col">
        <div className="flex items-center gap-2">
          <Badge variant="teal">{post.category}</Badge>
        </div>
        <h2 className="mt-3 text-lg font-semibold leading-snug group-hover:text-cyan transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {post.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="h-3.5 w-3.5" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1 font-medium text-cyan transition-all group-hover:text-cyan-light group-hover:gap-2">
            Read <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </Card>
    </Link>
  );
}
