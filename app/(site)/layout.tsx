"use client";

import Footer from "@/components/Site/Footer";
import Header from "@/components/Site/Header";
import Lines from "@/components/Site/Lines";
import ScrollToTop from "@/components/Site/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Roboto } from "next/font/google";
import "../globals.css";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${roboto.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
