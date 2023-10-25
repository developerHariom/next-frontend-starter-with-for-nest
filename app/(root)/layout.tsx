
import TopBar from "@/components/Home/Navbar/TopBar";
import SearchNavbar from "@/components/Home/Navbar/SearchNavbar";
import "@/styles/globals.css";
import { Navbar } from "@/components/Home/Navbar/MainNavbar";
import Footer from "@/components/Utilities/Footer";
import { Providers } from "../providers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section>
      <div className="relative flex flex-col h-screen">
        <TopBar />
        <SearchNavbar />
        <Navbar />
        <main>

          <Providers>{children}</Providers>
        
        </main>
        <Footer />
      </div>
    </section>
  );
}
