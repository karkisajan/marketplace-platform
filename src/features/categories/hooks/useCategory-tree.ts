import { useEffect, useState } from "react";
import { CategoryNode } from "../types/category-tree.types";
import { getCategoryTree } from "../services/category.service";

export function useCategoriesTree() {
  const [categories, setCategories] = useState<CategoryNode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryTree = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getCategoryTree();
        setCategories(response.data);
      } catch (error) {
        setError(`Failed to fetch category tree ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryTree();
  }, []);

  return {
    categories,
    isLoading,
    error,
  };
}
