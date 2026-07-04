import type { Metadata } from "next";
import { Alexandria, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const arabic = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
});

const english = Inter({
  subsets: ["latin"],
  variable: "--font-english",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  keywords: site.keywords,

  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${arabic.variable} ${english.variable} bg-[#08111f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}