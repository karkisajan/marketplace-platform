interface productImage {
  id: string;
  imageUrl: string;
}

interface ProductVariant {
  id: string;
  sellingPrice: string;
  crossPrice: string;
  productImage: productImage;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  averageRatings: number;
  totalReviews: number;
  productVariant: ProductVariant;
}

export interface CategoryProduct {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  product: Product;
}

export interface Meta {
  hasNextPage: boolean;
  nextPageCursor: string;
}

export interface CategoryProductsResponse {
  success: boolean;
  message: string;
  data: CategoryProduct[];
  meta: Meta;
  statusCode: number;
  timestamp: string;
}
