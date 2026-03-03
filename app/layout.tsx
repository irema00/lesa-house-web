import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lesahouse.com"),
  title: {
    default: "Lesa House | İzmir Bostanlı",
    template: "%s | Lesa House",
  },
  description:
    "Lesa House, İzmir Bostanlı’da özel anlar için tasarlanmış butik bir event house. Çok yakında.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lesahouse.com",
  },
  openGraph: {
    type: "website",
    url: "https://lesahouse.com",
    siteName: "Lesa House",
    title: "Lesa House | İzmir Bostanlı",
    description:
      "Özel anlar için tasarlanmış butik bir event house. Çok yakında.",
    locale: "tr_TR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lesa House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lesa House | İzmir Bostanlı",
    description:
      "Özel anlar için tasarlanmış butik bir event house. Çok yakında.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
