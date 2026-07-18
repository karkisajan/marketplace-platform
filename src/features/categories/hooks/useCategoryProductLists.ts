import { useEffect, useRef, useState } from "react";
import {
  CategoryProductLists,
  CategoryProductListsResponse,
} from "../types/category-productLists";
import { getCategoryProductsBySlug } from "../services/category.service";

interface CategoryProductsParamsOptions {
  slug: string;
  limit: number;
  categoryId?: string;
  search?: string;
}

export function useCategoryProductLists({
  slug,
  limit,
  categoryId,
  search,
}: CategoryProductsParamsOptions) {
  const [categoryProducts, setCategoryProducts] = useState<CategoryProductLists>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [nextPageCursor, setNextPageCursor] = useState<string | undefined>(undefined,);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadMoreRequestId = useRef(0);

  useEffect(() => {
    let cancelled: boolean = false;

    const fetchCategoryProductsBySlug = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!cancelled) {
          const response: CategoryProductListsResponse =
            await getCategoryProductsBySlug({
              slug: slug,
              limit: limit,
              categoryId: categoryId,
              search: search,
            });
          setCategoryProducts(response.data);
          setHasNextPage(response.data.meta.hasNextPage);
          setNextPageCursor(response.data.meta.nextPageCursor);
        }
      } catch (error) {
        if (!cancelled) {
          const message: string =
            error instanceof Error ? error.message : String(error);
          setError(`Failed to load products ${message}`);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchCategoryProductsBySlug();

    return () => {
      cancelled = true;
    };
  }, [slug, limit, search, categoryId]);

  /**
   * Load more products if nextPageCursorValue exists
   */
  const loadMoreCategoryProductLists = async () => {
    const requestId: number = ++loadMoreRequestId.current;

    setIsLoadingMore(true);
    setError(null);

    try {
      if (requestId === loadMoreRequestId.current) {
        const response: CategoryProductListsResponse =
          await getCategoryProductsBySlug({
            slug: slug,
            limit: limit,
            cursor: nextPageCursor,
            categoryId: categoryId,
            search: search,
          });

        setCategoryProducts((prev) =>
          prev
            ? {
                ...prev,
                products: [
                  ...prev.products,
                  ...response.data.products.filter(
                    (product) =>
                      !prev.products.some((existing) => existing.id === product.id),
                  ),
                ],
              }
            : response.data,
        );
        setHasNextPage(response.data.meta.hasNextPage);
        setNextPageCursor(response.data.meta.nextPageCursor);
      }
    } catch (error) {
      if (requestId === loadMoreRequestId.current) {
        const message: string =
          error instanceof Error ? error.message : String(error);
        setError(`Failed to load products ${message}`);
      }
    } finally {
      if (requestId === loadMoreRequestId.current) {
        setIsLoadingMore(false);
      }
    }
  };

  return {
    categoryProducts,
    isLoading,
    error,
    hasNextPage,
    isLoadingMore,
    loadMoreCategoryProductLists,
  };
}
