import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PropTechBuzz: Discover Global Proptech Companies, VIPs, Events & Community",
  description: "Find the best new proptech product listings, company reviews, job opportunities, and funding news. Engage with founders, developers, realtors, investors, VCs, and Real Estate Professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
