import { DatePostedTypeEnum } from "@/common/enums/date-filters.enum";
import { useEffect, useRef, useState } from "react";
import { Product, ProductListsResponse } from "../types/product-lists.types";
import { getProductLists } from "../services/product.service";

interface ProductParamsOptions {
  limit: number;
  search?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  datePosted?: DatePostedTypeEnum;
}

export function useProductLists({
  limit,
  search,
  categoryId,
  minPrice,
  maxPrice,
  datePosted,
}: ProductParamsOptions) {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [nextPageCursor, setNextPageCursor] = useState<string | undefined>(undefined,);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadMoreRequestId = useRef<number>(0);

  useEffect(() => {
    let cancelled: boolean = false;
    const fetchProductLists = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!cancelled) {
          const response: ProductListsResponse = await getProductLists({
            limit: limit,
            search: search,
            categoryId: categoryId,
            minPrice: minPrice,
            maxPrice: maxPrice,
            datePosted: datePosted,
          });
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
  }, [limit, search, categoryId, maxPrice, minPrice, datePosted]);

  /**
   * Loadmore products based on the nextPage cursor value
   */
  const loadMoreProducts = async () => {
    setIsLoadingMore(true);
    setError(null);

    const requestId: number = ++loadMoreRequestId.current;

    try {
      if (requestId === loadMoreRequestId.current) {
        const response: ProductListsResponse = await getProductLists({
          limit: limit,
          search: search,
          categoryId: categoryId,
          minPrice: minPrice,
          maxPrice: maxPrice,
          cursor: nextPageCursor,
          datePosted: datePosted,
        });
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
        setIsLoadingMore(false);
      }
    }
  };

  return {
    products,
    isLoading,
    isLoadingMore,
    error,
    hasNextPage,
    loadMoreProducts,
  };
}
