export interface CategoryNode {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string | null;
  children?: CategoryNode[];
}

export const filterLeafNodeCategories = (categories: CategoryNode[]): CategoryNode[] => {
  const leaves: CategoryNode[] = [];

  const walk = (nodes: CategoryNode[]): void => {
    for (const node of nodes) {
      if (!node.children || node.children.length === 0) {
        leaves.push(node);
      } else {
        walk(node.children);
      }
    }
  };

  walk(categories);
  return leaves;
};
