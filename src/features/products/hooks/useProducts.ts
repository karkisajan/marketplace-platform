import { useEffect, useRef, useState } from "react";
import { Product, ProductListsResponse } from "../types/product-lists.types";
import { getProductLists } from "../services/product.service";
import { DatePostedTypeEnum } from "@/common/enums/date-filters.enum";

interface ProductParamsOptions {
  limit?: number;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: string;
  datePosted?: DatePostedTypeEnum;
}

export function useProducts({
  limit,
  search,
  minPrice,
  maxPrice,
  categoryId,
  datePosted,
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
        if (!cancelled) {
          const response: ProductListsResponse = await getProductLists({
            limit: limit,
            search: search,
            minPrice: minPrice,
            maxPrice: maxPrice,
            categoryId: categoryId,
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
          setError(`Failed to fetch categories ${message}`);
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
  }, [limit, search, minPrice, maxPrice, categoryId, datePosted]);

  /**
   * Fetch the loadmore products based the the next page cursor value.
   */
  const loadMoreProducts = async () => {
    const requestId: number = ++loadMoreRequestId.current;

    try {
      const response: ProductListsResponse = await getProductLists({
        limit: limit,
        cursor: nextPageCursor,
        search: search,
        categoryId: categoryId,
        datePosted: datePosted,
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
        setError(`Failed to fetch categories ${message}`);
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
    loadMoreProducts,
  };
}
