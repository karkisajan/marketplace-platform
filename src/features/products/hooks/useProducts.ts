import { useEffect, useRef, useState } from "react";
import { Product, ProductListsResponse } from "../types/product.types";
import { getProductLists } from "../services/product.service";
interface ProductParamsOptions {
  limit?: number;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
}

export function useProducts({
  limit,
  search,
  minPrice,
  maxPrice,
}: ProductParamsOptions) {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [nextPageCursor, setNextPageCursor] = useState<string | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const loadMoreRequestId = useRef<number>(0);

  useEffect(() => {
    let cancelled: boolean = false;

    const fetchProductLists = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response: ProductListsResponse = await getProductLists({
          limit,
          search,
          minPrice,
          maxPrice,
        });

        if (!cancelled) {
          setProducts(response.data);
          setHasNextPage(response.meta.hasNextPage);
          setNextPageCursor(response.meta.nextPageCursor);
        }
      } catch (error) {
        if (!cancelled) {
          const message: string =
            error instanceof Error ? error.message : String(error);
          setError(`Failed to fetch products ${message}`);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchProductLists();

    return () => {
      cancelled = true;
    };
  }, [limit, search, minPrice, maxPrice]);

  /**
   * Load more products hook function if the next page cursor value exists.
   */
  const loadMoreProductLists = async (): Promise<void> => {
    if (!hasNextPage || isLoading) return;

    setIsLoading(true);
    setError(null);
    const requestId: number = ++loadMoreRequestId.current;

    try {
      const response: ProductListsResponse = await getProductLists({
        limit: limit,
        cursor: nextPageCursor,
        search: search,
        minPrice: minPrice,
        maxPrice: maxPrice,
      });
      if (requestId === loadMoreRequestId.current) {
        setProducts((prev) => [...prev, ...response.data]);
        setHasNextPage(response.meta.hasNextPage);
        setNextPageCursor(response.meta.nextPageCursor);
      }
    } catch (error) {
      if (requestId === loadMoreRequestId.current) {
        const message: string =
          error instanceof Error ? error.message : String(error);
        setError(`Failed to fetch products ${message}`);
      }
    } finally {
      if (requestId === loadMoreRequestId.current) {
        setIsLoading(false);
      }
    }
  };

  return {
    products,
    isLoading,
    error,
    hasNextPage,
    loadMoreProductLists,
  };
}
