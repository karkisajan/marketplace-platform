export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
}

export interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface CategoriesResponse {
  success: boolean;
  message: string;
  data: Category[];
  meta: Meta;
  statusCode: number;
  timestamp: string;
}
