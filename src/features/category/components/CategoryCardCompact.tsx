import { Category } from "../types/categories.types";
import CategoryImage from "./CategoryImage";

interface CategoryCardCompactProps {
  category: Category;
}

export default function CategoryCardCompact({
  category,
}: CategoryCardCompactProps) {
  return (
    <div
      className="flex items-center gap-2 p-4 rounded-md border border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer group"
    >
      <div className="relative size-16 shrink-0 rounded-lg flex items-center justify-center text-red-500 overflow-hidden bg-gray-100">
        <CategoryImage
          src={category.imageUrl}
          alt={category.name}
          iconClassName="text-red-500"
        />
      </div>
      <div className="flex-1 min-w-5">
        <span className="block font-medium text-lg text-gray-500 truncat transition-colors">
          {category.name}
        </span>
      </div>
    </div>
  );
}
