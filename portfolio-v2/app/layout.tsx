import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fathima Roshini Siyad | AI Engineer Portfolio",
  description: "AI Engineer building intelligent systems. Portfolio featuring Air Guardian, Neuro Sight, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
