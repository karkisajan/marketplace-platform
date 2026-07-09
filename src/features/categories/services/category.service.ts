import api from "@/lib/axios";
import { CategoriesListResponse } from "../types/category-lists.types";
import { CategoriesTreeResponse } from "../types/category-tree.types";

interface CategoryParamsOptions {
  initialPage?: number;
  initialLimit?: number;
}

/* GET - Parent categories  */
export const getCategoriesLists = async ({ initialPage, initialLimit }: CategoryParamsOptions): Promise<CategoriesListResponse> => {
  const { data } = await api.get<CategoriesListResponse>(`/categories/parent-categories`,
    { params: { page: initialPage, limit: initialLimit } },
  );

  return data;
};

/* GET - Category-tree */
export const getCategoryTree = async (): Promise<CategoriesTreeResponse> => {
  const { data } = await api.get<CategoriesTreeResponse>(
    `/categories/category-tree`,
  );
  
  return data;
};
