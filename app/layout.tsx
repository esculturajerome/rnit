// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { RnitNav } from "@/components/rnit-nav";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/rnit-footer";
import { cn } from "@/lib/utils"; // Import cn

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

// --- Metadata Update ---
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Define your base URL
const siteTitle = "Romblon National Institute of Technology";
const siteDescription = "Skilling Romblon thru quality TVET Delivery for Peoples Prosperity";
const socialBanner = "/public/images/charter.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Important for resolving relative image paths
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`, // Optional: Adds site title to page titles
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: socialBanner, // Must be an absolute URL or resolvable with metadataBase
        width: 1200,       // Recommended width
        height: 630,       // Recommended height
        alt: siteTitle,
      },
    ],
    locale: 'en_US', // Optional: Specify language
    type: 'website',   // Type of content
  },
  twitter: {
    card: 'summary_large_image', // Use 'summary_large_image' for image previews
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: '/public/images/favicon.ico',
    shortcut: '/public/images/favicon-16x16.png',
    apple: '/public/images/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          playfairDisplay.variable,
          poppins.variable
        )}
      >
        <header className="bg-primary/90 flex justify-end gap-1 sm:gap-2 pr-3 lg:pr-8 py-1 wrapper__wide">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 hover:text-white px-2 sm:px-3"
            asChild
          >
            <Link href="/enrolment">
              Online Enrolment
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 hover:text-white px-2 sm:px-3"
            asChild
          >
            <Link href="/assessment">
              Online Assessment
            </Link>
          </Button>
        </header>
        <RnitNav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
