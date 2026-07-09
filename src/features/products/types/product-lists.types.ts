interface ProductImage {
  id: string;
  imageUrl: string;
}

interface ProductVariant {
  id: string;
  sellingPrice: string;
  crossPrice: string;
  stockQuantity: number;
  productImage: ProductImage;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  productVariant: ProductVariant;
}

export interface Meta {
  hasNextPage: boolean;
  nextPageCursor: string;
}

export interface ProductListsResponse {
  success: boolean;
  message: string;
  data: Product[];
  meta: Meta;
  statusCode: number;
  timestamp: string;
}
