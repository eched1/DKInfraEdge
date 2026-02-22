export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: readonly string[];
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  serviceType: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
  honeypot?: string;
  turnstileToken?: string;
}
