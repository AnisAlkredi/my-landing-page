// src/app/layout.tsx

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

// ✅ تعريف metadata بشكل بسيط ومتوافق مع Next.js 15.3.3
export const metadata: Metadata = {
  title: "ALKREDI – Web & AI Solutions for Freelancers",
  description:
    "Landing Pages, Chatbots & Smart Consulting ab 490 € – für Freelancer & kleine Unternehmen in Deutschland.",
  keywords: [
    "Landing Page",
    "Webdesign",
    "Freelancer Website",
    "Chatbot",
    "Next.js",
    "KI",
    "Beratung",
    "Deutschland",
  ],
  authors: [{ name: "Anis Alkredi", url: "https://alkredi.com" }],
  creator: "Anis Alkredi",
  robots: "index, follow",
  openGraph: {
    title: "ALKREDI – Web & AI Solutions for Freelancers",
    description:
      "Individuelle Weblösungen & KI-Automatisierung für Selbstständige & kleine Unternehmen.",
    url: "https://alkredi.com",
    siteName: "ALKREDI",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
