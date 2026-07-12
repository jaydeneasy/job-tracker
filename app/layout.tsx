import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PM Job Dashboard",
  description: "Personal job search dashboard for PM roles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
