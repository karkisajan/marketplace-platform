import api from "@/lib/axios";
import { CategoriesResponse } from "../types/category.types";
import { CategoryTreeResponse } from "../types/category-tree.types";

/* GET - parent categories */
export const getParentCategories = async (page: number, limit: number): Promise<CategoriesResponse> => {
  const { data } = await api.get<CategoriesResponse>(
    `customer/categories/parent-categories`, { params: { page: page, limit: limit } },
  );

  return data;
};

/* GET - category tree */
export const getCategoryTree = async (): Promise<CategoryTreeResponse> => {
  const { data } = await api.get<CategoryTreeResponse>(
    `customer/categories/category-tree`,
  );
  return data;
};
