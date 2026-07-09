"use client";

export default function CategoriesListsGrid() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Categories</p>
      </div>

      <div className="grid grid-cols-4 gap-x-5 gap-y-10">
        {/* Categories will be mapped here */}
      </div>
    </div>
  );
}
