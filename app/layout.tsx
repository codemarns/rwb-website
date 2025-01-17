import { cn } from "@/app/lib/cn";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";

// Body Font
const inter = Inter({ subsets: ["latin"] });

// Heading Font
const manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-Bold.ttf",
    },
  ],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "RWB Solution International",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "bg-black",
          inter.className,
          manrope.variable,
          "antialiased"
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
