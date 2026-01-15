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
    "konecticus",
    "waitlist",
  ],
  authors: [{ name: "Konecticus" }],
  openGraph: {
    type: "website",
    url: "https://www.koneticus.com/",
    title: "Konecticus | Join the Waitlist",
    description:
      "Where Creative Ideas Find Their Team. Connect with writers, artists, developers, and designers to bring your ideas to life.",
    siteName: "Konecticus",
    images: [
      {
        url: "https://www.koneticus.com/images/symbol-logo.png",
        width: 512,
        height: 512,
        alt: "Konecticus logo - Where Creative Ideas Find Their Team",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Konecticus | Join the Waitlist",
    description:
      "Where Creative Ideas Find Their Team. Connect with writers, artists, developers, and designers to bring your ideas to life.",
    images: ["https://www.koneticus.com/images/symbol-logo.png"],
  },
  icons: {
    icon: [
      { url: "/images/purple_logo.png", sizes: "any", type: "image/png" },
      { url: "/images/purple_logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/symbol-logo.png",
    apple: "/images/symbol-logo.png",
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
        <Toaster position="top-center" richColors visibleToasts={1} />
      </body>
    </html>
  );
}
