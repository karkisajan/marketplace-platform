import { useEffect, useState } from "react";
import { getCategoryLists } from "../services/category.service";
import { Category, CategoryListsResponse } from "../types/category-lists.types";

interface CategoryParamsOptions {
  initialPage: number;
  initialLimit: number;
}

export function useCategoryLists({
  initialPage,
  initialLimit,
}: CategoryParamsOptions) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(initialPage);
  const [limit, setLimit] = useState<number>(initialLimit);

  useEffect(() => {
    let cancelled: boolean = false;

    const fetchCategoryLists = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!cancelled) {
          const response: CategoryListsResponse = await getCategoryLists({
            initialPage: page,
            initialLimit: limit,
          });
          setCategories(response.data);
        }
      } catch (error) {
        if (!cancelled) {
          const message: string =
            error instanceof Error ? error.message : String(error);
          setError(`Failed to fetch categories ${message}`);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchCategoryLists();

    return () => {
      cancelled = true;
    };
  }, [page, limit]);

  return {
    categories,
    isLoading,
    error,
    page,
    limit,
    setPage,
    setLimit,
  };
}
