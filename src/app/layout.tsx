import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Cormorant_Garamond } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["cyrillic"],  // Добавляем необходимое подмножество
  weight: '700'
});

export const metadata: Metadata = {
  title: "database vector",
  description: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${cormorantGaramond.variable} font-sans`}
      >
        <Navigation>{children}</Navigation>
        
      </body>
    </html>
  );
}
