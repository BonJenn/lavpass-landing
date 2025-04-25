import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LavPass - Find Restrooms Near You",
  description: "LavPass is an iPhone app that allows you to find restrooms near you. It's free and easy to use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
