import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import GlobalHeader from "@/app/components/globalHeader";
import GlobalFooter from "@/app/components/globalFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Be the Fit",
  description: "Be the Fit application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalHeader/>
        {children}
        <GlobalFooter/>
      </body>
    </html>
  );
}
