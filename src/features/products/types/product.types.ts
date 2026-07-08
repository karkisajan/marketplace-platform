interface ProductVariant {
  id: string;
  sellingPrice: string;
  crossPrice: string;
  stockQuantity: number;
  variantAttributes: Record<string, unknown>;
}

interface ProductImage {
  id: string;
  imageUrl: string;
}

export interface Meta {
  hasNextPage: boolean;
  nextPageCursor: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  productVariant: ProductVariant;
  productImage: ProductImage;
}

export interface ProductListsResponse {
  success: boolean;
  message: string;
  data: Product[];
  meta: Meta;
  statusCode: string;
  timestamp: string;
}
