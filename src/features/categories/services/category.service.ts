import api from "@/lib/axios";
import { CategoryListsResponse } from "../types/category-lists.types";
import { CategoryTreeResponse } from "../types/category-tree.types";
import { CategoryProductListsResponse } from "../types/category-productLists";

interface CategoryParamsOptions {
  initialPage: number;
  initialLimit: number;
}

interface CategoryProductsParamsOptions {
  slug: string;
  limit: number;
  cursor?: string;
  categoryId?: string;
  search?: string;
}

/**
 * ---- GET - PARENT CATEGORIES LISTS
 */
export const getCategoryLists = async ({
  initialPage,
  initialLimit,
}: CategoryParamsOptions): Promise<CategoryListsResponse> => {
  const { data } = await api.get<CategoryListsResponse>(
    `/categories/parent-categories`,
    { params: { page: initialPage, limit: initialLimit } },
  );

  return data;
};

/**
 * ---- GET - CATEGORY TREE LISTS
 */
export const getCategoryTree = async (): Promise<CategoryTreeResponse> => {
  const { data } = await api.get<CategoryTreeResponse>(
    `categories/category-tree`,
  );

  return data;
};

/**
 * ---- GET - CATEGORY PRODUCT LISTS
 */
export const getCategoryProductsBySlug = async ({
  slug,
  limit,
  cursor,
  categoryId,
  search,
}: CategoryProductsParamsOptions): Promise<CategoryProductListsResponse> => {
  const { data } = await api.get<CategoryProductListsResponse>(
    `/categories/${slug}/products`,
    {
      params: {
        limit: limit,
        cursor: cursor,
        search: search,
        categoryId: categoryId,
      },
    },
  );

  return data;
};
