import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashonz",
  description: "Online Fashion Cloth Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
          <footer className="footer footer-center p-4 bg-base-300 text-base-cntent">Copyright 2024 - All rights reserved by Fashonz from AiSoft.</footer>
          </div>
        </body>
    </html>
  );
}
