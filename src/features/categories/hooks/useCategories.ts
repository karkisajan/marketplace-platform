import { useEffect, useState } from "react";
import {
  CategoriesListResponse,
  Category,
  Meta,
} from "../types/category-lists.types";
import { getCategoriesLists } from "../services/category.service";

interface CategoryParamsOptions {
  initialPage?: number;
  initialLimit?: number;
}

export function useCategories({
  initialPage,
  initialLimit,
}: CategoryParamsOptions) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [page, setPage] = useState<number | undefined>(initialPage);
  const [limit, setLimit] = useState<number | undefined>(initialLimit);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled: boolean = false;

    const fetchCategoriesList = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!cancelled) {
          const response: CategoriesListResponse = await getCategoriesLists({
            initialPage: initialPage,
            initialLimit: initialLimit,
          });
          setCategories(response.data);
          setMeta(response.meta);
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

    fetchCategoriesList();

    return () => {
      cancelled = true;
    };
  }, [page, limit, initialPage, initialLimit]);

  return {
    categories,
    isLoading,
    error,
    meta,
    setPage,
    setLimit,
  };
}
