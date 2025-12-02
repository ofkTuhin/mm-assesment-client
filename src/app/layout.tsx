import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/screens/HomePage/sections/Header";
import { FooterSection } from "@/screens/HomePage/sections/FooterSection";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
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
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
