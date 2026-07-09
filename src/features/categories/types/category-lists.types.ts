export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
}

export interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface CategoriesListResponse {
  success: boolean;
  message: string;
  data: Category[];
  meta: Meta;
  statusCode: number;
  timestamp: string;
}
