export interface CategoryNode {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string | null;
  children?: CategoryNode[];
}

export const findCategoryNode = (
  categories: CategoryNode[],
  predicate: (node: CategoryNode) => boolean,
): CategoryNode | null => {
  for (const node of categories) {
    if (predicate(node)) {
      return node;
    }
    if (node.children?.length) {
      const found = findCategoryNode(node.children, predicate);
      if (found) return found;
    }
  }
  return null;
};

export const filterLeafNodeCategories = (
  categories: CategoryNode[],
): CategoryNode[] => {
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

/**
 * Get only the leaf categories under a specific parent (by id or slug)
 */
export const filterLeafNodesUnderParent = (
  categories: CategoryNode[],
  parentIdOrSlug: string | undefined,
): CategoryNode[] => {
  const parentNode = findCategoryNode(
    categories,
    (node) => node.id === parentIdOrSlug || node.slug === parentIdOrSlug,
  );

  if (!parentNode) return [];

  if (!parentNode.children || parentNode.children.length === 0) {
    return [parentNode];
  }

  return filterLeafNodeCategories(parentNode.children);
};
