import StoreNavbar from "@/components/layout/store-navbar";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <StoreNavbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
