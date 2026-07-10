import { DatePostedTypeEnum } from "@/common/enums/date-filters.enum";
import { ProductListsResponse } from "../types/product-lists.types";
import api from "@/lib/axios";

interface ProductParamsOptions {
  limit?: number;
  cursor?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: string;
  datePosted?: DatePostedTypeEnum;
}

export const getProductLists = async ({
  limit,
  cursor,
  search,
  minPrice,
  maxPrice,
  categoryId,
  datePosted,
}: ProductParamsOptions): Promise<ProductListsResponse> => {
  const query = new URLSearchParams();

  if (limit) query.set("limit", String(limit));
  if (cursor) query.set("cursor", cursor);
  if (search) query.set("search", search);
  if (minPrice) query.set("minPrice", String(minPrice));
  if (maxPrice) query.set("maxPrice", String(maxPrice));
  if (categoryId) query.set("categoryId", categoryId);
  if (datePosted) query.set("datePosted", datePosted);

  const { data } = await api.get<ProductListsResponse>(`/products`, {
    params: {
      limit: limit,
      cursor: cursor,
      search: search,
      minPrice: minPrice,
      maxPrice: maxPrice,
      categoryId: categoryId,
      datePosted: datePosted,
    },
  });

  return data;
};
