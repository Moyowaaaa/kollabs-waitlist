import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konecticus | Join the Waitlist",
  description:
    "Where Creative Ideas Find Their Team. Connect with writers, artists, developers, and designers to bring your ideas to life — no funding, no barriers, just collaboration.",
  keywords: [
    "collaboration",
    "creative",
    "team",
    "writers",
    "artists",
    "developers",
    "designers",
    "startup",
    "ideas",
  ],
  authors: [{ name: "Koneticus" }],
  openGraph: {
    type: "website",
    url: "https://kollabs-waitlist.vercel.app/",
    title: "Kolabs | Join the Waitlist",
    description:
      "Where Creative Ideas Find Their Team. Connect with writers, artists, developers, and designers to bring your ideas to life.",
    siteName: "Konecticus",
    images: [
      {
        url: "https://kollabs-waitlist.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Konecticus logo with the text 'Where Creative Ideas Find Their Team'",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konecticus | Join the Waitlist",
    description:
      "Where Creative Ideas Find Their Team. Connect with writers, artists, developers, and designers to bring your ideas to life.",
    images: ["https://kollabs-waitlist.vercel.app/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <Toaster position="top-center" richColors visibleToasts={1} />
      </body>
    </html>
  );
}
