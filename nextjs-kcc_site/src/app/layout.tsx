import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimizes font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karen Chess Club - Strategic Excellence",
    template: "%s | Karen Chess Club" // For individual pages
  },
  description: "Join Karen Chess Club for professional chess training, tournaments, and community events. From beginners to masters, we provide the perfect environment for strategic growth in Nairobi, Kenya.",
  keywords: [
    "chess club", "chess training", "chess tournaments", "Karen", "Nairobi", 
    "Kenya", "chess lessons", "strategic thinking", "chess community", 
    "beginner chess", "advanced chess", "youth chess program"
  ],
  authors: [{ name: "Karen Chess Club" }],
  creator: "Karen Chess Club",
  publisher: "Karen Chess Club",
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karenchessclub.com", // Replace with your actual domain
    siteName: "Karen Chess Club",
    title: "Karen Chess Club - Strategic Excellence",
    description: "Join Karen Chess Club for chess training, tournaments, and community events. Strategic excellence for all skill levels.",
    images: [
      {
        url: "/logo-512.png", // Your logo for social sharing
        width: 512,
        height: 512,
        alt: "Karen Chess Club Logo",
      },
      {
        url: "/og-image.jpg", // Create a 1200x630px image for better social sharing
        width: 1200,
        height: 630,
        alt: "Karen Chess Club - Strategic Excellence",
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Karen Chess Club - Strategic Excellence",
    description: "Join Karen Chess Club for chess training, tournaments, and community events.",
    images: ["/og-image.jpg"],
    creator: "@karenchessclub", // Replace with your Twitter handle if you have one
  },
  
  // App icons and favicons
  icons: {
    icon: [
      { url: "/logo-16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo-180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "apple-touch-icon-precomposed", url: "/logo-180.png" },
    ],
  },
  
  // Manifest for PWA (optional)
  manifest: "/site.webmanifest",
  
  // Theme color for mobile browsers
  themeColor: "#f97316", // Your orange brand color
  
  // Color scheme preference
  colorScheme: "light",
  
  // Viewport (Next.js handles this, but good to be explicit)
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Robots directive
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
  
  // Verification (add when you set up Google Search Console)
  // verification: {
  //   google: "your-google-verification-code",
  // },
  
  // Category for app stores
  category: "sports",
  
  // Additional meta tags
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.sanity.io" />
        
        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "Karen Chess Club",
              "description": "Professional chess club offering training, tournaments, and community events for all skill levels",
              "sport": "Chess",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karen, Nairobi",
                "addressCountry": "Kenya"
              },
              "url": "https://karenchessclub.com", // Replace with your domain
              "logo": "https://karenchessclub.com/logo-512.png",
              "sameAs": [
                // Add your social media links when available
                // "https://facebook.com/karenchessclub",
                // "https://twitter.com/karenchessclub",
                // "https://instagram.com/karenchessclub"
              ],
              "offers": [
                {
                  "@type": "Service",
                  "name": "Beginner Chess Classes",
                  "description": "Learn chess fundamentals from basic moves to opening principles"
                },
                {
                  "@type": "Service", 
                  "name": "Advanced Chess Training",
                  "description": "Intensive coaching for competitive players and tournament preparation"
                },
                {
                  "@type": "Service",
                  "name": "Youth Chess Program", 
                  "description": "Chess education for young minds aged 6-16"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Analytics (add when needed) */}
        {/* Google Analytics */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}