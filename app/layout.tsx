import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from './components/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuki Arikawa",
  description: "This is a personal website of Yuki Arikawa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="cupcake">
      <body className="{inter.className} w-screen h-screen">
        <Head />
        {children}
      </body>
    </html>
  );
}
