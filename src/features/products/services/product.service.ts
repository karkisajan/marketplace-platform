import { DatePostedTypeEnum } from "@/types/enums/date-posted.enum";
import { ProductListsResponse } from "../types/product-lists.types";
import api from "@/lib/axios";

interface ProductParamsOptions {
  limit?: number;
  cursor?: string;
  search?: string;
  datePosted?: DatePostedTypeEnum;
}

export const getProductLists = async ({
  limit,
  cursor,
  search,
  datePosted,
}: ProductParamsOptions): Promise<ProductListsResponse> => {
  const query = new URLSearchParams();

  if (limit) query.set("limit", String(limit));
  if (cursor) query.set("cursor", cursor);
  if (search) query.set("search", search);
  if (datePosted) query.set("datePosted", datePosted);

  const { data } = await api.get<ProductListsResponse>(`/products`, {
    params: {
      limit: limit,
      cursor: cursor,
      search: search,
      datePosted: datePosted,
    },
  });

  return data;
};
