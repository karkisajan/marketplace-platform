import { useEffect, useState } from "react";
import { CategoriesResponse, Category, Meta } from "../types/category.types";
import { getParentCategories } from "../services/category.service";

interface CategoriesParamsOptions {
  initialPage: number;
  initialLimit: number;
}

export function useCategories({
  initialPage,
  initialLimit,
}: CategoriesParamsOptions) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [page, setPage] = useState<number>(initialPage);
  const [limit, setLimit] = useState<number>(initialLimit);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParentCategories = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response: CategoriesResponse = await getParentCategories(page, limit);
        setCategories(response.data);
        setMeta(response.meta);
      } catch (error) {
        setError(`Failed to fetch categories. ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchParentCategories();
  }, [page, limit]);

  return {
    categories,
    meta,
    page,
    isLoading,
    error,
    setPage,
    setLimit,
  };
}
