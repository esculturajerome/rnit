// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
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

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Add weights you need
  variable: '--font-roboto', // Crucial part
});

// --- Metadata Update ---
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Define your base URL
const siteTitle = "Romblon National Institute of Technology";
const siteDescription = "Skilling Romblon thru quality TVET Delivery for People's Prosperity"; // Corrected typo
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
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(playfairDisplay.variable, roboto.variable)} // Apply font variables here
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased" // Base body styles
          // Font variables removed from here
        )}
      >
        <header className="bg-primary/90 py-1 wrapper__wide">
          <div className="wrapper flex justify-end gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/enrolment">
                Online Enrolment
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/assessment">
                Online Assessment
              </Link>
            </Button>
          </div>

        </header>
        <RnitNav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
