# DK Infra Edge

Enterprise IT infrastructure consulting website built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Blog**: MDX with `next-mdx-remote`, `remark-gfm`, `rehype-highlight`
- **Email**: SendGrid
- **Spam Protection**: Honeypot + Cloudflare Turnstile
- **Analytics**: Plausible (privacy-friendly)
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL (e.g., `https://dkinfraedge.com`) |
| `SENDGRID_API_KEY` | Yes (prod) | SendGrid API key for contact form emails |
| `CONTACT_EMAIL_TO` | Yes (prod) | Recipient email for contact form |
| `CONTACT_EMAIL_FROM` | Yes (prod) | Sender email (must be verified in SendGrid) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Optional | Cloudflare Turnstile site key |
| `TURNSTILE_SECRET_KEY` | Optional | Cloudflare Turnstile secret key |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Plausible Analytics domain |

## Site Structure

```
/                          Homepage
/services                  Services listing
/services/[slug]           Individual service detail
/about                     About page
/blog                      Blog listing
/blog/[slug]               Blog post
/contact                   Contact form
/privacy                   Privacy policy
/terms                     Terms of service
/sitemap.xml               Dynamic sitemap
/robots.txt                Robots file
/feed.xml                  RSS feed
```

## Blog

Blog posts are MDX files in `content/blog/`. Each post has frontmatter:

```yaml
---
title: "Post Title"
description: "Brief description"
date: "2025-01-15"
author: "DK Infra Edge"
category: "Networking"
tags: ["EVPN", "VXLAN"]
---
```

## Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel project settings
4. Configure custom domain (`dkinfraedge.com`)
5. In Vercel domain settings, ensure:
   - `dkinfraedge.com` is the primary domain
   - `www.dkinfraedge.com` redirects to `dkinfraedge.com`
   - HTTPS is enforced (automatic on Vercel)

## License

MIT
