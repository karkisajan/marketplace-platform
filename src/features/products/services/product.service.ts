import api from "@/lib/axios";
import { ProductListsResponse } from "../types/product.types";

interface ProductParamsOptions {
  limit?: number;
  cursor?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
}

export const getProductLists = async ({ limit, cursor, search, maxPrice, minPrice }: ProductParamsOptions): Promise<ProductListsResponse> => {
  const query = new URLSearchParams();
  if (limit) query.set('limit', String(limit));
  if (cursor) query.set('cursor', cursor);
  if (search) query.set('search', search);
  if (minPrice) query.set('minPrice', String(minPrice));
  if (maxPrice) query.set('maxPrice', String(maxPrice));

  const { data } = await api.get<ProductListsResponse>(`/customers/products/`, { params: query });
  return data;
};
