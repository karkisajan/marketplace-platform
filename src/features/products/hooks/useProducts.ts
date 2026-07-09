import { DatePostedTypeEnum } from "@/types/enums/date-posted.enum";
import { useEffect, useState } from "react";
import { Product, ProductListsResponse } from "../types/product-lists.types";
import { getProductLists } from "../services/product.service";

interface ProductParamsOptions {
  limit?: number;
  search?: string;
  datePosted?: DatePostedTypeEnum;
  cursor?: string;
}

export function useProducts({
  limit,
  search,
  datePosted,
  cursor,
}: ProductParamsOptions) {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [nextPageCursor, setNextPageCursor] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled: boolean = false;

    const fetchProductLists = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!cancelled) {
          const response: ProductListsResponse = await getProductLists({
            limit: limit,
            cursor: cursor,
            search: search,
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
  }, [limit, search, datePosted, cursor]);

  /**
   * Fetch the loadmore products based the the next page cursor value.
   */
  const loadMoreProducts = async () => {
    try {
      const response: ProductListsResponse = await getProductLists({
        limit: limit,
        cursor: cursor,
        search: search,
        datePosted: datePosted,
      });
      setProducts((prev) => [...prev, ...response.data]);
      setHasNextPage(response.meta.hasNextPage);
      setNextPageCursor(response.meta.nextPageCursor);
    } catch (error) {
      const message: string =
        error instanceof Error ? error.message : String(error);
      setError(`Failed to fetch categories ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    products,
    isLoading,
    error,
    hasNextPage,
    nextPageCursor,
    loadMoreProducts,
  };
}
