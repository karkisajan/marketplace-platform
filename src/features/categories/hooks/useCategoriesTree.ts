import { useEffect, useState } from "react";
import { getCategoryTree } from "../services/category.service";
import {
  CategoriesTreeResponse,
  CategoryNode,
} from "../types/category-tree.types";

export function useCategories() {
  const [categories, setCategories] = useState<CategoryNode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled: boolean = false;

    const fetchCategoriesList = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!cancelled) {
          const response: CategoriesTreeResponse = await getCategoryTree();
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

    fetchCategoriesList();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    categories,
    isLoading,
    error,
  };
}
