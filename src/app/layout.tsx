import type { Metadata } from "next";
import React from "react";
import "../styles/global.scss";
import { Albert_Sans } from "next/font/google";

const sans = Albert_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hw8",
  description: "Generated by lldan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body>{children}</body>
    </html>
  );
}
