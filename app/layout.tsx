import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { cn } from "./utils/helper";

export const metadata: Metadata = {
  title: "Gaya MFB",
  description: "Banking Designed for Your Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background",GeistSans.className)}
      >
        {children}
      </body>
    </html>
  );
}
