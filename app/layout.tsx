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
  title: "Claimify - Medical Billing & Revenue Cycle Management",
  description:
    "Streamline your medical practice's billing process with Claimify. Our expert medical billing services help healthcare providers maximize revenue and reduce administrative burden.",
  keywords: [
    "medical billing",
    "revenue cycle management",
    "medical claims",
    "healthcare billing",
    "medical practice management",
  ],
  authors: [{ name: "Claimify" }],
  openGraph: {
    title: "Claimify - Medical Billing & Revenue Cycle Management",
    description:
      "Expert medical billing services to help healthcare providers maximize revenue and reduce administrative burden.",
    type: "website",
    locale: "en_US",
    siteName: "Claimify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claimify - Medical Billing & Revenue Cycle Management",
    description: "Expert medical billing services for healthcare providers",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
