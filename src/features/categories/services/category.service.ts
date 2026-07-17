import api from "@/lib/axios";
import { CategoryListsResponse } from "../types/category-lists.types";
import { CategoryTreeResponse } from "../types/category-tree.types";

interface CategoryParamsOptions {
  initialPage: number;
  initialLimit: number;
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
