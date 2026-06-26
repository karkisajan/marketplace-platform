import { useEffect, useState } from "react";
import { Category } from "../types/categories.types";
import { getParentCategories } from "../services/categories.service";

export const useCategories = (page: number, limit: number) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParentCategories = async () => {
      try {
        setLoading(true);
        const response = await getParentCategories(page, limit);
        setCategories(response.data);
      } catch (error) {
        setError("Failed to load categories.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchParentCategories();
  }, [page, limit]);

  return { categories, loading, error };
};
