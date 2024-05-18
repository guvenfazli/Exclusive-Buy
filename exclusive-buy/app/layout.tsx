import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header"
import CartContext from "@/store/Cart"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-white overflow-x-hidden'}>
        <CartContext>
          <Header />
          <div className="flex">


            {children}

          </div>
        </CartContext>
      </body>
    </html>
  );
}
