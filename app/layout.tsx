import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
    default: "Department Expert - Verified University Admission Guidance by Seniors",
    template: "%s | Hostel Kit",
  },
  description:
    "Stop Guessing Your Admission. Talk to Someone Who’s Already Been There.",
  keywords: [
    "department expert",
    "department expert cuet",
    "department expert guidance",
    "de",
    "expert for university",
    "department expert allahabad university",
    "student guidance",
    "university hostel",
    "course guidance",
  ],
  metadataBase: new URL("https://departmentexpert.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Department Expert - Verified University Admission Guidance by Seniors",
    description:
      "Get real-time insights, document clarity, and personalized support from seniors who’ve already navigated your university and course",
    url: "https://departmentexpert.com",
    siteName: "Department Expert",
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
        <SpeedInsights/>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
