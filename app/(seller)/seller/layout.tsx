import { Providers } from "@/app/providers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <section className="h-screen bg-gray-100 ">{children}</section>;
    </Providers>
  );
}
