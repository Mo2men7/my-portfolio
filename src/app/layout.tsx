import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { DM_Mono, Fraunces } from "next/font/google";

import "./globals.css";
import Navbar from "../components/Navbar";

import { aalto, dirtyline } from "../lib/fonts";

// const dmMono = DM_Mono({
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
//   variable: "--font-mono",
// });
// const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif" });

// const poppins = Poppins({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

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
      <html
        lang="en"
        className={`dark ${aalto.variable} ${dirtyline.variable} h-full antialiased`}
        // className={`dark ${dmMono.variable} ${fraunces.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          {/* <Navbar /> */}
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
