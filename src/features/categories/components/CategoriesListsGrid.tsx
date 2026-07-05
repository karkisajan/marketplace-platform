import CategoryCard from "./CategoryCard";

export default function CategoriesListsGrid() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Categories</p>
      </div>

      <div>
        <CategoryCard />
      </div>
    </div>
  );
}
