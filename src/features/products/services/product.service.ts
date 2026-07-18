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
  const { data } = await api.get<ProductListsResponse>(`/products`, {
    params: {
      limit: limit,
      cursor: cursor,
      search: search,
      categoryId: categoryId,
      minPrice: minPrice,
      maxPrice: maxPrice,
      datePosted:
        datePosted && datePosted !== DatePostedTypeEnum.ANY_TIME
          ? datePosted
          : undefined,
    },
  });

  return data;
};
