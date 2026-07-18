import { DatePostedTypeEnum } from "@/common/enums/date-filters.enum";
import { ProductListsResponse } from "../types/product-lists.types";
import api from "@/lib/axios";

interface ProductParamsOptions {
  limit: number;
  cursor?: string;
  search?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  datePosted?: DatePostedTypeEnum;
}

/**
 * ---- GET - PRODUCTS LISTS
 */
export const getProductLists = async ({
  limit,
  cursor,
  search,
  categoryId,
  minPrice,
  maxPrice,
  datePosted,
}: ProductParamsOptions): Promise<ProductListsResponse> => {
  const query = new URLSearchParams();
  
  if (limit) query.set("limit", String(limit));
  if (cursor) query.set("cursor", cursor);
  if (search) query.set("search", search);
  if (categoryId) query.set("categoryId", categoryId);
  if (minPrice) query.set("minPrice", String(minPrice));
  if (maxPrice) query.set("maxPrice", String(maxPrice));
  if (datePosted && datePosted !== DatePostedTypeEnum.ANY_TIME)
    query.set("datePosted", datePosted);

  const { data } = await api.get<ProductListsResponse>(`/products`, {
    params: {
      limit: limit,
      cursor: cursor,
      search: search,
      categoryId: categoryId,
      minPrice: minPrice,
      maxPrice: maxPrice,
      datePosted: datePosted,
    },
  });

  return data;
};
