import type { Metadata } from "next";
import { Alexandria, Inter } from "next/font/google";
import "./globals.css";

const arabic = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
});

const english = Inter({
  subsets: ["latin"],
  variable: "--font-english",
});

export const metadata: Metadata = {
  title: "Athkar",
  description: "Share remembrance across Discord communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${arabic.variable} ${english.variable} min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}