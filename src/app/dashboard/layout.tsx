import DashboardNavbar from "@/components/dashboardNavbar";
import Sidebar from "@/components/sidebar";
import AuthGuard from "@/utils/AuthGuard";
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
    <AuthGuard>
      <div className="flex h-screen overflow-hidden">
        <div>
          <Sidebar />
        </div>
        <div className="bg-gray-100 flex flex-col flex-1">
          <div>
            <DashboardNavbar />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
