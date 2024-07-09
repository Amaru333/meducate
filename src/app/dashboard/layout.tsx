import DashboardNavbar from "@/components/dashboardNavbar";
import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="bg-gray-100 flex flex-col flex-1">
        <div>
          <DashboardNavbar />
        </div>
        <div>
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
