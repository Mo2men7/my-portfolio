import { DM_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

export const aalto = localFont({
  src: "../fonts/aalto-display.otf",
  variable: "--font-aalto",
});

export const dirtyline = localFont({
  src: "../fonts/dirtyline.otf",
  variable: "--font-dirtyline",
});

export const brentasignature = localFont({
  src: "../fonts/brentasignature.otf",
  variable: "--font-brentasignature",
});

export const gebuk = localFont({
  src: "../fonts/gebuk.otf",
  variable: "--font-gebuk",
});

export const lovine = localFont({
  src: "../fonts/lovine.otf",
  variable: "--font-lovine",
});

export const thought = localFont({
  src: "../fonts/thought.otf",
  variable: "--font-thought",
});
