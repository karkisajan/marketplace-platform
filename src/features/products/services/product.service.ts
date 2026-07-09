import api from "@/lib/axios";
import { ProductListsResponse } from "../types/product.types";
import { DatePostedTypeEnum } from "@/types/enums/date-posted.enum";
interface ProductParamsOptions {
  limit?: number;
  cursor?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  datePosted?: DatePostedTypeEnum;
}

export const getProductLists =
 async ({ limit, cursor, search, maxPrice, minPrice, datePosted }: ProductParamsOptions): Promise<ProductListsResponse> => {
  const query = new URLSearchParams();
  if (limit) query.set('limit', String(limit));
  if (cursor) query.set('cursor', cursor);
  if (search) query.set('search', search);
  if (minPrice) query.set('minPrice', String(minPrice));
  if (maxPrice) query.set('maxPrice', String(maxPrice));
  if (datePosted && datePosted !== DatePostedTypeEnum.ANY_TIME) query.set('datePosted', datePosted);

  const { data } = await api.get<ProductListsResponse>(`/customers/products/`, { params: query });
  return data;
};
