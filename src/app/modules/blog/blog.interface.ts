export interface IBlog {
  title: string;
  content: string;
  status: 'draft' | 'published';
  category: string; // Reference to BlogCategory ID
  featuredImage?: string;
  tags?: string[];
  slug: string;
}

export interface IBlogResponse {
  message?: string;
  data?: Partial<IBlog>;
}
