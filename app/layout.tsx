import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Providers'ı kaldırdık çünkü şu an kullanılmıyor

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty Karakterleri",
  description: "Rick and Morty karakterlerini filtreleyerek görüntüleyin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
