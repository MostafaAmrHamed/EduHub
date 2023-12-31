import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReduxProvider } from "@/redux/Provider";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--poppins-default",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <ReduxProvider>{children}</ReduxProvider>
        </main>
      </body>
    </html>
  );
}
