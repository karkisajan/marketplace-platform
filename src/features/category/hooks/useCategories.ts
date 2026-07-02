import { useEffect, useState } from "react";
import { Category, Meta } from "../types/categories.types";
import { getParentCategories } from "../services/categories.service";

interface UseCategoriesOptions {
  initialPage?: number;
  initialLimit?: number;
}

export const useCategories = ({
  initialPage = 1,
  initialLimit = 10,
}: UseCategoriesOptions) => {

  const [categories, setCategories] = useState<Category[]>([]);
  const [page, setPage] = useState<number>(initialPage);
  const [limit, setLimit] = useState<number>(initialLimit);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParentCategories = async () => {
      setIsLoading(true);
      try {
        const response = await getParentCategories(page, limit);
        setCategories(response.data);
        setMeta(response.meta);
        setError(null);
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
    limit,
    setPage,
    setLimit,
    isLoading,
    error,
  };
};
