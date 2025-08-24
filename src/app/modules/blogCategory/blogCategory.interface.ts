export interface IBlogCategory {
    name: string;
    description?: string;
    slug: string;
    status?: 'active' | 'inactive';
}

export interface IBlogCategoryResponse {
    message?: string;
    data?: Partial<IBlogCategory>;
}
