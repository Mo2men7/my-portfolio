import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Navbar from "../components/Navbar";
import ReactLenis from "lenis/react";
// import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";

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
      <ReactLenis root>
        <html lang="en" className={`dark h-full antialiased`}>
          <head>
            <link rel="stylesheet" href="/view-transition.css" />
          </head>

          <body className="min-h-full flex flex-col">
            <Navbar />
            {children}
            <Toaster position="top-center" theme="dark" />
          </body>
        </html>
      </ReactLenis>
    </ViewTransitions>
  );
}
