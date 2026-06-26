import axiosInstance from "@/lib/axios";
import { CategoriesResponse } from "../types/categories.types";

export const getParentCategories = async (
  page: number = 1,
  limit: number = 50,
): Promise<CategoriesResponse> => {
  const { data } = await axiosInstance.get<CategoriesResponse>(
    `/customer/categories/parent-categories`,
    { params: { page: page, limit: limit } },
  );
  return data;
};
