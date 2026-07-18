import { Product } from "@/features/products/types/product-lists.types";

export interface CategoryProductLists {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  products: Product[];
  meta: Meta;
}

export interface Meta {
  hasNextPage: boolean;
  nextPageCursor: string;
}

export interface CategoryProductListsResponse {
  success: boolean;
  message: string;
  data: CategoryProductLists;
  statusCode: number;
  timestamp: string;
}
