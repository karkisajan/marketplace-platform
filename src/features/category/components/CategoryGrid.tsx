import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface CategoryGridProps {
  isLoading: boolean;
  error: string | null;
  className: string;
  children: React.ReactNode;
}

export default function CategoryGrid({
  isLoading,
  error,
  className,
  children,
}: CategoryGridProps) {
  if (isLoading) {
    <div className="flex items-center justify-center p-5">
      <LoadingSpinner />;
    </div>;
  }

  if (error) {
    <p className="text-center text-red-500">{error}</p>;
  }

  return <div className={className}>{children}</div>;
}
