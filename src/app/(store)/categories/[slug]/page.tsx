import CategoryProductsGrid from "@/features/categories/components/CategoryProductsGrid";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryProductsPage({ params }: PageProps) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <CategoryProductsGrid slug={slug}/>
    </div>
  );
}
