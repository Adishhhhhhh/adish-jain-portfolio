import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// The real Ad Library uses Meta's proprietary "Optimistic" font. Inter is the
// closest legal match, and loading it makes the UI render identically on every
// device (no more Windows Segoe vs Mac Helvetica drift).
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // metadataBase resolves the auto-generated opengraph-image to an absolute URL.
  metadataBase: new URL("https://adish-jain.vercel.app"),
  title: {
    default: "Ad Library, Adish Jain, Creative Strategist",
    template: "%s · Adish Jain Ad Library",
  },
  description:
    "The Ad Library exists so no brand can hide its ads. Mine exists so no one has to wonder how I think. Spec work by Adish Jain, DTC creative strategist.",
  authors: [{ name: "Adish Jain", url: "mailto:adish9504@gmail.com" }],
  creator: "Adish Jain",
  openGraph: {
    type: "website",
    title: "Ad Library, Adish Jain",
    description:
      "Spec work by Adish Jain, DTC creative strategist. Every angle, every mechanism, every awareness-stage decision behind the creative.",
    siteName: "Adish Jain Ad Library",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Library, Adish Jain",
    description:
      "Spec work by Adish Jain, DTC creative strategist. The reasoning a real ad account never lets you see.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#1877F2",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <body className="min-h-[100dvh] bg-[var(--color-surface)] text-[var(--color-text-primary)]">
        {children}
        {modal}
      </body>
    </html>
  );
}
