import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main className="ml-9 md:ml-4 lg:ml-12 md:px-20 py-6 px-5">
        {children}
      </main>
    </div>
  );
}
