import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD NAHID KHAN | Portfolio",
  description: "Futuristic Portfolio of MD NAHID KHAN - Junior Flutter Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-white min-h-screen bg-[#060912] selection:bg-brand-purple/30 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
