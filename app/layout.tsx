import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/generals/Header";
import Footer from "../components/generals/Footer";
import { AuthProvider } from "@/components/generals/AuthProvider";

const geistSans = Geist({

  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased px-10 min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Analytics/>
        </body>
      </html>
    </AuthProvider>
  );
}
