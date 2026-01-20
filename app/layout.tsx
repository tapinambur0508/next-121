import type { Metadata } from "next";
import { Pacifico, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import TanstackProvider from "@/components/TanstackProvider/TanstackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "AI note system that help you keep you notes",
  keywords: ["nextjs", "react", "blog"],
};

export default function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <TanstackProvider>
          <Header />

          <div className="container mx-auto">
            {children}
            {modal}
          </div>

          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
