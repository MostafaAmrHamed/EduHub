import type { Metadata } from "next";
import ProgressBar from "./components/ProgressBar";

export const metadata: Metadata = {
  title: "Create Exam",
  description: "Generated by create next app",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center gap-5">
        <ProgressBar />
        {children}
      </main>
    </>
  );
}
