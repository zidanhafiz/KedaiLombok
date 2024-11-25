import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Kedai Lombok",
  description: "Menyajikan Ayam Bakar Taliwang khas Lombok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(poppins.className, "antialiased")}>
        <header>
          <Navbar />
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
