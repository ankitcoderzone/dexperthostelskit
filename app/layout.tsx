import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ButtonClient from "@/components/home/ButtonClient";
import Footer from "@/components/Footer";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Department Expert | Hostel Kit",
    template: "%s | Hostel Kit",
  },
  description:
    "Department Expert by Hostel Kit helps students get verified guidance from seniors about courses, hostels, universities, and campus life.",
  keywords: [
    "department expert",
    "hostel kit",
    "hostelskit",
    "de hostel kit",
    "kit hostel",
    "hostels kit",
    "student guidance",
    "university hostel",
    "course guidance",
  ],
  metadataBase: new URL("https://departmentexpert.hostelskit.com"),

  openGraph: {
    title: "Department Expert | Hostel Kit",
    description:
      "Get honest, verified guidance from department experts at Hostel Kit. Choose the right course, hostel, and university.",
    url: "https://departmentexpert.hostelskit.com",
    siteName: "Hostel Kit",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
