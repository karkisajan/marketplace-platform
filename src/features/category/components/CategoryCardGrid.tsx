import { Category } from "../types/categories.types";
import CategoryImage from "./CategoryImage";

interface CategoryCardGridProps {
  category: Category;
}
export default function CategoryCardGrid({ category }: CategoryCardGridProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white hover:border-gray-400 hover:shadow-md transition-all duration-200 cursor-pointer group text-center aspect-square">
      <div className="relative size-24 rounded-2x flex items-center justify-center text-red-500 overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-200">
        <CategoryImage
          src={category.imageUrl}
          alt={category.name}
          iconClassName="text-red-500"
        />
      </div>
      <span className="block text-base font-semibold text-gray-900 line-clamp-2 px-2 transition-colors">
        {category.name}
      </span>
    </div>
  );
}
