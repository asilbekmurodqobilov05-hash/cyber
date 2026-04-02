export type SocialLink = {
  label: string;
  href: string;
};

export type AlumniProfile = {
  id: string;
  slug: string;
  name: string;
  graduationYear: number;
  profession: string;
  bio: string;
  imageUrl: string;
  location: string;
  achievements: string[];
  socials: SocialLink[];
  featured?: boolean;
};

export type Story = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  author: string;
  authorRole: string;
  createdAt: string;
  readTime: string;
  featured?: boolean;
};

export type GalleryItem = {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
  category: string;
  heightClass: string;
};

export type Statistic = {
  label: string;
  value: string;
  description: string;
};

export type DirectoryFilters = {
  query?: string;
  year?: string;
  profession?: string;
  page?: string;
};

export type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};
