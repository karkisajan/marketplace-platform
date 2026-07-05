export interface CategoryNode {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  children?: CategoryNode[];
}

export interface CategoryTreeResponse {
  success: boolean;
  message: string;
  data: CategoryNode[];
  statusCode: number;
  timestamp: string;
}
