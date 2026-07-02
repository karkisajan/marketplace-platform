import api from "@/lib/axios";
import { CategoriesResponse } from "../types/categories.types";

export const getParentCategories = async (
  page: number,
  limit: number,
): Promise<CategoriesResponse> => {
  const { data } = await api.get<CategoriesResponse>(
    `/customer/categories/parent-categories`,
    { params: { page: page, limit: limit } },
  );
  return data;
};
