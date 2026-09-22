import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD NAHID KHAN | Flutter Developer & C# Backend Engineer",
  description: "Portfolio of MD NAHID KHAN — Flutter Developer, C# ASP.NET Core Backend Engineer & App Publishing Specialist. Building cross-platform mobile apps and scalable backend APIs with published apps on App Store & Google Play.",
  keywords: ["Flutter Developer", "C# Backend", "ASP.NET Core", "Mobile App Developer", "App Store", "Google Play", "Full Stack", "Nahid Khan"],
  openGraph: {
    title: "MD NAHID KHAN | Flutter Developer & C# Backend Engineer",
    description: "Building cross-platform mobile apps and scalable backend APIs. Published apps on App Store & Google Play.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen transition-colors selection:bg-brand-purple/30 selection:text-brand-cyan">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
