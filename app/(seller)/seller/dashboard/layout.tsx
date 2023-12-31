import SellerDashSIdebar from "@/components/Seller/SellerDashSIdebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen ">
      <div className="w-1/5 border">
        <SellerDashSIdebar />
      </div>

      <div className="w-4/5 bg-gray-300">
        <section className="h-screen p-10">{children}</section>
      </div>
    </div>
  );
}
