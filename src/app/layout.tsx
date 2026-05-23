import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";
import Navbar from "../components/Navbar";
import ReactLenis from "lenis/react";
// import { ReactLenis } from "lenis/react";

import {
  dmMono,
  poppins,
  dirtyline,
  aalto,
  brentasignature,
  gebuk,
  lovine,
  thought,
} from "@/lib/fonts";

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
        <html
          lang="en"
          className={`dark ${poppins.className} ${dmMono.variable} ${aalto.variable} ${brentasignature.variable} ${gebuk.variable} ${lovine.variable} ${thought.variable} ${dirtyline.variable} h-full antialiased`}
        >
          <head>
            <link rel="stylesheet" href="/view-transition.css" />
          </head>

          <body className="min-h-full flex flex-col">
            <Navbar />
            {children}
          </body>
        </html>
      </ReactLenis>
    </ViewTransitions>
  );
}
