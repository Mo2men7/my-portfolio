import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Momen Helmy",
  description: "Momen Helmy - Portfolio",
  icons: {
    icon: "/favicon-for-app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`dark ${poppins.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
