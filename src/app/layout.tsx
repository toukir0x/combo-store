import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alfashopbd | Ready-made Combos & Special Bundles",
  description:
    "Explore ready-made combo products, snacks, gadgets, and special deals with guaranteed savings at Alfashopbd.",
  keywords: ["combos", "ready-made combos", "alfashopbd", "food combos", "gadget combos", "discounts"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMockMode = !process.env.PRIVATE_API_BASE_URL;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fcfaf7] text-stone-900 font-sans selection:bg-[#e8590c] selection:text-white">
        <Navbar isMockMode={isMockMode} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
