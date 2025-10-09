import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karen Chess Club - Strategic Excellence",
    template: "%s | Karen Chess Club",
  },
  description:
    "Join Karen Chess Club for professional chess training, tournaments, and community events. From beginners to masters, we provide the perfect environment for strategic growth in Nairobi, Kenya.",
  keywords: [
    "chess club",
    "chess training",
    "chess tournaments",
    "Karen",
    "Nairobi",
    "Kenya",
    "chess lessons",
    "strategic thinking",
    "chess community",
    "beginner chess",
    "advanced chess",
    "youth chess program",
  ],
  authors: [{ name: "Karen Chess Club" }],
  creator: "Karen Chess Club",
  publisher: "Karen Chess Club",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karenchessclub.com",
    siteName: "Karen Chess Club",
    title: "Karen Chess Club - Strategic Excellence",
    description:
      "Join Karen Chess Club for chess training, tournaments, and community events. Strategic excellence for all skill levels.",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "Karen Chess Club Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karen Chess Club - Strategic Excellence",
    description:
      "Join Karen Chess Club for chess training, tournaments, and community events.",
    images: ["/logo.svg"],
    creator: "@karenchessclub",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "sports",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.sanity.io" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
