import type { Metadata } from "next";
import { Roboto, Acme } from "next/font/google";
import "./globals.css";
import { Header } from "@/screens/HomePage/sections/Header";
import { FooterSection } from "@/screens/HomePage/sections/FooterSection";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const acme = Acme({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-acme",
});

export const metadata: Metadata = {
  title: "Anima Project",
  description: "A Next.js project with Shadcn UI library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${acme.variable} antialiased`}>
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
